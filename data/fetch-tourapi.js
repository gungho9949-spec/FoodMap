/**
 * 한국관광공사 TourAPI(국문 관광정보 서비스)에서 음식점(contentTypeId=39, 한식 cat3=A05020100)
 * 데이터를 지역별로 가져와 프랜차이즈를 제외하고 대표성 있는 곳을 선별한다.
 *
 * TourAPI 분류체계에는 "향토음식점"/"모범업소" 태그가 별도로 없어서(한식/서양식/일식/
 * 중식/이색음식점/카페전통찻집/클럽 6종뿐), 한식(A05020100) 카테고리 + 프랜차이즈
 * 이름 제외 필터로 대체한다. 인기순(arrange=Q)으로 가져와 대표성을 확보한다.
 *
 * 실행: TOUR_API_KEY=키 node data/fetch-tourapi.js
 */
const fs = require('fs');
const path = require('path');

const AREA_CODES = {
  전북: '37', 충남: '34', 경북: '35', 충북: '33', 강원: '32', 제주: '39',
};
const PER_REGION_FETCH = 80; // 필터링 후 20~30곳을 고르기 위해 넉넉히 가져옴
const PER_REGION_TARGET = 25;

const FRANCHISE_KEYWORDS = [
  '스타벅스', '맥도날드', '롯데리아', 'BBQ', '교촌', 'bhc', 'BHC', '이디야', '투썸',
  '파리바게뜨', '던킨', '버거킹', 'KFC', '맘스터치', '공차', '메가커피', '컴포즈커피',
  '빽다방', '뚜레쥬르', '배스킨라빈스', '서브웨이', '피자헛', '도미노피자', '미스터피자',
  '네네치킨', '굽네', 'BBQ치킨', '푸라닭', '자담치킨', '노랑통닭', '깐부치킨',
  '역전할머니맥주', '설빙', '요거트아이스크림', 'CU', 'GS25', '세븐일레븐', '이마트24',
  '아웃백', 'VIPS', '빕스', '애슐리', '한솥도시락', '본죽', '김밥천국', '김밥나라',
];

function isFranchise(title) {
  return FRANCHISE_KEYWORDS.some(k => title.includes(k));
}

async function fetchRegion(key, areaCode) {
  const url = `https://apis.data.go.kr/B551011/KorService2/areaBasedList2` +
    `?serviceKey=${key}&numOfRows=${PER_REGION_FETCH}&pageNo=1&MobileOS=ETC&MobileApp=FoodMap` +
    `&_type=json&contentTypeId=39&areaCode=${areaCode}&cat3=A05020100&arrange=Q`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  if (data.response.header.resultCode !== '0000') {
    throw new Error(`TourAPI 오류: ${data.response.header.resultMsg}`);
  }
  return data.response.body.items.item || [];
}

async function main() {
  const key = process.env.TOUR_API_KEY;
  if (!key) { console.error('TOUR_API_KEY 환경변수가 없습니다.'); process.exit(1); }

  const result = {};
  for (const [region, areaCode] of Object.entries(AREA_CODES)) {
    const items = await fetchRegion(key, areaCode);
    const filtered = items.filter(it => !isFranchise(it.title));
    const selected = filtered.slice(0, PER_REGION_TARGET);
    result[region] = selected.map(it => ({
      region,
      name: it.title,
      address: [it.addr1, it.addr2].filter(Boolean).join(' '),
      tel: it.tel || null,
      lat: parseFloat(it.mapy),
      lng: parseFloat(it.mapx),
      contentid: it.contentid,
      cat3: it.cat3,
    }));
    console.log(`${region}: 조회 ${items.length}건 -> 프랜차이즈 제외 ${filtered.length}건 -> 선별 ${selected.length}건`);
  }

  const all = Object.values(result).flat();
  fs.writeFileSync(
    path.join(__dirname, 'tourapi-candidates.json'),
    JSON.stringify(all, null, 2),
    'utf-8'
  );
  console.log(`\n전체 선별: ${all.length}건 -> data/tourapi-candidates.json 저장`);
}

main().catch(e => { console.error('실패:', e); process.exit(1); });
