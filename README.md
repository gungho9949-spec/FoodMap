# FoodMap 🍽️

유명 유튜버가 추천한 맛집을 지도 위에 표시하는 정적 웹앱.

## 기술 스택
- 순수 HTML + CSS + Vanilla JS (단일 `index.html`)
- 지도: 카카오맵 SDK (CDN)
- 배포: Vercel

## 로컬 실행
```bash
python -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

## 데이터 추가
`data/curated-food.js`에 아래 스키마로 항목 추가:
```js
{
  id: "sc-001",
  name: "식당명",
  category: "카테고리",
  address: "도로명주소",
  phone: "전화번호 or null",
  lat: 37.xxxxx,
  lng: 127.xxxxx,
  kakaoUrl: "http://place.map.kakao.com/...",
  rating: null,           // Google 평점 (없으면 null)
  reviewCount: null,
  youtuber: "채널명",
  videoTitle: "영상 제목",
  videoUrl: "https://youtube.com/watch?v=...",
  recommendNote: "추천 이유 (직접 요약, 자막 복사 금지)"
}
```

## 폴더 구조
```
foodmap/
├── index.html
└── data/
    └── curated-food.js
```
