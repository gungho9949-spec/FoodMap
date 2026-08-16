/**
 * Google Places API(New)로 각 식당의 대표 사진을 가져와 curated-food.js에
 * photoUrl 필드로 저장한다.
 *
 * - Text Search로 장소를 찾아 이름 유사도로 검증(rating-fill 스크립트와 동일 로직)
 * - 매칭된 장소의 photos[0]을 Photo Media 엔드포인트(skipHttpRedirect=true)로
 *   실제 이미지 URL(photoUri, lh3.googleusercontent.com)을 받아와 저장.
 *   API 키가 클라이언트에 노출되는 media 엔드포인트 URL 자체를 저장하지 않고,
 *   반드시 이 방식으로 "키가 필요 없는 완성된 이미지 URL"만 저장한다.
 * - 사진이 없거나 매칭 실패 시 photoUrl: null 유지 (억지로 채우지 않음)
 * - 비용이 드는 API라 배치 단위로만 실행 (--start, --count)
 *
 * 실행: GOOGLE_PLACES_KEY=키 node data/fetch-photos.js --start=0 --count=100
 */
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'curated-food.js');
const PROGRESS_FILE = path.join(__dirname, 'photo-progress.json');
const CALL_DELAY_MS = 150;
const SIMILARITY_THRESHOLD = 0.45;
const PHOTO_MAX_WIDTH = 800;

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

async function searchPlace(key, name, address, lat, lng) {
  const res = await fetch('https://places.googleapis.com/v1/places:searchText', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': key,
      'X-Goog-FieldMask': 'places.displayName,places.photos',
    },
    body: JSON.stringify({
      textQuery: `${name} ${address}`,
      languageCode: 'ko',
      locationBias: lat && lng ? { circle: { center: { latitude: lat, longitude: lng }, radius: 800 } } : undefined,
    }),
  });
  if (!res.ok) {
    const errText = await res.text().catch(() => '');
    return { error: `HTTP ${res.status} ${errText.slice(0, 150)}` };
  }
  const data = await res.json();
  return { places: data.places || [] };
}

async function fetchPhotoUri(key, photoName) {
  const url = `https://places.googleapis.com/v1/${photoName}/media?maxWidthPx=${PHOTO_MAX_WIDTH}&skipHttpRedirect=true&key=${key}`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const data = await res.json();
  return data.photoUri || null;
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
  lines.push('// certification: 유튜버 추천이 아니라 정부/공공기관 공식 인증(백년가게, 한국관광공사 등록, 착한가격업소 등)으로 등재된 경우');
  lines.push('//   복수 인증을 받은 경우 " · "로 이어붙임 (필터에서는 부분일치로 판단)');
  lines.push('// photoUrl: Google Places 대표 사진(키가 필요 없는 완성된 googleusercontent.com URL). 없으면 null');
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
    lines.push(`    photoUrl: ${jsStr(d.photoUrl)},`);
    if (d.certification) {
      lines.push(`    certification: ${jsStr(d.certification)},`);
      lines.push(`    recommendNote: ${jsStr(d.recommendNote)},`);
    }
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

  const args = Object.fromEntries(process.argv.slice(2).map(a => {
    const [k, v] = a.replace(/^--/, '').split('=');
    return [k, v];
  }));
  const start = parseInt(args.start || '0', 10);
  const count = parseInt(args.count || '100', 10);

  const data = loadData();
  // 처리 여부는 데이터 파일의 photoUrl(null/문자열)로는 구분할 수 없다 —
  // "아직 시도 안 함"과 "시도했지만 사진 없음"이 저장 후엔 똑같이 null이 되기 때문
  // (실제로 이 버그로 배치1 이후 792건이 전부 시도한 것처럼 잘못 기록된 적 있음).
  // 그래서 이미 처리된 id 목록을 별도 파일(photo-progress.json)로 추적한다.
  let processedIds = [];
  if (fs.existsSync(PROGRESS_FILE)) {
    processedIds = JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf-8'));
  }
  const processedSet = new Set(processedIds);
  const pending = data.filter(f => !processedSet.has(f.id));
  console.log(`전체 ${data.length}건 중 사진 미시도: ${pending.length}건`);

  const batch = pending.slice(start, start + count);
  console.log(`이번 배치: [${start}, ${start + batch.length}) / 전체 미시도 ${pending.length}건\n`);

  let matched = 0, noPhoto = 0, notFound = 0, errors = 0;

  for (let i = 0; i < batch.length; i++) {
    const item = batch[i];
    let outcome;
    try {
      outcome = await searchPlace(googleKey, item.name, item.address, item.lat, item.lng);
    } catch (e) {
      outcome = { error: e.message };
    }
    await sleep(CALL_DELAY_MS);

    if (outcome.error) {
      errors++;
      item.photoUrl = null;
      console.log(`[${start + i + 1}] ❌ ${item.name} - 오류: ${outcome.error}`);
      continue;
    }

    const best = outcome.places.find(p => isNameMatch(item.name, p.displayName?.text || ''));
    if (!best) {
      notFound++;
      item.photoUrl = null;
      console.log(`[${start + i + 1}] ⬜ ${item.name} - 매칭 실패`);
      continue;
    }
    if (!best.photos || !best.photos.length) {
      noPhoto++;
      item.photoUrl = null;
      console.log(`[${start + i + 1}] ⬜ ${item.name} - 매칭됐으나 사진 없음`);
      continue;
    }

    let photoUri = null;
    try {
      photoUri = await fetchPhotoUri(googleKey, best.photos[0].name);
    } catch (e) { /* ignore, treat as no photo */ }
    await sleep(CALL_DELAY_MS);

    if (photoUri) {
      item.photoUrl = photoUri;
      matched++;
      console.log(`[${start + i + 1}] ✅ ${item.name} -> 사진 확보`);
    } else {
      noPhoto++;
      item.photoUrl = null;
      console.log(`[${start + i + 1}] ⬜ ${item.name} - 사진 URL 확보 실패`);
    }
  }

  saveData(data);

  // 이번 배치에서 실제로 시도한(성공이든 실패든) 항목의 id를 진행상황 파일에 추가
  const newlyProcessed = batch.map(item => item.id);
  processedIds = processedIds.concat(newlyProcessed);
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(processedIds, null, 2), 'utf-8');

  console.log(`\n배치 완료: 사진확보 ${matched} / 매칭됐으나사진없음 ${noPhoto} / 매칭실패 ${notFound} / 오류 ${errors}`);
  console.log(`누적 처리: ${processedIds.length} / ${data.length}건`);
  console.log(`저장 완료: ${DATA_FILE}`);
}

main().catch(e => { console.error('❌ 실패:', e); process.exit(1); });
