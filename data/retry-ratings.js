/**
 * rating/reviewCount가 여전히 null인 항목을 대상으로,
 * 이름/주소를 정제한 쿼리로 재시도하는 스크립트.
 *
 * 실행: GOOGLE_PLACES_KEY=키 node data/retry-ratings.js
 *
 * 시도 순서 (하나라도 매칭되면 중단):
 *   1) 원래 이름 + 정제된 주소(구청 오탈자/깨진 시도 접두어 보정) + 좁은 반경
 *   2) 원래 이름 + 축약 주소(시/군/구까지만) + 넓은 반경
 *   3) 지점명 접미사 제거한 이름 + 축약 주소 + 넓은 반경
 * 그래도 안 되면 null 유지, 각 시도의 원인(후보없음/이름불일치)을 기록.
 */

const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'curated-food.js');
const CALL_DELAY_MS = 150;
const SIMILARITY_THRESHOLD = 0.45;

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function normalizeName(name) {
  return (name || '')
    .replace(/\([^)]*\)/g, '')
    .replace(/\s+/g, '')
    .replace(/(본점|직영점|본가|지점|점)$/g, '')
    .toLowerCase();
}
function stripBranchSuffix(name) {
  return (name || '').replace(/\s*(본점|직영점|본가|.{1,4}점)$/g, '').trim();
}
function levenshtein(a, b) {
  const m = a.length, n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;
  const dp = Array.from({ length: m + 1 }, (_, i) => [i, ...Array(n).fill(0)]);
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
    }
  }
  return dp[m][n];
}
function similarity(a, b) {
  const maxLen = Math.max(a.length, b.length);
  if (maxLen === 0) return 1;
  return 1 - levenshtein(a, b) / maxLen;
}
function includesEither(a, b) {
  if (!a || !b) return false;
  return a.includes(b) || b.includes(a);
}
function isNameMatch(a, b) {
  const na = normalizeName(a), nb = normalizeName(b);
  if (!na || !nb) return false;
  return similarity(na, nb) >= SIMILARITY_THRESHOLD || includesEither(na, nb);
}

// "전남광주통합특별시" 같은 깨진 시/도 접두어를 실제 시/도로 보정 (검색 쿼리용, 원본 데이터는 건드리지 않음)
const GWANGJU_GU = ['동구','서구','남구','북구','광산구'];
function fixAddressPrefix(address) {
  const parts = address.split(' ');
  if (parts[0] === '전남광주통합특별시') {
    parts[0] = GWANGJU_GU.includes(parts[1]) ? '광주광역시' : '전라남도';
  }
  return parts.join(' ');
}
function shortAddress(address) {
  // "시/도 시/군/구" 까지만 남기고 도로명 이하는 자름 (검색 범위를 넓히기 위함)
  const parts = fixAddressPrefix(address).split(' ');
  return parts.slice(0, 2).join(' ');
}

async function searchOnce(googleKey, textQuery, lat, lng, radius) {
  const res = await fetch('https://places.googleapis.com/v1/places:searchText', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': googleKey,
      'X-Goog-FieldMask': 'places.displayName,places.rating,places.userRatingCount',
    },
    body: JSON.stringify({
      textQuery,
      languageCode: 'ko',
      locationBias: { circle: { center: { latitude: lat, longitude: lng }, radius } },
    }),
  });
  if (!res.ok) {
    const errText = await res.text().catch(() => '');
    return { error: `HTTP ${res.status} ${errText.slice(0, 150)}` };
  }
  const data = await res.json();
  return { places: data.places || [] };
}

function pickBestMatch(name, places) {
  let best = null, bestScore = -1;
  for (const p of places) {
    const displayName = p.displayName?.text || '';
    if (!isNameMatch(name, displayName)) continue;
    const score = similarity(normalizeName(name), normalizeName(displayName));
    if (score > bestScore) { bestScore = score; best = p; }
  }
  if (!best || best.rating == null) return null;
  return { rating: best.rating, reviewCount: best.userRatingCount ?? 0 };
}

async function retryEntry(googleKey, item) {
  const attempts = [
    { label: '정제주소+좁은반경', query: `${item.name} ${fixAddressPrefix(item.address)}`, radius: 800 },
    { label: '축약주소+넓은반경', query: `${item.name} ${shortAddress(item.address)}`, radius: 3000 },
    { label: '지점명제거+축약주소', query: `${stripBranchSuffix(item.name)} ${shortAddress(item.address)}`, radius: 3000 },
  ];

  const log = [];
  for (const attempt of attempts) {
    let outcome;
    try {
      outcome = await searchOnce(googleKey, attempt.query, item.lat, item.lng, attempt.radius);
    } catch (e) {
      outcome = { error: e.message };
    }
    await sleep(CALL_DELAY_MS);

    if (outcome.error) {
      log.push(`[${attempt.label}] 오류: ${outcome.error}`);
      continue;
    }
    if (outcome.places.length === 0) {
      log.push(`[${attempt.label}] 후보없음`);
      continue;
    }
    const match = pickBestMatch(item.name, outcome.places);
    if (match) {
      log.push(`[${attempt.label}] 매칭성공: ⭐${match.rating} (${match.reviewCount}개)`);
      return { result: match, log };
    }
    const candidateNames = outcome.places.slice(0, 3).map(p => p.displayName?.text).join(', ');
    log.push(`[${attempt.label}] 후보있으나 이름불일치 (후보: ${candidateNames})`);
  }
  return { result: null, log };
}

function loadData() {
  const code = fs.readFileSync(DATA_FILE, 'utf-8');
  const sandbox = {};
  new Function('exports', code.replace('const CURATED_FOOD', 'exports.CURATED_FOOD'))(sandbox);
  return sandbox.CURATED_FOOD;
}

function esc(s) {
  if (s === null || s === undefined) return null;
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}
function jsStr(s) { return s === null || s === undefined ? 'null' : `"${esc(s)}"`; }

function saveData(data) {
  const lines = [];
  lines.push('// 유튜버 추천 맛집 데이터 (통합 스키마: youtubers 배열)');
  lines.push('// 여러 유튜버가 같은 곳을 추천한 경우 youtubers 배열에 여러 항목이 들어감');
  lines.push('');
  lines.push('const CURATED_FOOD = [');
  data.forEach((d, idx) => {
    lines.push('  {');
    lines.push(`    id: ${jsStr(d.id)},`);
    lines.push(`    name: ${jsStr(d.name)},`);
    lines.push(`    category: ${jsStr(d.category)},`);
    lines.push(`    address: ${jsStr(d.address)},`);
    lines.push(`    phone: ${jsStr(d.phone)},`);
    lines.push(`    lat: ${d.lat},`);
    lines.push(`    lng: ${d.lng},`);
    lines.push(`    kakaoUrl: ${jsStr(d.kakaoUrl)},`);
    lines.push(`    naverUrl: ${jsStr(d.naverUrl)},`);
    lines.push(`    rating: ${d.rating === null || d.rating === undefined ? 'null' : d.rating},`);
    lines.push(`    reviewCount: ${d.reviewCount === null || d.reviewCount === undefined ? 'null' : d.reviewCount},`);
    lines.push('    youtubers: [');
    d.youtubers.forEach((yt, i) => {
      const comma = i < d.youtubers.length - 1 ? ',' : '';
      lines.push('      {');
      lines.push(`        name: ${jsStr(yt.name)},`);
      lines.push(`        videoTitle: ${jsStr(yt.videoTitle)},`);
      lines.push(`        videoUrl: ${jsStr(yt.videoUrl)},`);
      lines.push(`        recommendNote: ${jsStr(yt.recommendNote)}`);
      lines.push(`      }${comma}`);
    });
    lines.push('    ]');
    const trail = idx < data.length - 1 ? ',' : '';
    lines.push(`  }${trail}`);
  });
  lines.push('];');
  lines.push('');
  fs.writeFileSync(DATA_FILE, lines.join('\n'), 'utf-8');
}

async function main() {
  const googleKey = process.env.GOOGLE_PLACES_KEY;
  if (!googleKey) { console.error('GOOGLE_PLACES_KEY 환경변수가 없습니다.'); process.exit(1); }

  const data = loadData();
  const nullItems = data.filter(f => f.rating === null || f.reviewCount === null);
  console.log(`재시도 대상: ${nullItems.length}건\n`);

  let matched = 0, stillNull = 0;
  const stillNullDetail = [];

  for (let i = 0; i < nullItems.length; i++) {
    const item = nullItems[i];
    console.log(`--- [${i + 1}/${nullItems.length}] ${item.name} ---`);
    const { result, log } = await retryEntry(googleKey, item);
    log.forEach(l => console.log('  ' + l));

    if (result) {
      item.rating = result.rating;
      item.reviewCount = result.reviewCount;
      matched++;
      console.log(`  ✅ 최종 매칭: ⭐${result.rating} (${result.reviewCount}개)\n`);
    } else {
      stillNull++;
      stillNullDetail.push({ name: item.name, address: item.address, log });
      console.log(`  ⬜ 여전히 매칭 실패\n`);
    }
  }

  saveData(data);
  console.log(`\n재시도 완료: 매칭 ${matched} / 여전히 null ${stillNull}`);
  fs.writeFileSync(
    path.join(__dirname, '..', '_retry-still-null.json'),
    JSON.stringify(stillNullDetail, null, 2),
    'utf-8'
  );
  console.log('여전히 null인 항목 상세: _retry-still-null.json 에 저장');
}

main().catch(e => { console.error('실패:', e); process.exit(1); });
