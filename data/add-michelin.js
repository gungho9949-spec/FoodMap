/**
 * 미쉐린 가이드 코리아 "빕 구르망"(Bib Gourmand) 선정 식당(data/michelin-candidates.json,
 * 웹 검색으로 찾은 공식 발표/보도 기사에서 상호명+지역만 팩트로 추출한 것 — 좌표는
 * 원본에 없어서 미포함)을 Kakao Local API로 지오코딩해 curated-food.js에 추가한다.
 *
 * - "상호명 + 지역명"으로 Kakao 검색 → 결과 목록 전체에서 이름이 맞는 첫 후보를 채택
 *   (1위 결과를 무조건 쓰지 않음 — 짧은 이름이 엉뚱한 장소와 매칭되는 걸 방지)
 * - 좌표 50m 이내에 기존 데이터가 있으면 병합(certification 필드만 추가,
 *   이미 다른 인증이 있으면 " · "로 이어붙임), 없으면 신규 추가
 * - recommendNote는 원문 기사를 그대로 옮기지 않고 짧게 재작성한 문구만 사용
 *
 * 실행: KAKAO_REST_KEY=키 node data/add-michelin.js
 */
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'curated-food.js');
const CANDIDATES_FILE = path.join(__dirname, 'michelin-candidates.json');
const CALL_DELAY_MS = 200;
const MERGE_RADIUS_M = 50;

const CERT_TEXT = '미쉐린 가이드 빕 구르망';
const DEFAULT_NOTE = '미쉐린 가이드 빕 구르망에 선정된 곳.';

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
  return similarity(na, nb) >= 0.45 || includesEither(na, nb);
}
function haversine(lat1, lng1, lat2, lng2) {
  const R = 6371000;
  const toRad = d => d * Math.PI / 180;
  const dLat = toRad(lat2 - lat1), dLng = toRad(lng2 - lng1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.asin(Math.sqrt(a));
}

async function searchKakao(key, query) {
  const res = await fetch(
    `https://dapi.kakao.com/v2/local/search/keyword.json?query=${encodeURIComponent(query)}`,
    { headers: { Authorization: `KakaoAK ${key}` } }
  );
  if (!res.ok) return { error: `HTTP ${res.status}` };
  const data = await res.json();
  return { docs: data.documents || [] };
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
  lines.push('// certification: 유튜버 추천이 아니라 정부/공공기관 공식 인증(백년가게, 한국관광공사 등록, 착한가격업소,');
  lines.push('//   미쉐린 가이드 빕 구르망 등)으로 등재된 경우 — 복수 인증을 받은 경우 " · "로 이어붙임(필터에서는 부분일치로 판단)');
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
  const kakaoKey = process.env.KAKAO_REST_KEY;
  if (!kakaoKey) { console.error('KAKAO_REST_KEY 환경변수가 없습니다.'); process.exit(1); }

  const candidates = JSON.parse(fs.readFileSync(CANDIDATES_FILE, 'utf-8'));
  const data = loadData();
  let nextSeq = 1;
  while (data.some(d => d.id === `mch-${String(nextSeq).padStart(3, '0')}`)) nextSeq++;

  let added = 0, merged = 0, notFound = 0;
  const addedList = [], mergedList = [], notFoundList = [];

  for (let i = 0; i < candidates.length; i++) {
    const c = candidates[i];
    const query = `${c.name} 서울 ${c.region}`;
    let result;
    try {
      result = await searchKakao(kakaoKey, query);
    } catch (e) {
      result = { error: e.message };
    }
    await sleep(CALL_DELAY_MS);

    if (result.error || !result.docs || result.docs.length === 0) {
      notFound++;
      notFoundList.push(`${c.name}(${c.region}) - 검색 결과 없음`);
      console.log(`⬜ [${c.region}] ${c.name} - 검색 결과 없음`);
      continue;
    }

    const best = result.docs.find(d => isNameMatch(c.name, d.place_name));
    if (!best) {
      notFound++;
      notFoundList.push(`${c.name}(${c.region}) - 이름이 맞는 후보 없음(1위: ${result.docs[0].place_name})`);
      console.log(`⬜ [${c.region}] ${c.name} - 이름이 맞는 후보 없음 (1위 결과: "${result.docs[0].place_name}")`);
      continue;
    }

    const lat = parseFloat(best.y);
    const lng = parseFloat(best.x);
    const kakaoUrl = best.place_url;
    const note = c.note && c.note.trim() ? c.note.trim() : DEFAULT_NOTE;

    // 좌표 50m 이내라도 이름이 다른 별개 업체일 수 있음(서울 시내는 건물/상가 하나에도
    // 여러 식당이 모여 있는 경우가 흔함) — 반드시 이름 유사도도 함께 통과해야 병합.
    // 실제로 이 안전장치 없이 1차 실행했을 때 "니시무라멘"이 근처의 무관한 "소이연남"에
    // 잘못 병합되는 등 오탐이 여러 건 발생해 추가함.
    const near = data.find(d => haversine(lat, lng, d.lat, d.lng) <= MERGE_RADIUS_M && isNameMatch(c.name, d.name));
    if (near) {
      if (near.certification) {
        if (!near.certification.includes(CERT_TEXT)) near.certification += ` · ${CERT_TEXT}`;
      } else {
        near.certification = CERT_TEXT;
        near.recommendNote = near.recommendNote || note;
      }
      merged++;
      mergedList.push(`${c.name} -> 기존 "${near.name}"(${near.id})에 병합`);
      console.log(`🔗 [${c.region}] ${c.name} - 기존 "${near.name}"와 50m 이내, 병합`);
      continue;
    }

    const newEntry = {
      id: `mch-${String(nextSeq++).padStart(3, '0')}`,
      name: c.name,
      category: (best.category_name || '').split(' > ').pop() || '기타',
      address: best.road_address_name || best.address_name,
      phone: (best.phone && best.phone.trim()) || null,
      lat, lng,
      kakaoUrl,
      naverUrl: `https://map.naver.com/p/search/${encodeURIComponent(c.name + ' ' + (best.road_address_name || best.address_name))}`,
      rating: null,
      reviewCount: null,
      photoUrl: null,
      certification: CERT_TEXT,
      recommendNote: note,
      youtubers: [],
    };
    data.push(newEntry);
    added++;
    addedList.push(`${newEntry.id} ${c.name} (${c.region})`);
    console.log(`✅ [${c.region}] ${c.name} -> ${lat.toFixed(5)},${lng.toFixed(5)}`);
  }

  saveData(data);

  console.log(`\n=== 결과 ===`);
  console.log(`신규 추가: ${added} / 병합: ${merged} / 검색실패: ${notFound} / 전체 대상: ${candidates.length}`);
  if (mergedList.length) { console.log('\n병합 목록:'); mergedList.forEach(m => console.log(' -', m)); }
  if (notFoundList.length) { console.log('\n검색 실패 목록:'); notFoundList.forEach(n => console.log(' -', n)); }
}

main().catch(e => { console.error('실패:', e); process.exit(1); });
