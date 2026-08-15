/**
 * curated-food.js에서 rating/reviewCount가 null인 항목에
 * Google Places Text Search(New) API로 평점을 채우는 배치 스크립트.
 *
 * 실행:
 *   GOOGLE_PLACES_KEY=키 node data/fill-ratings.js --start=0 --count=100
 *
 * "식당명 + 주소"로 textQuery 검색 후, 이름 유사도로 결과를 검증해서
 * 매칭되면 rating/reviewCount를 채우고, 아니면 null 유지.
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

async function fetchGooglePlaceRating(googleKey, name, address, lat, lng) {
  const res = await fetch('https://places.googleapis.com/v1/places:searchText', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': googleKey,
      'X-Goog-FieldMask': 'places.displayName,places.rating,places.userRatingCount',
    },
    body: JSON.stringify({
      textQuery: `${name} ${address}`,
      languageCode: 'ko',
      locationBias: {
        circle: { center: { latitude: lat, longitude: lng }, radius: 500 },
      },
    }),
  });
  if (!res.ok) {
    const errText = await res.text().catch(() => '');
    return { error: `HTTP ${res.status} ${errText.slice(0, 150)}` };
  }
  const data = await res.json();
  const candidates = data.places || [];

  let best = null, bestScore = -1;
  for (const p of candidates) {
    const displayName = p.displayName?.text || '';
    if (!isNameMatch(name, displayName)) continue;
    const score = similarity(normalizeName(name), normalizeName(displayName));
    if (score > bestScore) { bestScore = score; best = p; }
  }
  if (!best || best.rating == null) return { result: null };
  return { result: { rating: best.rating, reviewCount: best.userRatingCount ?? 0 } };
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
  if (!googleKey) { console.error('❌ GOOGLE_PLACES_KEY 환경변수가 없습니다.'); process.exit(1); }

  const args = Object.fromEntries(process.argv.slice(2).map(a => {
    const [k, v] = a.replace(/^--/, '').split('=');
    return [k, v];
  }));
  const start = parseInt(args.start || '0', 10);
  const count = parseInt(args.count || '100', 10);

  const data = loadData();
  const needRating = data.filter(f => f.rating === null || f.reviewCount === null);
  console.log(`전체 ${data.length}건 중 rating null: ${needRating.length}건`);

  const batch = needRating.slice(start, start + count);
  console.log(`이번 배치: [${start}, ${start + batch.length}) / 전체 null ${needRating.length}건`);

  let matched = 0, unmatched = 0, errors = 0;

  for (let i = 0; i < batch.length; i++) {
    const item = batch[i];
    let outcome;
    try {
      outcome = await fetchGooglePlaceRating(googleKey, item.name, item.address, item.lat, item.lng);
    } catch (e) {
      outcome = { error: e.message };
    }
    await sleep(CALL_DELAY_MS);

    if (outcome.error) {
      errors++;
      console.log(`[${start + i + 1}] ❌ ${item.name} - 오류: ${outcome.error}`);
    } else if (outcome.result) {
      item.rating = outcome.result.rating;
      item.reviewCount = outcome.result.reviewCount;
      matched++;
      console.log(`[${start + i + 1}] ✅ ${item.name} - ⭐${outcome.result.rating} (${outcome.result.reviewCount}개)`);
    } else {
      unmatched++;
      console.log(`[${start + i + 1}] ⬜ ${item.name} - 매칭 없음`);
    }
  }

  saveData(data);
  console.log(`\n배치 완료: 매칭 ${matched} / 미매칭 ${unmatched} / 오류 ${errors}`);
  console.log(`저장 완료: ${DATA_FILE}`);
}

main().catch(e => { console.error('❌ 실패:', e); process.exit(1); });
