// 유튜버 추천 맛집 데이터
// 스키마: id, name, category, address, phone, lat, lng, kakaoUrl,
//         rating, reviewCount, youtuber, videoTitle, videoUrl, recommendNote
// MVP 더미 데이터 (실제 데이터로 교체 예정)

const CURATED_FOOD = [
  {
    id: "sc-001",
    name: "광화문 국밥",
    category: "국밥",
    address: "서울 종로구 새문안로 92",
    phone: "02-720-1234",
    lat: 37.5720,
    lng: 126.9765,
    kakaoUrl: "http://place.map.kakao.com/",
    rating: null,
    reviewCount: null,
    youtuber: "성시경의 먹을텐데",
    videoTitle: "서울 도심에서 찾은 진국 순대국밥",
    videoUrl: "https://www.youtube.com/watch?v=dummyid001",
    recommendNote: "오래된 단골집 특유의 진하고 구수한 국물이 인상적이라며 직접 만드는 순대와 푸짐한 내장이 가성비까지 갖췄다고 했다. 꼭 다시 가고 싶다는 말로 마무리할 정도로 애정이 깊은 집이었다."
  },
  {
    id: "sc-002",
    name: "광장시장 빈대떡 명가",
    category: "전·빈대떡",
    address: "서울 종로구 창경궁로 88",
    phone: null,
    lat: 37.5699,
    lng: 127.0089,
    kakaoUrl: "http://place.map.kakao.com/",
    rating: null,
    reviewCount: null,
    youtuber: "성시경의 먹을텐데",
    videoTitle: "광장시장 빈대떡 골목 탐방",
    videoUrl: "https://www.youtube.com/watch?v=dummyid002",
    recommendNote: "녹두 빈대떡의 바삭한 겉면과 고소한 속재료 조화를 극찬했다. 막걸리 한 잔과 곁들이면 최고라는 현장 감상을 전하며, 서울 전통 시장 음식 중 빠질 수 없는 선택지라고 소개했다."
  },
  {
    id: "sc-003",
    name: "통인시장 기름떡볶이",
    category: "분식",
    address: "서울 종로구 자하문로15길 18",
    phone: null,
    lat: 37.5791,
    lng: 126.9697,
    kakaoUrl: "http://place.map.kakao.com/",
    rating: null,
    reviewCount: null,
    youtuber: "성시경의 먹을텐데",
    videoTitle: "통인시장 도시락 카페와 기름떡볶이",
    videoUrl: "https://www.youtube.com/watch?v=dummyid003",
    recommendNote: "간장 베이스의 기름떡볶이가 매운 것을 못 먹는 사람도 즐길 수 있는 옛날 맛이라고 했다. 시장 특유의 정겨움 속에서 먹는 즐거움이 배가된다며 경복궁 나들이와 함께 묶으면 완벽하다고 추천했다."
  },
  {
    id: "sc-004",
    name: "마포 갈치조림 원조집",
    category: "한식",
    address: "서울 마포구 마포대로 109",
    phone: "02-713-5678",
    lat: 37.5541,
    lng: 126.9254,
    kakaoUrl: "http://place.map.kakao.com/",
    rating: null,
    reviewCount: null,
    youtuber: "성시경의 먹을텐데",
    videoTitle: "마포에서 먹는 진짜 갈치조림",
    videoUrl: "https://www.youtube.com/watch?v=dummyid004",
    recommendNote: "칼칼하고 깊은 양념이 갈치살에 깊이 배어 밥을 두 공기씩 먹게 만든다고 했다. 반찬 구성이 알차고 정갈하다는 점을 특히 칭찬하며 마포 방문 시 꼭 들러야 할 집으로 꼽았다."
  },
  {
    id: "sc-005",
    name: "합정 평양냉면",
    category: "냉면",
    address: "서울 마포구 합정동 461-1",
    phone: "02-332-9876",
    lat: 37.5499,
    lng: 126.9149,
    kakaoUrl: "http://place.map.kakao.com/",
    rating: null,
    reviewCount: null,
    youtuber: "성시경의 먹을텐데",
    videoTitle: "합정에서 발견한 담백한 평양냉면",
    videoUrl: "https://www.youtube.com/watch?v=dummyid005",
    recommendNote: "육수의 맑고 깊은 감칠맛을 인공 조미료 없이 이런 국물이 나온다는 게 놀랍다고 표현했다. 면의 탄력도 좋아 냉면 마니아에게 강력 추천한다고 마무리했으며, 홍어무침과 함께 먹는 조합을 제안했다."
  }
];
