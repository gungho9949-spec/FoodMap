/**
 * 행정안전부_착한가격업소 현황(data.go.kr)에서 선별한 42곳(data/chakhan-candidates.json,
 * 좌표는 원본 CSV에 없어서 미포함)을 Kakao Local API로 지오코딩해 curated-food.js에 추가한다.
 *
 * - "상호명 + 지역명"으로 Kakao 검색 → 좌표/kakaoUrl/도로명주소 확보
 *   (검색 실패 시 억지로 채우지 않고 unmatched로 남김)
 * - 기존 데이터와 kakaoUrl이 정확히 같으면 병합(certification 필드만 추가,
 *   이미 다른 인증이 있으면 " · "로 이어붙임)
 * - 착한가격 메뉴/가격 정보가 있으면 recommendNote에 반영
 *
 * 실행: KAKAO_REST_KEY=키 node data/add-chakhan.js
 */
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'curated-food.js');
const CANDIDATES_FILE = path.join(__dirname, 'chakhan-candidates.json');
const CALL_DELAY_MS = 200;

const CERT_TEXT = '착한가격업소(행정안전부)';

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

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
  lines.push('// certification: 유튜버 추천이 아니라 정부/공공기관 공식 인증(백년가게, 한국관광공사 등록, 착한가격업소 등)으로 등재된 경우');
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

function buildRecommendNote(c) {
  if (c.menu1 && c.price1) {
    const price = Number(c.price1).toLocaleString();
    return `착한가격업소로 지정된 곳, 대표메뉴 ${c.menu1} ${price}원`;
  }
  return '행정안전부·지방자치단체가 지정한 착한가격업소입니다.';
}

async function main() {
  const kakaoKey = process.env.KAKAO_REST_KEY;
  if (!kakaoKey) { console.error('KAKAO_REST_KEY 환경변수가 없습니다.'); process.exit(1); }

  const candidates = JSON.parse(fs.readFileSync(CANDIDATES_FILE, 'utf-8'));
  const data = loadData();
  let nextSeq = 1;
  while (data.some(d => d.id === `chk-${String(nextSeq).padStart(3, '0')}`)) nextSeq++;

  let added = 0, merged = 0, notFound = 0;
  const addedByRegion = {};
  const mergedList = [];
  const notFoundList = [];

  for (let i = 0; i < candidates.length; i++) {
    const c = candidates[i];
    const searchName = c.name.replace(/\([^)]*\)/g, '').trim() || c.name;
    const query = `${searchName} ${c.region}`;
    let result;
    try {
      result = await searchKakao(kakaoKey, query);
    } catch (e) {
      result = { error: e.message };
    }
    await sleep(CALL_DELAY_MS);

    if (result.error || !result.docs || result.docs.length === 0) {
      notFound++;
      notFoundList.push(`${c.region} ${c.name}`);
      console.log(`⬜ [${c.region}] ${c.name} - 검색 실패`);
      continue;
    }

    const best = result.docs[0];
    const lat = parseFloat(best.y);
    const lng = parseFloat(best.x);
    const kakaoUrl = best.place_url;

    const near = data.find(d => d.kakaoUrl && d.kakaoUrl === kakaoUrl);
    const note = buildRecommendNote(c);
    if (near) {
      if (near.certification) {
        if (!near.certification.includes(CERT_TEXT)) near.certification += ` · ${CERT_TEXT}`;
      } else {
        near.certification = CERT_TEXT;
        near.recommendNote = near.recommendNote || note;
      }
      merged++;
      mergedList.push(`${c.name} -> 기존 "${near.name}"에 병합 (kakaoUrl 동일)`);
      console.log(`🔗 [${c.region}] ${c.name} - 기존 "${near.name}"와 동일 장소, 병합`);
      continue;
    }

    const newEntry = {
      id: `chk-${String(nextSeq++).padStart(3, '0')}`,
      name: c.name,
      category: c.category,
      address: best.road_address_name || best.address_name || c.address,
      phone: c.phone || (best.phone && best.phone.trim()) || null,
      lat, lng,
      kakaoUrl,
      naverUrl: `https://map.naver.com/p/search/${encodeURIComponent(c.name + ' ' + (best.road_address_name || best.address_name || c.address))}`,
      rating: null,
      reviewCount: null,
      certification: CERT_TEXT,
      recommendNote: note,
      youtubers: [],
    };
    data.push(newEntry);
    added++;
    addedByRegion[c.region] = (addedByRegion[c.region] || 0) + 1;
    console.log(`✅ [${c.region}] ${c.name} -> ⭐${lat.toFixed(5)},${lng.toFixed(5)}`);
  }

  saveData(data);

  console.log(`\n=== 결과 ===`);
  console.log(`추가: ${added} / 병합: ${merged} / 검색실패: ${notFound} / 전체 대상: ${candidates.length}`);
  console.log('지역별 추가 건수:', addedByRegion);
  if (mergedList.length) { console.log('\n병합 목록:'); mergedList.forEach(m => console.log(' -', m)); }
  if (notFoundList.length) { console.log('\n검색 실패 목록:'); notFoundList.forEach(n => console.log(' -', n)); }
}

main().catch(e => { console.error('실패:', e); process.exit(1); });
