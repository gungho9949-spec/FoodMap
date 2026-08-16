/**
 * data.go.kr "소상공인시장진흥공단_전국 백년가게 지정리스트 현황 정보"에서
 * 선별한 47곳(data/baekyeongage-candidates.json)을 Kakao Local API로
 * 지오코딩해서 curated-food.js에 추가한다.
 *
 * - "상호명 + 지역명"으로 Kakao 키워드 검색 → 좌표(lat/lng)/kakaoUrl/전화번호 확보
 * - 기존 항목과 좌표 50m 이내로 겹치면 새 항목을 만들지 않고 기존 항목에
 *   certification 필드만 병합 (kakaoUrl이 같은 장소인지의 기준)
 * - 겹치지 않으면 새 항목 추가. youtubers는 빈 배열, 대신 certification/
 *   recommendNote를 최상위 필드로 둠 (실제 유튜버 추천이 아니므로)
 *
 * 실행: KAKAO_REST_KEY=키 node data/add-baekyeongage.js
 */
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'curated-food.js');
const CANDIDATES_FILE = path.join(__dirname, 'baekyeongage-candidates.json');
const CALL_DELAY_MS = 200;
const MERGE_RADIUS_M = 50;

const CERT_TEXT = '백년가게(중소벤처기업부 공식 인증)';
const CERT_NOTE = '오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.';

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
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    return { error: `HTTP ${res.status} ${text.slice(0, 150)}` };
  }
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
  lines.push('// certification: 유튜버 추천이 아니라 정부/공공기관 공식 인증(예: 백년가게)으로 등재된 경우');
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

  let added = 0, merged = 0, notFound = 0;
  const addedByRegion = {};
  const mergedList = [];
  const notFoundList = [];

  for (let i = 0; i < candidates.length; i++) {
    const c = candidates[i];
    const query = `${c.name} ${c.region}`;
    let result;
    try {
      result = await searchKakao(kakaoKey, query);
    } catch (e) {
      result = { error: e.message };
    }
    await sleep(CALL_DELAY_MS);

    if (result.error || !result.docs || result.docs.length === 0) {
      notFound++;
      notFoundList.push(c.name);
      console.log(`⬜ [${c.region}] ${c.name} - 검색 실패`);
      continue;
    }

    const best = result.docs[0];
    const lat = parseFloat(best.y);
    const lng = parseFloat(best.x);
    const kakaoUrl = best.place_url;
    const phone = best.phone && best.phone.trim() ? best.phone : null;
    const categoryLeaf = (best.category_name || '').split('>').pop().trim() || '한식';

    // 기존 데이터와 50m 이내 겹치는지 확인
    const near = data.find(d => d.lat && d.lng && haversineM(lat, lng, d.lat, d.lng) <= MERGE_RADIUS_M);
    if (near) {
      near.certification = CERT_TEXT;
      near.recommendNote = near.recommendNote || CERT_NOTE;
      merged++;
      mergedList.push(`${c.name} -> 기존 "${near.name}"에 병합`);
      console.log(`🔗 [${c.region}] ${c.name} - 기존 "${near.name}"와 50m 이내, 병합`);
      continue;
    }

    const newEntry = {
      id: `bng-${String(nextSeq++).padStart(3, '0')}`,
      name: c.name,
      category: categoryLeaf,
      address: best.address_name || c.address,
      phone,
      lat, lng,
      kakaoUrl,
      naverUrl: `https://map.naver.com/p/search/${encodeURIComponent(c.name + ' ' + (best.address_name || c.address))}`,
      rating: null,
      reviewCount: null,
      certification: CERT_TEXT,
      recommendNote: CERT_NOTE,
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
