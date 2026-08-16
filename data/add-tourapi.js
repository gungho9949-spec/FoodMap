/**
 * data/tourapi-candidates.json(150곳, TourAPI에서 좌표까지 확보된 상태)을
 * curated-food.js에 추가한다.
 *
 * - 좌표는 TourAPI가 준 값(mapx/mapy)을 그대로 쓰고 Kakao로 재검증하지 않음
 * - kakaoUrl 확보 + 기존 데이터 병합 체크를 위해서만 Kakao Local API로
 *   "상호명 + 지역"을 검색함. 결과가 TourAPI 좌표에서 2km 넘게 떨어져 있으면
 *   동명이인/다른 지점으로 보고 kakaoUrl은 비워둠(억지로 채우지 않음)
 * - 기존 데이터와 kakaoUrl이 정확히 같으면 병합(certification 필드만 추가,
 *   이미 다른 인증이 있으면 " · "로 이어붙임). 다르면 신규 항목 추가.
 *
 * 실행: TOUR_API_KEY=(이미 다 받아온 후라 불필요) KAKAO_REST_KEY=키 node data/add-tourapi.js
 */
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'curated-food.js');
const CANDIDATES_FILE = path.join(__dirname, 'tourapi-candidates.json');
const CALL_DELAY_MS = 200;
const SANITY_RADIUS_M = 2000; // Kakao 검색 결과가 TourAPI 좌표에서 이만큼 넘게 떨어지면 다른 지점으로 판단

const CERT_TEXT = '한국관광공사 등록 음식점';
const CERT_NOTE = '한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.';

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function haversineM(lat1, lng1, lat2, lng2) {
  const R = 6371000;
  const toRad = d => d * Math.PI / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a = Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
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
  lines.push('// certification: 유튜버 추천이 아니라 정부/공공기관 공식 인증(백년가게, 한국관광공사 등록 등)으로 등재된 경우');
  lines.push('//   복수 인증을 받은 경우 " · "로 이어붙임 (필터에서는 부분일치로 판단)');
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
  while (data.some(d => d.id === `tap-${String(nextSeq).padStart(3, '0')}`)) nextSeq++;

  let added = 0, merged = 0, noKakaoUrl = 0;
  const addedByRegion = {};
  const mergedList = [];

  for (let i = 0; i < candidates.length; i++) {
    const c = candidates[i];
    // TourAPI 제목에 붙은 "[백년가게]" 같은 표시는 실제 상호명이 아니므로 제거
    const cleanName = c.name.replace(/^\[[^\]]*\]\s*/, '').trim();
    // Kakao 검색 쿼리에 괄호가 섞이면 0건이 반환되는 경우가 있어(실측: "이름(부가정보)"
    // 형태에서 발생) 검색용으로는 괄호와 그 안 내용을 뺀 버전을 사용한다.
    const searchName = cleanName.replace(/\([^)]*\)/g, '').trim() || cleanName;

    const query = `${searchName} ${c.region}`;
    let result;
    try {
      result = await searchKakao(kakaoKey, query);
    } catch (e) {
      result = { error: e.message };
    }
    await sleep(CALL_DELAY_MS);

    let kakaoUrl = null;
    if (result.docs && result.docs.length > 0) {
      const best = result.docs[0];
      const dist = haversineM(c.lat, c.lng, parseFloat(best.y), parseFloat(best.x));
      if (dist <= SANITY_RADIUS_M) {
        kakaoUrl = best.place_url;
      }
    }
    if (!kakaoUrl) noKakaoUrl++;

    // 기존 데이터와 병합 여부 판단: kakaoUrl이 있고, 그게 기존 항목과 정확히 같으면 병합
    const near = kakaoUrl ? data.find(d => d.kakaoUrl && d.kakaoUrl === kakaoUrl) : null;
    if (near) {
      if (near.certification) {
        if (!near.certification.includes(CERT_TEXT)) {
          near.certification += ` · ${CERT_TEXT}`;
        }
      } else {
        near.certification = CERT_TEXT;
        near.recommendNote = near.recommendNote || CERT_NOTE;
      }
      merged++;
      mergedList.push(`${cleanName} -> 기존 "${near.name}"에 병합 (kakaoUrl 동일)`);
      console.log(`🔗 [${c.region}] ${cleanName} - 기존 "${near.name}"와 동일 장소, 병합`);
      continue;
    }

    const newEntry = {
      id: `tap-${String(nextSeq++).padStart(3, '0')}`,
      name: cleanName,
      category: '한식',
      address: c.address,
      phone: c.tel || null,
      lat: c.lat,
      lng: c.lng,
      kakaoUrl,
      naverUrl: `https://map.naver.com/p/search/${encodeURIComponent(cleanName + ' ' + c.address)}`,
      rating: null,
      reviewCount: null,
      certification: CERT_TEXT,
      recommendNote: CERT_NOTE,
      youtubers: [],
    };
    data.push(newEntry);
    added++;
    addedByRegion[c.region] = (addedByRegion[c.region] || 0) + 1;
    console.log(`✅ [${c.region}] ${cleanName}${kakaoUrl ? '' : ' (kakaoUrl 없음)'}`);
  }

  saveData(data);

  console.log(`\n=== 결과 ===`);
  console.log(`추가: ${added} / 병합: ${merged} / kakaoUrl 못 찾음: ${noKakaoUrl} / 전체 대상: ${candidates.length}`);
  console.log('지역별 추가 건수:', addedByRegion);
  if (mergedList.length) { console.log('\n병합 목록:'); mergedList.forEach(m => console.log(' -', m)); }
}

main().catch(e => { console.error('실패:', e); process.exit(1); });
