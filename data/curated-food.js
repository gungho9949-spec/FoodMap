// 유튜버 추천 맛집 데이터 (통합 스키마: youtubers 배열)
// 여러 유튜버가 같은 곳을 추천한 경우 youtubers 배열에 여러 항목이 들어감
// certification: 유튜버 추천이 아니라 정부/공공기관 공식 인증(백년가게, 한국관광공사 등록, 착한가격업소 등)으로 등재된 경우
//   복수 인증을 받은 경우 " · "로 이어붙임 (필터에서는 부분일치로 판단)
// photoUrl: Google Places 대표 사진(키가 필요 없는 완성된 googleusercontent.com URL). 없으면 null

const CURATED_FOOD = [
  {
    id: "jjy-001",
    name: "스시린 신불당본점",
    category: "초밥,롤",
    address: "충남 천안시 서북구 불당31길 32",
    phone: "041-565-6655",
    lat: 36.8099894722105,
    lng: 127.105840141939,
    kakaoUrl: "http://place.map.kakao.com/376240132",
    naverUrl: "https://map.naver.com/p/search/%EC%8A%A4%EC%8B%9C%EB%A6%B0%20%EC%8B%A0%EB%B6%88%EB%8B%B9%EB%B3%B8%EC%A0%90%20%EC%B6%A9%EB%82%A8%20%EC%B2%9C%EC%95%88%EC%8B%9C%20%EC%84%9C%EB%B6%81%EA%B5%AC%20%EB%B6%88%EB%8B%B931%EA%B8%B8%2032",
    rating: 3.8,
    reviewCount: 510,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDBSXr8lbDOQOVRP8T24PFPTD420naTGim4mXap5YOHR0D1_hB1_N3R6T8YfmD9mibRJvVFk5BNcJc-3Z3nd_-OaixoYF9lDbkLkax5PlW8yql4T5ZPZgDRKKgzplpK9YDuqDG-4xsfkj_oKg=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양 팬 커뮤니티 지도 '쯔동여지도'에서 처음 방문해도 실패 없는 인기 TOP5 맛집으로 꼽힌 초밥 전문점."
      }
    ]
  },
  {
    id: "jjy-002",
    name: "한잔의추억",
    category: "호프,요리주점",
    address: "서울 강남구 논현로175길 68",
    phone: "02-541-0969",
    lat: 37.52400834370954,
    lng: 127.02334917546781,
    kakaoUrl: "http://place.map.kakao.com/12250697",
    naverUrl: "https://map.naver.com/p/search/%ED%95%9C%EC%9E%94%EC%9D%98%EC%B6%94%EC%96%B5%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EB%85%BC%ED%98%84%EB%A1%9C175%EA%B8%B8%2068",
    rating: 3.9,
    reviewCount: 1809,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCq4C2ye_fss9MY3-rAQTJlN8mMxT5kLpaFd3V9sxfds2zQhailXu7o4jIK4hmlb-R4NATGXv8qk4gYUSvyC4AcvtKHf5Fh8OmUQAMcZ3QYW9eTBNjoxAcbcTMKIgFdeao2OZD7e-lvKIGniet7i3pDYw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔동여지도에서 '한추'라는 애칭으로 불리며 인기 TOP5에 오른 강남 논현동의 요리주점."
      }
    ]
  },
  {
    id: "jjy-003",
    name: "영화장",
    category: "중국요리",
    address: "서울 동대문구 휘경로 3-8",
    phone: "02-967-9595",
    lat: 37.59657922820571,
    lng: 127.06094341092403,
    kakaoUrl: "http://place.map.kakao.com/9316895",
    naverUrl: "https://map.naver.com/p/search/%EC%98%81%ED%99%94%EC%9E%A5%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC%20%ED%9C%98%EA%B2%BD%EB%A1%9C%203-8",
    rating: 4.1,
    reviewCount: 344,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDxVF5JazDpcS8V2_LqOYh7XEVN8Znib1gtdC872q26xzooAuw8-GXZCVyKqngXvR9yFzzLBcvl5UfzyImenqe7BatPrsotmux956GmDtweTTWnVWtL0KcPsWLXFeiFIss4kj-8QI4k4ZSJf8Nko6xq4A=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "75년 역사의 중식집..여기 진짜 맛있습니다👍이문동 영화장 짜장면 짬뽕 탕수육 먹방",
        videoUrl: "https://www.youtube.com/watch?v=GeRkd99WZbU",
        recommendNote: "쯔동여지도 인기 TOP5에 오른 동대문구의 중식당."
      }
    ]
  },
  {
    id: "jjy-004",
    name: "피양옥",
    category: "냉면",
    address: "서울 강남구 압구정로36길 7",
    phone: "02-545-9311",
    lat: 37.5280519032178,
    lng: 127.031676947565,
    kakaoUrl: "http://place.map.kakao.com/1480779674",
    naverUrl: "https://map.naver.com/p/search/%ED%94%BC%EC%96%91%EC%98%A5%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%95%95%EA%B5%AC%EC%A0%95%EB%A1%9C36%EA%B8%B8%207",
    rating: 4.4,
    reviewCount: 123,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBypX5RJDMChZDucmk_6iSLLLqpmFFtYD84_DB6skGcLnDGKgWLKKPMhsSTjSQUw9_9g_JX66KKw7sHY6WsQbasBMoNJDTqtGTihtyG2sDGiud4xMIUxI6SAvz4mzhxR6MuKXFqchwfuEEUs1ioCbERjg=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "압구정에 위치한 냉면 전문점으로, 쯔동여지도 인기 TOP5 맛집으로 꼽혔다."
      }
    ]
  },
  {
    id: "jjy-005",
    name: "호수집 원조닭꼬치",
    category: "닭요리",
    address: "서울 중구 청파로 443",
    phone: "02-392-0695",
    lat: 37.5590607950843,
    lng: 126.968681156219,
    kakaoUrl: "http://place.map.kakao.com/27276847",
    naverUrl: "https://map.naver.com/p/search/%ED%98%B8%EC%88%98%EC%A7%91%20%EC%9B%90%EC%A1%B0%EB%8B%AD%EA%BC%AC%EC%B9%98%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EC%B2%AD%ED%8C%8C%EB%A1%9C%20443",
    rating: 4.1,
    reviewCount: 992,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAKlQd5ieXPzeS9-jxoYJ9jLDfgUjEJPvEaqwIB3JNo-kMTlobd1n78XApfQe1pFSLRS6lH3TrbuWYTgCHhDzA8yuDzbkDwmaJK3DWG-BQM-_B7m9Che4G3vxdLjxaQa4QPTNkT0Z3mBM4bfw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "서울로7017 인근에 위치한 닭요리 전문점으로, 팬들 사이에서 대표 방문 맛집으로 회자된다."
      },
      {
        name: "최자로드",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "서울역 인근의 닭꼬치·닭도리탕 맛집으로 웨이팅이 많은 곳으로 소개됐다."
      }
    ]
  },
  {
    id: "jjy-006",
    name: "백만불식품",
    category: "육류,고기",
    address: "서울 중구 을지로 186-12",
    phone: "070-8987-6787",
    lat: 37.5660260408054,
    lng: 126.998668893112,
    kakaoUrl: "http://place.map.kakao.com/530101305",
    naverUrl: "https://map.naver.com/p/search/%EB%B0%B1%EB%A7%8C%EB%B6%88%EC%8B%9D%ED%92%88%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EC%9D%84%EC%A7%80%EB%A1%9C%20186-12",
    rating: 4.2,
    reviewCount: 136,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjACnWorYHaVhgjzN1EBvINbLNCF5f5Tc8hlqPCPu_DfuS1yxFUZCN3SBfVLCB8ORjvi8JRZ-ZlOQLGUgMyWGzKEYpDtwuBJLjGL1tMAWDqGyd6R9ELZRiryOvUaQGx8lfzPKaGLfo16GMUURMU=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "가맥집에서 먹는 짜파게티! 을지로 백만불식품 먹방",
        videoUrl: "https://www.youtube.com/watch?v=M8whof-__nY",
        recommendNote: "을지로 노포 상권을 대표하는 고기 맛집으로 알려졌다."
      }
    ]
  },
  {
    id: "jjy-007",
    name: "또래끼리",
    category: "한식",
    address: "서울 광진구 군자로 103",
    phone: "02-469-6684",
    lat: 37.5524084392817,
    lng: 127.071359690762,
    kakaoUrl: "http://place.map.kakao.com/19183006",
    naverUrl: "https://map.naver.com/p/search/%EB%98%90%EB%9E%98%EB%81%BC%EB%A6%AC%20%EC%84%9C%EC%9A%B8%20%EA%B4%91%EC%A7%84%EA%B5%AC%20%EA%B5%B0%EC%9E%90%EB%A1%9C%20103",
    rating: 4.1,
    reviewCount: 97,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD8-514xMZOSAfb78ql_MuDU7UOUINIXi660B9biuycp1dbBH9ZIZX2ry6pniLkpDKr2WhrKvi39pQwaiXsL0ASeHU8BY0_bmDtOdpsbctDbyi3QoreG1ItEIR6CEzcB1KBLaLumV4X1i9F=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "세종대 후문 인근에 위치한 김치볶음밥 전문점으로 알려졌다."
      }
    ]
  },
  {
    id: "jjy-008",
    name: "1500회전초밥",
    category: "초밥,롤",
    address: "대전 동구 동서대로1695번길 43",
    phone: "042-633-1345",
    lat: 36.3513707543074,
    lng: 127.436720169101,
    kakaoUrl: "http://place.map.kakao.com/524565876",
    naverUrl: "https://map.naver.com/p/search/1500%ED%9A%8C%EC%A0%84%EC%B4%88%EB%B0%A5%20%EB%8C%80%EC%A0%84%20%EB%8F%99%EA%B5%AC%20%EB%8F%99%EC%84%9C%EB%8C%80%EB%A1%9C1695%EB%B2%88%EA%B8%B8%2043",
    rating: 4,
    reviewCount: 16,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCQ8pqlfAwYT04M6Fc7MbtyzyMmF0gixu-8R3rFeIExkuPsXHSB0UJf48dSorOHeT9etuO5EjdHNAnMLgRaks_5U2GCFfKQRJLoATcQ2Q_SnoOD-d8ZQKDHiT-eYsm64lyJJ-5nsbDcnEHpKA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      }
    ]
  },
  {
    id: "jjy-009",
    name: "153수냉면",
    category: "냉면",
    address: "서울 강서구 공항대로 14",
    phone: "02-2661-7495",
    lat: 37.561328298727126,
    lng: 126.80873340116742,
    kakaoUrl: "http://place.map.kakao.com/21330187",
    naverUrl: "https://map.naver.com/p/search/153%EC%88%98%EB%83%89%EB%A9%B4%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EC%84%9C%EA%B5%AC%20%EA%B3%B5%ED%95%AD%EB%8C%80%EB%A1%9C%2014",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-010",
    name: "500원부침개",
    category: "한식",
    address: "서울 동대문구 전농로 147",
    phone: null,
    lat: 37.57787647959876,
    lng: 127.05722968252738,
    kakaoUrl: "http://place.map.kakao.com/1838820758",
    naverUrl: "https://map.naver.com/p/search/500%EC%9B%90%EB%B6%80%EC%B9%A8%EA%B0%9C%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EC%A0%84%EB%86%8D%EB%A1%9C%20147",
    rating: 4.6,
    reviewCount: 43,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBZO5L1yI1phOshp8er3qSaxYuWL6CX8qV3NRfRNAvZFHkIuHKhMnOlTIRoTXXhxjacIGEgzZdLPB5J6G_qaG-Cr8hxR2YdUpLi1fzAsYTd2-56Q1q7Wnv0t91bmp8X5ApfzQKA2TaZdGp0IGhkBxNv4A=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-011",
    name: "61호명태전",
    category: "한식",
    address: "전남광주통합특별시 순천시 장평로 60",
    phone: null,
    lat: 34.945620437689385,
    lng: 127.49523411383207,
    kakaoUrl: "http://place.map.kakao.com/21552691",
    naverUrl: "https://map.naver.com/p/search/61%ED%98%B8%EB%AA%85%ED%83%9C%EC%A0%84%20%EC%A0%84%EB%82%A8%EA%B4%91%EC%A3%BC%ED%86%B5%ED%95%A9%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%88%9C%EC%B2%9C%EC%8B%9C%20%EC%9E%A5%ED%8F%89%EB%A1%9C%2060",
    rating: 4.1,
    reviewCount: 7,
    photoUrl: null,
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-012",
    name: "APM떡볶이",
    category: "떡볶이",
    address: "충북 청주시 상당구 상당로59번길 31",
    phone: "043-256-5671",
    lat: 36.63355213050472,
    lng: 127.48887871371484,
    kakaoUrl: "http://place.map.kakao.com/21346744",
    naverUrl: "https://map.naver.com/p/search/APM%EB%96%A1%EB%B3%B6%EC%9D%B4%20%EC%B6%A9%EB%B6%81%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%EC%83%81%EB%8B%B9%EA%B5%AC%20%EC%83%81%EB%8B%B9%EB%A1%9C59%EB%B2%88%EA%B8%B8%2031",
    rating: 3.8,
    reviewCount: 537,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD6CBeUGtGO5A2m2FkrDBeUpmU3svQVDeePhpU8QNC7x5zIIdVyZrzckd8HnRCH_pJxXMjyZbzXQZRnHmyIfSvgHooUBEA_ZTLA4dowe6a7hmYvhyOZfpPeNxcFw29x_I-7piYF0tLJ4EPptYB--BJ0UQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "청주사람은 다안다는 3대째 내려온 떡볶이집?!😳 50년 전통 apm떡볶이 먹방",
        videoUrl: "https://www.youtube.com/watch?v=waeLgP8c0cA",
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-013",
    name: "BBQ 빌리지 송리단길점",
    category: "BBQ",
    address: "서울 송파구 석촌호수로 284",
    phone: "02-2203-8292",
    lat: 37.510854252512566,
    lng: 127.10715207964112,
    kakaoUrl: "http://place.map.kakao.com/1403631289",
    naverUrl: "https://map.naver.com/p/search/BBQ%20%EB%B9%8C%EB%A6%AC%EC%A7%80%20%EC%86%A1%EB%A6%AC%EB%8B%A8%EA%B8%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%86%A1%ED%8C%8C%EA%B5%AC%20%EC%84%9D%EC%B4%8C%ED%98%B8%EC%88%98%EB%A1%9C%20284",
    rating: 4.2,
    reviewCount: 246,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD66QzfcizwZhXQt1L7b46S58DDzvbGlMLoHpaEjAeMa2I2aNpPXgZDJLOX_cF89aQ5ttB9ADL8suOJNUOSpfocQPAp8NggnwgZqwOQDiEULmeUpXzfQZwmS1fDbRAmX7-fSHn95orWkZ4abceYu_pVlg=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 치킨 전문점."
      }
    ]
  },
  {
    id: "jjy-014",
    name: "BHC치킨 석촌점",
    category: "BHC치킨",
    address: "서울 송파구 석촌호수로18길 27",
    phone: "02-412-9211",
    lat: 37.504652804993356,
    lng: 127.10187178381963,
    kakaoUrl: "http://place.map.kakao.com/11505752",
    naverUrl: "https://map.naver.com/p/search/BHC%EC%B9%98%ED%82%A8%20%EC%84%9D%EC%B4%8C%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%86%A1%ED%8C%8C%EA%B5%AC%20%EC%84%9D%EC%B4%8C%ED%98%B8%EC%88%98%EB%A1%9C18%EA%B8%B8%2027",
    rating: 4,
    reviewCount: 49,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjC0dz0BxnM4-U_C3Cxy0p109Pu1lzFldrUbWKnOmpHuKGBZwu6Deup6q1IWhr320jnU8E_-mgLvOCt3HE9e7WTWS6zYiE1N5iZxyLmy5XEZgr4eCilEJWSZxqsur-7Xp3vetCcakgtwhEAEEA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 치킨 전문점."
      }
    ]
  },
  {
    id: "jjy-015",
    name: "CU 평창낙천대점",
    category: "CU",
    address: "서울 종로구 평창문화로 140",
    phone: null,
    lat: 37.60888191002574,
    lng: 126.97541249710868,
    kakaoUrl: "http://place.map.kakao.com/129438233",
    naverUrl: "https://map.naver.com/p/search/CU%20%ED%8F%89%EC%B0%BD%EB%82%99%EC%B2%9C%EB%8C%80%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%A2%85%EB%A1%9C%EA%B5%AC%20%ED%8F%89%EC%B0%BD%EB%AC%B8%ED%99%94%EB%A1%9C%20140",
    rating: 1,
    reviewCount: 1,
    photoUrl: null,
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-016",
    name: "저스트스테이크",
    category: "스테이크,립",
    address: "서울 강남구 언주로152길 11-7",
    phone: "02-544-9357",
    lat: 37.5231316686112,
    lng: 127.03440343069,
    kakaoUrl: "http://place.map.kakao.com/8079815",
    naverUrl: "https://map.naver.com/p/search/%EC%A0%80%EC%8A%A4%ED%8A%B8%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%81%AC%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%96%B8%EC%A3%BC%EB%A1%9C152%EA%B8%B8%2011-7",
    rating: 4.3,
    reviewCount: 549,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDx6T6u2nJCODJZsuXjkLMbkwXWh7MF9dTUXKe0dV5nVNKKgCdOVn9g_XKb4AHdBy4Nts8jYNwN1_KJx0F4dXoh_3L97rFFYhYTDuP12FDWoNGokWPLxmr7IqKKAZ8X5uTgXJ2yYzZa9v5H9Q=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "서울 3대 스테이크?! 얼굴만한 티본스테이크😳 저스트 스테이크 2.4kg먹방",
        videoUrl: "https://www.youtube.com/watch?v=CHvhhACncY8",
        recommendNote: "쯔양이 방문해 리뷰한 양식 맛집."
      }
    ]
  },
  {
    id: "jjy-017",
    name: "모트 32 서울",
    category: "중국요리",
    address: "서울 서초구 신반포로 176",
    phone: "02-6282-0320",
    lat: 37.50324245415351,
    lng: 127.00358509602569,
    kakaoUrl: "http://place.map.kakao.com/1744813047",
    naverUrl: "https://map.naver.com/p/search/%EB%AA%A8%ED%8A%B8%2032%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EC%8B%A0%EB%B0%98%ED%8F%AC%EB%A1%9C%20176",
    rating: 4.3,
    reviewCount: 151,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCctTWliZBPmyt0kaF8qdBFF2cljvYa5kkYR92rJGb3Aq9U7Qzj1IvuHkJkXfIIvmhyGAVXW8OA5r7aINCVFwrOydr7KauGxr5fw7B36CySY6AgRzJhQKMNbis6h_f-4nmAZaqM0n0rIs19noFy86GU=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-018",
    name: "가막새",
    category: "술집",
    address: "서울 서대문구 연세로7안길 54",
    phone: "02-326-2227",
    lat: 37.5586284413841,
    lng: 126.934003549254,
    kakaoUrl: "http://place.map.kakao.com/8734699",
    naverUrl: "https://map.naver.com/p/search/%EA%B0%80%EB%A7%89%EC%83%88%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EC%97%B0%EC%84%B8%EB%A1%9C7%EC%95%88%EA%B8%B8%2054",
    rating: 4.3,
    reviewCount: 78,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjC1RtccVJyM3L3HM3JPnyFO9SRZFwjhS-NFGvMZLjEViQM5lbhI00O-zJtFKI0uaAKvyXf-OJAsDUYptu_3-Srqeit0Il8-FBjfSclhJYwNoG47dNYxv080jib7eJdDazP-rYXxuTm6BFzuW2z_kx-f=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-019",
    name: "가양칼국수",
    category: "한식",
    address: "서울 영등포구 국제금융로 86",
    phone: "0507-1399-0438",
    lat: 37.52020584896475,
    lng: 126.93179988990671,
    kakaoUrl: "http://place.map.kakao.com/20746242",
    naverUrl: "https://map.naver.com/p/search/%EA%B0%80%EC%96%91%EC%B9%BC%EA%B5%AD%EC%88%98%20%EC%84%9C%EC%9A%B8%20%EC%98%81%EB%93%B1%ED%8F%AC%EA%B5%AC%20%EA%B5%AD%EC%A0%9C%EA%B8%88%EC%9C%B5%EB%A1%9C%2086",
    rating: 4.3,
    reviewCount: 1453,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjA0LD_18UR9GEwIKxsYUP4wYOAcLXQRyFa8msEu_vTkn3GE1Dc-P0sc0m2xoMcXw3n7AbSFFDWpvHJsV-Oib3fm0kuSo-tOayNeC2SSjmMnwFOAQlkJq9qUYpigK-Q5sjyGRGtPfVY1T_xe9NtGDWApnw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 찜·탕 맛집."
      },
      {
        name: "또간집(풍자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "여의도 맛집으로 소개됐으며, 버섯매운탕을 곁들인 가양칼국수가 또갈집으로 선정됐다."
      }
    ]
  },
  {
    id: "jjy-020",
    name: "파리바게뜨 가평휴게소 춘천방향점",
    category: "파리바게뜨",
    address: "경기 가평군 설악면 미사리로540번길 51",
    phone: "031-584-1426",
    lat: 37.701926970265625,
    lng: 127.54679528632819,
    kakaoUrl: "http://place.map.kakao.com/494870660",
    naverUrl: "https://map.naver.com/p/search/%ED%8C%8C%EB%A6%AC%EB%B0%94%EA%B2%8C%EB%9C%A8%20%EA%B0%80%ED%8F%89%ED%9C%B4%EA%B2%8C%EC%86%8C%20%EC%B6%98%EC%B2%9C%EB%B0%A9%ED%96%A5%EC%A0%90%20%EA%B2%BD%EA%B8%B0%20%EA%B0%80%ED%8F%89%EA%B5%B0%20%EC%84%A4%EC%95%85%EB%A9%B4%20%EB%AF%B8%EC%82%AC%EB%A6%AC%EB%A1%9C540%EB%B2%88%EA%B8%B8%2051",
    rating: 4.4,
    reviewCount: 20,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAxSjE3rTtvJrior6GEu9RLYl2f5hTj2AZl5EqrCEe27vU7PsrbV0YNcLuoHLDFXL3KVlb2uDK2pnKmGsm_8I1B6XhCL-qDN19MQ0rkouxmLiXByBmxWe111B5aMqMMYtsZdhgIgKnlfH9b=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-021",
    name: "감미옥",
    category: "한식",
    address: "서울 서초구 신반포로23길 30",
    phone: "02-537-4422",
    lat: 37.5088971582088,
    lng: 127.003732400403,
    kakaoUrl: "http://place.map.kakao.com/8725439",
    naverUrl: "https://map.naver.com/p/search/%EA%B0%90%EB%AF%B8%EC%98%A5%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EC%8B%A0%EB%B0%98%ED%8F%AC%EB%A1%9C23%EA%B8%B8%2030",
    rating: 2.9,
    reviewCount: 18,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCnvS_QfHwlxklFCMJNxjKjuZtnrb3EJ_KC20OsiRE80QWa_LuQudlIC4NyGhdKKy-scHzQnFjx9uLSy93niX-ThI8PqSUlkgkwButDsUgvdB_xVBhYo6cXbR_IoiNrjElsqS5OorJw4DScrg=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-022",
    name: "강릉교동짬뽕 교대점",
    category: "중국요리",
    address: "서울 서초구 서초대로54길 24",
    phone: "02-588-3552",
    lat: 37.4931789925648,
    lng: 127.015948709508,
    kakaoUrl: "http://place.map.kakao.com/27470378",
    naverUrl: "https://map.naver.com/p/search/%EA%B0%95%EB%A6%89%EA%B5%90%EB%8F%99%EC%A7%AC%EB%BD%95%20%EA%B5%90%EB%8C%80%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EC%84%9C%EC%B4%88%EB%8C%80%EB%A1%9C54%EA%B8%B8%2024",
    rating: 4,
    reviewCount: 168,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjChm_L3IovwBeBrJz3QUcWnbJbrV4UKLWYPll_6sxLiQecgOFHqdzpoLdeu51FmsHAgAyvmuBkfkeYoo3AUvsh12YYv0zzMZmhQQewn0fxPnrlwGO0NCyRRBnYizOpK3jpiuziZDoP1-YHIZdI=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-023",
    name: "개천식당",
    category: "분식",
    address: "대전 동구 대전로779번길 39-2",
    phone: "042-256-1003",
    lat: 36.32856259924816,
    lng: 127.43160003292918,
    kakaoUrl: "http://place.map.kakao.com/11051453",
    naverUrl: "https://map.naver.com/p/search/%EA%B0%9C%EC%B2%9C%EC%8B%9D%EB%8B%B9%20%EB%8C%80%EC%A0%84%20%EB%8F%99%EA%B5%AC%20%EB%8C%80%EC%A0%84%EB%A1%9C779%EB%B2%88%EA%B8%B8%2039-2",
    rating: 3.8,
    reviewCount: 700,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD1DLBsasEVQ_snPdJQyatacnxKSaL3YBS9wiFQzbyHPd7cAdG5SLgrgtaB1ofN9wQ1DHb5QbJVONMqS3jaueaHP_b2UDlIHWooc4BG6eYm3xqxv5MDAAZzLWOuV8wWIm0dyntOyiDwk-we=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "한도 무제한카드로 시장털기🤣 70년 전통 만두와 시장 떡볶이 먹방",
        videoUrl: "https://www.youtube.com/watch?v=xRyaIyl8quc",
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-024",
    name: "개화식당",
    category: "중국요리",
    address: "경기 평택시 통복시장로6번길 2",
    phone: "031-655-2225",
    lat: 36.99568970617554,
    lng: 127.0851637903361,
    kakaoUrl: "http://place.map.kakao.com/11039136",
    naverUrl: "https://map.naver.com/p/search/%EA%B0%9C%ED%99%94%EC%8B%9D%EB%8B%B9%20%EA%B2%BD%EA%B8%B0%20%ED%8F%89%ED%83%9D%EC%8B%9C%20%ED%86%B5%EB%B3%B5%EC%8B%9C%EC%9E%A5%EB%A1%9C6%EB%B2%88%EA%B8%B8%202",
    rating: 3.9,
    reviewCount: 499,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDLDU52DPFSiasjbNGs2NrqnB3W1eRchXuVYYYC243hKvlF_gsXO7ba9Y6AuX27rluWrXsKzpXEkAFFLXeO6sQ-51vUGvmAWHhEdYyrVtS0JxekH0yt4EJNCSNlih3C0nuqonkCK71niBv6RXte1tikqg=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-026",
    name: "경주축산농협 축산물프라자",
    category: "육류,고기",
    address: "경북 경주시 외동읍 산업로 2157",
    phone: "054-741-1735",
    lat: 35.70576965727441,
    lng: 129.32655029188032,
    kakaoUrl: "http://place.map.kakao.com/2029330312",
    naverUrl: "https://map.naver.com/p/search/%EA%B2%BD%EC%A3%BC%EC%B6%95%EC%82%B0%EB%86%8D%ED%98%91%20%EC%B6%95%EC%82%B0%EB%AC%BC%ED%94%84%EB%9D%BC%EC%9E%90%20%EA%B2%BD%EB%B6%81%20%EA%B2%BD%EC%A3%BC%EC%8B%9C%20%EC%99%B8%EB%8F%99%EC%9D%8D%20%EC%82%B0%EC%97%85%EB%A1%9C%202157",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-027",
    name: "고고s빨간오뎅 길동점",
    category: "분식",
    address: "서울 강동구 양재대로116길 42",
    phone: "010-8391-0728",
    lat: 37.53812242774234,
    lng: 127.14268759452968,
    kakaoUrl: "http://place.map.kakao.com/27405754",
    naverUrl: "https://map.naver.com/p/search/%EA%B3%A0%EA%B3%A0s%EB%B9%A8%EA%B0%84%EC%98%A4%EB%8E%85%20%EA%B8%B8%EB%8F%99%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%8F%99%EA%B5%AC%20%EC%96%91%EC%9E%AC%EB%8C%80%EB%A1%9C116%EA%B8%B8%2042",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDzTGJ1kYeYY7uxT1Gt0UHCuOThQc7JlW7FOcElLwzfjGsRef_GqCN4ek88FZ9oew6w6hf_M45KgBNFz1ENf8NtKoLeOPU4vyRVOTrrq2t9vZwdyxhhcG_g9UKiCfD9w6obsmCPM90_wdfc0f8=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-028",
    name: "고기랑",
    category: "한식",
    address: "경기 수원시 팔달구 권광로196번길 49",
    phone: "031-221-6780",
    lat: 37.2645161980618,
    lng: 127.03589982423,
    kakaoUrl: "http://place.map.kakao.com/1285128655",
    naverUrl: "https://map.naver.com/p/search/%EA%B3%A0%EA%B8%B0%EB%9E%91%20%EA%B2%BD%EA%B8%B0%20%EC%88%98%EC%9B%90%EC%8B%9C%20%ED%8C%94%EB%8B%AC%EA%B5%AC%20%EA%B6%8C%EA%B4%91%EB%A1%9C196%EB%B2%88%EA%B8%B8%2049",
    rating: 4,
    reviewCount: 344,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCl-vu8NmpN8wXM10BvKHOLu9fo3tkNltuUEodF-FE3_2Aw9OAo7FXfT3vpfM55Hrjl6XjVu9Toh8c4-uRVeGCmfT3yzbxYZpocDI1AlKpAunW55nvfkjV-MM3foYMWvgMa_F7EB-P5bS3XlSBD5Ds-6Q=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "여기 소고기랑 무생채가 미쳤어요..🥺 쯔양팀 회식장소에서 소갈비 20인분 먹방",
        videoUrl: "https://www.youtube.com/watch?v=iig0YSPArE0",
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-029",
    name: "고동경양 문래본점",
    category: "양식",
    address: "서울 영등포구 경인로72길 4",
    phone: "02-2671-7123",
    lat: 37.510626516116666,
    lng: 126.89209722472836,
    kakaoUrl: "http://place.map.kakao.com/1475914998",
    naverUrl: "https://map.naver.com/p/search/%EA%B3%A0%EB%8F%99%EA%B2%BD%EC%96%91%20%EB%AC%B8%EB%9E%98%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%98%81%EB%93%B1%ED%8F%AC%EA%B5%AC%20%EA%B2%BD%EC%9D%B8%EB%A1%9C72%EA%B8%B8%204",
    rating: 4.4,
    reviewCount: 177,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAHOO9-u8TY6jKf3WYrJIHmTTdOEg3Ozo4bVrJ5ND5je0Y7njb9CS-Oh9OJ0714kk3pv6O4TZkQNtMp7GuWBOhrwu0bfl_4V4L71KuLvbWgsNjNtM6ijLp2Rwe9aNUPHcv_FdlS5aVEpOKm=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 양식 맛집."
      }
    ]
  },
  {
    id: "jjy-030",
    name: "고든램지버거 롯데월드몰",
    category: "햄버거",
    address: "서울 송파구 올림픽로 300",
    phone: "02-3213-4797",
    lat: 37.51318389394473,
    lng: 127.10143094023256,
    kakaoUrl: "http://place.map.kakao.com/356763550",
    naverUrl: "https://map.naver.com/p/search/%EA%B3%A0%EB%93%A0%EB%9E%A8%EC%A7%80%EB%B2%84%EA%B1%B0%20%EB%A1%AF%EB%8D%B0%EC%9B%94%EB%93%9C%EB%AA%B0%20%EC%84%9C%EC%9A%B8%20%EC%86%A1%ED%8C%8C%EA%B5%AC%20%EC%98%AC%EB%A6%BC%ED%94%BD%EB%A1%9C%20300",
    rating: 4.2,
    reviewCount: 1231,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBNeP9jJP5D_aJvyybLu6oo8syQRtNzI8AWh3STmtEbNDXUXk2CLBQGTU7EXVrWMcbMgY7kBp3-9jWTuvrmPlee1474BdeW51KkaH0b3c5FXbROUut0kbnaJMCGIW2Xd8nclR8YWTZb-SuOxA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 양식 맛집."
      }
    ]
  },
  {
    id: "jjy-031",
    name: "고추장구이",
    category: "육류,고기",
    address: "서울 강동구 상암로 86",
    phone: "02-473-9291",
    lat: 37.547953651407255,
    lng: 127.13226148499598,
    kakaoUrl: "http://place.map.kakao.com/16678373",
    naverUrl: "https://map.naver.com/p/search/%EA%B3%A0%EC%B6%94%EC%9E%A5%EA%B5%AC%EC%9D%B4%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%8F%99%EA%B5%AC%20%EC%83%81%EC%95%94%EB%A1%9C%2086",
    rating: 4.3,
    reviewCount: 189,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjADFgwvVeof72bPTYnvbxLWQ5eNpUV_-Vs9Jv0dq68to9fttukEXIyHai4zKffx22JPOa2ipIt0CNhI34L4eAZIUs-NB0oNAUhDKgyg1m-xYfgYRuSjRkgO3GctKFuEWPeFpD6lCS-6HAC9ssI=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "못먹는다에 만원 거셨어요👊🏻 암사 숨은맛집 고추장구이 먹방",
        videoUrl: "https://www.youtube.com/watch?v=UOTXMMGvXUk",
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-032",
    name: "고향손칼국수",
    category: "칼국수",
    address: "경기 고양시 일산서구 중앙로 1371",
    phone: "031-914-9866",
    lat: 37.66687281115239,
    lng: 126.76630300840841,
    kakaoUrl: "http://place.map.kakao.com/21479267",
    naverUrl: "https://map.naver.com/p/search/%EA%B3%A0%ED%96%A5%EC%86%90%EC%B9%BC%EA%B5%AD%EC%88%98%20%EA%B2%BD%EA%B8%B0%20%EA%B3%A0%EC%96%91%EC%8B%9C%20%EC%9D%BC%EC%82%B0%EC%84%9C%EA%B5%AC%20%EC%A4%91%EC%95%99%EB%A1%9C%201371",
    rating: 4.3,
    reviewCount: 6,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCJPqS-pOU4_4Hm4N-tkHlOL8C_uFkDomkQlyRHzKlJ2gdZmF6fJtqJ4og1dDVP6Rwaz61ovOb_Le8G_sWdGVX0ej34Frl2qwLonvXqd28KYG2HcV3KPg150_fZWcIgYdaKmlWSR2FCC3Q=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-033",
    name: "골목냉면",
    category: "냉면",
    address: "서울 성동구 독서당로 295-7",
    phone: "02-2235-2540",
    lat: 37.5485572658737,
    lng: 127.021989822533,
    kakaoUrl: "http://place.map.kakao.com/8697587",
    naverUrl: "https://map.naver.com/p/search/%EA%B3%A8%EB%AA%A9%EB%83%89%EB%A9%B4%20%EC%84%9C%EC%9A%B8%20%EC%84%B1%EB%8F%99%EA%B5%AC%20%EB%8F%85%EC%84%9C%EB%8B%B9%EB%A1%9C%20295-7",
    rating: 3.9,
    reviewCount: 255,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCVKbRuWU0-jKS_IIB1OB6GEHVQevJsFcUn0yuUFtKzcdZQLaZ-j2EacWVJY_XL3r9pDJuY-KPobHgkCWM8mxC-OmWfwukxSJEcmeJ2ZoGmpCrOKskTj25ypanjDFftkcCjbiYKmVqSJeB1ASnPFHVYVQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-034",
    name: "골목떡볶이",
    category: "떡볶이",
    address: "서울 송파구 문정로1길 33",
    phone: "02-3402-3452",
    lat: 37.4890285612452,
    lng: 127.123489346447,
    kakaoUrl: "http://place.map.kakao.com/11831381",
    naverUrl: "https://map.naver.com/p/search/%EA%B3%A8%EB%AA%A9%EB%96%A1%EB%B3%B6%EC%9D%B4%20%EC%84%9C%EC%9A%B8%20%EC%86%A1%ED%8C%8C%EA%B5%AC%20%EB%AC%B8%EC%A0%95%EB%A1%9C1%EA%B8%B8%2033",
    rating: 4.2,
    reviewCount: 1107,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCeLlAUXE0TClCZv2IZxZ_1ZcminUBHAGRuXAeMSlbYRaQRlfgPGKSgnIx-tQnCI4asZOKTA5R_F-EY2Omp4-e23LiCfAdWkeYmcDux0SSbNnriclxnsz3kLbQ_zGMi4i8IA0qYv_oBwoNIqtyruTRmcg=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-035",
    name: "곱창파는고깃집 공덕본점",
    category: "삼겹살",
    address: "서울 마포구 마포대로 173-14",
    phone: "02-365-9245",
    lat: 37.550997328430235,
    lng: 126.9536503446864,
    kakaoUrl: "http://place.map.kakao.com/151847027",
    naverUrl: "https://map.naver.com/p/search/%EA%B3%B1%EC%B0%BD%ED%8C%8C%EB%8A%94%EA%B3%A0%EA%B9%83%EC%A7%91%20%EA%B3%B5%EB%8D%95%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EB%A7%88%ED%8F%AC%EB%8C%80%EB%A1%9C%20173-14",
    rating: 4.7,
    reviewCount: 403,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCamdzWzzVBEODz9WxapWa2VuZZgvwqsXHS6-NbrnrK2Aspn-SCXW4D3k9XOzFY4_JRa5T3CmVbOJNHhOgUG3Yy1X9Jh8OWI_APvL_IthF2n_0_ZnrRlU1bFAyxaZH-eOsb7DC9p_s54bEk17DfEXqV=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-037",
    name: "공아춘수타왕손짜장",
    category: "중국요리",
    address: "경북 상주시 경상대로 3197",
    phone: "054-531-3050",
    lat: 36.43244986644467,
    lng: 128.15258440168455,
    kakaoUrl: "http://place.map.kakao.com/18314447",
    naverUrl: "https://map.naver.com/p/search/%EA%B3%B5%EC%95%84%EC%B6%98%EC%88%98%ED%83%80%EC%99%95%EC%86%90%EC%A7%9C%EC%9E%A5%20%EA%B2%BD%EB%B6%81%20%EC%83%81%EC%A3%BC%EC%8B%9C%20%EA%B2%BD%EC%83%81%EB%8C%80%EB%A1%9C%203197",
    rating: 3.7,
    reviewCount: 527,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAx9fmsTpOK971mrxbXEC9UGbIkD0hdizO3TTwUjiMIE0-uwao9nOezw4wj3lMlgnOENw-tQc9hMEmr9lBHdeqjeYPw8IAeb7UGaUUGD9Tp62yUW5lH1vwNE8NVM3MQu2IvWLlezxWst9bPxQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-039",
    name: "광명홍두깨칼국수 본점",
    category: "칼국수",
    address: "경기 광명시 오리로964번길 17",
    phone: "02-2625-6235",
    lat: 37.48060065885262,
    lng: 126.85667226675797,
    kakaoUrl: "http://place.map.kakao.com/11932900",
    naverUrl: "https://map.naver.com/p/search/%EA%B4%91%EB%AA%85%ED%99%8D%EB%91%90%EA%B9%A8%EC%B9%BC%EA%B5%AD%EC%88%98%20%EB%B3%B8%EC%A0%90%20%EA%B2%BD%EA%B8%B0%20%EA%B4%91%EB%AA%85%EC%8B%9C%20%EC%98%A4%EB%A6%AC%EB%A1%9C964%EB%B2%88%EA%B8%B8%2017",
    rating: 4,
    reviewCount: 1474,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBDV7eGzgwvEHCePy43V5Hjbw63yO_DnJbwCWXHyX3nTa1RTefz967vlqNJoc2Z8Y-lHKq7b7SlqpBHuVKn8KvM2l6JHTTZsVh1yF-lhYzKP6t1A8MXs35re4jbApcxtb2QIS73l-LsSa-6vg=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-040",
    name: "광암막국수",
    category: "국수",
    address: "강원특별자치도 횡성군 우천면 경강로 2885",
    phone: "033-342-2693",
    lat: 37.487908842919644,
    lng: 128.07231650338323,
    kakaoUrl: "http://place.map.kakao.com/8667158",
    naverUrl: "https://map.naver.com/p/search/%EA%B4%91%EC%95%94%EB%A7%89%EA%B5%AD%EC%88%98%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%ED%9A%A1%EC%84%B1%EA%B5%B0%20%EC%9A%B0%EC%B2%9C%EB%A9%B4%20%EA%B2%BD%EA%B0%95%EB%A1%9C%202885",
    rating: 4,
    reviewCount: 780,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjArvMz3CgbobWHQi0TB1pxZIU4-0Ui6IuLJSZ6S3kk0wMD4Pj5uMVaCuk9iZEZ0wURbUQltfoJbqdxm8QusLvwYarbsCNkE6bBlC6lDbJ6w6Yz0K8GLoHiZgATpMD78i6-ex20pYUVKZKtLIKY=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "횡성 38년전통 광암막국수🍜 전메뉴 먹방",
        videoUrl: "https://www.youtube.com/watch?v=rqwXDBojRpY",
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-041",
    name: "괭이부리마을 마곡김장훈점",
    category: "해물,생선",
    address: "서울 강서구 강서로 391",
    phone: null,
    lat: 37.5605446535829,
    lng: 126.838427289344,
    kakaoUrl: "http://place.map.kakao.com/455388326",
    naverUrl: "https://map.naver.com/p/search/%EA%B4%AD%EC%9D%B4%EB%B6%80%EB%A6%AC%EB%A7%88%EC%9D%84%20%EB%A7%88%EA%B3%A1%EA%B9%80%EC%9E%A5%ED%9B%88%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EC%84%9C%EA%B5%AC%20%EA%B0%95%EC%84%9C%EB%A1%9C%20391",
    rating: 4,
    reviewCount: 5,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjA-HmKjnGke70r3Ik7A_VqaChx9tEKUbqd9zeUIQBz7HQyCQ6N5PDVYSluYeY22dmyQHoo3gOu_qipv0CWNNnvoW90xeE7OMx90roP9npha9c_XVW5FYVF5mEf9qyvPThzhTvZLBbNrdpMOCAIHO79YmA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-043",
    name: "교동집",
    category: "해물,생선",
    address: "서울 마포구 동교로 208",
    phone: "02-337-3663",
    lat: 37.5585212915048,
    lng: 126.923654648782,
    kakaoUrl: "http://place.map.kakao.com/8673547",
    naverUrl: "https://map.naver.com/p/search/%EA%B5%90%EB%8F%99%EC%A7%91%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EB%8F%99%EA%B5%90%EB%A1%9C%20208",
    rating: 3.7,
    reviewCount: 472,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBEMTsT_uObEb3DyVKTk8xg-jrVV6z-Cfso1u2MNbSUksccwM4jgV876WhLyRSfLeYPCbMXotl0Qx3a_6ezHDCDSdbdw7AkXsrxrsZRhfTwEQyPILDpt7HryRZF8diFc_P6wNaPGvBcEfkzzg=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "불쭈꾸미 10인분!!🔥👊 구독자분이 놀라서 병원에서 목발 짚고 달려오셨어요😂 교동집 매운 쭈꾸미 먹방",
        videoUrl: "https://www.youtube.com/watch?v=9AeDIHDL9ZM",
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-044",
    name: "구들짱황소곱창",
    category: "곱창,막창",
    address: "경기 안양시 동안구 인덕원로 33",
    phone: "031-424-2777",
    lat: 37.40258935617114,
    lng: 126.97447034946981,
    kakaoUrl: "http://place.map.kakao.com/644351777",
    naverUrl: "https://map.naver.com/p/search/%EA%B5%AC%EB%93%A4%EC%A7%B1%ED%99%A9%EC%86%8C%EA%B3%B1%EC%B0%BD%20%EA%B2%BD%EA%B8%B0%20%EC%95%88%EC%96%91%EC%8B%9C%20%EB%8F%99%EC%95%88%EA%B5%AC%20%EC%9D%B8%EB%8D%95%EC%9B%90%EB%A1%9C%2033",
    rating: 4.3,
    reviewCount: 10,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCBxgMLbRRu1wo17qD_aBW60pY1shhD5kVSqRHzDgKwg0-lSi6MFxkzph1DyKcPdyDZzqim7HQl5muII_l1LZp5GHpsFOCgGmgyjSA45gOCPDOVUGEC0ZV7c1_6o7I6CusHsKtp2XSqDoBw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-045",
    name: "구복만두 숙대본점",
    category: "분식",
    address: "서울 용산구 두텁바위로 7",
    phone: "02-797-8656",
    lat: 37.54540633237531,
    lng: 126.97299140639474,
    kakaoUrl: "http://place.map.kakao.com/27209120",
    naverUrl: "https://map.naver.com/p/search/%EA%B5%AC%EB%B3%B5%EB%A7%8C%EB%91%90%20%EC%88%99%EB%8C%80%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%EB%91%90%ED%85%81%EB%B0%94%EC%9C%84%EB%A1%9C%207",
    rating: 4.1,
    reviewCount: 2203,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAGSp0MHU6rvxVrYGkh56jLYxaSTKgdQk8Pdqtd0UcytxH3vPexdarpMNqkTg3AcNCrgvkBUnejyboKtP_AtjrIiSdj8DvYO__eO1polxz-1FNoxWcEN2Yd60czBKwo36dytAVADtEb0Ap_R9Q=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-047",
    name: "국민낙곱새 망포직영점",
    category: "해물,생선",
    address: "경기 수원시 영통구 영통로130번길 13",
    phone: "031-203-0958",
    lat: 37.239584138100014,
    lng: 127.05701462471103,
    kakaoUrl: "http://place.map.kakao.com/1528475971",
    naverUrl: "https://map.naver.com/p/search/%EA%B5%AD%EB%AF%BC%EB%82%99%EA%B3%B1%EC%83%88%20%EB%A7%9D%ED%8F%AC%EC%A7%81%EC%98%81%EC%A0%90%20%EA%B2%BD%EA%B8%B0%20%EC%88%98%EC%9B%90%EC%8B%9C%20%EC%98%81%ED%86%B5%EA%B5%AC%20%EC%98%81%ED%86%B5%EB%A1%9C130%EB%B2%88%EA%B8%B8%2013",
    rating: 4.9,
    reviewCount: 81,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAHynbyVi-pX8yx7VydfxUaf2XGINZjpaD6_Dbjk_xUuGswKYjfSCJ6qWlxHexzkUZpFCsDcAl34Cpx51trx_AvCD1hGajO1oZ3H2813OZil7f06b6eY9UvmHHnOXaj51VTs5PEVx9JVYd5rZjPjRrgOw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 찜·탕 맛집."
      }
    ]
  },
  {
    id: "jjy-048",
    name: "국수리국수집",
    category: "국수",
    address: "경기 양평군 양서면 경강로 1061",
    phone: "031-772-2433",
    lat: 37.5132053316417,
    lng: 127.403926879349,
    kakaoUrl: "http://place.map.kakao.com/10136734",
    naverUrl: "https://map.naver.com/p/search/%EA%B5%AD%EC%88%98%EB%A6%AC%EA%B5%AD%EC%88%98%EC%A7%91%20%EA%B2%BD%EA%B8%B0%20%EC%96%91%ED%8F%89%EA%B5%B0%20%EC%96%91%EC%84%9C%EB%A9%B4%20%EA%B2%BD%EA%B0%95%EB%A1%9C%201061",
    rating: 4.1,
    reviewCount: 1841,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjA606_MLv26a04DM14m9v4jsfsJKk9ladJg2wdiIZlqqD7y-sQWheUE9VJbabR5Ck-7x9ELRLhbGpSHH6-3tYBb29V8hAHACd1vO10Wjo5PjGn8MmDXe0nj66lug0fMoAmvAGRiMKkO9MApcQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-049",
    name: "달인군만두",
    category: "분식",
    address: "서울 동대문구 전농로2가길 13",
    phone: "010-6487-2465",
    lat: 37.56744655778121,
    lng: 127.05723981257071,
    kakaoUrl: "http://place.map.kakao.com/846439834",
    naverUrl: "https://map.naver.com/p/search/%EB%8B%AC%EC%9D%B8%EA%B5%B0%EB%A7%8C%EB%91%90%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EC%A0%84%EB%86%8D%EB%A1%9C2%EA%B0%80%EA%B8%B8%2013",
    rating: 4.5,
    reviewCount: 64,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAXv7HmCRA1kWxxZ61KDeQdNGniYWdkeZwcD1w9leKVgInAspl-eR-L8u66n3mG83d4sqNZnI2DX5aBYu9C7kaBmh7r0WYnifsedWEniD2nxrUQrn4XcFHhwCAce5EJhPsmib_6cp7Md3ApDw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "군만두 하나에 200원?! 만두 다 떨어질때까지 먹었습니다😂 40년간 군만두만 구워온 달인군만두 먹방",
        videoUrl: "https://www.youtube.com/watch?v=fKiyBm3PGAI",
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-050",
    name: "굴과찜사랑 본사직영점",
    category: "굴,전복",
    address: "서울 성동구 행당로17길 23",
    phone: "02-2296-9922",
    lat: 37.56033886509209,
    lng: 127.03295257700374,
    kakaoUrl: "http://place.map.kakao.com/15278736",
    naverUrl: "https://map.naver.com/p/search/%EA%B5%B4%EA%B3%BC%EC%B0%9C%EC%82%AC%EB%9E%91%20%EB%B3%B8%EC%82%AC%EC%A7%81%EC%98%81%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%84%B1%EB%8F%99%EA%B5%AC%20%ED%96%89%EB%8B%B9%EB%A1%9C17%EA%B8%B8%2023",
    rating: 4.2,
    reviewCount: 310,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAUTlNcazmdeXFOknRcdrYOnRZgobZgxrX2Xkpra255lfHYQg_eLwnZvKDtQ8sdJVq4pJO4Ps0y5DiZ80oz32JVSE0Q056CapXYDViUHjsgTtBt0lNNdtcHJ_AJWdogtt1q39adIKS0LX8ApwsPY7Fwbw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-051",
    name: "굴이짱 본점",
    category: "굴,전복",
    address: "서울 광진구 긴고랑로 61",
    phone: "02-458-9995",
    lat: 37.56206932673117,
    lng: 127.08314789518539,
    kakaoUrl: "http://place.map.kakao.com/15928968",
    naverUrl: "https://map.naver.com/p/search/%EA%B5%B4%EC%9D%B4%EC%A7%B1%20%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B4%91%EC%A7%84%EA%B5%AC%20%EA%B8%B4%EA%B3%A0%EB%9E%91%EB%A1%9C%2061",
    rating: 4.4,
    reviewCount: 70,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjB4X0KStukD-ZXwm3sb9qrrS2BOHnfleIMZGlTqqEHKszYBXWoMlUPULAHxVhpkkH6DeasY4KI-S_eQeGA4pzQaYbdO8EDDbVSp8-nV14Q0XdctjeIFISgvywwQcLXw0sp4WbB8HvAYUPiitJVpw9F_=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 찜·탕 맛집."
      }
    ]
  },
  {
    id: "jjy-052",
    name: "굽네치킨 굽네 플레이타운점",
    category: "굽네치킨",
    address: "서울 마포구 잔다리로2길 23",
    phone: "0507-1487-9456",
    lat: 37.5517081311934,
    lng: 126.921190016923,
    kakaoUrl: "http://place.map.kakao.com/1253348263",
    naverUrl: "https://map.naver.com/p/search/%EA%B5%BD%EB%84%A4%EC%B9%98%ED%82%A8%20%EA%B5%BD%EB%84%A4%20%ED%94%8C%EB%A0%88%EC%9D%B4%ED%83%80%EC%9A%B4%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EC%9E%94%EB%8B%A4%EB%A6%AC%EB%A1%9C2%EA%B8%B8%2023",
    rating: 4.1,
    reviewCount: 8,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjATSNFcmJhbinlRuBCy-U5KeyOq9QsrKqz3nm1KKA023qYl43QghZok_yeZzAIkJrN3vhHG-px3i-TzyGl8BrikQJYHqx9GQorhE0EMImdy6unjRYZr28HjghkK51w9lmYLPaeCRsxzuYZky4Y=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 치킨 전문점."
      }
    ]
  },
  {
    id: "jjy-053",
    name: "궁중닭갈비 본점",
    category: "닭요리",
    address: "서울 중랑구 면목로92길 11",
    phone: "02-2208-7676",
    lat: 37.5950369388198,
    lng: 127.086564576185,
    kakaoUrl: "http://place.map.kakao.com/21325321",
    naverUrl: "https://map.naver.com/p/search/%EA%B6%81%EC%A4%91%EB%8B%AD%EA%B0%88%EB%B9%84%20%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EB%9E%91%EA%B5%AC%20%EB%A9%B4%EB%AA%A9%EB%A1%9C92%EA%B8%B8%2011",
    rating: 3.8,
    reviewCount: 60,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCr30kXPHzFWqu0-C1uY40gf_Vlqbx9e_Iv_i1i0iKKLwCZYWrlZPrs3f6iVBV8ermLBj2yoFRmX-2_Tu_Ua2NxzM55m6Cr_gOS7B_97NkPNlN4JsUV_734iU93pwUj7sScz59-ae0nzx3EjQc=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-054",
    name: "권바우부대찌개&돈까스 춘천본점",
    category: "찌개,전골",
    address: "강원특별자치도 춘천시 솟발1길 4-13",
    phone: "033-262-0019",
    lat: 37.8475701543325,
    lng: 127.732051699264,
    kakaoUrl: "http://place.map.kakao.com/358997687",
    naverUrl: "https://map.naver.com/p/search/%EA%B6%8C%EB%B0%94%EC%9A%B0%EB%B6%80%EB%8C%80%EC%B0%8C%EA%B0%9C%26%EB%8F%88%EA%B9%8C%EC%8A%A4%20%EC%B6%98%EC%B2%9C%EB%B3%B8%EC%A0%90%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%B6%98%EC%B2%9C%EC%8B%9C%20%EC%86%9F%EB%B0%9C1%EA%B8%B8%204-13",
    rating: 4.2,
    reviewCount: 256,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCQuIsC57Au0wNVFtfZNtn8AtjGH5mIqQOlXDeoiSwth5PLix0MeZ2yy1dHlWT1V2Kp6GS7uck1ut59BbwTt6fjx_dmRUo9VnIfuVps6m86rVmi4QXYoshqLNLsQqNF3DRi4PFe-WQgcEvLZg=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 찜·탕 맛집."
      }
    ]
  },
  {
    id: "jjy-055",
    name: "그니식당",
    category: "한식",
    address: "충남 천안시 서북구 불당32길 3-10",
    phone: "010-3424-4578",
    lat: 36.808506905269745,
    lng: 127.10509399391175,
    kakaoUrl: "http://place.map.kakao.com/1782126780",
    naverUrl: "https://map.naver.com/p/search/%EA%B7%B8%EB%8B%88%EC%8B%9D%EB%8B%B9%20%EC%B6%A9%EB%82%A8%20%EC%B2%9C%EC%95%88%EC%8B%9C%20%EC%84%9C%EB%B6%81%EA%B5%AC%20%EB%B6%88%EB%8B%B932%EA%B8%B8%203-10",
    rating: 4.5,
    reviewCount: 104,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCUdRTn0edCSIAT4netfHVpBDzMKVLaTb2JbA5q8YBpBmnRSi7ky6cU5RSQL5bbG1cGSVUi1aJdZapISeJsPTs-cPtab1FbQ_nj1zA2CLA5NxrAXaKK-gigIHf62T6TeEKEWX6IHC0wxu_v3wo=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 찜·탕 맛집."
      }
    ]
  },
  {
    id: "jjy-056",
    name: "글라시에홍",
    category: "아이스크림",
    address: "전남광주통합특별시 동구 서석로7번길 12-24",
    phone: "062-413-2107",
    lat: 35.146500400758,
    lng: 126.915325268461,
    kakaoUrl: "http://place.map.kakao.com/518689703",
    naverUrl: "https://map.naver.com/p/search/%EA%B8%80%EB%9D%BC%EC%8B%9C%EC%97%90%ED%99%8D%20%EC%A0%84%EB%82%A8%EA%B4%91%EC%A3%BC%ED%86%B5%ED%95%A9%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EB%8F%99%EA%B5%AC%20%EC%84%9C%EC%84%9D%EB%A1%9C7%EB%B2%88%EA%B8%B8%2012-24",
    rating: 4.6,
    reviewCount: 24,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAPvmbWsdUitkmtTtLpdThQ0eBtsyMBLGJp2ScneykJNjV19E8E3FPIZWHp7MKS-vS0vLa8tz7Eh-nBeUZ3D_AxvkdOBl_Y0PZk0DEcBprndm7OkMXXrjYnxUpAz9NpzF7lmYcLpCz5ersWJjc=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "월 매출 1억?!😱 전국 TOP3 식당을 찾아갔습니다🔥 100대 1의 경쟁률을 뚫고 올라온 쌀국수 햄버거 젤라또 먹방",
        videoUrl: "https://www.youtube.com/watch?v=lbueoat6MJk",
        recommendNote: "쯔양이 방문해 리뷰한 카페·디저트 맛집."
      }
    ]
  },
  {
    id: "jjy-057",
    name: "금성관",
    category: "곰탕",
    address: "서울 중구 남대문로 29",
    phone: "02-753-7898",
    lat: 37.56143177633828,
    lng: 126.97885526219387,
    kakaoUrl: "http://place.map.kakao.com/20534938",
    naverUrl: "https://map.naver.com/p/search/%EA%B8%88%EC%84%B1%EA%B4%80%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EB%82%A8%EB%8C%80%EB%AC%B8%EB%A1%9C%2029",
    rating: 4.4,
    reviewCount: 881,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBsN6Dyw9eIFf-nt6l9kJpTeN9ZPxED1l77DCHw2oNrjMu1COou3DA37pLx_X8If9wEr4bQiG_fvoWgJMANaCthceCKQAIpOXkAg_YbBtsSBtGVSojPBEFYU86YhrMxNHv3tZVANUTrdcjqeqE=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "8명의 요리 다먹을수 있을까...?🤔 킹타이거 새우 라면 햄버거 먹방(w.포도)",
        videoUrl: "https://www.youtube.com/watch?v=yEQvlQg6mWA",
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-058",
    name: "금성식당",
    category: "육류,고기",
    address: "전남광주통합특별시 동구 제봉로222번길 2",
    phone: "062-227-4717",
    lat: 35.1550911838805,
    lng: 126.913924730038,
    kakaoUrl: "http://place.map.kakao.com/21224205",
    naverUrl: "https://map.naver.com/p/search/%EA%B8%88%EC%84%B1%EC%8B%9D%EB%8B%B9%20%EC%A0%84%EB%82%A8%EA%B4%91%EC%A3%BC%ED%86%B5%ED%95%A9%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EB%8F%99%EA%B5%AC%20%EC%A0%9C%EB%B4%89%EB%A1%9C222%EB%B2%88%EA%B8%B8%202",
    rating: 3.9,
    reviewCount: 84,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD-YQdGUNYQPwQDeansco1UXIbKTWK-3P5vl_N1iE9fS455_PTwGXS_XXdXgffmWUvFWgCUQK7eoa15aiJelLo4lHgQ6n5O0pRDcrsvMqCk0PTYl5hl3Bt3hYMWLoChxW0lum5G9SetLDQnJQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "쯔양 아닌척하고 쯔양세트 시켜봤습니다🤣 사장님 몰래카메라 과연 성공했을까..광주 금성식당 먹방",
        videoUrl: "https://www.youtube.com/watch?v=fXxl-YDU2uQ",
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-059",
    name: "금암소바",
    category: "일식",
    address: "전북특별자치도 전주시 덕진구 기린대로 400-75",
    phone: "063-278-0945",
    lat: 35.838493649647525,
    lng: 127.1332005894921,
    kakaoUrl: "http://place.map.kakao.com/16779100",
    naverUrl: "https://map.naver.com/p/search/%EA%B8%88%EC%95%94%EC%86%8C%EB%B0%94%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%84%EC%A3%BC%EC%8B%9C%20%EB%8D%95%EC%A7%84%EA%B5%AC%20%EA%B8%B0%EB%A6%B0%EB%8C%80%EB%A1%9C%20400-75",
    rating: 4.1,
    reviewCount: 688,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCE9Jxc8cN9WAQI8DmhTmGx0ujh41mVaYQlNRJPoLEG3LCDiuN5kFdTbGyqohSlW4HDjI7xd1HafnU_m2ulH_xGp6i2p-QwrHvZx3PZTbkOuwufBQkmCDu4yVA7yv73p9eOnRC_rLWqktg7rg=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "전메뉴 다 주세요!😠 전주에서 줄서서먹는 금암소바 먹방",
        videoUrl: "https://www.youtube.com/watch?v=1O5vTQR8EO8",
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-060",
    name: "금은옥",
    category: "육류,고기",
    address: "전북특별자치도 순창군 팔덕면 찬물내기길 2",
    phone: "010-8897-2233",
    lat: 35.380237923412395,
    lng: 127.10201413305116,
    kakaoUrl: "http://place.map.kakao.com/1515963409",
    naverUrl: "https://map.naver.com/p/search/%EA%B8%88%EC%9D%80%EC%98%A5%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%88%9C%EC%B0%BD%EA%B5%B0%20%ED%8C%94%EB%8D%95%EB%A9%B4%20%EC%B0%AC%EB%AC%BC%EB%82%B4%EA%B8%B0%EA%B8%B8%202",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "동네 사장님들 모이셨습니다🤣 김치와 보쌈이 들어간 순창 삼합??먹방",
        videoUrl: "https://www.youtube.com/watch?v=R4l1zUbM-dM",
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-061",
    name: "기라성",
    category: "중국요리",
    address: "전북특별자치도 부안군 계화면 간재로 461",
    phone: "063-582-1040",
    lat: 35.764106253215076,
    lng: 126.69265603439607,
    kakaoUrl: "http://place.map.kakao.com/24481979",
    naverUrl: "https://map.naver.com/p/search/%EA%B8%B0%EB%9D%BC%EC%84%B1%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EB%B6%80%EC%95%88%EA%B5%B0%20%EA%B3%84%ED%99%94%EB%A9%B4%20%EA%B0%84%EC%9E%AC%EB%A1%9C%20461",
    rating: 4.1,
    reviewCount: 230,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBPZlJPXOO4E69QbAFPoNaMFvG_yIjLeZpEtdk0jg4PKdvhQ1uy7cmozCtrFplDyoj8Qsle57FX65aqB4VrDO0FJI78KQctnJMw_20hiwtsmZwyjbLe3AbHzqOWrgs5iaiu1F-qGaia6uQuwKg_JhM2Jg=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "중식집 사장님이 배 터지라고 만든 초대형 돈까스😱부안 기라성 비빔간짜장 짬뽕 먹방",
        videoUrl: "https://www.youtube.com/watch?v=VmOEK9isSuk",
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-062",
    name: "기장손만두",
    category: "분식",
    address: "부산 기장군 기장읍 차성동로67번길 2-4",
    phone: "0507-1321-7367",
    lat: 35.2440285557,
    lng: 129.215952674612,
    kakaoUrl: "http://place.map.kakao.com/15907104",
    naverUrl: "https://map.naver.com/p/search/%EA%B8%B0%EC%9E%A5%EC%86%90%EB%A7%8C%EB%91%90%20%EB%B6%80%EC%82%B0%20%EA%B8%B0%EC%9E%A5%EA%B5%B0%20%EA%B8%B0%EC%9E%A5%EC%9D%8D%20%EC%B0%A8%EC%84%B1%EB%8F%99%EB%A1%9C67%EB%B2%88%EA%B8%B8%202-4",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-063",
    name: "기절초풍물닭갈비 상도동점",
    category: "닭요리",
    address: "서울 동작구 성대로1길 6",
    phone: "02-824-4636",
    lat: 37.500359111392186,
    lng: 126.93282444720694,
    kakaoUrl: "http://place.map.kakao.com/219304883",
    naverUrl: "https://map.naver.com/p/search/%EA%B8%B0%EC%A0%88%EC%B4%88%ED%92%8D%EB%AC%BC%EB%8B%AD%EA%B0%88%EB%B9%84%20%EC%83%81%EB%8F%84%EB%8F%99%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EC%9E%91%EA%B5%AC%20%EC%84%B1%EB%8C%80%EB%A1%9C1%EA%B8%B8%206",
    rating: 4.1,
    reviewCount: 39,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAmd4O9mAmvLM09eVv1ZNhDh2xR6WAdjXKRSHufqtpy2HsZfA7_PQLbHaMCScrTbQqFUiwMVcocdXZcdfwSUM2uIJmAZ_YdxMh-HZYpBrXlM6QU5oHtRzdyDe8WGe03mr4ed7-tKvylmfGU_A=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-064",
    name: "기절초풍왕순대",
    category: "순대",
    address: "서울 관악구 봉천로62길 2",
    phone: "02-872-8805",
    lat: 37.4781367317345,
    lng: 126.95843584814,
    kakaoUrl: "http://place.map.kakao.com/16586486",
    naverUrl: "https://map.naver.com/p/search/%EA%B8%B0%EC%A0%88%EC%B4%88%ED%92%8D%EC%99%95%EC%88%9C%EB%8C%80%20%EC%84%9C%EC%9A%B8%20%EA%B4%80%EC%95%85%EA%B5%AC%20%EB%B4%89%EC%B2%9C%EB%A1%9C62%EA%B8%B8%202",
    rating: 4.3,
    reviewCount: 866,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDKbRy5w8j6yAQ_WSHA9Jrj1DtOK933PiVwyE8RPVqs_iK2jVYhZ9dUvTtrbWJtPS0hngwiE0fk2sCzt_0pcHxddwus_FhGf1RxnZMW2M5N4BKRMkB1eIUSJexoPax9ATumLTkU72Gf06p9YFPjZylX=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "맛있어서 기절한다는 막창순대?🤔 서울대생 핫플 기절초풍왕순대 먹방",
        videoUrl: "https://www.youtube.com/watch?v=p9Uxmbu45p0",
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-065",
    name: "김가네분식",
    category: "분식",
    address: "부산 기장군 기장읍 읍내로 104",
    phone: "051-724-0427",
    lat: 35.24473634062591,
    lng: 129.21553695883821,
    kakaoUrl: "http://place.map.kakao.com/23878877",
    naverUrl: "https://map.naver.com/p/search/%EA%B9%80%EA%B0%80%EB%84%A4%EB%B6%84%EC%8B%9D%20%EB%B6%80%EC%82%B0%20%EA%B8%B0%EC%9E%A5%EA%B5%B0%20%EA%B8%B0%EC%9E%A5%EC%9D%8D%20%EC%9D%8D%EB%82%B4%EB%A1%9C%20104",
    rating: 2.5,
    reviewCount: 11,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAlAA704gFVEy7M_4bCVvcmJtTIsIaXdXq32bZrauI2ZeCzI2D-uVP2AAhZiG14ChFaMZYEe4Ka9J1SgaLhpXUEJEQqgp0ldnkUhmg2LUKGyYAM2CLmvAfXdIchnsb0WPd4F5co46ePCn4NFKM=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-066",
    name: "김밥나라 남성역점",
    category: "분식",
    address: "서울 동작구 사당로 196",
    phone: "02-598-7182",
    lat: 37.48503650581963,
    lng: 126.96980317993331,
    kakaoUrl: "http://place.map.kakao.com/17304590",
    naverUrl: "https://map.naver.com/p/search/%EA%B9%80%EB%B0%A5%EB%82%98%EB%9D%BC%20%EB%82%A8%EC%84%B1%EC%97%AD%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EC%9E%91%EA%B5%AC%20%EC%82%AC%EB%8B%B9%EB%A1%9C%20196",
    rating: 4.6,
    reviewCount: 96,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCtO3Sw1otArQiK7tlqBMEl3F4rmbP12DRvO72Mqv8igB0YxxZM-lUzquyCGXi4KkpnHj0Xir_UJZIhVpIV3O3W5CgPyPD2_DERTeWnXKVm2fgFA08ZCtUNRjSqVm7ChZ1qGR11usx6wEnTRg=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-067",
    name: "김밥천국 건대2호점",
    category: "분식",
    address: "서울 광진구 능동로13길 21",
    phone: "02-499-0308",
    lat: 37.5429699694523,
    lng: 127.070707976361,
    kakaoUrl: "http://place.map.kakao.com/2141404953",
    naverUrl: "https://map.naver.com/p/search/%EA%B9%80%EB%B0%A5%EC%B2%9C%EA%B5%AD%20%EA%B1%B4%EB%8C%802%ED%98%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B4%91%EC%A7%84%EA%B5%AC%20%EB%8A%A5%EB%8F%99%EB%A1%9C13%EA%B8%B8%2021",
    rating: 4.1,
    reviewCount: 13,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAxupRRexpoLutkHgcnG3d2dat4K2_EevPXKOjQy-zwm2LaNgN3BRTf2mmBE2T4nrzyUGP46Vb_vGGcqZ1BSTnB6pnDgOo5HuvDf99sYLdYKuNnK9KRapKPlSB5-P7Hx9rv7qMeGydf2lP558k=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-068",
    name: "김밥천국",
    category: "분식",
    address: "서울 서초구 동광로 70",
    phone: "02-535-8545",
    lat: 37.4925886077375,
    lng: 126.990270730517,
    kakaoUrl: "http://place.map.kakao.com/16588301",
    naverUrl: "https://map.naver.com/p/search/%EA%B9%80%EB%B0%A5%EC%B2%9C%EA%B5%AD%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EB%8F%99%EA%B4%91%EB%A1%9C%2070",
    rating: 2.6,
    reviewCount: 57,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjC9huxlaLAZW2SV11CzO6mnpmWduoXMiZJVxHTchBamfmClN71FitNwOZxOHeJbmv46hoZCFaheOp4zCYbQPk6Hd3twXCgAM2D8wLOPfwUJVsWUqbD4iYIxdFIt_RzVitnM_IT47g-Rio2gNubcd4aHow=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-069",
    name: "김밥천국 신음점",
    category: "분식",
    address: "경북 김천시 시청로 66",
    phone: "054-436-4527",
    lat: 36.1341963485071,
    lng: 128.117889938301,
    kakaoUrl: "http://place.map.kakao.com/10201781",
    naverUrl: "https://map.naver.com/p/search/%EA%B9%80%EB%B0%A5%EC%B2%9C%EA%B5%AD%20%EC%8B%A0%EC%9D%8C%EC%A0%90%20%EA%B2%BD%EB%B6%81%20%EA%B9%80%EC%B2%9C%EC%8B%9C%20%EC%8B%9C%EC%B2%AD%EB%A1%9C%2066",
    rating: 3.7,
    reviewCount: 43,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBzQwKmCIm7Ne_WyRM4-Mh7gYLTEbA4MJT3J6bE1fwieMR0m656VNkwdrDdILU4el9tUh7Fr4R7BX_5-4tjqUTnEvRpJLPFzX9iTDN_cqgo_j1h_apWOG4BGk3tVdvLUIrvns-LUkQDRkCZsA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-070",
    name: "김수사",
    category: "초밥,롤",
    address: "서울 강남구 도산대로12길 7",
    phone: "02-542-5235",
    lat: 37.5172300181637,
    lng: 127.02375201725121,
    kakaoUrl: "http://place.map.kakao.com/10201006",
    naverUrl: "https://map.naver.com/p/search/%EA%B9%80%EC%88%98%EC%82%AC%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EB%8F%84%EC%82%B0%EB%8C%80%EB%A1%9C12%EA%B8%B8%207",
    rating: 4.1,
    reviewCount: 706,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD8z-7yice17QNoufR_7Z0eKNcTXHMWTQxE2a1isQfNKATLo8lwJpcbaLx1339hCXH7jqlsKC9qcdBYnYnd41n5-RLFgqxWqdbpKQ_ZD8qv32dN6DX4eRaDNp912YxiEeoesbY_gYG1XTznxg=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "40년 초밥장인 가게에서 마지막식사 했습니다..🥺 초밥 100개 도전🔥 강남 김수사 먹방",
        videoUrl: "https://www.youtube.com/watch?v=sFm9UUP9a5M",
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      }
    ]
  },
  {
    id: "jjy-071",
    name: "김종구의참치박사",
    category: "참치회",
    address: "서울 동작구 동작대로 25-1",
    phone: "02-523-3799",
    lat: 37.4787011422244,
    lng: 126.981010859595,
    kakaoUrl: "http://place.map.kakao.com/27328740",
    naverUrl: "https://map.naver.com/p/search/%EA%B9%80%EC%A2%85%EA%B5%AC%EC%9D%98%EC%B0%B8%EC%B9%98%EB%B0%95%EC%82%AC%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EC%9E%91%EA%B5%AC%20%EB%8F%99%EC%9E%91%EB%8C%80%EB%A1%9C%2025-1",
    rating: 4.2,
    reviewCount: 94,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD4VYpMf2osQuN0E8wU860vu_gsjp0Ssf-TPgZr6ZZaY2IaifWq_YQDWoFe9U6tjYFegb9eq_52W6O3pxbq3dk3zwmpHXyORVq3LnSrLE5yvGrNRCCVHpBcC2X0kVBFJPONDhdpGhwi8fzloA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      }
    ]
  },
  {
    id: "jjy-072",
    name: "까치둥지",
    category: "매운탕,해물탕",
    address: "강원특별자치도 원주시 치악로 1731",
    phone: "033-761-8008",
    lat: 37.3369069775988,
    lng: 127.95616597213,
    kakaoUrl: "http://place.map.kakao.com/8819283",
    naverUrl: "https://map.naver.com/p/search/%EA%B9%8C%EC%B9%98%EB%91%A5%EC%A7%80%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%9B%90%EC%A3%BC%EC%8B%9C%20%EC%B9%98%EC%95%85%EB%A1%9C%201731",
    rating: 4.3,
    reviewCount: 2052,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjB0yg3QdsMtuMQ5NoXB-XR1EA11WZCIg7XFCUygpZlb6_ludO0vKP4faGyYOtkX8T0HTB8JlGQShnzqqPvZ_BjTwKDNXiHueEA9advb0ND8d43ddewynVI7qtd2dY52p1HMP59JM5cgYfNX_ZkggWi4=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "1시간 기다렸습니다😢 전국 원탑 알탕집 까치둥지? 알만 10인분 먹었더니..",
        videoUrl: "https://www.youtube.com/watch?v=PWWm9Cy4GiY",
        recommendNote: "쯔양이 방문해 리뷰한 찜·탕 맛집."
      }
    ]
  },
  {
    id: "jjy-073",
    name: "꽃새우영번지 역삼점",
    category: "해물,생선",
    address: "서울 강남구 언주로 536",
    phone: "02-501-2050",
    lat: 37.5061941654576,
    lng: 127.041371600279,
    kakaoUrl: "http://place.map.kakao.com/25968685",
    naverUrl: "https://map.naver.com/p/search/%EA%BD%83%EC%83%88%EC%9A%B0%EC%98%81%EB%B2%88%EC%A7%80%20%EC%97%AD%EC%82%BC%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%96%B8%EC%A3%BC%EB%A1%9C%20536",
    rating: 4,
    reviewCount: 398,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDCnE0364NuQYwoQr8XeBL7bNxp3PiSlwQlF2E34KqrKRk1fxbzIiNp870PfHe7sfR5UpPSOz1U3W2KJ8lOTq1Z0Bl4FurCMhDA0ri--MyUxi9MpdMawT3EEpJfq28XSnHVmQ7hLj_yh1FDtnI=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      }
    ]
  },
  {
    id: "jjy-074",
    name: "꾸이꾸이돼지촌쭈꾸미 본점",
    category: "육류,고기",
    address: "서울 강서구 초원로 77",
    phone: "02-2662-3450",
    lat: 37.5676682438589,
    lng: 126.814151524209,
    kakaoUrl: "http://place.map.kakao.com/2088745005",
    naverUrl: "https://map.naver.com/p/search/%EA%BE%B8%EC%9D%B4%EA%BE%B8%EC%9D%B4%EB%8F%BC%EC%A7%80%EC%B4%8C%EC%AD%88%EA%BE%B8%EB%AF%B8%20%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EC%84%9C%EA%B5%AC%20%EC%B4%88%EC%9B%90%EB%A1%9C%2077",
    rating: 4.3,
    reviewCount: 374,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDXD3k0Tza_aJwA7x3IoQixwUFQ6NxDvwlZJhuWB6jgfkyoUGojp0kHYkV9JtE1eMtT174lkAY21af0uyErwnYD97mVl5qEy58-wu87NNv7ACu_7IGpxWitr8A7G-_wgsTsvHfcjwR_qdcHzy6jORIBTg=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      }
    ]
  },
  {
    id: "jjy-075",
    name: "나래궁",
    category: "중식",
    address: "전북특별자치도 고창군 고창읍 동리로 41",
    phone: "063-561-3356",
    lat: 35.43324692475543,
    lng: 126.6968025827192,
    kakaoUrl: "http://place.map.kakao.com/10200737",
    naverUrl: "https://map.naver.com/p/search/%EB%82%98%EB%9E%98%EA%B6%81%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EA%B3%A0%EC%B0%BD%EA%B5%B0%20%EA%B3%A0%EC%B0%BD%EC%9D%8D%20%EB%8F%99%EB%A6%AC%EB%A1%9C%2041",
    rating: 4,
    reviewCount: 391,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCkBPKhWXkqVFvh_65B0b-toAcZA63M10LCARZ0NUPST2XCsoGPlzLPYYJWVsUPnNyl3D8TB8uzwLHbzqc_suOFsZO-NcbLhM7q8bFj0Wj3jiZ-Y_lFR-4TMATNks2mOvXS8_r4ldftJxz4a2VwqPbD=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-076",
    name: "나연식당",
    category: "한식",
    address: "경기 수원시 권선구 세권로 185",
    phone: "031-233-7094",
    lat: 37.2564096942116,
    lng: 127.024632549208,
    kakaoUrl: "http://place.map.kakao.com/15971668",
    naverUrl: "https://map.naver.com/p/search/%EB%82%98%EC%97%B0%EC%8B%9D%EB%8B%B9%20%EA%B2%BD%EA%B8%B0%20%EC%88%98%EC%9B%90%EC%8B%9C%20%EA%B6%8C%EC%84%A0%EA%B5%AC%20%EC%84%B8%EA%B6%8C%EB%A1%9C%20185",
    rating: 4.2,
    reviewCount: 25,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD4_a89Gj-mFi-PL8RSJqrDIq1H2xwAwlgLZeD9YRQzyvzmWfgvsKFhkNErfkXXkMdQbSXAo1m6MOfrLTwVV0WHb9-0CKiymaZYEnJ725gmuJWhrRd_aVp4-FMh9rrdphjt0kI_NZCR-OnDuA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 찜·탕 맛집."
      }
    ]
  },
  {
    id: "jjy-077",
    name: "낙성기사식당",
    category: "한식",
    address: "서울 관악구 봉천로 550",
    phone: "02-883-1819",
    lat: 37.4780827852694,
    lng: 126.958761480961,
    kakaoUrl: "http://place.map.kakao.com/16846910",
    naverUrl: "https://map.naver.com/p/search/%EB%82%99%EC%84%B1%EA%B8%B0%EC%82%AC%EC%8B%9D%EB%8B%B9%20%EC%84%9C%EC%9A%B8%20%EA%B4%80%EC%95%85%EA%B5%AC%20%EB%B4%89%EC%B2%9C%EB%A1%9C%20550",
    rating: 4.1,
    reviewCount: 294,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCxue8ZbEpw0FHhRRheA90CGd5EqZdZlH1Vf1Y3RMZoUYVaxAD-g4vcYLepRjroIpZmtJrwTMF8bh_Ujq7vO_6MmoMZ0e7dy3KsImyYi8uxV0Ra36w1bAYncQEGW3JEtg00t4oEjMjsAUY-Zw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-078",
    name: "남북통일",
    category: "분식",
    address: "서울 마포구 동교로18길 37",
    phone: "02-3141-4113",
    lat: 37.553796239926776,
    lng: 126.91795113227077,
    kakaoUrl: "http://place.map.kakao.com/8234310",
    naverUrl: "https://map.naver.com/p/search/%EB%82%A8%EB%B6%81%ED%86%B5%EC%9D%BC%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EB%8F%99%EA%B5%90%EB%A1%9C18%EA%B8%B8%2037",
    rating: 4.2,
    reviewCount: 285,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDC3A7ZqXvU7VA_s9jYgoQWWoKPfXcyBhiExYIFPGPFgnNg6MhPc-xor_4EHDx00IfrjgumfWW1gZ2erWt9b9Uai8w1_KJ6-u_Qd6unACDdAEgNrMHrw4y5JeZtbOfAcPHxhaHBf4HQkBZrAw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "우연히 들어갔는데 찐맛집이었습니다😳 서교동 남북통일 닭칼국수 먹방",
        videoUrl: "https://www.youtube.com/watch?v=dRO4cbYyNvE",
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      },
      {
        name: "최자로드",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "서교동에서 만두국·만두전골을 선보이는 곳으로 소개됐다."
      }
    ]
  },
  {
    id: "jjy-079",
    name: "남영돈",
    category: "육류,고기",
    address: "서울 용산구 한강대로80길 17",
    phone: "02-793-3598",
    lat: 37.5427503629762,
    lng: 126.973775391327,
    kakaoUrl: "http://place.map.kakao.com/1228257268",
    naverUrl: "https://map.naver.com/p/search/%EB%82%A8%EC%98%81%EB%8F%88%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%ED%95%9C%EA%B0%95%EB%8C%80%EB%A1%9C80%EA%B8%B8%2017",
    rating: 4.5,
    reviewCount: 798,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAjiOrW3grwoytfXiT8TLdngjTshyDSRCXV1-ouxPLRgl14XwAQ-hisPdis5zy1aLm3DUd1_7daLxpWl879oNnSpe8zQ-aOz8oevlBWEzeRPU0DmWLLl_Fa2mTNP7ZQ7_wo9k5dR9Nj6qUdwA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-081",
    name: "남이분식",
    category: "분식",
    address: "서울 종로구 종로40가길 3",
    phone: "02-2273-8203",
    lat: 37.5702803719655,
    lng: 127.006483855369,
    kakaoUrl: "http://place.map.kakao.com/20536942",
    naverUrl: "https://map.naver.com/p/search/%EB%82%A8%EC%9D%B4%EB%B6%84%EC%8B%9D%20%EC%84%9C%EC%9A%B8%20%EC%A2%85%EB%A1%9C%EA%B5%AC%20%EC%A2%85%EB%A1%9C40%EA%B0%80%EA%B8%B8%203",
    rating: 3.8,
    reviewCount: 21,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDMhzQeuqrSr2KewCVggfpTTLTH6ceQ42UGGiBycukX36EyEN4dEjz95yjCaVcHBqD26j-r5qXcx5sv3r3CzUKTBqGkOlv253VXlahU9Pqi-OHPqsJ_-SpsID_I4-e23yMzyPCEAWQuoTUFmrs98KWJ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "시장골목 할머님이 끓여주시는 수제비라면과 짜볶이?😳 동대문시장 남이분식 라면먹방",
        videoUrl: "https://www.youtube.com/watch?v=3MLTE9Zqcoo",
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-082",
    name: "내고향강원도",
    category: "회",
    address: "인천 제물포구 연안부두로75번길 34",
    phone: "032-883-4547",
    lat: 37.45158339061045,
    lng: 126.60175263207255,
    kakaoUrl: "http://place.map.kakao.com/11597189",
    naverUrl: "https://map.naver.com/p/search/%EB%82%B4%EA%B3%A0%ED%96%A5%EA%B0%95%EC%9B%90%EB%8F%84%20%EC%9D%B8%EC%B2%9C%20%EC%A0%9C%EB%AC%BC%ED%8F%AC%EA%B5%AC%20%EC%97%B0%EC%95%88%EB%B6%80%EB%91%90%EB%A1%9C75%EB%B2%88%EA%B8%B8%2034",
    rating: 4.1,
    reviewCount: 1241,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjC1qdBxTrPST8ykts0yec5QgnzHL5NRWuTDlSzWpEo4PLh26Dez4rd6cj5Ly_MrpKCoQ7FFFQyPaFHQNU3ZnBnNQEtf0BWK_tAdzrhglLBl23P5zVPFOP9Py944OZjE4ZJhfMHVBp8ExopS2Q=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      }
    ]
  },
  {
    id: "jjy-084",
    name: "노가네우동",
    category: "돈까스,우동",
    address: "서울 영등포구 도신로 223-2",
    phone: "02-831-0456",
    lat: 37.5120639983924,
    lng: 126.915838740405,
    kakaoUrl: "http://place.map.kakao.com/27245494",
    naverUrl: "https://map.naver.com/p/search/%EB%85%B8%EA%B0%80%EB%84%A4%EC%9A%B0%EB%8F%99%20%EC%84%9C%EC%9A%B8%20%EC%98%81%EB%93%B1%ED%8F%AC%EA%B5%AC%20%EB%8F%84%EC%8B%A0%EB%A1%9C%20223-2",
    rating: 4.6,
    reviewCount: 109,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAH6LVMmpAQHpMKMIfMdFxdQKKV7rLBCl7tAPjF1pGcWFRPGwehwj8Fg96BR3yVLfJ4U2c8R6iJ-jVNHdaRJ9mZTJ4RYHkqGYErkAtXuS9MqwXb2Zm4YIReEe78N2bNecHUSyhH2mmww0PPiHFTSNtLwQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-086",
    name: "녹원",
    category: "한식",
    address: "전북특별자치도 순창군 순창읍 순창5길 28",
    phone: null,
    lat: 35.373831406942145,
    lng: 127.13974303424155,
    kakaoUrl: "http://place.map.kakao.com/9704834",
    naverUrl: "https://map.naver.com/p/search/%EB%85%B9%EC%9B%90%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%88%9C%EC%B0%BD%EA%B5%B0%20%EC%88%9C%EC%B0%BD%EC%9D%8D%20%EC%88%9C%EC%B0%BD5%EA%B8%B8%2028",
    rating: 3.2,
    reviewCount: 41,
    photoUrl: null,
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "동네 사장님들 모이셨습니다🤣 김치와 보쌈이 들어간 순창 삼합??먹방",
        videoUrl: "https://www.youtube.com/watch?v=R4l1zUbM-dM",
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-087",
    name: "놀부만두",
    category: "분식",
    address: "서울 동대문구 망우로16길 15",
    phone: "02-2241-7550",
    lat: 37.58936199352348,
    lng: 127.06150364912116,
    kakaoUrl: "http://place.map.kakao.com/16063288",
    naverUrl: "https://map.naver.com/p/search/%EB%86%80%EB%B6%80%EB%A7%8C%EB%91%90%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EB%A7%9D%EC%9A%B0%EB%A1%9C16%EA%B8%B8%2015",
    rating: 4.2,
    reviewCount: 302,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCR371OGiY1TKrPcNRjaUdmkFnr5QodvV30R-ZeUIufHf6ACR_hca_M6MDXxEohkkRvFX710dRXmt6YqzAAP1-G0Mubt_kAT7QfSK3UP0ojyBgovObOIfhtB6jVMrCLb0Idev48ii6b_MeJqw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-089",
    name: "눈나무집",
    category: "한식",
    address: "서울 종로구 삼청로 136-1",
    phone: "02-739-6742",
    lat: 37.58746562127582,
    lng: 126.98188224468566,
    kakaoUrl: "http://place.map.kakao.com/8193918",
    naverUrl: "https://map.naver.com/p/search/%EB%88%88%EB%82%98%EB%AC%B4%EC%A7%91%20%EC%84%9C%EC%9A%B8%20%EC%A2%85%EB%A1%9C%EA%B5%AC%20%EC%82%BC%EC%B2%AD%EB%A1%9C%20136-1",
    rating: 3.8,
    reviewCount: 516,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBBW7L3dKcR8VBxrr2TQud69FeXOFVhSEK9WjhKnIrRRBvZHLVpLBR-GEpB6WvpElV5cj-TD0PMtkoOBCo25OaCCF21f4zNIQdKg9YUB6JLs8TPRYzU63weRFt_pHjBv-RDJ6SBYtvC9kJap9k=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "국수팔아서 빌딩을 세웠다구요?!😳 삼청동 눈나무집 국수 먹방",
        videoUrl: "https://www.youtube.com/watch?v=ayjSkDH_Vtw",
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-090",
    name: "뉴타운 생양고기",
    category: "육류,고기",
    address: "서울 중구 난계로 205",
    phone: "02-2231-7712",
    lat: 37.569842175425,
    lng: 127.023267260026,
    kakaoUrl: "http://place.map.kakao.com/1198457054",
    naverUrl: "https://map.naver.com/p/search/%EB%89%B4%ED%83%80%EC%9A%B4%20%EC%83%9D%EC%96%91%EA%B3%A0%EA%B8%B0%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EB%82%9C%EA%B3%84%EB%A1%9C%20205",
    rating: 4.1,
    reviewCount: 59,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBuwM2ij6Y-n99Qft04vLwCbBnicc00rg6TKo55vbwlXglGo0Bd5lSktbrlIEzrwTP-TOp2VSBDKpwwBg4UCEoELGc9oxJ9vRfHqECH7MQDAD-RKwU-QYN3-M8h3cOUZElOnGgq2XoToemW=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-091",
    name: "다래함박스텍",
    category: "돈까스,우동",
    address: "서울 강북구 수유로 20-2",
    phone: "02-2241-7558",
    lat: 37.6327573067632,
    lng: 127.019032803713,
    kakaoUrl: "http://place.map.kakao.com/16380488",
    naverUrl: "https://map.naver.com/p/search/%EB%8B%A4%EB%9E%98%ED%95%A8%EB%B0%95%EC%8A%A4%ED%85%8D%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%B6%81%EA%B5%AC%20%EC%88%98%EC%9C%A0%EB%A1%9C%2020-2",
    rating: 4.4,
    reviewCount: 1334,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjC3rDRRSczIvvnPn2DFhb1thYkgqxllUgOSToY_-lCO0mhgIxSQW2Nx_Yx6STxx4E0r7O1m5I-Uqif31fNWJs7wQlI4pgv1KFoYSyXOuwM7t0vNhcAIpc8JL4QA53kRGs6JCXGwqM6PyIASsw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 양식 맛집."
      }
    ]
  },
  {
    id: "jjy-092",
    name: "다리집 본점",
    category: "떡볶이",
    address: "부산 수영구 남천바다로10번길 70",
    phone: null,
    lat: 35.14650006857246,
    lng: 129.11068698324127,
    kakaoUrl: "http://place.map.kakao.com/8849564",
    naverUrl: "https://map.naver.com/p/search/%EB%8B%A4%EB%A6%AC%EC%A7%91%20%EB%B3%B8%EC%A0%90%20%EB%B6%80%EC%82%B0%20%EC%88%98%EC%98%81%EA%B5%AC%20%EB%82%A8%EC%B2%9C%EB%B0%94%EB%8B%A4%EB%A1%9C10%EB%B2%88%EA%B8%B8%2070",
    rating: 3.5,
    reviewCount: 1736,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD3f6GphLaJBZgnRe75Yg3EAZlehbKTz7eB2S9TZqMZQJrJtIgjYURY05Z2Lv3y6m3kYx0QEFGvY2VMHkShSjxKDRaHz47XWQx71TPbuvuTHhZUFqWrVMyMois014Nmz0mWLtHoZooVzfYjNw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-093",
    name: "닭동가리 강남역점",
    category: "치킨",
    address: "서울 서초구 서초대로77길 37",
    phone: "010-9906-7680",
    lat: 37.5010125807001,
    lng: 127.02498183450759,
    kakaoUrl: "http://place.map.kakao.com/1395737067",
    naverUrl: "https://map.naver.com/p/search/%EB%8B%AD%EB%8F%99%EA%B0%80%EB%A6%AC%20%EA%B0%95%EB%82%A8%EC%97%AD%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EC%84%9C%EC%B4%88%EB%8C%80%EB%A1%9C77%EA%B8%B8%2037",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAYkE-6u3fMvd-Rsh5zraTX40uYFfsVTRg1lRddPaBg4P5YZF3zA3ymR6Qvc0cvTmf9-FaZx_g9V6VT3kmZyAfPorm8ep52Os6sm7V4iVOjzWAS_dAjkIgAKoTiF59F9U5Id38dNdx4MNus6wfU8Gw5Nw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 치킨 전문점."
      }
    ]
  },
  {
    id: "jjy-094",
    name: "답십리별미",
    category: "한식",
    address: "서울 동대문구 답십리로48길 98",
    phone: "02-2248-1419",
    lat: 37.5683708198862,
    lng: 127.057567647305,
    kakaoUrl: "http://place.map.kakao.com/46948751",
    naverUrl: "https://map.naver.com/p/search/%EB%8B%B5%EC%8B%AD%EB%A6%AC%EB%B3%84%EB%AF%B8%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EB%8B%B5%EC%8B%AD%EB%A6%AC%EB%A1%9C48%EA%B8%B8%2098",
    rating: 4.5,
    reviewCount: 89,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjB-s8wFXOjK85heUOL1MHmGaOT932YTraabMOiHkU9p2VhroT05Auhv9ydHPPSylyxGaOty0soYSm8eA8gvrR9fUJDrSSFxIw7yiB_arFedYrmGHUAUhgQAKoMhQxD7j_9wwNxv3ziefCg-cw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-095",
    name: "당진제일꽃게장",
    category: "게,대게",
    address: "충남 당진시 백암로 246",
    phone: "041-353-6379",
    lat: 36.89195456399797,
    lng: 126.6252985726962,
    kakaoUrl: "http://place.map.kakao.com/20644347",
    naverUrl: "https://map.naver.com/p/search/%EB%8B%B9%EC%A7%84%EC%A0%9C%EC%9D%BC%EA%BD%83%EA%B2%8C%EC%9E%A5%20%EC%B6%A9%EB%82%A8%20%EB%8B%B9%EC%A7%84%EC%8B%9C%20%EB%B0%B1%EC%95%94%EB%A1%9C%20246",
    rating: 4,
    reviewCount: 397,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAkdV-z78L6OdO9fVJLvhZF6-7V2O8fYa7pscX3Pg7GlxVUTwDmZ5Qi6LV6BrZVF9HEsTAmOg0oc-VDGJlDlGoo-8VfT6XqdPLz65pwaJobZ2T1BLOnScjytkdEo4g7hjwJp5QsTnStA4UaTQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-096",
    name: "대공원포도밭",
    category: "오리",
    address: "경기 과천시 대공원대로 26",
    phone: "02-502-5289",
    lat: 37.436434321481826,
    lng: 127.00318642815554,
    kakaoUrl: "http://place.map.kakao.com/15724336",
    naverUrl: "https://map.naver.com/p/search/%EB%8C%80%EA%B3%B5%EC%9B%90%ED%8F%AC%EB%8F%84%EB%B0%AD%20%EA%B2%BD%EA%B8%B0%20%EA%B3%BC%EC%B2%9C%EC%8B%9C%20%EB%8C%80%EA%B3%B5%EC%9B%90%EB%8C%80%EB%A1%9C%2026",
    rating: 4,
    reviewCount: 164,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjC8K1BwKlGNW2k_1EMhUsBFBpFntPhQKvllG_Xe2kOsG7_K2-04Mhr2zlA3g916uZ9MzeTQWcsgR8ACpYlnioPfKqP5ee8NEX89T4kAmeyv0LIjnmu5JJnk81hgfIVMYEFz6B9m5UzIqzS0csk=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "역대급 사장님 반응ㅋㅋㅋ🤣 야외에서먹는 과천 대공원포도밭 오리주물럭 먹방",
        videoUrl: "https://www.youtube.com/watch?v=F1ms0elgPLQ",
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-097",
    name: "대궁",
    category: "한정식",
    address: "전북특별자치도 순창군 순창읍 순창5길 20",
    phone: "063-653-8234",
    lat: 35.373554792626,
    lng: 127.14044024629,
    kakaoUrl: "http://place.map.kakao.com/18495699",
    naverUrl: "https://map.naver.com/p/search/%EB%8C%80%EA%B6%81%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%88%9C%EC%B0%BD%EA%B5%B0%20%EC%88%9C%EC%B0%BD%EC%9D%8D%20%EC%88%9C%EC%B0%BD5%EA%B8%B8%2020",
    rating: 3.9,
    reviewCount: 82,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDmWUqrvmlmk6p4A71EjXeCRpeRqNKEH4p0fboacb052FdBJXyPWDBMwTTKgotuofGjr8pgMpOqOeKGeoHuel2mMitTSBi1hP8rVTvHlVdoXn5q54xIoQ5c1u82zYLrM4C-sR4OhVXXE72mpg=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "동네 사장님들 모이셨습니다🤣 김치와 보쌈이 들어간 순창 삼합??먹방",
        videoUrl: "https://www.youtube.com/watch?v=R4l1zUbM-dM",
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-099",
    name: "대일분식",
    category: "분식",
    address: "전북특별자치도 익산시 중앙로3길 26-7",
    phone: "063-852-2374",
    lat: 35.9415476664055,
    lng: 126.950561996469,
    kakaoUrl: "http://place.map.kakao.com/21506143",
    naverUrl: "https://map.naver.com/p/search/%EB%8C%80%EC%9D%BC%EB%B6%84%EC%8B%9D%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%9D%B5%EC%82%B0%EC%8B%9C%20%EC%A4%91%EC%95%99%EB%A1%9C3%EA%B8%B8%2026-7",
    rating: 4.3,
    reviewCount: 71,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBa3F_wpv-qttANCgh2N-p3sTW4Ox740Pe3HvOtKLDIOueQq6CjHclcEAICNhV4Gh5cwooieXWcar79l0UlT_nb05AZ83bF8gYkODp3i_moYK5e4ezK87mTDnCJl5LztJHPCxRhuCA0taTNjb3xV_4n=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-100",
    name: "대흥양다리바베큐 건대점",
    category: "중국요리",
    address: "서울 광진구 아차산로30길 39",
    phone: "02-468-6669",
    lat: 37.53870567213866,
    lng: 127.06739663259648,
    kakaoUrl: "http://place.map.kakao.com/14663453",
    naverUrl: "https://map.naver.com/p/search/%EB%8C%80%ED%9D%A5%EC%96%91%EB%8B%A4%EB%A6%AC%EB%B0%94%EB%B2%A0%ED%81%90%20%EA%B1%B4%EB%8C%80%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B4%91%EC%A7%84%EA%B5%AC%20%EC%95%84%EC%B0%A8%EC%82%B0%EB%A1%9C30%EA%B8%B8%2039",
    rating: 4.3,
    reviewCount: 317,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCV-GHSTzpUSe94ofedBODaS8uzkJ1kcv5qqeJH6CapLFj4WSLo0QP5ft-6U2-17j4kXWUtltvAsbABqeoZCAWJCHEEoM_BvO_jr5yo_tyA-HIAO9PrNod-MKsdFXJLncjJor3xt5JFTG9zoPX7hLRB7Q=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      },
      {
        name: "또간집(풍자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "건대 맛집으로 소개됐으며, 양다리 바베큐와 꿔바로우가 또갈집으로 선정됐다."
      }
    ]
  },
  {
    id: "jjy-101",
    name: "더즌오이스터 한남점",
    category: "굴,전복",
    address: "서울 용산구 이태원로54길 63-4",
    phone: "02-790-0916",
    lat: 37.5354984137461,
    lng: 127.001380347103,
    kakaoUrl: "http://place.map.kakao.com/702878329",
    naverUrl: "https://map.naver.com/p/search/%EB%8D%94%EC%A6%8C%EC%98%A4%EC%9D%B4%EC%8A%A4%ED%84%B0%20%ED%95%9C%EB%82%A8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%EC%9D%B4%ED%83%9C%EC%9B%90%EB%A1%9C54%EA%B8%B8%2063-4",
    rating: 4.4,
    reviewCount: 48,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBJv_Y8hHWzG_dFr5shWwd9IGYHF7X13LuMyShhSgUYkiJ0ShuFkWTGOLPmte2BX_itDacxMClYiA5y_hKMnism5QQPx39Myra_fnIcUGH16gTP8nUjPZnpL-7xpyLWtcKaLyEpnDiokuqLuw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 양식 맛집."
      }
    ]
  },
  {
    id: "jjy-102",
    name: "덕수식당",
    category: "한식",
    address: "충남 태안군 태안읍 중앙로 133-8",
    phone: "041-675-6878",
    lat: 36.75164727550525,
    lng: 126.3031049239171,
    kakaoUrl: "http://place.map.kakao.com/8891473",
    naverUrl: "https://map.naver.com/p/search/%EB%8D%95%EC%88%98%EC%8B%9D%EB%8B%B9%20%EC%B6%A9%EB%82%A8%20%ED%83%9C%EC%95%88%EA%B5%B0%20%ED%83%9C%EC%95%88%EC%9D%8D%20%EC%A4%91%EC%95%99%EB%A1%9C%20133-8",
    rating: 4.5,
    reviewCount: 591,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjChtvrJuyjawfThP8qwQHFwbXp1BDva2fZE9QExKTRwEwxenPSboTLjBCGXWVkKO_y3-sPle8PxileP2KGp_pyxQ-NzIGxMwRcmRaje-eiPbsdln39vo8ZwNObQNwKVVXPyisEiZ6gjYoQACWh3iKRV=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-103",
    name: "덴푸라키이로",
    category: "일식",
    address: "서울 강남구 강남대로 652",
    phone: null,
    lat: 37.519567166315,
    lng: 127.019083199802,
    kakaoUrl: "http://place.map.kakao.com/1013923338",
    naverUrl: "https://map.naver.com/p/search/%EB%8D%B4%ED%91%B8%EB%9D%BC%ED%82%A4%EC%9D%B4%EB%A1%9C%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EA%B0%95%EB%82%A8%EB%8C%80%EB%A1%9C%20652",
    rating: 4.8,
    reviewCount: 49,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCaMJmpgx2edaGPvX2jAcwhlzULCns4kTekC99ARYbgODUlwzj0rLYni1cqo6UBwCj4y09BE3tEBY_61RMNJP_Eu8fiSID0nts-w2dMtMx08MDt6u9jr0wnVf6c_l8djKuEWmVmcscX0uRXNg=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      },
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "내년까지 예약이 꽉 찼다는 튀김(덴푸라) 오마카세 전문점으로 소개됐다."
      }
    ]
  },
  {
    id: "jjy-104",
    name: "도산정육 청담본점",
    category: "육류,고기",
    address: "서울 강남구 선릉로155길 12",
    phone: "02-546-9206",
    lat: 37.5255945428196,
    lng: 127.038814300466,
    kakaoUrl: "http://place.map.kakao.com/864103404",
    naverUrl: "https://map.naver.com/p/search/%EB%8F%84%EC%82%B0%EC%A0%95%EC%9C%A1%20%EC%B2%AD%EB%8B%B4%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%84%A0%EB%A6%89%EB%A1%9C155%EA%B8%B8%2012",
    rating: 4.9,
    reviewCount: 133,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBNnBbut0UT39b57FRm96aD9ylrfxQrVywE-9tQE3RYbT14EPPxiALi6OXUe23opd0pyc4ZrrdFtviRDv7MpTIThVsiQ7qe5eXpXAM85iz065VxJW0EgaS6esbjfYXrGwMyU4aMPfoTQaexsw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-105",
    name: "독도반점 저동점",
    category: "중국요리",
    address: "경북 울릉군 울릉읍 울릉순환로 211-3",
    phone: "054-791-3323",
    lat: 37.4920545696796,
    lng: 130.909884310444,
    kakaoUrl: "http://place.map.kakao.com/1330892374",
    naverUrl: "https://map.naver.com/p/search/%EB%8F%85%EB%8F%84%EB%B0%98%EC%A0%90%20%EC%A0%80%EB%8F%99%EC%A0%90%20%EA%B2%BD%EB%B6%81%20%EC%9A%B8%EB%A6%89%EA%B5%B0%20%EC%9A%B8%EB%A6%89%EC%9D%8D%20%EC%9A%B8%EB%A6%89%EC%88%9C%ED%99%98%EB%A1%9C%20211-3",
    rating: 5,
    reviewCount: 1,
    photoUrl: null,
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-106",
    name: "돈까스먹는용만이",
    category: "돈까스,우동",
    address: "서울 노원구 한글비석로20길 52",
    phone: "02-931-8870",
    lat: 37.66123153644016,
    lng: 127.07464160645443,
    kakaoUrl: "http://place.map.kakao.com/12460195",
    naverUrl: "https://map.naver.com/p/search/%EB%8F%88%EA%B9%8C%EC%8A%A4%EB%A8%B9%EB%8A%94%EC%9A%A9%EB%A7%8C%EC%9D%B4%20%EC%84%9C%EC%9A%B8%20%EB%85%B8%EC%9B%90%EA%B5%AC%20%ED%95%9C%EA%B8%80%EB%B9%84%EC%84%9D%EB%A1%9C20%EA%B8%B8%2052",
    rating: 4.1,
    reviewCount: 737,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCXJyRW21Zdh8mzqWjrxsVO8M-37s-VKgmUTNbQDguPHB6BKKwjXHws4HXCCXW2vnTHzj3C-U-Ep6-S2pI9uVN4lr_SQPCWTLhxD5speeocq4SupFEFUZb2FhoEsOb3L-ICkDmRQsCZVUwtFg=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      }
    ]
  },
  {
    id: "jjy-107",
    name: "산골녹차냉면 본점",
    category: "냉면",
    address: "서울 용산구 효창원로 147",
    phone: "02-716-1988",
    lat: 37.5412802907394,
    lng: 126.961867796378,
    kakaoUrl: "http://place.map.kakao.com/13096291",
    naverUrl: "https://map.naver.com/p/search/%EC%82%B0%EA%B3%A8%EB%85%B9%EC%B0%A8%EB%83%89%EB%A9%B4%20%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%ED%9A%A8%EC%B0%BD%EC%9B%90%EB%A1%9C%20147",
    rating: 3.9,
    reviewCount: 48,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjASwArE-oeZftsk-yqEUaMFKzTlT7JA7bhyxeJpKR3_xJHNTM2ufHeNU0Wo2iFE7URRc4z88YqeDSG7pHySqh8EWwkhVpBZ_HhQB0M5MAXM3bAO-S3tYXWMiIqnWHjX2RLDz6D0ycu2C8YHMw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      }
    ]
  },
  {
    id: "jjy-108",
    name: "돈미정",
    category: "돈까스,우동",
    address: "충북 청주시 청원구 향군로31번길 26",
    phone: null,
    lat: 36.6480841693189,
    lng: 127.485682737193,
    kakaoUrl: "http://place.map.kakao.com/1298842981",
    naverUrl: "https://map.naver.com/p/search/%EB%8F%88%EB%AF%B8%EC%A0%95%20%EC%B6%A9%EB%B6%81%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%EC%B2%AD%EC%9B%90%EA%B5%AC%20%ED%96%A5%EA%B5%B0%EB%A1%9C31%EB%B2%88%EA%B8%B8%2026",
    rating: 4.8,
    reviewCount: 4,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBmvvZyKlmYEPszn1J9q7xep_JEppPb_Lw2iMk9Fo1cLZGsqAxpumm-3iFPtLJZ1SA0BQMmdqOSGk3xZewb5Jsrh0ZcboFlm7lWcfWZD4O6PHQzsL0UWwUCY6Fgo2Esn3m2viMEiy0nyEjpVZUv6tojGQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      }
    ]
  },
  {
    id: "jjy-109",
    name: "돈불식당 본점",
    category: "불고기,두루치기",
    address: "인천 남동구 문화서로28번길 25-2",
    phone: "032-435-1999",
    lat: 37.4476746204149,
    lng: 126.697764259871,
    kakaoUrl: "http://place.map.kakao.com/12639198",
    naverUrl: "https://map.naver.com/p/search/%EB%8F%88%EB%B6%88%EC%8B%9D%EB%8B%B9%20%EB%B3%B8%EC%A0%90%20%EC%9D%B8%EC%B2%9C%20%EB%82%A8%EB%8F%99%EA%B5%AC%20%EB%AC%B8%ED%99%94%EC%84%9C%EB%A1%9C28%EB%B2%88%EA%B8%B8%2025-2",
    rating: 4.2,
    reviewCount: 239,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBot3U7O6J3VllzJKXEDcD2xV-lNry6EBVNcuiwk_oWGEaaAh0WCqTVIkFnfUB5RHXa-AgaMyYjGpXPM13EYwzS3D9JB3WOwVyzO5WGN13IpYhwFWljvnQ5LlC24ncDP0GYzp9npbjjmFOxBw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-110",
    name: "돌실숯불회관",
    category: "육류,고기",
    address: "전남광주통합특별시 곡성군 석곡면 석곡로 52-1",
    phone: "061-363-1457",
    lat: 35.1316768393353,
    lng: 127.253679462366,
    kakaoUrl: "http://place.map.kakao.com/8916213",
    naverUrl: "https://map.naver.com/p/search/%EB%8F%8C%EC%8B%A4%EC%88%AF%EB%B6%88%ED%9A%8C%EA%B4%80%20%EC%A0%84%EB%82%A8%EA%B4%91%EC%A3%BC%ED%86%B5%ED%95%A9%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EA%B3%A1%EC%84%B1%EA%B5%B0%20%EC%84%9D%EA%B3%A1%EB%A9%B4%20%EC%84%9D%EA%B3%A1%EB%A1%9C%2052-1",
    rating: 4.1,
    reviewCount: 91,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDtemxeYY-PWAxGvLDCsoUre_VJsLRLWy3vv3h2kdXhqdgzGV8iQdHYlXcMQwrP8LL_W2po0-V38knoz9Aqz8OGIOosp7U3w528lMksmcHQAc397U3GaCjeEBOmknIdIzv1OpKPePb8jPSEXw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "곡성 120년 전통 석쇠구이? 14인분만 먹방",
        videoUrl: "https://www.youtube.com/watch?v=hryirOKFk38",
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-111",
    name: "동대문엽기떡볶이 본점홀매장",
    category: "동대문엽기떡볶이",
    address: "서울 중구 퇴계로75길 15",
    phone: "02-2234-8592",
    lat: 37.56611602083025,
    lng: 127.01558053426601,
    kakaoUrl: "http://place.map.kakao.com/1624572111",
    naverUrl: "https://map.naver.com/p/search/%EB%8F%99%EB%8C%80%EB%AC%B8%EC%97%BD%EA%B8%B0%EB%96%A1%EB%B3%B6%EC%9D%B4%20%EB%B3%B8%EC%A0%90%ED%99%80%EB%A7%A4%EC%9E%A5%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%ED%87%B4%EA%B3%84%EB%A1%9C75%EA%B8%B8%2015",
    rating: 4,
    reviewCount: 266,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCjcNiUohLhcIahMUpQyQcARHkrfOc1U_maW1IiFZX5YB63Q-TSARNdubLAxnwHUOP07-emoiOD8xk6hUbkUcBwf2vqKZSfKlcRx9eV_Zj4CU9OEVXQW_rbKrnLxI_qhfNPbGJvOordI8W3XOxxpIBnEg=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-112",
    name: "동대문엽기떡볶이 신촌점",
    category: "동대문엽기떡볶이",
    address: "서울 서대문구 연세로5가길 14",
    phone: "02-365-8592",
    lat: 37.5573888532887,
    lng: 126.9359739097304,
    kakaoUrl: "http://place.map.kakao.com/17764441",
    naverUrl: "https://map.naver.com/p/search/%EB%8F%99%EB%8C%80%EB%AC%B8%EC%97%BD%EA%B8%B0%EB%96%A1%EB%B3%B6%EC%9D%B4%20%EC%8B%A0%EC%B4%8C%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EC%97%B0%EC%84%B8%EB%A1%9C5%EA%B0%80%EA%B8%B8%2014",
    rating: 3.6,
    reviewCount: 44,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCUVjY3hHgWrbtVvjETpBrmmFxHcSGUPHuJjfAe547-OltDMJ-3ER_8FLOVujbg7YVxAa-U9ve6QCxZJ31BqMoR2HNYQ09gkGUr6LP-Oe2FLlpbabEsd4TvfC5G5sX5S5rr4SzngFWb_XuaSA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-113",
    name: "동문시장빨간오뎅",
    category: "분식",
    address: "충북 제천시 독순로13길 7",
    phone: "043-642-8125",
    lat: 37.1390203271429,
    lng: 128.212877628413,
    kakaoUrl: "http://place.map.kakao.com/549977021",
    naverUrl: "https://map.naver.com/p/search/%EB%8F%99%EB%AC%B8%EC%8B%9C%EC%9E%A5%EB%B9%A8%EA%B0%84%EC%98%A4%EB%8E%85%20%EC%B6%A9%EB%B6%81%20%EC%A0%9C%EC%B2%9C%EC%8B%9C%20%EB%8F%85%EC%88%9C%EB%A1%9C13%EA%B8%B8%207",
    rating: 3.5,
    reviewCount: 13,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCJ6tdjqI4CQjepyksxG_vfD1GMNcDNm0gOZT5-CSG-JoTHfeWC23oHdNlrNcKK9CT_ljhToUOYZNPVBg0IvMKr2TZsoiEqBzqXhYwQYnOn2RQS0onQ0SpA1vIJT4mgm98_NIGzEgLsO6ylFfI=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-114",
    name: "동방밀면",
    category: "국수",
    address: "부산 영도구 꿈나무길 239",
    phone: "051-416-9592",
    lat: 35.0866836875615,
    lng: 129.043439197984,
    kakaoUrl: "http://place.map.kakao.com/8914478",
    naverUrl: "https://map.naver.com/p/search/%EB%8F%99%EB%B0%A9%EB%B0%80%EB%A9%B4%20%EB%B6%80%EC%82%B0%20%EC%98%81%EB%8F%84%EA%B5%AC%20%EA%BF%88%EB%82%98%EB%AC%B4%EA%B8%B8%20239",
    rating: 4.3,
    reviewCount: 381,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCWven_F0Esw_CenyEkLe8RP5mPXaHM3vEYcXfjq6mCw8698gQYQJzAL0fy6-eHI5am0s4QmepaizkQZR_G8xndb-sVnJIUdG5Gjl2BvUxrS7z482bThLog9_HWfAVwEv5FGRn-UkbwXhAxVZZ-z1rZ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-115",
    name: "동삼동불짬뽕",
    category: "중국요리",
    address: "부산 영도구 동삼남로 21",
    phone: "051-403-7388",
    lat: 35.0778493510842,
    lng: 129.068050623359,
    kakaoUrl: "http://place.map.kakao.com/19041717",
    naverUrl: "https://map.naver.com/p/search/%EB%8F%99%EC%82%BC%EB%8F%99%EB%B6%88%EC%A7%AC%EB%BD%95%20%EB%B6%80%EC%82%B0%20%EC%98%81%EB%8F%84%EA%B5%AC%20%EB%8F%99%EC%82%BC%EB%82%A8%EB%A1%9C%2021",
    rating: 3.6,
    reviewCount: 142,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDowgMHFhmnC3uNOKuXiWC9zEw8a-fzcbsXwJnxldo4-DmTcN4p_nXqcaKdZLTOFWhiw5W5e0jbcl7eOV-iZrUNUSEqOTGKNDcp6ThWOuhGWuoiEg-DomMLfWFZcSGxk-aaZY4sXHCvmzbA3A=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-116",
    name: "동춘이만두",
    category: "분식",
    address: "부산 부산진구 당감로25번길 11",
    phone: "051-896-1869",
    lat: 35.1640545179476,
    lng: 129.038947080611,
    kakaoUrl: "http://place.map.kakao.com/27361254",
    naverUrl: "https://map.naver.com/p/search/%EB%8F%99%EC%B6%98%EC%9D%B4%EB%A7%8C%EB%91%90%20%EB%B6%80%EC%82%B0%20%EB%B6%80%EC%82%B0%EC%A7%84%EA%B5%AC%20%EB%8B%B9%EA%B0%90%EB%A1%9C25%EB%B2%88%EA%B8%B8%2011",
    rating: 4.4,
    reviewCount: 72,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjArvi-v-s9mTkwmgtoQFRF5AmP3YvEnvXxdCmth7X8HOXrhUIKNXRg2T2185LsQ5PZLu5j4Qwpsl-PIkNc-LigPyF3uJWi7AgJUWR9jCZlP8cPCfYZ_K6iBE1G_uvhxy88QFN-qVts5vyAYq8E=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-117",
    name: "돼지집 본관",
    category: "불고기,두루치기",
    address: "경기 광명시 기아로 56",
    phone: "02-805-9407",
    lat: 37.4359646740914,
    lng: 126.885741295942,
    kakaoUrl: "http://place.map.kakao.com/17948208",
    naverUrl: "https://map.naver.com/p/search/%EB%8F%BC%EC%A7%80%EC%A7%91%20%EB%B3%B8%EA%B4%80%20%EA%B2%BD%EA%B8%B0%20%EA%B4%91%EB%AA%85%EC%8B%9C%20%EA%B8%B0%EC%95%84%EB%A1%9C%2056",
    rating: 4.2,
    reviewCount: 3102,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDmD2eZ-slBKayZI9_RAFRon0J4SZ8nlrh-MPYeP7qKZZDyDlxb_TIo4wozqGrSok3j5yDrRp2ymMo6nZNfluqX8bE5RhPsW4OfmuNxeNYfP-tgS1fujvbSJucbCNT2jUmNkWQMbgA6jTPJtRyL5d4cpw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-118",
    name: "두찜 한양대점",
    category: "두찜",
    address: "서울 성동구 살곶이길 346-1",
    phone: "02-2295-9959",
    lat: 37.556311585523,
    lng: 127.041014498032,
    kakaoUrl: "http://place.map.kakao.com/1895181104",
    naverUrl: "https://map.naver.com/p/search/%EB%91%90%EC%B0%9C%20%ED%95%9C%EC%96%91%EB%8C%80%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%84%B1%EB%8F%99%EA%B5%AC%20%EC%82%B4%EA%B3%B6%EC%9D%B4%EA%B8%B8%20346-1",
    rating: 3.4,
    reviewCount: 5,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDLWbPjnSyJyjn89TgQN3AZxCJ0Dt9Z-cSVJnT8liRym9zjWDLePyNvK-Cs3van5RLuQSyoFH_ZuM5_Ul_nHtSdxq7gOvONhaEpa6xde2wzkCIqrpOPvJNUwfAYE__ddJV-oCSFLpjoDm8D4Q=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 찜·탕 맛집."
      }
    ]
  },
  {
    id: "jjy-119",
    name: "두툼 강남점",
    category: "육류,고기",
    address: "서울 강남구 선릉로93길 56",
    phone: "0507-1373-0017",
    lat: 37.5042469881733,
    lng: 127.04415042593,
    kakaoUrl: "http://place.map.kakao.com/144873563",
    naverUrl: "https://map.naver.com/p/search/%EB%91%90%ED%88%BC%20%EA%B0%95%EB%82%A8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%84%A0%EB%A6%89%EB%A1%9C93%EA%B8%B8%2056",
    rating: 4.8,
    reviewCount: 13,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAWq5N3g-OToNX2dTbPwYQIBlQfLJIVLYWVS0y0NfpR9nNdctie9KkY2bQhrEeM9t80D2HB1i9gMP6hnWZwC4Wl2EOP6DZpETa1NsqRY6vPs6nFg9WdWv4534kxS48Sdl29Y_o0-KbQDdZn6XaXa4eCXg=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-120",
    name: "등대경양식",
    category: "양식",
    address: "인천 제물포구 제물량로 190",
    phone: "032-773-3473",
    lat: 37.47079090684128,
    lng: 126.62313832954209,
    kakaoUrl: "http://place.map.kakao.com/8958913",
    naverUrl: "https://map.naver.com/p/search/%EB%93%B1%EB%8C%80%EA%B2%BD%EC%96%91%EC%8B%9D%20%EC%9D%B8%EC%B2%9C%20%EC%A0%9C%EB%AC%BC%ED%8F%AC%EA%B5%AC%20%EC%A0%9C%EB%AC%BC%EB%9F%89%EB%A1%9C%20190",
    rating: 3.4,
    reviewCount: 107,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAbZmxhhr2WYHdQRoMeqazq4MYPQZHBok3AMd1DfU4qLiKymhVa54NqPptiG94QsjlqRAtXA3yojbSZGvwmRt872IR5OfbQgg460AZOYWoHIfe8YcFbMJZDzt47WGhikUP0XjhrRLpxURByQhnelmSB-w=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      }
    ]
  },
  {
    id: "jjy-121",
    name: "등마루 족발 연구소",
    category: "족발,보쌈",
    address: "서울 영등포구 선유로49길 32-1",
    phone: "02-2678-4060",
    lat: 37.5371270187173,
    lng: 126.89434459286795,
    kakaoUrl: "http://place.map.kakao.com/21423018",
    naverUrl: "https://map.naver.com/p/search/%EB%93%B1%EB%A7%88%EB%A3%A8%20%EC%A1%B1%EB%B0%9C%20%EC%97%B0%EA%B5%AC%EC%86%8C%20%EC%84%9C%EC%9A%B8%20%EC%98%81%EB%93%B1%ED%8F%AC%EA%B5%AC%20%EC%84%A0%EC%9C%A0%EB%A1%9C49%EA%B8%B8%2032-1",
    rating: 3.9,
    reviewCount: 65,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBcIX5BUnJE59V31S7jMjDpnnZpk2w718gEa_2N1qhsnU2Mei57v0QwK3621KJUYVAvT6ROtnj12nACjh7P1V2xQYPUxOYFOH-zO8ZTPzMHkSJ2F4aYtMrwjQP6mCDnIWrH5RMG_aEDq6TT=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 족발·보쌈 맛집."
      }
    ]
  },
  {
    id: "jjy-122",
    name: "똘이떡볶이",
    category: "떡볶이",
    address: "강원특별자치도 원주시 중앙시장길 11",
    phone: "033-731-8082",
    lat: 37.35075696933128,
    lng: 127.94902143331666,
    kakaoUrl: "http://place.map.kakao.com/21343398",
    naverUrl: "https://map.naver.com/p/search/%EB%98%98%EC%9D%B4%EB%96%A1%EB%B3%B6%EC%9D%B4%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%9B%90%EC%A3%BC%EC%8B%9C%20%EC%A4%91%EC%95%99%EC%8B%9C%EC%9E%A5%EA%B8%B8%2011",
    rating: 4,
    reviewCount: 50,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjA1nRxqbtBI7eKhiwmCEOrRMiRdwmwoyuIOv8EEG-oZHt0FHz_8E_yWZGK4ndz7bnA9BnoDV0dSWZtUqnKBx8_1VeA-Gst5l3PfQGqHsPU8YZJfDY5t6V4AibzRl4ImQo84a6im6knipMwHalqZrrDt=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-123",
    name: "뜨락",
    category: "육류,고기",
    address: "서울 강남구 영동대로142길 13-3",
    phone: "02-543-2987",
    lat: 37.52443005554326,
    lng: 127.0555790411431,
    kakaoUrl: "http://place.map.kakao.com/7857098",
    naverUrl: "https://map.naver.com/p/search/%EB%9C%A8%EB%9D%BD%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%98%81%EB%8F%99%EB%8C%80%EB%A1%9C142%EA%B8%B8%2013-3",
    rating: 4.4,
    reviewCount: 675,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBXzyuT9HGczTED2WH4gvIH7Me9Ck5SPhXqTrkBCSZAFXSzhrSiqoAEWKUH4CZmi_YfnZ5UUO84f59BV4zW8N6NL3udktZ5TNMGDRIfIIXPYVYMpMNAQCgMK8pFJ_N0BNieiVsEA3TA-VkeW_M_db7WRQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-124",
    name: "뜨란채",
    category: "한식",
    address: "전북특별자치도 순창군 팔덕면 강천로 664-26",
    phone: "063-653-1305",
    lat: 35.41593500639342,
    lng: 127.07754792697243,
    kakaoUrl: "http://place.map.kakao.com/26547556",
    naverUrl: "https://map.naver.com/p/search/%EB%9C%A8%EB%9E%80%EC%B1%84%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%88%9C%EC%B0%BD%EA%B5%B0%20%ED%8C%94%EB%8D%95%EB%A9%B4%20%EA%B0%95%EC%B2%9C%EB%A1%9C%20664-26",
    rating: 4.1,
    reviewCount: 53,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBPeN5dFeYCSlPUwhGwktm7_-eaB_XS8gFUNpw2f4YPSswC1jzpt6eBsZCfmhjlaDR63GWHYhH9WyIE5CqoXKY1pjVvqvAi_qBD92kQ4p9qRqhhoVG7iCokKRTF9BlpH-aHyQoJd5t8pHG0hA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "동네 사장님들 모이셨습니다🤣 김치와 보쌈이 들어간 순창 삼합??먹방",
        videoUrl: "https://www.youtube.com/watch?v=R4l1zUbM-dM",
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-125",
    name: "라면팜 외대점",
    category: "분식",
    address: "서울 동대문구 이문로25길 36",
    phone: "0507-1436-1074",
    lat: 37.5955700336484,
    lng: 127.05752065393662,
    kakaoUrl: "http://place.map.kakao.com/1566501996",
    naverUrl: "https://map.naver.com/p/search/%EB%9D%BC%EB%A9%B4%ED%8C%9C%20%EC%99%B8%EB%8C%80%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EC%9D%B4%EB%AC%B8%EB%A1%9C25%EA%B8%B8%2036",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-126",
    name: "라무진 구로디지털단지역점",
    category: "육류,고기",
    address: "서울 구로구 디지털로34길 43",
    phone: "02-866-1210",
    lat: 37.485152001067,
    lng: 126.898804836896,
    kakaoUrl: "http://place.map.kakao.com/217809792",
    naverUrl: "https://map.naver.com/p/search/%EB%9D%BC%EB%AC%B4%EC%A7%84%20%EA%B5%AC%EB%A1%9C%EB%94%94%EC%A7%80%ED%84%B8%EB%8B%A8%EC%A7%80%EC%97%AD%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B5%AC%EB%A1%9C%EA%B5%AC%20%EB%94%94%EC%A7%80%ED%84%B8%EB%A1%9C34%EA%B8%B8%2043",
    rating: 4.7,
    reviewCount: 22,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBgQd5k5qkF-LGdFAH-AAlaw8V9_e2qiCx2NCX-KmSMEUpVYLVImQjDrAK5XAEVOrtehVxzI4kBGQjUy4FjHphjD1jA-IAfi-vCskHtt3HRxSNUi_fE_o708fFbepThu0tAGilOeFVw8lz15A=s4800-w720",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-127",
    name: "라이너스바베큐",
    category: "양식",
    address: "서울 용산구 녹사평대로32길 15",
    phone: "02-790-2920",
    lat: 37.53366984201281,
    lng: 126.9897008255141,
    kakaoUrl: "http://place.map.kakao.com/25090873",
    naverUrl: "https://map.naver.com/p/search/%EB%9D%BC%EC%9D%B4%EB%84%88%EC%8A%A4%EB%B0%94%EB%B2%A0%ED%81%90%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%EB%85%B9%EC%82%AC%ED%8F%89%EB%8C%80%EB%A1%9C32%EA%B8%B8%2015",
    rating: 4.2,
    reviewCount: 2277,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAGUe5xJJkuFH92OxtXNvtmLJj4fbDSlxSsrmJj7F2BlDYhRH6ncqvcBn0wuPtlQNuy9eFT-bAM3mTQD1nUAe15Pa4xR5_SmouW12NAPJxi_ZnALRS6Xa2AFKh2QcziNfAAgFZyEaQ1_sOwEw=s4800-w640",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-128",
    name: "라칸티나",
    category: "이탈리안",
    address: "서울 중구 을지로 19",
    phone: "02-777-2580",
    lat: 37.56621445453592,
    lng: 126.97994166288005,
    kakaoUrl: "http://place.map.kakao.com/10372376",
    naverUrl: "https://map.naver.com/p/search/%EB%9D%BC%EC%B9%B8%ED%8B%B0%EB%82%98%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EC%9D%84%EC%A7%80%EB%A1%9C%2019",
    rating: 4.2,
    reviewCount: 809,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBLBhcShaXjVxTh6f1aOu6jIbqayvjjIs6x74WM4s_8FZN8JzJpUFx3UlBHY8J0nGh_9o9gv6gxR7ncNT4tr2g3VO6yC_r6b0R5ULXGMbklpJ17X068QKYMEaaPmAV6f725xK2C4SjPXbaliI0=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "우리나라 최초의 이탈리안 레스토랑은 어떨까🤔 을지로 라칸티나 먹방",
        videoUrl: "https://www.youtube.com/watch?v=ZoQf6XgFzRw",
        recommendNote: "쯔양이 방문해 리뷰한 양식 맛집."
      }
    ]
  },
  {
    id: "jjy-129",
    name: "레알라면",
    category: "분식",
    address: "서울 동대문구 회기로25길 23-5",
    phone: "0507-1311-4208",
    lat: 37.59109946331917,
    lng: 127.05532060332087,
    kakaoUrl: "http://place.map.kakao.com/21327910",
    naverUrl: "https://map.naver.com/p/search/%EB%A0%88%EC%95%8C%EB%9D%BC%EB%A9%B4%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC%20%ED%9A%8C%EA%B8%B0%EB%A1%9C25%EA%B8%B8%2023-5",
    rating: 4.6,
    reviewCount: 171,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAQWF2poUQealTwXp4vA0fu_YzAnwjR2qryPhO8ObZJHu_3ndugpuDe25sVmbuWZCp6L6ZS89vo80hpmXyWWmCEk6nnYJtN1eD5iRkePwBGRcS5_oOZc7QWwKtyWvX1laAbwp7Pfo3h73dKdLA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "🔥100명중에 3명만 시킨다는 매운라면🔥 회기동 레알라면 먹방",
        videoUrl: "https://www.youtube.com/watch?v=pRx2cMwyrKU",
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-130",
    name: "롯데리아 면목중앙점",
    category: "롯데리아",
    address: "서울 중랑구 면목로 415",
    phone: "02-439-8245",
    lat: 37.5890322446018,
    lng: 127.087223379478,
    kakaoUrl: "http://place.map.kakao.com/7856782",
    naverUrl: "https://map.naver.com/p/search/%EB%A1%AF%EB%8D%B0%EB%A6%AC%EC%95%84%20%EB%A9%B4%EB%AA%A9%EC%A4%91%EC%95%99%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EB%9E%91%EA%B5%AC%20%EB%A9%B4%EB%AA%A9%EB%A1%9C%20415",
    rating: 3.6,
    reviewCount: 292,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBd6iznrBkJ9BQPtG8JaGB7cDXNEmsr-EWJaEuC7lgtEGCBSJCMUKg7qM6Lu3j6xozCSK7foE2fFqz7i--7W-NiUzlby90bxxdUe6at-54eFwa9crKm9S6yoG1F1WhFIYG2DRLh32B4IyfrnK8=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 패스트푸드 맛집."
      }
    ]
  },
  {
    id: "jjy-131",
    name: "롯데리아 학동역점",
    category: "롯데리아",
    address: "서울 강남구 학동로 219",
    phone: "02-3443-9200",
    lat: 37.5149869390675,
    lng: 127.03321879987563,
    kakaoUrl: "http://place.map.kakao.com/21852012",
    naverUrl: "https://map.naver.com/p/search/%EB%A1%AF%EB%8D%B0%EB%A6%AC%EC%95%84%20%ED%95%99%EB%8F%99%EC%97%AD%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%ED%95%99%EB%8F%99%EB%A1%9C%20219",
    rating: 3.9,
    reviewCount: 222,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDy2MwrYcmz96eNM_l4vXyeqmcGJXSLDuNrMW1GQZsYAh-VJpnHqNS1kn_gpko7Jcv39w19w1n73wXA7192D6DfssBcsHZeZoy4bzrgdCe-5Q18UILF08q-BPoSrLvLOdNq0NlPQ_2P0QH_MGI=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 맛집."
      }
    ]
  },
  {
    id: "jjy-132",
    name: "마라도별장식당",
    category: "중국요리",
    address: "제주특별자치도 서귀포시 대정읍 마라로101번길 43",
    phone: "010-3639-3327",
    lat: 33.1183402662918,
    lng: 126.266553963876,
    kakaoUrl: "http://place.map.kakao.com/16644589",
    naverUrl: "https://map.naver.com/p/search/%EB%A7%88%EB%9D%BC%EB%8F%84%EB%B3%84%EC%9E%A5%EC%8B%9D%EB%8B%B9%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%84%9C%EA%B7%80%ED%8F%AC%EC%8B%9C%20%EB%8C%80%EC%A0%95%EC%9D%8D%20%EB%A7%88%EB%9D%BC%EB%A1%9C101%EB%B2%88%EA%B8%B8%2043",
    rating: 4,
    reviewCount: 74,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjB1xBjHFOIoMXbsm7OZsjZL4iVtFRrNkBwiWb0Ddza9UCL1wwV7HMzcifW_2OZnTt0tyIJHRqySf45_xR7ANBjUF4H-HJcIA0-yfWYHhTjOjgZJWBYGdKADMV5I0LhbS2ZfsVbERGk7qHOhEg=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-133",
    name: "마루돈까스",
    category: "돈까스,우동",
    address: "서울 마포구 양화로6길 17",
    phone: "02-333-8235",
    lat: 37.54924244089036,
    lng: 126.91518134420342,
    kakaoUrl: "http://place.map.kakao.com/8997244",
    naverUrl: "https://map.naver.com/p/search/%EB%A7%88%EB%A3%A8%EB%8F%88%EA%B9%8C%EC%8A%A4%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EC%96%91%ED%99%94%EB%A1%9C6%EA%B8%B8%2017",
    rating: 4.3,
    reviewCount: 368,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjC9Av_LsqY1j_xWej14-0YeAQJVEoaMING50GO0RANLHZiiTsiFXA3l7c8d2VHHWAvHyik2O35g52CbpyrDg6b9vf3iUkadF-tepiZvTC9Xy5HekTpBWQ95YLGYSaHOcA7Lw6g80znJDED-88w5iPHtqw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      }
    ]
  },
  {
    id: "jjy-134",
    name: "마포만두 합정점",
    category: "분식",
    address: "서울 마포구 양화로7길 12",
    phone: "02-333-9842",
    lat: 37.5514084484882,
    lng: 126.915192469733,
    kakaoUrl: "http://place.map.kakao.com/27341415",
    naverUrl: "https://map.naver.com/p/search/%EB%A7%88%ED%8F%AC%EB%A7%8C%EB%91%90%20%ED%95%A9%EC%A0%95%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EC%96%91%ED%99%94%EB%A1%9C7%EA%B8%B8%2012",
    rating: 3.6,
    reviewCount: 673,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCxqeFL28IlUeS_MqIr_gyX-9HHEKYT0qI5O-UzcCpd6GTAO0nJcNi3W43OqmGKtUNPQ3e2ipyy1UFDkGqlJDx6xmJcmUpzI__omiWHhtUbraL7VrjcrYMw580jpon0CxUiJ3xDgtr8EM1VxNKZgxN0=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-135",
    name: "마피아떡볶이 본점",
    category: "떡볶이",
    address: "인천 서해구 염곡로 318",
    phone: "032-563-4005",
    lat: 37.513038629886466,
    lng: 126.66873503651642,
    kakaoUrl: "http://place.map.kakao.com/832721235",
    naverUrl: "https://map.naver.com/p/search/%EB%A7%88%ED%94%BC%EC%95%84%EB%96%A1%EB%B3%B6%EC%9D%B4%20%EB%B3%B8%EC%A0%90%20%EC%9D%B8%EC%B2%9C%20%EC%84%9C%ED%95%B4%EA%B5%AC%20%EC%97%BC%EA%B3%A1%EB%A1%9C%20318",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-136",
    name: "막내낙지",
    category: "해물,생선",
    address: "서울 종로구 종로 19",
    phone: "02-736-0824",
    lat: 37.571095137132566,
    lng: 126.97987922763413,
    kakaoUrl: "http://place.map.kakao.com/12447799",
    naverUrl: "https://map.naver.com/p/search/%EB%A7%89%EB%82%B4%EB%82%99%EC%A7%80%20%EC%84%9C%EC%9A%B8%20%EC%A2%85%EB%A1%9C%EA%B5%AC%20%EC%A2%85%EB%A1%9C%2019",
    rating: 3.9,
    reviewCount: 260,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDAhtPQJ_N3q3nLV_jw0WCC-vrsPM1e0DBdzNKlQ9hGM7tRI1VFZsYR_60xp8MYXLTu0rGNtmHXWvjiUwd-foUDDj-xtijQh30wR0diZjnCH4nll8zWFcY4XJG2_S7vRB1X8WVMuSP9IKxYEyIPa6fbnQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-137",
    name: "만나떡볶이",
    category: "떡볶이",
    address: "서울 성동구 왕십리로24길 27",
    phone: "02-2292-7360",
    lat: 37.56480561833348,
    lng: 127.03431279454662,
    kakaoUrl: "http://place.map.kakao.com/21420131",
    naverUrl: "https://map.naver.com/p/search/%EB%A7%8C%EB%82%98%EB%96%A1%EB%B3%B6%EC%9D%B4%20%EC%84%9C%EC%9A%B8%20%EC%84%B1%EB%8F%99%EA%B5%AC%20%EC%99%95%EC%8B%AD%EB%A6%AC%EB%A1%9C24%EA%B8%B8%2027",
    rating: 4.2,
    reviewCount: 128,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDY3U1od4KSpTo_Zk0C-cW73vjWYfwc1gul3Ql8j3MLrFaHMxal0OC1sduKKOYW3UoFnAiY8DkHNP8tHOBMNNKAdO7tdDHPYjB1Zhn3guj3xYEEIYdz17YIbK0YLR7uYeZJ4q5Z10qCdYEkSRQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-138",
    name: "만포막국수",
    category: "국수",
    address: "서울 중구 동호로14길 2",
    phone: "02-2235-1357",
    lat: 37.555830097762694,
    lng: 127.01031863376261,
    kakaoUrl: "http://place.map.kakao.com/21722308",
    naverUrl: "https://map.naver.com/p/search/%EB%A7%8C%ED%8F%AC%EB%A7%89%EA%B5%AD%EC%88%98%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EB%8F%99%ED%98%B8%EB%A1%9C14%EA%B8%B8%202",
    rating: 4.1,
    reviewCount: 844,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBHT2vnTRbPH1DOJjrvsDHp3bO65wH6tMxUlfYIlU_5wlUoZNX-IF94ZcUIZWwkCtLrxOKai77PhyQdB8NsVGglA78UhRFRtebbBDTWfjUHFXPNl0oj_0YeWxGcRLX0kGzE7e_8I4pRHAcXdXZpkFsw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-139",
    name: "맛있는칼국수",
    category: "칼국수",
    address: "대전 서구 도마2길 43",
    phone: "0507-1355-0589",
    lat: 36.3146646064942,
    lng: 127.381529435798,
    kakaoUrl: "http://place.map.kakao.com/1885694872",
    naverUrl: "https://map.naver.com/p/search/%EB%A7%9B%EC%9E%88%EB%8A%94%EC%B9%BC%EA%B5%AD%EC%88%98%20%EB%8C%80%EC%A0%84%20%EC%84%9C%EA%B5%AC%20%EB%8F%84%EB%A7%882%EA%B8%B8%2043",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjALuU0CQvfCSvoyIXRHhRFPSGaTEe_vGQdY3lbaTkV_ju__jhMN4ZWgAuYMgUn2bQIq97IT7qAhGf3VtI2Ls94ssRBDHjFY9uapLlw0VQIOTUrXJBfGMtTllgecLqGQrwXzHJr707kYz09qnQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-140",
    name: "맛있는튀김집",
    category: "분식",
    address: "충남 금산군 금산읍 인삼약초로 40",
    phone: "041-753-7277",
    lat: 36.1007383320129,
    lng: 127.497563408059,
    kakaoUrl: "http://place.map.kakao.com/333510712",
    naverUrl: "https://map.naver.com/p/search/%EB%A7%9B%EC%9E%88%EB%8A%94%ED%8A%80%EA%B9%80%EC%A7%91%20%EC%B6%A9%EB%82%A8%20%EA%B8%88%EC%82%B0%EA%B5%B0%20%EA%B8%88%EC%82%B0%EC%9D%8D%20%EC%9D%B8%EC%82%BC%EC%95%BD%EC%B4%88%EB%A1%9C%2040",
    rating: 4.5,
    reviewCount: 2,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDHZ3IeLv3dhzWxgfm_4Z581KY05K6Ar1OTWnOP4URTQORIOl62dHkIvPUs0WjbN8T1PUZ9S3qBgxOXJ3ienKmsKFjNKdTCs6xdRSsV52plxDxVFqdIGq878pSJagZRGX-7znt7XtDq-e3cvg=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 맛집."
      }
    ]
  },
  {
    id: "jjy-141",
    name: "망원동 즉석우동 전문돈까스 본점",
    category: "돈까스,우동",
    address: "서울 마포구 동교로 83",
    phone: "02-336-1330",
    lat: 37.5542454081282,
    lng: 126.91113318815265,
    kakaoUrl: "http://place.map.kakao.com/15526158",
    naverUrl: "https://map.naver.com/p/search/%EB%A7%9D%EC%9B%90%EB%8F%99%20%EC%A6%89%EC%84%9D%EC%9A%B0%EB%8F%99%20%EC%A0%84%EB%AC%B8%EB%8F%88%EA%B9%8C%EC%8A%A4%20%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EB%8F%99%EA%B5%90%EB%A1%9C%2083",
    rating: 4.1,
    reviewCount: 2262,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDpfv9fGk-T22HvnPXlJiR4gG9L6tVEmW3DKnXjwKjV80qkxhWMUQ4WHyjv9LsS23c-Y9FuF6b1MQoDhcxOBINqphfP2fO71yModQVEdpydSaRrLpufQKZBJeNhvBbzle6IcfJU91DYGiuRSVu0wMd74w=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      }
    ]
  },
  {
    id: "jjy-142",
    name: "맥도날드 굽은다리역DT점",
    category: "맥도날드",
    address: "서울 강동구 양재대로 1587",
    phone: "02-6140-4100",
    lat: 37.5472508507001,
    lng: 127.143098792431,
    kakaoUrl: "http://place.map.kakao.com/27316244",
    naverUrl: "https://map.naver.com/p/search/%EB%A7%A5%EB%8F%84%EB%82%A0%EB%93%9C%20%EA%B5%BD%EC%9D%80%EB%8B%A4%EB%A6%AC%EC%97%ADDT%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%8F%99%EA%B5%AC%20%EC%96%91%EC%9E%AC%EB%8C%80%EB%A1%9C%201587",
    rating: 3.9,
    reviewCount: 773,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBJpyADtemSMEJzdE39EfMj3edca_HIne0soQe8nuNCBlL1V6cCjg8dJjgdhHa-oeyYdUmnjGwpvm_cgbZAG9hZOMRv7110m0QvV8iGgb3AZQ0tdUakSCvsa7UcJgm-Wws_LTZHG0q48Gqfpw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 패스트푸드 맛집."
      }
    ]
  },
  {
    id: "jjy-143",
    name: "맷돌손칼국수",
    category: "칼국수",
    address: "인천 제물포구 신포로 32-16",
    phone: "032-762-5930",
    lat: 37.4715145145904,
    lng: 126.625721190314,
    kakaoUrl: "http://place.map.kakao.com/21373373",
    naverUrl: "https://map.naver.com/p/search/%EB%A7%B7%EB%8F%8C%EC%86%90%EC%B9%BC%EA%B5%AD%EC%88%98%20%EC%9D%B8%EC%B2%9C%20%EC%A0%9C%EB%AC%BC%ED%8F%AC%EA%B5%AC%20%EC%8B%A0%ED%8F%AC%EB%A1%9C%2032-16",
    rating: 3.6,
    reviewCount: 393,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBkqTL-HuCtjN7_xlp4bohhSdi2hAAlIymY9ZW0myKq9AhkYCqfntXwmrK3ACoj8IBLpPSBFhD4KA0iJ6S-lGxpMkwBAjW5PHZygA7OLFIFudzteuQlyMWx819HAvqxt-blLAN_I_CORN2BhQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-144",
    name: "머거보까 매운불갈비찜 본점",
    category: "갈비",
    address: "서울 중구 다산로10길 9",
    phone: "02-2234-4544",
    lat: 37.55362514884087,
    lng: 127.01062558793424,
    kakaoUrl: "http://place.map.kakao.com/7870369",
    naverUrl: "https://map.naver.com/p/search/%EB%A8%B8%EA%B1%B0%EB%B3%B4%EA%B9%8C%20%EB%A7%A4%EC%9A%B4%EB%B6%88%EA%B0%88%EB%B9%84%EC%B0%9C%20%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EB%8B%A4%EC%82%B0%EB%A1%9C10%EA%B8%B8%209",
    rating: 4,
    reviewCount: 119,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjB5yZZZ23Wr7DmPpRNXr5Sv2MDF662iFAbVadEay-LGLrRq_sospQv2bdc_MyMSasxS0YUFJ7-xgTi31dV6-CyIVVN8Y00XZllUzLXlwwuYvjxaspAH1eTPxzAGhulHFyNUoqXj01XMJroBVdG-kV6l5g=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-145",
    name: "명가돈까스",
    category: "돈까스,우동",
    address: "경기 안양시 만안구 장내로139번길 30",
    phone: "031-443-9407",
    lat: 37.3990345731584,
    lng: 126.922289811889,
    kakaoUrl: "http://place.map.kakao.com/2061262308",
    naverUrl: "https://map.naver.com/p/search/%EB%AA%85%EA%B0%80%EB%8F%88%EA%B9%8C%EC%8A%A4%20%EA%B2%BD%EA%B8%B0%20%EC%95%88%EC%96%91%EC%8B%9C%20%EB%A7%8C%EC%95%88%EA%B5%AC%20%EC%9E%A5%EB%82%B4%EB%A1%9C139%EB%B2%88%EA%B8%B8%2030",
    rating: 3.8,
    reviewCount: 367,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAoolyMACsF3oOpv7MPMA8gzcfrWkdrS3tvtoRKcUxZ9WRzrD1lMM3qoEytO2QxoRIJv34D_yf2ahguMw8dTgXc9zRsk5eqRKNpu_n_iMwSXNqgBmAFK59gbSqzDbYS4XH8hmfpSkLyGT3WuO4zU7oVkw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      }
    ]
  },
  {
    id: "jjy-147",
    name: "명인집 하당점",
    category: "해물,생선",
    address: "전남광주통합특별시 목포시 하당로30번길 14",
    phone: "061-245-8808",
    lat: 34.798861875914945,
    lng: 126.42225862940062,
    kakaoUrl: "http://place.map.kakao.com/11684688",
    naverUrl: "https://map.naver.com/p/search/%EB%AA%85%EC%9D%B8%EC%A7%91%20%ED%95%98%EB%8B%B9%EC%A0%90%20%EC%A0%84%EB%82%A8%EA%B4%91%EC%A3%BC%ED%86%B5%ED%95%A9%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EB%AA%A9%ED%8F%AC%EC%8B%9C%20%ED%95%98%EB%8B%B9%EB%A1%9C30%EB%B2%88%EA%B8%B8%2014",
    rating: 3.7,
    reviewCount: 66,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjB-kQdbCc-q2nyN4wOp-uvZMAiS9QQSPiFjONtV4z5rHr2xbTDjO19xbhZt9xC1BC0_JbwUIPLdwfl32fw65JmMuCG5F4D89-6YMqq4qeq-tze72WU_JFovvziJM6d-KsBteMgTZnb7ji5pSw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-148",
    name: "모던샤브하우스 GFC점",
    category: "샤브샤브",
    address: "서울 강남구 테헤란로 152",
    phone: "02-569-8330",
    lat: 37.5000337904805,
    lng: 127.036511000074,
    kakaoUrl: "http://place.map.kakao.com/1484187628",
    naverUrl: "https://map.naver.com/p/search/%EB%AA%A8%EB%8D%98%EC%83%A4%EB%B8%8C%ED%95%98%EC%9A%B0%EC%8A%A4%20GFC%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%ED%85%8C%ED%97%A4%EB%9E%80%EB%A1%9C%20152",
    rating: 4.7,
    reviewCount: 28,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBlDJkojk5Kj2LbYV7e09rjYZ3gVhpcT1NPcnVWLz6patdfcxrNYltypYFFZ_uTEswQCwNAQc4VQFalqR7oHLsebxUisz5bJcxGs6lylxph-j7lu0yU5Lr9Wl30YK4eUDkHFZULpD2XY0Z0nSrFpLLs=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-149",
    name: "모두랑",
    category: "분식",
    address: "서울 광진구 자양로28길 24",
    phone: "02-457-1178",
    lat: 37.5420952077803,
    lng: 127.085525686215,
    kakaoUrl: "http://place.map.kakao.com/15188115",
    naverUrl: "https://map.naver.com/p/search/%EB%AA%A8%EB%91%90%EB%9E%91%20%EC%84%9C%EC%9A%B8%20%EA%B4%91%EC%A7%84%EA%B5%AC%20%EC%9E%90%EC%96%91%EB%A1%9C28%EA%B8%B8%2024",
    rating: 4.3,
    reviewCount: 425,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCiCwJ6AKDBZ2sXQZ5ZSVaVPu5lOT21YMob03YXt6SvkITgsp4fJDEspNwLQFXrz0ebweBZ5XU5vzssdB1LhoHg4xXr9JYD6EXyf_xXK2UGR7BPPile3uMzjFLePNa5jQjbFWR0hcKmL6FKJQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-150",
    name: "모모라면",
    category: "분식",
    address: "인천 미추홀구 석정로150번길 43",
    phone: "032-888-7871",
    lat: 37.46748962875414,
    lng: 126.65438221342998,
    kakaoUrl: "http://place.map.kakao.com/16513914",
    naverUrl: "https://map.naver.com/p/search/%EB%AA%A8%EB%AA%A8%EB%9D%BC%EB%A9%B4%20%EC%9D%B8%EC%B2%9C%20%EB%AF%B8%EC%B6%94%ED%99%80%EA%B5%AC%20%EC%84%9D%EC%A0%95%EB%A1%9C150%EB%B2%88%EA%B8%B8%2043",
    rating: 4.5,
    reviewCount: 104,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCYXnX_5MwqYmhKuMsQ7JTQztoeIvcNHhiCRqRyVWS2x1hI-afrwy3FFc-7ex276R8uxVQMFdAgoZ4bV-PUC8g7kelQsm4HM7FzHbUF6AgUhJ-Z9ZVGXgmn4nSm_hwXXw6QSXDP7PB_wWqla8C0CLuc9Q=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-151",
    name: "몰질식육식당",
    category: "복어",
    address: "제주특별자치도 서귀포시 이어도로 598",
    phone: "064-739-1542",
    lat: 33.23536530227254,
    lng: 126.48026288278535,
    kakaoUrl: "http://place.map.kakao.com/10333833",
    naverUrl: "https://map.naver.com/p/search/%EB%AA%B0%EC%A7%88%EC%8B%9D%EC%9C%A1%EC%8B%9D%EB%8B%B9%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%84%9C%EA%B7%80%ED%8F%AC%EC%8B%9C%20%EC%9D%B4%EC%96%B4%EB%8F%84%EB%A1%9C%20598",
    rating: 4.1,
    reviewCount: 607,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDwL-cGbUFCNc5ykW5NPXo4PJ-kyYy5Vx7OuR1tkTNT08FbP-YZux5AeZHN0xaDXD13zNZM5xAP4s3-rlSDA9chyx-5_ZfumLd6gJy_2idW33kC2zypXk4NJBbcZEB3DES6m8U5VrWacsW3V_YlrrQN6Q=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "제주5탄) '김치찌개'맛 짬뽕으로 유명한 40년전통 몰질식육식당?🤔 손님들도 놀란 짬뽕 우동 먹방",
        videoUrl: "https://www.youtube.com/watch?v=6YLPoxJwoyU",
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-152",
    name: "몽탄",
    category: "육류,고기",
    address: "서울 용산구 백범로99길 50",
    phone: "02-794-8592",
    lat: 37.53599611679934,
    lng: 126.97224578759753,
    kakaoUrl: "http://place.map.kakao.com/220597413",
    naverUrl: "https://map.naver.com/p/search/%EB%AA%BD%ED%83%84%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%EB%B0%B1%EB%B2%94%EB%A1%9C99%EA%B8%B8%2050",
    rating: 4.2,
    reviewCount: 1989,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBIn8nt1lPlLvl-Few17SHFpWSkC2b4z49xFzPhcrIDqm8H88zpzwE3wWt0SKa1-iSrhghxDwN7euAC__S1a_2v9bijamrTHz1sFZPNkhlW_1oRv73vAQdvyZIT5Kzs_cf2g9HP9pEM0AHKFfHPj9cH=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "웨이팅이 8시간..?!😳 우리나라에서 우대갈비로 제일 유명하다는 몽탄 먹방",
        videoUrl: "https://www.youtube.com/watch?v=lhs_QyVeEgs",
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-153",
    name: "무공돈까스 동탄호수공원점",
    category: "무공돈까스",
    address: "경기 화성시 동탄구 동탄대로 182",
    phone: "031-377-3513",
    lat: 37.17075857107155,
    lng: 127.10725998859576,
    kakaoUrl: "http://place.map.kakao.com/119302602",
    naverUrl: "https://map.naver.com/p/search/%EB%AC%B4%EA%B3%B5%EB%8F%88%EA%B9%8C%EC%8A%A4%20%EB%8F%99%ED%83%84%ED%98%B8%EC%88%98%EA%B3%B5%EC%9B%90%EC%A0%90%20%EA%B2%BD%EA%B8%B0%20%ED%99%94%EC%84%B1%EC%8B%9C%20%EB%8F%99%ED%83%84%EA%B5%AC%20%EB%8F%99%ED%83%84%EB%8C%80%EB%A1%9C%20182",
    rating: 4.2,
    reviewCount: 28,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBvwocz0BmyUiCG15GUKXSBQ87WPdodg8XVdm4xAb7QyhBwbLMAGdhU51fUZTepc6cSkD8q4qdCAIWB-TAQLYYp3_D3S-xb43yarWwsWcl6WNib7XyIRMOqFP6if4L7GgllW29vaNt7jB2MTQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      }
    ]
  },
  {
    id: "jjy-154",
    name: "무궁화어묵",
    category: "분식",
    address: "서울 마포구 망원로 82",
    phone: "02-6396-6588",
    lat: 37.55741463210853,
    lng: 126.90585767267815,
    kakaoUrl: "http://place.map.kakao.com/747666847",
    naverUrl: "https://map.naver.com/p/search/%EB%AC%B4%EA%B6%81%ED%99%94%EC%96%B4%EB%AC%B5%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EB%A7%9D%EC%9B%90%EB%A1%9C%2082",
    rating: 4.2,
    reviewCount: 21,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAbZFWDU4gQxgWAZBR7deHypKjPkwhIF8yIBYyurfhV8I1L8xaYwUBNUpWMxW40XvcN7_Z6khqa3kxMsp6Pn6yGYnfguXl-Mw-m9NpgK5Ao296r9FfP_Yh1yIkgRlbHixVoZ0myJ1N2B-NB9W0=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-155",
    name: "문경전통시장 상차림2호점",
    category: "한식",
    address: "경북 문경시 문경읍 문희로 41-15",
    phone: "054-572-5555",
    lat: 36.735585569247135,
    lng: 128.10739929207085,
    kakaoUrl: "http://place.map.kakao.com/1722921495",
    naverUrl: "https://map.naver.com/p/search/%EB%AC%B8%EA%B2%BD%EC%A0%84%ED%86%B5%EC%8B%9C%EC%9E%A5%20%EC%83%81%EC%B0%A8%EB%A6%BC2%ED%98%B8%EC%A0%90%20%EA%B2%BD%EB%B6%81%20%EB%AC%B8%EA%B2%BD%EC%8B%9C%20%EB%AC%B8%EA%B2%BD%EC%9D%8D%20%EB%AC%B8%ED%9D%AC%EB%A1%9C%2041-15",
    rating: 3.6,
    reviewCount: 94,
    photoUrl: null,
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 맛집."
      }
    ]
  },
  {
    id: "jjy-156",
    name: "문배동육칼 본점",
    category: "칼국수",
    address: "서울 용산구 백범로90길 50",
    phone: "02-713-6204",
    lat: 37.5366119339674,
    lng: 126.970324359239,
    kakaoUrl: "http://place.map.kakao.com/24188406",
    naverUrl: "https://map.naver.com/p/search/%EB%AC%B8%EB%B0%B0%EB%8F%99%EC%9C%A1%EC%B9%BC%20%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%EB%B0%B1%EB%B2%94%EB%A1%9C90%EA%B8%B8%2050",
    rating: 4.1,
    reviewCount: 1543,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjACIKLpdOxjC8IrS46HtvbDC9FpZ2qJGk0mV02BG3SoUwJF-oyTxerI6-xJjk3-geom0qM14eSTzSCw1tyFcxW0pPe4ZEJQrwN13VFEyFpFo9yv1qzli6okmOircSDkOEuCBcKAciMj3VYz96k=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      },
      {
        name: "최자로드",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "육개장에 칼국수를 더한 독자적인 메뉴로 소개됐다."
      }
    ]
  },
  {
    id: "jjy-157",
    name: "뮌헨호프",
    category: "호프,요리주점",
    address: "서울 중구 을지로14길 30",
    phone: "02-2273-2288",
    lat: 37.564897729978,
    lng: 126.991997632865,
    kakaoUrl: "http://place.map.kakao.com/1626559942",
    naverUrl: "https://map.naver.com/p/search/%EB%AE%8C%ED%97%A8%ED%98%B8%ED%94%84%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EC%9D%84%EC%A7%80%EB%A1%9C14%EA%B8%B8%2030",
    rating: 3.8,
    reviewCount: 1131,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDGjYhmiPPveE2Jy61OJkwcsbp_5KT7J8Vv76Dcyh2R5qFJ3glHy0gMroFOBFkzawfjHdTrd-41S_4rSNkXc3u6EofO-LAzlxjyoA1nEkx_1e5w5JdfCOYhxvf0HcRbqAVtMN27lHGJL5Li7eU=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "맥주 몇병 먹었을까..?🤔 을지로 골뱅이가 유명한 핫플 뮌헨호프 먹방",
        videoUrl: "https://www.youtube.com/watch?v=LnpoLJ1PLFM",
        recommendNote: "쯔양이 방문해 리뷰한 야식 맛집."
      }
    ]
  },
  {
    id: "jjy-158",
    name: "미남참치 신림점",
    category: "참치회",
    address: "서울 관악구 남부순환로 1589",
    phone: "02-875-7538",
    lat: 37.4842340583771,
    lng: 126.92719916344,
    kakaoUrl: "http://place.map.kakao.com/222726140",
    naverUrl: "https://map.naver.com/p/search/%EB%AF%B8%EB%82%A8%EC%B0%B8%EC%B9%98%20%EC%8B%A0%EB%A6%BC%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B4%80%EC%95%85%EA%B5%AC%20%EB%82%A8%EB%B6%80%EC%88%9C%ED%99%98%EB%A1%9C%201589",
    rating: 4.2,
    reviewCount: 244,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDN_clY-6o4WjsyO-POPduufegGORWGUDU79o-qoe-8smGEuV8q3nKqD0CtOhGsIkxEnA2zIGnzD0kd70Co5TUigZ5mR44DDOtuFQwfXGVkH6nYlhvFKrsOzJNsPD6ITpSNy8pbsRXjzK28lQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      }
    ]
  },
  {
    id: "jjy-159",
    name: "미락제면1941",
    category: "돈까스,우동",
    address: "경기 용인시 기흥구 동백죽전대로527번길 98-6",
    phone: "031-282-5176",
    lat: 37.2814095083986,
    lng: 127.144127499272,
    kakaoUrl: "http://place.map.kakao.com/2077534128",
    naverUrl: "https://map.naver.com/p/search/%EB%AF%B8%EB%9D%BD%EC%A0%9C%EB%A9%B41941%20%EA%B2%BD%EA%B8%B0%20%EC%9A%A9%EC%9D%B8%EC%8B%9C%20%EA%B8%B0%ED%9D%A5%EA%B5%AC%20%EB%8F%99%EB%B0%B1%EC%A3%BD%EC%A0%84%EB%8C%80%EB%A1%9C527%EB%B2%88%EA%B8%B8%2098-6",
    rating: 4.4,
    reviewCount: 319,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBxzZ6U-dcAMpfNUvcb7Jl6HSgFg4s4iv8xg5G16Hdx49ytQ_9AFtXbkcphHl3i-X389sagz9VO2Qw46AbKipt2vCNCvR6K4mnBXgUW16nDbsAIEdsz2lJtO7WMdn_EIsk_PyF29sN_sXXEAxo=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 아시안 맛집."
      }
    ]
  },
  {
    id: "jjy-160",
    name: "미소식당",
    category: "한정식",
    address: "전북특별자치도 순창군 순창읍 장류로 290",
    phone: "063-653-7597",
    lat: 35.375855596696674,
    lng: 127.134347534881,
    kakaoUrl: "http://place.map.kakao.com/95562205",
    naverUrl: "https://map.naver.com/p/search/%EB%AF%B8%EC%86%8C%EC%8B%9D%EB%8B%B9%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%88%9C%EC%B0%BD%EA%B5%B0%20%EC%88%9C%EC%B0%BD%EC%9D%8D%20%EC%9E%A5%EB%A5%98%EB%A1%9C%20290",
    rating: 4.5,
    reviewCount: 130,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCjBgv3YaX5VUaoH8BqskfJo5od8Ox8WLnFw3-xkx9GJdM5lM_-BVpNsddv19XL_yo2onufU6Yij1ukAM0wSh7F9fIEFLEPZRlJJ02TIb2IDN9hfzqMW-EoBhTGexcsDnOmOOAgHjqdJu3s=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-161",
    name: "미소의집",
    category: "분식",
    address: "서울 서초구 신반포로 27-6",
    phone: "02-537-0547",
    lat: 37.50202819976089,
    lng: 126.98756885260006,
    kakaoUrl: "http://place.map.kakao.com/21236775",
    naverUrl: "https://map.naver.com/p/search/%EB%AF%B8%EC%86%8C%EC%9D%98%EC%A7%91%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EC%8B%A0%EB%B0%98%ED%8F%AC%EB%A1%9C%2027-6",
    rating: 4.2,
    reviewCount: 198,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCnS7y6Vpq9h2qiWsmaUwThMDthhHEqmOSZqHSThjsWD3oJBTB8bilIHzs5xnBLMnZvSloEKqJXTjkgdb8oCn5YdEUVg0goueMF0BFaqDGbfDnxrMzWLiA_3xt3CCcaIoQ-xHPn0p9EXY-n7NBp6f1JHA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "튀김순대가 미쳤다는 곳..🔥 구반포 40년 전통 미소의집 즉석떡볶이 먹방",
        videoUrl: "https://www.youtube.com/watch?v=XhUJ-ChfPQw",
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-162",
    name: "미아리우동집 본점",
    category: "돈까스,우동",
    address: "서울 성북구 종암로 176",
    phone: "02-918-1112",
    lat: 37.60563123391545,
    lng: 127.03174152636089,
    kakaoUrl: "http://place.map.kakao.com/20549279",
    naverUrl: "https://map.naver.com/p/search/%EB%AF%B8%EC%95%84%EB%A6%AC%EC%9A%B0%EB%8F%99%EC%A7%91%20%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%A2%85%EC%95%94%EB%A1%9C%20176",
    rating: 4.3,
    reviewCount: 494,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjA8bS85NY0atgI82FtWLYAh4sgVB5OmYQ9HkPMYFooXDlNH8oFz5YMYHFZxVRHRAp5y-03NvWHjvj6F_csy5Xsuw3Ec1c0-q29oBVD5f9s2pWqfHTS2Yd62l8rbvJ8MGVx9sZ8Qkp425kYMAw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-163",
    name: "미우",
    category: "육류,고기",
    address: "서울 강남구 압구정로 113-22",
    phone: "02-544-7775",
    lat: 37.5248217292901,
    lng: 127.019601528903,
    kakaoUrl: "http://place.map.kakao.com/1179137932",
    naverUrl: "https://map.naver.com/p/search/%EB%AF%B8%EC%9A%B0%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%95%95%EA%B5%AC%EC%A0%95%EB%A1%9C%20113-22",
    rating: 4.6,
    reviewCount: 102,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDoTYfg3XGrEekLnJQ7Jt6JqWrcx5UL28kzXeHlyNj1DcZxtUkVSblRZF99aqj38Ji4LWS82VPzvwLLmOXDSLp0q61YNFTBP1aw2ZFY-XzwS7xsSWQXrXCbwXJ7AsKcvfbmr-jDGuVoYZF2oGzKFDAI9g=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-164",
    name: "미타 우동 본점",
    category: "돈까스,우동",
    address: "서울 송파구 송파대로49길 31",
    phone: "02-422-5212",
    lat: 37.506657031667274,
    lng: 127.10141645379939,
    kakaoUrl: "http://place.map.kakao.com/1897956251",
    naverUrl: "https://map.naver.com/p/search/%EB%AF%B8%ED%83%80%20%EC%9A%B0%EB%8F%99%20%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%86%A1%ED%8C%8C%EA%B5%AC%20%EC%86%A1%ED%8C%8C%EB%8C%80%EB%A1%9C49%EA%B8%B8%2031",
    rating: 4.7,
    reviewCount: 10,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjARUKQyHf1xKXg9nElE9AZEj8grOEv6p5-VkZjwpMWcWkC7EyU14nRPhyyom8ADXXLxPQ8yzYxoc8B0BcmWDvJtEdS912otGJZvGRF_1f-B6pNPGssMziUGfXvzmyeg-qvPN8FGbVLIrdJ4eAKENRrP_Q=s4800-w773",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      }
    ]
  },
  {
    id: "jjy-165",
    name: "민기남씨네조점용솥뚜껑닭매운탕",
    category: "닭요리",
    address: "경기 가평군 설악면 유명로 654-57",
    phone: "031-585-3386",
    lat: 37.603445247239655,
    lng: 127.49559928210124,
    kakaoUrl: "http://place.map.kakao.com/11298129",
    naverUrl: "https://map.naver.com/p/search/%EB%AF%BC%EA%B8%B0%EB%82%A8%EC%94%A8%EB%84%A4%EC%A1%B0%EC%A0%90%EC%9A%A9%EC%86%A5%EB%9A%9C%EA%BB%91%EB%8B%AD%EB%A7%A4%EC%9A%B4%ED%83%95%20%EA%B2%BD%EA%B8%B0%20%EA%B0%80%ED%8F%89%EA%B5%B0%20%EC%84%A4%EC%95%85%EB%A9%B4%20%EC%9C%A0%EB%AA%85%EB%A1%9C%20654-57",
    rating: 3.5,
    reviewCount: 274,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjB4WNBkHHLv6-bkKbJj76LjCnSvQk6joo5C0I_lm5Fpa7IebG2ee7TbiBQetTytvHLyNBkS_xWPvha7FZgDYrTtV5aWEFko0d-VmOqgL_FgrPQEwA7lVRF_CtjGVWMWIUfEMq2IK7SUMxeCnb0=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 찜·탕 맛집."
      }
    ]
  },
  {
    id: "jjy-166",
    name: "태안맛집 바다꽃게장",
    category: "게,대게",
    address: "충남 태안군 태안읍 능샘1길 45",
    phone: "041-674-5197",
    lat: 36.7546210370327,
    lng: 126.29395584287,
    kakaoUrl: "http://place.map.kakao.com/10406311",
    naverUrl: "https://map.naver.com/p/search/%ED%83%9C%EC%95%88%EB%A7%9B%EC%A7%91%20%EB%B0%94%EB%8B%A4%EA%BD%83%EA%B2%8C%EC%9E%A5%20%EC%B6%A9%EB%82%A8%20%ED%83%9C%EC%95%88%EA%B5%B0%20%ED%83%9C%EC%95%88%EC%9D%8D%20%EB%8A%A5%EC%83%981%EA%B8%B8%2045",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-167",
    name: "바다회상 잠실점",
    category: "회",
    address: "서울 송파구 오금로 62",
    phone: "02-2240-3101",
    lat: 37.516413128502414,
    lng: 127.10550177114722,
    kakaoUrl: "http://place.map.kakao.com/343205408",
    naverUrl: "https://map.naver.com/p/search/%EB%B0%94%EB%8B%A4%ED%9A%8C%EC%83%81%20%EC%9E%A0%EC%8B%A4%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%86%A1%ED%8C%8C%EA%B5%AC%20%EC%98%A4%EA%B8%88%EB%A1%9C%2062",
    rating: 4,
    reviewCount: 21,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAQyRo7682t7oCIUEzKBU9NVCux1xuctw5fv8fEvElbF9bkSqK_TrUVVOL10k3a6F_r8l3FKWgNoJwApj3uKcFimhfXrlUUJYk8QDY8wfJ6yQ71TSoARIS_rwT3Q24YoZ3QOawzzDVk4tsGvai7J-O3bg=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-168",
    name: "바담칼국수",
    category: "칼국수",
    address: "경기 시흥시 오이도로157번길 1",
    phone: "010-9612-8245",
    lat: 37.3470177565946,
    lng: 126.688545801766,
    kakaoUrl: "http://place.map.kakao.com/1004412633",
    naverUrl: "https://map.naver.com/p/search/%EB%B0%94%EB%8B%B4%EC%B9%BC%EA%B5%AD%EC%88%98%20%EA%B2%BD%EA%B8%B0%20%EC%8B%9C%ED%9D%A5%EC%8B%9C%20%EC%98%A4%EC%9D%B4%EB%8F%84%EB%A1%9C157%EB%B2%88%EA%B8%B8%201",
    rating: 4.8,
    reviewCount: 872,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCGk_7WvJy_GMKvaHVxl5SncjVFCqTpUlgwWgpaAzNr8t9KivOe4WJ5kTYP63pc4ZW1jfc3NBRqLNwiC9BJGj7zK5KX8a06tWV88Hp-pmgI0JCOxzeFMh3uXHFMn1LTeAnPqJpaHu_w7r7THxGT7327Dw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-169",
    name: "반월소바",
    category: "분식",
    address: "충남 논산시 해월로 132",
    phone: "041-733-2210",
    lat: 36.202939037840714,
    lng: 127.08248554184706,
    kakaoUrl: "http://place.map.kakao.com/21254192",
    naverUrl: "https://map.naver.com/p/search/%EB%B0%98%EC%9B%94%EC%86%8C%EB%B0%94%20%EC%B6%A9%EB%82%A8%20%EB%85%BC%EC%82%B0%EC%8B%9C%20%ED%95%B4%EC%9B%94%EB%A1%9C%20132",
    rating: 4.3,
    reviewCount: 1155,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCvQ0qRw5f3jrHYDxRlD14ufcf2Mo7iFTPPSNwziAm3EqdPV3bL0BzdrKXrkGi0hQ9-lGOmCl7EncDogwM4TQtyKNMysFoYXinN_6t5-rFyvjuUPQY9nOx8UXW3brZiznlJFgWUI3TIQe6C7Q=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      }
    ]
  },
  {
    id: "jjy-170",
    name: "백년화편",
    category: "떡,한과",
    address: "서울 강동구 양재대로81길 32",
    phone: "1588-5678",
    lat: 37.5232515505377,
    lng: 127.13251425245822,
    kakaoUrl: "http://place.map.kakao.com/18310200",
    naverUrl: "https://map.naver.com/p/search/%EB%B0%B1%EB%85%84%ED%99%94%ED%8E%B8%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%8F%99%EA%B5%AC%20%EC%96%91%EC%9E%AC%EB%8C%80%EB%A1%9C81%EA%B8%B8%2032",
    rating: 4.3,
    reviewCount: 194,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBge95mbbCijI5OQyE3CfN9fu_GzBJwBI59KAgBZG9mC9llYA1zLE-x0EoQocF7VI7YfI_BOhO5rrsb7mGJyf52hWlTZ7IQ7oI0jIwT4VHVNWw11VoveIkHcmSRKB2hhgspusSRsRncvxOjyms=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "30년전통 떡으로 끓인 통가래떡 라면..🥺",
        videoUrl: "https://www.youtube.com/watch?v=Xy7Cp6rA3BM",
        recommendNote: "쯔양이 방문해 리뷰한 카페·디저트 맛집."
      }
    ]
  },
  {
    id: "jjy-171",
    name: "백제정육점",
    category: "육류,고기",
    address: "서울 종로구 종로35길 34",
    phone: "02-762-7491",
    lat: 37.5726446952293,
    lng: 127.003952922261,
    kakaoUrl: "http://place.map.kakao.com/26967162",
    naverUrl: "https://map.naver.com/p/search/%EB%B0%B1%EC%A0%9C%EC%A0%95%EC%9C%A1%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%A2%85%EB%A1%9C%EA%B5%AC%20%EC%A2%85%EB%A1%9C35%EA%B8%B8%2034",
    rating: 4.1,
    reviewCount: 1692,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDJrNhZo92DZr7LudRAEN-sPNGL7ZRbSpk9639Y5Sy1xrgNqNDjFWDzTTjHKBn7hoH1yyV6K-2zdVFPUyzIETE8Tw2FQVBPvIj7whVL0syrfHQjtY2CSCXPgh1MSwKgAiDdTSrfll-XiUIpy5d6mhjs=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-172",
    name: "밴건디스테이크하우스",
    category: "스테이크,립",
    address: "서울 서초구 사평대로22길 5",
    phone: "02-595-6062",
    lat: 37.4993321209982,
    lng: 126.997729180628,
    kakaoUrl: "http://place.map.kakao.com/411994481",
    naverUrl: "https://map.naver.com/p/search/%EB%B0%B4%EA%B1%B4%EB%94%94%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%81%AC%ED%95%98%EC%9A%B0%EC%8A%A4%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EC%82%AC%ED%8F%89%EB%8C%80%EB%A1%9C22%EA%B8%B8%205",
    rating: 4.5,
    reviewCount: 463,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDK81BvUdodi7OH3xQBnY6zmPLMz-oyXsNN0uyoXHx1l49MWjt2rf7LpbL-vzRmruk9JP_ezG498RiRNYyH36lqYujnz584CZNiNKh6112xLX6qwcfezvfX1dbctAvGAo5S7qae2xbv32pjN34=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 양식 맛집."
      }
    ]
  },
  {
    id: "jjy-173",
    name: "밴댕이천국연탄구이",
    category: "육류,고기",
    address: "경기 화성시 만세구 향남읍 배터길 4-2",
    phone: "031-353-0115",
    lat: 37.1320089707071,
    lng: 126.907136777218,
    kakaoUrl: "http://place.map.kakao.com/669970863",
    naverUrl: "https://map.naver.com/p/search/%EB%B0%B4%EB%8C%95%EC%9D%B4%EC%B2%9C%EA%B5%AD%EC%97%B0%ED%83%84%EA%B5%AC%EC%9D%B4%20%EA%B2%BD%EA%B8%B0%20%ED%99%94%EC%84%B1%EC%8B%9C%20%EB%A7%8C%EC%84%B8%EA%B5%AC%20%ED%96%A5%EB%82%A8%EC%9D%8D%20%EB%B0%B0%ED%84%B0%EA%B8%B8%204-2",
    rating: 4.6,
    reviewCount: 214,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBFEVfnEUWFyIVXApTzVed4WmVIPE3-xRlHFRKI6dOKu4ItS3_jm2vEzhM7IciUInhzMa0TN99P19qnVnzoDk52WuFbCGFqCxYqIOPN3kKiKNbMS31ecolJ9K9mxJ4BHDVempRvtnLQLrA2=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-174",
    name: "번네식당",
    category: "해물,생선",
    address: "제주특별자치도 서귀포시 안덕면 일주서로 1606-10",
    phone: "064-792-1006",
    lat: 33.25595515827839,
    lng: 126.34533521196033,
    kakaoUrl: "http://place.map.kakao.com/26884184",
    naverUrl: "https://map.naver.com/p/search/%EB%B2%88%EB%84%A4%EC%8B%9D%EB%8B%B9%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%84%9C%EA%B7%80%ED%8F%AC%EC%8B%9C%20%EC%95%88%EB%8D%95%EB%A9%B4%20%EC%9D%BC%EC%A3%BC%EC%84%9C%EB%A1%9C%201606-10",
    rating: 3.9,
    reviewCount: 296,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjA9_Si1JnnjR_op1Jam7ysFUZcMydnvNcZILDHYa322fO77E92Xh9PSpvIyf-zq6RNkdbVHSpUsD-j8ya1EsZ_8eLdrvPYZim7SA666pKl60iSYXVQc9Q43iHVqBg52nwcm8pEkRTyn_MiU-x4=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-175",
    name: "보글이생태탕왕코다리 양재역점",
    category: "해물,생선",
    address: "서울 서초구 강남대로37길 56-18",
    phone: "02-521-7707",
    lat: 37.48545538016031,
    lng: 127.03056445864897,
    kakaoUrl: "http://place.map.kakao.com/1233001797",
    naverUrl: "https://map.naver.com/p/search/%EB%B3%B4%EA%B8%80%EC%9D%B4%EC%83%9D%ED%83%9C%ED%83%95%EC%99%95%EC%BD%94%EB%8B%A4%EB%A6%AC%20%EC%96%91%EC%9E%AC%EC%97%AD%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EA%B0%95%EB%82%A8%EB%8C%80%EB%A1%9C37%EA%B8%B8%2056-18",
    rating: 4,
    reviewCount: 154,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCRmQy8fJ9E0ofGgqEpfnxj9-bAw-kQCuDFvrrvT-ej2mIubHKtz3RBk2FANfoYh6GJaEJBdVGshxi8lCGmIJibrE7Q_HCZ3uBj1uP6ey5dcLvkl25dK-7v0JK8jVDW3NSibBef740ioKZbhS_2Pn4WlQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 찜·탕 맛집."
      }
    ]
  },
  {
    id: "jjy-176",
    name: "보슬보슬 압구정본점",
    category: "분식",
    address: "서울 강남구 압구정로 216",
    phone: "02-515-1245",
    lat: 37.52794391845586,
    lng: 127.03116780884831,
    kakaoUrl: "http://place.map.kakao.com/620066371",
    naverUrl: "https://map.naver.com/p/search/%EB%B3%B4%EC%8A%AC%EB%B3%B4%EC%8A%AC%20%EC%95%95%EA%B5%AC%EC%A0%95%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%95%95%EA%B5%AC%EC%A0%95%EB%A1%9C%20216",
    rating: 4.5,
    reviewCount: 69,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDtTNB7wH-o4JcFHlbDW6Dkm13i0aN0VMBlBnjmOyXBkThNFxhezbWccof85o0TaeaZSoBqLKDK3HB8Hb18300wuQd5rap7JitaNrj723Wv9kA3K4_fFi6Dm7jpqCifLALL66OawvHL3sKMYsA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-177",
    name: "복성루",
    category: "중국요리",
    address: "전북특별자치도 군산시 월명로 382",
    phone: "063-445-8412",
    lat: 35.9782404415897,
    lng: 126.715733366869,
    kakaoUrl: "http://place.map.kakao.com/10379033",
    naverUrl: "https://map.naver.com/p/search/%EB%B3%B5%EC%84%B1%EB%A3%A8%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EA%B5%B0%EC%82%B0%EC%8B%9C%20%EC%9B%94%EB%AA%85%EB%A1%9C%20382",
    rating: 3.8,
    reviewCount: 2580,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD1_3gZg6-8EyFqEwcBiDISj-3BZepxLZa5GsRTqlIccXgfawzjvBoWLvGl-PsanXGalzWwyXaCcEHyDnI7nYqgxb1ob8A1Q24zwxj0XTg4FD8oPuJePkNXyDMifHq1k_2apnsKTb6asZg9xLYAqYccnw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-178",
    name: "복성원",
    category: "중국요리",
    address: "강원특별자치도 춘천시 춘천로 195",
    phone: "033-251-3125",
    lat: 37.8770011569824,
    lng: 127.735625421593,
    kakaoUrl: "http://place.map.kakao.com/10379849",
    naverUrl: "https://map.naver.com/p/search/%EB%B3%B5%EC%84%B1%EC%9B%90%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%B6%98%EC%B2%9C%EC%8B%9C%20%EC%B6%98%EC%B2%9C%EB%A1%9C%20195",
    rating: 3.8,
    reviewCount: 87,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCGCsW3ObFoRB-D35zMVcongz3kjIRFjFzxbnrTbKvWXnDrR-EYaJfcFswS4RO9ZoASprwCGZtlCjRflINvs84_c-ytu9SiABEhncWRmxxRWxdwP1mCCFEKhG5iVA7ZjYIaxm5uNcby7Gg7zw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-179",
    name: "복화루",
    category: "중식",
    address: "인천 부평구 부평대로32번길 16",
    phone: "032-503-9725",
    lat: 37.49433165664951,
    lng: 126.72397503198503,
    kakaoUrl: "http://place.map.kakao.com/9803823",
    naverUrl: "https://map.naver.com/p/search/%EB%B3%B5%ED%99%94%EB%A3%A8%20%EC%9D%B8%EC%B2%9C%20%EB%B6%80%ED%8F%89%EA%B5%AC%20%EB%B6%80%ED%8F%89%EB%8C%80%EB%A1%9C32%EB%B2%88%EA%B8%B8%2016",
    rating: 4,
    reviewCount: 303,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBRgGWDc7jslNdI1m0FFfEk1TyO6Q9MYDdfoRK5UPrRvyd4xSsLwKd5udR2tTzLzBtfBsyTxNuEf_WHstX_LMKzkML7sxkmSnpbSE3DD5GkpH1a-RocM_gARECm3e9H24Um0016pLYfTJUWUqirM2usNw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 맛집."
      }
    ]
  },
  {
    id: "jjy-180",
    name: "본가진미간장게장",
    category: "게,대게",
    address: "서울 송파구 백제고분로 420",
    phone: "02-422-5081",
    lat: 37.50832579951229,
    lng: 127.1113038375213,
    kakaoUrl: "http://place.map.kakao.com/17296779",
    naverUrl: "https://map.naver.com/p/search/%EB%B3%B8%EA%B0%80%EC%A7%84%EB%AF%B8%EA%B0%84%EC%9E%A5%EA%B2%8C%EC%9E%A5%20%EC%84%9C%EC%9A%B8%20%EC%86%A1%ED%8C%8C%EA%B5%AC%20%EB%B0%B1%EC%A0%9C%EA%B3%A0%EB%B6%84%EB%A1%9C%20420",
    rating: 4,
    reviewCount: 381,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDvFSALUKUICF9ijPTZy7eu7FidKPz-y9F9vLwSn970H9UzsZjBsJeZbqAltZGZMPAKpmddL3q77fhMFPvXpDhoSWPAzX6C3vUdELszE4AxOSnpKeWQm0TI2PVTVUtqfVaqYIhVdiZKJ4XwViP1P6Q9fg=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-181",
    name: "본때 곡성점",
    category: "감자탕",
    address: "전남광주통합특별시 곡성군 곡성읍 군청로 49",
    phone: "061-363-4242",
    lat: 35.28165972405916,
    lng: 127.29087858263979,
    kakaoUrl: "http://place.map.kakao.com/11909225",
    naverUrl: "https://map.naver.com/p/search/%EB%B3%B8%EB%95%8C%20%EA%B3%A1%EC%84%B1%EC%A0%90%20%EC%A0%84%EB%82%A8%EA%B4%91%EC%A3%BC%ED%86%B5%ED%95%A9%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EA%B3%A1%EC%84%B1%EA%B5%B0%20%EA%B3%A1%EC%84%B1%EC%9D%8D%20%EA%B5%B0%EC%B2%AD%EB%A1%9C%2049",
    rating: 3.8,
    reviewCount: 4,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCv9hAYDtcOHZfcbo76HGH3-2BTpviX31oMn-uMNx1BDZvlvOLgMigXz5yyUoXqN9OB6fwQ_KQfe1nQiZ4vq5z8A3A7H9DshAeFiHmN0RbddbiUkUI4EikZWDgzTH6xjXSMWfJcYUDFA-I9tIY=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 찜·탕 맛집."
      }
    ]
  },
  {
    id: "jjy-182",
    name: "봉화숯불왕갈비",
    category: "갈비",
    address: "경북 봉화군 봉화읍 내성로1길 75",
    phone: "054-673-1999",
    lat: 36.89243118637831,
    lng: 128.73980107399208,
    kakaoUrl: "http://place.map.kakao.com/1572329399",
    naverUrl: "https://map.naver.com/p/search/%EB%B4%89%ED%99%94%EC%88%AF%EB%B6%88%EC%99%95%EA%B0%88%EB%B9%84%20%EA%B2%BD%EB%B6%81%20%EB%B4%89%ED%99%94%EA%B5%B0%20%EB%B4%89%ED%99%94%EC%9D%8D%20%EB%82%B4%EC%84%B1%EB%A1%9C1%EA%B8%B8%2075",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-183",
    name: "봉황부대찌개 본점",
    category: "찌개,전골",
    address: "서울 동대문구 황물로 39",
    phone: "02-2247-1976",
    lat: 37.5737565377757,
    lng: 127.046253951982,
    kakaoUrl: "http://place.map.kakao.com/9031463",
    naverUrl: "https://map.naver.com/p/search/%EB%B4%89%ED%99%A9%EB%B6%80%EB%8C%80%EC%B0%8C%EA%B0%9C%20%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC%20%ED%99%A9%EB%AC%BC%EB%A1%9C%2039",
    rating: 4.1,
    reviewCount: 100,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBR_7fQpzDRa0jzrlbSS-yTF9ilDuub78zpZVoWBb4I7JCOr_zqGqw9cPOFBrgMUEnrh_7ScEukBbgGkykAzm1Zm9QZHCYeLcxM0fQZMCH1owUHl1qk9Rch_Wgp1xpQgb7eqjWbDjvIW-4yKL4=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 찜·탕 맛집."
      }
    ]
  },
  {
    id: "jjy-184",
    name: "부농정육식당",
    category: "육류,고기",
    address: "서울 송파구 백제고분로28길 29",
    phone: "02-413-3308",
    lat: 37.500405031009215,
    lng: 127.09138820654621,
    kakaoUrl: "http://place.map.kakao.com/16047151",
    naverUrl: "https://map.naver.com/p/search/%EB%B6%80%EB%86%8D%EC%A0%95%EC%9C%A1%EC%8B%9D%EB%8B%B9%20%EC%84%9C%EC%9A%B8%20%EC%86%A1%ED%8C%8C%EA%B5%AC%20%EB%B0%B1%EC%A0%9C%EA%B3%A0%EB%B6%84%EB%A1%9C28%EA%B8%B8%2029",
    rating: 4.3,
    reviewCount: 284,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBQfcf4XJ1FNqNEEVCVDQBgRMWhqNT4si0tEXkzi7DutKRXG2hjSsT6_V-TmAkJq9Ebu9KoAH5IjHvlgIrWzAX0nzZIyxKbFxxwivkudkCvRLGNwL5Gvq5IxhpccEyNF_JqE3kTNUBLf0tR=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-185",
    name: "부산진오뎅",
    category: "오뎅바",
    address: "서울 강동구 동남로75길 13-7",
    phone: "02-442-2588",
    lat: 37.5539313347855,
    lng: 127.155537737174,
    kakaoUrl: "http://place.map.kakao.com/12150208",
    naverUrl: "https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EC%A7%84%EC%98%A4%EB%8E%85%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%8F%99%EA%B5%AC%20%EB%8F%99%EB%82%A8%EB%A1%9C75%EA%B8%B8%2013-7",
    rating: 4.1,
    reviewCount: 25,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAmoBw4G7bjknm3_Lk9IY9726PyjbyIh-phgyIGX55MBQtvWIP-yGlV_UP1Bcl1yS9C9kL9mXaXunQh-3ivPjZEG4QuRFyY_tLeZ78dR1tepl5Wo86TNkON3hyG8BEwXdiYDkxU7ICFQjcasQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "가게에 어묵 전부 털기👊🏻 명일동 부산진오뎅 먹방",
        videoUrl: "https://www.youtube.com/watch?v=uoVQb2OXhzM",
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-186",
    name: "부추소곱창",
    category: "곱창,막창",
    address: "서울 동대문구 왕산로43길 16",
    phone: "010-4736-9897",
    lat: 37.5837459869045,
    lng: 127.048184806812,
    kakaoUrl: "http://place.map.kakao.com/350312322",
    naverUrl: "https://map.naver.com/p/search/%EB%B6%80%EC%B6%94%EC%86%8C%EA%B3%B1%EC%B0%BD%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EC%99%95%EC%82%B0%EB%A1%9C43%EA%B8%B8%2016",
    rating: 4.6,
    reviewCount: 7,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAch2rOAMbq4WQL_ohLrNq_iLJcxssjsp4SfLSdeEwADGb_WdYqG41S64o6YSVNgR9HvpzC0uqF7oxY8U_QlnFOJWUZDUf4AYaTbULOUaYrroK6g3aHR6rR3vqqM2mlfjW_xL0WxkACkCB2474=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-187",
    name: "빈해원",
    category: "중국요리",
    address: "전북특별자치도 군산시 동령길 57",
    phone: "063-445-2429",
    lat: 35.988834779577,
    lng: 126.713983172674,
    kakaoUrl: "http://place.map.kakao.com/11053604",
    naverUrl: "https://map.naver.com/p/search/%EB%B9%88%ED%95%B4%EC%9B%90%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EA%B5%B0%EC%82%B0%EC%8B%9C%20%EB%8F%99%EB%A0%B9%EA%B8%B8%2057",
    rating: 3.2,
    reviewCount: 2619,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjA85hEwUPo3D0XOy7LWBzzgYS82wy6XweUDdI5S05dnUtPjf41bm9F7dQu8NaYCNyU6YEWimli04cNKVQcVSSVVEKqmB-4B5xhY6bNgsvWsQZ0ABhc4MHYqYPtYQCC_KGty_GhObr8d1iVp-dM=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      },
      {
        name: "맛있는 녀석들",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "등록문화재로 지정된 군산의 대표 명소로, 영화 '타짜'의 촬영지로도 알려진 짬뽕 맛집이다."
      }
    ]
  },
  {
    id: "jjy-189",
    name: "빨간떡볶이",
    category: "떡볶이",
    address: "부산 해운대구 우동1로20번길 74",
    phone: "051-743-2814",
    lat: 35.16553238654025,
    lng: 129.160506443788,
    kakaoUrl: "http://place.map.kakao.com/20522414",
    naverUrl: "https://map.naver.com/p/search/%EB%B9%A8%EA%B0%84%EB%96%A1%EB%B3%B6%EC%9D%B4%20%EB%B6%80%EC%82%B0%20%ED%95%B4%EC%9A%B4%EB%8C%80%EA%B5%AC%20%EC%9A%B0%EB%8F%991%EB%A1%9C20%EB%B2%88%EA%B8%B8%2074",
    rating: 4.2,
    reviewCount: 360,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjClD49SODTuzeF_sS39D5uUEyfc1QloHnuRNgtE6fK1foxAFOR9GjZhXYYzAYHwSvSavYeqohRWlrnyNdR8qvENKQKSVsDu6DQ7H9zgiUTPUGVuosXBngeheFBO9EQ1OmGcxUYs26nEoAQVSDFm2tNpuw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "81세 할머니의 특이한 떡볶이?🤔 미친 비주얼의 새빨간 떡볶이 분식 먹방",
        videoUrl: "https://www.youtube.com/watch?v=HT3oGmsf1xo",
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-190",
    name: "빨간부산오뎅",
    category: "분식",
    address: "서울 송파구 백제고분로48길 36",
    phone: "02-6439-5050",
    lat: 37.5103927830355,
    lng: 127.11681965612,
    kakaoUrl: "http://place.map.kakao.com/1827236569",
    naverUrl: "https://map.naver.com/p/search/%EB%B9%A8%EA%B0%84%EB%B6%80%EC%82%B0%EC%98%A4%EB%8E%85%20%EC%84%9C%EC%9A%B8%20%EC%86%A1%ED%8C%8C%EA%B5%AC%20%EB%B0%B1%EC%A0%9C%EA%B3%A0%EB%B6%84%EB%A1%9C48%EA%B8%B8%2036",
    rating: 4.1,
    reviewCount: 18,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD9EaMQ1rbJyQ_GFOh1s0kumUGXyloE0GE5-GKe7JvP7WmauHQ3rmAa97f_B9dZOyh6fP_85M_H7hJXiG2JqShVOJc5aBnkF31xV5ljVtrL4zctJqvBtE8VQbvpL1mJIbFdOyySx1lRxTdlFQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-191",
    name: "빽찐라면",
    category: "분식",
    address: "서울 동작구 상도로 295",
    phone: "02-6397-4186",
    lat: 37.5014477452177,
    lng: 126.949552009383,
    kakaoUrl: "http://place.map.kakao.com/1606118061",
    naverUrl: "https://map.naver.com/p/search/%EB%B9%BD%EC%B0%90%EB%9D%BC%EB%A9%B4%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EC%9E%91%EA%B5%AC%20%EC%83%81%EB%8F%84%EB%A1%9C%20295",
    rating: 4.3,
    reviewCount: 63,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCGNAOo7vrgKLwxIIG7xLyesDoEpwHithnNRyILmy3yECVuJyMcCahmdXYHTpv_tG-x5IuZJ25muwB3pzhgsplzhqVoqmaeOXMs9j48mHUkvLTSFpCjt1DQIuNLBUkQy-fqBW_xAFnnAMU29rQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "사장님이 달라지셨어요(?)😳 백종원의골목식당 상도동 빽찐라면 전메뉴 먹방",
        videoUrl: "https://www.youtube.com/watch?v=Td-nXxKGqT0",
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-192",
    name: "뻘하우스",
    category: "조개",
    address: "서울 중구 다산로47길 15",
    phone: "02-2231-7292",
    lat: 37.5665314424681,
    lng: 127.015099562759,
    kakaoUrl: "http://place.map.kakao.com/19162981",
    naverUrl: "https://map.naver.com/p/search/%EB%BB%98%ED%95%98%EC%9A%B0%EC%8A%A4%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EB%8B%A4%EC%82%B0%EB%A1%9C47%EA%B8%B8%2015",
    rating: 4.3,
    reviewCount: 88,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCMpXUL5XhSeD2WGYkbJ2O04FlLrVBpFc_P2nUwTea5n3MvcQ5EDdI8-0gBBUhimR1d-o9Fia6XtODQw7IBoWHtDt8W7k2pljNn5z-24VdfxkMlHJfFKcotQcjfIWcuThWRbVDTtCW46oryHAQYCv5ojg=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 찜·탕 맛집."
      }
    ]
  },
  {
    id: "jjy-193",
    name: "뽕사부 약수역점",
    category: "중국요리",
    address: "서울 중구 동호로 186-3",
    phone: "02-2253-8882",
    lat: 37.5547432358249,
    lng: 127.011181422642,
    kakaoUrl: "http://place.map.kakao.com/2038295536",
    naverUrl: "https://map.naver.com/p/search/%EB%BD%95%EC%82%AC%EB%B6%80%20%EC%95%BD%EC%88%98%EC%97%AD%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EB%8F%99%ED%98%B8%EB%A1%9C%20186-3",
    rating: 3.8,
    reviewCount: 28,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjB--B52xdLj31Ci9HoSMa9pVcfAC5_2Ypk9r2zyDjPXBYA5w2qiMdMs8ppgxRuUm7xH23pRWZ5rnpl2j5Xe4sCrXuQtj-2PPO9ubOi5nztD3Q61hQO7rVSDYsUY3c8TrBxBn59NmpKgnVtyUmU=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-194",
    name: "사리원면옥 본점",
    category: "냉면",
    address: "대전 중구 중교로 62",
    phone: "042-256-6506",
    lat: 36.3261520899609,
    lng: 127.426540617167,
    kakaoUrl: "http://place.map.kakao.com/25049472",
    naverUrl: "https://map.naver.com/p/search/%EC%82%AC%EB%A6%AC%EC%9B%90%EB%A9%B4%EC%98%A5%20%EB%B3%B8%EC%A0%90%20%EB%8C%80%EC%A0%84%20%EC%A4%91%EA%B5%AC%20%EC%A4%91%EA%B5%90%EB%A1%9C%2062",
    rating: 3.5,
    reviewCount: 1357,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBGHmu9ypn51dDX4v7qFDM2FRfu0B4vTeCAKQZvajSrBp9MWicJVLqElgrta40HKV9PAUmwIRKrvb_63xesLN-7-9lnTjzX3_bcRZAMU_SaE6cAm_sozrMVCrFumG_KbSpi8bL0IOegI7AcJPs=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-195",
    name: "산골닭갈비",
    category: "닭요리",
    address: "서울 광진구 강변역로4길 56",
    phone: "02-444-3985",
    lat: 37.5330188743299,
    lng: 127.092253904766,
    kakaoUrl: "http://place.map.kakao.com/12653535",
    naverUrl: "https://map.naver.com/p/search/%EC%82%B0%EA%B3%A8%EB%8B%AD%EA%B0%88%EB%B9%84%20%EC%84%9C%EC%9A%B8%20%EA%B4%91%EC%A7%84%EA%B5%AC%20%EA%B0%95%EB%B3%80%EC%97%AD%EB%A1%9C4%EA%B8%B8%2056",
    rating: 4.2,
    reviewCount: 354,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDTFg2mJbuwGtOd8XKLMhkqUc_bBe-yyhfUSdsGR5xQw3QmpbWVTPafN03w8KftS_FF9j8iQQ3PGM59HE4jXv9d-_I12IxRHxd9ggUw4LBe3QjjbTXsu9qBI3A4uMl80T4Sxb6EKpREjd3iZs0=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-196",
    name: "산쪼메 이수점",
    category: "일본식라면",
    address: "서울 동작구 사당로 300",
    phone: "070-4110-1534",
    lat: 37.4844278377431,
    lng: 126.980294832277,
    kakaoUrl: "http://place.map.kakao.com/526361801",
    naverUrl: "https://map.naver.com/p/search/%EC%82%B0%EC%AA%BC%EB%A9%94%20%EC%9D%B4%EC%88%98%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EC%9E%91%EA%B5%AC%20%EC%82%AC%EB%8B%B9%EB%A1%9C%20300",
    rating: 4.1,
    reviewCount: 70,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAZIV1GQS3iKwi4GpQEJm73Og9JOG800dUjELQsMQEnDYB7NIrIDpfV4GWvEKT5zUXm8vExl8X_nOboYkMn3sag1X6yVz9vVtveOY_8edRB8V-WViHZYZLB1SuZNGWK8ohZDRbXRtnxKKTFiw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 아시안 맛집."
      }
    ]
  },
  {
    id: "jjy-197",
    name: "산청숯불가든 을지로",
    category: "육류,고기",
    address: "서울 중구 을지로 114-6",
    phone: "02-2273-8188",
    lat: 37.5658202486879,
    lng: 126.990621155339,
    kakaoUrl: "http://place.map.kakao.com/2088172966",
    naverUrl: "https://map.naver.com/p/search/%EC%82%B0%EC%B2%AD%EC%88%AF%EB%B6%88%EA%B0%80%EB%93%A0%20%EC%9D%84%EC%A7%80%EB%A1%9C%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EC%9D%84%EC%A7%80%EB%A1%9C%20114-6",
    rating: 4.6,
    reviewCount: 673,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjC_gmnOZpzBDc6lWQ8qdWpn_hnrUHVCusXI3EG9CYgeYEVRgxQHlGzUUCQpSYRVmxOs-vX0FFCO8W_tCWLCJJZNAHFtfUWsl8PFuyP6QM-uLqEItqX8f1tZqyDnnzOVSjsI7isxAwJWxEwV2qj1hFhr3Q=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-198",
    name: "산호",
    category: "해물,생선",
    address: "서울 강남구 논현로175길 111",
    phone: "02-517-0035",
    lat: 37.52232401774608,
    lng: 127.02038481995852,
    kakaoUrl: "http://place.map.kakao.com/14091104",
    naverUrl: "https://map.naver.com/p/search/%EC%82%B0%ED%98%B8%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EB%85%BC%ED%98%84%EB%A1%9C175%EA%B8%B8%20111",
    rating: 4.1,
    reviewCount: 189,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBtuBN8LV3kPkN0eBTC8dpnvYbwOVqr8p9KSwHQEv_rbwehBVDRbYnFfFC9TLCGbQHWEWCd26zHqA-LKG-JKMzqu-hCwVhYWk5FHogFX7o8qgn4Mmwf_S7xc5pMBHNHxt9eitF6ympvtNxf99U=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-199",
    name: "삼삼이네생고기 성수점",
    category: "육류,고기",
    address: "서울 성동구 성덕정길 122",
    phone: "02-461-0946",
    lat: 37.53664068433047,
    lng: 127.0569277381386,
    kakaoUrl: "http://place.map.kakao.com/9809733",
    naverUrl: "https://map.naver.com/p/search/%EC%82%BC%EC%82%BC%EC%9D%B4%EB%84%A4%EC%83%9D%EA%B3%A0%EA%B8%B0%20%EC%84%B1%EC%88%98%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%84%B1%EB%8F%99%EA%B5%AC%20%EC%84%B1%EB%8D%95%EC%A0%95%EA%B8%B8%20122",
    rating: 3.8,
    reviewCount: 6,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBeXuEw1_V1LIkIMZSbU1KnAo4BNJ0vy4DPPkJxGtJWjNRsxQOz6gxfp9Hb3sfSsYrArgHmKfmvXchlnt06aipJlZ3U92na3PPb-5-Zb_oHcSJQa77e06Y7U6-epTjgNFJ6DGYgqsPg7h95IhoO1UUHzw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-200",
    name: "삼성갈미조개",
    category: "조개",
    address: "부산 강서구 르노삼성대로 602",
    phone: "051-271-0722",
    lat: 35.1015547859128,
    lng: 128.929184376214,
    kakaoUrl: "http://place.map.kakao.com/21843973",
    naverUrl: "https://map.naver.com/p/search/%EC%82%BC%EC%84%B1%EA%B0%88%EB%AF%B8%EC%A1%B0%EA%B0%9C%20%EB%B6%80%EC%82%B0%20%EA%B0%95%EC%84%9C%EA%B5%AC%20%EB%A5%B4%EB%85%B8%EC%82%BC%EC%84%B1%EB%8C%80%EB%A1%9C%20602",
    rating: 4.1,
    reviewCount: 47,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDg-O8Nu5jSJOH0kmX-ED_UlXE6sUVevE7mHevlW_arlFfErqMb0H3crTWFmUVMPNrgoZj_bGCTLrYhu8ihjfpSAla-gXmVOUnl9kBsyVrdiuX9xBUzuz6Gwy5gqvxm57h9cLboH7X-e6K3hzZ1o2oM=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-201",
    name: "삼정본가식당",
    category: "한식",
    address: "경북 울릉군 울릉읍 울릉순환로 212-8",
    phone: "054-791-5870",
    lat: 37.49264522193613,
    lng: 130.90985864284113,
    kakaoUrl: "http://place.map.kakao.com/24159571",
    naverUrl: "https://map.naver.com/p/search/%EC%82%BC%EC%A0%95%EB%B3%B8%EA%B0%80%EC%8B%9D%EB%8B%B9%20%EA%B2%BD%EB%B6%81%20%EC%9A%B8%EB%A6%89%EA%B5%B0%20%EC%9A%B8%EB%A6%89%EC%9D%8D%20%EC%9A%B8%EB%A6%89%EC%88%9C%ED%99%98%EB%A1%9C%20212-8",
    rating: 4,
    reviewCount: 74,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAOoJ4tNEv-NHpl46C1fUazev3a9JGrNT88qvDhI9BH_vVQVX-11koOd_0n5ApyJD5F38SSXDd-Bwsuq-BP_tsbi7awq-qG2lWqPoGZAhePXuceDMDx2gL6RzQfIqejEPUmuuNgGgQRO6Z6hhA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-202",
    name: "삼화만두 본점",
    category: "분식",
    address: "대구 중구 남성로 58-1",
    phone: "053-256-5651",
    lat: 35.86714231852152,
    lng: 128.59312352041204,
    kakaoUrl: "http://place.map.kakao.com/1401694289",
    naverUrl: "https://map.naver.com/p/search/%EC%82%BC%ED%99%94%EB%A7%8C%EB%91%90%20%EB%B3%B8%EC%A0%90%20%EB%8C%80%EA%B5%AC%20%EC%A4%91%EA%B5%AC%20%EB%82%A8%EC%84%B1%EB%A1%9C%2058-1",
    rating: 4.3,
    reviewCount: 109,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAvJkND2YgCZ9_m2TJN8Kl4uk6-uI2R7pUYmi0TWst8A-bFeyAb8wyEsCV9BWv6fRHj62UIUZ4OEGZOC5gV3kEVrzQMdG62KSAO_nnzTCDvUXkdtc4WG0OJ5dHLGLWs61PdzCAa2Ml3n-RXrg=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-203",
    name: "상국이네",
    category: "분식",
    address: "부산 해운대구 구남로41번길 40-1",
    phone: "051-742-9001",
    lat: 35.162016169133,
    lng: 129.16287693095907,
    kakaoUrl: "http://place.map.kakao.com/9089301",
    naverUrl: "https://map.naver.com/p/search/%EC%83%81%EA%B5%AD%EC%9D%B4%EB%84%A4%20%EB%B6%80%EC%82%B0%20%ED%95%B4%EC%9A%B4%EB%8C%80%EA%B5%AC%20%EA%B5%AC%EB%82%A8%EB%A1%9C41%EB%B2%88%EA%B8%B8%2040-1",
    rating: 3.4,
    reviewCount: 1996,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCb1MDQvVkTHx2Qly7eAJlMZjsKQAKk6cyR3scvyz1pdxg7a4fayOsk3WMKZBzfTpLAXBxmfgnUZbaHOyG-6a-dn3w90RtW1TgVIIi0NZTqQrvJeivSHQf2el3Y4b4bU1I0tEgOr3YVNfOsDA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-204",
    name: "상록식육식당",
    category: "육류,고기",
    address: "경북 울릉군 서면 남양4길 25",
    phone: "054-791-5005",
    lat: 37.46742539801962,
    lng: 130.83763528709693,
    kakaoUrl: "http://place.map.kakao.com/12614097",
    naverUrl: "https://map.naver.com/p/search/%EC%83%81%EB%A1%9D%EC%8B%9D%EC%9C%A1%EC%8B%9D%EB%8B%B9%20%EA%B2%BD%EB%B6%81%20%EC%9A%B8%EB%A6%89%EA%B5%B0%20%EC%84%9C%EB%A9%B4%20%EB%82%A8%EC%96%914%EA%B8%B8%2025",
    rating: 4.2,
    reviewCount: 18,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjB8ssn8NZHxOrzTpLqdoLparE_NSHA3DjMkpHCSEjiy7UqQdGkObBeX49FY8Mb4VRPHwapEa5le3t9sSkHLxEkkrFVJhcmttaU--HgGHDXs458M1npF3W_YMjxVZIorEW_o8xc2w9gz2EcLDw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-205",
    name: "새집",
    category: "한정식",
    address: "전북특별자치도 순창군 순창읍 순창6길 5-1",
    phone: "063-653-2271",
    lat: 35.3731622853721,
    lng: 127.143111459668,
    kakaoUrl: "http://place.map.kakao.com/8361352",
    naverUrl: "https://map.naver.com/p/search/%EC%83%88%EC%A7%91%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%88%9C%EC%B0%BD%EA%B5%B0%20%EC%88%9C%EC%B0%BD%EC%9D%8D%20%EC%88%9C%EC%B0%BD6%EA%B8%B8%205-1",
    rating: 3.4,
    reviewCount: 425,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAIAuPHOHp3qprWsnxC9PDrjaZY3NkMCKvb4fEOtyOC9hULaFfVFk1C9cUQrgViPEuscnmVcd2-1NyaHXZLa2qlLKe4AmuakXOH2kLb2VYBaDqx69fkjXENqSETamkqeFxcnCyaAU6CS3pdsg=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-206",
    name: "서울곱창",
    category: "광주서울곱창",
    address: "전남광주통합특별시 광산구 송정로15번길 71",
    phone: "062-944-1135",
    lat: 35.1387660650508,
    lng: 126.796510303651,
    kakaoUrl: "http://place.map.kakao.com/7943585",
    naverUrl: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%EA%B3%B1%EC%B0%BD%20%EC%A0%84%EB%82%A8%EA%B4%91%EC%A3%BC%ED%86%B5%ED%95%A9%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EA%B4%91%EC%82%B0%EA%B5%AC%20%EC%86%A1%EC%A0%95%EB%A1%9C15%EB%B2%88%EA%B8%B8%2071",
    rating: 4,
    reviewCount: 828,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAcYBUH9YkV6vQwDoS61E08fgI4_ZkppiyzCDh9sjEtYr9U5x9TKQXqDYRLM4f1Tra0Z7pZy1ykEnFbfsojyDjk6psu2OFr9_V-OviN2ocftH-f98Fv9K0LRvOs8voZY5Kt16ZCATTYuqLs4SpKbzmn=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "광주 현지분께 추천 받았습니다🥺 70년 전통?! 오픈부터 마감까지 줄서있는 서울곱창 먹방",
        videoUrl: "https://www.youtube.com/watch?v=5kvyjueOvxE",
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-207",
    name: "서울떡볶이",
    category: "떡볶이",
    address: "제주특별자치도 제주시 동문로4길 11",
    phone: "064-726-9266",
    lat: 33.5122953202419,
    lng: 126.527834618103,
    kakaoUrl: "http://place.map.kakao.com/12582103",
    naverUrl: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%EB%96%A1%EB%B3%B6%EC%9D%B4%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EB%8F%99%EB%AC%B8%EB%A1%9C4%EA%B8%B8%2011",
    rating: 2.5,
    reviewCount: 214,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDP_Q62LQjXwgBWqp1I92EcprLo2nQ6cF0LXtJSvb4klZCuQhCivuJau3YuvMWffdF53qzU7MCgLgUToWpgWnQ6J43O__87AD_L68BKUzmNRc2aubLyk2Lo5-KUWIhAzkEa3X3MxrfKzyQYwA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-208",
    name: "서울쭈꾸미",
    category: "해물,생선",
    address: "서울 서초구 신반포로47길 33-5",
    phone: "02-516-1134",
    lat: 37.511942896413515,
    lng: 127.01893761179306,
    kakaoUrl: "http://place.map.kakao.com/12659868",
    naverUrl: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%EC%AD%88%EA%BE%B8%EB%AF%B8%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EC%8B%A0%EB%B0%98%ED%8F%AC%EB%A1%9C47%EA%B8%B8%2033-5",
    rating: 4.3,
    reviewCount: 39,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDd6bD_k6o5VOrqBY5NLS-C_XLLXZIDWxJfg1aZzwEk5o8z04wi5pn_FlwFShqKcbDo4EY675b96UdNjjt69QQLr_KFSLDD5rbZCs94RcyBq7gvMdhUwlHT1hGG6MtvIqd9AzZpv9419Y0Wkw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "🔥눈물나게 매운 쭈꾸미🔥먹다가 포기했습니다.. 영동시장 서울쭈꾸미 매운맛 1.2.3단계 먹방",
        videoUrl: "https://www.youtube.com/watch?v=N4nuqaAs79g",
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-209",
    name: "서유기짬뽕",
    category: "중국요리",
    address: "충남 당진시 신평면 삽교천3길 60",
    phone: "041-363-2017",
    lat: 36.89146638897112,
    lng: 126.82234301604028,
    kakaoUrl: "http://place.map.kakao.com/1598787020",
    naverUrl: "https://map.naver.com/p/search/%EC%84%9C%EC%9C%A0%EA%B8%B0%EC%A7%AC%EB%BD%95%20%EC%B6%A9%EB%82%A8%20%EB%8B%B9%EC%A7%84%EC%8B%9C%20%EC%8B%A0%ED%8F%89%EB%A9%B4%20%EC%82%BD%EA%B5%90%EC%B2%9C3%EA%B8%B8%2060",
    rating: 3.9,
    reviewCount: 327,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDi4xBagx2f4vsoCyJvpfnxa9-QBCaTzfWRhQCOzVz3j5O8IsHo1MRbzBLasBLQQB29unXMjAyZmT1LPDkFT1bctUwnZ_NHIRYUqtk3ga6tfs52nqFH5pIkv-ZUevf3kl8aGKjAO1sVkrpS=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-210",
    name: "서종대왕낙지 서종본점",
    category: "해물,생선",
    address: "경기 양평군 서종면 사랑제길 8",
    phone: "031-772-8293",
    lat: 37.5966619684621,
    lng: 127.35292128996,
    kakaoUrl: "http://place.map.kakao.com/1548676412",
    naverUrl: "https://map.naver.com/p/search/%EC%84%9C%EC%A2%85%EB%8C%80%EC%99%95%EB%82%99%EC%A7%80%20%EC%84%9C%EC%A2%85%EB%B3%B8%EC%A0%90%20%EA%B2%BD%EA%B8%B0%20%EC%96%91%ED%8F%89%EA%B5%B0%20%EC%84%9C%EC%A2%85%EB%A9%B4%20%EC%82%AC%EB%9E%91%EC%A0%9C%EA%B8%B8%208",
    rating: 3.7,
    reviewCount: 20,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCsUKETO1etNMs0M-o_zkdQOITPACiicZngFBFTDoXvTFepq8xHmRte41oY6c4E9Gc-yh44_ArL8jpG2DOgCHsOV7YMi79iYa-yr_01mnF3ZoDhzUNNAla5xREMfWYhQOhmQ4PnH7CjrjKoH3BqmyW4DQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-211",
    name: "석곡돼지한마리",
    category: "육류,고기",
    address: "전남광주통합특별시 곡성군 석곡면 석곡2길 13",
    phone: "061-362-3077",
    lat: 35.130200847711976,
    lng: 127.25475998527646,
    kakaoUrl: "http://place.map.kakao.com/8952970",
    naverUrl: "https://map.naver.com/p/search/%EC%84%9D%EA%B3%A1%EB%8F%BC%EC%A7%80%ED%95%9C%EB%A7%88%EB%A6%AC%20%EC%A0%84%EB%82%A8%EA%B4%91%EC%A3%BC%ED%86%B5%ED%95%A9%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EA%B3%A1%EC%84%B1%EA%B5%B0%20%EC%84%9D%EA%B3%A1%EB%A9%B4%20%EC%84%9D%EA%B3%A12%EA%B8%B8%2013",
    rating: 3.7,
    reviewCount: 42,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBrV9uXI2FDmzZSOvQ0zzqYbnhjh4SnZQYWMzEt0vxcHfigPQk6t0snLQCPUHwR0AAKT9CChXcgKAvfw3uJGciRnJmXN5LSmwbIf2HWXPFRNtKZ9wrVr2aH9XI55uiVBVJ5tB_FFEQUNGztwdkXbWsSGA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "곡성 120년 전통 석쇠구이? 14인분만 먹방",
        videoUrl: "https://www.youtube.com/watch?v=hryirOKFk38",
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-212",
    name: "선희식육식당",
    category: "육류,고기",
    address: "전남광주통합특별시 목포시 비파로 145",
    phone: "061-283-2334",
    lat: 34.809883892795,
    lng: 126.420876802296,
    kakaoUrl: "http://place.map.kakao.com/168909374",
    naverUrl: "https://map.naver.com/p/search/%EC%84%A0%ED%9D%AC%EC%8B%9D%EC%9C%A1%EC%8B%9D%EB%8B%B9%20%EC%A0%84%EB%82%A8%EA%B4%91%EC%A3%BC%ED%86%B5%ED%95%A9%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EB%AA%A9%ED%8F%AC%EC%8B%9C%20%EB%B9%84%ED%8C%8C%EB%A1%9C%20145",
    rating: 4.4,
    reviewCount: 55,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDPGG1LAgQkl6RjWRjS_kuH36tJYL1Ewd9jbfidczwBpzC65_vzZ19wb1vdZ1e-Pd1q9F54NnlMFn8yt7okxTfxyZgEbjq4IP5GPzL0by6i0wChzF5bDSbWjb9XAZ4nJ4mbb5QcUFKTF4n71FhKDxdt=s4800-w773",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "목포1탄) 한입 먹자마자 인생맛집이 됐습니다🥺 목포 현지인도 줄서는 선희식육식당 생고기 삼겹살 먹방",
        videoUrl: "https://www.youtube.com/watch?v=uNq8gRAzMYc",
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-213",
    name: "성북동돼지갈비 본점",
    category: "갈비",
    address: "서울 성북구 성북로 115",
    phone: "02-764-2420",
    lat: 37.593288257663986,
    lng: 126.99607316143037,
    kakaoUrl: "http://place.map.kakao.com/10479275",
    naverUrl: "https://map.naver.com/p/search/%EC%84%B1%EB%B6%81%EB%8F%99%EB%8F%BC%EC%A7%80%EA%B0%88%EB%B9%84%20%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%84%B1%EB%B6%81%EB%A1%9C%20115",
    rating: 3.7,
    reviewCount: 993,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD_Sz3RdDIOhpNRL72nMaWSIhTqkbwoxY2ZmbbszsurMuxoanBAtuisJJFQ_YzGm7B9uh10bayI2l0JIZm3QCVKO3wYJjLLnxZeRBDLTYyqwDt-n5gKuSs-JIBP9YKk8Nj4JNeQEB_B3NzvO4T394GUAA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-214",
    name: "성수국밥",
    category: "국밥",
    address: "전남광주통합특별시 순천시 북문길 40",
    phone: "061-752-5258",
    lat: 34.9588941473201,
    lng: 127.484957568513,
    kakaoUrl: "http://place.map.kakao.com/15409073",
    naverUrl: "https://map.naver.com/p/search/%EC%84%B1%EC%88%98%EA%B5%AD%EB%B0%A5%20%EC%A0%84%EB%82%A8%EA%B4%91%EC%A3%BC%ED%86%B5%ED%95%A9%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%88%9C%EC%B2%9C%EC%8B%9C%20%EB%B6%81%EB%AC%B8%EA%B8%B8%2040",
    rating: 5,
    reviewCount: 2,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCe8h464vjIb-lCv6LghhV_P2yb-OGux6FrJCZ0SCit2ezwEQW8DB_Y2T_XfWo-d3vqCH9PzlwLs_n0ZNXfoSvkRc-DKFdjTggoEvmQsmdp1ehNClE5NN8cOPW0xWlp7fbp5bv7odAPSakZgJvsNPlpZw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-215",
    name: "성수족발",
    category: "족발,보쌈",
    address: "서울 성동구 아차산로7길 7",
    phone: "02-464-0425",
    lat: 37.54602762815355,
    lng: 127.05431637398702,
    kakaoUrl: "http://place.map.kakao.com/8416853",
    naverUrl: "https://map.naver.com/p/search/%EC%84%B1%EC%88%98%EC%A1%B1%EB%B0%9C%20%EC%84%9C%EC%9A%B8%20%EC%84%B1%EB%8F%99%EA%B5%AC%20%EC%95%84%EC%B0%A8%EC%82%B0%EB%A1%9C7%EA%B8%B8%207",
    rating: 4,
    reviewCount: 1038,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAwnHri2IO4cbld1CJyLSgMfFMFz-vOyYlkWdYf0iPAfubfQzFuEfiDliUbK1soX5qPetTwJiFz0tR9mWa0REGl_13vvk746M5vlesQsVnWxfR3kJFouiDpJR0sSpoQp1-ZGfki7vXl8yb8FA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "성수 배달지옥🔥 유명한 성수맛집 싹다 배달시켰습니다. 성수족발 감자탕 떡볶이와 마라곤약젤리 먹방",
        videoUrl: "https://www.youtube.com/watch?v=HbJCszPqy_I",
        recommendNote: "쯔양이 방문해 리뷰한 족발·보쌈 맛집."
      }
    ]
  },
  {
    id: "jjy-216",
    name: "성이네천원김밥",
    category: "한식",
    address: "서울 중랑구 중랑역로 150",
    phone: "02-976-5648",
    lat: 37.606690600278895,
    lng: 127.07710690494243,
    kakaoUrl: "http://place.map.kakao.com/698990184",
    naverUrl: "https://map.naver.com/p/search/%EC%84%B1%EC%9D%B4%EB%84%A4%EC%B2%9C%EC%9B%90%EA%B9%80%EB%B0%A5%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EB%9E%91%EA%B5%AC%20%EC%A4%91%EB%9E%91%EC%97%AD%EB%A1%9C%20150",
    rating: 5,
    reviewCount: 6,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBQY--gJBmNuiRZDqJRNRmS0YKGRCAyORY-OWvVzHGt6DXLd0RxtOqvMT5SMCES4VtKpgh2zEPobbmJdMUlTDLnZlMMRKfkCFO6enGXuZ30VfKHTAVpBN-GLlPL8ZS_ry-v8O33SzMmRfiI9sArhzvkHw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-217",
    name: "세광식당",
    category: "국밥",
    address: "전남광주통합특별시 순천시 북문길 40",
    phone: "061-752-4895",
    lat: 34.9589120870312,
    lng: 127.484979571629,
    kakaoUrl: "http://place.map.kakao.com/10564559",
    naverUrl: "https://map.naver.com/p/search/%EC%84%B8%EA%B4%91%EC%8B%9D%EB%8B%B9%20%EC%A0%84%EB%82%A8%EA%B4%91%EC%A3%BC%ED%86%B5%ED%95%A9%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%88%9C%EC%B2%9C%EC%8B%9C%20%EB%B6%81%EB%AC%B8%EA%B8%B8%2040",
    rating: 5,
    reviewCount: 2,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCjguaIg3K_H7I-ECJeyH6b1hgoFiIC9Nxq6cNh-66_BYopO6Cx8vSgN200-0_4GgorbOEZnfv1DIqTV0sM0vRKpkP7QraPjqnGG0glIY7cejP2rheVciftvS1LuDfXOPPv4lR4I5uoZ3ZlNA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-218",
    name: "세광양대창 강남역중앙점",
    category: "세광양대창",
    address: "서울 강남구 강남대로94길 14",
    phone: "02-555-5717",
    lat: 37.49928814234142,
    lng: 127.02857182130006,
    kakaoUrl: "http://place.map.kakao.com/2121791662",
    naverUrl: "https://map.naver.com/p/search/%EC%84%B8%EA%B4%91%EC%96%91%EB%8C%80%EC%B0%BD%20%EA%B0%95%EB%82%A8%EC%97%AD%EC%A4%91%EC%95%99%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EA%B0%95%EB%82%A8%EB%8C%80%EB%A1%9C94%EA%B8%B8%2014",
    rating: 4.3,
    reviewCount: 42,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCkNjokl5Wu9wcsBxQiDzL4bB9h87Q6g7VMYD32PvnBU7OITc8gLChuWiZmupHTA4IczKtRA3Jli7VWH3PhM04wrrFYzlJYWAn0kGL0dSmJvQ2UF-Oju22zm6VFvWJ4f7jCyLidlG3EjYHhgzwl43-QMg=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-219",
    name: "세븐일레븐 종로재동점",
    category: "세븐일레븐",
    address: "서울 종로구 북촌로5길 4",
    phone: "02-3672-8991",
    lat: 37.57955619880447,
    lng: 126.9846940296201,
    kakaoUrl: "http://place.map.kakao.com/799869189",
    naverUrl: "https://map.naver.com/p/search/%EC%84%B8%EB%B8%90%EC%9D%BC%EB%A0%88%EB%B8%90%20%EC%A2%85%EB%A1%9C%EC%9E%AC%EB%8F%99%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%A2%85%EB%A1%9C%EA%B5%AC%20%EB%B6%81%EC%B4%8C%EB%A1%9C5%EA%B8%B8%204",
    rating: 3.8,
    reviewCount: 21,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAQJeqb3g5o252vQJyvmo_nLhGisL1BeDhMwElegcHfDmeuiYGnz8n8B_AYn1P2Gbmfo4958N800vWE6GteJ-Z7gp5o-ya7HtfXDOc416dxbceUQpkejuJcmkcYrWW7ymEOcuGagqxUAGycrQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-220",
    name: "세스크멘슬 본점",
    category: "양식",
    address: "서울 성동구 성수이로14길 7",
    phone: "02-6082-0393",
    lat: 37.54105313200188,
    lng: 127.05640606944031,
    kakaoUrl: "http://place.map.kakao.com/578560649",
    naverUrl: "https://map.naver.com/p/search/%EC%84%B8%EC%8A%A4%ED%81%AC%EB%A9%98%EC%8A%AC%20%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%84%B1%EB%8F%99%EA%B5%AC%20%EC%84%B1%EC%88%98%EC%9D%B4%EB%A1%9C14%EA%B8%B8%207",
    rating: 4.8,
    reviewCount: 716,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCxs5hlM0475afBEZfksf09xiTRPCYZJExS7xVzBLaldw059D0rebhZWoKaR6vHV9uhjjec0PSWCPzcs1hQWLsz6isJ7c7n4KinEKPaaDkZkd1BweKcyHhOJFjStmMJhke8MTU9rXcLArOy_xKS4k40IA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 양식 맛집."
      }
    ]
  },
  {
    id: "jjy-221",
    name: "세창만두",
    category: "분식",
    address: "대구 남구 봉덕로12길 6",
    phone: "053-324-7333",
    lat: 35.84463449175879,
    lng: 128.5969188149058,
    kakaoUrl: "http://place.map.kakao.com/1203921667",
    naverUrl: "https://map.naver.com/p/search/%EC%84%B8%EC%B0%BD%EB%A7%8C%EB%91%90%20%EB%8C%80%EA%B5%AC%20%EB%82%A8%EA%B5%AC%20%EB%B4%89%EB%8D%95%EB%A1%9C12%EA%B8%B8%206",
    rating: 4.3,
    reviewCount: 108,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAmBHhFBI6_L5U9Ne3NRuXIPEn_BHHJ1P55fFebAj4NxpJVjqDSIBcnaxZ_5zIcqVo0BSDgf_nzKkXD_42bPB4c0WNnN1Esw8qhHSBRdqBZsV7LwMS-P0eqnSA_uSuv4362ibnt658Uhfw1ww=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-222",
    name: "소문난성수감자탕",
    category: "감자탕",
    address: "서울 성동구 연무장길 45",
    phone: "02-465-6580",
    lat: 37.5428308422967,
    lng: 127.05440457812,
    kakaoUrl: "http://place.map.kakao.com/13289056",
    naverUrl: "https://map.naver.com/p/search/%EC%86%8C%EB%AC%B8%EB%82%9C%EC%84%B1%EC%88%98%EA%B0%90%EC%9E%90%ED%83%95%20%EC%84%9C%EC%9A%B8%20%EC%84%B1%EB%8F%99%EA%B5%AC%20%EC%97%B0%EB%AC%B4%EC%9E%A5%EA%B8%B8%2045",
    rating: 4.1,
    reviewCount: 6131,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAsT88vtu5UL8U0H0gYR4FfJsjya0ZPd2jCshklRPxpLY1eDpvyqQhtdRHnd6nSL7VDL2Z2-UONKCqz_qRL4T7hFfnN2JkJV2z76UrmOpw6WVmLtc2ZB6TZNEEgsXyvnpAWjeQaaNDmtLQaSnqwaBVlQQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 찜·탕 맛집."
      },
      {
        name: "성시경의 먹을텐데",
        videoTitle: "[sub] 성시경의 먹을텐데 l 성수 감자탕",
        videoUrl: "https://www.youtube.com/watch?v=MAIrp4WYAx4",
        recommendNote: null
      }
    ]
  },
  {
    id: "jjy-223",
    name: "소문난칼국수",
    category: "칼국수",
    address: "경기 이천시 설봉로58번길 30",
    phone: "031-635-6102",
    lat: 37.2811375395329,
    lng: 127.439916869696,
    kakaoUrl: "http://place.map.kakao.com/10563611",
    naverUrl: "https://map.naver.com/p/search/%EC%86%8C%EB%AC%B8%EB%82%9C%EC%B9%BC%EA%B5%AD%EC%88%98%20%EA%B2%BD%EA%B8%B0%20%EC%9D%B4%EC%B2%9C%EC%8B%9C%20%EC%84%A4%EB%B4%89%EB%A1%9C58%EB%B2%88%EA%B8%B8%2030",
    rating: 3.6,
    reviewCount: 228,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAlM89yKP4N8e8ow8pW1BEl4KzTZwhkReeFwcx2LdCpqBEYdNdpRPty2h1DaKnXwNnUaMEwbfB0I1RRweRmz1rsmzIssF5SD__cN2CPa3f1rK49HPvTCV_26T3ED5RmDFPxoaURL9MgJc8IgTM=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-224",
    name: "소소라면닭꼬치",
    category: "분식",
    address: "서울 용산구 한강대로 268-1",
    phone: "0503-7153-3483",
    lat: 37.54225284973914,
    lng: 126.9730581729797,
    kakaoUrl: "http://place.map.kakao.com/18513961",
    naverUrl: "https://map.naver.com/p/search/%EC%86%8C%EC%86%8C%EB%9D%BC%EB%A9%B4%EB%8B%AD%EA%BC%AC%EC%B9%98%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%ED%95%9C%EA%B0%95%EB%8C%80%EB%A1%9C%20268-1",
    rating: 3.9,
    reviewCount: 41,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBWvrjXxDZmkBcJ-JABEVir_gol_ZB2n5kIRlHulE9syC2uRmaqKghqASweiMvJTQuq359urWqqPqWE9kkDaUHDrQiDyxKwwcPA8KBKxHiYHLzoOPOw3poJ3tEs5tsbdXlm8nPYKoGPzoCAT9zrj06LBA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-225",
    name: "속편한짬뽕",
    category: "중국요리",
    address: "서울 서대문구 통일로 143",
    phone: "02-365-5560",
    lat: 37.5671002806222,
    lng: 126.96509190026,
    kakaoUrl: "http://place.map.kakao.com/1159889320",
    naverUrl: "https://map.naver.com/p/search/%EC%86%8D%ED%8E%B8%ED%95%9C%EC%A7%AC%EB%BD%95%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EB%8C%80%EB%AC%B8%EA%B5%AC%20%ED%86%B5%EC%9D%BC%EB%A1%9C%20143",
    rating: 4.4,
    reviewCount: 18,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDCd6iYn4VieLKY9O5Pyvt8ChdU1IDNXCFiZoi_YjFLy_KVkjUpb0xml7MfRN23NtuINJa9X6NCQm8b5cYD3TKsBqyLINP6WAvuzWLw3yrgkeo5NpZAsOu2Vip-RtFBgH40SPqwLTrrRuZxUjnWfaToRA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "5그릇 다먹으면 짬뽕 100그릇?!😳 평생무료권도 받았습니다 짬뽕 도전먹방",
        videoUrl: "https://www.youtube.com/watch?v=7nW5xNfUjUo",
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-226",
    name: "솔밭뽈살하얀살전문",
    category: "육류,고기",
    address: "서울 은평구 갈현로 62",
    phone: "02-388-5937",
    lat: 37.60337704480158,
    lng: 126.91053006318089,
    kakaoUrl: "http://place.map.kakao.com/12502472",
    naverUrl: "https://map.naver.com/p/search/%EC%86%94%EB%B0%AD%EB%BD%88%EC%82%B4%ED%95%98%EC%96%80%EC%82%B4%EC%A0%84%EB%AC%B8%20%EC%84%9C%EC%9A%B8%20%EC%9D%80%ED%8F%89%EA%B5%AC%20%EA%B0%88%ED%98%84%EB%A1%9C%2062",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-227",
    name: "송산칼국수집",
    category: "칼국수",
    address: "경기 화성시 만세구 송산면 사강리 630-2",
    phone: "031-357-8381",
    lat: 37.2145158955764,
    lng: 126.736025059172,
    kakaoUrl: "http://place.map.kakao.com/548498659",
    naverUrl: "https://map.naver.com/p/search/%EC%86%A1%EC%82%B0%EC%B9%BC%EA%B5%AD%EC%88%98%EC%A7%91%20%EA%B2%BD%EA%B8%B0%20%ED%99%94%EC%84%B1%EC%8B%9C%20%EB%A7%8C%EC%84%B8%EA%B5%AC%20%EC%86%A1%EC%82%B0%EB%A9%B4%20%EC%82%AC%EA%B0%95%EB%A6%AC%20630-2",
    rating: 4.3,
    reviewCount: 4,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDwHD8AVfR6LRdJyNeNc0xLKi64bU_3qMSUEuhmaQ67nCSp5G6hvGBAItjfC7XNAlUPqRyvEWqlWngMc5EO5bYwV-2YUImJcCDGRiyQP4wQTrMh3sBaf87ELeEODjUxX2nAGCV6A4wHymz6zZ3o5JpQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-228",
    name: "송옥",
    category: "국수",
    address: "서울 중구 남대문로1길 11",
    phone: "02-752-3297",
    lat: 37.561560344017,
    lng: 126.977372533762,
    kakaoUrl: "http://place.map.kakao.com/10553650",
    naverUrl: "https://map.naver.com/p/search/%EC%86%A1%EC%98%A5%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EB%82%A8%EB%8C%80%EB%AC%B8%EB%A1%9C1%EA%B8%B8%2011",
    rating: 4,
    reviewCount: 383,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBAmOTmWSjG07aI85mi5tnXJ1h_Cp8AdktfZsZEe4Z35pyPZHz5-_SpK-RDWSUzuhxnyjLgyww-HxwctZZqvEEuAu7XgynFCMNd5-KDaYurpbpcaTe2dwWAs2lzM0TXRf12Ti4Jn3pjryy_Ys2phfTUTA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "60년전통 메밀국수 몇판 먹었을까? 서울3대메밀국수! 남대문 송옥 판메밀먹방",
        videoUrl: "https://www.youtube.com/watch?v=vsyr8N53ye4",
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-229",
    name: "송정식당",
    category: "한식",
    address: "서울 종로구 종로40가길 13",
    phone: "02-2267-2817",
    lat: 37.570240760320594,
    lng: 127.00586919907234,
    kakaoUrl: "http://place.map.kakao.com/15758579",
    naverUrl: "https://map.naver.com/p/search/%EC%86%A1%EC%A0%95%EC%8B%9D%EB%8B%B9%20%EC%84%9C%EC%9A%B8%20%EC%A2%85%EB%A1%9C%EA%B5%AC%20%EC%A2%85%EB%A1%9C40%EA%B0%80%EA%B8%B8%2013",
    rating: 4.1,
    reviewCount: 191,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjARuPMgqGjWQi3z3_bfSdVVBqdodw0PjCzhMzcBPgD0Wl9QPc65_01yoA76cCsIcBZQ-GeLFT-jdHIizaZlrdDx3WDMuyD1xzfCwuYb_bopl2Kr7bCTCOZl7sqGJYVBpkEnpVZPkTrW4ryfoA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "미국에서 오자마자 백반집으로 달려갔습니다🥹동대문시장 불꼬지백반 맛집 송정식당 먹방",
        videoUrl: "https://www.youtube.com/watch?v=sYxpwthA4qo",
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-230",
    name: "송주불냉면&수제왕돈까스 안양본점",
    category: "냉면",
    address: "경기 안양시 만안구 안양로257번길 14",
    phone: "031-468-9298",
    lat: 37.3954814249834,
    lng: 126.923025282115,
    kakaoUrl: "http://place.map.kakao.com/17174682",
    naverUrl: "https://map.naver.com/p/search/%EC%86%A1%EC%A3%BC%EB%B6%88%EB%83%89%EB%A9%B4%26%EC%88%98%EC%A0%9C%EC%99%95%EB%8F%88%EA%B9%8C%EC%8A%A4%20%EC%95%88%EC%96%91%EB%B3%B8%EC%A0%90%20%EA%B2%BD%EA%B8%B0%20%EC%95%88%EC%96%91%EC%8B%9C%20%EB%A7%8C%EC%95%88%EA%B5%AC%20%EC%95%88%EC%96%91%EB%A1%9C257%EB%B2%88%EA%B8%B8%2014",
    rating: 3.8,
    reviewCount: 216,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBcxLJ3hjpzMNV04Ig-3nfJgWnV7SGWWJiSRrk07p2yZNOhTjBbBOL8EAsSYo8RtrAVXofZ5frnT45I_Phwc-fDGj3EEif_M6hVJQx1ufze8wH37juf3fGzqEwFrJPnu0HWkqZdykJCfmIsjA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-231",
    name: "송화산시도삭면 본점",
    category: "중국요리",
    address: "서울 광진구 뚝섬로27길 48",
    phone: "02-6052-7826",
    lat: 37.53788986046639,
    lng: 127.06652466799225,
    kakaoUrl: "http://place.map.kakao.com/1467670437",
    naverUrl: "https://map.naver.com/p/search/%EC%86%A1%ED%99%94%EC%82%B0%EC%8B%9C%EB%8F%84%EC%82%AD%EB%A9%B4%20%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B4%91%EC%A7%84%EA%B5%AC%20%EB%9A%9D%EC%84%AC%EB%A1%9C27%EA%B8%B8%2048",
    rating: 4.4,
    reviewCount: 1348,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAi4mvs17bdjIwwoy13J4X1hgsw9zfUML6NeGCRkdHNPVjm9q9YsOXJOZayWFNDoyyFAwk28sIY2wh75Hm5z9Vn599Z_3P0S5mNXLUI7FHfR_umUNxyDfnv4RZHnP4w1NNTcz3pz0TwClhSiF8=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-232",
    name: "쇼미더크랩 압구정점",
    category: "해산물",
    address: "서울 강남구 압구정로28길 22-6",
    phone: "0507-1385-4728",
    lat: 37.5252419327341,
    lng: 127.02702621053,
    kakaoUrl: "http://place.map.kakao.com/1959091192",
    naverUrl: "https://map.naver.com/p/search/%EC%87%BC%EB%AF%B8%EB%8D%94%ED%81%AC%EB%9E%A9%20%EC%95%95%EA%B5%AC%EC%A0%95%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%95%95%EA%B5%AC%EC%A0%95%EB%A1%9C28%EA%B8%B8%2022-6",
    rating: 4.9,
    reviewCount: 256,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCPxUIxvC_XZQ4kAIcSHKadZPiOsYum0R4K9gjiWaYecChAww5ksWEyXjXWm564BTTNtmOSF4KtZcycbnCGxyo5X3Yxmf_7uJrLoUWHZuJ3aHkbCvEyOA56zmM7zNN6UPSOZdRYTxHAfNs9II6APWpE=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 양식 맛집."
      }
    ]
  },
  {
    id: "jjy-233",
    name: "수조개전골",
    category: "조개",
    address: "대전 유성구 신성로 80",
    phone: "042-933-0900",
    lat: 36.3902013245865,
    lng: 127.349337280977,
    kakaoUrl: "http://place.map.kakao.com/266293133",
    naverUrl: "https://map.naver.com/p/search/%EC%88%98%EC%A1%B0%EA%B0%9C%EC%A0%84%EA%B3%A8%20%EB%8C%80%EC%A0%84%20%EC%9C%A0%EC%84%B1%EA%B5%AC%20%EC%8B%A0%EC%84%B1%EB%A1%9C%2080",
    rating: 4.9,
    reviewCount: 24,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBFz3MnrSz5tztGnzkFjtaJSnCcDb1ms-5npkkhE3fejlz4ZzC_59qQjYW71bqiEi5p0HpyIFEfHcfVrVPEsvZQKvXUSCSGQYERc0hG7XfmyukgxRnqocCsLL69IbSbeR7wevctaQhmfiXF=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-234",
    name: "수변최고돼지국밥 민락본점",
    category: "국밥",
    address: "부산 수영구 광안해변로370번길 9-32",
    phone: "051-754-9222",
    lat: 35.1566734914386,
    lng: 129.134270167499,
    kakaoUrl: "http://place.map.kakao.com/14635779",
    naverUrl: "https://map.naver.com/p/search/%EC%88%98%EB%B3%80%EC%B5%9C%EA%B3%A0%EB%8F%BC%EC%A7%80%EA%B5%AD%EB%B0%A5%20%EB%AF%BC%EB%9D%BD%EB%B3%B8%EC%A0%90%20%EB%B6%80%EC%82%B0%20%EC%88%98%EC%98%81%EA%B5%AC%20%EA%B4%91%EC%95%88%ED%95%B4%EB%B3%80%EB%A1%9C370%EB%B2%88%EA%B8%B8%209-32",
    rating: 4.4,
    reviewCount: 2273,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDcgroKwfBRnLT3y1C_wmqNtunTlTIDp5gmdCrsN7NKqXtHmeuryMmxhVkuo11ERzy9uSKPX0608zL2dTxWfu3T8XjDihO3Z9KtXm500p5uDGlmHXxAP7gShLXhXnBNyNvgQD44ps-YRni0WUoDBPVB8w=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-235",
    name: "수정관",
    category: "중국요리",
    address: "전북특별자치도 전주시 완산구 문화광장로 18",
    phone: null,
    lat: 35.82241372994684,
    lng: 127.14610011530407,
    kakaoUrl: "http://place.map.kakao.com/21826841",
    naverUrl: "https://map.naver.com/p/search/%EC%88%98%EC%A0%95%EA%B4%80%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%84%EC%A3%BC%EC%8B%9C%20%EC%99%84%EC%82%B0%EA%B5%AC%20%EB%AC%B8%ED%99%94%EA%B4%91%EC%9E%A5%EB%A1%9C%2018",
    rating: 4.1,
    reviewCount: 192,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAG0ZrpeYW_z2lITy7U2LBH1QSFTcrZeHG57bpNkPAuDJ9CSpoU5UWpWOwicmrNQgclACeiaNJRrclAlHr3gKmcfLyYnA6fZmQ_5Fsn3ibKrz69osCHazMJxIMlZUehGQJRDQc-2_Fq3wtmiQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-236",
    name: "수정횟집",
    category: "회",
    address: "전남광주통합특별시 고흥군 도양읍 목넘가는길 2",
    phone: "061-842-2791",
    lat: 34.5275674649985,
    lng: 127.13449984702,
    kakaoUrl: "http://place.map.kakao.com/9850779",
    naverUrl: "https://map.naver.com/p/search/%EC%88%98%EC%A0%95%ED%9A%9F%EC%A7%91%20%EC%A0%84%EB%82%A8%EA%B4%91%EC%A3%BC%ED%86%B5%ED%95%A9%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EA%B3%A0%ED%9D%A5%EA%B5%B0%20%EB%8F%84%EC%96%91%EC%9D%8D%20%EB%AA%A9%EB%84%98%EA%B0%80%EB%8A%94%EA%B8%B8%202",
    rating: 4.3,
    reviewCount: 127,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDH8xjEYJCIjnM8LqJX3ND9Ckz0aXK_z6ksEz-etGu8TMOX9pnRNmEb5dBwg3GEpJeH7pkq82kwU3mQ09GewU51x-lWGXap10c04qw_Xi3hWd_foqDMYwaf3f2L-ac_aee015nu7m768HB07_Q=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 맛집."
      }
    ]
  },
  {
    id: "jjy-237",
    name: "수제돈까스",
    category: "돈까스,우동",
    address: "충북 제천시 남산로5길 13",
    phone: "043-645-3939",
    lat: 37.1335740824012,
    lng: 128.209405626877,
    kakaoUrl: "http://place.map.kakao.com/2048083640",
    naverUrl: "https://map.naver.com/p/search/%EC%88%98%EC%A0%9C%EB%8F%88%EA%B9%8C%EC%8A%A4%20%EC%B6%A9%EB%B6%81%20%EC%A0%9C%EC%B2%9C%EC%8B%9C%20%EB%82%A8%EC%82%B0%EB%A1%9C5%EA%B8%B8%2013",
    rating: 4.5,
    reviewCount: 178,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjB7bC1_qhJbCbiw7CyKsux-XmblZ4eOPgr8ZA9-aK2GwsEUFf3SaDJ42t1hvJvjcni7YJQJD1clvka0VlbyYxzUlXuynehCnxImyzkIQEACeX3z-naE0iwJIMtYf89ftvrSnKDYTQoMvEOsmA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "혼자 절대 못먹는다는 대왕돈까스 실제로 봤습니다😳웨이팅 극악 하루 3시간 여는 제천 수제돈까스 먹방",
        videoUrl: "https://www.youtube.com/watch?v=OzHPMTZXs8U",
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      }
    ]
  },
  {
    id: "jjy-238",
    name: "수제비먹는닭갈비 본점",
    category: "닭요리",
    address: "서울 성동구 왕십리로21다길 39",
    phone: "02-2299-8557",
    lat: 37.55964952323087,
    lng: 127.03323522268896,
    kakaoUrl: "http://place.map.kakao.com/413620947",
    naverUrl: "https://map.naver.com/p/search/%EC%88%98%EC%A0%9C%EB%B9%84%EB%A8%B9%EB%8A%94%EB%8B%AD%EA%B0%88%EB%B9%84%20%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%84%B1%EB%8F%99%EA%B5%AC%20%EC%99%95%EC%8B%AD%EB%A6%AC%EB%A1%9C21%EB%8B%A4%EA%B8%B8%2039",
    rating: 4.4,
    reviewCount: 5,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDfXUuvMTTU7x7myagjIwP5rNgdaJXgGfwDofkfPD7ftJG9VXpiMMQTJKnwLJsFt1ZhTyWYCs91HVExv9zxo8lrg1qt-V91vJ9csF3Yk-Zlkkkm1noERrlSFrnwTBaZrlPO0MK4B6dY5pv17hY=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-239",
    name: "숙성육관by해봉",
    category: "육류,고기",
    address: "서울 마포구 토정로37길 41",
    phone: "02-712-9929",
    lat: 37.5427133196459,
    lng: 126.946710075108,
    kakaoUrl: "http://place.map.kakao.com/2091412504",
    naverUrl: "https://map.naver.com/p/search/%EC%88%99%EC%84%B1%EC%9C%A1%EA%B4%80by%ED%95%B4%EB%B4%89%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%ED%86%A0%EC%A0%95%EB%A1%9C37%EA%B8%B8%2041",
    rating: 4.7,
    reviewCount: 55,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDjvsnJdzJz3Ye_8t6P5U8Ldbx8LNuiiOPjE__EaoX22wbS4RVwDzY3b9cdBP3nIngqph6j0h1bRncDpbWy0RCV5_6lYTHmmqXhxgOaskfl372kkO8siQiW9qHtVAsISPy_J9TAhpeMP41s=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-240",
    name: "오마카세오사이초밥 신림점",
    category: "초밥,롤",
    address: "서울 관악구 남부순환로180길 6",
    phone: "02-877-0542",
    lat: 37.483758587443056,
    lng: 126.93062888969713,
    kakaoUrl: "http://place.map.kakao.com/1917598552",
    naverUrl: "https://map.naver.com/p/search/%EC%98%A4%EB%A7%88%EC%B9%B4%EC%84%B8%EC%98%A4%EC%82%AC%EC%9D%B4%EC%B4%88%EB%B0%A5%20%EC%8B%A0%EB%A6%BC%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B4%80%EC%95%85%EA%B5%AC%20%EB%82%A8%EB%B6%80%EC%88%9C%ED%99%98%EB%A1%9C180%EA%B8%B8%206",
    rating: 4.6,
    reviewCount: 7,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAh2SVZRtnN2cDFx89mJ6mUWr8svPzAcg8psfxIfXG1gCMZ1PtZsszly-mRsfpozX2EMgHH_SGmo0wOKhEJKBAIZYlcAN4EH2GuBkygxcW89ZlLPPzppU-HWdDw_yYY438fZutx1lQoW8CH6MckRlHJYw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      }
    ]
  },
  {
    id: "jjy-241",
    name: "스시로로",
    category: "초밥,롤",
    address: "서울 동작구 동작대로23길 29",
    phone: "02-585-1015",
    lat: 37.4840944339155,
    lng: 126.98011175350098,
    kakaoUrl: "http://place.map.kakao.com/21656813",
    naverUrl: "https://map.naver.com/p/search/%EC%8A%A4%EC%8B%9C%EB%A1%9C%EB%A1%9C%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EC%9E%91%EA%B5%AC%20%EB%8F%99%EC%9E%91%EB%8C%80%EB%A1%9C23%EA%B8%B8%2029",
    rating: 4.2,
    reviewCount: 1030,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBc70bl03b16nq-Bb9gerXLiQf7GPhu0BXhN3O8QSUqrFJjrmLPpcaLBf5iwq9Z99vYfSmAE0T2hJcnJq8DapQGzRMU0gC3xwIpvhFpKeWlKMCqezIPSyB25oKB-LtQTzOS-P617Pg0p0mAXw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      }
    ]
  },
  {
    id: "jjy-242",
    name: "스시선",
    category: "초밥,롤",
    address: "서울 도봉구 도봉로 684",
    phone: "02-954-6777",
    lat: 37.6653483637625,
    lng: 127.043590568881,
    kakaoUrl: "http://place.map.kakao.com/51661598",
    naverUrl: "https://map.naver.com/p/search/%EC%8A%A4%EC%8B%9C%EC%84%A0%20%EC%84%9C%EC%9A%B8%20%EB%8F%84%EB%B4%89%EA%B5%AC%20%EB%8F%84%EB%B4%89%EB%A1%9C%20684",
    rating: 3.2,
    reviewCount: 6,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBXkdq0_NcYbZ7YNPXl7QtRJqJIiyXClA2uYs24MaUIKRNxknjZQZQeYefSqcex8zUWVNgtc9FmS-ELDS-RKoKFwzZ0t79jVVn4sfXOb_tPt9b_BFCdh7jruWaMrxPkrdqgGe-0SdKaV1xsXg=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      }
    ]
  },
  {
    id: "jjy-243",
    name: "스시정",
    category: "초밥,롤",
    address: "경기 수원시 팔달구 인계로 126",
    phone: "031-225-5664",
    lat: 37.26722423136152,
    lng: 127.03130693132911,
    kakaoUrl: "http://place.map.kakao.com/24637464",
    naverUrl: "https://map.naver.com/p/search/%EC%8A%A4%EC%8B%9C%EC%A0%95%20%EA%B2%BD%EA%B8%B0%20%EC%88%98%EC%9B%90%EC%8B%9C%20%ED%8C%94%EB%8B%AC%EA%B5%AC%20%EC%9D%B8%EA%B3%84%EB%A1%9C%20126",
    rating: 4.5,
    reviewCount: 222,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD7W15c9gTNpGnMOiMb9MAEIhEZ7eRyOlE6mGVi7z4O4QCfsu5xCHY5k7ibJvR95FqvF4RHGPn2oWqjCECFbdhwG6xuTf2GilULIP-qe1iHqldvbOUxcBzfWfrTkVEZJIr0yLVGlMyO0qdpwg=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      }
    ]
  },
  {
    id: "jjy-244",
    name: "승우네식당",
    category: "한식",
    address: "서울 종로구 종로 190-4",
    phone: "02-2268-8589",
    lat: 37.5704787630365,
    lng: 126.998813704879,
    kakaoUrl: "http://place.map.kakao.com/21409927",
    naverUrl: "https://map.naver.com/p/search/%EC%8A%B9%EC%9A%B0%EB%84%A4%EC%8B%9D%EB%8B%B9%20%EC%84%9C%EC%9A%B8%20%EC%A2%85%EB%A1%9C%EA%B5%AC%20%EC%A2%85%EB%A1%9C%20190-4",
    rating: 4,
    reviewCount: 88,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD34g3hHtHAcrvImK2Yb0QcZFXWSD5brQ8K3P-npFK8HFNY-_EAgY5PaTEBr74SY7hGsCBrG51RRZJda-BEIzBo5v6O8OFb_PeURFLqHG1kzglAA27bWMi9xZETBF2h-4L1nKYo_Yc9lOtOquXwE5DSrQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "이거 먹으려고 아침7시에 찾아갔습니다🥺 종로 숨은 골목맛집 승우네식당 백반먹방",
        videoUrl: "https://www.youtube.com/watch?v=HyWn4MjoxXU",
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      },
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "광장시장의 백반집으로, 누룽지밥과 청국장이 대표 메뉴로 소개됐다."
      }
    ]
  },
  {
    id: "jjy-245",
    name: "신가원설렁탕&제주본가",
    category: "설렁탕",
    address: "서울 중구 을지로3길 21",
    phone: "02-778-8898",
    lat: 37.56701749691807,
    lng: 126.9815034814155,
    kakaoUrl: "http://place.map.kakao.com/27300574",
    naverUrl: "https://map.naver.com/p/search/%EC%8B%A0%EA%B0%80%EC%9B%90%EC%84%A4%EB%A0%81%ED%83%95%26%EC%A0%9C%EC%A3%BC%EB%B3%B8%EA%B0%80%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EC%9D%84%EC%A7%80%EB%A1%9C3%EA%B8%B8%2021",
    rating: 3.7,
    reviewCount: 207,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDukV9GZiyle81nQH48-zq8Ok9PB89SIXYvjoNje16KwXQiY-ecFExELjnyNHfhNPmMTgT_jL1LdiybFsGA5qKi4m7q2iV-ZrdHnT3VzhpFx5M532NVJb72qV6DUHoRswmWQz8l4JTq2m3xmgIluuCr7g=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-246",
    name: "신길동별난아찌짬뽕",
    category: "중국요리",
    address: "서울 영등포구 영등포로62길 10",
    phone: "010-5395-1151",
    lat: 37.515295475412124,
    lng: 126.91651152539325,
    kakaoUrl: "http://place.map.kakao.com/11962368",
    naverUrl: "https://map.naver.com/p/search/%EC%8B%A0%EA%B8%B8%EB%8F%99%EB%B3%84%EB%82%9C%EC%95%84%EC%B0%8C%EC%A7%AC%EB%BD%95%20%EC%84%9C%EC%9A%B8%20%EC%98%81%EB%93%B1%ED%8F%AC%EA%B5%AC%20%EC%98%81%EB%93%B1%ED%8F%AC%EB%A1%9C62%EA%B8%B8%2010",
    rating: 4,
    reviewCount: 22,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCkH-fJWbTIJ8bce0lhIbAT7pRiQWA1GsXIhUoDPNjzeDb3FlsDl1GY3vc6ShARs9tEv7Y71iNiSE2SpUwN8trZJa4l66A7uHnGPz9vzcbvVnVE9z3BRc413-jOiOXHyKEOppeMi75rjLVX=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-248",
    name: "신사한우곱창전문점",
    category: "곱창,막창",
    address: "서울 은평구 갈현로 30",
    phone: "010-3239-2834",
    lat: 37.6005920117778,
    lng: 126.910434878143,
    kakaoUrl: "http://place.map.kakao.com/27134327",
    naverUrl: "https://map.naver.com/p/search/%EC%8B%A0%EC%82%AC%ED%95%9C%EC%9A%B0%EA%B3%B1%EC%B0%BD%EC%A0%84%EB%AC%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%9D%80%ED%8F%89%EA%B5%AC%20%EA%B0%88%ED%98%84%EB%A1%9C%2030",
    rating: 4.4,
    reviewCount: 20,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCjZWY19vCEpEHepgSXTf8UYGBkclxiZ5w8dIkpsuZHIgfEGh2S3MvoKTJFNkRJg9im4yYLLNNBnHdf9d1Ee07TZmFZWW9Vvb-XEqm11m6LWyGEVUekwKk-Qj92vWcoZEy1Hz_Xw_Kwro6j=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-249",
    name: "신신옥",
    category: "분식",
    address: "인천 제물포구 우현로49번길 7",
    phone: "032-766-0303",
    lat: 37.4715936054944,
    lng: 126.627941022951,
    kakaoUrl: "http://place.map.kakao.com/10523660",
    naverUrl: "https://map.naver.com/p/search/%EC%8B%A0%EC%8B%A0%EC%98%A5%20%EC%9D%B8%EC%B2%9C%20%EC%A0%9C%EB%AC%BC%ED%8F%AC%EA%B5%AC%20%EC%9A%B0%ED%98%84%EB%A1%9C49%EB%B2%88%EA%B8%B8%207",
    rating: 3.9,
    reviewCount: 75,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDxW3yB-ya9ULXzS8347d_mf5JYzsfJrGAZpiV9JdoFDy8ppR4nM3whbT9dtPh9Ok0cNRrs5RCvtbdl1tVIf8Kf-oKYYbhHrebbrwMlBfEEYXJK7wVjadvASszWMtVeuq3CURMZei452HtOYg=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "사장님이 퇴근해도 되겠대요🤣 인천 1958년 개업한 신신옥 먹방",
        videoUrl: "https://www.youtube.com/watch?v=4AlE083qq4g",
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-250",
    name: "큰집설농탕",
    category: "설렁탕",
    address: "서울 양천구 화곡로4길 9",
    phone: "02-2605-1999",
    lat: 37.538598155408465,
    lng: 126.8275966297638,
    kakaoUrl: "http://place.map.kakao.com/20623675",
    naverUrl: "https://map.naver.com/p/search/%ED%81%B0%EC%A7%91%EC%84%A4%EB%86%8D%ED%83%95%20%EC%84%9C%EC%9A%B8%20%EC%96%91%EC%B2%9C%EA%B5%AC%20%ED%99%94%EA%B3%A1%EB%A1%9C4%EA%B8%B8%209",
    rating: 4.8,
    reviewCount: 30,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCm_EkO2rn_wDVWTSE4-Rysqdb7fpZXW40jfQszL02yo8NkvyqRRjgploJf-IXA6tOv7ts7ve0hDIRl7WKV3YokwT6RX4IPpVqnCrE_G_I7Ll236lNwdG5K9NX4QmH_IphYQ0y1_SGk97YN=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 찜·탕 맛집."
      }
    ]
  },
  {
    id: "jjy-251",
    name: "신전떡볶이 방배점",
    category: "신전떡볶이",
    address: "서울 서초구 서초대로1길 19-5",
    phone: "02-533-3866",
    lat: 37.4879782105425,
    lng: 126.982862884098,
    kakaoUrl: "http://place.map.kakao.com/27305864",
    naverUrl: "https://map.naver.com/p/search/%EC%8B%A0%EC%A0%84%EB%96%A1%EB%B3%B6%EC%9D%B4%20%EB%B0%A9%EB%B0%B0%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EC%84%9C%EC%B4%88%EB%8C%80%EB%A1%9C1%EA%B8%B8%2019-5",
    rating: 4.2,
    reviewCount: 102,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAjF7xa3QOI6MvTOqV03Is6HcxLVaIrX5zvljs_BzcJe-GzsmN45O7AcHuTOn94hAdfG3-t8iScmgckF_mOwbOeNlYKzAwuTMI87wk7uzrdpEx30obw7ia4NVGhK3mUtADUUCsqYFq8UKO3=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-252",
    name: "신전떡볶이 본점",
    category: "신전떡볶이",
    address: "대구 북구 칠성로17길 11-1",
    phone: "053-425-6339",
    lat: 35.87971148869417,
    lng: 128.59807231071653,
    kakaoUrl: "http://place.map.kakao.com/14533981",
    naverUrl: "https://map.naver.com/p/search/%EC%8B%A0%EC%A0%84%EB%96%A1%EB%B3%B6%EC%9D%B4%20%EB%B3%B8%EC%A0%90%20%EB%8C%80%EA%B5%AC%20%EB%B6%81%EA%B5%AC%20%EC%B9%A0%EC%84%B1%EB%A1%9C17%EA%B8%B8%2011-1",
    rating: 4.4,
    reviewCount: 279,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBSpZnyhDoRvlZ953pOadVkT03EiiTBwIFph5EWNo2fvBytjJ_VKv_KR33Fv6YHI1Z2h_V612ebpFbUSPYMfXeK4FzxWnr_Rh7tTHQa5kmV8j15wA8r8-BqP2GNztUYmSlb8SA7jQfLD4dX9Kw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-253",
    name: "신정식당",
    category: "냉면",
    address: "충남 아산시 시민로409번길 18",
    phone: "041-545-7500",
    lat: 36.78589935366905,
    lng: 126.99988796851129,
    kakaoUrl: "http://place.map.kakao.com/1756080110",
    naverUrl: "https://map.naver.com/p/search/%EC%8B%A0%EC%A0%95%EC%8B%9D%EB%8B%B9%20%EC%B6%A9%EB%82%A8%20%EC%95%84%EC%82%B0%EC%8B%9C%20%EC%8B%9C%EB%AF%BC%EB%A1%9C409%EB%B2%88%EA%B8%B8%2018",
    rating: 4,
    reviewCount: 112,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD-uHRZgCPhY5Dfr8_B8IPU4ehFh-uQo47pRAQEDw7LibIqJ9O1PCl3m8DfKciMLTsooS8Rq1vJhE5srBx_p9C2UiSZVVOj6M3Z7A0r0nSgh7KCPZIb1jr1nPRlBxWabxfiFijBEsmJbLgVUrInxT6Dzg=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-254",
    name: "신짬뽕",
    category: "중국요리",
    address: "인천 남동구 논현고잔로 148",
    phone: "032-721-9854",
    lat: 37.3957126433608,
    lng: 126.714624907219,
    kakaoUrl: "http://place.map.kakao.com/885020597",
    naverUrl: "https://map.naver.com/p/search/%EC%8B%A0%EC%A7%AC%EB%BD%95%20%EC%9D%B8%EC%B2%9C%20%EB%82%A8%EB%8F%99%EA%B5%AC%20%EB%85%BC%ED%98%84%EA%B3%A0%EC%9E%94%EB%A1%9C%20148",
    rating: 4.3,
    reviewCount: 6,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCuLyZnRCMYKN2eJqbLpDXu_bc6FubV_QecMTBbR5wC-W3PTiLaNGaCR9P3ppUuC73X6OugxJ156dVae05QKBDWjL63vYrhspIHxVnhsedOsYrsob76H-bAlyVfcaPMVKNIfa44uWuvwTeNY9AEm07i=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-255",
    name: "안동반점",
    category: "중국요리",
    address: "서울 성북구 고려대로1길 35-1",
    phone: "02-923-4448",
    lat: 37.5870519336752,
    lng: 127.01895775627726,
    kakaoUrl: "http://place.map.kakao.com/7988170",
    naverUrl: "https://map.naver.com/p/search/%EC%95%88%EB%8F%99%EB%B0%98%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%84%B1%EB%B6%81%EA%B5%AC%20%EA%B3%A0%EB%A0%A4%EB%8C%80%EB%A1%9C1%EA%B8%B8%2035-1",
    rating: 4.3,
    reviewCount: 598,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD8sujDR2tHcb55Tat2pVTPf_fPOiVJsK-0LLuyTkbGeLWyoiJvxRDUBtPyV8jL-Bi1ZYjSD5p-2YMENB-k12vAHM-nbu3V7RTOMFPQ3OiFw9LF6I97AE5SkmDRDXJr-mDGR-UhHrcoXr5Ykw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-256",
    name: "안동집",
    category: "국수",
    address: "서울 동대문구 고산자로36길 3",
    phone: "02-965-3948",
    lat: 37.579393796655545,
    lng: 127.03953845008229,
    kakaoUrl: "http://place.map.kakao.com/15629433",
    naverUrl: "https://map.naver.com/p/search/%EC%95%88%EB%8F%99%EC%A7%91%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EA%B3%A0%EC%82%B0%EC%9E%90%EB%A1%9C36%EA%B8%B8%203",
    rating: 4,
    reviewCount: 564,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBaVoFG30KTW1R4TakxorPn9t-x52NPXFfore-ulCnVH-EWVLnm4OFtySsBBOGs3oxUP1XO4VFbGHbqlkCZ4A5Fc8gsBhRVKDk6XOkEQZ2BeWxsTfkELM1zjj4GVkEDsB5aZi3eCWh3KbkzXA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      },
      {
        name: "성시경의 먹을텐데",
        videoTitle: "[sub] 성시경의 먹을텐데 l 경동시장 안동집, 김제식당",
        videoUrl: "https://www.youtube.com/watch?v=6T7fWf5EA0s",
        recommendNote: null
      }
    ]
  },
  {
    id: "jjy-257",
    name: "압구정곱창 본점",
    category: "곱창,막창",
    address: "서울 강남구 압구정로42길 25-8",
    phone: "02-511-0042",
    lat: 37.5270092181593,
    lng: 127.03563154465,
    kakaoUrl: "http://place.map.kakao.com/27402317",
    naverUrl: "https://map.naver.com/p/search/%EC%95%95%EA%B5%AC%EC%A0%95%EA%B3%B1%EC%B0%BD%20%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%95%95%EA%B5%AC%EC%A0%95%EB%A1%9C42%EA%B8%B8%2025-8",
    rating: 4.9,
    reviewCount: 287,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD9exyjjrciKXSWetcZKtiv59KOF2eXiTEXQFzWksz8pbeFer2zRFiYqiLuT0XNSwxeK9H4WNigesPcrAVHJgrvniyUalkIqio0J0ruu7FBhrYVEpbJ72D9BlaAjBO3ZJ8nH_jOl5CPBLuQIFo=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-258",
    name: "야마타니우동",
    category: "돈까스,우동",
    address: "서울 성동구 왕십리로21길 11",
    phone: "02-2292-4677",
    lat: 37.56127134438736,
    lng: 127.03313973825685,
    kakaoUrl: "http://place.map.kakao.com/204368427",
    naverUrl: "https://map.naver.com/p/search/%EC%95%BC%EB%A7%88%ED%83%80%EB%8B%88%EC%9A%B0%EB%8F%99%20%EC%84%9C%EC%9A%B8%20%EC%84%B1%EB%8F%99%EA%B5%AC%20%EC%99%95%EC%8B%AD%EB%A6%AC%EB%A1%9C21%EA%B8%B8%2011",
    rating: 4.5,
    reviewCount: 279,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBD6lp0Ok1UiIXl2v7d1vyaLS2vxSNTPawhNGqcUOtjr4tX9vPP1C85czzA5Z4y0qQtbAE_LMV0YefAT1MWT4atcmvjof5L7jtxvniQ-equbk79_5DfTQPLppiaG-eaGqRmI9dO01kmuwoVdeYTyhNmdw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 아시안 맛집."
      }
    ]
  },
  {
    id: "jjy-259",
    name: "야키토리잔잔 광교점",
    category: "야키토리잔잔",
    address: "경기 수원시 영통구 법조로 38",
    phone: "070-4248-3470",
    lat: 37.286748768470865,
    lng: 127.06317132843118,
    kakaoUrl: "http://place.map.kakao.com/1701611733",
    naverUrl: "https://map.naver.com/p/search/%EC%95%BC%ED%82%A4%ED%86%A0%EB%A6%AC%EC%9E%94%EC%9E%94%20%EA%B4%91%EA%B5%90%EC%A0%90%20%EA%B2%BD%EA%B8%B0%20%EC%88%98%EC%9B%90%EC%8B%9C%20%EC%98%81%ED%86%B5%EA%B5%AC%20%EB%B2%95%EC%A1%B0%EB%A1%9C%2038",
    rating: 4.9,
    reviewCount: 498,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBp7dPVddmZ5AOlEDbAM2HuzlhUtZXjG2TYhae-ACsklFU1DdJl7M9k667FVFb2L-Zk2zQYZ1zyDiG5L2UEfae02mSjuUmK1VaQJxA_QR2bIAUuWm2F17VPCvKJhaVPdLDmvJOyEf6-Jfx-FIXfAex_ig=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "꼬치 몇개 먹었을까?🤔 종류만 xx개 전메뉴와 술먹방",
        videoUrl: "https://www.youtube.com/watch?v=MN5cxevTa_M",
        recommendNote: "쯔양이 방문해 리뷰한 야식 맛집."
      }
    ]
  },
  {
    id: "jjy-260",
    name: "양미옥 남대문점",
    category: "육류,고기",
    address: "서울 중구 남대문로 27-2",
    phone: "02-3789-9288",
    lat: 37.56142095077293,
    lng: 126.97877943305056,
    kakaoUrl: "http://place.map.kakao.com/207440691",
    naverUrl: "https://map.naver.com/p/search/%EC%96%91%EB%AF%B8%EC%98%A5%20%EB%82%A8%EB%8C%80%EB%AC%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EB%82%A8%EB%8C%80%EB%AC%B8%EB%A1%9C%2027-2",
    rating: 4.2,
    reviewCount: 559,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDfcqendT7leTcwXUWSJmsX9R-e9RAyfV79kFd9xYAcjVB7LfR44OtW8yrZ2juzvfq8hHYcEcn6_61KF3vAixt93SghCJYRGeAJgXoPtg8mF-lKRxHptl4I9tbD9fbZQ5rf_SlFJ75UniDRlw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-261",
    name: "양포항 송파거여점",
    category: "아구",
    address: "서울 송파구 오금로 521",
    phone: "02-449-1112",
    lat: 37.4930943609571,
    lng: 127.146725885009,
    kakaoUrl: "http://place.map.kakao.com/2002885918",
    naverUrl: "https://map.naver.com/p/search/%EC%96%91%ED%8F%AC%ED%95%AD%20%EC%86%A1%ED%8C%8C%EA%B1%B0%EC%97%AC%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%86%A1%ED%8C%8C%EA%B5%AC%20%EC%98%A4%EA%B8%88%EB%A1%9C%20521",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-262",
    name: "어랑추생고등어묵은지전문점",
    category: "해물,생선",
    address: "경기 구리시 동구릉로 145",
    phone: "031-568-6866",
    lat: 37.611678475898294,
    lng: 127.13754110739143,
    kakaoUrl: "http://place.map.kakao.com/10579219",
    naverUrl: "https://map.naver.com/p/search/%EC%96%B4%EB%9E%91%EC%B6%94%EC%83%9D%EA%B3%A0%EB%93%B1%EC%96%B4%EB%AC%B5%EC%9D%80%EC%A7%80%EC%A0%84%EB%AC%B8%EC%A0%90%20%EA%B2%BD%EA%B8%B0%20%EA%B5%AC%EB%A6%AC%EC%8B%9C%20%EB%8F%99%EA%B5%AC%EB%A6%89%EB%A1%9C%20145",
    rating: 4.2,
    reviewCount: 602,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDEk5yreeQOQwtnjeA17e79JP55wweO8thj2u2-ay7QXurOzPCKFx-nq7eaL9v1J-0KQ4XGX3r5xxepSB3a1uJflsj6IFpczEW4ugwEd0ZfmbOQLwdKsZfJBYCE14Wrh-RHZw8lSbxQKPiM_JQZJhCuyg=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-263",
    name: "명동얼큰수제비 본점",
    category: "수제비",
    address: "서울 중구 남대문로 64",
    phone: "02-752-7649",
    lat: 37.56275856955274,
    lng: 126.98203197377124,
    kakaoUrl: "http://place.map.kakao.com/7876866",
    naverUrl: "https://map.naver.com/p/search/%EB%AA%85%EB%8F%99%EC%96%BC%ED%81%B0%EC%88%98%EC%A0%9C%EB%B9%84%20%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EB%82%A8%EB%8C%80%EB%AC%B8%EB%A1%9C%2064",
    rating: 4.1,
    reviewCount: 109,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCf8VPtKd_Ucm1cOSbrmPV4gFgoZvLPnfo0-FjmDF8IjEV-0iexZLBf-Gu9qBdk7TjKn57Kivm5oWtBodYQwUY1dcW4F_UutV26kYsEoMiGDv7VZX6Jf9DX-Fqd7MIRZb2XfAWcfXoPhiPSwWA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-265",
    name: "에이스분식",
    category: "분식",
    address: "대전 동구 대전로785번길 50",
    phone: "010-3415-9687",
    lat: 36.3289719066255,
    lng: 127.430802633342,
    kakaoUrl: "http://place.map.kakao.com/840444376",
    naverUrl: "https://map.naver.com/p/search/%EC%97%90%EC%9D%B4%EC%8A%A4%EB%B6%84%EC%8B%9D%20%EB%8C%80%EC%A0%84%20%EB%8F%99%EA%B5%AC%20%EB%8C%80%EC%A0%84%EB%A1%9C785%EB%B2%88%EA%B8%B8%2050",
    rating: 3.7,
    reviewCount: 24,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDujvncopvyURX7_ffyg9jaJP-jAPcq5gmoE2lH8ONZvIcSNTon8I1diMRQ0p5lGb_xWCY3YP3LJKcEka8IalsrzGArEH5VUQFea2FXY76qGxhJY5JpuEs1RSti7D0QLNzUzC7qjMTLCmUlR6RTzUQ3Ug=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-266",
    name: "연소바 서울대점",
    category: "일식",
    address: "서울 관악구 남부순환로 1802",
    phone: "02-871-2221",
    lat: 37.48133751642271,
    lng: 126.95015345249314,
    kakaoUrl: "http://place.map.kakao.com/1067831271",
    naverUrl: "https://map.naver.com/p/search/%EC%97%B0%EC%86%8C%EB%B0%94%20%EC%84%9C%EC%9A%B8%EB%8C%80%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B4%80%EC%95%85%EA%B5%AC%20%EB%82%A8%EB%B6%80%EC%88%9C%ED%99%98%EB%A1%9C%201802",
    rating: 3.7,
    reviewCount: 342,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBBhwOw5dGPu0NiT9365TVb8Yy46Zm8N0NagirhHd-I6T10p3bqpPeieX-Gjd96HMsOZvkS3OzTLtHya9IDh9EjH6OEINBrTKBz13lJaLTjhyRqLd5GnnNXUu2w0gb377sLlEJuvL4kTR7QNedn7JWlvw=s4800-w516",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      }
    ]
  },
  {
    id: "jjy-267",
    name: "연호정칼국수",
    category: "칼국수",
    address: "경기 김포시 월곶면 군하로 242",
    phone: "031-987-7132",
    lat: 37.71507748127975,
    lng: 126.5559127856342,
    kakaoUrl: "http://place.map.kakao.com/11949640",
    naverUrl: "https://map.naver.com/p/search/%EC%97%B0%ED%98%B8%EC%A0%95%EC%B9%BC%EA%B5%AD%EC%88%98%20%EA%B2%BD%EA%B8%B0%20%EA%B9%80%ED%8F%AC%EC%8B%9C%20%EC%9B%94%EA%B3%B6%EB%A9%B4%20%EA%B5%B0%ED%95%98%EB%A1%9C%20242",
    rating: 4.3,
    reviewCount: 333,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBGFR5Thgce1aCptOdIK2oTFczYnbWghAAmT7Erk1sXbp_FQwVjBnTKoYnPnLChsJ5_iG-G-N5PXLMPgLtK2IkOEYmPyfl-xKdhA-QTfAk6VZ7zXVdfIF44M621KHfZtVmIKDxa6btpXBedzdiWtoxyrQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-268",
    name: "연흥식당",
    category: "한식",
    address: "강원특별자치도 원주시 평원로 1-1",
    phone: "033-743-0589",
    lat: 37.34728815038615,
    lng: 127.95372449352888,
    kakaoUrl: "http://place.map.kakao.com/10653477",
    naverUrl: "https://map.naver.com/p/search/%EC%97%B0%ED%9D%A5%EC%8B%9D%EB%8B%B9%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%9B%90%EC%A3%BC%EC%8B%9C%20%ED%8F%89%EC%9B%90%EB%A1%9C%201-1",
    rating: 4.1,
    reviewCount: 50,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBQ2fcd34lYJX4t3DjloCcjwKoRpeIB0eLrOSpqbQ3rBIsCtND7adignhv6LNZAUCfAkR2_FjX7rsVpziTc_7YprTy6ryFsGQY9ZniD9Ba6mvvHFHaQpjOWHLcQD-p6AGHMiLAfjSCpLtRslA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-269",
    name: "영동장어",
    category: "장어",
    address: "서울 강남구 언주로148길 8",
    phone: "02-3448-9991",
    lat: 37.5203166598331,
    lng: 127.035338774027,
    kakaoUrl: "http://place.map.kakao.com/1257441291",
    naverUrl: "https://map.naver.com/p/search/%EC%98%81%EB%8F%99%EC%9E%A5%EC%96%B4%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%96%B8%EC%A3%BC%EB%A1%9C148%EA%B8%B8%208",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      },
      {
        name: "성시경의 먹을텐데",
        videoTitle: "[sub] 성시경의 먹을텐데 l 논현동 영동장어",
        videoUrl: "https://www.youtube.com/watch?v=B5rp9kCcqmw",
        recommendNote: null
      }
    ]
  },
  {
    id: "jjy-270",
    name: "영생덕",
    category: "중국요리",
    address: "대구 중구 종로 39",
    phone: "053-255-5777",
    lat: 35.869384767619,
    lng: 128.591393678021,
    kakaoUrl: "http://place.map.kakao.com/9252005",
    naverUrl: "https://map.naver.com/p/search/%EC%98%81%EC%83%9D%EB%8D%95%20%EB%8C%80%EA%B5%AC%20%EC%A4%91%EA%B5%AC%20%EC%A2%85%EB%A1%9C%2039",
    rating: 3.8,
    reviewCount: 1052,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCOwd6WW2-TRm-57w8sf8vvqbNrXFUZ038_6YusFaFEzCJ1cM6cWZTtbJ8wgeQGtrDHfEqBB7o7E-6UPUFLzEwXCG1GJTVnzticfuCdRwRmy-jIQnEH76E_uOad1rZcAehPgy26d5udFC-XFz8=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-271",
    name: "영식품",
    category: "한식",
    address: "서울 성동구 성수이로 126",
    phone: "02-469-2900",
    lat: 37.5461735750961,
    lng: 127.058132212264,
    kakaoUrl: "http://place.map.kakao.com/16060241",
    naverUrl: "https://map.naver.com/p/search/%EC%98%81%EC%8B%9D%ED%92%88%20%EC%84%9C%EC%9A%B8%20%EC%84%B1%EB%8F%99%EA%B5%AC%20%EC%84%B1%EC%88%98%EC%9D%B4%EB%A1%9C%20126",
    rating: 4.7,
    reviewCount: 3,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCx56S6OGYGCOk3bcSR7YEWwn7cPNxashnqEcARejXjORwpCRVT8JcdRBtjFm0FBl65TvGFQsAOseYwVPzrKJap47oWPe5BnAX2xm89WSVKEs7_VAL6jgtzCoNyklKUg97ov37-elWuXV-2=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "슈퍼에서 먹는 라면이 최고죠👍사장님 손님들 다 놀란 성수동 영식품 가맥집 먹방",
        videoUrl: "https://www.youtube.com/watch?v=YwHVzstKtD8",
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-272",
    name: "영주랜떡",
    category: "떡볶이",
    address: "경북 영주시 중앙로83번길 26-2",
    phone: null,
    lat: 36.8237256673362,
    lng: 128.623692038873,
    kakaoUrl: "http://place.map.kakao.com/2015360199",
    naverUrl: "https://map.naver.com/p/search/%EC%98%81%EC%A3%BC%EB%9E%9C%EB%96%A1%20%EA%B2%BD%EB%B6%81%20%EC%98%81%EC%A3%BC%EC%8B%9C%20%EC%A4%91%EC%95%99%EB%A1%9C83%EB%B2%88%EA%B8%B8%2026-2",
    rating: 4.2,
    reviewCount: 541,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDVi06npSQQXp8_b9YrTwnHh3msFXEF8Ak76wwiHr7wSpVAk_JtUVAQwmkQp_sFy7X42C2fHZen59Ke4g7-ciWNS1msIQb3pF-hGVjLyBPDD3shOPbt6nRJ9PESLVTQvKfnuZ6nHTCcE3ntoGw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "레전드 영주 랜떡 40년만에 서울상륙?🔥가래떡 떡볶이 순대 튀김먹방",
        videoUrl: "https://www.youtube.com/watch?v=mtGRwDtU35E",
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-273",
    name: "옛날중국집",
    category: "중국요리",
    address: "서울 성북구 성북로8길 8",
    phone: "02-764-0094",
    lat: 37.590813216797244,
    lng: 127.00437395474002,
    kakaoUrl: "http://place.map.kakao.com/20944335",
    naverUrl: "https://map.naver.com/p/search/%EC%98%9B%EB%82%A0%EC%A4%91%EA%B5%AD%EC%A7%91%20%EC%84%9C%EC%9A%B8%20%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%84%B1%EB%B6%81%EB%A1%9C8%EA%B8%B8%208",
    rating: 3.9,
    reviewCount: 412,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjA8VoYKJZAWdFRjsZIFAyg2_XbIDRGHySbVelcAqsIwfVDVhKkiogmXJrztE4GehZDsKudNWzx7l8p3TaGE-UmS46ifrprHgQmh1t3VfpDxw9AuLEknR0DwcPZPQ9WVubEWLx8UcCPcpRAW1vNB5Y3r=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-274",
    name: "옛날국수집",
    category: "국수",
    address: "제주특별자치도 제주시 한경면 고산로 73",
    phone: "064-773-7778",
    lat: 33.3073365726608,
    lng: 126.17802531342,
    kakaoUrl: "http://place.map.kakao.com/1994421978",
    naverUrl: "https://map.naver.com/p/search/%EC%98%9B%EB%82%A0%EA%B5%AD%EC%88%98%EC%A7%91%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%ED%95%9C%EA%B2%BD%EB%A9%B4%20%EA%B3%A0%EC%82%B0%EB%A1%9C%2073",
    rating: 4.3,
    reviewCount: 164,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBAStfq53IS04Gln6qH6IL7oR4zaU1l1zWG9aAwnpEsIjan5e4-qhhXuOi_V1zhWlU_YJzcMyNwMS6GPsVVvHJkg8Ptc3OVELEJjJjk5W9meGT2KLJqelAumhAkC4ynhW66ip9rrZpRj2OaG3G0IEPcgQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-275",
    name: "옛날맛짜장",
    category: "중국요리",
    address: "서울 송파구 가락로 113",
    phone: "02-425-3533",
    lat: 37.5016572215739,
    lng: 127.10865889266,
    kakaoUrl: "http://place.map.kakao.com/16268657",
    naverUrl: "https://map.naver.com/p/search/%EC%98%9B%EB%82%A0%EB%A7%9B%EC%A7%9C%EC%9E%A5%20%EC%84%9C%EC%9A%B8%20%EC%86%A1%ED%8C%8C%EA%B5%AC%20%EA%B0%80%EB%9D%BD%EB%A1%9C%20113",
    rating: 3.9,
    reviewCount: 38,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDUDY7B1AQ69hLx7RbuxHYC5lIH1skV0JT-q05TvAgNneADSmQYmPoa6GUdyRm60GxAeHDd-aPjPhHbvJBGq3h-BTcPzCGUwq9dxeLbrCG1hZYtqwpCaVjm4D9j5OTkAlrDwch7qbL039wI0w=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-276",
    name: "옛날왕솥뚜껑생삼겹살",
    category: "삼겹살",
    address: "서울 서대문구 통일로39길 22-58",
    phone: "02-394-2188",
    lat: 37.5899510831576,
    lng: 126.941734117361,
    kakaoUrl: "http://place.map.kakao.com/698283938",
    naverUrl: "https://map.naver.com/p/search/%EC%98%9B%EB%82%A0%EC%99%95%EC%86%A5%EB%9A%9C%EA%BB%91%EC%83%9D%EC%82%BC%EA%B2%B9%EC%82%B4%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EB%8C%80%EB%AC%B8%EA%B5%AC%20%ED%86%B5%EC%9D%BC%EB%A1%9C39%EA%B8%B8%2022-58",
    rating: 4.3,
    reviewCount: 73,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCnqKPcIqLh701b3WxCn6aqumfs2-Wm3q-8Em6CvxEpxPMt6BGX-kPSDwxqOuz9_3IaobFUvbbFlVEruUjgWaxrngeJGrW0qCKT8-xVW-mnMmZbCFJ4h4Ilb1fDlWO90pHjXYanJSL5I7pGog=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-277",
    name: "옛날우렁이식당 본점",
    category: "쌈밥",
    address: "충남 당진시 신평면 서해로 7434-1",
    phone: "041-363-0868",
    lat: 36.8792135929816,
    lng: 126.802033195592,
    kakaoUrl: "http://place.map.kakao.com/10639247",
    naverUrl: "https://map.naver.com/p/search/%EC%98%9B%EB%82%A0%EC%9A%B0%EB%A0%81%EC%9D%B4%EC%8B%9D%EB%8B%B9%20%EB%B3%B8%EC%A0%90%20%EC%B6%A9%EB%82%A8%20%EB%8B%B9%EC%A7%84%EC%8B%9C%20%EC%8B%A0%ED%8F%89%EB%A9%B4%20%EC%84%9C%ED%95%B4%EB%A1%9C%207434-1",
    rating: 4,
    reviewCount: 908,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDSxnq8j8Gt_vH5I3ujtBDXJPNwyzslkfN1CnC0AVBiBqSSVKc5eIF8BrkWnz4caEbl8bB21bqgK857VBfrTgIN8vxUIz_FOETnq_5A9zllhmOYgaDzJfoL7yjKmBpD4ke3ERf5ryx4eDy74EEgAijC=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-278",
    name: "옛맛서울불고기 건대점",
    category: "불고기,두루치기",
    address: "서울 광진구 아차산로 305",
    phone: "02-453-8889",
    lat: 37.538396243964,
    lng: 127.076876988165,
    kakaoUrl: "http://place.map.kakao.com/17167851",
    naverUrl: "https://map.naver.com/p/search/%EC%98%9B%EB%A7%9B%EC%84%9C%EC%9A%B8%EB%B6%88%EA%B3%A0%EA%B8%B0%20%EA%B1%B4%EB%8C%80%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B4%91%EC%A7%84%EA%B5%AC%20%EC%95%84%EC%B0%A8%EC%82%B0%EB%A1%9C%20305",
    rating: 4.3,
    reviewCount: 233,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCsHDfZ1tLuv_gNtGKxsHGZK8oFNHG4oyxWg2DEtp0CMI-eZXuw5e_cvdYTghSl01hPrg1leYqEy3AZ-rD1wnmZSq_0S06vfMwN9oQtrnKj5wYQShZ3yltwyVNduFf-eqyPpnwWaJYPyxXk=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-279",
    name: "옛집국수",
    category: "국수",
    address: "서울 용산구 한강대로62길 26",
    phone: "02-794-8364",
    lat: 37.53390790343233,
    lng: 126.97358162289555,
    kakaoUrl: "http://place.map.kakao.com/13320353",
    naverUrl: "https://map.naver.com/p/search/%EC%98%9B%EC%A7%91%EA%B5%AD%EC%88%98%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%ED%95%9C%EA%B0%95%EB%8C%80%EB%A1%9C62%EA%B8%B8%2026",
    rating: 4.1,
    reviewCount: 468,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBa0SXIloqTT2I3yZinbgWPwIZX8xOyZwu2tblMblNet-gHk9cEyBZNzimpDR1rVGM3In08kvRbdWB2TASiuA5EdbevvtEBwfqPhY-VNM-Nwdtkuw5uPn0p31Nkj9glLM2_oM9t-mJ9kgva-Pmx_P3smQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "\"oh my god😱\" 외국인 손님도 경악한 40년전통 옛집국수 전메뉴 먹방",
        videoUrl: "https://www.youtube.com/watch?v=-RI5PUiPr3g",
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-280",
    name: "오근내닭갈비 용산본점",
    category: "닭요리",
    address: "서울 용산구 이촌로29길 15",
    phone: "02-797-0131",
    lat: 37.52452365757104,
    lng: 126.95970882066202,
    kakaoUrl: "http://place.map.kakao.com/27269085",
    naverUrl: "https://map.naver.com/p/search/%EC%98%A4%EA%B7%BC%EB%82%B4%EB%8B%AD%EA%B0%88%EB%B9%84%20%EC%9A%A9%EC%82%B0%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%EC%9D%B4%EC%B4%8C%EB%A1%9C29%EA%B8%B8%2015",
    rating: 4.2,
    reviewCount: 1117,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjC9mF2YP9G-5iAYj1kyp4aRP1wLbiIucZDOVeXvxjyRt51GDoFFaSbXHuZwyNQENVYO9U0Nc9mHKiiXefrgCvAPdmkfYYsRStrpfCABd9HQp6zj1XbD_IZF-BRY3yWR9ZwsxeRqYUQG3LP5aA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-281",
    name: "오늘초밥 수지구청점",
    category: "초밥,롤",
    address: "경기 용인시 수지구 풍덕천로 119",
    phone: "0507-1390-0108",
    lat: 37.32284125659158,
    lng: 127.0946928449908,
    kakaoUrl: "http://place.map.kakao.com/1822883618",
    naverUrl: "https://map.naver.com/p/search/%EC%98%A4%EB%8A%98%EC%B4%88%EB%B0%A5%20%EC%88%98%EC%A7%80%EA%B5%AC%EC%B2%AD%EC%A0%90%20%EA%B2%BD%EA%B8%B0%20%EC%9A%A9%EC%9D%B8%EC%8B%9C%20%EC%88%98%EC%A7%80%EA%B5%AC%20%ED%92%8D%EB%8D%95%EC%B2%9C%EB%A1%9C%20119",
    rating: 2,
    reviewCount: 1,
    photoUrl: null,
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      }
    ]
  },
  {
    id: "jjy-282",
    name: "오단이꼬마김밥",
    category: "분식",
    address: "경북 김천시 평화순환길 8",
    phone: "054-434-7924",
    lat: 36.12554415126579,
    lng: 128.1068436968257,
    kakaoUrl: "http://place.map.kakao.com/24528418",
    naverUrl: "https://map.naver.com/p/search/%EC%98%A4%EB%8B%A8%EC%9D%B4%EA%BC%AC%EB%A7%88%EA%B9%80%EB%B0%A5%20%EA%B2%BD%EB%B6%81%20%EA%B9%80%EC%B2%9C%EC%8B%9C%20%ED%8F%89%ED%99%94%EC%88%9C%ED%99%98%EA%B8%B8%208",
    rating: 3.7,
    reviewCount: 132,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDWkAmLuRqydnKca1oyelO_j7dVl8hEUh_MAkoISx9drBUH6C5B-l0d7JVF8fcdqLMLzo24Uh0RP4AV8bVFBLwvOdYcPzrXAG-i1R8mg-hWI3hnuyDrKFcXnmhWYaxb0XO5By5qqXx6r8WHSpE8atHbpA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-283",
    name: "오뚜기돈까스",
    category: "돈까스,우동",
    address: "경기 광명시 오리로 991",
    phone: "02-2616-1316",
    lat: 37.4796418733086,
    lng: 126.852914891656,
    kakaoUrl: "http://place.map.kakao.com/9262805",
    naverUrl: "https://map.naver.com/p/search/%EC%98%A4%EB%9A%9C%EA%B8%B0%EB%8F%88%EA%B9%8C%EC%8A%A4%20%EA%B2%BD%EA%B8%B0%20%EA%B4%91%EB%AA%85%EC%8B%9C%20%EC%98%A4%EB%A6%AC%EB%A1%9C%20991",
    rating: 3.5,
    reviewCount: 44,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAdLHSwKR2TWHMp4XtP6NAOUlfWt_G2-QTXiU0p1D8AjcMUt9j72Ty2LKkBJu3CRUlHHNjVQDCN1nVIE4xi8whZX2nnTE26hHP5LqTeqGEa3MdvnrYYcXqJbzCGkUYxvQQXNWowAiFjpaapmg=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "다 못먹으면 혼난다는 사장님 놀래키기🤣 광명 오뚜기 돈까스 먹방",
        videoUrl: "https://www.youtube.com/watch?v=zPy7VeF0YSY",
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      }
    ]
  },
  {
    id: "jjy-284",
    name: "오마카세 오사이초밥 잠실송리단길점",
    category: "초밥,롤",
    address: "서울 송파구 백제고분로45길 17-3",
    phone: "02-423-5422",
    lat: 37.50956464143005,
    lng: 127.10941684026714,
    kakaoUrl: "http://place.map.kakao.com/180526534",
    naverUrl: "https://map.naver.com/p/search/%EC%98%A4%EB%A7%88%EC%B9%B4%EC%84%B8%20%EC%98%A4%EC%82%AC%EC%9D%B4%EC%B4%88%EB%B0%A5%20%EC%9E%A0%EC%8B%A4%EC%86%A1%EB%A6%AC%EB%8B%A8%EA%B8%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%86%A1%ED%8C%8C%EA%B5%AC%20%EB%B0%B1%EC%A0%9C%EA%B3%A0%EB%B6%84%EB%A1%9C45%EA%B8%B8%2017-3",
    rating: 4.7,
    reviewCount: 12,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD2UIlsa4b0rRqxTrMfRSYUTQsWP-90j2mutgUw5xk8KgiM72qehyxt0xKaMPNxjg-NSotrd8Uz5uxs7Pm_X21KHYSsn9kPSZAKd1qQZmAytUbly2eBcK3R08s9AJORlHN9QowRMxsb_bG-g-M=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      }
    ]
  },
  {
    id: "jjy-285",
    name: "오봉집 천호점",
    category: "오봉집",
    address: "서울 강동구 올림픽로 722",
    phone: "02-477-0934",
    lat: 37.5456627163126,
    lng: 127.126221563525,
    kakaoUrl: "http://place.map.kakao.com/33773654",
    naverUrl: "https://map.naver.com/p/search/%EC%98%A4%EB%B4%89%EC%A7%91%20%EC%B2%9C%ED%98%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%8F%99%EA%B5%AC%20%EC%98%AC%EB%A6%BC%ED%94%BD%EB%A1%9C%20722",
    rating: 4.2,
    reviewCount: 59,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDr_K3zDr61lZa5dIhmgQViXf_glNEOnf_6h61BomE3xuwyHViQSmI_teWZTi5_7gQlGdAuXqy8YHvGsDSpVl4sW4TX5i2uLtQMbgX6GSccijZZ95KNdOexHQQBDvH50yX6ECfj9YF7TAuC1nY=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-286",
    name: "오장동흥남집 본점",
    category: "냉면",
    address: "서울 중구 마른내로 114",
    phone: "02-2266-0735",
    lat: 37.56435740219144,
    lng: 127.00054103307872,
    kakaoUrl: "http://place.map.kakao.com/8174854",
    naverUrl: "https://map.naver.com/p/search/%EC%98%A4%EC%9E%A5%EB%8F%99%ED%9D%A5%EB%82%A8%EC%A7%91%20%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EB%A7%88%EB%A5%B8%EB%82%B4%EB%A1%9C%20114",
    rating: 4,
    reviewCount: 3284,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDVQQMA3aRQmvRtg28NdwRbJ_xNmeD51LpKgiAMOtt_AbaWSirJLNmCpUb62rJJg6RfysgveFHqn24nUXQ_3BB_2186CUyuTD1_JxHl73U8AuB2-J_gtbqm6xlg3dqQfSsjL8Ltdn2nvDBI9BQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-287",
    name: "옥자회관",
    category: "돈까스,우동",
    address: "서울 마포구 성암로 219-6",
    phone: "02-375-5057",
    lat: 37.578825888180866,
    lng: 126.89516872681428,
    kakaoUrl: "http://place.map.kakao.com/203032568",
    naverUrl: "https://map.naver.com/p/search/%EC%98%A5%EC%9E%90%ED%9A%8C%EA%B4%80%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EC%84%B1%EC%95%94%EB%A1%9C%20219-6",
    rating: 4.6,
    reviewCount: 198,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCgNGru3PUyATEJgmXa_8VvCYD1GX447UIiKI1o_lcdalbWvM2fUc2tiBg17NT_fNGckWKeVJF4dEk9hSBNmgU4lYXQZhsiWjzSq0-SFbTTdDEq44bMycnJ-izScxSSP-zUpgF8bC6gnXnNzQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "최애등극..역대급 돈까스 맛집을 찾았습니다🥹 줄서서먹는 옥자회관 돈까스 먹방",
        videoUrl: "https://www.youtube.com/watch?v=raDdfpVDIbw",
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      }
    ]
  },
  {
    id: "jjy-288",
    name: "옥천옥",
    category: "설렁탕",
    address: "서울 동대문구 하정로 16",
    phone: "02-2292-8201",
    lat: 37.572508327034626,
    lng: 127.0269980020464,
    kakaoUrl: "http://place.map.kakao.com/22618131",
    naverUrl: "https://map.naver.com/p/search/%EC%98%A5%EC%B2%9C%EC%98%A5%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC%20%ED%95%98%EC%A0%95%EB%A1%9C%2016",
    rating: 3.9,
    reviewCount: 249,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAsLx0z7WkcsvDzWB80Co2s4kVtaWN25LP77fuXDq1Oya1iTo01v7ALzxNnHc1omQJvIAjfeXzL7UtIK0LJ12WyrSen0NqfXh31xr0ENANJzUJOwMA4dfrbU3NtaBCJfJFceYzNqWuWwNOojw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-289",
    name: "온정돈까스 본점",
    category: "돈까스,우동",
    address: "서울 관악구 남부순환로 1509",
    phone: "02-3281-3330",
    lat: 37.482761296535365,
    lng: 126.91815324257718,
    kakaoUrl: "http://place.map.kakao.com/27508076",
    naverUrl: "https://map.naver.com/p/search/%EC%98%A8%EC%A0%95%EB%8F%88%EA%B9%8C%EC%8A%A4%20%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B4%80%EC%95%85%EA%B5%AC%20%EB%82%A8%EB%B6%80%EC%88%9C%ED%99%98%EB%A1%9C%201509",
    rating: 3.7,
    reviewCount: 1131,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjALZ0GXGCyoVZS3E6Pdt4pVGc432Ib7WXDBFjASw6QqmXQzSkD3i9A7iuQKeAQVzEBIQCeVlKw4vOEoaWltnLuguw812_NaDEOq3ZmYSNkE0V4IF8xLeHXY9xEOfFOBkzj8_XlXwWM_g6r7=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      }
    ]
  },
  {
    id: "jjy-290",
    name: "온정떡집",
    category: "떡,한과",
    address: "전남광주통합특별시 순천시 북문길 11",
    phone: "061-752-7354",
    lat: 34.957765444544414,
    lng: 127.48455020201808,
    kakaoUrl: "http://place.map.kakao.com/10620868",
    naverUrl: "https://map.naver.com/p/search/%EC%98%A8%EC%A0%95%EB%96%A1%EC%A7%91%20%EC%A0%84%EB%82%A8%EA%B4%91%EC%A3%BC%ED%86%B5%ED%95%A9%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%88%9C%EC%B2%9C%EC%8B%9C%20%EB%B6%81%EB%AC%B8%EA%B8%B8%2011",
    rating: 5,
    reviewCount: 1,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCLsm6FJFEzYFckVd99mICIixaDAJoduEexctvV0B_HDmO4iz9LMH1ojz3IFavn9vzviS9Ytu8pO28YnU5K2DI39gp4yxZlrubkHrEgDSwk7Ty9R1GjhdEmCB4LtSLSHErbJLELZBWX4A_rq0s=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 카페·디저트 맛집."
      }
    ]
  },
  {
    id: "jjy-291",
    name: "외갓집",
    category: "분식",
    address: "충북 제천시 풍양로17길 7",
    phone: "043-652-7767",
    lat: 37.137710212857804,
    lng: 128.212178087636,
    kakaoUrl: "http://place.map.kakao.com/18768435",
    naverUrl: "https://map.naver.com/p/search/%EC%99%B8%EA%B0%93%EC%A7%91%20%EC%B6%A9%EB%B6%81%20%EC%A0%9C%EC%B2%9C%EC%8B%9C%20%ED%92%8D%EC%96%91%EB%A1%9C17%EA%B8%B8%207",
    rating: 4.3,
    reviewCount: 37,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBuifMw9X_vCXdqLTK45F11B4_YCFk7FZUNKSAyLlIvf_QkYb-5F5uGLt8SZinNQQQD5tdIxVrldpPjBCsu3yVLGy4_MZDQt2bJkQOqMqFdMwvqxdTgsH53llydjYNa7jDyt-HGlkp2U1RiPQo=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-292",
    name: "요거트월드 하양점",
    category: "요거트월드",
    address: "경북 경산시 하양읍 대학로305길 51-2",
    phone: "010-7636-1352",
    lat: 35.9107939674228,
    lng: 128.81686840650252,
    kakaoUrl: "http://place.map.kakao.com/148260882",
    naverUrl: "https://map.naver.com/p/search/%EC%9A%94%EA%B1%B0%ED%8A%B8%EC%9B%94%EB%93%9C%20%ED%95%98%EC%96%91%EC%A0%90%20%EA%B2%BD%EB%B6%81%20%EA%B2%BD%EC%82%B0%EC%8B%9C%20%ED%95%98%EC%96%91%EC%9D%8D%20%EB%8C%80%ED%95%99%EB%A1%9C305%EA%B8%B8%2051-2",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 카페·디저트 맛집."
      }
    ]
  },
  {
    id: "jjy-293",
    name: "할매바리스타",
    category: "커피전문점",
    address: "경남 통영시 욕지면 욕지일주로 155",
    phone: "055-645-8121",
    lat: 34.6351375408832,
    lng: 128.269619986835,
    kakaoUrl: "http://place.map.kakao.com/26849792",
    naverUrl: "https://map.naver.com/p/search/%ED%95%A0%EB%A7%A4%EB%B0%94%EB%A6%AC%EC%8A%A4%ED%83%80%20%EA%B2%BD%EB%82%A8%20%ED%86%B5%EC%98%81%EC%8B%9C%20%EC%9A%95%EC%A7%80%EB%A9%B4%20%EC%9A%95%EC%A7%80%EC%9D%BC%EC%A3%BC%EB%A1%9C%20155",
    rating: 4,
    reviewCount: 290,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjA8Ypc5WfDSzsuPMx4U-W9gg7_giOrW7wWUZQFs15sDpsttfOr5rB7fpS1LdMjYuaan3R15lz56t5qNQHKLqqhXD92CQhAgLtVY9FJcAadGqA33pUBCglFjaf79T03safFR6MDM--6KcVUsoDL7nB8_=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 카페·디저트 맛집."
      }
    ]
  },
  {
    id: "jjy-294",
    name: "용천가든",
    category: "한식",
    address: "충남 천안시 서북구 입장면 성진로 637",
    phone: "041-585-8959",
    lat: 36.912658000351776,
    lng: 127.20159699450532,
    kakaoUrl: "http://place.map.kakao.com/21482912",
    naverUrl: "https://map.naver.com/p/search/%EC%9A%A9%EC%B2%9C%EA%B0%80%EB%93%A0%20%EC%B6%A9%EB%82%A8%20%EC%B2%9C%EC%95%88%EC%8B%9C%20%EC%84%9C%EB%B6%81%EA%B5%AC%20%EC%9E%85%EC%9E%A5%EB%A9%B4%20%EC%84%B1%EC%A7%84%EB%A1%9C%20637",
    rating: 4.3,
    reviewCount: 582,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAySpfBJ-x-kX0qZ9itE1Xw6-H0qxBztVM_4e2By1m6ubG6qWNrcEjjkWQsmFeobwLfWlcHvkPaVhs8ZrUdT0K3B222fPCZsgmCYzlCbgp-ITUyAikHgDKP-nTHPbDAZzlol-qJeL3Bezhz=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "고기만 1.8kg인 김치찌개..😨 천안 줄서서 먹는다는 용천가든 먹방",
        videoUrl: "https://www.youtube.com/watch?v=wF3eisdCcBA",
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-295",
    name: "우대포 분당직영점",
    category: "육류,고기",
    address: "경기 성남시 분당구 서현동 261-6",
    phone: "0507-1335-6139",
    lat: 37.38583889337056,
    lng: 127.1217593866941,
    kakaoUrl: "http://place.map.kakao.com/1453370999",
    naverUrl: "https://map.naver.com/p/search/%EC%9A%B0%EB%8C%80%ED%8F%AC%20%EB%B6%84%EB%8B%B9%EC%A7%81%EC%98%81%EC%A0%90%20%EA%B2%BD%EA%B8%B0%20%EC%84%B1%EB%82%A8%EC%8B%9C%20%EB%B6%84%EB%8B%B9%EA%B5%AC%20%EC%84%9C%ED%98%84%EB%8F%99%20261-6",
    rating: 4.3,
    reviewCount: 23,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAXhkXiv3tP3uKjb37YsS1fbrlfEJifODc2yPQ0fkzMPbU15lHumiG58zJbgYATYEFsYtTrjkQkce26k7AdveFm9xQIksxYZjTA9x6pQJm5IDFedq5fKTR5gQWPM9B5ZA7oR782GtSSmNSZPiWj6382=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-296",
    name: "우리나라 국밥 본점",
    category: "한식",
    address: "경기 의정부시 동일로128번길 11",
    phone: "0507-1434-6999",
    lat: 37.70061467119393,
    lng: 127.05587587095918,
    kakaoUrl: "http://place.map.kakao.com/10706114",
    naverUrl: "https://map.naver.com/p/search/%EC%9A%B0%EB%A6%AC%EB%82%98%EB%9D%BC%20%EA%B5%AD%EB%B0%A5%20%EB%B3%B8%EC%A0%90%20%EA%B2%BD%EA%B8%B0%20%EC%9D%98%EC%A0%95%EB%B6%80%EC%8B%9C%20%EB%8F%99%EC%9D%BC%EB%A1%9C128%EB%B2%88%EA%B8%B8%2011",
    rating: 4,
    reviewCount: 2056,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAvvt6f9oS9QKAi-MhcOoDp5Cw5ND3bffT1SN89LXuucZ_I-7in04lM5guN2X0Rg7nvXtoNC2jPakCAs8n06yAJevuQ7UMzxxDyHrPkdG47jh7vtHzZXILItc9AjY4Lr9IvK_kTvxfOtqGCY0_Cp9MMYg=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-297",
    name: "우리분식",
    category: "분식",
    address: "전북특별자치도 익산시 중앙로3길 26-1",
    phone: "063-851-3889",
    lat: 35.94151878461739,
    lng: 126.95046005305257,
    kakaoUrl: "http://place.map.kakao.com/9281591",
    naverUrl: "https://map.naver.com/p/search/%EC%9A%B0%EB%A6%AC%EB%B6%84%EC%8B%9D%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%9D%B5%EC%82%B0%EC%8B%9C%20%EC%A4%91%EC%95%99%EB%A1%9C3%EA%B8%B8%2026-1",
    rating: 4.1,
    reviewCount: 357,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBcUompsgouathpHsvLRicJa2UFEqhscGo49w_zWD2Oyv874oECzdZdf36yqY-BWf3PXFeUKG6DnQKGVDMMFnivGWooC7KKNqP2HqorS2c2qhkWcFE0vR8HAfE8anSYRW-AoRKvVKPAQv2puQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-298",
    name: "우리식당",
    category: "불고기,두루치기",
    address: "전남광주통합특별시 곡성군 석곡면 석곡로 30",
    phone: "061-363-5617",
    lat: 35.1296724734288,
    lng: 127.253554752759,
    kakaoUrl: "http://place.map.kakao.com/9947605",
    naverUrl: "https://map.naver.com/p/search/%EC%9A%B0%EB%A6%AC%EC%8B%9D%EB%8B%B9%20%EC%A0%84%EB%82%A8%EA%B4%91%EC%A3%BC%ED%86%B5%ED%95%A9%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EA%B3%A1%EC%84%B1%EA%B5%B0%20%EC%84%9D%EA%B3%A1%EB%A9%B4%20%EC%84%9D%EA%B3%A1%EB%A1%9C%2030",
    rating: 4.2,
    reviewCount: 141,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBzU0mXtZlzYtg-urjVcL1lZakSku4oviDsUtqxVldb0GF2UIXCBXpP506TN-QhlH_bap8NDYLh9MOFfMowdT_YKCbVnDmPuImkCEW_V59QlBTJfpMHOr9g9Tq2ThSQmxfk9doVXZ4y0Toh_Q=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "곡성 120년 전통 석쇠구이? 14인분만 먹방",
        videoUrl: "https://www.youtube.com/watch?v=hryirOKFk38",
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-299",
    name: "우면동소나무집",
    category: "닭요리",
    address: "서울 서초구 식유촌길 71",
    phone: "02-572-6794",
    lat: 37.4583969185105,
    lng: 127.011578479991,
    kakaoUrl: "http://place.map.kakao.com/13093421",
    naverUrl: "https://map.naver.com/p/search/%EC%9A%B0%EB%A9%B4%EB%8F%99%EC%86%8C%EB%82%98%EB%AC%B4%EC%A7%91%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EC%8B%9D%EC%9C%A0%EC%B4%8C%EA%B8%B8%2071",
    rating: 4.4,
    reviewCount: 571,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAuM-wRifEuSbFUcQq6SqHdeFiAeW8zLw4SIMrunoiQHjI4CQ0GUAcuUrJ2L0MX6BRD3fcywSCPQRTVQFjHsiP5S89NO7M4IBfA4aQuXkZywdyvSEsLNSqpEJInHchLJt3BfsC8HbUkx6pLrKw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 찜·탕 맛집."
      }
    ]
  },
  {
    id: "jjy-300",
    name: "우불식당",
    category: "돈까스,우동",
    address: "서울 송파구 송파대로28길 27",
    phone: "02-404-7888",
    lat: 37.49534195229836,
    lng: 127.12084003993866,
    kakaoUrl: "http://place.map.kakao.com/106301747",
    naverUrl: "https://map.naver.com/p/search/%EC%9A%B0%EB%B6%88%EC%8B%9D%EB%8B%B9%20%EC%84%9C%EC%9A%B8%20%EC%86%A1%ED%8C%8C%EA%B5%AC%20%EC%86%A1%ED%8C%8C%EB%8C%80%EB%A1%9C28%EA%B8%B8%2027",
    rating: 4,
    reviewCount: 219,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBQt9fEZf8P6BjKjcr1gZDt2tdIwloODyc0CDUWmL0IA1q91N0kwHWVMjQ6Nr44iaCnSM6FT9wmZR57lA1jrw3Oa8S2_d96VGxk4SJRBfbfMdZbpEE5DIR-i3si10UmbckpvJRl_V3Aj6-XdWk=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "우동집에 갔더니 유명배우가 사장님..?🤫 가락동 우불식당 먹방",
        videoUrl: "https://www.youtube.com/watch?v=HvTLbeasXS4",
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-301",
    name: "우암국수",
    category: "국수",
    address: "충북 청주시 청원구 향군로 35",
    phone: "043-255-9766",
    lat: 36.648867248575,
    lng: 127.486345223835,
    kakaoUrl: "http://place.map.kakao.com/10707829",
    naverUrl: "https://map.naver.com/p/search/%EC%9A%B0%EC%95%94%EA%B5%AD%EC%88%98%20%EC%B6%A9%EB%B6%81%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%EC%B2%AD%EC%9B%90%EA%B5%AC%20%ED%96%A5%EA%B5%B0%EB%A1%9C%2035",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-302",
    name: "우육미",
    category: "육류,고기",
    address: "서울 중구 퇴계로 373",
    phone: "0507-1363-1501",
    lat: 37.5652198412515,
    lng: 127.013007581183,
    kakaoUrl: "http://place.map.kakao.com/384441682",
    naverUrl: "https://map.naver.com/p/search/%EC%9A%B0%EC%9C%A1%EB%AF%B8%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%ED%87%B4%EA%B3%84%EB%A1%9C%20373",
    rating: 4.5,
    reviewCount: 316,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjATvDDfaY6blnXkxV3CXXL9ykLMY32UNDRI69UR9xfAtwlE48sCwhw7vHYRG1oQn9fV66Hs9uk5whZgKFw5rE-MlcZ5yfS7ulCkpDwiqRhmpO4SLPTx3TeHIs-lrGjUPstwEU1vkZN-Rev_IGVuzY-u=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-303",
    name: "우이락 망원본점",
    category: "우이락",
    address: "서울 마포구 포은로8길 22",
    phone: "02-336-5564",
    lat: 37.5564326454454,
    lng: 126.905983400357,
    kakaoUrl: "http://place.map.kakao.com/1088815991",
    naverUrl: "https://map.naver.com/p/search/%EC%9A%B0%EC%9D%B4%EB%9D%BD%20%EB%A7%9D%EC%9B%90%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%ED%8F%AC%EC%9D%80%EB%A1%9C8%EA%B8%B8%2022",
    rating: 4.3,
    reviewCount: 453,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjA2def5tZEHgH-y3HT066cWMBnk4eNoLXKuKEpDH9yB4wtyy1AzaS7kYmfaeVlC1PTJr_gEsmygxLJyXV5UwQvM_U0dWIKGCzKlA7TvPoIm1sr3ltXUcrYRjLCMxYLSmdd7vq9xfzX5gJeZtQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-304",
    name: "우진이네",
    category: "해물,생선",
    address: "경북 울릉군 서면 태하길 174",
    phone: "010-6823-9374",
    lat: 37.51174961039474,
    lng: 130.79978723445006,
    kakaoUrl: "http://place.map.kakao.com/579485501",
    naverUrl: "https://map.naver.com/p/search/%EC%9A%B0%EC%A7%84%EC%9D%B4%EB%84%A4%20%EA%B2%BD%EB%B6%81%20%EC%9A%B8%EB%A6%89%EA%B5%B0%20%EC%84%9C%EB%A9%B4%20%ED%83%9C%ED%95%98%EA%B8%B8%20174",
    rating: 4.3,
    reviewCount: 24,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCCc7o5PtvyY4XXponffZ27X-6Exs9yotgkqj4A-dbaR7Bq0d2qoAMprf_Nt0s9V7medXqlh3skBA3-2Em_gdRaXSLPCUEYt4F5U0JylPPHS4BsR1hyIL5no47ACWSA_ulkMOlaV04Ph4_IiQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "울릉도11)먹방 구경하러 다 모이셨어요🤣 우진이네 오징어통찜 라면 먹방",
        videoUrl: "https://www.youtube.com/watch?v=QWtvZ6NfNJ8",
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-305",
    name: "울프강스테이크하우스 청담점",
    category: "스테이크,립",
    address: "서울 강남구 선릉로152길 21",
    phone: "02-556-8700",
    lat: 37.52439983131448,
    lng: 127.04141558950498,
    kakaoUrl: "http://place.map.kakao.com/26572124",
    naverUrl: "https://map.naver.com/p/search/%EC%9A%B8%ED%94%84%EA%B0%95%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%81%AC%ED%95%98%EC%9A%B0%EC%8A%A4%20%EC%B2%AD%EB%8B%B4%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%84%A0%EB%A6%89%EB%A1%9C152%EA%B8%B8%2021",
    rating: 4.3,
    reviewCount: 1842,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCes9kVfI5R-GhFnCk-DltvPZI2XzuvN9rSHJg25aiw4fvSb4rADakqIGegDaTOFhC30RUTee7mvAXTJGaxLlX5f38YT5MslW7wKABcVfTlUcw4PVX80mmkbgrEnBMyZV6HpB_sSyLx_rtoQmY=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 양식 맛집."
      }
    ]
  },
  {
    id: "jjy-306",
    name: "웅가네 개성김치녹차삼겹살",
    category: "삼겹살",
    address: "서울 노원구 공릉로59길 15",
    phone: "02-971-2283",
    lat: 37.6331482789928,
    lng: 127.07108335831,
    kakaoUrl: "http://place.map.kakao.com/11181285",
    naverUrl: "https://map.naver.com/p/search/%EC%9B%85%EA%B0%80%EB%84%A4%20%EA%B0%9C%EC%84%B1%EA%B9%80%EC%B9%98%EB%85%B9%EC%B0%A8%EC%82%BC%EA%B2%B9%EC%82%B4%20%EC%84%9C%EC%9A%B8%20%EB%85%B8%EC%9B%90%EA%B5%AC%20%EA%B3%B5%EB%A6%89%EB%A1%9C59%EA%B8%B8%2015",
    rating: 4.6,
    reviewCount: 64,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD4tKHN1hSfnl-GsTZHDEUKW5TKQblIjQtTqYNSy1VJ33FYsMYzJ_xoroOVIlK2WJbh7OoeuzIqcNALNMQaIonT84AYSNJYD0Joa6H51bZpDq_fhsSq1TLrqEtulFdwCCnsVzffgdyXGr0y7JSEBF06pg=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-307",
    name: "웅담식당",
    category: "육류,고기",
    address: "제주특별자치도 서귀포시 중앙로59번길 5",
    phone: "064-762-6442",
    lat: 33.2498500052539,
    lng: 126.560979608873,
    kakaoUrl: "http://place.map.kakao.com/10688418",
    naverUrl: "https://map.naver.com/p/search/%EC%9B%85%EB%8B%B4%EC%8B%9D%EB%8B%B9%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%84%9C%EA%B7%80%ED%8F%AC%EC%8B%9C%20%EC%A4%91%EC%95%99%EB%A1%9C59%EB%B2%88%EA%B8%B8%205",
    rating: 4.2,
    reviewCount: 478,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDLFtXGOaL7Ar_er-8UnFYOGTDlscz0rYQgNMAkGYNtpHzB7cNRpK_-aC2lHEBlMLb1jLTpPW6p-8tz3vEATT6SMY0mUN3PUV3N6JGVGqqOfmTzhLTd9nELgaokM0hFj5UQcQqhgGep1ZmGnOA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-308",
    name: "한솥도시락 고양원당점",
    category: "한솥도시락",
    address: "경기 고양시 덕양구 호국로 797",
    phone: "010-8877-0400",
    lat: 37.6573326579565,
    lng: 126.836618724706,
    kakaoUrl: "http://place.map.kakao.com/864785263",
    naverUrl: "https://map.naver.com/p/search/%ED%95%9C%EC%86%A5%EB%8F%84%EC%8B%9C%EB%9D%BD%20%EA%B3%A0%EC%96%91%EC%9B%90%EB%8B%B9%EC%A0%90%20%EA%B2%BD%EA%B8%B0%20%EA%B3%A0%EC%96%91%EC%8B%9C%20%EB%8D%95%EC%96%91%EA%B5%AC%20%ED%98%B8%EA%B5%AD%EB%A1%9C%20797",
    rating: 2,
    reviewCount: 2,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAC3yAY5waojy-HPXjeV7bL2ZX_2VS40Eqxqcp7pN6wrmf-u9tLP0AWt-9l6ACczLNyWqy1s76WD12iS0i8fbaw-hLASc4nquDMd3ncypzBs7n5X7lWy3TQYTHgQMcHdvCEQR__T4ercJ4Z05w=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-309",
    name: "원보",
    category: "중국요리",
    address: "전남광주통합특별시 북구 서방로 78-1",
    phone: "062-252-3380",
    lat: 35.1714467328007,
    lng: 126.921121754368,
    kakaoUrl: "http://place.map.kakao.com/1525701535",
    naverUrl: "https://map.naver.com/p/search/%EC%9B%90%EB%B3%B4%20%EC%A0%84%EB%82%A8%EA%B4%91%EC%A3%BC%ED%86%B5%ED%95%A9%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EB%B6%81%EA%B5%AC%20%EC%84%9C%EB%B0%A9%EB%A1%9C%2078-1",
    rating: 4,
    reviewCount: 4,
    photoUrl: null,
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-310",
    name: "마산할매간장게장",
    category: "아구",
    address: "서울 서초구 강남대로99길 10",
    phone: "02-547-2774",
    lat: 37.5154748329156,
    lng: 127.01893284859412,
    kakaoUrl: "http://place.map.kakao.com/10686549",
    naverUrl: "https://map.naver.com/p/search/%EB%A7%88%EC%82%B0%ED%95%A0%EB%A7%A4%EA%B0%84%EC%9E%A5%EA%B2%8C%EC%9E%A5%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EA%B0%95%EB%82%A8%EB%8C%80%EB%A1%9C99%EA%B8%B8%2010",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-311",
    name: "원조엄마네",
    category: "한식",
    address: "경기 수원시 팔달구 팔달문로 19",
    phone: "031-253-5210",
    lat: 37.2780067744208,
    lng: 127.019759476933,
    kakaoUrl: "http://place.map.kakao.com/13571397",
    naverUrl: "https://map.naver.com/p/search/%EC%9B%90%EC%A1%B0%EC%97%84%EB%A7%88%EB%84%A4%20%EA%B2%BD%EA%B8%B0%20%EC%88%98%EC%9B%90%EC%8B%9C%20%ED%8C%94%EB%8B%AC%EA%B5%AC%20%ED%8C%94%EB%8B%AC%EB%AC%B8%EB%A1%9C%2019",
    rating: 4.2,
    reviewCount: 438,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBAkGmAcdfX50oXkLelMe3-GlScuk7-6s-J3yb0fVzfz2q-63NSkRjr8TlopNWjAncPRz4C1iPtUEK6MXJGyB-EuQ7Az9z_5UOzaZ0XKgPm8auZJ9ER20SM9yXuRlWbt5nMptK-6iEBoYyvhw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-312",
    name: "원조태평소국밥 본점",
    category: "국밥",
    address: "대전 중구 태평로 116-1",
    phone: null,
    lat: 36.3268823004897,
    lng: 127.395543655908,
    kakaoUrl: "http://place.map.kakao.com/24122781",
    naverUrl: "https://map.naver.com/p/search/%EC%9B%90%EC%A1%B0%ED%83%9C%ED%8F%89%EC%86%8C%EA%B5%AD%EB%B0%A5%20%EB%B3%B8%EC%A0%90%20%EB%8C%80%EC%A0%84%20%EC%A4%91%EA%B5%AC%20%ED%83%9C%ED%8F%89%EB%A1%9C%20116-1",
    rating: 4.3,
    reviewCount: 3093,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAQmK3zcALuW2CzpJbLYo-OaeIny3tT3xJLz_Iu31ftbyr63yMZOLSC4RCDdjg79EDn4T6BPStERgoitbquQYt277NRB8sWWF8FdEdl114MUj1Zc3WoePDFzD_OeVaKkM8xpqTLwxys2H3V9o_GTQmLwA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-313",
    name: "원할머니보쌈족발 먹골역점",
    category: "원할머니보쌈족발",
    address: "서울 중랑구 동일로 865",
    phone: "02-978-8252",
    lat: 37.607525225314866,
    lng: 127.07800812143502,
    kakaoUrl: "http://place.map.kakao.com/8029579",
    naverUrl: "https://map.naver.com/p/search/%EC%9B%90%ED%95%A0%EB%A8%B8%EB%8B%88%EB%B3%B4%EC%8C%88%EC%A1%B1%EB%B0%9C%20%EB%A8%B9%EA%B3%A8%EC%97%AD%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EB%9E%91%EA%B5%AC%20%EB%8F%99%EC%9D%BC%EB%A1%9C%20865",
    rating: 3.1,
    reviewCount: 42,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBssdZMdgpYZpDzFu7LENzYVJLC4UCHjIClgF-QPvEH-fWkUPurXHf-1jb-m9fMGjFdLFZZeudNRnEzRGpXCL65_dghRo7G5I-JsaeeyrpBLSgI3GAkCuTiuDsSrICS3Kx0hJrdffK3s--rqQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 족발·보쌈 맛집."
      }
    ]
  },
  {
    id: "jjy-314",
    name: "원효굴찜",
    category: "굴,전복",
    address: "서울 용산구 원효로 143",
    phone: "02-701-8965",
    lat: 37.5344749418871,
    lng: 126.958902424712,
    kakaoUrl: "http://place.map.kakao.com/1554604357",
    naverUrl: "https://map.naver.com/p/search/%EC%9B%90%ED%9A%A8%EA%B5%B4%EC%B0%9C%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%EC%9B%90%ED%9A%A8%EB%A1%9C%20143",
    rating: 4.2,
    reviewCount: 122,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCrTIeAUvEBzyboYdMCFXyr0RNLkt6yAVNAzVn33o6ZannlwHmlyXg6XVH9PHBPoyT11QjW5xSm9e4feiXXRAdvwsbTc-9LOVdEpmnSq2RZL8S3ZcC_ibV0W4w7mzN0ZfvnhsNRPZzrF7G7_mU=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-315",
    name: "대머리곱창 본점",
    category: "곱창,막창",
    address: "서울 강북구 숭인로 65-10",
    phone: "02-985-7002",
    lat: 37.61278490106369,
    lng: 127.02897195721341,
    kakaoUrl: "http://place.map.kakao.com/10252143",
    naverUrl: "https://map.naver.com/p/search/%EB%8C%80%EB%A8%B8%EB%A6%AC%EA%B3%B1%EC%B0%BD%20%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%B6%81%EA%B5%AC%20%EC%88%AD%EC%9D%B8%EB%A1%9C%2065-10",
    rating: 4.1,
    reviewCount: 247,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD_FKV_pwys4m1NkUd5M99dZt5UyDRk3cyTGzbXXLbQ-2Qe4ldJZ1G2hewd00Sc2n_xnT0IPilgVkgOvrDV1bIuVFnvqR2PHaSqtnzNpF4kWzeF1XP850ofchjoEdLsqcr-4aT0AYW4F8Se4g=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-316",
    name: "유가장",
    category: "중국요리",
    address: "경기 여주시 세종로46번길 17-1",
    phone: "031-884-1412",
    lat: 37.2938162482069,
    lng: 127.633907251279,
    kakaoUrl: "http://place.map.kakao.com/9363354",
    naverUrl: "https://map.naver.com/p/search/%EC%9C%A0%EA%B0%80%EC%9E%A5%20%EA%B2%BD%EA%B8%B0%20%EC%97%AC%EC%A3%BC%EC%8B%9C%20%EC%84%B8%EC%A2%85%EB%A1%9C46%EB%B2%88%EA%B8%B8%2017-1",
    rating: 3.9,
    reviewCount: 406,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjC1PTbyQzcFt1XlVZlAouhBmzZ6vEW1V6BWhBXPREyiS2AsoSpJLnjw6dCzc64w1RsvfeqRlX9VWehpCgcvgRohHupZh-7ITrn8K1YUuIqP-eFf58w726bHVyJkpq-6tzH3I1F7SHhhYjiO4A=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-317",
    name: "유자유김치떡볶이 신촌점",
    category: "떡볶이",
    address: "서울 서대문구 연세로11길 22",
    phone: "02-332-9301",
    lat: 37.5590257796027,
    lng: 126.935632972832,
    kakaoUrl: "http://place.map.kakao.com/104532017",
    naverUrl: "https://map.naver.com/p/search/%EC%9C%A0%EC%9E%90%EC%9C%A0%EA%B9%80%EC%B9%98%EB%96%A1%EB%B3%B6%EC%9D%B4%20%EC%8B%A0%EC%B4%8C%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EC%97%B0%EC%84%B8%EB%A1%9C11%EA%B8%B8%2022",
    rating: 3.8,
    reviewCount: 139,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBb3bsiqTbglG-E026aL9s6dlaluJQOoyMRNUqnJ5hZ4yr3ievJKIlRH13bZRPfCCMQdyU0mT8n99MK3-nzO62TInFDl15p1AdzmitPgHn2CYsJIgtAFiMqnlmoNzsT8_wLAr-x242OhLJA6eU=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-318",
    name: "유키사키",
    category: "일식",
    address: "서울 용산구 후암로57길 51-3",
    phone: "010-6203-4748",
    lat: 37.5512171376797,
    lng: 126.974174167763,
    kakaoUrl: "http://place.map.kakao.com/912315911",
    naverUrl: "https://map.naver.com/p/search/%EC%9C%A0%ED%82%A4%EC%82%AC%ED%82%A4%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%ED%9B%84%EC%95%94%EB%A1%9C57%EA%B8%B8%2051-3",
    rating: 4.3,
    reviewCount: 136,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDsRsgMEwGU8vs9swZ2xN59n2GOnCPpmKWkj_q9xPNbq0R3pbsgK6RZLGLR3hgmN9hYR70HMS-Y3TitOoB0aaJTANVPfAB6iXJv6dRDo6__pewLFLU-3S6mcCRa_bIkD8seiteDwm5IedQfdA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 아시안 맛집."
      }
    ]
  },
  {
    id: "jjy-319",
    name: "은주정",
    category: "삼겹살",
    address: "서울 중구 창경궁로8길 32",
    phone: "02-2265-4669",
    lat: 37.56867047080973,
    lng: 126.99975663427007,
    kakaoUrl: "http://place.map.kakao.com/8050105",
    naverUrl: "https://map.naver.com/p/search/%EC%9D%80%EC%A3%BC%EC%A0%95%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EC%B0%BD%EA%B2%BD%EA%B6%81%EB%A1%9C8%EA%B8%B8%2032",
    rating: 4.2,
    reviewCount: 2016,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCST7Fbi8HBS-KLc1iB16Aet1vBUQ5gRAe4cc4gMRKm5-VDkSsGPckC3DcLXf5J8i8EpfIfVO-tU7zzYsfdaoh0ch-zIHnNn1iLJfc_2X4F7jb0iBqbnDbC-b3hdB5ohjACHx5qL-uwbGxf=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-320",
    name: "은희네순대",
    category: "순대",
    address: "충남 논산시 노성면 노성로 576",
    phone: "041-734-6009",
    lat: 36.2761704816286,
    lng: 127.130001352378,
    kakaoUrl: "http://place.map.kakao.com/18636567",
    naverUrl: "https://map.naver.com/p/search/%EC%9D%80%ED%9D%AC%EB%84%A4%EC%88%9C%EB%8C%80%20%EC%B6%A9%EB%82%A8%20%EB%85%BC%EC%82%B0%EC%8B%9C%20%EB%85%B8%EC%84%B1%EB%A9%B4%20%EB%85%B8%EC%84%B1%EB%A1%9C%20576",
    rating: 2.5,
    reviewCount: 2,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD3MEOQL50oG3OtDq01kzY9MXTB3s9QyCCS3Zg68bzsXIaIGu-BXDj_TgaU7JQ9y6Vs3zYDLh6P10pf5Dji88cwBAZKtIgvlg7eeuTIfXHUVWVCEav9B1iq4uHZewX1aTNG_U3wBqZE9fiPwCA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-321",
    name: "이가바지락손칼국수",
    category: "칼국수",
    address: "서울 강서구 양천로 460",
    phone: "02-3661-2077",
    lat: 37.56261104296913,
    lng: 126.85178534019381,
    kakaoUrl: "http://place.map.kakao.com/8547125",
    naverUrl: "https://map.naver.com/p/search/%EC%9D%B4%EA%B0%80%EB%B0%94%EC%A7%80%EB%9D%BD%EC%86%90%EC%B9%BC%EA%B5%AD%EC%88%98%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EC%84%9C%EA%B5%AC%20%EC%96%91%EC%B2%9C%EB%A1%9C%20460",
    rating: 4,
    reviewCount: 706,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAfPbr4HsdYM_2KC_eCIU8rAJusJkJ20cJV8vVdkyFp4csyorStJpR0qxMOlOpyBAtQ1CyEiwN2dbx8e64mlkxgkg4xdS1CBA5uVvVGCnnQdgx0NTwMNRFtLUyxiXt8IqVte8hD7JJGRwK1cxCUuYrI6A=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-322",
    name: "이디야커피 IBK본점",
    category: "이디야커피",
    address: "서울 중구 을지로 79",
    phone: "02-318-6427",
    lat: 37.56642622612368,
    lng: 126.98655642767942,
    kakaoUrl: "http://place.map.kakao.com/10748217",
    naverUrl: "https://map.naver.com/p/search/%EC%9D%B4%EB%94%94%EC%95%BC%EC%BB%A4%ED%94%BC%20IBK%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EC%9D%84%EC%A7%80%EB%A1%9C%2079",
    rating: 3.9,
    reviewCount: 60,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDxEx76Kyio3vS0HQFLgRtMvjk1rivs0_hA3CpCXqVp2XSbpl63eOUyGBuo6vmLVbBuy3dwUSD_WA4ySh4CHiV2V07MJo9y6gUvHO6Eq9TRDxFf8WA6PZwwhpC29OjHj3_TCWuHurPKfQu7PRlb7hWg=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 카페·디저트 맛집."
      }
    ]
  },
  {
    id: "jjy-323",
    name: "이레수산",
    category: "회",
    address: "충남 홍성군 서부면 남당항로213번길 12",
    phone: "041-631-2750",
    lat: 36.5396951332221,
    lng: 126.470974173938,
    kakaoUrl: "http://place.map.kakao.com/11182424",
    naverUrl: "https://map.naver.com/p/search/%EC%9D%B4%EB%A0%88%EC%88%98%EC%82%B0%20%EC%B6%A9%EB%82%A8%20%ED%99%8D%EC%84%B1%EA%B5%B0%20%EC%84%9C%EB%B6%80%EB%A9%B4%20%EB%82%A8%EB%8B%B9%ED%95%AD%EB%A1%9C213%EB%B2%88%EA%B8%B8%2012",
    rating: 4,
    reviewCount: 46,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCmLMGUFjurL2AhRnsgOHyCMXkUxay7MGWFHAbaMBX43DRsrLE1ToSFJUTZm_eUbWJ1-3DlRydUF-TWRYG1riNsaT9AvbD1G6PzuYvG4DSmLkEBzZ91vgwX_dRZuRDuk026_iPR318=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 맛집."
      }
    ]
  },
  {
    id: "jjy-324",
    name: "이삭토스트 한티역점",
    category: "이삭토스트",
    address: "서울 강남구 도곡로63길 16",
    phone: "02-557-3060",
    lat: 37.4980132023897,
    lng: 127.05430419528,
    kakaoUrl: "http://place.map.kakao.com/532272836",
    naverUrl: "https://map.naver.com/p/search/%EC%9D%B4%EC%82%AD%ED%86%A0%EC%8A%A4%ED%8A%B8%20%ED%95%9C%ED%8B%B0%EC%97%AD%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EB%8F%84%EA%B3%A1%EB%A1%9C63%EA%B8%B8%2016",
    rating: 4.4,
    reviewCount: 9,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAVK19TbaObRzO2eocc3o5xlMOi8zxST4kj9aClLcgfptCexqf8_noz5dPHDXDh717RL4UhCI-HPXlMBwj1PH9YiHK6GtqRPEatx-pJr8qZ80hpGPlwYmXtJrt8o5-iyLFVTre8Tb0LHsPCB9M=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 패스트푸드 맛집."
      }
    ]
  },
  {
    id: "jjy-325",
    name: "이수생삼겹살 이수역점",
    category: "삼겹살",
    address: "서울 동작구 동작대로23길 23",
    phone: "02-583-1976",
    lat: 37.48407195838376,
    lng: 126.98040912200601,
    kakaoUrl: "http://place.map.kakao.com/1316094610",
    naverUrl: "https://map.naver.com/p/search/%EC%9D%B4%EC%88%98%EC%83%9D%EC%82%BC%EA%B2%B9%EC%82%B4%20%EC%9D%B4%EC%88%98%EC%97%AD%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EC%9E%91%EA%B5%AC%20%EB%8F%99%EC%9E%91%EB%8C%80%EB%A1%9C23%EA%B8%B8%2023",
    rating: 5,
    reviewCount: 2,
    photoUrl: null,
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-326",
    name: "이조순대국",
    category: "순대",
    address: "서울 용산구 원효로41길 54",
    phone: "02-717-3387",
    lat: 37.53523046179372,
    lng: 126.96030950645424,
    kakaoUrl: "http://place.map.kakao.com/27243872",
    naverUrl: "https://map.naver.com/p/search/%EC%9D%B4%EC%A1%B0%EC%88%9C%EB%8C%80%EA%B5%AD%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%EC%9B%90%ED%9A%A8%EB%A1%9C41%EA%B8%B8%2054",
    rating: 4.2,
    reviewCount: 195,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjANCaoKUQk0CJ7IVMmfcTi7PUpqyQ2wuDMyXky9_HV6GOO4aOzsUQ6W0hL-yA35S1aCTWNyV5k5b4SabJy4uPYRVJ9OLJpl80VoMSd3ecguHqZc37PE85a4OjkKDUenS47Iz9cPl-DJ1_pdd9TgSbRjQQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-327",
    name: "이화루중화요리",
    category: "중국요리",
    address: "강원특별자치도 삼척시 근덕면 교가길 13-3",
    phone: "033-573-7749",
    lat: 37.38047748826549,
    lng: 129.2266376820076,
    kakaoUrl: "http://place.map.kakao.com/23791683",
    naverUrl: "https://map.naver.com/p/search/%EC%9D%B4%ED%99%94%EB%A3%A8%EC%A4%91%ED%99%94%EC%9A%94%EB%A6%AC%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%82%BC%EC%B2%99%EC%8B%9C%20%EA%B7%BC%EB%8D%95%EB%A9%B4%20%EA%B5%90%EA%B0%80%EA%B8%B8%2013-3",
    rating: 3.9,
    reviewCount: 180,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCo9L9FLBTtUtYwJuJ4gIvtt7WDSf69tzkPbuIqzXIt1r1pVo08TKuH8kvutM3ucfdw9I_-NpEjEr9Zq4x2mh3LLg-sSqFsnp29iwBCyBZjpvaGiXHppRY9z7VjLVaQvzErB_PrFy6-XORyH4GsbSCS-A=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-328",
    name: "인사동수제비",
    category: "수제비",
    address: "서울 종로구 인사동8길 14-1",
    phone: "02-735-3361",
    lat: 37.5741431931209,
    lng: 126.986053557287,
    kakaoUrl: "http://place.map.kakao.com/11162975",
    naverUrl: "https://map.naver.com/p/search/%EC%9D%B8%EC%82%AC%EB%8F%99%EC%88%98%EC%A0%9C%EB%B9%84%20%EC%84%9C%EC%9A%B8%20%EC%A2%85%EB%A1%9C%EA%B5%AC%20%EC%9D%B8%EC%82%AC%EB%8F%998%EA%B8%B8%2014-1",
    rating: 4.3,
    reviewCount: 874,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBXMJRP4Zbz4xq12pkZlUPciTygOjWr85F7Lhsn5LZJ0ASmCbwyCX7jI-6W55w-XsjQDlakVb55UWyqu0dkKoucbrrCb9CBd0wL4CRRTBw3YAldWEA3UXu0_A0zBEBi-RsQxZdAvX7C9Q8Ly5xUFMPDVw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-329",
    name: "인천분식",
    category: "분식",
    address: "경북 구미시 장천면 강동로 175",
    phone: "054-471-5316",
    lat: 36.12522505495171,
    lng: 128.49489353226448,
    kakaoUrl: "http://place.map.kakao.com/25839584",
    naverUrl: "https://map.naver.com/p/search/%EC%9D%B8%EC%B2%9C%EB%B6%84%EC%8B%9D%20%EA%B2%BD%EB%B6%81%20%EA%B5%AC%EB%AF%B8%EC%8B%9C%20%EC%9E%A5%EC%B2%9C%EB%A9%B4%20%EA%B0%95%EB%8F%99%EB%A1%9C%20175",
    rating: 4.4,
    reviewCount: 37,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjARBYk1vDpTAMvShsI13nbw3wXHaManRy1EoIIxRz-SZ8DGfTvbKVEk5hou40Fc5GcBYgKEGrN7zY-3-4jd7da9NLrsz5wN4RdOPQW0hj0EBJjtWUUp4xKBssFIBy_vDQhUTSmPqdnCW-4m=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-330",
    name: "일광",
    category: "갈비",
    address: "서울 동대문구 전농로 48",
    phone: "02-489-5055",
    lat: 37.56910075976985,
    lng: 127.05729314767052,
    kakaoUrl: "http://place.map.kakao.com/15597468",
    naverUrl: "https://map.naver.com/p/search/%EC%9D%BC%EA%B4%91%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EC%A0%84%EB%86%8D%EB%A1%9C%2048",
    rating: 4.2,
    reviewCount: 86,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAUyv2Nxlpd7BezHmG_XZeLRgXWu_BBIgJjROvT7Uv-ciAEkFA99glZy__msKc1r-0yEhrP_0e5NpvNEkOsl6uT-DCgf3W4kdLlQrm91xVJPfy8l15Cg3KYJYIpa6SBQSMbPTQWCPjATo9q=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "갑자기 100개 도전했습니다😳 일광쪽갈비 100개 도전먹방",
        videoUrl: "https://www.youtube.com/watch?v=GLTd77dTP4Q",
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      },
      {
        name: "성시경의 먹을텐데",
        videoTitle: "성시경의 먹을텐데 l 답십리 일광쪽갈비",
        videoUrl: "https://www.youtube.com/watch?v=nUj86InQ6dM",
        recommendNote: null
      }
    ]
  },
  {
    id: "jjy-331",
    name: "일미간장게장",
    category: "게,대게",
    address: "서울 동대문구 장한로24길 7",
    phone: "02-2242-4338",
    lat: 37.57086352866605,
    lng: 127.07139653824059,
    kakaoUrl: "http://place.map.kakao.com/21360025",
    naverUrl: "https://map.naver.com/p/search/%EC%9D%BC%EB%AF%B8%EA%B0%84%EC%9E%A5%EA%B2%8C%EC%9E%A5%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EC%9E%A5%ED%95%9C%EB%A1%9C24%EA%B8%B8%207",
    rating: 3.8,
    reviewCount: 1146,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCqKdqo9R8XgfWsGpXkJ8eODAJhb3_yWNkJpW2szYfPYPVYqejI14tibo6d-qDoKeXmeNB5dfx7l4BN4ERmJmkqRcXPH-QtCqxXhfxuXTY2jXTbT4l6lwl1dulGD1d3txC32xlGkLhJRih3vA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-333",
    name: "일미정",
    category: "한식",
    address: "인천 제물포구 신포로23번길 5",
    phone: "032-772-9595",
    lat: 37.4709624073995,
    lng: 126.624367400513,
    kakaoUrl: "http://place.map.kakao.com/16825778",
    naverUrl: "https://map.naver.com/p/search/%EC%9D%BC%EB%AF%B8%EC%A0%95%20%EC%9D%B8%EC%B2%9C%20%EC%A0%9C%EB%AC%BC%ED%8F%AC%EA%B5%AC%20%EC%8B%A0%ED%8F%AC%EB%A1%9C23%EB%B2%88%EA%B8%B8%205",
    rating: 4.3,
    reviewCount: 109,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDZceZSpiWZWWYyMMSoE86URjTI0FzKnd-0WpnPtQlvXzaAe4T8qySaaQUlXBbWg19Ehk8qwejjxm4BmNiUUb9UsUnMlo1nj2tpeu2w5DtAlMcpD9r6c2pqNz8C-2cy-JDjS2IV4Hj_vIFTC6qtq0V8mA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "인천 30년 전통 불고기 맛집🤤 육개장이 맛있다는 일미정 먹방",
        videoUrl: "https://www.youtube.com/watch?v=RiQrl1R2EFE",
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-334",
    name: "입이즐거운그만두",
    category: "분식",
    address: "충북 청주시 청원구 사뜸로 105",
    phone: "043-241-6005",
    lat: 36.67045109153862,
    lng: 127.47741118498271,
    kakaoUrl: "http://place.map.kakao.com/117414142",
    naverUrl: "https://map.naver.com/p/search/%EC%9E%85%EC%9D%B4%EC%A6%90%EA%B1%B0%EC%9A%B4%EA%B7%B8%EB%A7%8C%EB%91%90%20%EC%B6%A9%EB%B6%81%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%EC%B2%AD%EC%9B%90%EA%B5%AC%20%EC%82%AC%EB%9C%B8%EB%A1%9C%20105",
    rating: 4,
    reviewCount: 121,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCExY3SmtscINaC3ESRLQnylBpYXyQ42bGk5o2sMb_1Df4o-jwAjwnRJVRODkAKc_cx0xYE1V2AapenxeeDlxdXVr6m3KNb3apDB1hF8NVcnw2hp0MKx1QJ5Z0vX87hF8hSstNxaU1uPuR1=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-335",
    name: "자담치킨 서울가산점",
    category: "자담치킨",
    address: "서울 금천구 가산로3길 65",
    phone: "02-858-9003",
    lat: 37.47218849636557,
    lng: 126.89192301787415,
    kakaoUrl: "http://place.map.kakao.com/1069592544",
    naverUrl: "https://map.naver.com/p/search/%EC%9E%90%EB%8B%B4%EC%B9%98%ED%82%A8%20%EC%84%9C%EC%9A%B8%EA%B0%80%EC%82%B0%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B8%88%EC%B2%9C%EA%B5%AC%20%EA%B0%80%EC%82%B0%EB%A1%9C3%EA%B8%B8%2065",
    rating: 1,
    reviewCount: 1,
    photoUrl: null,
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 치킨 전문점."
      }
    ]
  },
  {
    id: "jjy-336",
    name: "자매분식",
    category: "분식",
    address: "서울 중구 을지로36길 23",
    phone: null,
    lat: 37.56554490431684,
    lng: 127.00168990629435,
    kakaoUrl: "http://place.map.kakao.com/114375270",
    naverUrl: "https://map.naver.com/p/search/%EC%9E%90%EB%A7%A4%EB%B6%84%EC%8B%9D%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EC%9D%84%EC%A7%80%EB%A1%9C36%EA%B8%B8%2023",
    rating: 4,
    reviewCount: 16,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDl8Rtr7IrqtfSPm6mfe7XJKes1-Ndl0_J0EYfol4iZALaDpF-LmBhUYUcFDq_FCLxjq4i5UaCwaKdN5oMDuaTESf-1e7qR1tR29bTyZog7bOaJCB4GFEsMeuoAPCcpDOgoCCqczAvcHQE1=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-337",
    name: "잠원떡볶이",
    category: "떡볶이",
    address: "서울 서초구 잠원로4길 45",
    phone: "02-591-4108",
    lat: 37.5131782986176,
    lng: 127.010777073395,
    kakaoUrl: "http://place.map.kakao.com/26974119",
    naverUrl: "https://map.naver.com/p/search/%EC%9E%A0%EC%9B%90%EB%96%A1%EB%B3%B6%EC%9D%B4%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EC%9E%A0%EC%9B%90%EB%A1%9C4%EA%B8%B8%2045",
    rating: 4.1,
    reviewCount: 234,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDZxAfGIWPTtFysEAIN6rn3eF8CH2CB4rRL6etFEoQmaq8DhWVKTGaEEkDY8v6YGtf597AepOD5ITVrDuesYo1zE6s-QoZAXUyhWdTRUQv16523BuZovv5iWZ2VbGbGPGHnz6oHBS2rvph0=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-339",
    name: "장꼬방묵은김치찌개전문",
    category: "찌개,전골",
    address: "서울 서초구 효령로 364",
    phone: "02-522-0035",
    lat: 37.4868868657757,
    lng: 127.0236542127275,
    kakaoUrl: "http://place.map.kakao.com/8051506",
    naverUrl: "https://map.naver.com/p/search/%EC%9E%A5%EA%BC%AC%EB%B0%A9%EB%AC%B5%EC%9D%80%EA%B9%80%EC%B9%98%EC%B0%8C%EA%B0%9C%EC%A0%84%EB%AC%B8%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%ED%9A%A8%EB%A0%B9%EB%A1%9C%20364",
    rating: 4.3,
    reviewCount: 889,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDRaOLLKLLIh6nmmWPknMViQ9wNdfxcmv1819SZegqCx7UC8BLxwaC4D1LCgpPh-r9tJ06uZQdyYW70ESSetu4k9cwwDy-e2gxjl77IeExI588mb0_PjgGlv0fgnejQ8UM7p7mnBa8HWyQWQVY=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-340",
    name: "장선생밥집",
    category: "한식",
    address: "경남 통영시 욕지면 서촌윗길 171-39",
    phone: "055-649-6174",
    lat: 34.635843690815015,
    lng: 128.26368192149516,
    kakaoUrl: "http://place.map.kakao.com/770500774",
    naverUrl: "https://map.naver.com/p/search/%EC%9E%A5%EC%84%A0%EC%83%9D%EB%B0%A5%EC%A7%91%20%EA%B2%BD%EB%82%A8%20%ED%86%B5%EC%98%81%EC%8B%9C%20%EC%9A%95%EC%A7%80%EB%A9%B4%20%EC%84%9C%EC%B4%8C%EC%9C%97%EA%B8%B8%20171-39",
    rating: 5,
    reviewCount: 2,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBPVeeeKWT125DMwFMDrhA13vKdiNiVkzUZvIu4Pbsl6cj2LphW1Z33UO11lV9wvK9m6zbmMeHffUZdGbmc8X6AbQFh1nGk3i86Pk22P4V_Hvr8P-DTIdQcCuCSbBTIfxlN4F4fXEjvQrtn5htq-ybxAQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 맛집."
      }
    ]
  },
  {
    id: "jjy-341",
    name: "장수식당",
    category: "한식",
    address: "서울 송파구 삼전로 95",
    phone: "02-415-4148",
    lat: 37.50716017362883,
    lng: 127.08981416640383,
    kakaoUrl: "http://place.map.kakao.com/11170449",
    naverUrl: "https://map.naver.com/p/search/%EC%9E%A5%EC%88%98%EC%8B%9D%EB%8B%B9%20%EC%84%9C%EC%9A%B8%20%EC%86%A1%ED%8C%8C%EA%B5%AC%20%EC%82%BC%EC%A0%84%EB%A1%9C%2095",
    rating: 4.4,
    reviewCount: 196,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCetytZ2xW-SFnozgQ0qVhOfmTWhmkDeEFaoZT8wVzefBvI22Ap0de9KSZKT4vsioY9kUTGBOEGqMQDpXIO3XRCw7Q1qbJY8t8h0aBvNL5KISnIjmmKq2gnnQUCOIV_OpxF7LZwNtn8uyJMoJk=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "비주얼 대박👍줄서서 먹는 김치삼겹살..? 삼전동 장수식당 특이한 김치삼겹 먹방",
        videoUrl: "https://www.youtube.com/watch?v=6O0fYDDFJbk",
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      },
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "잠실 인근에서 김치삼겹살을 선보이는 곳으로 소개됐다."
      }
    ]
  },
  {
    id: "jjy-342",
    name: "장수회관",
    category: "육류,고기",
    address: "서울 동대문구 전농로16길 16",
    phone: "02-2243-5678",
    lat: 37.5781877234093,
    lng: 127.058252186758,
    kakaoUrl: "http://place.map.kakao.com/9930398",
    naverUrl: "https://map.naver.com/p/search/%EC%9E%A5%EC%88%98%ED%9A%8C%EA%B4%80%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EC%A0%84%EB%86%8D%EB%A1%9C16%EA%B8%B8%2016",
    rating: 4.2,
    reviewCount: 262,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAC89v76WyEYhVCE3YNdSygH8qm2jw5BJY3z3M_c9V5PT0ZozRhetGi2OAXp52lpdFNRcgmKTDxOFe5ImB5JoTUX-dgA9GnNG3dodCdqzRoqQrcWC5cWanA4ZgKl3FliU9XIEVnR2kjuxrvRA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-343",
    name: "장터국수",
    category: "국수",
    address: "전남광주통합특별시 동구 제봉로194번길 15",
    phone: "010-3610-6894",
    lat: 35.1544047705296,
    lng: 126.91711697543268,
    kakaoUrl: "http://place.map.kakao.com/18936696",
    naverUrl: "https://map.naver.com/p/search/%EC%9E%A5%ED%84%B0%EA%B5%AD%EC%88%98%20%EC%A0%84%EB%82%A8%EA%B4%91%EC%A3%BC%ED%86%B5%ED%95%A9%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EB%8F%99%EA%B5%AC%20%EC%A0%9C%EB%B4%89%EB%A1%9C194%EB%B2%88%EA%B8%B8%2015",
    rating: 4,
    reviewCount: 8,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjACANJS7EeHY2_gdjPqo9v2RRKf7ovCXeRTeb2nopCzz_gnpUYLb6iU9A_aBDZXIW1bH5y9K-uV-NiNGNahHo_3Hha7nQns2n43DHFnTuQ-eAVSn6hiGaQnMILtITj9bnQ24q8RW62b7fod=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "단돈 1000원 국수..???😳 광주 장터국수 전메뉴 먹방",
        videoUrl: "https://www.youtube.com/watch?v=4Cujb7BvlEI",
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-344",
    name: "전농곱창싱",
    category: "곱창,막창",
    address: "서울 동대문구 전농로14길 14",
    phone: "02-2248-6191",
    lat: 37.5761406676034,
    lng: 127.058246063905,
    kakaoUrl: "http://place.map.kakao.com/12998369",
    naverUrl: "https://map.naver.com/p/search/%EC%A0%84%EB%86%8D%EA%B3%B1%EC%B0%BD%EC%8B%B1%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EC%A0%84%EB%86%8D%EB%A1%9C14%EA%B8%B8%2014",
    rating: 4.5,
    reviewCount: 76,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAGH4VxSNQNO-zVaYA-qoPDBmDUG4rHydP_v7sst0cjLr1xwej8Tgg5j2j-Mg2jUzAzj_oidItyLZoKsrVOFnhMJGrg50Q26uFX14sd0fFyEjN9Js5jXMU6eH99O_5hPQ3VB72sfvP0U0QyT4K4p6QM6w=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-345",
    name: "전원분식",
    category: "분식",
    address: "경남 통영시 욕지면 서촌아랫길 130",
    phone: "010-9240-3740",
    lat: 34.63484919842879,
    lng: 128.26362321614724,
    kakaoUrl: "http://place.map.kakao.com/283087337",
    naverUrl: "https://map.naver.com/p/search/%EC%A0%84%EC%9B%90%EB%B6%84%EC%8B%9D%20%EA%B2%BD%EB%82%A8%20%ED%86%B5%EC%98%81%EC%8B%9C%20%EC%9A%95%EC%A7%80%EB%A9%B4%20%EC%84%9C%EC%B4%8C%EC%95%84%EB%9E%AB%EA%B8%B8%20130",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-346",
    name: "전주맛자랑",
    category: "한식",
    address: "서울 강남구 논현로151길 26",
    phone: "02-514-7992",
    lat: 37.5199154116172,
    lng: 127.02610801994695,
    kakaoUrl: "http://place.map.kakao.com/9934784",
    naverUrl: "https://map.naver.com/p/search/%EC%A0%84%EC%A3%BC%EB%A7%9B%EC%9E%90%EB%9E%91%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EB%85%BC%ED%98%84%EB%A1%9C151%EA%B8%B8%2026",
    rating: 4.5,
    reviewCount: 74,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAiafK-uPsvA779gZUMKSmyYgVSygCdXYWXwwSdp0y8N-nYqrS3S43chz95wVlU4yEiJznNIGmtYEz7g40jt35rPbT3hyF8hSFAzjYfwlr6U1r9FpOv2gIUSJYIZRlOy4Nc5mq0pMfm1_rChQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-347",
    name: "전주비빔밥",
    category: "한식",
    address: "서울 동대문구 고산자로36길 3",
    phone: "02-965-5608",
    lat: 37.5791532404122,
    lng: 127.03951115266412,
    kakaoUrl: "http://place.map.kakao.com/682548398",
    naverUrl: "https://map.naver.com/p/search/%EC%A0%84%EC%A3%BC%EB%B9%84%EB%B9%94%EB%B0%A5%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EA%B3%A0%EC%82%B0%EC%9E%90%EB%A1%9C36%EA%B8%B8%203",
    rating: 3.7,
    reviewCount: 102,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjA5Y_6AVVu6ZjxB2iT-TZ0IVT8O-NwWBKCOHjNfHGYCANfHhvN6tdZKSf1GQYXkGpvbyWr5LYCHBd8gOZI1oRZqu0VZuIGGBwr9cK4iu0fDNyRZEeUu0i1SwRr2jh9wONfTWa5mImxoQyqjzw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-348",
    name: "전주전집",
    category: "한식",
    address: "서울 동작구 동작대로7길 19",
    phone: "010-4660-7391",
    lat: 37.4796525493038,
    lng: 126.98064883021,
    kakaoUrl: "http://place.map.kakao.com/8078768",
    naverUrl: "https://map.naver.com/p/search/%EC%A0%84%EC%A3%BC%EC%A0%84%EC%A7%91%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EC%9E%91%EA%B5%AC%20%EB%8F%99%EC%9E%91%EB%8C%80%EB%A1%9C7%EA%B8%B8%2019",
    rating: 4.1,
    reviewCount: 2321,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBJshhMAyHkBCO5Z0V2c9iTj-g_GmGV5RiEYnLVpzp5FxPQgXx03Ykp4ATGsh-qNKKCQHjuoI501gHhqQdvQCcapJI6-bP4ulgIKfuG-FctsS6mO-exSM5bKJtMkLoPbmXo_762KMgDmT3VLPjhwgq8ow=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 맛집."
      }
    ]
  },
  {
    id: "jjy-349",
    name: "전주집",
    category: "해물,생선",
    address: "서울 종로구 종로40가길 5",
    phone: "02-2267-6897",
    lat: 37.57025875375017,
    lng: 127.00637971338996,
    kakaoUrl: "http://place.map.kakao.com/9934552",
    naverUrl: "https://map.naver.com/p/search/%EC%A0%84%EC%A3%BC%EC%A7%91%20%EC%84%9C%EC%9A%B8%20%EC%A2%85%EB%A1%9C%EA%B5%AC%20%EC%A2%85%EB%A1%9C40%EA%B0%80%EA%B8%B8%205",
    rating: 4.3,
    reviewCount: 592,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjC_q8DqgEuotwO7I_kWHbyJthx_mRfTG_zwEy-3pU4ez5nGMXJcb_flFUBHsk3o9F9IOP31n5VYlIjbykeF6jQmGB-GmJt1Qw7ABkeg6WRcuV7dDIHC42T50tZqlCHGDpYmvya6MhvRTWhEqnigyjsOyA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "백반 먹으러 새벽 6시에 찾아갔습니다🥺 동대문 평화시장 찐맛집 전주집 먹방",
        videoUrl: "https://www.youtube.com/watch?v=Eb5AYxy_7ag",
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-350",
    name: "전통춘천닭갈비",
    category: "닭요리",
    address: "경기 성남시 분당구 미금일로80번길 9",
    phone: "031-716-0342",
    lat: 37.3468532250388,
    lng: 127.110837067756,
    kakaoUrl: "http://place.map.kakao.com/20617331",
    naverUrl: "https://map.naver.com/p/search/%EC%A0%84%ED%86%B5%EC%B6%98%EC%B2%9C%EB%8B%AD%EA%B0%88%EB%B9%84%20%EA%B2%BD%EA%B8%B0%20%EC%84%B1%EB%82%A8%EC%8B%9C%20%EB%B6%84%EB%8B%B9%EA%B5%AC%20%EB%AF%B8%EA%B8%88%EC%9D%BC%EB%A1%9C80%EB%B2%88%EA%B8%B8%209",
    rating: 4.3,
    reviewCount: 183,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBxKgM90rDT0HzAsT4gvADKEsEEv2TP1HJpr36oKx_CP073y028VaHhn3xxXyeRq2Kdixj4urdGQJSLbuVDfl6hW9IAE_D4Rsr4AxacjWBCx8TDMf3edH_FILr3x7qwuwS6BR_zOMw1mV-9-M_LxesutA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-351",
    name: "정인면옥 본점",
    category: "냉면",
    address: "서울 영등포구 국회대로76길 10",
    phone: "02-2683-2615",
    lat: 37.53077816623998,
    lng: 126.92157407940762,
    kakaoUrl: "http://place.map.kakao.com/23699720",
    naverUrl: "https://map.naver.com/p/search/%EC%A0%95%EC%9D%B8%EB%A9%B4%EC%98%A5%20%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%98%81%EB%93%B1%ED%8F%AC%EA%B5%AC%20%EA%B5%AD%ED%9A%8C%EB%8C%80%EB%A1%9C76%EA%B8%B8%2010",
    rating: 4,
    reviewCount: 2770,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBZtT9aOSiGUlxcbysplbPvNPOnDYlN8v9rhct4CKhaMUdvwVCE8yCzfABlBD9dNwVxb-WKOYHPTvtn8eJt75Ixm9gj6u5kaBpcbbeeNeq-nyry058iLfncs30LtA3r2MHcB-DUuwENlv1uuQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-352",
    name: "정토스트",
    category: "토스트",
    address: "충북 청주시 청원구 향군로41번길 22",
    phone: null,
    lat: 36.6488324967126,
    lng: 127.485365361666,
    kakaoUrl: "http://place.map.kakao.com/2130406169",
    naverUrl: "https://map.naver.com/p/search/%EC%A0%95%ED%86%A0%EC%8A%A4%ED%8A%B8%20%EC%B6%A9%EB%B6%81%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%EC%B2%AD%EC%9B%90%EA%B5%AC%20%ED%96%A5%EA%B5%B0%EB%A1%9C41%EB%B2%88%EA%B8%B8%2022",
    rating: 4.5,
    reviewCount: 2,
    photoUrl: null,
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 패스트푸드 맛집."
      }
    ]
  },
  {
    id: "jjy-354",
    name: "제일곱창 본점",
    category: "곱창,막창",
    address: "서울 성동구 고산자로 281",
    phone: "010-8690-9792",
    lat: 37.5648519413304,
    lng: 127.03608646516,
    kakaoUrl: "http://place.map.kakao.com/407522227",
    naverUrl: "https://map.naver.com/p/search/%EC%A0%9C%EC%9D%BC%EA%B3%B1%EC%B0%BD%20%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%84%B1%EB%8F%99%EA%B5%AC%20%EA%B3%A0%EC%82%B0%EC%9E%90%EB%A1%9C%20281",
    rating: 4.4,
    reviewCount: 744,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAM3SfRMCaKP88aw-3NoA-JnqJazN6val77_hIomIZWclMChn8HjnJoPN8fmie-Gi1fOrulLmPFnWxhSTLcOQaLvC5CUP0ti2scADXxAdCUlc7ir3QC6Og7GIKbKGobGtxXj6dgmMPwC3V0J32-umrt=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-355",
    name: "제일분식",
    category: "분식",
    address: "서울 강북구 숭인로 65-3",
    phone: "02-985-7333",
    lat: 37.61268308933343,
    lng: 127.02897191771599,
    kakaoUrl: "http://place.map.kakao.com/16624169",
    naverUrl: "https://map.naver.com/p/search/%EC%A0%9C%EC%9D%BC%EB%B6%84%EC%8B%9D%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%B6%81%EA%B5%AC%20%EC%88%AD%EC%9D%B8%EB%A1%9C%2065-3",
    rating: 4.1,
    reviewCount: 329,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDqgdXffu1Upp761yQLcQmC80Ifuf34uUk8pREx3FXopk6_X8cunlfVaHd_pjt-J58Hi386pireRGqliwc-ByZBL5laN67baHgs9OqO0oLoC-Zx3XhTb2MyssZvm0EGTs2zhJb6O1Obexj7r8AzErB9eQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "최애 떡볶이집 다시 방문했더니..👊🏻 미아동 40년전통 제일분식 먹방",
        videoUrl: "https://www.youtube.com/watch?v=Lm9JRlYxFG4",
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-358",
    name: "제주라면 2호점",
    category: "분식",
    address: "제주특별자치도 제주시 서해안로 210",
    phone: "0507-1439-9666",
    lat: 33.50694524396482,
    lng: 126.46987506474804,
    kakaoUrl: "http://place.map.kakao.com/334649458",
    naverUrl: "https://map.naver.com/p/search/%EC%A0%9C%EC%A3%BC%EB%9D%BC%EB%A9%B4%202%ED%98%B8%EC%A0%90%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EC%84%9C%ED%95%B4%EC%95%88%EB%A1%9C%20210",
    rating: 3.5,
    reviewCount: 36,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAzxAzd2P_-WDjFtWEnrkt6eeHE2CvHEHepq4803YRBmAegyzLBwMxqT0h1Z89X1umVjJVbUsCzJ64bxFpsGRJQ43tmMgEMsC5V0mpXtJ9E8tTeUXw9lS9gaZhd-T3CFemV_CDU383RIaaDxUTOHKpJ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-359",
    name: "빨간오뎅보금자리",
    category: "분식",
    address: "충북 제천시 의병대로18길 2",
    phone: "043-643-6395",
    lat: 37.1355411783539,
    lng: 128.211944287022,
    kakaoUrl: "http://place.map.kakao.com/353997698",
    naverUrl: "https://map.naver.com/p/search/%EB%B9%A8%EA%B0%84%EC%98%A4%EB%8E%85%EB%B3%B4%EA%B8%88%EC%9E%90%EB%A6%AC%20%EC%B6%A9%EB%B6%81%20%EC%A0%9C%EC%B2%9C%EC%8B%9C%20%EC%9D%98%EB%B3%91%EB%8C%80%EB%A1%9C18%EA%B8%B8%202",
    rating: 3.7,
    reviewCount: 42,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD7ilroUpYdgNvsIKzeu1_Wv5SS19k80peqFL56fQHbqlDmVOXE6t3f55DKBPaQxb3GaZCOkOWRLg_HgSPZmHR9C3YoBrDJbvBAdflqr8ET3f1PdngpYKkHgYQzrc3RH0EvdUE6O8KbDaNsCYLWLUex=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-360",
    name: "조가네족발왕",
    category: "족발,보쌈",
    address: "서울 동작구 동작대로23길 21",
    phone: "02-522-2777",
    lat: 37.4840746836425,
    lng: 126.980543669372,
    kakaoUrl: "http://place.map.kakao.com/1930777703",
    naverUrl: "https://map.naver.com/p/search/%EC%A1%B0%EA%B0%80%EB%84%A4%EC%A1%B1%EB%B0%9C%EC%99%95%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EC%9E%91%EA%B5%AC%20%EB%8F%99%EC%9E%91%EB%8C%80%EB%A1%9C23%EA%B8%B8%2021",
    rating: 4.4,
    reviewCount: 24,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBWM0On-xoIxByZbIS7MDaGvpd4StVHFqC6p6ImftgkWGC0rUgWiYGXiWuh7wJvWzWaaYYD0Ff0HaC6MUXgnG8ob6XLljz6iaL1atJ1aB6K7eGlvKO_7HL3optsAyADiZ_IuPLdOfTH6o7crqI=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 족발·보쌈 맛집."
      }
    ]
  },
  {
    id: "jjy-361",
    name: "조개사랑",
    category: "조개",
    address: "충남 당진시 신평면 삽교천3길 84",
    phone: "041-362-3370",
    lat: 36.89024490589739,
    lng: 126.82443470575969,
    kakaoUrl: "http://place.map.kakao.com/15960884",
    naverUrl: "https://map.naver.com/p/search/%EC%A1%B0%EA%B0%9C%EC%82%AC%EB%9E%91%20%EC%B6%A9%EB%82%A8%20%EB%8B%B9%EC%A7%84%EC%8B%9C%20%EC%8B%A0%ED%8F%89%EB%A9%B4%20%EC%82%BD%EA%B5%90%EC%B2%9C3%EA%B8%B8%2084",
    rating: 4.6,
    reviewCount: 12,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjB9Ymf8cuHHuLSRc9Fw_vHBoyUJ0jNMeQL2NLIYPZBXF1cvX6L37lQ38b9-QZEhP5kHMpPDR0Hu8kZ8Cva7AFztSr4M13VJ0ShBeXL4o97eM_ibzDjEiIHwHB5zebD4BeSInqE6s06JS5HPnq4ucN8wgA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      }
    ]
  },
  {
    id: "jjy-362",
    name: "족발신선생 선릉김승수점",
    category: "족발신선생",
    address: "서울 강남구 역삼로63길 24",
    phone: "02-6952-4646",
    lat: 37.5027805604381,
    lng: 127.052000534347,
    kakaoUrl: "http://place.map.kakao.com/1361454624",
    naverUrl: "https://map.naver.com/p/search/%EC%A1%B1%EB%B0%9C%EC%8B%A0%EC%84%A0%EC%83%9D%20%EC%84%A0%EB%A6%89%EA%B9%80%EC%8A%B9%EC%88%98%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%97%AD%EC%82%BC%EB%A1%9C63%EA%B8%B8%2024",
    rating: 3,
    reviewCount: 3,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAuampxTKPt_YRmnbkOvl3zCvCk25V-gg3EihAgakdXB5mw1r5hUguG_J25krhe_BhuHFJbX1x_OLZbbWZgMzDNagb6IDCYp9V7r-1dce5m4qCtI93vJMWWMqFkLb0PaLcJQ630v4rBHYgb=s4800-w300",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 족발·보쌈 맛집."
      }
    ]
  },
  {
    id: "jjy-364",
    name: "중앙식당",
    category: "해물,생선",
    address: "서울 중구 남대문시장길 22-12",
    phone: "02-752-2892",
    lat: 37.5597799176267,
    lng: 126.977078804427,
    kakaoUrl: "http://place.map.kakao.com/8081393",
    naverUrl: "https://map.naver.com/p/search/%EC%A4%91%EC%95%99%EC%8B%9D%EB%8B%B9%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EB%82%A8%EB%8C%80%EB%AC%B8%EC%8B%9C%EC%9E%A5%EA%B8%B8%2022-12",
    rating: 4,
    reviewCount: 851,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCdUdecl_7NPFicR0D6oLWF1aJhST5sM_LuJ1LI10fUWuuB-2GbZ7GOR3LidIrORd76gYE96nr6S1zPFFYssS1V7ntThwI-qYHRP-7g0O3XcBDuesTWFw3nbqNSbCMr59hvTJ33AC0RaOEaADcQcUDRpQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-365",
    name: "중앙해장",
    category: "해장국",
    address: "서울 강남구 영동대로86길 17",
    phone: "02-558-7905",
    lat: 37.508273597184,
    lng: 127.065472540919,
    kakaoUrl: "http://place.map.kakao.com/27531028",
    naverUrl: "https://map.naver.com/p/search/%EC%A4%91%EC%95%99%ED%95%B4%EC%9E%A5%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%98%81%EB%8F%99%EB%8C%80%EB%A1%9C86%EA%B8%B8%2017",
    rating: 4.3,
    reviewCount: 5758,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBj-eOhxSbqNqU9Soxm34XW5sKExAV3HSLnQr1iUEkBRtwz52Uk0ruKepIdJVBIwnbJbwuYdlIw8C7KpmYfgUakmW8WVG8JKKwIcskpt7xM3gIkZ8zu09N942FEq9DAKZjFHajFjserBv9ebw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "줄서서 먹는 인생 맛집..?!🥺중앙해장🔥 곱창만 3kg 들어간 곱창전골 먹방",
        videoUrl: "https://www.youtube.com/watch?v=oIekVa6OA-8",
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-366",
    name: "정궁중화요리",
    category: "중국요리",
    address: "서울 동대문구 약령시로 116",
    phone: "02-963-4210",
    lat: 37.5829155181329,
    lng: 127.042872227605,
    kakaoUrl: "http://place.map.kakao.com/15810574",
    naverUrl: "https://map.naver.com/p/search/%EC%A0%95%EA%B6%81%EC%A4%91%ED%99%94%EC%9A%94%EB%A6%AC%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EC%95%BD%EB%A0%B9%EC%8B%9C%EB%A1%9C%20116",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-367",
    name: "중화호반닭갈비막국수 본점",
    category: "닭요리",
    address: "서울 중랑구 봉화산로 20",
    phone: "02-439-1656",
    lat: 37.601447313284424,
    lng: 127.07637673811878,
    kakaoUrl: "http://place.map.kakao.com/26989775",
    naverUrl: "https://map.naver.com/p/search/%EC%A4%91%ED%99%94%ED%98%B8%EB%B0%98%EB%8B%AD%EA%B0%88%EB%B9%84%EB%A7%89%EA%B5%AD%EC%88%98%20%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EB%9E%91%EA%B5%AC%20%EB%B4%89%ED%99%94%EC%82%B0%EB%A1%9C%2020",
    rating: 4,
    reviewCount: 296,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDgbXGetSumXco0_sGujPNKok4Ww4nnqcuOtHpn_Z4ZmKKlINKXnbJciDxF2gQORzMXL_rZkzXLa7lBIMzpoUpii0sbHVlrwwhYy4OFPizZmi88PFD_yQtDvLWbevDHlWHzQFN-FRKek0PV=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-368",
    name: "줘마양다리구이 본점",
    category: "중국요리",
    address: "서울 영등포구 도림천로11길 13",
    phone: "010-6797-6088",
    lat: 37.4915784382992,
    lng: 126.897240229752,
    kakaoUrl: "http://place.map.kakao.com/14550110",
    naverUrl: "https://map.naver.com/p/search/%EC%A4%98%EB%A7%88%EC%96%91%EB%8B%A4%EB%A6%AC%EA%B5%AC%EC%9D%B4%20%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%98%81%EB%93%B1%ED%8F%AC%EA%B5%AC%20%EB%8F%84%EB%A6%BC%EC%B2%9C%EB%A1%9C11%EA%B8%B8%2013",
    rating: 4.1,
    reviewCount: 477,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAD-FdSObJMV1Wwb_4s_mjb8Mcro-Y9ZUafna17xbsMCUiZnPSRk5Y_OnPEFCudfXcVagWsfDe7jHE7ERLzLJZyOPiJqHuO0_ODSqXLgE8esemMRnTi3dfmI_3abpVvAr6F7liDrLRiiBaKnA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      },
      {
        name: "최자로드",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "대림역 인근의 양꼬치·양다리구이 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "jjy-369",
    name: "즉떡이네",
    category: "떡볶이",
    address: "서울 강동구 천호옛길 96",
    phone: "02-477-9267",
    lat: 37.5371357378669,
    lng: 127.126148353868,
    kakaoUrl: "http://place.map.kakao.com/27245818",
    naverUrl: "https://map.naver.com/p/search/%EC%A6%89%EB%96%A1%EC%9D%B4%EB%84%A4%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%8F%99%EA%B5%AC%20%EC%B2%9C%ED%98%B8%EC%98%9B%EA%B8%B8%2096",
    rating: 3.3,
    reviewCount: 3,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCDGUtqKD4Y94O_v6sA2o55Q4RioEwZczo6vkheklnIsfGOLy0OvGEtoMWx8JzAxfXeTVLkSNU8ciqpQOCes7q83z0tlEwSKAO5xXwQBO2zvyBEmPWEXEIYK7UeP0zzK3_BxyRQ7JrcWJM-Sw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-370",
    name: "지린성",
    category: "중국요리",
    address: "전북특별자치도 군산시 미원로 87",
    phone: "063-467-2905",
    lat: 35.97965477064132,
    lng: 126.71396085989238,
    kakaoUrl: "http://place.map.kakao.com/421048086",
    naverUrl: "https://map.naver.com/p/search/%EC%A7%80%EB%A6%B0%EC%84%B1%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EA%B5%B0%EC%82%B0%EC%8B%9C%20%EB%AF%B8%EC%9B%90%EB%A1%9C%2087",
    rating: 3.5,
    reviewCount: 3583,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAWVAXNAJoZw1HQrsSUWd3fXaQpS9ZkcJtVBrXnkcUVU9QazpytTdVUI2k8pMSg957IPDjLwzojNQ99vCR6yND0ntq31j0vaNsbmOu4lyektPtb1uQuWBBKfRoVO155qNH0MxQh_hJp-d-ZyEw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-371",
    name: "지미존스 서강대점",
    category: "샌드위치",
    address: "서울 마포구 백범로 28",
    phone: "02-712-2024",
    lat: 37.5520644956517,
    lng: 126.93697434513,
    kakaoUrl: "http://place.map.kakao.com/937173939",
    naverUrl: "https://map.naver.com/p/search/%EC%A7%80%EB%AF%B8%EC%A1%B4%EC%8A%A4%20%EC%84%9C%EA%B0%95%EB%8C%80%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EB%B0%B1%EB%B2%94%EB%A1%9C%2028",
    rating: 4.3,
    reviewCount: 3,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBs67qzMR4B-YzlaRsnciK31MuRY8K8YGv-WUk8s7qaZcowV8NEFqNZ0Ookf8Zy4DO45eTinse5j_9V2LwplgPUo0SpxMSMb0TD2XUMmOjuoDU8ZB64rHbcgpfeqNxuAR2MzMa7MW68pjJFF5UJIzNi=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 패스트푸드 맛집."
      }
    ]
  },
  {
    id: "jjy-372",
    name: "지하식당",
    category: "중국요리",
    address: "전남광주통합특별시 서구 천변좌로 154",
    phone: "062-364-1448",
    lat: 35.15910496062275,
    lng: 126.89560551144865,
    kakaoUrl: "http://place.map.kakao.com/8584787",
    naverUrl: "https://map.naver.com/p/search/%EC%A7%80%ED%95%98%EC%8B%9D%EB%8B%B9%20%EC%A0%84%EB%82%A8%EA%B4%91%EC%A3%BC%ED%86%B5%ED%95%A9%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%84%9C%EA%B5%AC%20%EC%B2%9C%EB%B3%80%EC%A2%8C%EB%A1%9C%20154",
    rating: 3.7,
    reviewCount: 40,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDjZcY5S5O0qQSfiq9u2iu2YFKQypZkA3U0s8J1e56mcCOmsLJVetjXpuXRxZ7_G1y_ayoqEkiae4-LwqH7f2OR1-S9esl8q4LmcHVyFoV99rkdo5J_iqpW3buEv5TAcVxApXoJUP-ZntnX8g=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-373",
    name: "지호한방삼계탕 구리직영점",
    category: "지호한방삼계탕",
    address: "경기 구리시 벌말로80번길 82",
    phone: "031-567-3339",
    lat: 37.5813144509714,
    lng: 127.14990576274,
    kakaoUrl: "http://place.map.kakao.com/99607938",
    naverUrl: "https://map.naver.com/p/search/%EC%A7%80%ED%98%B8%ED%95%9C%EB%B0%A9%EC%82%BC%EA%B3%84%ED%83%95%20%EA%B5%AC%EB%A6%AC%EC%A7%81%EC%98%81%EC%A0%90%20%EA%B2%BD%EA%B8%B0%20%EA%B5%AC%EB%A6%AC%EC%8B%9C%20%EB%B2%8C%EB%A7%90%EB%A1%9C80%EB%B2%88%EA%B8%B8%2082",
    rating: 4.3,
    reviewCount: 95,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCcAWHSEKzmMzG4NmMWx19fqm8zGqy8dyv381LAKXcffsPeu7wN79GOJJpyGoWJDGMwBusXJRs64TcM9tQTygU1fF_uzJsWUEp-LON3fc7CeXz1JOtklc0O8v3F9jyqg6-NPlsl-e6lvTdaCA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 찜·탕 맛집."
      }
    ]
  },
  {
    id: "jjy-374",
    name: "진갈비",
    category: "갈비",
    address: "전북특별자치도 군산시 구영1길 108-7",
    phone: "063-446-7707",
    lat: 35.9893817424088,
    lng: 126.709075243797,
    kakaoUrl: "http://place.map.kakao.com/9986937",
    naverUrl: "https://map.naver.com/p/search/%EC%A7%84%EA%B0%88%EB%B9%84%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EA%B5%B0%EC%82%B0%EC%8B%9C%20%EA%B5%AC%EC%98%811%EA%B8%B8%20108-7",
    rating: 4.1,
    reviewCount: 642,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBd0NaOfUYbSIC5qaH9z0HPm78ebyXN2jGMIkKBvQx3SAUT2KuDsrLk7n3826u0L9uCGlcsGYfXAYarncl6-qI_8otCjQiObUDilXKDMqWAooU0tINNhRx94XTp29bGmvDj9q5K1vEHTo-sGX4=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-375",
    name: "진미집 본점",
    category: "실내포장마차",
    address: "전북특별자치도 전주시 완산구 노송여울2길 106",
    phone: "063-254-0460",
    lat: 35.8268523465932,
    lng: 127.142416369565,
    kakaoUrl: "http://place.map.kakao.com/10082639",
    naverUrl: "https://map.naver.com/p/search/%EC%A7%84%EB%AF%B8%EC%A7%91%20%EB%B3%B8%EC%A0%90%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%84%EC%A3%BC%EC%8B%9C%20%EC%99%84%EC%82%B0%EA%B5%AC%20%EB%85%B8%EC%86%A1%EC%97%AC%EC%9A%B82%EA%B8%B8%20106",
    rating: 4.1,
    reviewCount: 878,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBglstU4mfFnxNidNHsDCpPZSrwH9Q42a_9iK07Rlw3-4U-gGxuqBANE4c_2Nq1vVd44H9mpp_iYnQ_2bMM_X-LAloickfBR1uPbhxR0XD4AaTyDMdHW8WaGPRIHncoPUbVs7CdoiRt3DauH9T2B4IyOw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-376",
    name: "진미평양냉면 별관",
    category: "냉면",
    address: "서울 강남구 학동로 305-3",
    phone: "02-515-3469",
    lat: 37.5161357904841,
    lng: 127.036047158128,
    kakaoUrl: "http://place.map.kakao.com/27584230",
    naverUrl: "https://map.naver.com/p/search/%EC%A7%84%EB%AF%B8%ED%8F%89%EC%96%91%EB%83%89%EB%A9%B4%20%EB%B3%84%EA%B4%80%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%ED%95%99%EB%8F%99%EB%A1%9C%20305-3",
    rating: 4.2,
    reviewCount: 3517,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjC1O1KGHn-qu-rPKwRlzrKdWcnSO-LgZpAyA-JOcR6PpQbH_yDCnopJp5l2MrBPR1cVxTdoNl3gu7SZJgTwkqGtzE_ugFQH94c07h0cWUq8G6Y-aReKsgtKuSSVCwgns3iYnXN77sw57Q-d=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      },
      {
        name: "성시경의 먹을텐데",
        videoTitle: null,
        videoUrl: null,
        recommendNote: null
      }
    ]
  },
  {
    id: "jjy-377",
    name: "진아네떡볶이",
    category: "떡볶이",
    address: "서울 중구 퇴계로56길 52",
    phone: "02-2275-8078",
    lat: 37.561569591509006,
    lng: 127.0055142571948,
    kakaoUrl: "http://place.map.kakao.com/20745508",
    naverUrl: "https://map.naver.com/p/search/%EC%A7%84%EC%95%84%EB%84%A4%EB%96%A1%EB%B3%B6%EC%9D%B4%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%ED%87%B4%EA%B3%84%EB%A1%9C56%EA%B8%B8%2052",
    rating: 4.2,
    reviewCount: 143,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDFVeF40_X5DzeWC1i2UURmA9IHRIQ7Ho6_uT2acbFwzhATwKk3a9-ul_vrgidrq-t8J6IldtP_6zaUtTmseAMM0_ndElGpICS3pccf8ZwqgkUN3f_zhtCaPhzVLWhEq7PAsztz2GBnDYJtiw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "여기있는 떡볶이 전부 주세요!😠 동국대생들의 찐맛집 진아네떡볶이 먹방",
        videoUrl: "https://www.youtube.com/watch?v=koQmU0V3AbU",
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-378",
    name: "오뎅이랑정종",
    category: "오뎅바",
    address: "서울 관악구 남현1길 58",
    phone: "02-581-8950",
    lat: 37.475749368064,
    lng: 126.980600093289,
    kakaoUrl: "http://place.map.kakao.com/21330749",
    naverUrl: "https://map.naver.com/p/search/%EC%98%A4%EB%8E%85%EC%9D%B4%EB%9E%91%EC%A0%95%EC%A2%85%20%EC%84%9C%EC%9A%B8%20%EA%B4%80%EC%95%85%EA%B5%AC%20%EB%82%A8%ED%98%841%EA%B8%B8%2058",
    rating: 4.1,
    reviewCount: 49,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD1_YF2QVJTwd7hFrZ5K7jpdtZ5WfXaTi7GuP5vevSMBjYgvGoJX83vvh-jblBzbgymKMQlj5zejl4tov4YwmlR22SpFXB5c2XZffKYJyfG-3KCzaUYd1SpSFJ6y4ELy8J3HQQvt44O-tVJ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 야식 맛집."
      }
    ]
  },
  {
    id: "jjy-379",
    name: "짬뽕일상",
    category: "중국요리",
    address: "경기 화성시 만세구 향남읍 토성로 33",
    phone: "031-366-1318",
    lat: 37.1283546058785,
    lng: 126.93304549635,
    kakaoUrl: "http://place.map.kakao.com/144542448",
    naverUrl: "https://map.naver.com/p/search/%EC%A7%AC%EB%BD%95%EC%9D%BC%EC%83%81%20%EA%B2%BD%EA%B8%B0%20%ED%99%94%EC%84%B1%EC%8B%9C%20%EB%A7%8C%EC%84%B8%EA%B5%AC%20%ED%96%A5%EB%82%A8%EC%9D%8D%20%ED%86%A0%EC%84%B1%EB%A1%9C%2033",
    rating: 4.4,
    reviewCount: 44,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCQ2oGb6fQe1dvW5RV_X5rQfqBwRN21ydnS_KSZIhVX5DYkGFkMEiNKAWBdq2_cYXJFEO_P9NTfnqz0nK8q6lIpHH1w3nVKUPovDJgrPpNPVxE5wkh3W1XHCi3siZujAE-1v-1mU_vxxDK8=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-380",
    name: "찌마기 송파문정점",
    category: "조개",
    address: "서울 송파구 새말로 146-1",
    phone: "02-3402-0663",
    lat: 37.4838640671135,
    lng: 127.130129080985,
    kakaoUrl: "http://place.map.kakao.com/1141143764",
    naverUrl: "https://map.naver.com/p/search/%EC%B0%8C%EB%A7%88%EA%B8%B0%20%EC%86%A1%ED%8C%8C%EB%AC%B8%EC%A0%95%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%86%A1%ED%8C%8C%EA%B5%AC%20%EC%83%88%EB%A7%90%EB%A1%9C%20146-1",
    rating: 4.4,
    reviewCount: 140,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjB3RTOqOPRfoHfpQypKZM3NJWL_S8Cusmr7khdAQNaYxAzeNnpMc0Uqv6Zwi4_va-YfHrgE3wVNu4es9s4cLWCLGfgpAaunyM0ai3yqMkb632dYqrFwbV7suRZLqjNk7ROh8XlpdCcuslMSvA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 찜·탕 맛집."
      }
    ]
  },
  {
    id: "jjy-381",
    name: "100년가 공화춘 천안삼거리휴게소 서울방향점",
    category: "중국요리",
    address: "충남 천안시 동남구 쉼1길 42",
    phone: "041-551-2480",
    lat: 36.78760192067439,
    lng: 127.17361336157182,
    kakaoUrl: "http://place.map.kakao.com/2041008961",
    naverUrl: "https://map.naver.com/p/search/100%EB%85%84%EA%B0%80%20%EA%B3%B5%ED%99%94%EC%B6%98%20%EC%B2%9C%EC%95%88%EC%82%BC%EA%B1%B0%EB%A6%AC%ED%9C%B4%EA%B2%8C%EC%86%8C%20%EC%84%9C%EC%9A%B8%EB%B0%A9%ED%96%A5%EC%A0%90%20%EC%B6%A9%EB%82%A8%20%EC%B2%9C%EC%95%88%EC%8B%9C%20%EB%8F%99%EB%82%A8%EA%B5%AC%20%EC%89%BC1%EA%B8%B8%2042",
    rating: 3.8,
    reviewCount: 7800,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD6chGXOQ66Z3OivPPLfR0gAgvWLj4E6Xu-OUy7FULwLt2eXPR39kwkwRiUQJXyK_dDAG1lQQsi2pTHk4xgHbkBTaS53pAPLoHoT_gtPlc0UspFR9bLxsQWFfr2KRRF-_GmsLpfoc9xqM5CCAYG_qP1WQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-382",
    name: "천원국수",
    category: "국수",
    address: "충남 천안시 동남구 문암로 66",
    phone: "041-554-0965",
    lat: 36.84069621377791,
    lng: 127.1808523648596,
    kakaoUrl: "http://place.map.kakao.com/15746761",
    naverUrl: "https://map.naver.com/p/search/%EC%B2%9C%EC%9B%90%EA%B5%AD%EC%88%98%20%EC%B6%A9%EB%82%A8%20%EC%B2%9C%EC%95%88%EC%8B%9C%20%EB%8F%99%EB%82%A8%EA%B5%AC%20%EB%AC%B8%EC%95%94%EB%A1%9C%2066",
    rating: 4.1,
    reviewCount: 28,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDsFKV57p-YrJx9GhHz0UX11RZmyS8JZa3wt6qZtAO9mDt3HQC06zlQKYupVp4Biofs1lvsi7KJGETVNLDmByAap47x9E6yBd1uWuArCsCv_LN7qmSzSU79fUaryuAcjaldBW1pBlxF8YEeOoQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-383",
    name: "천원분식",
    category: "분식",
    address: "제주특별자치도 제주시 관덕로8길 22",
    phone: "064-753-3397",
    lat: 33.51129464561127,
    lng: 126.52315065613529,
    kakaoUrl: "http://place.map.kakao.com/12637040",
    naverUrl: "https://map.naver.com/p/search/%EC%B2%9C%EC%9B%90%EB%B6%84%EC%8B%9D%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EA%B4%80%EB%8D%95%EB%A1%9C8%EA%B8%B8%2022",
    rating: 5,
    reviewCount: 11,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjB48z37L8i3JYrDWrV0rYojvaU5F0JMFZ5riZtpDrU6uBbZ3_9WKnUg-gtKn8YFWDSlSgeqmXo86cGz5K7mmtr4DhlRMJqH5al7PNWWNxGp50H_ULbpg6FGNT24iHs1mweWlHanJd81JZZwUQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-384",
    name: "천하보쌈",
    category: "족발,보쌈",
    address: "서울 종로구 창덕궁1길 8",
    phone: "02-744-1614",
    lat: 37.5794521476112,
    lng: 126.988832996898,
    kakaoUrl: "http://place.map.kakao.com/10848372",
    naverUrl: "https://map.naver.com/p/search/%EC%B2%9C%ED%95%98%EB%B3%B4%EC%8C%88%20%EC%84%9C%EC%9A%B8%20%EC%A2%85%EB%A1%9C%EA%B5%AC%20%EC%B0%BD%EB%8D%95%EA%B6%811%EA%B8%B8%208",
    rating: 4.3,
    reviewCount: 714,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAY3zJ58ZFOxo_WReqmjZJISZ_DMInG6jjOjemE0bbu7eouzSQ-_YyG2nE2yCcHTkR0-rJ9qgx0e2GkOZS2-cqfnAWJ1aZptQ1NrDAQDiOMrB9_-Cli9Cv7r1PssvrPTCbn-XUUw2BETCj-6iY=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 족발·보쌈 맛집."
      }
    ]
  },
  {
    id: "jjy-385",
    name: "철수네매운갈비찜",
    category: "갈비",
    address: "대전 유성구 대학로 31",
    phone: "042-824-8085",
    lat: 36.356500562525895,
    lng: 127.3417253393437,
    kakaoUrl: "http://place.map.kakao.com/8536307",
    naverUrl: "https://map.naver.com/p/search/%EC%B2%A0%EC%88%98%EB%84%A4%EB%A7%A4%EC%9A%B4%EA%B0%88%EB%B9%84%EC%B0%9C%20%EB%8C%80%EC%A0%84%20%EC%9C%A0%EC%84%B1%EA%B5%AC%20%EB%8C%80%ED%95%99%EB%A1%9C%2031",
    rating: 4.1,
    reviewCount: 237,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjC9pWjqobbQSP3bnRfQJSNsah45LYpBvOru6jOUXklYKyCLeuwE79ao4VuotOHK2GMI8Fz1b1LNJlX8SiDNQzWRP44Ope2RC31btvwtv-8pPGRla1p9qr9TipbdF6z_W8xYSLQwAfn7dDMGChGEYkR0aw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-386",
    name: "철원막국수",
    category: "국수",
    address: "강원특별자치도 철원군 갈말읍 명성로158번길 13",
    phone: "033-452-2589",
    lat: 38.1459754194437,
    lng: 127.30874930512,
    kakaoUrl: "http://place.map.kakao.com/9458545",
    naverUrl: "https://map.naver.com/p/search/%EC%B2%A0%EC%9B%90%EB%A7%89%EA%B5%AD%EC%88%98%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%B2%A0%EC%9B%90%EA%B5%B0%20%EA%B0%88%EB%A7%90%EC%9D%8D%20%EB%AA%85%EC%84%B1%EB%A1%9C158%EB%B2%88%EA%B8%B8%2013",
    rating: 3.9,
    reviewCount: 1743,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCzWtEU9AfFkx2pYxjUbOS4AdaRgpQJPwqq-5Yl5S_gU0QATUSLc3RI2llzBWGDmlct0fZULsjBtzEwqQ-ffF1Kry-m9I5jTxrDBG1yHJ5WlvLHN5o_uZNR3tvSDlFbqGosdLMJxNJPR_b7joc=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-387",
    name: "청년다방 양재시민의숲역점",
    category: "청년다방",
    address: "서울 서초구 강남대로12길 23-15",
    phone: "02-2088-1214",
    lat: 37.47017785742735,
    lng: 127.03967868135825,
    kakaoUrl: "http://place.map.kakao.com/1688975890",
    naverUrl: "https://map.naver.com/p/search/%EC%B2%AD%EB%85%84%EB%8B%A4%EB%B0%A9%20%EC%96%91%EC%9E%AC%EC%8B%9C%EB%AF%BC%EC%9D%98%EC%88%B2%EC%97%AD%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EA%B0%95%EB%82%A8%EB%8C%80%EB%A1%9C12%EA%B8%B8%2023-15",
    rating: 4.2,
    reviewCount: 28,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCvsBfte79I_9UOz79qiGfaSBB56X7PkJz8DiAd59hmnCj8eYw0GlAh7LhFwrBjJu6HXmu-tvo5dOpjd1iAj1WAiT1gtwMNtU4dlJvW07QIAjPEwhjGXohi_4YtRDbPBh5g0BFOutpEoO73_k8=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-388",
    name: "청수",
    category: "냉면",
    address: "서울 영등포구 국제금융로 112",
    phone: "02-784-1559",
    lat: 37.518360928834404,
    lng: 126.93397342127108,
    kakaoUrl: "http://place.map.kakao.com/20746105",
    naverUrl: "https://map.naver.com/p/search/%EC%B2%AD%EC%88%98%20%EC%84%9C%EC%9A%B8%20%EC%98%81%EB%93%B1%ED%8F%AC%EA%B5%AC%20%EA%B5%AD%EC%A0%9C%EA%B8%88%EC%9C%B5%EB%A1%9C%20112",
    rating: 3.9,
    reviewCount: 1355,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBms8HIZm9cmDM8zTLOdn3_c4VsPSE89KRKEOQSvqo3qTGkNy8VaOFR2C8BVorgvLCXzhUSYpvn9U0iwCRyA5ImtBAfavr8tt8NaapAoSngrw_QMrOEzR1ym979OcI_gsgUC9NRvDc5YZVXHNWNEo59Aw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "여의도 주민은 다 안다는 40년전통 맛집?😳 청수모밀 먹방",
        videoUrl: "https://www.youtube.com/watch?v=lx9-ecadk7U",
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-389",
    name: "청해조개구이회센타 영미네맛집",
    category: "회",
    address: "충남 당진시 신평면 삽교천3길 20",
    phone: "041-362-8889",
    lat: 36.8902858878102,
    lng: 126.822904426381,
    kakaoUrl: "http://place.map.kakao.com/838893716",
    naverUrl: "https://map.naver.com/p/search/%EC%B2%AD%ED%95%B4%EC%A1%B0%EA%B0%9C%EA%B5%AC%EC%9D%B4%ED%9A%8C%EC%84%BC%ED%83%80%20%EC%98%81%EB%AF%B8%EB%84%A4%EB%A7%9B%EC%A7%91%20%EC%B6%A9%EB%82%A8%20%EB%8B%B9%EC%A7%84%EC%8B%9C%20%EC%8B%A0%ED%8F%89%EB%A9%B4%20%EC%82%BD%EA%B5%90%EC%B2%9C3%EA%B8%B8%2020",
    rating: 3.3,
    reviewCount: 131,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCTlHzAUoiAI0L4PKJ98KKCPJuVQC2OO6qMYSOGBThCIRq3FnpDwq23ymmFW2FYUadM-riaVKNAtJ5PudvqtPZxMc8qdLALV-1hfdq8Z8Lru0hJX7v0UVt4nWrtMg_Jl4ubPhc-45PmuSd3cQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      }
    ]
  },
  {
    id: "jjy-390",
    name: "초당비스트로",
    category: "양식",
    address: "강원특별자치도 강릉시 초당순두부길 19",
    phone: "033-652-0911",
    lat: 37.7878923130674,
    lng: 128.910482686845,
    kakaoUrl: "http://place.map.kakao.com/1572181856",
    naverUrl: "https://map.naver.com/p/search/%EC%B4%88%EB%8B%B9%EB%B9%84%EC%8A%A4%ED%8A%B8%EB%A1%9C%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EA%B0%95%EB%A6%89%EC%8B%9C%20%EC%B4%88%EB%8B%B9%EC%88%9C%EB%91%90%EB%B6%80%EA%B8%B8%2019",
    rating: 4.4,
    reviewCount: 300,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAHrACHtTYKkCN6KE0TjRmBCF2iFk0q1TrDkA-KIOzV4QsbfUcGz2caiFxuxPQEt20X6UOJsmMKT2Hpj9kiiv8QsSMmGEbZpwadnI2wLcinssThn7pZuVy5sfddSH43t2CPsLVujp_f22q0zcM=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 양식 맛집."
      }
    ]
  },
  {
    id: "jjy-391",
    name: "초와밥",
    category: "초밥,롤",
    address: "서울 동작구 동작대로5길 8",
    phone: "02-523-5937",
    lat: 37.4791408340354,
    lng: 126.981006226007,
    kakaoUrl: "http://place.map.kakao.com/27384429",
    naverUrl: "https://map.naver.com/p/search/%EC%B4%88%EC%99%80%EB%B0%A5%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EC%9E%91%EA%B5%AC%20%EB%8F%99%EC%9E%91%EB%8C%80%EB%A1%9C5%EA%B8%B8%208",
    rating: 4.3,
    reviewCount: 603,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCISW3Y39cjZsupX6NRxlQhPtOdRRYS-j_4poH57jiGy1lmflP8NXhPemAcQeMGiajKBGD8kHeS5bY0C9GqRm9PPQkdNpK5VEYEd6kTWZhRbW72SbdIayIWtXBzbvEMu8XIJ5lZiIcJr0LsYe8=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      }
    ]
  },
  {
    id: "jjy-392",
    name: "초원",
    category: "육류,고기",
    address: "서울 용산구 한강대로80길 7",
    phone: "02-749-5949",
    lat: 37.54264935373663,
    lng: 126.97334091531839,
    kakaoUrl: "http://place.map.kakao.com/2098373141",
    naverUrl: "https://map.naver.com/p/search/%EC%B4%88%EC%9B%90%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%ED%95%9C%EA%B0%95%EB%8C%80%EB%A1%9C80%EA%B8%B8%207",
    rating: 4.6,
    reviewCount: 727,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjC76vKp2C6WZLe7AblH0w719RXfB8uD5XCUYkOrFVkd3ky_y-3W5_Zuy-wv2f7Qo34coOjj8QN--bZlQrbGkkpDWX4jT1OIgl2HP4KBEgDIM8ZaT_yfE5D-FOwyLvt46zS9nBcBADFELeErug=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "줄서서먹는 특이한 우설?😳 남영동2탄 핫플레이스 초원 먹방",
        videoUrl: "https://www.youtube.com/watch?v=SVtf7xT5J64",
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-393",
    name: "초원튀김전문점",
    category: "분식",
    address: "경기 고양시 덕양구 마상로154번길 34",
    phone: "031-964-2911",
    lat: 37.6575763240644,
    lng: 126.838217250012,
    kakaoUrl: "http://place.map.kakao.com/606972245",
    naverUrl: "https://map.naver.com/p/search/%EC%B4%88%EC%9B%90%ED%8A%80%EA%B9%80%EC%A0%84%EB%AC%B8%EC%A0%90%20%EA%B2%BD%EA%B8%B0%20%EA%B3%A0%EC%96%91%EC%8B%9C%20%EB%8D%95%EC%96%91%EA%B5%AC%20%EB%A7%88%EC%83%81%EB%A1%9C154%EB%B2%88%EA%B8%B8%2034",
    rating: 3.5,
    reviewCount: 2,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCcZwtFOiREImeJfX_kclwY_eaGhFWJbhrVUz6eM1-F59Kdo8KD9iwr_zFo1_AexCJ0grnXylkouk12mgcBRJB-TqdZoykjkm1XJ-bvCUZTwk5aPVtg79EhzUnN__vRE3aT9lguB7dTSWfssQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-394",
    name: "촌놈 옥련점",
    category: "회",
    address: "인천 연수구 옥련로99번길 42",
    phone: "032-874-2645",
    lat: 37.42611080673122,
    lng: 126.65194577983632,
    kakaoUrl: "http://place.map.kakao.com/259752996",
    naverUrl: "https://map.naver.com/p/search/%EC%B4%8C%EB%86%88%20%EC%98%A5%EB%A0%A8%EC%A0%90%20%EC%9D%B8%EC%B2%9C%20%EC%97%B0%EC%88%98%EA%B5%AC%20%EC%98%A5%EB%A0%A8%EB%A1%9C99%EB%B2%88%EA%B8%B8%2042",
    rating: 4.3,
    reviewCount: 98,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBbrIcdsvdyjHKLMBjTKKVbei9DlI0L3Aykly5Mg5otQEVrvaaBIIC2YeHPRK9-KvIXI2-2Vob8WNbFiINxx2CSNAgydWsNpyicOoDqqMYn5WneR9zWqDBI8gtyFEaT4VpgVw6cfj6RILPpfhsUuvpJaA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      }
    ]
  },
  {
    id: "jjy-395",
    name: "최우영스시",
    category: "초밥,롤",
    address: "서울 구로구 디지털로 288",
    phone: "0507-1356-3430",
    lat: 37.483565151803205,
    lng: 126.89549983181455,
    kakaoUrl: "http://place.map.kakao.com/12753570",
    naverUrl: "https://map.naver.com/p/search/%EC%B5%9C%EC%9A%B0%EC%98%81%EC%8A%A4%EC%8B%9C%20%EC%84%9C%EC%9A%B8%20%EA%B5%AC%EB%A1%9C%EA%B5%AC%20%EB%94%94%EC%A7%80%ED%84%B8%EB%A1%9C%20288",
    rating: 4.2,
    reviewCount: 953,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDYrpCGooO6hmp-ruFmxMiMlLnHMgg0aG56kVmBgKbOwQVIbsm3r5hae_9RsVZvoggPIu4Daxi3dzWnfxEASJQWhmCqQ9si_OZgmAwW0thBYxpNFwjDL8ef9ng9rlmQ-myOO31rwDkVn0wlrYc=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      }
    ]
  },
  {
    id: "jjy-396",
    name: "춘선만두",
    category: "중국요리",
    address: "서울 광진구 군자로 101",
    phone: "02-466-4398",
    lat: 37.5523075877156,
    lng: 127.071260006248,
    kakaoUrl: "http://place.map.kakao.com/88370014",
    naverUrl: "https://map.naver.com/p/search/%EC%B6%98%EC%84%A0%EB%A7%8C%EB%91%90%20%EC%84%9C%EC%9A%B8%20%EA%B4%91%EC%A7%84%EA%B5%AC%20%EA%B5%B0%EC%9E%90%EB%A1%9C%20101",
    rating: 4.5,
    reviewCount: 92,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCyes-edoDEm8hxn4MRR7H93HqmUwa-xD4rX67vWsrXY3arsjuMSYbsjwznrp2ED14RZJj_VNV1rtsyRPgVuR-YqVznjk21X84I9sCeWI-bUAjv8GRGQ4yqtHPKNyj3WKCuWb8Bwrsoz68H=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-397",
    name: "춘천냉면",
    category: "냉면",
    address: "서울 동대문구 왕산로37길 50",
    phone: "02-966-8194",
    lat: 37.5821654970769,
    lng: 127.043945064171,
    kakaoUrl: "http://place.map.kakao.com/16441755",
    naverUrl: "https://map.naver.com/p/search/%EC%B6%98%EC%B2%9C%EB%83%89%EB%A9%B4%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EC%99%95%EC%82%B0%EB%A1%9C37%EA%B8%B8%2050",
    rating: 4.3,
    reviewCount: 208,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjB8zCvxVd4gwwnRX1sScyPGKYH0_T6JDQTCxu6l2TLLR8r7FA3XRJFQapo0pquSSvfnwTHysXkLph0STOKujBFX9imsrXxp9dQyLfi0LnPP2eWmkBQODBwDdcj5GZftMw3QeZajNzFaPv9YMh4=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-398",
    name: "춘향전",
    category: "한식",
    address: "대전 서구 도화공원길 22",
    phone: "042-528-8028",
    lat: 36.3163396021168,
    lng: 127.381905069897,
    kakaoUrl: "http://place.map.kakao.com/1958942457",
    naverUrl: "https://map.naver.com/p/search/%EC%B6%98%ED%96%A5%EC%A0%84%20%EB%8C%80%EC%A0%84%20%EC%84%9C%EA%B5%AC%20%EB%8F%84%ED%99%94%EA%B3%B5%EC%9B%90%EA%B8%B8%2022",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-399",
    name: "충무연어",
    category: "해물,생선",
    address: "서울 중구 충무로2길 33",
    phone: "02-2274-8769",
    lat: 37.562429165088275,
    lng: 126.99499727076696,
    kakaoUrl: "http://place.map.kakao.com/27243642",
    naverUrl: "https://map.naver.com/p/search/%EC%B6%A9%EB%AC%B4%EC%97%B0%EC%96%B4%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EC%B6%A9%EB%AC%B4%EB%A1%9C2%EA%B8%B8%2033",
    rating: 4.1,
    reviewCount: 141,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAqTIPSO8db849Ld5x80kFn6BFaSxW9yvABE9gCoMe90-EAsbUqhNwPyA7lkvShKC1xh63Oga3-ZBZtGHgN3ycpWGY9Oxu3bnQOEQGRs5FRe7XmteiAbP_ZZfyNiu0WfkrWOIKwyBMUs7CNTw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      }
    ]
  },
  {
    id: "jjy-400",
    name: "치킨플러스 일산풍동점",
    category: "치킨플러스",
    address: "경기 고양시 일산동구 숲속마을2로 136",
    phone: "031-907-1777",
    lat: 37.6731551790241,
    lng: 126.798447979742,
    kakaoUrl: "http://place.map.kakao.com/1430064311",
    naverUrl: "https://map.naver.com/p/search/%EC%B9%98%ED%82%A8%ED%94%8C%EB%9F%AC%EC%8A%A4%20%EC%9D%BC%EC%82%B0%ED%92%8D%EB%8F%99%EC%A0%90%20%EA%B2%BD%EA%B8%B0%20%EA%B3%A0%EC%96%91%EC%8B%9C%20%EC%9D%BC%EC%82%B0%EB%8F%99%EA%B5%AC%20%EC%88%B2%EC%86%8D%EB%A7%88%EC%9D%842%EB%A1%9C%20136",
    rating: 4,
    reviewCount: 1,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDrPn8wqMJDnuEr9dYZA0ymAYFWRReyI5LZf2TOSzTZW9QdeFR1Xze8lhPltX1fwfOGbxP92FzttAOxWp2zucEqLj2QSH2orOlYuTJ7AkUvQhSJchxuGAQ5xBeeB_41Uao4k0zsiTYCkRF9Sg=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 치킨 전문점."
      }
    ]
  },
  {
    id: "jjy-401",
    name: "칙바이칙 선릉역점",
    category: "햄버거",
    address: "서울 강남구 선릉로 523",
    phone: "02-6953-7827",
    lat: 37.5062025529363,
    lng: 127.047795626302,
    kakaoUrl: "http://place.map.kakao.com/373369422",
    naverUrl: "https://map.naver.com/p/search/%EC%B9%99%EB%B0%94%EC%9D%B4%EC%B9%99%20%EC%84%A0%EB%A6%89%EC%97%AD%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%84%A0%EB%A6%89%EB%A1%9C%20523",
    rating: 4.6,
    reviewCount: 90,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDR8T5JhYC81sc-xkvZ2KFmur5V5URoJNrlQr-aX4j4eWcUxwNFG3vLgSGFbkt3xSii-hW3Jt-5UYpy1VpQCPbT0_1KQmo0jECoQT3Q7WXxi0y2hHOhug0hRbsXLvdUPJB7qf6Mms3MIH2zt4A=s4800-w700",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 치킨 전문점."
      }
    ]
  },
  {
    id: "jjy-402",
    name: "친정엄마",
    category: "분식",
    address: "충북 청주시 청원구 향군로31번가길 1-17",
    phone: "043-222-1755",
    lat: 36.6482895251556,
    lng: 127.485707511148,
    kakaoUrl: "http://place.map.kakao.com/606514277",
    naverUrl: "https://map.naver.com/p/search/%EC%B9%9C%EC%A0%95%EC%97%84%EB%A7%88%20%EC%B6%A9%EB%B6%81%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%EC%B2%AD%EC%9B%90%EA%B5%AC%20%ED%96%A5%EA%B5%B0%EB%A1%9C31%EB%B2%88%EA%B0%80%EA%B8%B8%201-17",
    rating: 4.8,
    reviewCount: 4,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBtXugE6sWAGOfEV0mlNzl3Khu6UFMXjx1ArCOPsIPD2mgJcjCl9i0nKf95BgTlay_271OtK4hi8AAxtN0D6ucBR3eN-iUqlHoH6Gz6p5RgMpAyLtsxqw43T8hUogzrAwYBBzkz821ZqcJX_wL2A6rl=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-403",
    name: "칸다소바 해운대점",
    category: "일식",
    address: "부산 해운대구 구남로30번길 8-3",
    phone: "051-731-1660",
    lat: 35.161286424571,
    lng: 129.160090149929,
    kakaoUrl: "http://place.map.kakao.com/675761155",
    naverUrl: "https://map.naver.com/p/search/%EC%B9%B8%EB%8B%A4%EC%86%8C%EB%B0%94%20%ED%95%B4%EC%9A%B4%EB%8C%80%EC%A0%90%20%EB%B6%80%EC%82%B0%20%ED%95%B4%EC%9A%B4%EB%8C%80%EA%B5%AC%20%EA%B5%AC%EB%82%A8%EB%A1%9C30%EB%B2%88%EA%B8%B8%208-3",
    rating: 4.6,
    reviewCount: 248,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjA58xEySME41JgSRgUBqOQPu3QxYPtryNmz4nuCmMwU8OgOsFLBP-ZctlkU0fd3kuCJ43_ozZtMidAq5Jn2sbqL42P0o8LP6N9VWXir0miZYuZrmNp7faKPcI7xlryxWEN1gR0yuXWrFQl0bw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 아시안 맛집."
      }
    ]
  },
  {
    id: "jjy-404",
    name: "코끼리만두",
    category: "분식",
    address: "충북 청주시 상당구 남사로 133-5",
    phone: "043-255-9842",
    lat: 36.6324413665017,
    lng: 127.489895855913,
    kakaoUrl: "http://place.map.kakao.com/17297647",
    naverUrl: "https://map.naver.com/p/search/%EC%BD%94%EB%81%BC%EB%A6%AC%EB%A7%8C%EB%91%90%20%EC%B6%A9%EB%B6%81%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%EC%83%81%EB%8B%B9%EA%B5%AC%20%EB%82%A8%EC%82%AC%EB%A1%9C%20133-5",
    rating: 4.2,
    reviewCount: 210,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjB-YzATnsvrvXhSVe7T7JgXmB4BBvMCZJuYFVnCJcJNtQHl3yEp1LDX-LbApQ9VH3CFdfFLvuTeFbJkgUlyvJUE_XY_FEySVAqLYDU22e2wXPya4zEx1avCAEIFKPjSyrfr2g_aqJQAkpmmx9Y=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-405",
    name: "쿠우쿠우 골드부천점",
    category: "쿠우쿠우",
    address: "경기 부천시 원미구 부흥로315번길 62",
    phone: "032-326-6274",
    lat: 37.4974372033154,
    lng: 126.77722120637,
    kakaoUrl: "http://place.map.kakao.com/1379297755",
    naverUrl: "https://map.naver.com/p/search/%EC%BF%A0%EC%9A%B0%EC%BF%A0%EC%9A%B0%20%EA%B3%A8%EB%93%9C%EB%B6%80%EC%B2%9C%EC%A0%90%20%EA%B2%BD%EA%B8%B0%20%EB%B6%80%EC%B2%9C%EC%8B%9C%20%EC%9B%90%EB%AF%B8%EA%B5%AC%20%EB%B6%80%ED%9D%A5%EB%A1%9C315%EB%B2%88%EA%B8%B8%2062",
    rating: 4.4,
    reviewCount: 22,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCl_z97IDkbQZcAJAtCZ4lCgTfCeN1uUU232RsowAf2TIXjvCe_5JruKUg2LFOgS2eDsUxjSJrHAl08kMG2u6N0kss5y7KI_OJ7frxr7jNJ_ZrfHdfi9dUnGhOlVkPPAu47waKAyFyAH2csHKBjwfUdTA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      }
    ]
  },
  {
    id: "jjy-406",
    name: "킹왕짱라볶이",
    category: "떡볶이",
    address: "서울 마포구 토정로37길 46",
    phone: "02-719-3392",
    lat: 37.54260192133946,
    lng: 126.94743660260588,
    kakaoUrl: "http://place.map.kakao.com/20849769",
    naverUrl: "https://map.naver.com/p/search/%ED%82%B9%EC%99%95%EC%A7%B1%EB%9D%BC%EB%B3%B6%EC%9D%B4%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%ED%86%A0%EC%A0%95%EB%A1%9C37%EA%B8%B8%2046",
    rating: 4.1,
    reviewCount: 10,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBj2PugwOmZphYr-17aU_91IbFQTcgSksMAxbDVww_2oMwLw2RCH3HGLQCzu4VJWPLtoaoJS0IHyELtOngascO9H1QxTpZ00JBpWOMIoo844zrMgVm0O2Z4JFJW8UvWRhk9SLWHRd2Oq4_tUQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-407",
    name: "타코냠냠",
    category: "간식",
    address: "서울 종로구 지봉로 7",
    phone: "02-762-7277",
    lat: 37.5706705488041,
    lng: 127.01561883778717,
    kakaoUrl: "http://place.map.kakao.com/1301441791",
    naverUrl: "https://map.naver.com/p/search/%ED%83%80%EC%BD%94%EB%83%A0%EB%83%A0%20%EC%84%9C%EC%9A%B8%20%EC%A2%85%EB%A1%9C%EA%B5%AC%20%EC%A7%80%EB%B4%89%EB%A1%9C%207",
    rating: 4.5,
    reviewCount: 2,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAZtAS9c1KpqvxWfv7p420CrYS1W4Aa742L6aPjNqQjCN7T0zhiwcrVyCYzxMgRERmvnRdcIrNZPqkHMFxJo1mCGROkS1CC2tF0W-yp8-cwd9gDoNWm3bCXEtPWsMvs3Nn2Gzc9Nsctfxcmg2uhYp2B5w=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-408",
    name: "태화원",
    category: "중국요리",
    address: "인천 제물포구 차이나타운로59번길 10",
    phone: "032-766-7688",
    lat: 37.47402887194698,
    lng: 126.61856842488434,
    kakaoUrl: "http://place.map.kakao.com/9433427",
    naverUrl: "https://map.naver.com/p/search/%ED%83%9C%ED%99%94%EC%9B%90%20%EC%9D%B8%EC%B2%9C%20%EC%A0%9C%EB%AC%BC%ED%8F%AC%EA%B5%AC%20%EC%B0%A8%EC%9D%B4%EB%82%98%ED%83%80%EC%9A%B4%EB%A1%9C59%EB%B2%88%EA%B8%B8%2010",
    rating: 3.8,
    reviewCount: 773,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBdh5omz4IcPjKQ2HlRUX8k3mOKisQMBD4j4HxR8J6fkw_VHD77ekGyLVAUbVx6ubhlfKy9Ap9IN-ucIcycFzxfLol9BduBvYztWEza4YkOKUM2SIhlMoiMxvu_IA2vYL-mb0_J9g3fVhy8=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-409",
    name: "털보감자탕",
    category: "감자탕",
    address: "서울 서초구 나루터로15길 16",
    phone: "02-515-9535",
    lat: 37.5165147094662,
    lng: 127.018179768488,
    kakaoUrl: "http://place.map.kakao.com/10898044",
    naverUrl: "https://map.naver.com/p/search/%ED%84%B8%EB%B3%B4%EA%B0%90%EC%9E%90%ED%83%95%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EB%82%98%EB%A3%A8%ED%84%B0%EB%A1%9C15%EA%B8%B8%2016",
    rating: 4.1,
    reviewCount: 129,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBBsgo6vkMA4cihg1x8c7O4d6h63Gm0E5Hd7YqHZeYzfLqnb1uw_dNhBx3ubou90x7KtPfnDBTqt5SJbeunxCYaEq1rB5FqKnvqWDtIQdjPDCL0mTl-3Abf1yGHsFNYUzKFMtnPv7RjEW-Glhw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-410",
    name: "텍사스데브라질 압구정점",
    category: "스테이크,립",
    address: "서울 강남구 논현로 854",
    phone: "02-3442-7734",
    lat: 37.5253207856728,
    lng: 127.028865697479,
    kakaoUrl: "http://place.map.kakao.com/1248615345",
    naverUrl: "https://map.naver.com/p/search/%ED%85%8D%EC%82%AC%EC%8A%A4%EB%8D%B0%EB%B8%8C%EB%9D%BC%EC%A7%88%20%EC%95%95%EA%B5%AC%EC%A0%95%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EB%85%BC%ED%98%84%EB%A1%9C%20854",
    rating: 4.2,
    reviewCount: 857,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjA29935ki-U4a0RnnTmm30_WPK6eA2j9FsYF6rtYvlq4e5CC-aiu9nut95oHseW1K6ZnE-7BhWqtSC_Y8owftvKkHb1Gsi2jZdouv0ZtmJrdy_rML2kBndQhWeJLnbRfbUiw7mAM87zGCBl5Ns=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 양식 맛집."
      }
    ]
  },
  {
    id: "jjy-411",
    name: "통큰식당",
    category: "한식",
    address: "충북 제천시 덕산면 약초로3길 5-1",
    phone: "043-645-3005",
    lat: 36.90929092210367,
    lng: 128.16610158806395,
    kakaoUrl: "http://place.map.kakao.com/1142199883",
    naverUrl: "https://map.naver.com/p/search/%ED%86%B5%ED%81%B0%EC%8B%9D%EB%8B%B9%20%EC%B6%A9%EB%B6%81%20%EC%A0%9C%EC%B2%9C%EC%8B%9C%20%EB%8D%95%EC%82%B0%EB%A9%B4%20%EC%95%BD%EC%B4%88%EB%A1%9C3%EA%B8%B8%205-1",
    rating: 4.7,
    reviewCount: 38,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDVCMc8ODyN0z2Dbt3eXZ5Pn6rTiiTsC_SF5udUtn7aQ4FLDKq3CuEt-c4lnegfA0-E59SOwKdtSIovrINwxy-zvxw6Txeowz95kX04YNABGWsrdiZopXrU6hu7V-5_a7u66gift0TgcD9tfcXU1R_m=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-413",
    name: "파이브가이즈 강남",
    category: "햄버거",
    address: "서울 서초구 강남대로 435",
    phone: "070-883-4790",
    lat: 37.50117734090564,
    lng: 127.02556091733834,
    kakaoUrl: "http://place.map.kakao.com/1725176424",
    naverUrl: "https://map.naver.com/p/search/%ED%8C%8C%EC%9D%B4%EB%B8%8C%EA%B0%80%EC%9D%B4%EC%A6%88%20%EA%B0%95%EB%82%A8%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EA%B0%95%EB%82%A8%EB%8C%80%EB%A1%9C%20435",
    rating: 3.9,
    reviewCount: 930,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBNHIeS-74LtKTij-46r0W2M6dIFwGS-9eq-YMwJ218Iy8hQJ-gXbB2z-tYD-OT0Wi02T1BAUPUYIIacMwTwGocf3hr2nx7pbBtAfgjZouphKArZWXvhb5jb1E6nex3gjuy3fanXSLgsDfmei04lRA6Dg=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 패스트푸드 맛집."
      }
    ]
  },
  {
    id: "jjy-414",
    name: "편편집 강남역점",
    category: "편편집",
    address: "서울 서초구 서초대로77길 31",
    phone: "0507-1353-1582",
    lat: 37.5006196580036,
    lng: 127.025376389631,
    kakaoUrl: "http://place.map.kakao.com/1127126120",
    naverUrl: "https://map.naver.com/p/search/%ED%8E%B8%ED%8E%B8%EC%A7%91%20%EA%B0%95%EB%82%A8%EC%97%AD%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EC%84%9C%EC%B4%88%EB%8C%80%EB%A1%9C77%EA%B8%B8%2031",
    rating: 4.2,
    reviewCount: 15,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjC3bNxDR4cmMTOSDeXNQ-6rc4XOqxOEdzlciZlTgXRg8ERWI9lDzhdyL47XFwUo7qEcWu68Dmj1rdN9OJssH6REUifGBFpFHmW89V-LvTYns3aTT_-L1b5cvGBlZQx1nsezONRoIdxrVV-MPW8=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-415",
    name: "평양옥",
    category: "냉면",
    address: "대전 서구 도마5길 61",
    phone: "042-532-9500",
    lat: 36.31709919116528,
    lng: 127.38165599673486,
    kakaoUrl: "http://place.map.kakao.com/115984648",
    naverUrl: "https://map.naver.com/p/search/%ED%8F%89%EC%96%91%EC%98%A5%20%EB%8C%80%EC%A0%84%20%EC%84%9C%EA%B5%AC%20%EB%8F%84%EB%A7%885%EA%B8%B8%2061",
    rating: 3.9,
    reviewCount: 55,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCCXfFQy1pN_9ADeCALq75eAJcrtoY6TCST9ijIpzm3JkPFgrLMvXX_WeZayXPfm4V6DmGYgyw9SWOIncVNFGsA2gU-MRQO8PSgtmYf5e1RBEM0Pqn6Bzi4bWvGBM-iDYkqPj6RJduWAGgs=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-416",
    name: "평화김해뒷고기 건대본점",
    category: "육류,고기",
    address: "서울 광진구 아차산로31길 9-1",
    phone: "02-461-1223",
    lat: 37.54155079230561,
    lng: 127.06936238644813,
    kakaoUrl: "http://place.map.kakao.com/269850048",
    naverUrl: "https://map.naver.com/p/search/%ED%8F%89%ED%99%94%EA%B9%80%ED%95%B4%EB%92%B7%EA%B3%A0%EA%B8%B0%20%EA%B1%B4%EB%8C%80%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B4%91%EC%A7%84%EA%B5%AC%20%EC%95%84%EC%B0%A8%EC%82%B0%EB%A1%9C31%EA%B8%B8%209-1",
    rating: 4.4,
    reviewCount: 16,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDjKkKgEjaYunlsyW3gaTSfcpJpOJSVkypiROwAmR7eO1PoAAD1cBNZrUjMJfwYo0flT88MTTKOGNfAPGrizgd4sGz4jNz4WkcxaPbTEELsToItv-TK196CoizLsMUJREdnkZFrRFDf5wvsEKwJNNFf=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-417",
    name: "푸른하늘",
    category: "분식",
    address: "서울 동대문구 경희대로6길 3-4",
    phone: "02-960-3394",
    lat: 37.5935502838839,
    lng: 127.053091766335,
    kakaoUrl: "http://place.map.kakao.com/24287260",
    naverUrl: "https://map.naver.com/p/search/%ED%91%B8%EB%A5%B8%ED%95%98%EB%8A%98%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EA%B2%BD%ED%9D%AC%EB%8C%80%EB%A1%9C6%EA%B8%B8%203-4",
    rating: 4.3,
    reviewCount: 149,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDBF4JdxeM33QrEVAhRSahqvlgz9tKwzjf_GHZb-cpjr0yuzW4lJdSqE3NgLHBBx5EhX-KC1LKcej6CHWBMA3NJ1F1GxrfnUywjDNXwpfgxUWxjPnGYe62TqI4Vqnn_TBsQg3LRe_C_EBNPzuI=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-418",
    name: "풍년기사님식당",
    category: "기사식당",
    address: "서울 마포구 대흥로 54",
    phone: "02-711-0616",
    lat: 37.5450336694064,
    lng: 126.939786573075,
    kakaoUrl: "http://place.map.kakao.com/21410532",
    naverUrl: "https://map.naver.com/p/search/%ED%92%8D%EB%85%84%EA%B8%B0%EC%82%AC%EB%8B%98%EC%8B%9D%EB%8B%B9%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EB%8C%80%ED%9D%A5%EB%A1%9C%2054",
    rating: 3.5,
    reviewCount: 388,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDskK3mBeD_JAMHfa5k9tEBrSmyUYRS5ltDFbJl1jXz4JM_G4MUgrDXUAebO8dR4Rap8CddlkqCkx89jtwUlpl0ZFKNzr0_K1m827nDSOPuBKY-A1aNud10qK3MJwM2H0SLkmSMn5Jc17i581Q=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-419",
    name: "풍년식당",
    category: "중국요리",
    address: "충북 충주시 동량면 조동2길 88",
    phone: "043-851-0181",
    lat: 37.0287367246934,
    lng: 127.969006968045,
    kakaoUrl: "http://place.map.kakao.com/21261719",
    naverUrl: "https://map.naver.com/p/search/%ED%92%8D%EB%85%84%EC%8B%9D%EB%8B%B9%20%EC%B6%A9%EB%B6%81%20%EC%B6%A9%EC%A3%BC%EC%8B%9C%20%EB%8F%99%EB%9F%89%EB%A9%B4%20%EC%A1%B0%EB%8F%992%EA%B8%B8%2088",
    rating: 3.5,
    reviewCount: 38,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCBsGuq3G4G_CQ-lDmshknIzcaobdKcQtTx7Xo7Xg948JJ09zmQ0k50mTma9Us2k8x7g_z_6FhbKQoBUCLC0Mbbzy35deIXjePDiaDhXAJvipEvio8gMfOkzRHnxPZqiZfZ-xwqeoXoT2DGbO7jfNxzIQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "충주 '너구리'맛 짬뽕으로 유명한 풍년식당 먹방",
        videoUrl: "https://www.youtube.com/watch?v=wfKSmMuTnQo",
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-420",
    name: "풍미당",
    category: "국수",
    address: "충북 옥천군 옥천읍 중앙로 23-1",
    phone: "043-732-1827",
    lat: 36.299686589433385,
    lng: 127.56776664041031,
    kakaoUrl: "http://place.map.kakao.com/9536499",
    naverUrl: "https://map.naver.com/p/search/%ED%92%8D%EB%AF%B8%EB%8B%B9%20%EC%B6%A9%EB%B6%81%20%EC%98%A5%EC%B2%9C%EA%B5%B0%20%EC%98%A5%EC%B2%9C%EC%9D%8D%20%EC%A4%91%EC%95%99%EB%A1%9C%2023-1",
    rating: 3.5,
    reviewCount: 1554,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjB-WtHZNzR1Et3s-DklmW25_VzrWMx8Mz8cFOQguMdQd266-vjdT0cxqc7V7cgpLSADl5i6UY2plU0_R5WZKw9O7a7TkBuaCywdM8J0x9swHnAmoRA9juc51LlludqeRlY5QaI_FeqvZK7cJGx9iyLl=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-421",
    name: "프랑킨바베큐치킨 분당정자점",
    category: "프랑킨바베큐치킨",
    address: "경기 성남시 분당구 성남대로 295",
    phone: "0507-1350-9166",
    lat: 37.3624717782538,
    lng: 127.107764786566,
    kakaoUrl: "http://place.map.kakao.com/1889857724",
    naverUrl: "https://map.naver.com/p/search/%ED%94%84%EB%9E%91%ED%82%A8%EB%B0%94%EB%B2%A0%ED%81%90%EC%B9%98%ED%82%A8%20%EB%B6%84%EB%8B%B9%EC%A0%95%EC%9E%90%EC%A0%90%20%EA%B2%BD%EA%B8%B0%20%EC%84%B1%EB%82%A8%EC%8B%9C%20%EB%B6%84%EB%8B%B9%EA%B5%AC%20%EC%84%B1%EB%82%A8%EB%8C%80%EB%A1%9C%20295",
    rating: 3.5,
    reviewCount: 2,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBC576kpMlWVN283dDw1BkV7UyEt01FoRO1EBpRYhXgrKLGK2vVJY52PzaRMe_I39YrU48hDauD9qdFpG5IPwAU-5q0AVdart5ylupv_zuiDDEZUkCJx73bsWbqHX1DVkeeT5hsQhUWXI43LdUJ-Rr6oA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 치킨 전문점."
      }
    ]
  },
  {
    id: "jjy-422",
    name: "프랭크버거 문정점",
    category: "프랭크버거",
    address: "서울 송파구 송파대로 167",
    phone: "02-2054-8170",
    lat: 37.48451914055169,
    lng: 127.12075589750441,
    kakaoUrl: "http://place.map.kakao.com/1721305124",
    naverUrl: "https://map.naver.com/p/search/%ED%94%84%EB%9E%AD%ED%81%AC%EB%B2%84%EA%B1%B0%20%EB%AC%B8%EC%A0%95%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%86%A1%ED%8C%8C%EA%B5%AC%20%EC%86%A1%ED%8C%8C%EB%8C%80%EB%A1%9C%20167",
    rating: 4.8,
    reviewCount: 5,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCfcexLFyZpnfwFm85ILwDS8cdvi98aaIbL0WqC-Wqs9_zZswl0x1N7iJkWZfNH_UdDrDmpsYnzQtSWGoW2LjvwESRBKz228wDdoyp_MA8jm3QMLUk5X1Hrrer5rEff2NL1ONldqwu0hC_O9q0=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 패스트푸드 맛집."
      }
    ]
  },
  {
    id: "jjy-423",
    name: "프로간장새우 본점",
    category: "해물,생선",
    address: "서울 강남구 강남대로122길 20",
    phone: "02-547-4924",
    lat: 37.5080549149643,
    lng: 127.024619993483,
    kakaoUrl: "http://place.map.kakao.com/384134146",
    naverUrl: "https://map.naver.com/p/search/%ED%94%84%EB%A1%9C%EA%B0%84%EC%9E%A5%EC%83%88%EC%9A%B0%20%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EA%B0%95%EB%82%A8%EB%8C%80%EB%A1%9C122%EA%B8%B8%2020",
    rating: 4.3,
    reviewCount: 54,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCl0OAkY9O3G6cCnjUNUo7FziFe2pYlMELjg5diHhX0xxIoWwEvQMbBse1JLmR7I-O5IC7uVv45us2jB0E7H7T7ifEIhzieFJYaz1KTSuVh4hji68dTMRT8frFIm9UJd6yCQnGXodj33XVOUw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 야식 맛집."
      }
    ]
  },
  {
    id: "jjy-425",
    name: "피자먹다 광교점",
    category: "피자먹다",
    address: "경기 수원시 영통구 센트럴타운로 111",
    phone: "031-211-9990",
    lat: 37.2924635343289,
    lng: 127.049061912492,
    kakaoUrl: "http://place.map.kakao.com/1292182006",
    naverUrl: "https://map.naver.com/p/search/%ED%94%BC%EC%9E%90%EB%A8%B9%EB%8B%A4%20%EA%B4%91%EA%B5%90%EC%A0%90%20%EA%B2%BD%EA%B8%B0%20%EC%88%98%EC%9B%90%EC%8B%9C%20%EC%98%81%ED%86%B5%EA%B5%AC%20%EC%84%BC%ED%8A%B8%EB%9F%B4%ED%83%80%EC%9A%B4%EB%A1%9C%20111",
    rating: 5,
    reviewCount: 2,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAZ0-8ANC1yl35JYooH1eF_8Uh4uA8bekA_rJZ1hkCEtv7Gh4_pJ0V0RyEmSvonaaClGPXw7h57GbYVfb1J7UucoWINpObDj8ih7_X80t6kTlSHS1eQgHrmmsBpsYi8LHCG731a35Ji9W1RWA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "피자가 총 2M?!😳 살면서 처음으로 2M 피자 도전했습니다 도전먹방",
        videoUrl: "https://www.youtube.com/watch?v=2-HzvxrREac",
        recommendNote: "쯔양이 방문해 리뷰한 피자 맛집."
      }
    ]
  },
  {
    id: "jjy-426",
    name: "하니칼국수",
    category: "칼국수",
    address: "서울 중구 퇴계로 411-15",
    phone: "02-3298-6909",
    lat: 37.56616715701564,
    lng: 127.01717085842513,
    kakaoUrl: "http://place.map.kakao.com/1282659967",
    naverUrl: "https://map.naver.com/p/search/%ED%95%98%EB%8B%88%EC%B9%BC%EA%B5%AD%EC%88%98%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%ED%87%B4%EA%B3%84%EB%A1%9C%20411-15",
    rating: 4,
    reviewCount: 672,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBj1NlZaOl4uLAQS_TFdnFjiD3yfh9e1LHKHtZmfvZw3hNQ8eXJu5i1nnZUd5_RYHErThFc98Eojoq_l7yB15JBgJGROtvxmhbr2cZl_nUh5RZj1EcA1pVd7Hw3m8aB9TBP-kK6SDTBb7XtNA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-427",
    name: "하영각",
    category: "중국요리",
    address: "서울 강남구 개포로31길 8",
    phone: "02-572-5593",
    lat: 37.4796256226445,
    lng: 127.049791142082,
    kakaoUrl: "http://place.map.kakao.com/8587182",
    naverUrl: "https://map.naver.com/p/search/%ED%95%98%EC%98%81%EA%B0%81%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EA%B0%9C%ED%8F%AC%EB%A1%9C31%EA%B8%B8%208",
    rating: 4.2,
    reviewCount: 377,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBCfHg4UWBnuHBy3wp6lFKACxHtNxh6olFQPnvAFo675qwwZG1FkunmcLmYQkE74P0hSI3j8Uqm7A5GcAYoqWmXzlG3jh_6N40lzBdkHzyyJjkk_PqFSLeVDZethKatiDc5sQFrzpD6DxhA5Q=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-429",
    name: "하이디라오 대학로점",
    category: "아시아음식",
    address: "서울 종로구 대학로 146",
    phone: "02-743-6868",
    lat: 37.5842315292255,
    lng: 127.001983560442,
    kakaoUrl: "http://place.map.kakao.com/731469845",
    naverUrl: "https://map.naver.com/p/search/%ED%95%98%EC%9D%B4%EB%94%94%EB%9D%BC%EC%98%A4%20%EB%8C%80%ED%95%99%EB%A1%9C%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%A2%85%EB%A1%9C%EA%B5%AC%20%EB%8C%80%ED%95%99%EB%A1%9C%20146",
    rating: 4.4,
    reviewCount: 325,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCWX8FRbJTmv8nkkBNScYb8O_dbPO0R9-huDC3D1KRedf27HYiXvlOAUBEp_ZRpnij62xa2rkyFsqBdOG1OHcqPHAfVkQleKcpeYwkdTtLuj9qaDk9NpZ9Y_phzhaCddF4ussm5qbGixl0Y10ckys9h=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-430",
    name: "하이바오",
    category: "아시아음식",
    address: "전북특별자치도 익산시 부송1로 14",
    phone: "063-916-9533",
    lat: 35.956787740465884,
    lng: 126.9838493077153,
    kakaoUrl: "http://place.map.kakao.com/1030277148",
    naverUrl: "https://map.naver.com/p/search/%ED%95%98%EC%9D%B4%EB%B0%94%EC%98%A4%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%9D%B5%EC%82%B0%EC%8B%9C%20%EB%B6%80%EC%86%A11%EB%A1%9C%2014",
    rating: 3.8,
    reviewCount: 9,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDdDHwMe2vRre2VW-syePO7HYhv5lBcmBfA7JFf1YRyum-gNp5NdJMJeU31XaWDRTCZSwG_6fJxzqEB2W8jmrp0kJOQwS0-BpmSIaypwLP1FQNeVjFnjD07wukwmHJatzQeQaxOXh1hfZ1-9Q=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-431",
    name: "한강반점",
    category: "중국요리",
    address: "대구 중구 달구벌대로387길 42",
    phone: "053-253-7518",
    lat: 35.865009076647,
    lng: 128.575240281764,
    kakaoUrl: "http://place.map.kakao.com/1799433072",
    naverUrl: "https://map.naver.com/p/search/%ED%95%9C%EA%B0%95%EB%B0%98%EC%A0%90%20%EB%8C%80%EA%B5%AC%20%EC%A4%91%EA%B5%AC%20%EB%8B%AC%EA%B5%AC%EB%B2%8C%EB%8C%80%EB%A1%9C387%EA%B8%B8%2042",
    rating: 3.2,
    reviewCount: 5,
    photoUrl: null,
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-432",
    name: "한뭉티기",
    category: "육류,고기",
    address: "서울 송파구 올림픽로35길 124",
    phone: "0507-1316-2203",
    lat: 37.51717885645391,
    lng: 127.1004782589584,
    kakaoUrl: "http://place.map.kakao.com/533074237",
    naverUrl: "https://map.naver.com/p/search/%ED%95%9C%EB%AD%89%ED%8B%B0%EA%B8%B0%20%EC%84%9C%EC%9A%B8%20%EC%86%A1%ED%8C%8C%EA%B5%AC%20%EC%98%AC%EB%A6%BC%ED%94%BD%EB%A1%9C35%EA%B8%B8%20124",
    rating: 4.4,
    reviewCount: 167,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjC9FobqfzSfah26xNwl5nzZtLFhFPiy0bHhdXnVPXbOmSxbd9GrlLK1jkNcG7yGTjJOqmufr4ri6s0WnVf2Vj1RwnIG97lZ4a6bNWsf3nOMg5XodMUgdmRl4M-8q2dqoK04NUEmcaw_h3pBa54=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-433",
    name: "한성칼국수",
    category: "칼국수",
    address: "경기 과천시 중앙로 525",
    phone: "02-502-7577",
    lat: 37.456295967166035,
    lng: 127.00918657289891,
    kakaoUrl: "http://place.map.kakao.com/15103107",
    naverUrl: "https://map.naver.com/p/search/%ED%95%9C%EC%84%B1%EC%B9%BC%EA%B5%AD%EC%88%98%20%EA%B2%BD%EA%B8%B0%20%EA%B3%BC%EC%B2%9C%EC%8B%9C%20%EC%A4%91%EC%95%99%EB%A1%9C%20525",
    rating: 4,
    reviewCount: 1784,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjACbxrr9CvZEe50j_b1gsLWSzfW8DPEpvA9Qut_8t4b00e7T7V5XmeizIDvHhZi-Z1zckz44dhLOGThKeTGDP9wQa-COJGae8nvOE-du5unqor8POkwTLyUtEQIGf2MU-iAJ4h_uKYgFbPyipfvl3ATzA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-434",
    name: "한양식당",
    category: "중국요리",
    address: "경남 통영시 욕지면 서촌윗길 183-3",
    phone: "055-642-5146",
    lat: 34.6354088207437,
    lng: 128.263634975846,
    kakaoUrl: "http://place.map.kakao.com/10938579",
    naverUrl: "https://map.naver.com/p/search/%ED%95%9C%EC%96%91%EC%8B%9D%EB%8B%B9%20%EA%B2%BD%EB%82%A8%20%ED%86%B5%EC%98%81%EC%8B%9C%20%EC%9A%95%EC%A7%80%EB%A9%B4%20%EC%84%9C%EC%B4%8C%EC%9C%97%EA%B8%B8%20183-3",
    rating: 3.9,
    reviewCount: 611,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDO6zvqbF8zoZMb42KAuuY3AlI3G0y7B7Wrt5NgOk8HLCMm1-tMcAOjCjBJXdNTSxWgAQqjcDYF9YyfvyMXNdh-x4iFiRh3BRWFkAfWUlDIBatkt8JRD4BQqhfcQhg8IpLhMrJAlbP360VDQQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-435",
    name: "한촌설렁탕 부천본점",
    category: "한촌설렁탕",
    address: "경기 부천시 소사구 경인로 92",
    phone: "032-668-2566",
    lat: 37.4835983795279,
    lng: 126.765440262123,
    kakaoUrl: "http://place.map.kakao.com/1127245866",
    naverUrl: "https://map.naver.com/p/search/%ED%95%9C%EC%B4%8C%EC%84%A4%EB%A0%81%ED%83%95%20%EB%B6%80%EC%B2%9C%EB%B3%B8%EC%A0%90%20%EA%B2%BD%EA%B8%B0%20%EB%B6%80%EC%B2%9C%EC%8B%9C%20%EC%86%8C%EC%82%AC%EA%B5%AC%20%EA%B2%BD%EC%9D%B8%EB%A1%9C%2092",
    rating: 4,
    reviewCount: 1503,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDvgB9-r0e5kWK3GkSLMSxUocDixYxwMQRT5Vk0pEv6NhEotonK9im2qYDqA2C2Q2BDEMgiOdOtX16GsLj6HZnxNC-hfeksftuVHo4RDX292lSZ7DpoiMwYG_8x5gFqCUT8H_r1g_R08ZWcJJcyk5sG=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-436",
    name: "함경도찹쌀순대",
    category: "순대",
    address: "서울 송파구 송파대로28길 32",
    phone: "02-403-8822",
    lat: 37.494827866049874,
    lng: 127.12134016381611,
    kakaoUrl: "http://place.map.kakao.com/26971014",
    naverUrl: "https://map.naver.com/p/search/%ED%95%A8%EA%B2%BD%EB%8F%84%EC%B0%B9%EC%8C%80%EC%88%9C%EB%8C%80%20%EC%84%9C%EC%9A%B8%20%EC%86%A1%ED%8C%8C%EA%B5%AC%20%EC%86%A1%ED%8C%8C%EB%8C%80%EB%A1%9C28%EA%B8%B8%2032",
    rating: 4.2,
    reviewCount: 4112,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCOMrfQwL6WrcrBleW5Cwnp99WbkWhr1rn1Gy4z3lmE9_1NYJrz1iuL2wySwGmgOcMYCse42rHpvwu8h9Bm1Oj672VkKa3468BRykfoMqjdh6QWFv_Xv6kn2pq4okKqZMiwlpQJonHX-mgxQlI=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-437",
    name: "함평육회 본점",
    category: "육류,고기",
    address: "서울 송파구 올림픽로32길 22-19",
    phone: "02-423-3336",
    lat: 37.51356500232458,
    lng: 127.10854494620044,
    kakaoUrl: "http://place.map.kakao.com/1807395886",
    naverUrl: "https://map.naver.com/p/search/%ED%95%A8%ED%8F%89%EC%9C%A1%ED%9A%8C%20%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%86%A1%ED%8C%8C%EA%B5%AC%20%EC%98%AC%EB%A6%BC%ED%94%BD%EB%A1%9C32%EA%B8%B8%2022-19",
    rating: 4.6,
    reviewCount: 216,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDHuZAomb_awph6p7vz0SRxgafDJF7FQRA4YNNMQ_qHRHSQqX6CwU8gb6n1YnL760PfkJqrVjpaiInCYiCr7d7n0QqqgMEZp5uO1S0bZVBGSB3FP4PAhSFezZRJ0rbioH8bIbFpiMfEe6_Thr9EXHUg7g=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-438",
    name: "해궁회타운",
    category: "회",
    address: "경북 포항시 남구 구룡포읍 일출로 103-4",
    phone: "054-276-8656",
    lat: 36.00526960453116,
    lng: 129.57305516694663,
    kakaoUrl: "http://place.map.kakao.com/12038566",
    naverUrl: "https://map.naver.com/p/search/%ED%95%B4%EA%B6%81%ED%9A%8C%ED%83%80%EC%9A%B4%20%EA%B2%BD%EB%B6%81%20%ED%8F%AC%ED%95%AD%EC%8B%9C%20%EB%82%A8%EA%B5%AC%20%EA%B5%AC%EB%A3%A1%ED%8F%AC%EC%9D%8D%20%EC%9D%BC%EC%B6%9C%EB%A1%9C%20103-4",
    rating: 4.5,
    reviewCount: 170,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDff5rxJuvs5ZediMvI_uLWq9JNTlFVUU3UsOtp4f8ht2K5I01AU_ucotVFurwbApp9FupjDojQHxIJMPw_tdPJhhbuxsWsUcEg2veonffxWln7OVQHW4HhUa3zsXFw1IY3LWyJwNaEqiiLRA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      }
    ]
  },
  {
    id: "jjy-439",
    name: "해녀촌식당",
    category: "해물,생선",
    address: "경남 통영시 욕지면 서촌아랫길 112",
    phone: "055-644-0277",
    lat: 34.634454039993315,
    lng: 128.26452779818325,
    kakaoUrl: "http://place.map.kakao.com/16251592",
    naverUrl: "https://map.naver.com/p/search/%ED%95%B4%EB%85%80%EC%B4%8C%EC%8B%9D%EB%8B%B9%20%EA%B2%BD%EB%82%A8%20%ED%86%B5%EC%98%81%EC%8B%9C%20%EC%9A%95%EC%A7%80%EB%A9%B4%20%EC%84%9C%EC%B4%8C%EC%95%84%EB%9E%AB%EA%B8%B8%20112",
    rating: 3.8,
    reviewCount: 36,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD4Xp8Fg8wl5Eiu7ebpnnxvNWxrQ6DUQtIkpWb1T3DsfESeLcpDmGDJJkbFkzrX_9gRY6Ld4_S2s6K0UYeMXA8Y-L9k72V5yO46eQDTuwS-wcBA_h0UunyM2HYhZlHwsWMPE_D2lK7eJPxYGmQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      }
    ]
  },
  {
    id: "jjy-440",
    name: "해녀포차",
    category: "회",
    address: "경남 통영시 욕지면 동항리 560-20",
    phone: "-",
    lat: 34.635391256904235,
    lng: 128.26637082842754,
    kakaoUrl: "http://place.map.kakao.com/1607479434",
    naverUrl: "https://map.naver.com/p/search/%ED%95%B4%EB%85%80%ED%8F%AC%EC%B0%A8%20%EA%B2%BD%EB%82%A8%20%ED%86%B5%EC%98%81%EC%8B%9C%20%EC%9A%95%EC%A7%80%EB%A9%B4%20%EB%8F%99%ED%95%AD%EB%A6%AC%20560-20",
    rating: 4.3,
    reviewCount: 56,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDbJr_aands1l78uUlr4nzkOsdqlx27dQsz0gEldxDMd-PCVtHOIn3yXh8RjcvUii9RnPvSpeRWcquAsnsWMOOsWnSKwxMuQZRvN2LN5VFCoHhTWG82Q8GcqaNb6NV50qi-62_Rvgt48ScW=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 맛집."
      }
    ]
  },
  {
    id: "jjy-443",
    name: "행복짬뽕",
    category: "중식",
    address: "충북 충주시 행정7길 30",
    phone: "043-856-8060",
    lat: 37.0131577518942,
    lng: 127.917532536914,
    kakaoUrl: "http://place.map.kakao.com/23749811",
    naverUrl: "https://map.naver.com/p/search/%ED%96%89%EB%B3%B5%EC%A7%AC%EB%BD%95%20%EC%B6%A9%EB%B6%81%20%EC%B6%A9%EC%A3%BC%EC%8B%9C%20%ED%96%89%EC%A0%957%EA%B8%B8%2030",
    rating: 4.3,
    reviewCount: 64,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAi3G_AQB5Dlb68DXWSliN421lQK9I9GysXvvoaezXFP0Y87zZnKop-pNkxcOmeEgQpoOWWhURco22Wtisnk-YR5VavZohjAVWahs7xOrfkwZaipKA0prqHIwORIrbMdAf3Fy0wn9tHJlJ8eYgdf2-28A=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-444",
    name: "행복한고기집",
    category: "육류,고기",
    address: "경기 수원시 장안구 장안로 274",
    phone: "031-269-9576",
    lat: 37.306333120537765,
    lng: 126.99116784285478,
    kakaoUrl: "http://place.map.kakao.com/18831131",
    naverUrl: "https://map.naver.com/p/search/%ED%96%89%EB%B3%B5%ED%95%9C%EA%B3%A0%EA%B8%B0%EC%A7%91%20%EA%B2%BD%EA%B8%B0%20%EC%88%98%EC%9B%90%EC%8B%9C%20%EC%9E%A5%EC%95%88%EA%B5%AC%20%EC%9E%A5%EC%95%88%EB%A1%9C%20274",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-445",
    name: "현고대닭발 본점",
    category: "닭요리",
    address: "서울 동대문구 제기로2가길 3",
    phone: "02-928-9995",
    lat: 37.585365328375644,
    lng: 127.03460640814252,
    kakaoUrl: "http://place.map.kakao.com/8666853",
    naverUrl: "https://map.naver.com/p/search/%ED%98%84%EA%B3%A0%EB%8C%80%EB%8B%AD%EB%B0%9C%20%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EC%A0%9C%EA%B8%B0%EB%A1%9C2%EA%B0%80%EA%B8%B8%203",
    rating: 4.2,
    reviewCount: 325,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAoEI4ot6YZv6jYclI5xW_V0aoguAPJBFtpxuwSxGwA_3BKloIzM6XnaUaktWcVJpA-kvsPThMx5hDP2WkA2D70pp9TE2q2tr9YFjClvxijk8Mtjsb5g9QmW1oYPsD9moFO_sImloPy7CfSrwM=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 야식 맛집."
      }
    ]
  },
  {
    id: "jjy-446",
    name: "현래장",
    category: "중식",
    address: "서울 마포구 마포대로 20",
    phone: "02-712-0730",
    lat: 37.53842557160494,
    lng: 126.9449853625797,
    kakaoUrl: "http://place.map.kakao.com/8540921",
    naverUrl: "https://map.naver.com/p/search/%ED%98%84%EB%9E%98%EC%9E%A5%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EB%A7%88%ED%8F%AC%EB%8C%80%EB%A1%9C%2020",
    rating: 3.7,
    reviewCount: 724,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjC55g5bA8gukSRRuhF9n0P61j9YTq5jsLTkdjy1P1cCqIvJ6MqAuusqKVIpXJsakoIA-dFYoBpeG4BaaGYEQXSq5Pnv4F9kYpIEMKnrsyLI0Lg73-ZcL-yvo9M7xQKGycN6tWucy9VjCQH9mwfOZEhZ0A=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "70년만에 이런 손님은 처음이래요🤣 70년 전통 현래장 수타짜장면 중식 먹방",
        videoUrl: "https://www.youtube.com/watch?v=kF0V4Hrqluo",
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-447",
    name: "신형제횟집",
    category: "회",
    address: "경남 통영시 사량면 상도일주로 1580-8",
    phone: "055-643-3876",
    lat: 34.8451809284557,
    lng: 128.219451372487,
    kakaoUrl: "http://place.map.kakao.com/1607818083",
    naverUrl: "https://map.naver.com/p/search/%EC%8B%A0%ED%98%95%EC%A0%9C%ED%9A%9F%EC%A7%91%20%EA%B2%BD%EB%82%A8%20%ED%86%B5%EC%98%81%EC%8B%9C%20%EC%82%AC%EB%9F%89%EB%A9%B4%20%EC%83%81%EB%8F%84%EC%9D%BC%EC%A3%BC%EB%A1%9C%201580-8",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      }
    ]
  },
  {
    id: "jjy-448",
    name: "혜성칼국수",
    category: "칼국수",
    address: "서울 동대문구 왕산로 247-1",
    phone: "02-967-6918",
    lat: 37.583374451618006,
    lng: 127.04897707662815,
    kakaoUrl: "http://place.map.kakao.com/16937330",
    naverUrl: "https://map.naver.com/p/search/%ED%98%9C%EC%84%B1%EC%B9%BC%EA%B5%AD%EC%88%98%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EC%99%95%EC%82%B0%EB%A1%9C%20247-1",
    rating: 4.2,
    reviewCount: 1286,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAC91R_UMzh-dU7-bOlkCSD_6qblTU1cYct8iSfDVzRWXo4OSIayDmIht77ExBXE0yZwXU0sCym9EZ3MMf95VdMaVGbJXctiPMwSywO_6gSPAOuWfb8euU-YbZWpPy_fQXz9Bo_-FKLPqTKVbc=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "1968년 개업 54년전통 칼국수?😲 청량리 줄서서먹는 혜성칼국수 먹방",
        videoUrl: "https://www.youtube.com/watch?v=dcxQA9WRuq8",
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-449",
    name: "호근동",
    category: "육류,고기",
    address: "제주특별자치도 제주시 광양10길 17",
    phone: "064-752-3280",
    lat: 33.49862062271936,
    lng: 126.52847706857563,
    kakaoUrl: "http://place.map.kakao.com/10986589",
    naverUrl: "https://map.naver.com/p/search/%ED%98%B8%EA%B7%BC%EB%8F%99%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EA%B4%91%EC%96%9110%EA%B8%B8%2017",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "80세 할아버지께서 가게 망하겠대요😂 제주도 돔베고기 다 털었습니다! 30년전통 호근동 먹방",
        videoUrl: "https://www.youtube.com/watch?v=c0G-lfExt64",
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-450",
    name: "호랑이쌀국수 경대본점",
    category: "베트남음식",
    address: "대구 북구 대학로 103-2",
    phone: "053-955-5756",
    lat: 35.8941780169878,
    lng: 128.610779017631,
    kakaoUrl: "http://place.map.kakao.com/1864860472",
    naverUrl: "https://map.naver.com/p/search/%ED%98%B8%EB%9E%91%EC%9D%B4%EC%8C%80%EA%B5%AD%EC%88%98%20%EA%B2%BD%EB%8C%80%EB%B3%B8%EC%A0%90%20%EB%8C%80%EA%B5%AC%20%EB%B6%81%EA%B5%AC%20%EB%8C%80%ED%95%99%EB%A1%9C%20103-2",
    rating: 3.6,
    reviewCount: 9,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjA_E1LTMtFr-Ybi4c5TIs9s0DR2Fseug_XFWnZw9sItLC2dw-V70X8cDJ5R3z3grkFMMtMv0Bd6e-VY8FE3CuihQultdXIPHxaXnvhpkvPiWnupd9iCUISXFY5asg4sxVMXH20SZXAY99Wvp3A=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 아시안 맛집."
      }
    ]
  },
  {
    id: "jjy-451",
    name: "호산나의정부부대찌개",
    category: "찌개,전골",
    address: "서울 서대문구 충정로4길 8",
    phone: "02-313-1678",
    lat: 37.561019992212,
    lng: 126.963876901294,
    kakaoUrl: "http://place.map.kakao.com/16418514",
    naverUrl: "https://map.naver.com/p/search/%ED%98%B8%EC%82%B0%EB%82%98%EC%9D%98%EC%A0%95%EB%B6%80%EB%B6%80%EB%8C%80%EC%B0%8C%EA%B0%9C%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EC%B6%A9%EC%A0%95%EB%A1%9C4%EA%B8%B8%208",
    rating: 3.9,
    reviewCount: 59,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjATZCy2KG_TPR1C2ICmlqy9eAyRebvnK3CI4VOEO3e1c-KLG3FpAYJiTU_4JgBg9K5Fo2C1A3PS2W3ndWkF5CNIe4SBhAghVon5HztDU6zxlnD-1qSRvIzu6mZb37AHrzSY_mXNdPFRFkz4QA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-452",
    name: "호석촌",
    category: "한식",
    address: "서울 송파구 백제고분로39길 36",
    phone: "02-417-2459",
    lat: 37.5073328724866,
    lng: 127.103394367195,
    kakaoUrl: "http://place.map.kakao.com/2082865911",
    naverUrl: "https://map.naver.com/p/search/%ED%98%B8%EC%84%9D%EC%B4%8C%20%EC%84%9C%EC%9A%B8%20%EC%86%A1%ED%8C%8C%EA%B5%AC%20%EB%B0%B1%EC%A0%9C%EA%B3%A0%EB%B6%84%EB%A1%9C39%EA%B8%B8%2036",
    rating: 3.9,
    reviewCount: 165,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCeipYj9S5AX9Oe9viR8xapf9QXmJVw28N_nesyFjb_Z7A2np8n5S6QBOb8iT4Ma8rU-6gc-KhRlww54XQw42qjTswUkp9PI31gwTZwIJf75Uft8iFPmX0UYhwIH5kxP23uFH-EDe8PyE_dh4Y=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-453",
    name: "호수양곱창구이 일산본점",
    category: "곱창,막창",
    address: "경기 고양시 일산동구 무궁화로181번길 8-11",
    phone: "031-905-2792",
    lat: 37.67157227583939,
    lng: 126.78131724944551,
    kakaoUrl: "http://place.map.kakao.com/8155373",
    naverUrl: "https://map.naver.com/p/search/%ED%98%B8%EC%88%98%EC%96%91%EA%B3%B1%EC%B0%BD%EA%B5%AC%EC%9D%B4%20%EC%9D%BC%EC%82%B0%EB%B3%B8%EC%A0%90%20%EA%B2%BD%EA%B8%B0%20%EA%B3%A0%EC%96%91%EC%8B%9C%20%EC%9D%BC%EC%82%B0%EB%8F%99%EA%B5%AC%20%EB%AC%B4%EA%B6%81%ED%99%94%EB%A1%9C181%EB%B2%88%EA%B8%B8%208-11",
    rating: 3.8,
    reviewCount: 263,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCZ5nLv16KlDYs9MVblv5Xvm81MunwAhaQ6tv_LoyzANgHmUlT5wbmEFMf6kSHosPliFJvPRrcHd_xqSkhNfZhWesVRmFL8kGHCpORdigHExrtLwFRqAcJG_cMeC23TAoDMZoQ6WjW8gJGw_FQpkdPUQA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-454",
    name: "호호분식",
    category: "분식",
    address: "서울 도봉구 도봉로121길 32",
    phone: "02-900-1377",
    lat: 37.652449229007,
    lng: 127.034789364658,
    kakaoUrl: "http://place.map.kakao.com/21392443",
    naverUrl: "https://map.naver.com/p/search/%ED%98%B8%ED%98%B8%EB%B6%84%EC%8B%9D%20%EC%84%9C%EC%9A%B8%20%EB%8F%84%EB%B4%89%EA%B5%AC%20%EB%8F%84%EB%B4%89%EB%A1%9C121%EA%B8%B8%2032",
    rating: 4.1,
    reviewCount: 148,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCNStaJ__fWoXCiFhIL70osAtxjI952LXcEfP7UwgfqX-qSi1XSrszQVZ4l2ledlNnB17W1Uldsq1dJ9omr8Ij-LcrCWn3oOAvpzuqhAZLGggBu_4uipC5S7EbHYh-0Q7as0taTEpjpi1RY9bA=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-455",
    name: "홍가네영양센타",
    category: "삼계탕",
    address: "경기 안양시 만안구 장내로 148",
    phone: "031-443-2924",
    lat: 37.3979616400943,
    lng: 126.923957856466,
    kakaoUrl: "http://place.map.kakao.com/11197026",
    naverUrl: "https://map.naver.com/p/search/%ED%99%8D%EA%B0%80%EB%84%A4%EC%98%81%EC%96%91%EC%84%BC%ED%83%80%20%EA%B2%BD%EA%B8%B0%20%EC%95%88%EC%96%91%EC%8B%9C%20%EB%A7%8C%EC%95%88%EA%B5%AC%20%EC%9E%A5%EB%82%B4%EB%A1%9C%20148",
    rating: 4.1,
    reviewCount: 377,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAEikLazw6EkhQuQmT2uUpSMAr_yIkID3W8l4HrT4ElfGH70aM8CNdzPoMZKfEJv-SWI6BXelVpW48vYk1D6v2DlJ50TdalhOsCSUg0_S1pAxOxTZCCnz8u0SxZm6rSBftAovoCWsUmjFYA6AQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 찜·탕 맛집."
      }
    ]
  },
  {
    id: "jjy-456",
    name: "홍제동30년 우동국수",
    category: "돈까스,우동",
    address: "서울 은평구 서오릉로 242",
    phone: "02-388-5929",
    lat: 37.61631765232928,
    lng: 126.90780185101768,
    kakaoUrl: "http://place.map.kakao.com/1052646340",
    naverUrl: "https://map.naver.com/p/search/%ED%99%8D%EC%A0%9C%EB%8F%9930%EB%85%84%20%EC%9A%B0%EB%8F%99%EA%B5%AD%EC%88%98%20%EC%84%9C%EC%9A%B8%20%EC%9D%80%ED%8F%89%EA%B5%AC%20%EC%84%9C%EC%98%A4%EB%A6%89%EB%A1%9C%20242",
    rating: 4.2,
    reviewCount: 533,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjA5QPt1X1H1DBnM__Xofeq5XANMFnzcGlUQNG0jx9ILxYgmFvQXo5cakottnGMdlIJyg6_ixhhzBWM8CxkbcnhKCXLhz4hOExCQPeqPkmoQxvokvGiDfzgdXecof9TKxgspRAbsMaOievnU1NVuNow3_A=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 한식 맛집."
      }
    ]
  },
  {
    id: "jjy-457",
    name: "홍콩중화요리",
    category: "중국요리",
    address: "서울 동대문구 정릉천동로 107",
    phone: "02-966-6779",
    lat: 37.581807032574574,
    lng: 127.03552631682928,
    kakaoUrl: "http://place.map.kakao.com/16271741",
    naverUrl: "https://map.naver.com/p/search/%ED%99%8D%EC%BD%A9%EC%A4%91%ED%99%94%EC%9A%94%EB%A6%AC%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EC%A0%95%EB%A6%89%EC%B2%9C%EB%8F%99%EB%A1%9C%20107",
    rating: 4.4,
    reviewCount: 31,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBZsXlYikLUFWmcftLK36CrPtUFODPj-x-c4EpWPCdVMrp-F7_rDMg81rmPTHKcHkzMSfxWa2dJk3F8X_T5UnSTw0XnY5xC004VZv92Z9gTq0szPKFMyy2_x7JkmDtCiwomoGvo3Mu3R_E5ZPI=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: "여기가 찐 숨은 맛집입니다..👊🏻 제기동 40년 노포 홍콩중화요리 먹방",
        videoUrl: "https://www.youtube.com/watch?v=GiQlzDcTKj8",
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "jjy-458",
    name: "화동문어",
    category: "해물,생선",
    address: "강원특별자치도 강릉시 주문진읍 시장길 38",
    phone: "033-662-2703",
    lat: 37.89111205833987,
    lng: 128.82773266891087,
    kakaoUrl: "http://place.map.kakao.com/1519521521",
    naverUrl: "https://map.naver.com/p/search/%ED%99%94%EB%8F%99%EB%AC%B8%EC%96%B4%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EA%B0%95%EB%A6%89%EC%8B%9C%20%EC%A3%BC%EB%AC%B8%EC%A7%84%EC%9D%8D%20%EC%8B%9C%EC%9E%A5%EA%B8%B8%2038",
    rating: 5,
    reviewCount: 1,
    photoUrl: null,
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 돈까스·회 전문점."
      }
    ]
  },
  {
    id: "jjy-459",
    name: "환희분식",
    category: "분식",
    address: "서울 송파구 올림픽로35길 112",
    phone: "02-414-8307",
    lat: 37.517875997810314,
    lng: 127.10180491962826,
    kakaoUrl: "http://place.map.kakao.com/15606743",
    naverUrl: "https://map.naver.com/p/search/%ED%99%98%ED%9D%AC%EB%B6%84%EC%8B%9D%20%EC%84%9C%EC%9A%B8%20%EC%86%A1%ED%8C%8C%EA%B5%AC%20%EC%98%AC%EB%A6%BC%ED%94%BD%EB%A1%9C35%EA%B8%B8%20112",
    rating: 4.2,
    reviewCount: 118,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD84em-lD8FBlcyeK4yyZWMTH8ay4fx5R85R1mAUFceWj7hlQa1L-WwKpn1A6IGiz9_ZLy-y2EK_tBZqAyR8KULlN31E-2BZzO6MPVJTTArfWR0Jnm--dFhnXV8chVYVNl1p7TrTSmFIBzGOg=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 분식 맛집."
      }
    ]
  },
  {
    id: "jjy-460",
    name: "황금곱창 본점",
    category: "곱창,막창",
    address: "인천 계양구 아나지로 185",
    phone: "032-204-7796",
    lat: 37.52547968958664,
    lng: 126.71243554159352,
    kakaoUrl: "http://place.map.kakao.com/15676593",
    naverUrl: "https://map.naver.com/p/search/%ED%99%A9%EA%B8%88%EA%B3%B1%EC%B0%BD%20%EB%B3%B8%EC%A0%90%20%EC%9D%B8%EC%B2%9C%20%EA%B3%84%EC%96%91%EA%B5%AC%20%EC%95%84%EB%82%98%EC%A7%80%EB%A1%9C%20185",
    rating: 4.5,
    reviewCount: 109,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBHId_PWED4wHHoe93_Y1PcrZ3_8hH3pLZBCR0VAeruPuD3-W4CQEfBiF56nAKo3_dUnNWA9zUsKqXhs_b8Nyo7OB475t2qi5fJtZVOxNrM3d3XCcKDmDXICc9Y35ZBUwkRI5bi2M4xdcFAfWw=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
      }
    ]
  },
  {
    id: "jjy-461",
    name: "훠궈나라 강남점",
    category: "중식",
    address: "서울 강남구 봉은사로2길 35",
    phone: "02-554-7701",
    lat: 37.502432229002,
    lng: 127.026527161799,
    kakaoUrl: "http://place.map.kakao.com/528537292",
    naverUrl: "https://map.naver.com/p/search/%ED%9B%A0%EA%B6%88%EB%82%98%EB%9D%BC%20%EA%B0%95%EB%82%A8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EB%B4%89%EC%9D%80%EC%82%AC%EB%A1%9C2%EA%B8%B8%2035",
    rating: 4.2,
    reviewCount: 171,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCu-YRabAtFF0OBx-4ms6JJugA-9TfIiVO5v9moxObOkhccUuxFC9aVnxW6sI7WUGQJZtESo_byPGhASsLf9VG6Ya-oQZNHseAPK6QVrG6MVa_H1QCLi8GTf6maf-QxQSzIywbGgf68L1oOoKZcfZ7OEQ=s4800-w800",
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 중식 맛집."
      }
    ]
  },
  {
    id: "mns-001",
    name: "꼬끄더그릴",
    category: "닭요리",
    address: "서울 강남구 강남대로154길 10",
    phone: "02-6338-3838",
    lat: 37.517521712393965,
    lng: 127.02014596984124,
    kakaoUrl: "http://place.map.kakao.com/705044236",
    naverUrl: "https://map.naver.com/p/search/%EA%BC%AC%EB%81%84%EB%8D%94%EA%B7%B8%EB%A6%B4%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EA%B0%95%EB%82%A8%EB%8C%80%EB%A1%9C154%EA%B8%B8%2010",
    rating: 4.1,
    reviewCount: 130,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCR9GGp3VWC_GgXLkO5ui_RPueWfjWhqAks4fqgwNBSerxEk84TwrGeM4idW_bINQ2xdvlWpFz3LPXjfCtH5Aas7SQmVJOxSMoHWDmWWJky4cBBgCTie0UwQzvko1pBd5cJZ2Moh_D4yNQ_iP0=s4800-w800",
    youtubers: [
      {
        name: "맛있는 녀석들",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "전직 래퍼 출신 사장이 운영하는 퓨전 닭요리 전문점으로, 방송에 식당 사장님 자격으로 직접 출연하기도 했다."
      }
    ]
  },
  {
    id: "sc-001",
    name: "현대순대국",
    category: "순대",
    address: "서울 강남구 강남대로124길 20",
    phone: null,
    lat: 37.5090641197919,
    lng: 127.024235773746,
    kakaoUrl: "http://place.map.kakao.com/11831548",
    naverUrl: "https://map.naver.com/p/search/%ED%98%84%EB%8C%80%EC%88%9C%EB%8C%80%EA%B5%AD%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EA%B0%95%EB%82%A8%EB%8C%80%EB%A1%9C124%EA%B8%B8%2020",
    rating: 4.3,
    reviewCount: 489,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAt3tp9r0zZyf7zBiydJCpB75--weqGd507ZX3OTy1r2BWxrces9vF57frcquCcpK0unMB7GsnCdsx5bM6oApALDaxq9cn6tOW_8-358c1V9-jVD5FZedwxSFYWlbr7zA0ycXwwVFcpa6kudTnaX8wqQw=s4800-w800",
    youtubers: [
      {
        name: "성시경의 먹을텐데",
        videoTitle: "성시경의 먹을텐데 l 영동시장 현대순대국",
        videoUrl: "https://www.youtube.com/watch?v=AeZaYlJBWuI",
        recommendNote: null
      }
    ]
  },
  {
    id: "sc-002",
    name: "육개옥",
    category: "국밥",
    address: "서울 강남구 봉은사로 167",
    phone: "02-516-9181",
    lat: 37.507238568097,
    lng: 127.032256273604,
    kakaoUrl: "http://place.map.kakao.com/1808543028",
    naverUrl: "https://map.naver.com/p/search/%EC%9C%A1%EA%B0%9C%EC%98%A5%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EB%B4%89%EC%9D%80%EC%82%AC%EB%A1%9C%20167",
    rating: 4.1,
    reviewCount: 236,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCklWgwnzK7ZHTX6-5IdVfU9yI6FEvYTf6aX66f_zqbvfEj_Swxtvm9JOekpQOefeVkBpFjFkdh-UBxvkyBS7VyRgFtPWeFYg-Phtj4fYwToY6M49g54l2k4WhfpATsy89LkeCToquteanwQw=s4800-w800",
    youtubers: [
      {
        name: "성시경의 먹을텐데",
        videoTitle: "성시경의 먹을텐데 l 문천식과 육개장",
        videoUrl: "https://www.youtube.com/watch?v=aliPr4O2T5s",
        recommendNote: null
      }
    ]
  },
  {
    id: "sc-003",
    name: "안동국시",
    category: "국수",
    address: "서울 강남구 언주로167길 46",
    phone: "02-548-4986",
    lat: 37.5265964750989,
    lng: 127.029391111084,
    kakaoUrl: "http://place.map.kakao.com/10583440",
    naverUrl: "https://map.naver.com/p/search/%EC%95%88%EB%8F%99%EA%B5%AD%EC%8B%9C%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%96%B8%EC%A3%BC%EB%A1%9C167%EA%B8%B8%2046",
    rating: 3.8,
    reviewCount: 234,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCDRghgQfFtdgZ0NxsvgFpDeF5HLvgQgzY38k6v7SSzh02XpxLgpf2gySlLtjtUtBK9Vsx246LQBa8e8Don87EiU_65YAMmJ4CP7DdfNi6w7pOdhrHzidSt1qjk7rMMDkf5_j2uKeTQm8MaiA=s4800-w800",
    youtubers: [
      {
        name: "성시경의 먹을텐데",
        videoTitle: "성시경의 먹을텐데 l 첫 게스트와 안동국시 (GUEST.유세윤)",
        videoUrl: "https://www.youtube.com/watch?v=AHPEiQSyezo",
        recommendNote: null
      }
    ]
  },
  {
    id: "sc-004",
    name: "신미식당",
    category: "육류,고기",
    address: "서울 강남구 압구정로 214",
    phone: "02-516-4900",
    lat: 37.52793498570478,
    lng: 127.03087366251374,
    kakaoUrl: "http://place.map.kakao.com/11892123",
    naverUrl: "https://map.naver.com/p/search/%EC%8B%A0%EB%AF%B8%EC%8B%9D%EB%8B%B9%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%95%95%EA%B5%AC%EC%A0%95%EB%A1%9C%20214",
    rating: 4.2,
    reviewCount: 388,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAqyeweBXY0WdMcW7Oq0LAOTG900iVa1uXOO_oKjKMP8L9jYmBOlJGwiwgjPpaBV1PNZ6hbInh3sO7eVSDstACECkTfTFiDaQeX8qEFwboxERWKgDJpfXNgPHagt38fC-UGd0B0TYchasgKN6kr7_WH=s4800-w800",
    youtubers: [
      {
        name: "성시경의 먹을텐데",
        videoTitle: "성시경의 먹을텐데 l 신미식당 감자탕",
        videoUrl: "https://www.youtube.com/watch?v=a4IFiQUf3D4",
        recommendNote: null
      }
    ]
  },
  {
    id: "sc-005",
    name: "부흥왕족발",
    category: "족발,보쌈",
    address: "서울 강남구 삼성로146길 8",
    phone: "02-546-3727",
    lat: 37.52309327329298,
    lng: 127.04876908841662,
    kakaoUrl: "http://place.map.kakao.com/10466580",
    naverUrl: "https://map.naver.com/p/search/%EB%B6%80%ED%9D%A5%EC%99%95%EC%A1%B1%EB%B0%9C%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%82%BC%EC%84%B1%EB%A1%9C146%EA%B8%B8%208",
    rating: 4.2,
    reviewCount: 20,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBlnOF9ZHy8Tk6r1zDDU0He6rfBcL_X0GayEz6ZFUv6KLLP7dqpfLmEkM-zM2ubG8hglXAX3pSO7ByUhdOgKaaq8JUDIe089oYETFCYQYJUan6Dvszh9QTbWpykvoKx3Zz-Nfg-Al2i2O2zIacbYQSw=s4800-w800",
    youtubers: [
      {
        name: "성시경의 먹을텐데",
        videoTitle: "[sub] 성시경의 먹을텐데 l 청담동 부흥왕족발",
        videoUrl: "https://www.youtube.com/watch?v=lO1qFusLkTQ",
        recommendNote: null
      }
    ]
  },
  {
    id: "sc-006",
    name: "이남장 삼성점",
    category: "설렁탕",
    address: "서울 강남구 봉은사로108길 21",
    phone: "02-569-8726",
    lat: 37.5135684607614,
    lng: 127.064450126559,
    kakaoUrl: "http://place.map.kakao.com/16649489",
    naverUrl: "https://map.naver.com/p/search/%EC%9D%B4%EB%82%A8%EC%9E%A5%20%EC%82%BC%EC%84%B1%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EB%B4%89%EC%9D%80%EC%82%AC%EB%A1%9C108%EA%B8%B8%2021",
    rating: 4.2,
    reviewCount: 1049,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBUtx1CMUCglrGvHGez9UP7mhRFe7ZYSU23jQB8iw4un_B3DzbHfkpWy0KFtGkn8X-99JkqMx4JoYIdrOzH6tHOPZy8EYN66gLz_7R90MHZaIz7-pgNBUPuRVVzrw_E29fwhbGA3BKFzHRp=s4800-w800",
    youtubers: [
      {
        name: "성시경의 먹을텐데",
        videoTitle: null,
        videoUrl: null,
        recommendNote: null
      }
    ]
  },
  {
    id: "sc-007",
    name: "강남진해장",
    category: "찌개,전골",
    address: "서울 강남구 테헤란로5길 11",
    phone: "02-557-2662",
    lat: 37.499584393000326,
    lng: 127.02930814350843,
    kakaoUrl: "http://place.map.kakao.com/1428481536",
    naverUrl: "https://map.naver.com/p/search/%EA%B0%95%EB%82%A8%EC%A7%84%ED%95%B4%EC%9E%A5%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%ED%85%8C%ED%97%A4%EB%9E%80%EB%A1%9C5%EA%B8%B8%2011",
    rating: 4.2,
    reviewCount: 1420,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCFucBNiJmJQKNUZN8ThCfirG9uxPq3WbShsUnlXDjhTwcKT7WLCKmR_c4e1QjETZ74m7uSug98kPCXsVzKTMnkT9qQp638lV4VduXFKShkLUzmTSg0JK-iqNNT1vFK1ylEa6G74LRRhE95nN4XuhkMmw=s4800-w800",
    youtubers: [
      {
        name: "성시경의 먹을텐데",
        videoTitle: "[sub] 성시경의 먹을텐데 l 역삼동 강남 진해장",
        videoUrl: "https://www.youtube.com/watch?v=u4Ci7OW5ES0",
        recommendNote: null
      }
    ]
  },
  {
    id: "sc-008",
    name: "대우부대찌개",
    category: "찌개,전골",
    address: "서울 강남구 테헤란로25길 34",
    phone: "02-552-1663",
    lat: 37.502696655575825,
    lng: 127.03521737405278,
    kakaoUrl: "http://place.map.kakao.com/7819490",
    naverUrl: "https://map.naver.com/p/search/%EB%8C%80%EC%9A%B0%EB%B6%80%EB%8C%80%EC%B0%8C%EA%B0%9C%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%ED%85%8C%ED%97%A4%EB%9E%80%EB%A1%9C25%EA%B8%B8%2034",
    rating: 4.2,
    reviewCount: 1636,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDK8Z31Zcx5M9VHYclS8hkvJWdv33dvpS4W6fePSnyDoabuY53g1SZTP0LiQjatU31Yh8JFunq7Oop8Opng1HmpXkoc17O5dha-D7EYlZu0n5EUVaA6lGODf7RlIEmLMvoOHU9c7WdBDx1pNQ=s4800-w800",
    youtubers: [
      {
        name: "성시경의 먹을텐데",
        videoTitle: "[sub] 성시경의 먹을텐데 l 역삼동 대우 부대찌개",
        videoUrl: "https://www.youtube.com/watch?v=lQ9le3dqrRk",
        recommendNote: null
      }
    ]
  },
  {
    id: "sc-009",
    name: "도명골청국장",
    category: "한식",
    address: "서울 강남구 봉은사로114길 38",
    phone: "02-569-6999",
    lat: 37.51262098003945,
    lng: 127.06540621093926,
    kakaoUrl: "http://place.map.kakao.com/2130836465",
    naverUrl: "https://map.naver.com/p/search/%EB%8F%84%EB%AA%85%EA%B3%A8%EC%B2%AD%EA%B5%AD%EC%9E%A5%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EB%B4%89%EC%9D%80%EC%82%AC%EB%A1%9C114%EA%B8%B8%2038",
    rating: 4.5,
    reviewCount: 159,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCABO1RPEHjZiZEhOLrFpVcQo5gdj5_LMbKVTaLtyJ6XLvRKnSbEFpImc0daTMn8ZRtjKK2EioDeoVG61Li5UaWM-_oj621AK3TJ05324R2ij0IxVrah5jz9m5ZU8Pi2V5LqcO4RjXe1Rw1eng=s4800-w800",
    youtubers: [
      {
        name: "성시경의 먹을텐데",
        videoTitle: "[sub] 성시경의 먹을텐데 l 삼성동 도명골 청국장",
        videoUrl: "https://www.youtube.com/watch?v=LXKubqppj0U",
        recommendNote: null
      }
    ]
  },
  {
    id: "sc-010",
    name: "왕스덕",
    category: "중식",
    address: "경기 성남시 분당구 대왕판교로645번길 36",
    phone: "031-606-8517",
    lat: 37.4004108231145,
    lng: 127.102084009388,
    kakaoUrl: "http://place.map.kakao.com/1379913602",
    naverUrl: "https://map.naver.com/p/search/%EC%99%95%EC%8A%A4%EB%8D%95%20%EA%B2%BD%EA%B8%B0%20%EC%84%B1%EB%82%A8%EC%8B%9C%20%EB%B6%84%EB%8B%B9%EA%B5%AC%20%EB%8C%80%EC%99%95%ED%8C%90%EA%B5%90%EB%A1%9C645%EB%B2%88%EA%B8%B8%2036",
    rating: 3.4,
    reviewCount: 256,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBXGl-NxIDEaSwvOxwYlCc9fcI-R7WMkro21zFXTF8GCdRWQi3h63nxCllHRK9LkQ78fbDhk7peJmFSBXBDVO1hs4TcUCKqwNgAitXTzVM0XgW8r5SGtgj30-dvcekq0_0VVpE5ubv_WeR7R3H7wH0tVw=s4800-w800",
    youtubers: [
      {
        name: "성시경의 먹을텐데",
        videoTitle: "[sub] 성시경의 먹을텐데 l 논현동 왕스덕",
        videoUrl: "https://www.youtube.com/watch?v=-e6zzDqCS6E",
        recommendNote: null
      }
    ]
  },
  {
    id: "sc-013",
    name: "미남옥",
    category: "곰탕",
    address: "서울 강남구 언주로153길 12",
    phone: "02-549-5553",
    lat: 37.52294578490738,
    lng: 127.03219063516923,
    kakaoUrl: "http://place.map.kakao.com/940697725",
    naverUrl: "https://map.naver.com/p/search/%EB%AF%B8%EB%82%A8%EC%98%A5%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%96%B8%EC%A3%BC%EB%A1%9C153%EA%B8%B8%2012",
    rating: 4.4,
    reviewCount: 104,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD4DO0ObZ-PCX7l5VPWyKxod5BBHrcgJ4KKtlEfENRf8hNplE7YWnGMHL8lxobol8KFTBev1ID_Q_6mrClo_LZzY0SUo565thiH7MgoiMxY6TPaUnqXt9GqzYZ1ynsMfhRAzK8iaTPHSfKOszg=s4800-w800",
    youtubers: [
      {
        name: "성시경의 먹을텐데",
        videoTitle: "성시경의 먹을텐데 l 신사동 미남옥",
        videoUrl: "https://www.youtube.com/watch?v=z5nqim1xRyE",
        recommendNote: null
      }
    ]
  },
  {
    id: "sc-014",
    name: "삼호짱뚱이",
    category: "해물,생선",
    address: "서울 강남구 도산대로34길 11",
    phone: "02-547-1416",
    lat: 37.51963671546776,
    lng: 127.03101729816763,
    kakaoUrl: "http://place.map.kakao.com/7929136",
    naverUrl: "https://map.naver.com/p/search/%EC%82%BC%ED%98%B8%EC%A7%B1%EB%9A%B1%EC%9D%B4%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EB%8F%84%EC%82%B0%EB%8C%80%EB%A1%9C34%EA%B8%B8%2011",
    rating: 4.2,
    reviewCount: 367,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAGQShvhXog2XjcmcawMp6mQGJBWKXym_zkVIw646Wu7qEnY6P37t_dvDsBl1WqoNKMP0qbnQYmiHP1miIJtand0D5jPMkExV4ISe4czVsP9Of08zQ2CBBg3I7X8-6AuGp5v8k3iZBJX20iDQ=s4800-w800",
    youtubers: [
      {
        name: "성시경의 먹을텐데",
        videoTitle: null,
        videoUrl: null,
        recommendNote: null
      }
    ]
  },
  {
    id: "sc-015",
    name: "방화동교동짬뽕",
    category: "중국요리",
    address: "서울 강서구 금낭화로24나길 21",
    phone: "02-2665-5778",
    lat: 37.57725372854616,
    lng: 126.81575560825779,
    kakaoUrl: "http://place.map.kakao.com/25858128",
    naverUrl: "https://map.naver.com/p/search/%EB%B0%A9%ED%99%94%EB%8F%99%EA%B5%90%EB%8F%99%EC%A7%AC%EB%BD%95%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EC%84%9C%EA%B5%AC%20%EA%B8%88%EB%82%AD%ED%99%94%EB%A1%9C24%EB%82%98%EA%B8%B8%2021",
    rating: 4.5,
    reviewCount: 716,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCOORHyBniLEp44Lc6nBPL3YwKM9UyRH7Ncxr5oAXKuXERJd0a2XXQRooTjER-XVCvPfhagkigglA9F9BVQPzvV0qAMUzfCK6R_I5J8qy9YPlUxBJyT9Qi0wenChlQ4ILLo83Mdd_GGoGw9yQ=s4800-w800",
    youtubers: [
      {
        name: "성시경의 먹을텐데",
        videoTitle: "성시경의 먹을텐데 l 방화동 교동짬뽕",
        videoUrl: "https://www.youtube.com/watch?v=l4bgfC2WlUY",
        recommendNote: null
      }
    ]
  },
  {
    id: "sc-016",
    name: "영미오리탕",
    category: "오리",
    address: "전남광주통합특별시 북구 경양로 126",
    phone: "062-527-0248",
    lat: 35.16138362196164,
    lng: 126.90552043216846,
    kakaoUrl: "http://place.map.kakao.com/8441874",
    naverUrl: "https://map.naver.com/p/search/%EC%98%81%EB%AF%B8%EC%98%A4%EB%A6%AC%ED%83%95%20%EC%A0%84%EB%82%A8%EA%B4%91%EC%A3%BC%ED%86%B5%ED%95%A9%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EB%B6%81%EA%B5%AC%20%EA%B2%BD%EC%96%91%EB%A1%9C%20126",
    rating: 3.8,
    reviewCount: 1769,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCY3Hi974316VeQQtdFUiRwW7smddS5AJh00Ch68N-obkP1b8HfOPdWkQfZ5oLYIDzq5HKQy-kVsG_l_hXJEDVa5WiD3eEjda7xEL0R_Dhl1FiFSdJ-ZMcWRgxfyv0BBPc8mZTrSsyN_ohfiXQjZ0W1lQ=s4800-w800",
    youtubers: [
      {
        name: "성시경의 먹을텐데",
        videoTitle: "성시경의 먹을텐데 l 군자 영미 오리탕",
        videoUrl: "https://www.youtube.com/watch?v=vvGnYVFWrMc",
        recommendNote: null
      }
    ]
  },
  {
    id: "sc-017",
    name: "맛좋은순대국",
    category: "순대",
    address: "서울 광진구 자양번영로1길 22",
    phone: "02-458-5737",
    lat: 37.530865017051845,
    lng: 127.07367768605853,
    kakaoUrl: "http://place.map.kakao.com/10346328",
    naverUrl: "https://map.naver.com/p/search/%EB%A7%9B%EC%A2%8B%EC%9D%80%EC%88%9C%EB%8C%80%EA%B5%AD%20%EC%84%9C%EC%9A%B8%20%EA%B4%91%EC%A7%84%EA%B5%AC%20%EC%9E%90%EC%96%91%EB%B2%88%EC%98%81%EB%A1%9C1%EA%B8%B8%2022",
    rating: 4.2,
    reviewCount: 147,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDhPu-Y9NQ5fM0zD9PMCsrgF60fyRQtxlSosn3x7hfdiDoUzIGSD5edZrN2r_prbNQPNBg_gSY14ReBpVYhdMNihX171TXhRXGXZrbq9SDn_9Qvu21EqobfuRDo_TLoYuNCC5nNfUsfX0HU_CiMTxMhAA=s4800-w800",
    youtubers: [
      {
        name: "성시경의 먹을텐데",
        videoTitle: "성시경의 먹을텐데 l 맛 좋은 순대국",
        videoUrl: "https://www.youtube.com/watch?v=P6sEVRj87gQ",
        recommendNote: null
      }
    ]
  },
  {
    id: "sc-019",
    name: "어머니대성집",
    category: "해장국",
    address: "서울 동대문구 왕산로11길 4",
    phone: "02-923-1718",
    lat: 37.57741837425039,
    lng: 127.02858466713235,
    kakaoUrl: "http://place.map.kakao.com/907979960",
    naverUrl: "https://map.naver.com/p/search/%EC%96%B4%EB%A8%B8%EB%8B%88%EB%8C%80%EC%84%B1%EC%A7%91%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EC%99%95%EC%82%B0%EB%A1%9C11%EA%B8%B8%204",
    rating: 4.2,
    reviewCount: 2144,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD4OlafyjAfB4AjKW_exuXaTXwesAeaeZBDRSatZx819hqwMGEpy-EFfrJrBa4FiIN2VUSMpCDW_8kS4VGeibbIzWRRCqMsqRg52ASNkdCQgAnUhtdwxgHA5AA0eVzFChuLokV5hJnP5maz=s4800-w800",
    youtubers: [
      {
        name: "성시경의 먹을텐데",
        videoTitle: "[sub] 성시경의 먹을텐데 l 어머니 대성집 해장국",
        videoUrl: "https://www.youtube.com/watch?v=28pXe1a9yrA",
        recommendNote: null
      }
    ]
  },
  {
    id: "sc-021",
    name: "권영수대가전골",
    category: "찌개,전골",
    address: "서울 동대문구 고산자로36길 3",
    phone: "02-960-6043",
    lat: 37.57945802812345,
    lng: 127.03875167673729,
    kakaoUrl: "http://place.map.kakao.com/1910019452",
    naverUrl: "https://map.naver.com/p/search/%EA%B6%8C%EC%98%81%EC%88%98%EB%8C%80%EA%B0%80%EC%A0%84%EA%B3%A8%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EA%B3%A0%EC%82%B0%EC%9E%90%EB%A1%9C36%EA%B8%B8%203",
    rating: 3.3,
    reviewCount: 30,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAOstZgcf3wJVmoBxrrfyLyi8mI2EhJUjozhJszFlXIIqyVj-ttWIqhxNLslvi_cJZk62sKxsYOmvaQ1jOr7Ehdrz3A4Zc0yN8K3vczBTjD9VxurU4NHQuCDymdOtjlg3HaAvh49oSMWDK5WMc=s4800-w800",
    youtubers: [
      {
        name: "성시경의 먹을텐데",
        videoTitle: "[sub] 성시경의 먹을텐데 l 경동시장 권영수 대가전골",
        videoUrl: "https://www.youtube.com/watch?v=UhlyCAVklLE",
        recommendNote: null
      }
    ]
  },
  {
    id: "sc-022",
    name: "부영각",
    category: "중국요리",
    address: "서울 마포구 토정로 268",
    phone: "02-715-7095",
    lat: 37.5425107266566,
    lng: 126.939503454631,
    kakaoUrl: "http://place.map.kakao.com/10470081",
    naverUrl: "https://map.naver.com/p/search/%EB%B6%80%EC%98%81%EA%B0%81%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%ED%86%A0%EC%A0%95%EB%A1%9C%20268",
    rating: 4.1,
    reviewCount: 594,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDdnsWEuNxx0Twp_Z2zQw-8g9iU0K2QI77Hd5j5BJX0dbS5F5zkLifwxW8wTWK9A38AzH3SAyYgCKfBfBLAnOOZ3QyD7ihzzYcGgfcpg4241O0KPtcSxIUzQIFHZ-VDH9Rg1A4KlVv4bmXDEg=s4800-w800",
    youtubers: [
      {
        name: "성시경의 먹을텐데",
        videoTitle: null,
        videoUrl: null,
        recommendNote: null
      }
    ]
  },
  {
    id: "sc-023",
    name: "원조신촌설렁탕",
    category: "설렁탕",
    address: "서울 마포구 마포대로14길 16",
    phone: "02-712-3300",
    lat: 37.5482809161142,
    lng: 126.956269475672,
    kakaoUrl: "http://place.map.kakao.com/16044683",
    naverUrl: "https://map.naver.com/p/search/%EC%9B%90%EC%A1%B0%EC%8B%A0%EC%B4%8C%EC%84%A4%EB%A0%81%ED%83%95%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EB%A7%88%ED%8F%AC%EB%8C%80%EB%A1%9C14%EA%B8%B8%2016",
    rating: 4.4,
    reviewCount: 271,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCFw33HUaFKyZTpXS4_3jwHERvGIcGw24g50k7lxQzFl5-pvAaFWA658oK4FYqcDdUK_YZV2ORX8gl8Sk995GQfc-JvDuxVAYsxrcBx1q6xCOwGrXV8-BNxPS8BQJd2QRxa-9lN6mLpw6xGEA=s4800-w800",
    youtubers: [
      {
        name: "성시경의 먹을텐데",
        videoTitle: "[sub] 성시경의 먹을텐데 l 공덕동 원조신촌설렁탕",
        videoUrl: "https://www.youtube.com/watch?v=XO-UqGjZomc",
        recommendNote: null
      }
    ]
  },
  {
    id: "sc-024",
    name: "길상양꼬치",
    category: "양꼬치",
    address: "서울 서대문구 연세로5가길 17",
    phone: "02-336-8018",
    lat: 37.5571877488669,
    lng: 126.935639080919,
    kakaoUrl: "http://place.map.kakao.com/25799235",
    naverUrl: "https://map.naver.com/p/search/%EA%B8%B8%EC%83%81%EC%96%91%EA%BC%AC%EC%B9%98%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EC%97%B0%EC%84%B8%EB%A1%9C5%EA%B0%80%EA%B8%B8%2017",
    rating: 4.3,
    reviewCount: 139,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCwXY7Ix-N1d9w2zbR_yxdCptDx7x7V9QW1CJB28sSRdxZiP-6-CPa74oj9q2zIf8LR1RbZOkCgqBIsQVkIUPGtcAA3VSPhaYBCiuawUrIsHpR7EhctHQ_THUZ9WAvJ1fURuy19OSS902OL2A=s4800-w800",
    youtubers: [
      {
        name: "성시경의 먹을텐데",
        videoTitle: null,
        videoUrl: null,
        recommendNote: null
      }
    ]
  },
  {
    id: "sc-025",
    name: "청실홍실",
    category: "감자탕",
    address: "서울 서초구 서래로10길 9",
    phone: "02-535-2544",
    lat: 37.4995663995735,
    lng: 126.998927916588,
    kakaoUrl: "http://place.map.kakao.com/16470308",
    naverUrl: "https://map.naver.com/p/search/%EC%B2%AD%EC%8B%A4%ED%99%8D%EC%8B%A4%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EC%84%9C%EB%9E%98%EB%A1%9C10%EA%B8%B8%209",
    rating: 4.4,
    reviewCount: 161,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCU9Yhz-ixxbLkZMDruiY2uLkBVLIKmBKfIY2LUpUoqwtSjRtvy5vMCpDhGXXLzqlvajDlXKPGVM0Ll8JUXv7P8yn_t8STx8KS0GSI4fEOQKvY4L-OLY2-Q3IbgtWxAeWHfIAmD1hehzHvqeg=s4800-w800",
    youtubers: [
      {
        name: "성시경의 먹을텐데",
        videoTitle: "성시경의 먹을텐데 l 서래마을 청실홍실",
        videoUrl: "https://www.youtube.com/watch?v=3rWCk9M9MQY",
        recommendNote: null
      },
      {
        name: "최자로드",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "서래마을의 감자탕 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "sc-026",
    name: "성천막국수 논현점",
    category: "국수",
    address: "서울 서초구 강남대로 545-12",
    phone: "02-548-5529",
    lat: 37.510370368086654,
    lng: 127.02058515818821,
    kakaoUrl: "http://place.map.kakao.com/862508200",
    naverUrl: "https://map.naver.com/p/search/%EC%84%B1%EC%B2%9C%EB%A7%89%EA%B5%AD%EC%88%98%20%EB%85%BC%ED%98%84%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EA%B0%95%EB%82%A8%EB%8C%80%EB%A1%9C%20545-12",
    rating: 4.1,
    reviewCount: 253,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCGejQnAAutM79wsN341cjzNPbytWWSo4xEdK4CeY8qzwPTZJHKl6GfMxMb33ZbAHeisU8JOOKhfsWZpi9T-S8Jp7OhIRWbf8M7FxWd1yFvoP5RPtGsJnBV_Xi5DUWW8IbuH7jrlIW5QUbldQ=s4800-w800",
    youtubers: [
      {
        name: "성시경의 먹을텐데",
        videoTitle: "성시경의 먹을텐데 l 논현 성천막국수",
        videoUrl: "https://www.youtube.com/watch?v=V0QUgTpLTwo",
        recommendNote: null
      }
    ]
  },
  {
    id: "sc-027",
    name: "서이축산",
    category: "정육점",
    address: "서울 서초구 서래로 29",
    phone: "02-535-1145",
    lat: 37.497564353887654,
    lng: 126.99815217560459,
    kakaoUrl: "http://place.map.kakao.com/1238960275",
    naverUrl: "https://map.naver.com/p/search/%EC%84%9C%EC%9D%B4%EC%B6%95%EC%82%B0%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EC%84%9C%EB%9E%98%EB%A1%9C%2029",
    rating: 3.5,
    reviewCount: 2,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjADsg_j9YrgqV11n1UiqkMDpRgg9BFgnWkz5rU92sMhOnF5dZ3KtODozDfASu23QZA_UgHcmqKoLn4GLme1wVAKooOZZIgE-CFMPuKmG1n9BRhnkZ3GVqb6POZz2BFdv9W-GouNsQi9X0IX0w=s4800-w800",
    youtubers: [
      {
        name: "성시경의 먹을텐데",
        videoTitle: "성시경의 먹을텐데 l 서래마을 서이축산",
        videoUrl: "https://www.youtube.com/watch?v=LQOYruD7sek",
        recommendNote: null
      }
    ]
  },
  {
    id: "sc-028",
    name: "영동설렁탕",
    category: "설렁탕",
    address: "서울 서초구 강남대로101안길 24",
    phone: "02-543-4716",
    lat: 37.51615082556445,
    lng: 127.01737204634458,
    kakaoUrl: "http://place.map.kakao.com/8008344",
    naverUrl: "https://map.naver.com/p/search/%EC%98%81%EB%8F%99%EC%84%A4%EB%A0%81%ED%83%95%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EA%B0%95%EB%82%A8%EB%8C%80%EB%A1%9C101%EC%95%88%EA%B8%B8%2024",
    rating: 4.1,
    reviewCount: 3261,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBjvDFY5NHkzLadeZBmm7_sQO0L0DYiiYzUuS2iGuFV2nm2g38H3lSH6bCVEwdUDg7PVhj7Pb3zRrHUPxg-kkdIICEFuVHKyvnReUYVfHVglxBKERkLdV0j9v4gyNGNtRomPCEz9jqhED1H5mo=s4800-w800",
    youtubers: [
      {
        name: "성시경의 먹을텐데",
        videoTitle: "성시경의 먹을텐데 l 신사 영동 설렁탕",
        videoUrl: "https://www.youtube.com/watch?v=fR2z8JyBb44",
        recommendNote: null
      }
    ]
  },
  {
    id: "sc-029",
    name: "화목순대국",
    category: "순대",
    address: "서울 영등포구 여의대방로 383",
    phone: "02-780-8191",
    lat: 37.51925139233756,
    lng: 126.93129172468807,
    kakaoUrl: "http://place.map.kakao.com/21423297",
    naverUrl: "https://map.naver.com/p/search/%ED%99%94%EB%AA%A9%EC%88%9C%EB%8C%80%EA%B5%AD%20%EC%84%9C%EC%9A%B8%20%EC%98%81%EB%93%B1%ED%8F%AC%EA%B5%AC%20%EC%97%AC%EC%9D%98%EB%8C%80%EB%B0%A9%EB%A1%9C%20383",
    rating: 4.2,
    reviewCount: 1288,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCEDuRubymErP9qANlmw-z3PZ7eqtB_9wC8Ln2i-pzeJ3zWnTorhtVq1e8xJetAc76TdZzhKXoDtXS_sbsSydRQ7forSjuYnah7EX3a6nUtBRhm4Z0MbQtlnS7i3aSs64c27zupvJ5uzqfdgzZm3MOsxQ=s4800-w800",
    youtubers: [
      {
        name: "성시경의 먹을텐데",
        videoTitle: "[sub] 성시경의 먹을텐데 l 화목 순대국",
        videoUrl: "https://www.youtube.com/watch?v=DpGJEDKsf1o",
        recommendNote: null
      }
    ]
  },
  {
    id: "sc-030",
    name: "산동교자",
    category: "중국요리",
    address: "서울 중구 남대문로 52-13",
    phone: "02-778-4150",
    lat: 37.56213783919516,
    lng: 126.98240562832072,
    kakaoUrl: "http://place.map.kakao.com/7912905",
    naverUrl: "https://map.naver.com/p/search/%EC%82%B0%EB%8F%99%EA%B5%90%EC%9E%90%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EB%82%A8%EB%8C%80%EB%AC%B8%EB%A1%9C%2052-13",
    rating: 3.7,
    reviewCount: 685,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBKL_j4uK_3xiOlRg4UW8MTVj8FctOY8HSxqXh4pvPlyhNIHrSUQbuRJCoHGEPfs4Vuvv8MvZLwNTfPmktx3KesHaH7SHMgWK94Vvn1Ft8ErN_1bSCZaASeo-Vz0RKZJxi3b9ljXWEjJa148CyV-n52=s4800-w800",
    youtubers: [
      {
        name: "성시경의 먹을텐데",
        videoTitle: "성시경의 먹을텐데 l 명동 산동교자",
        videoUrl: "https://www.youtube.com/watch?v=AmZ5ceHhkG8",
        recommendNote: null
      }
    ]
  },
  {
    id: "sc-031",
    name: "필동면옥",
    category: "냉면",
    address: "서울 중구 서애로 26",
    phone: "02-2266-2611",
    lat: 37.5603983847784,
    lng: 126.99693958989,
    kakaoUrl: "http://place.map.kakao.com/11231325",
    naverUrl: "https://map.naver.com/p/search/%ED%95%84%EB%8F%99%EB%A9%B4%EC%98%A5%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EC%84%9C%EC%95%A0%EB%A1%9C%2026",
    rating: 4.2,
    reviewCount: 1156,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDkhR0mIJmd3ute1rE3SniksXBHpRz3aNNdn20SOpa8v5goVaN4Ckq2rLuDZy01zBXIAcVdVPSh7B6vw6TRgZXFES04VtQQMC2f4u9TuAzEQcTbhRNmy5CBao83087yUxd2eUV1iU49a-tZ3vk=s4800-w800",
    youtubers: [
      {
        name: "성시경의 먹을텐데",
        videoTitle: "성시경의 먹을텐데 l 충무로 필동면옥",
        videoUrl: "https://www.youtube.com/watch?v=EnMwZlMLPWY",
        recommendNote: null
      }
    ]
  },
  {
    id: "sc-032",
    name: "진미식당",
    category: "한식",
    address: "서울 용산구 백범로90길 38",
    phone: "02-703-6842",
    lat: 37.53673789215872,
    lng: 126.96960923245895,
    kakaoUrl: "http://place.map.kakao.com/16526880",
    naverUrl: "https://map.naver.com/p/search/%EC%A7%84%EB%AF%B8%EC%8B%9D%EB%8B%B9%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%EB%B0%B1%EB%B2%94%EB%A1%9C90%EA%B8%B8%2038",
    rating: 4.1,
    reviewCount: 131,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCc4_ubkWFsN090PCAjRcl6YwcqV115CUuOD-_LZaKUYLrRM7g02dCLYEVxgLvIfXQpGZ0aPEGPh8TIB3EOoYdDY-TwGiIX1oxUSGfiFiqqDurD_5O-Hbt5BZyTxcmNQSFYA0CwWYd-pP9oMmg=s4800-w800",
    youtubers: [
      {
        name: "성시경의 먹을텐데",
        videoTitle: null,
        videoUrl: null,
        recommendNote: null
      }
    ]
  },
  {
    id: "sc-033",
    name: "약수순대국",
    category: "순대",
    address: "서울 중구 동호로7길 14",
    phone: "02-2236-5926",
    lat: 37.55328275350285,
    lng: 127.01080321635617,
    kakaoUrl: "http://place.map.kakao.com/13499817",
    naverUrl: "https://map.naver.com/p/search/%EC%95%BD%EC%88%98%EC%88%9C%EB%8C%80%EA%B5%AD%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EB%8F%99%ED%98%B8%EB%A1%9C7%EA%B8%B8%2014",
    rating: 4.1,
    reviewCount: 1123,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCFJE2zceaRrJfCeYmBLKoHrqXPZtOphT6-uF42LXB6ZO4mjnlMKiS5AzMw_v3FePxkjbn84jMm0JaivmhsHQhuBVZ6bUIpbY6E-gtQrnp8d1YXMowL_ApCtNMZ67ozXUTFqxfBZNXXNN_0Jzzv2pxa=s4800-w800",
    youtubers: [
      {
        name: "성시경의 먹을텐데",
        videoTitle: null,
        videoUrl: null,
        recommendNote: null
      }
    ]
  },
  {
    id: "sc-034",
    name: "완도전복",
    category: "굴,전복",
    address: "서울 중구 동호로5길 2",
    phone: "02-2234-8538",
    lat: 37.552657345381775,
    lng: 127.01199932388397,
    kakaoUrl: "http://place.map.kakao.com/10616945",
    naverUrl: "https://map.naver.com/p/search/%EC%99%84%EB%8F%84%EC%A0%84%EB%B3%B5%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EB%8F%99%ED%98%B8%EB%A1%9C5%EA%B8%B8%202",
    rating: 4.4,
    reviewCount: 27,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCcVgP86zm4KPpVCE3WhK-zgXU8EKYAtgzQIYhUtIUsTj0qgUPTdTaFOXa5OrvNDA37EwfP-8OGmKdGwC9hg1WTwT4--HN1VAa_FbA8xZYZ1BByz9BQlNTKL-B6ozwEq0drXp21U23pFuOAiw=s4800-w800",
    youtubers: [
      {
        name: "성시경의 먹을텐데",
        videoTitle: "성시경의 먹을텐데 l 약수 완도 전복",
        videoUrl: "https://www.youtube.com/watch?v=ZKOYAQXVhaA",
        recommendNote: null
      }
    ]
  },
  {
    id: "sc-035",
    name: "이태원숯불구이",
    category: "육류,고기",
    address: "서울 용산구 녹사평대로32길 41-5",
    phone: "02-797-7777",
    lat: 37.53306807193163,
    lng: 126.9909013187132,
    kakaoUrl: "http://place.map.kakao.com/27510733",
    naverUrl: "https://map.naver.com/p/search/%EC%9D%B4%ED%83%9C%EC%9B%90%EC%88%AF%EB%B6%88%EA%B5%AC%EC%9D%B4%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%EB%85%B9%EC%82%AC%ED%8F%89%EB%8C%80%EB%A1%9C32%EA%B8%B8%2041-5",
    rating: 4.2,
    reviewCount: 147,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBVOumj5PG_qTd7sY5U3Q2nYW8NXUKNOFYw1DTfUBArLZ_LWVYjfn1l0JE002EKoRMkdERU7xLepuSudKPzwc20llUsARXgoDQ121wi8s6hhqKS3Ut5YnLbGQx1pPZwj0As1eRuoiCS_LLgRA=s4800-w800",
    youtubers: [
      {
        name: "성시경의 먹을텐데",
        videoTitle: null,
        videoUrl: null,
        recommendNote: null
      }
    ]
  },
  {
    id: "sc-036",
    name: "버거스낵",
    category: "햄버거",
    address: "서울 용산구 녹사평대로46길 13",
    phone: null,
    lat: 37.53731779421355,
    lng: 126.9876218326533,
    kakaoUrl: "http://place.map.kakao.com/1927045218",
    naverUrl: "https://map.naver.com/p/search/%EB%B2%84%EA%B1%B0%EC%8A%A4%EB%82%B5%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%EB%85%B9%EC%82%AC%ED%8F%89%EB%8C%80%EB%A1%9C46%EA%B8%B8%2013",
    rating: 4.7,
    reviewCount: 121,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCz46wnFn9scSirbDniG0z5LY0bOetiElK-0azAITQoFGaPtWgYbhCZHIYZ7x9DiV0D4M7u5gOPi6f6E7MgmKFRyoEcEF0R9wmfaho-tXN4iGvCB-yNRHUL-S_XrV7dmawpIimovsYQ2f1LHAydqGus9w=s4800-w800",
    youtubers: [
      {
        name: "성시경의 먹을텐데",
        videoTitle: "성시경의 먹을텐데 l 이태원 버거스낵",
        videoUrl: "https://www.youtube.com/watch?v=bkdYYIBe0PM",
        recommendNote: null
      }
    ]
  },
  {
    id: "sc-038",
    name: "명동함흥면옥 본점",
    category: "냉면",
    address: "서울 중구 명동10길 35-19",
    phone: "02-776-8430",
    lat: 37.562769881012464,
    lng: 126.98568556457165,
    kakaoUrl: "http://place.map.kakao.com/7871208",
    naverUrl: "https://map.naver.com/p/search/%EB%AA%85%EB%8F%99%ED%95%A8%ED%9D%A5%EB%A9%B4%EC%98%A5%20%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EB%AA%85%EB%8F%9910%EA%B8%B8%2035-19",
    rating: 4.1,
    reviewCount: 913,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCsT-1if-Ksohlv3E0r8b3QrwjAnzDhubB6WdGW7QVNZikOowaqRulTBnuVIZT839dD5PiXgTdYm9fw-vYP_vlkbJPkviDJVCLGAFqwW8aSogrxieJePSyeVsXZvmNHQY7b-7Cy9aaPBH1ksnlEtW-Ulw=s4800-w800",
    youtubers: [
      {
        name: "성시경의 먹을텐데",
        videoTitle: null,
        videoUrl: null,
        recommendNote: null
      }
    ]
  },
  {
    id: "swab-001",
    name: "베수비오",
    category: "이탈리안",
    address: "서울 중구 다산로24길 28",
    phone: null,
    lat: 37.5575180130319,
    lng: 127.01395466125,
    kakaoUrl: "http://place.map.kakao.com/279218433",
    naverUrl: "https://map.naver.com/p/search/%EB%B2%A0%EC%88%98%EB%B9%84%EC%98%A4%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EB%8B%A4%EC%82%B0%EB%A1%9C24%EA%B8%B8%2028",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCgOZkEkOkN9IIiowtTCgPJ7m3GGV3faH5U4xOIIJkvn632CGW_lmnrNE2zowiMUQUEZIdxXS7Xm7jgIJvyuIEVSZULTEHSg0tjMtrgg2qoxvYmSdcLRTcIPzco1NR2UMF36x7lXJk3sjIS0KH4HqIB=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "나폴리 피자 전문점 '나폴리 맛피아'가 새롭게 선보인 레스토랑으로, 기존보다 한층 업그레이드된 메뉴 구성으로 소개됐다."
      }
    ]
  },
  {
    id: "swab-002",
    name: "이타닉가든",
    category: "한식",
    address: "서울 강남구 테헤란로 231",
    phone: "02-727-7610",
    lat: 37.5028641154494,
    lng: 127.04118315776,
    kakaoUrl: "http://place.map.kakao.com/2044587542",
    naverUrl: "https://map.naver.com/p/search/%EC%9D%B4%ED%83%80%EB%8B%89%EA%B0%80%EB%93%A0%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%ED%85%8C%ED%97%A4%EB%9E%80%EB%A1%9C%20231",
    rating: 4.6,
    reviewCount: 99,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCj6O2H6OyOwsG20JrCujhA8xf48THyI8B8HjEgt3yqMUx_e0dNw4XSksMB399l1mJ2Dgpebphx3RhHhr4uOM-7R2WIgyGv6W3fIgJH9fEzKI2XesOESb92vfNscVF4mHVCoEEWx5sbL2DQKwI=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "예약이 매달 순식간에 마감될 정도로 인기가 높은 손종원 셰프의 파인다이닝 레스토랑으로 소개됐다."
      }
    ]
  },
  {
    id: "swab-003",
    name: "노뜨르",
    category: "양식",
    address: "서울 강남구 선릉로155길 13",
    phone: null,
    lat: 37.5253297256905,
    lng: 127.03857772608,
    kakaoUrl: "http://place.map.kakao.com/709646921",
    naverUrl: "https://map.naver.com/p/search/%EB%85%B8%EB%9C%A8%EB%A5%B4%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%84%A0%EB%A6%89%EB%A1%9C155%EA%B8%B8%2013",
    rating: 5,
    reviewCount: 1,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCsvLV9OEQMa-eK_cToOCAaqvaVASTYdER3tkPKLm-5zFCfh271auqqyWm3T8yk92Mui1tzLYZD5uRsExpQxJqXi883PmoU1FLQj4BCDyollPAoJ2pZ-c9_A8H36cKJcSJe8FVs2-heMxS-GAdzMXiQ=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "윤남노 셰프가 새롭게 시작한 레스토랑으로 소개됐다."
      }
    ]
  },
  {
    id: "swab-004",
    name: "카나르",
    category: "일본식라면",
    address: "서울 종로구 돈화문로11가길 65",
    phone: "0502-5552-9113",
    lat: 37.5755356548706,
    lng: 126.99029617426,
    kakaoUrl: "http://place.map.kakao.com/673601993",
    naverUrl: "https://map.naver.com/p/search/%EC%B9%B4%EB%82%98%EB%A5%B4%20%EC%84%9C%EC%9A%B8%20%EC%A2%85%EB%A1%9C%EA%B5%AC%20%EB%8F%88%ED%99%94%EB%AC%B8%EB%A1%9C11%EA%B0%80%EA%B8%B8%2065",
    rating: 4.3,
    reviewCount: 15,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjA3LWdT-eaeWq7XoCyppd4bWPXBE5j6O50MO19-1K12tiJiGSOSTy7I_A2oaqsL2Tv2jlpGrYRdC3Uod-j56ehrQZGSCfGvFqaf_4ZC0TGBcgY1wkHUx8K8FcfRkZ9c96IDJnm8MrKtnVW9hS4=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "오리 한 마리를 통째로 끓여낸 육수를 사용하는 독특한 오리라멘 전문점으로 소개됐다."
      }
    ]
  },
  {
    id: "swab-005",
    name: "SMT차이나룸 몬드리안호텔점",
    category: "중국요리",
    address: "서울 용산구 장문로 23",
    phone: "02-749-3396",
    lat: 37.528534382013,
    lng: 126.993104562807,
    kakaoUrl: "http://place.map.kakao.com/734566080",
    naverUrl: "https://map.naver.com/p/search/SMT%EC%B0%A8%EC%9D%B4%EB%82%98%EB%A3%B8%20%EB%AA%AC%EB%93%9C%EB%A6%AC%EC%95%88%ED%98%B8%ED%85%94%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%EC%9E%A5%EB%AC%B8%EB%A1%9C%2023",
    rating: 4.5,
    reviewCount: 51,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCAVA8sAKQXTTOro9dirddsIZQNwoxoOGPTQdJdzZV1QaA198aSeJo5_J6AB7H1c-QfWamuhFci9s5SfiNvRif0pSmTgI0e8a9nzajqRl9FeqQocUa3LvLEV4EgOd-wDfsW8Vphtj75v3r28Og=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "호텔에 위치한 중식당으로 다양한 신기한 요리 구성이 인상적이라고 소개됐다."
      }
    ]
  },
  {
    id: "swab-006",
    name: "코우짱라멘",
    category: "일본식라면",
    address: "서울 관악구 봉천로 227",
    phone: null,
    lat: 37.4900319940447,
    lng: 126.927117776911,
    kakaoUrl: "http://place.map.kakao.com/942986693",
    naverUrl: "https://map.naver.com/p/search/%EC%BD%94%EC%9A%B0%EC%A7%B1%EB%9D%BC%EB%A9%98%20%EC%84%9C%EC%9A%B8%20%EA%B4%80%EC%95%85%EA%B5%AC%20%EB%B4%89%EC%B2%9C%EB%A1%9C%20227",
    rating: 4.7,
    reviewCount: 27,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBi8HgBNi9e0HoQH4rM5NgIkyYbWJRVnkX7JrF5SDm7fxAdkipt7PN5Y3BfgjXs-uCu_UlYw3p6FE7JLvm4s8Kr4OCKKI4FyLy_KYpNDIsOCxgV2ipBqBy7HYZgR1EXpEH91tkWh8jkgujvBg=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "돈코츠라멘과 함께 나오는 볶음밥이 특히 인상적이라고 소개된 라멘 전문점."
      }
    ]
  },
  {
    id: "swab-007",
    name: "신세카이",
    category: "일식",
    address: "서울 마포구 월드컵로13길 22-8",
    phone: null,
    lat: 37.5558115164214,
    lng: 126.908996869161,
    kakaoUrl: "http://place.map.kakao.com/1215753799",
    naverUrl: "https://map.naver.com/p/search/%EC%8B%A0%EC%84%B8%EC%B9%B4%EC%9D%B4%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EC%9B%94%EB%93%9C%EC%BB%B5%EB%A1%9C13%EA%B8%B8%2022-8",
    rating: 4.4,
    reviewCount: 19,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD7bA_i6yaif1DUPaVdVAhyabyBxkp-8rUg9Z7y4zITRp16onnJbk6c-wPzsh3fRxUhkEdysxeN4C8yy4BEKfqAW6anXOt8mT7ycw81Mc8wZ1mJy0y_so6dIQSnv0ZLib_Oa6prnx7gMESKnTw=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "진한 토리파이탄(닭백숙) 육수의 라멘으로 소개된 일식당."
      }
    ]
  },
  {
    id: "swab-008",
    name: "멘야수",
    category: "일본식라면",
    address: "서울 마포구 양화로 56",
    phone: "010-3481-5250",
    lat: 37.54966314168434,
    lng: 126.91509033581866,
    kakaoUrl: "http://place.map.kakao.com/1937381710",
    naverUrl: "https://map.naver.com/p/search/%EB%A9%98%EC%95%BC%EC%88%98%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EC%96%91%ED%99%94%EB%A1%9C%2056",
    rating: 4.6,
    reviewCount: 5,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBK8ieGzSIczAq9pAHB-3dyQxpvsT164OJ5po4udInhyu8dA1BfLA0x-ZlB0KsfFQEnFjIlG84P8Uff7DpHRF-JXnuf79BVKKpzSOQ53SQvzmgBJ_nQdjMBIIBqeDU1Hq8ae0CFa2ZzVyPJodk5s8VBrw=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "담백한 오리라멘을 선보이는 전문점으로 소개됐다."
      }
    ]
  },
  {
    id: "swab-009",
    name: "맛스구라멘",
    category: "일본식라면",
    address: "서울 은평구 은평로3길 4",
    phone: null,
    lat: 37.5992402017266,
    lng: 126.914866432736,
    kakaoUrl: "http://place.map.kakao.com/741956418",
    naverUrl: "https://map.naver.com/p/search/%EB%A7%9B%EC%8A%A4%EA%B5%AC%EB%9D%BC%EB%A9%98%20%EC%84%9C%EC%9A%B8%20%EC%9D%80%ED%8F%89%EA%B5%AC%20%EC%9D%80%ED%8F%89%EB%A1%9C3%EA%B8%B8%204",
    rating: 4.7,
    reviewCount: 27,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAP2qlqejQSwy7d0dtKu5663azXFwuARolwhz0ErWs_mHRwI8i9p-eqIhTKYYZ7r1uUF0kjQ-1vY0N8OV_eihqGJjWVsUt1nLuFKJIad4C82v2jAzl3Mtqv_incoBfun18D-ThvgksfJCppCA=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "매운맛의 돈코츠라멘을 선보이는 라멘 전문점으로 소개됐다."
      }
    ]
  },
  {
    id: "swab-010",
    name: "라멘롱시즌",
    category: "일본식라면",
    address: "서울 마포구 동교로34길 21",
    phone: null,
    lat: 37.5608542931865,
    lng: 126.925568431297,
    kakaoUrl: "http://place.map.kakao.com/432903250",
    naverUrl: "https://map.naver.com/p/search/%EB%9D%BC%EB%A9%98%EB%A1%B1%EC%8B%9C%EC%A6%8C%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EB%8F%99%EA%B5%90%EB%A1%9C34%EA%B8%B8%2021",
    rating: 4.5,
    reviewCount: 19,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjB-kbNRBgdXvTsTvDGnBSsIfsYQD0JvhWdveqG6bDT5UzdRAgZ6UIsvoSkrhUZ3o-K9_sKLnZgQy80-1cn3S9vnkTCBhkNhCQHYiy_rJVRD9k3-fvgJsTRfSpYHXUR716u_jJQaEUi4HX_E8w=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "진한 맛의 시오라멘으로 소개된 라멘 맛집."
      }
    ]
  },
  {
    id: "swab-011",
    name: "레귬",
    category: "양식",
    address: "서울 강남구 강남대로 652",
    phone: "0507-1365-1567",
    lat: 37.5194581390938,
    lng: 127.019119370109,
    kakaoUrl: "http://place.map.kakao.com/335870716",
    naverUrl: "https://map.naver.com/p/search/%EB%A0%88%EA%B7%AC%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EA%B0%95%EB%82%A8%EB%8C%80%EB%A1%9C%20652",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "고기 없이도 미슐랭 1스타를 받을 만큼 완성도 있는 요리를 선보이는 레스토랑으로 소개됐다."
      }
    ]
  },
  {
    id: "swab-012",
    name: "레스토랑 산",
    category: "양식",
    address: "서울 강남구 언주로168길 6",
    phone: "02-540-1729",
    lat: 37.5263564954611,
    lng: 127.033920717797,
    kakaoUrl: "http://place.map.kakao.com/1828674706",
    naverUrl: "https://map.naver.com/p/search/%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91%20%EC%82%B0%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%96%B8%EC%A3%BC%EB%A1%9C168%EA%B8%B8%206",
    rating: 4.7,
    reviewCount: 37,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDT1MdC626zoqsALpFV7jopOQJ_vebqRvVgHLLpY4fKQdIf2u-ratoDbj2ECRLe7fqxRrOQV5ju2x-lVb5ujJyxONog5ifn3FuoGm2BAM5rFVoq1hL7ko4y7RjAkLWjB-1_dfi13R8pvF3avgFGW4OWeg=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "최근 새롭게 떠오른 최고의 레스토랑 중 하나로 소개됐다."
      }
    ]
  },
  {
    id: "swab-013",
    name: "오프닝",
    category: "양식",
    address: "서울 강남구 도산대로34길 22",
    phone: "02-2088-5844",
    lat: 37.5188924866535,
    lng: 127.031018121292,
    kakaoUrl: "http://place.map.kakao.com/2010673091",
    naverUrl: "https://map.naver.com/p/search/%EC%98%A4%ED%94%84%EB%8B%9D%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EB%8F%84%EC%82%B0%EB%8C%80%EB%A1%9C34%EA%B8%B8%2022",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "남이 사준 밥이 제일 맛있다는 리뷰와 함께 소개된 레스토랑."
      }
    ]
  },
  {
    id: "swab-014",
    name: "기와강",
    category: "한식",
    address: "서울 강남구 논현로152길 9",
    phone: "02-517-2511",
    lat: 37.5211392152627,
    lng: 127.028937615467,
    kakaoUrl: "http://place.map.kakao.com/1522281632",
    naverUrl: "https://map.naver.com/p/search/%EA%B8%B0%EC%99%80%EA%B0%95%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EB%85%BC%ED%98%84%EB%A1%9C152%EA%B8%B8%209",
    rating: 4.6,
    reviewCount: 12,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDkCvPpSbr-YC52nrTkTDlNm2KjIy4Mia1pjK12Se2qjz7sVsfPDdZ_vJLM0Gqc4_AngLJXeoWeyWG2TTcUcKUZOqSSb3F0nPmvSIN4SABS-adHL4kOGEkxEVt7ZPLWoMYvsaX3sDMC7SwEsJM=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "미슐랭 1스타를 받은 한식 다이닝으로 소개됐다."
      }
    ]
  },
  {
    id: "swab-015",
    name: "아키야라멘",
    category: "일본식라면",
    address: "서울 마포구 토정로 39-3",
    phone: "070-7636-0326",
    lat: 37.5457466795839,
    lng: 126.915339200849,
    kakaoUrl: "http://place.map.kakao.com/604742224",
    naverUrl: "https://map.naver.com/p/search/%EC%95%84%ED%82%A4%EC%95%BC%EB%9D%BC%EB%A9%98%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%ED%86%A0%EC%A0%95%EB%A1%9C%2039-3",
    rating: 4.3,
    reviewCount: 136,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjB69DipKtLMSuvrTYJ4xglWEiQK_hZX-oUtSMO3poxebr36gm0O3MTm35PQCi7dt3o0Rhq5Hunw5w54kFyYvgY3iBPhsrV4a4yC7gy4eRve2ISOZt55A0BPnS93WrOCbZ_7U3axuFKrxCCtWibU71sxcw=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "전문점이 드문 미소라멘을 선보이는 라멘집으로 소개됐다."
      }
    ]
  },
  {
    id: "swab-016",
    name: "누와",
    category: "중식",
    address: "서울 강남구 강남대로 652",
    phone: "02-518-2003",
    lat: 37.5195662640323,
    lng: 127.019091117912,
    kakaoUrl: "http://place.map.kakao.com/1915805569",
    naverUrl: "https://map.naver.com/p/search/%EB%88%84%EC%99%80%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EA%B0%95%EB%82%A8%EB%8C%80%EB%A1%9C%20652",
    rating: 4.3,
    reviewCount: 12,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDc-TWPKuF5LwxLlwAaZ1u8kMEUt0Q9uF9tNdoLuGF3CfbPDww0t0aHel-Awn3TtaGc5_R_7kzAF4OcOygxGfbkh-mJQDPS1tQp_cTy-SDffl9qOYDi5ql1aAZxkpQa-A8-eaZuLmKKhYVBOGRRknQduw=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "박은영 셰프가 선보이는 중식 레스토랑으로 소개됐다."
      }
    ]
  },
  {
    id: "swab-017",
    name: "신멘",
    category: "일본식라면",
    address: "경기 안양시 동안구 호성로 20",
    phone: "070-8836-9268",
    lat: 37.36351636620172,
    lng: 126.9637866595994,
    kakaoUrl: "http://place.map.kakao.com/1796608709",
    naverUrl: "https://map.naver.com/p/search/%EC%8B%A0%EB%A9%98%20%EA%B2%BD%EA%B8%B0%20%EC%95%88%EC%96%91%EC%8B%9C%20%EB%8F%99%EC%95%88%EA%B5%AC%20%ED%98%B8%EC%84%B1%EB%A1%9C%2020",
    rating: 4.6,
    reviewCount: 125,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjA8KP93axb6v_hw2t0EQGnAaIkAL99xwG34MJEvTlWkxxypVX9jGTxRVIUs57FHEWPDktFl7OcTfK3XjvsFgAPAkWKExwY7JVwiN2iZCdYyAqj24ZeBSJ1sdeI0oZB5gKzCV4vd7uJYqpDfzEE=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "니보시(멸치) 육수 라멘을 선보이는 안양의 라멘 맛집으로, 색다른 라멘 경험을 준다고 소개됐다."
      }
    ]
  },
  {
    id: "swab-018",
    name: "소바키리 스즈",
    category: "일식집",
    address: "서울 중구 동호로12길 98",
    phone: "02-2256-6986",
    lat: 37.5594931690156,
    lng: 127.012431633842,
    kakaoUrl: "http://place.map.kakao.com/59179379",
    naverUrl: "https://map.naver.com/p/search/%EC%86%8C%EB%B0%94%ED%82%A4%EB%A6%AC%20%EC%8A%A4%EC%A6%88%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EB%8F%99%ED%98%B8%EB%A1%9C12%EA%B8%B8%2098",
    rating: 4.8,
    reviewCount: 17,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDkFvdpzOsYZ7YUosHR7r1iEZrhuywNQKZx1dN33tfeMXdQPMwEhYI8cRyOad-RtlhtbmgQ0w84GCBYw8ac2p5HS8jOrXL14aWweT3zkmCDDdjf5ZZs1gPhRHKr-RtCe4Fq5661rR2v7yBmYT9UZz2isg=s4800-w560",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "깔끔한 맛의 소바 전문점으로 소개됐다."
      }
    ]
  },
  {
    id: "swab-019",
    name: "요아케",
    category: "일본식라면",
    address: "서울 중구 퇴계로74길 9",
    phone: "0502-5553-0817",
    lat: 37.56462496452258,
    lng: 127.014864880365,
    kakaoUrl: "http://place.map.kakao.com/961759416",
    naverUrl: "https://map.naver.com/p/search/%EC%9A%94%EC%95%84%EC%BC%80%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%ED%87%B4%EA%B3%84%EB%A1%9C74%EA%B8%B8%209",
    rating: 4.6,
    reviewCount: 17,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBqWOTEruUntEe9PnL9HeRPQzjRk9kUyoFm5uE-4A69sJDitAU3r2tRHP9R_nbNlKUyqxc5pJ9k433l1q2yENZPz1Ur9dkmG_SO8MDoT2OyyRRtIwGw1jsDmjjGxp_oQ-WgJ4gkGDq2U5Ecefv9kOU1=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "라멘에 진심인 오너가 만든 라멘집으로 소개됐다."
      }
    ]
  },
  {
    id: "swab-020",
    name: "조광201",
    category: "중국요리",
    address: "서울 송파구 새말로8길 13",
    phone: "010-2459-0503",
    lat: 37.4815503071785,
    lng: 127.126787485897,
    kakaoUrl: "http://place.map.kakao.com/1579261014",
    naverUrl: "https://map.naver.com/p/search/%EC%A1%B0%EA%B4%91201%20%EC%84%9C%EC%9A%B8%20%EC%86%A1%ED%8C%8C%EA%B5%AC%20%EC%83%88%EB%A7%90%EB%A1%9C8%EA%B8%B8%2013",
    rating: 4.5,
    reviewCount: 120,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAP2yU_IvmEKmMSALeWOzJJyW5ZFIXuVJjkkdwbBlRjX_sh_i3Vkda2_YnTOUHFNjTLpVlGkZnHMC0xQuBGs8kAmcqITL55yhBA2VoZ56ZcabbhM9Hqvx-cwIkrnfBgaPSSnpON7uFFoaA0eOoDmKGryA=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "흑백요리사 출신 셰프가 운영하는 중식당으로, 센스 있는 구성이 여전히 돋보인다고 소개됐다."
      }
    ]
  },
  {
    id: "swab-021",
    name: "후제",
    category: "양식",
    address: "서울 강남구 논현로24길 21",
    phone: "070-4837-4997",
    lat: 37.4821261304299,
    lng: 127.044768296392,
    kakaoUrl: "http://place.map.kakao.com/1625504597",
    naverUrl: "https://map.naver.com/p/search/%ED%9B%84%EC%A0%9C%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EB%85%BC%ED%98%84%EB%A1%9C24%EA%B8%B8%2021",
    rating: 5,
    reviewCount: 11,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBjpD_6ZAclVYbB5AmS37We8UeskMrsyoIjygI7rL6NyaZgS6aQHLerVj7VpXlTheCThNDoA-ORldlDyFrAJuonDi_2aqHY4AsxoIfymIUKaY-4WJ-qI7DLjotJJoDKIfxVDVRGTBhMsO0XkFRvz7vu=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "조만간 미슐랭에 오를 만한 실력이라는 평과 함께 소개된 레스토랑."
      }
    ]
  },
  {
    id: "swab-022",
    name: "쵸이닷",
    category: "양식",
    address: "서울 강남구 도산대로 457",
    phone: "02-518-0318",
    lat: 37.524415938697466,
    lng: 127.04655153958882,
    kakaoUrl: "http://place.map.kakao.com/1565367501",
    naverUrl: "https://map.naver.com/p/search/%EC%B5%B8%EC%9D%B4%EB%8B%B7%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EB%8F%84%EC%82%B0%EB%8C%80%EB%A1%9C%20457",
    rating: 4.3,
    reviewCount: 419,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBMySlmFcFyQjmARjMOm6dDoUr9oEndvLLuAy42OtPw_xqk0YseIJLIudSUoPAYZSNF79vwloVgnh2xKQtNezrIi2SILqqHjle1z1XFMp2SKwW70O5-b3ulOPYIi3MvmriduzcaKOTwFY4FKA=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "흑백요리사 출신 셰프가 운영하는 레스토랑으로, 도파민이 터지는 구성이라고 소개됐다."
      }
    ]
  },
  {
    id: "swab-023",
    name: "밍글스",
    category: "한식",
    address: "서울 강남구 도산대로67길 19",
    phone: "02-515-7306",
    lat: 37.52541969265465,
    lng: 127.04410633651611,
    kakaoUrl: "http://place.map.kakao.com/24073852",
    naverUrl: "https://map.naver.com/p/search/%EB%B0%8D%EA%B8%80%EC%8A%A4%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EB%8F%84%EC%82%B0%EB%8C%80%EB%A1%9C67%EA%B8%B8%2019",
    rating: 4.5,
    reviewCount: 879,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDUr0CW8Hly27PfUcJrrr_ahxiIn3b3qow5H48aAi-aqFw-gq2CsU406rqKZv7ECX6xzZcGg8AJ7Kd8WMac5lYBzfIlFd3fd7xj4nAw6Svdrvg9bwoQ_tksH_aNLpW1hPlH49oQzI5eEmaftZJUAaGNNg=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "국내 유일 미슐랭 3스타를 보유한 한식 파인다이닝으로 소개됐다."
      }
    ]
  },
  {
    id: "swab-024",
    name: "솔밤",
    category: "양식",
    address: "서울 강남구 학동로 231",
    phone: "070-4405-7788",
    lat: 37.515714726279604,
    lng: 127.03400526007886,
    kakaoUrl: "http://place.map.kakao.com/2007100531",
    naverUrl: "https://map.naver.com/p/search/%EC%86%94%EB%B0%A4%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%ED%95%99%EB%8F%99%EB%A1%9C%20231",
    rating: 4.8,
    reviewCount: 90,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDkaYjRb8yxXn1Xd4FLf7_Qup8-3WGN5n_iqBf53g0nE2S03E1ON57f3LuU1XKY_yRhDyCM7jafQxXlJVoeOFa7hjsMb01B-TvD3Lzu9eibjSSGOQRc2RoA6XzlBt68OduGKkGgoIwao5PLzg=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "흑백요리사 출신 셰프가 운영하는 레스토랑으로 소개됐다."
      }
    ]
  },
  {
    id: "swab-025",
    name: "이목스모크다이닝",
    category: "육류,고기",
    address: "서울 강남구 압구정로2길 6",
    phone: null,
    lat: 37.52114839011912,
    lng: 127.01930758314055,
    kakaoUrl: "http://place.map.kakao.com/485505101",
    naverUrl: "https://map.naver.com/p/search/%EC%9D%B4%EB%AA%A9%EC%8A%A4%EB%AA%A8%ED%81%AC%EB%8B%A4%EC%9D%B4%EB%8B%9D%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%95%95%EA%B5%AC%EC%A0%95%EB%A1%9C2%EA%B8%B8%206",
    rating: 4.8,
    reviewCount: 39,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDc9rYVdbWxiRP_iy6jv9bfIL19DBFGu8h_DWoFGSLc9r200bmQBlGCWgQ8V3WQM3EbtYFKGaZm6Yhn8kX_iQhfLNDjO-l8KULt4fJGdwZb8zs34vZnv0viL0xAm2gq-3WNZA7xgX8oWYe83mXkOKUHRg=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "흑백요리사 출신 바베큐 전문 셰프가 운영하는 스모크 다이닝으로 소개됐다."
      }
    ]
  },
  {
    id: "swab-026",
    name: "호루몬",
    category: "일식집",
    address: "서울 강남구 언주로152길 11-5",
    phone: "010-2893-7873",
    lat: 37.5230451598482,
    lng: 127.034446378235,
    kakaoUrl: "http://place.map.kakao.com/2035856429",
    naverUrl: "https://map.naver.com/p/search/%ED%98%B8%EB%A3%A8%EB%AA%AC%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%96%B8%EC%A3%BC%EB%A1%9C152%EA%B8%B8%2011-5",
    rating: 4.4,
    reviewCount: 109,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAhDJ6mLNGCLke9MduzOAjRUzC02ruflXd3_8B0Z8rTN0lo_ihRlxid2Ls7Eq5tQvSv37JlkadRDO7UimDzeQRTKwB3GDgpZy9o2Glxzoz_JuBx5CAMvMHKfIQ55S6SuYvyGg5YYJiN4mX1k8A=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "내장 오마카세를 전문으로 하는 일식당으로 소개됐다."
      }
    ]
  },
  {
    id: "swab-027",
    name: "수퍼판",
    category: "퓨전한식",
    address: "서울 강남구 논현로167길 15",
    phone: "02-515-3848",
    lat: 37.52443828157013,
    lng: 127.02683813063683,
    kakaoUrl: "http://place.map.kakao.com/26457126",
    naverUrl: "https://map.naver.com/p/search/%EC%88%98%ED%8D%BC%ED%8C%90%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EB%85%BC%ED%98%84%EB%A1%9C167%EA%B8%B8%2015",
    rating: 4.1,
    reviewCount: 217,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCzF-I0FNjW4ghXla4sTfyn3XFBuceelIp6DPD0dilGV-Ia8nyvqNmJtSWwMSpCRO71dGlt-oG_QkB3kNNwsg2W6hQB0fP3cdTiQgXnwAdajjBo2OeI6nDzSNOw8HRDq5Pq_KXXkHDq0mOBZ-6U8yQI9A=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "흑백요리사 출신 셰프의 모던한식 레스토랑으로 소개됐다."
      }
    ]
  },
  {
    id: "swab-028",
    name: "에그앤플라워",
    category: "이탈리안",
    address: "서울 용산구 신흥로26길 35",
    phone: null,
    lat: 37.5453543271454,
    lng: 126.984372866559,
    kakaoUrl: "http://place.map.kakao.com/1838545503",
    naverUrl: "https://map.naver.com/p/search/%EC%97%90%EA%B7%B8%EC%95%A4%ED%94%8C%EB%9D%BC%EC%9B%8C%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%EC%8B%A0%ED%9D%A5%EB%A1%9C26%EA%B8%B8%2035",
    rating: 4,
    reviewCount: 168,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBJDcX9xLjap4_hkIVJY70rEXyqiGZRZNgrlfKQ5UeD_t1-4FBrhu7sLzNV3mQAG1NyaArdoHnVGqdX8kWBcAiPLJbif4VOgRi9-XdYGDkOO0jdbBhLrBulH8rO3JHpY8cjoqvNKipGepPZFSM=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "생면 파스타를 전문으로 하는 이탈리안 레스토랑으로, 흑백요리사 출신 셰프가 운영한다고 소개됐다."
      }
    ]
  },
  {
    id: "swab-029",
    name: "스와니예",
    category: "양식",
    address: "서울 강남구 강남대로 652",
    phone: "02-3477-9386",
    lat: 37.5195103994699,
    lng: 127.019105809157,
    kakaoUrl: "http://place.map.kakao.com/1469290862",
    naverUrl: "https://map.naver.com/p/search/%EC%8A%A4%EC%99%80%EB%8B%88%EC%98%88%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EA%B0%95%EB%82%A8%EB%8C%80%EB%A1%9C%20652",
    rating: 4.5,
    reviewCount: 463,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBgumbrasRr5y5P0Pejwz4CTqWko1VK_3zT5Q30NRqEk7f6sk3tMMDny-xMuwTCJ-2Ydo-f8hfYLmqzaVwfiEtxuJ_ampoN0_CkQyX7RdawCs1IJ3IRjeiGFE0AjPuF7NFUn-NWxAVc531cBkY=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "미슐랭 2스타를 보유한 파인다이닝 레스토랑으로 소개됐다."
      }
    ]
  },
  {
    id: "swab-030",
    name: "황성집",
    category: "순대",
    address: "서울 중구 청파로 447-15",
    phone: "02-392-6926",
    lat: 37.559294949155,
    lng: 126.968287194687,
    kakaoUrl: "http://place.map.kakao.com/14686414",
    naverUrl: "https://map.naver.com/p/search/%ED%99%A9%EC%84%B1%EC%A7%91%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EC%B2%AD%ED%8C%8C%EB%A1%9C%20447-15",
    rating: 4.1,
    reviewCount: 50,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD4igXKOIUcmm9iEuJzOtAB0f0yb0KIUyfjhMbdYcwJNmDGaVw7uEVILW6S35EnRN08R0L7Ma8yMnWKf6QhEcF1YuT2L46ENVotzU7eb7nTPKIk9LBZ1bIQgqmcjiUDLnhWtobJj9lzgdtClaiOGzRdMg=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "지금까지 접해보지 못한 스타일의 순대국밥을 선보이는 노포로 소개됐다."
      }
    ]
  },
  {
    id: "swab-031",
    name: "탉",
    category: "닭요리",
    address: "경기 파주시 소리천로 29",
    phone: null,
    lat: 37.7158542045619,
    lng: 126.761301814598,
    kakaoUrl: "http://place.map.kakao.com/488815129",
    naverUrl: "https://map.naver.com/p/search/%ED%83%89%20%EA%B2%BD%EA%B8%B0%20%ED%8C%8C%EC%A3%BC%EC%8B%9C%20%EC%86%8C%EB%A6%AC%EC%B2%9C%EB%A1%9C%2029",
    rating: 4.5,
    reviewCount: 4,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDDHfj7IOI2D1yDu1olsptIbKAnE5sRxj3OPU3fR977cf9ACBADT6Gfcf-q4WSG8tisydm21RrFYzSn-OOU3on12ltWh7hOiOEQ-jniWk8HD1MC-0GjD9uxTc_iyn7ADzgT5nI69a8JuPQdLNk=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "다양한 부위의 닭 요리를 한자리에서 즐길 수 있는 닭 요리 전문점으로 소개됐다."
      }
    ]
  },
  {
    id: "swab-032",
    name: "야키토리키유",
    category: "일식",
    address: "서울 마포구 도화4길 31",
    phone: "02-702-1120",
    lat: 37.54057550667603,
    lng: 126.95149222069634,
    kakaoUrl: "http://place.map.kakao.com/1766791669",
    naverUrl: "https://map.naver.com/p/search/%EC%95%BC%ED%82%A4%ED%86%A0%EB%A6%AC%ED%82%A4%EC%9C%A0%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EB%8F%84%ED%99%944%EA%B8%B8%2031",
    rating: 4.8,
    reviewCount: 19,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjC2-0NljrtHl_A0gYJNSnoZvOkXXUpHWyckMnqSphkTstYDJSHL4vF-sKaDnPDRtkYk_tmAE4aSMzzDi18Zxv4nMBh3dyyDGjJ8RQzp-0JSPJujctJWcYGZDc-YkPmEBl3W4LRBrvVFnMgWfgc=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "닭꼬치(야키토리) 전문점으로, 술과 곁들이기 좋다고 소개됐다."
      }
    ]
  },
  {
    id: "swab-033",
    name: "라멘바 시코우",
    category: "일본식라면",
    address: "서울 마포구 와우산로7길 33",
    phone: "0502-5554-5032",
    lat: 37.5473471965062,
    lng: 126.921036182831,
    kakaoUrl: "http://place.map.kakao.com/2140098172",
    naverUrl: "https://map.naver.com/p/search/%EB%9D%BC%EB%A9%98%EB%B0%94%20%EC%8B%9C%EC%BD%94%EC%9A%B0%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EC%99%80%EC%9A%B0%EC%82%B0%EB%A1%9C7%EA%B8%B8%2033",
    rating: 4.5,
    reviewCount: 11,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDUpjtfIl5fitdBod32QlTeZe66_HQcd87yVkFqfIvbXNYVFR--lzTqzVzlfop5psAtgvYwhTq0B-wqVk63PrSKYblUA9WVKrk1JmGIQizYCP24NXtSYw8EscZUBIDODr_VYKdwCyR7ejQpNxgobPtzdg=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "오픈한 지 두 달 만에 입소문이 난 라멘집으로 소개됐다."
      }
    ]
  },
  {
    id: "swab-034",
    name: "소바쥬",
    category: "일식",
    address: "서울 마포구 큰우물로 75",
    phone: null,
    lat: 37.541265225109,
    lng: 126.946294706761,
    kakaoUrl: "http://place.map.kakao.com/619030447",
    naverUrl: "https://map.naver.com/p/search/%EC%86%8C%EB%B0%94%EC%A5%AC%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%ED%81%B0%EC%9A%B0%EB%AC%BC%EB%A1%9C%2075",
    rating: 4.9,
    reviewCount: 8,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDb4d3mnphn-79DMAQ4GAXWh4GKmmM7X9QwOu13ljFVYUD8t77uCplp8W0t8ZC0kcpxc2Ozg8iDFvq7-KaKhQvHPwaBTVyEjaYtKzBgylyPpbRwVJ9JdT50Tw43SEjztqo1eXo42cpqgG0bOBsgMVGI8g=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "흑백요리사 출신 셰프가 선보이는 메밀 오마카세 전문점으로 소개됐다."
      }
    ]
  },
  {
    id: "swab-035",
    name: "하루",
    category: "일식",
    address: "경기 성남시 분당구 판교역로 231",
    phone: "031-696-7588",
    lat: 37.40122995226371,
    lng: 127.10805405111144,
    kakaoUrl: "http://place.map.kakao.com/670256293",
    naverUrl: "https://map.naver.com/p/search/%ED%95%98%EB%A3%A8%20%EA%B2%BD%EA%B8%B0%20%EC%84%B1%EB%82%A8%EC%8B%9C%20%EB%B6%84%EB%8B%B9%EA%B5%AC%20%ED%8C%90%EA%B5%90%EC%97%AD%EB%A1%9C%20231",
    rating: 4.5,
    reviewCount: 27,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjC7f33XwFM9WN4ocRI34TlFvlpUqB-zC6wka6z20rhZKwq_AjImHKOVvhKYxsSjfz5RvGN9EMJL3XjbBsc2SuSUI9teZrSoNvQXBvAM_2M1TCfC-PdRTdj8N4YXXPBCxmCNJUdffLn_i5P7b51rwQ4CIQ=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "판교에 위치한 튀김과 소바를 함께 즐길 수 있는 오마카세 전문점으로 소개됐다."
      }
    ]
  },
  {
    id: "swab-036",
    name: "봉자마라탕",
    category: "중식",
    address: "서울 광진구 동일로18길 22",
    phone: "02-499-8889",
    lat: 37.5396724802267,
    lng: 127.064096932094,
    kakaoUrl: "http://place.map.kakao.com/21312920",
    naverUrl: "https://map.naver.com/p/search/%EB%B4%89%EC%9E%90%EB%A7%88%EB%9D%BC%ED%83%95%20%EC%84%9C%EC%9A%B8%20%EA%B4%91%EC%A7%84%EA%B5%AC%20%EB%8F%99%EC%9D%BC%EB%A1%9C18%EA%B8%B8%2022",
    rating: 4.1,
    reviewCount: 270,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD_WVgwPNlaQ6NeM4G8Vz2ZbnMU1z-YabAUcByWtDiTaQVRQQPwFdl0cyAqVazGeXVHZTDZoXlqvO62xfWYH_7CF5e7bxYsX5Hb07E3KcwzZkVZLif0yL6rJzJgxe4hkJbKc7esrQU38rox7Q=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "간판은 마라탕이지만 실제로는 볶음밥이 더 유명하다고 소개된 건대입구의 맛집."
      }
    ]
  },
  {
    id: "swab-037",
    name: "야키토리야키준",
    category: "일식",
    address: "경기 성남시 분당구 판교역로 178",
    phone: "031-707-6447",
    lat: 37.3965076599573,
    lng: 127.110051847933,
    kakaoUrl: "http://place.map.kakao.com/566578267",
    naverUrl: "https://map.naver.com/p/search/%EC%95%BC%ED%82%A4%ED%86%A0%EB%A6%AC%EC%95%BC%ED%82%A4%EC%A4%80%20%EA%B2%BD%EA%B8%B0%20%EC%84%B1%EB%82%A8%EC%8B%9C%20%EB%B6%84%EB%8B%B9%EA%B5%AC%20%ED%8C%90%EA%B5%90%EC%97%AD%EB%A1%9C%20178",
    rating: 4.6,
    reviewCount: 19,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBIE_WebdieST0m-RArAR4Q3OLyKvjqvs8ENbh3ZsTtAhSARDgOtCcdefkrq6gHzW8zW03k1VhgV0b6V-gt7vWK0omhid9DOPBSNCVKFvkXQ9FCcoOTA-4WDcg8iXiBf6DfY8YTPGMMnfVACA=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "가성비 좋은 야키토리(닭꼬치) 전문점으로 소개됐다."
      }
    ]
  },
  {
    id: "swab-038",
    name: "라디치",
    category: "이탈리안",
    address: "서울 서초구 동광로39길 79",
    phone: "02-6449-6755",
    lat: 37.4984960080116,
    lng: 126.999520509622,
    kakaoUrl: "http://place.map.kakao.com/2029266116",
    naverUrl: "https://map.naver.com/p/search/%EB%9D%BC%EB%94%94%EC%B9%98%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EB%8F%99%EA%B4%91%EB%A1%9C39%EA%B8%B8%2079",
    rating: 4,
    reviewCount: 35,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDjSDaATo9eQ5tig9itz1-WplY2GV0mGH98RQTqu3_v4_v3KoOUl920ZAgbBRJhn5CpJDRgJBMEIWL1D9iu-5iI3PnpmZOSXYoinCeDRZgi7OIDa1JTo-VxK6E-5gCcm2vtt03ZN81ME42K=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "현지의 맛을 그대로 재현했다는 평과 함께 소개된 이탈리안 레스토랑."
      }
    ]
  },
  {
    id: "swab-039",
    name: "일베키오",
    category: "이탈리안",
    address: "서울 마포구 월드컵북로 332-12",
    phone: "02-302-0944",
    lat: 37.57637747278064,
    lng: 126.89470235864977,
    kakaoUrl: "http://place.map.kakao.com/222224201",
    naverUrl: "https://map.naver.com/p/search/%EC%9D%BC%EB%B2%A0%ED%82%A4%EC%98%A4%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EC%9B%94%EB%93%9C%EC%BB%B5%EB%B6%81%EB%A1%9C%20332-12",
    rating: 3.5,
    reviewCount: 70,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCynuxuDTlD34difwsfsCamOyZqJuTnfisU8VFV-u-yXheCBgKleZKrr_fWIkympY4cgD8-HEXGBKPfDJV4mD9U2y1aHs3p9dwCuL4y4FwQr7tjzKxXrJ4LTXdl9ioNbwszJ8QH9U3MTvcWLcYGw36c3A=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "한 해를 대표할 만한 이탈리안 레스토랑으로 꼽히며 소개됐다."
      }
    ]
  },
  {
    id: "swab-040",
    name: "강동원",
    category: "중국요리",
    address: "서울 마포구 망원로 3",
    phone: "02-335-0202",
    lat: 37.5559172623921,
    lng: 126.897314917439,
    kakaoUrl: "http://place.map.kakao.com/16471669",
    naverUrl: "https://map.naver.com/p/search/%EA%B0%95%EB%8F%99%EC%9B%90%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EB%A7%9D%EC%9B%90%EB%A1%9C%203",
    rating: 4.4,
    reviewCount: 284,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAApbSXoTeOtp0UiZoxKlwjVUp3mj2gznd-1u0Cetmbhry2dnz-S_K0eDCypPl335XwWlAXWZMj2yKCM2mOrLrR-IPWlWXKnZfmbNTFL3FyuLRmyDdGx6RQAm3x02dG1UD5m52L13xJ9G6d=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "자극적이지 않고 담백한 중화요리를 선보이는 중식당으로 소개됐다."
      }
    ]
  },
  {
    id: "swab-041",
    name: "피테일",
    category: "양식",
    address: "경기 남양주시 다산중앙로123번길 22-8",
    phone: "070-8691-0504",
    lat: 37.6242893194726,
    lng: 127.151030775171,
    kakaoUrl: "http://place.map.kakao.com/1510096064",
    naverUrl: "https://map.naver.com/p/search/%ED%94%BC%ED%85%8C%EC%9D%BC%20%EA%B2%BD%EA%B8%B0%20%EB%82%A8%EC%96%91%EC%A3%BC%EC%8B%9C%20%EB%8B%A4%EC%82%B0%EC%A4%91%EC%95%99%EB%A1%9C123%EB%B2%88%EA%B8%B8%2022-8",
    rating: 4.6,
    reviewCount: 10,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCTKok0ICIQuG-lUHACnjrDdVOJ0qpg_5JQRnGffQVx76EHsyO0bYtPCCCEa0zrqvAW4bDFGas_pOsCT-yR9DsXMqTLVbaQMX5KHIT-e-PCM1KL2j3II7YI2duBBtWwFPSHRIC3MluBuh9JrTY=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "다른 요리 유튜버의 추천으로 소개된 파스타 바."
      }
    ]
  },
  {
    id: "swab-042",
    name: "덕이짬뽕",
    category: "중식",
    address: "경기 고양시 일산서구 덕이로 186",
    phone: "031-971-8280",
    lat: 37.69458345153691,
    lng: 126.74054814047305,
    kakaoUrl: "http://place.map.kakao.com/1626062978",
    naverUrl: "https://map.naver.com/p/search/%EB%8D%95%EC%9D%B4%EC%A7%AC%EB%BD%95%20%EA%B2%BD%EA%B8%B0%20%EA%B3%A0%EC%96%91%EC%8B%9C%20%EC%9D%BC%EC%82%B0%EC%84%9C%EA%B5%AC%20%EB%8D%95%EC%9D%B4%EB%A1%9C%20186",
    rating: 4.8,
    reviewCount: 15,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCxmzNPdtnbGSex1gl-wZVnIcPT5jOwYJzOPCdmL5yFWV6wv-h1QZqDBJbnII6A-ZLX_vo6D2XsgZTPIbrcwq_XIS3xasIB2CO95BCUaHx-fxVV0uDsCgSmI8oLIR7xep3V5LOs-16cWPbyhrdUHFGphQ=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "일산 덕이동에 위치한 짬뽕 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "swab-043",
    name: "멘큐단",
    category: "일본식라면",
    address: "경기 안양시 동안구 관평로69번길 19",
    phone: null,
    lat: 37.3832389881529,
    lng: 126.964036879545,
    kakaoUrl: "http://place.map.kakao.com/475644301",
    naverUrl: "https://map.naver.com/p/search/%EB%A9%98%ED%81%90%EB%8B%A8%20%EA%B2%BD%EA%B8%B0%20%EC%95%88%EC%96%91%EC%8B%9C%20%EB%8F%99%EC%95%88%EA%B5%AC%20%EA%B4%80%ED%8F%89%EB%A1%9C69%EB%B2%88%EA%B8%B8%2019",
    rating: 4.5,
    reviewCount: 41,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD1hD4rBHa8DiGrDiQiex6uav7pLm4IDB2L8Eng1FdJpKkVoiQf38ll103MgbOaKkrJQi2FhIbT4MGFtuxHQuHJyS5EOcKskvt15zr7pMfxxyVXuAk4NgMXsXd41v4zXtplaU-GP18-PlcFUq8=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "단순한 구성이지만 계속 생각나는 맛이라는 평과 함께 소개된 라멘집."
      }
    ]
  },
  {
    id: "swab-044",
    name: "멕시타이거",
    category: "호프,요리주점",
    address: "서울 강남구 테헤란로1길 42",
    phone: null,
    lat: 37.501130134367,
    lng: 127.027148703417,
    kakaoUrl: "http://place.map.kakao.com/1232109211",
    naverUrl: "https://map.naver.com/p/search/%EB%A9%95%EC%8B%9C%ED%83%80%EC%9D%B4%EA%B1%B0%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%ED%85%8C%ED%97%A4%EB%9E%80%EB%A1%9C1%EA%B8%B8%2042",
    rating: 4.4,
    reviewCount: 118,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD_BDdA9nfAtLG5z9mhSky8LUzjX31uDtk4g1S8a1xYUaeHpseVu0Y2PORLf0CUmtUnLb2j_FkaYL_pHlDUeJyv7PgoXcQwby3qKiDpEmqb4dyuudTHEVFkENeN2TCaKYZBa4OXh5I66-q8_aCI827y_g=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "멕시칸 몰레 소스와 폴로 아사도(구운 치킨)를 전문으로 하는 요즘 뜨는 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "swab-045",
    name: "유니드라멘",
    category: "일본식라면",
    address: "서울 광진구 능동로37길 44",
    phone: "070-8835-3737",
    lat: 37.5588375979018,
    lng: 127.077640435526,
    kakaoUrl: "http://place.map.kakao.com/988572179",
    naverUrl: "https://map.naver.com/p/search/%EC%9C%A0%EB%8B%88%EB%93%9C%EB%9D%BC%EB%A9%98%20%EC%84%9C%EC%9A%B8%20%EA%B4%91%EC%A7%84%EA%B5%AC%20%EB%8A%A5%EB%8F%99%EB%A1%9C37%EA%B8%B8%2044",
    rating: 4.7,
    reviewCount: 58,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDgErcCk_9RO87tlQ1sL4uwfni7A5PkIm-8riHWYgO_HInZbsJzsC0fIJPLulI3xG5Cv0P312bj4zr9S3pg41HNR4a_Y4Wuv7jMV71QSIBEAkC-6IEEafcNySD2vw0z9vkfbvmSHWIouxSMEw=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "닭가슴살 토핑이 특징인 토리파이탄 라멘 전문점으로 소개됐다."
      }
    ]
  },
  {
    id: "swab-046",
    name: "아트와떵",
    category: "양식",
    address: "서울 마포구 동교로50길 25",
    phone: "010-3249-5325",
    lat: 37.5633376632533,
    lng: 126.927374661302,
    kakaoUrl: "http://place.map.kakao.com/1745240335",
    naverUrl: "https://map.naver.com/p/search/%EC%95%84%ED%8A%B8%EC%99%80%EB%96%B5%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EB%8F%99%EA%B5%90%EB%A1%9C50%EA%B8%B8%2025",
    rating: 4.2,
    reviewCount: 21,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCTCJL5PjvFitgrcSbv9DoKizt8CQvTwJC41-FGlxx-qIuQBktXuAl7JU9SPbqEBwWJcIOJ020XJwxxxhH1S5PwbgyOYj8izI_igVDvxHUlFwq1KP3CHiXi8jiaVNfpFMLMAg8EUZKnsJCP=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "심플하면서도 맛있는 치킨 요리를 즐길 수 있는 곳으로 소개됐다."
      }
    ]
  },
  {
    id: "swab-047",
    name: "기댈빙",
    category: "디저트카페",
    address: "서울 성동구 서울숲2길 19-8",
    phone: "010-5016-3531",
    lat: 37.54722139096443,
    lng: 127.04108420321187,
    kakaoUrl: "http://place.map.kakao.com/332229378",
    naverUrl: "https://map.naver.com/p/search/%EA%B8%B0%EB%8C%88%EB%B9%99%20%EC%84%9C%EC%9A%B8%20%EC%84%B1%EB%8F%99%EA%B5%AC%20%EC%84%9C%EC%9A%B8%EC%88%B22%EA%B8%B8%2019-8",
    rating: 4.8,
    reviewCount: 41,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjA0EGZKNqb29DDKbOFK1H5PwzhwigvDWTG3P19__fqYi4Dgi1PSht7mKynH0p2YJrcqU6VGp0KeoqqgSfgiETRpy7Baqh7Zw0zH0Kv9f6ixxtAgnto-HqOKdcZcFwaYI6MePiBTapJOh6xHgg=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "평양냉면과 빙수를 접목한 평냉빙수, 햄빙수 등 독특한 메뉴로 소개된 디저트 카페."
      }
    ]
  },
  {
    id: "swab-048",
    name: "고덕",
    category: "중식",
    address: "서울 마포구 동교로27길 61",
    phone: "02-2135-7578",
    lat: 37.5604042603845,
    lng: 126.920746243827,
    kakaoUrl: "http://place.map.kakao.com/2067014398",
    naverUrl: "https://map.naver.com/p/search/%EA%B3%A0%EB%8D%95%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EB%8F%99%EA%B5%90%EB%A1%9C27%EA%B8%B8%2061",
    rating: 4.8,
    reviewCount: 26,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCB89ch5u4qCwoXi4ozL5B_puFEg1u81ksDV4FL8Gz-iOFxnja9BnKqMjnudBo5XnsUsZ8vP7KqBtWB0tITB17xQ9CTOWz7GSm42g3TeF328y6ZRZb2JF0bP-ZVdFHeCLrlVrQNQsVcX9jCsu71yj7qLQ=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "가성비 좋은 베이징덕을 선보이는 중식당으로 소개됐다."
      }
    ]
  },
  {
    id: "swab-049",
    name: "이츠야",
    category: "돈까스,우동",
    address: "서울 마포구 양화로6길 99-9",
    phone: "02-336-9244",
    lat: 37.5487592205416,
    lng: 126.919934746818,
    kakaoUrl: "http://place.map.kakao.com/1709251572",
    naverUrl: "https://map.naver.com/p/search/%EC%9D%B4%EC%B8%A0%EC%95%BC%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EC%96%91%ED%99%94%EB%A1%9C6%EA%B8%B8%2099-9",
    rating: 4.4,
    reviewCount: 37,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCVbThvXFFNMHt6d5HKajnuYmsjZAzlNU1Y6XSQaXINBd9PtCkvYiIHEOZ-V-CiJer6XPoMVOEoBxdoBkvHu-NBWAJT78fZ3lwZe9XccMjLhd_WHf6l26b2-l-ktD8zeoPIvrzxlTRu1dVTm96-1PrFeg=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "인생 돈까스로 꼽힐 만큼 만족도가 높다고 소개된 돈카츠 전문점."
      }
    ]
  },
  {
    id: "swab-050",
    name: "미토우",
    category: "일식",
    address: "서울 강남구 도산대로70길 24",
    phone: null,
    lat: 37.52211896630903,
    lng: 127.04504557668946,
    kakaoUrl: "http://place.map.kakao.com/1375080913",
    naverUrl: "https://map.naver.com/p/search/%EB%AF%B8%ED%86%A0%EC%9A%B0%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EB%8F%84%EC%82%B0%EB%8C%80%EB%A1%9C70%EA%B8%B8%2024",
    rating: 4.8,
    reviewCount: 86,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAGQNQ6b-wEs0EnhbtqQfbVNsvoevBvNMrxtWnkotSB03z-uXbjUgDJkamfE9UaXU-jc2SdzwSMk_fRaQVugyEz6CkCINxGST-Z7KmXfXAznlQnBNC7HTblL29DTV0WtbMwN9zjd3sMF6paog=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "미슐랭 2스타에 걸맞은 완성도라는 평과 함께 소개된 오마카세 전문점."
      }
    ]
  },
  {
    id: "swab-051",
    name: "모수 서울",
    category: "양식",
    address: "서울 용산구 회나무로41길 4",
    phone: "02-6272-5678",
    lat: 37.5411971867086,
    lng: 126.996181126207,
    kakaoUrl: "http://place.map.kakao.com/1791830911",
    naverUrl: "https://map.naver.com/p/search/%EB%AA%A8%EC%88%98%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%ED%9A%8C%EB%82%98%EB%AC%B4%EB%A1%9C41%EA%B8%B8%204",
    rating: 4.5,
    reviewCount: 305,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCDlWTGOcEW37WmXw7DEx5-SZiMtEwJAZPqCx-wP2vGcmJxEtAYjn7UJ4HExoCOkloidDjIbdi0dfJ7dk8t4JBarqxdlE5hktzhlUkHpZjutnfYPqdQOWu3xVgMR2ctZWfoWrNgPrelbXf4b_8=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "파인다이닝 업계 종사자 출신이 직접 평가한 파인다이닝 레스토랑으로 소개됐다."
      }
    ]
  },
  {
    id: "swab-052",
    name: "스시한다",
    category: "초밥,롤",
    address: "서울 강남구 선릉로148길 52-5",
    phone: null,
    lat: 37.5226815829034,
    lng: 127.044008569338,
    kakaoUrl: "http://place.map.kakao.com/1844475944",
    naverUrl: "https://map.naver.com/p/search/%EC%8A%A4%EC%8B%9C%ED%95%9C%EB%8B%A4%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%84%A0%EB%A6%89%EB%A1%9C148%EA%B8%B8%2052-5",
    rating: 4.4,
    reviewCount: 12,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjB7ViRdqzkr4b0dHym4LpJ94wIedceQtfNcKWKDD2hxeHYvruE8OIUzmEMkyrU8MadgRJCKFq43ucaRwY6roq9KZoAgeOFNfDrbNBZ9ZnqDpxmm-90chYhNuYrS_Z7Xe635Ne086G-NANOS=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "만화 '초밥왕'에 나올 법한 초밥 표현을 실제로 이해하게 됐다는 평과 함께 소개된 초밥집."
      }
    ]
  },
  {
    id: "swab-054",
    name: "온지음",
    category: "한식",
    address: "서울 종로구 효자로 49",
    phone: "02-6952-0024",
    lat: 37.580494739542516,
    lng: 126.97339071212892,
    kakaoUrl: "http://place.map.kakao.com/27050439",
    naverUrl: "https://map.naver.com/p/search/%EC%98%A8%EC%A7%80%EC%9D%8C%20%EC%84%9C%EC%9A%B8%20%EC%A2%85%EB%A1%9C%EA%B5%AC%20%ED%9A%A8%EC%9E%90%EB%A1%9C%2049",
    rating: 4.7,
    reviewCount: 158,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD5CS1eHmUTt0Oj6XOkPkCmx_YNz51xscnE1w_eW1eWhtqpr-FiuJ1SqaS8A8F3y8tMtji0sHm7ucbiwBhttCJ6kZ64Tem_3bKugl4UKt51BR6xy85xrkYYdyggvqw6TQVvdWBlkjd_5omxEqnB6TLZeg=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "22가지 코스로 구성된 미슐랭 1스타 한식 파인다이닝으로 소개됐다."
      }
    ]
  },
  {
    id: "swab-055",
    name: "이리에라멘",
    category: "일본식라면",
    address: "서울 마포구 성지1길 18",
    phone: "02-332-3370",
    lat: 37.5480723676712,
    lng: 126.914381481829,
    kakaoUrl: "http://place.map.kakao.com/906556987",
    naverUrl: "https://map.naver.com/p/search/%EC%9D%B4%EB%A6%AC%EC%97%90%EB%9D%BC%EB%A9%98%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EC%84%B1%EC%A7%801%EA%B8%B8%2018",
    rating: 4.6,
    reviewCount: 230,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBdFWIaXbWI2nqNJzq7LytYMfpKN1_wnFMbaCjfJHVMHHJ2SBq0_u0KcAIpyROVgcYDETXNkGWyrrox0Sw6A957SkhjTML6fZ155G7fs2taKEUbUMB10swxOf8BoZBo5JWpCI5aKkWV6bc6e7Q=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "원래도 줄서서 먹던 도미라멘 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "swab-056",
    name: "희옥",
    category: "일본식라면",
    address: "서울 마포구 월드컵로19길 74",
    phone: "010-4083-2666",
    lat: 37.55433769867013,
    lng: 126.9069593083376,
    kakaoUrl: "http://place.map.kakao.com/291532086",
    naverUrl: "https://map.naver.com/p/search/%ED%9D%AC%EC%98%A5%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EC%9B%94%EB%93%9C%EC%BB%B5%EB%A1%9C19%EA%B8%B8%2074",
    rating: 4.6,
    reviewCount: 55,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDZEzXir6KE0XlK8u88DkgYEs5E-TeHIxetR-fiPo-IFP4_lo4_gJJ-h2ZP407XEVLWg_dHCMP9yAouKS5M8IYepY3Ik7NoF_n015IMMmD8PuX3bqfhs6UkAs1kmq3BfnZrY_RFMIlFn5gFt98=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "깔끔한 맛의 시오라멘을 선보이는 라멘집으로 소개됐다."
      }
    ]
  },
  {
    id: "swab-057",
    name: "슈보카가리",
    category: "일식집",
    address: "서울 강남구 선릉로148길 52-5",
    phone: "02-512-9588",
    lat: 37.5226815858538,
    lng: 127.044000650671,
    kakaoUrl: "http://place.map.kakao.com/138470789",
    naverUrl: "https://map.naver.com/p/search/%EC%8A%88%EB%B3%B4%EC%B9%B4%EA%B0%80%EB%A6%AC%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%84%A0%EB%A6%89%EB%A1%9C148%EA%B8%B8%2052-5",
    rating: 4.7,
    reviewCount: 18,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBC-5zJBZ-Jh_a8BY1BWh2DeXNeLHxMhshw1cXqhsFb7RBzjUNgtHZ50PU_36VoLKzrvrATpnjpCVFqe6CMjxtWHGHxCYdaFNHEHtsecVNdJZyS32NOsIYZMnM94kZ4C8N2ijC63n4gOnBm1g=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "SNS 화제성 1위에 오른 레스토랑으로 소개됐다."
      }
    ]
  },
  {
    id: "swab-058",
    name: "스시오마주",
    category: "일식집",
    address: "서울 강남구 강남대로152길 67",
    phone: "02-515-1836",
    lat: 37.51899852994263,
    lng: 127.02452404450847,
    kakaoUrl: "http://place.map.kakao.com/88230451",
    naverUrl: "https://map.naver.com/p/search/%EC%8A%A4%EC%8B%9C%EC%98%A4%EB%A7%88%EC%A3%BC%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EA%B0%95%EB%82%A8%EB%8C%80%EB%A1%9C152%EA%B8%B8%2067",
    rating: 4.6,
    reviewCount: 63,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDNmVeRBybcDBXF22RFPp0Y01jPS4FP1SQHbLFhLUBhWCD_5LgBhnF0c87c--66_pySVCzRDjAHbx3-znNgoAQfoXfYSgoue7o4JAUzP0MIMI7trrWeocgzjrB3zvCQJ2-TzG5E26xv20hUAA=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "미들급 가격대에서 뛰어난 가성비를 보여주는 오마카세 스시로 소개됐다."
      }
    ]
  },
  {
    id: "swab-059",
    name: "캐비스트리",
    category: "한식",
    address: "서울 강남구 도산대로37길 21",
    phone: "02-548-2248",
    lat: 37.52248384253077,
    lng: 127.0311768497404,
    kakaoUrl: "http://place.map.kakao.com/346207534",
    naverUrl: "https://map.naver.com/p/search/%EC%BA%90%EB%B9%84%EC%8A%A4%ED%8A%B8%EB%A6%AC%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EB%8F%84%EC%82%B0%EB%8C%80%EB%A1%9C37%EA%B8%B8%2021",
    rating: 4.2,
    reviewCount: 24,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjA3GTr5ItQ04aW7c07fxi6DVF82elsMWj3oOIxB1vwAqJbKZyVKFSsMHE4IjGnlHKQltl24xK4Go4ja_oG1daI1bKvN3mdAqKbe6jD9hotLYdruHSOw0t3UBIV8YjwO_mQw2fzdbz04st-uqg=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "일식의 끝판왕으로 불리는 셰프가 새롭게 선보인 스페인 요리 레스토랑으로 소개됐다."
      }
    ]
  },
  {
    id: "swab-060",
    name: "티엔미미 홍대점",
    category: "중식",
    address: "서울 마포구 양화로 144",
    phone: "010-8823-1070",
    lat: 37.555339944118,
    lng: 126.92238582799,
    kakaoUrl: "http://place.map.kakao.com/1940227088",
    naverUrl: "https://map.naver.com/p/search/%ED%8B%B0%EC%97%94%EB%AF%B8%EB%AF%B8%20%ED%99%8D%EB%8C%80%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EC%96%91%ED%99%94%EB%A1%9C%20144",
    rating: 3.9,
    reviewCount: 216,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAO3pPF1qVSKLCXOMm6jnDf3_pQMwHu0nx1En7Lwh-RhhZvzxF8RBZQc0uFGFXU4uPcZd1DgBN9XmN-6ss3InWTmuR3IKiBtxE9ajcQKduWqqvjBvR6BjUtXCxMgc2uTSXCr4kOjBQj0DR_FA=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "흑백요리사 출신 딤섬 전문 셰프가 운영하는 중식당으로 소개됐다."
      }
    ]
  },
  {
    id: "swab-061",
    name: "산동포자",
    category: "중국요리",
    address: "인천 부평구 마장로 75",
    phone: "032-431-8885",
    lat: 37.4854519475591,
    lng: 126.707738447374,
    kakaoUrl: "http://place.map.kakao.com/25044266",
    naverUrl: "https://map.naver.com/p/search/%EC%82%B0%EB%8F%99%ED%8F%AC%EC%9E%90%20%EC%9D%B8%EC%B2%9C%20%EB%B6%80%ED%8F%89%EA%B5%AC%20%EB%A7%88%EC%9E%A5%EB%A1%9C%2075",
    rating: 4.1,
    reviewCount: 146,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBcmwPsyfgRPMVYLeBf_4SxwLZe1fpCff0pzJU10NR_ad3TzGZzq3NiF4WjR1WNUX-kI8WyE6GJZgLIcFTc5hVaGrNPY4WpjA2xzDI-JvS0gUNc1i_dYqo2pnpPmIyo0I0LzRS0Wsi3gtzIemc=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "노포 감성의 중식 주점으로 소개됐다."
      }
    ]
  },
  {
    id: "swab-062",
    name: "트리드",
    category: "양식",
    address: "서울 강남구 선릉로162길 16",
    phone: "02-512-8312",
    lat: 37.526706300862216,
    lng: 127.0416883763941,
    kakaoUrl: "http://place.map.kakao.com/744607127",
    naverUrl: "https://map.naver.com/p/search/%ED%8A%B8%EB%A6%AC%EB%93%9C%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%84%A0%EB%A6%89%EB%A1%9C162%EA%B8%B8%2016",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "흑백요리사 출신 셰프의 완벽한 디테일이 돋보이는 파인다이닝으로 소개됐다."
      }
    ]
  },
  {
    id: "swab-063",
    name: "히키니쿠토코메 도산",
    category: "일식",
    address: "서울 강남구 선릉로155길 21",
    phone: "02-545-1129",
    lat: 37.5254957171217,
    lng: 127.037938637846,
    kakaoUrl: "http://place.map.kakao.com/1803076723",
    naverUrl: "https://map.naver.com/p/search/%ED%9E%88%ED%82%A4%EB%8B%88%EC%BF%A0%ED%86%A0%EC%BD%94%EB%A9%94%20%EB%8F%84%EC%82%B0%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%84%A0%EB%A6%89%EB%A1%9C155%EA%B8%B8%2021",
    rating: 4.2,
    reviewCount: 61,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjATrtbJOanGGakT2eb_UTO3h-HQh1sKxVt-yrWE2QZ5ef6OaH3e5MOucWBA4_mcH-W2nixOn2jGpUvxj09rWeNkIYN91R3S3UuSszCNkqAaGrm8OQNkvznyMWpoMgkK1MFzvSD_uPjvPgQweQ=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "시부야 스타일 숯불 함박스테이크를 선보이며 한국에 새롭게 문을 연 곳으로 소개됐다."
      }
    ]
  },
  {
    id: "swab-064",
    name: "라까예",
    category: "멕시칸,브라질",
    address: "서울 중구 퇴계로85길 42",
    phone: "0507-1478-8780",
    lat: 37.5676263667282,
    lng: 127.019751965992,
    kakaoUrl: "http://place.map.kakao.com/1763319426",
    naverUrl: "https://map.naver.com/p/search/%EB%9D%BC%EA%B9%8C%EC%98%88%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%ED%87%B4%EA%B3%84%EB%A1%9C85%EA%B8%B8%2042",
    rating: 4.4,
    reviewCount: 180,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjA8vEj8eSDPA1Cxlc852QD-G6dU5RmP5ENsvgVRLO8twif6xUDSt8q2udStak6ODsh09wbTWSuy5tjO68LPxKdszTih6WWt4BnWNJrq4rOce2Dah6mL7FDQL6pJsrwu1kK3XNMVCtfGv7HT2Q=s4800-w800",
    youtubers: [
      {
        name: "승우아빠",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "가성비가 뛰어난 타코 전문점으로 소개됐다."
      }
    ]
  },
  {
    id: "ttg-001",
    name: "라도집",
    category: "한식",
    address: "서울 용산구 독서당로20길 9",
    phone: null,
    lat: 37.5335879468988,
    lng: 127.00913268654,
    kakaoUrl: "http://place.map.kakao.com/972557256",
    naverUrl: "https://map.naver.com/p/search/%EB%9D%BC%EB%8F%84%EC%A7%91%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%EB%8F%85%EC%84%9C%EB%8B%B9%EB%A1%9C20%EA%B8%B8%209",
    rating: 4.3,
    reviewCount: 174,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAfXAXP5G_vAapdSRK-tHbTMlSqpxiXV-kXkFODH3TNxHG6FqeqQoDe7-JjgA0vbCOQHekmcsVuAhuhCiv-z7R_0QKvmJN7o9iQsKXuPHiYMz_OQRRgsfmI5t3WAyOLylQXWfU4wKOt_ukc=s4800-w800",
    youtubers: [
      {
        name: "또간집(풍자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "한남동 주민들만 안다는 찐맛집으로 소개된 곳으로, 닭도리탕 백반과 제육볶음이 또갈집으로 선정됐다."
      }
    ]
  },
  {
    id: "ttg-002",
    name: "성수부두",
    category: "해물,생선",
    address: "서울 성동구 연무장길 41-26",
    phone: null,
    lat: 37.5434219518814,
    lng: 127.054287326288,
    kakaoUrl: "http://place.map.kakao.com/1282309711",
    naverUrl: "https://map.naver.com/p/search/%EC%84%B1%EC%88%98%EB%B6%80%EB%91%90%20%EC%84%9C%EC%9A%B8%20%EC%84%B1%EB%8F%99%EA%B5%AC%20%EC%97%B0%EB%AC%B4%EC%9E%A5%EA%B8%B8%2041-26",
    rating: 4.5,
    reviewCount: 41,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCZrewrGfY4ELs70EryApaZqV_1ouokIxI8NCNgcFbxpisNLNqXcISNE6pfHvCBEEFzFjS9UtOAXYscfB7wJANr4DjFhVp__cDf3xh8_vX0s5TDYdXT1naW4HF3iv5tHwbgOyrSJfCf0cgmiQ=s4800-w800",
    youtubers: [
      {
        name: "또간집(풍자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "방송 출연을 극도로 꺼리던 성수동 맛집으로 소개됐으며, 조개찜과 칼국수가 또갈집으로 선정됐다."
      }
    ]
  },
  {
    id: "ttg-003",
    name: "오복순대국",
    category: "순대",
    address: "서울 영등포구 도림로 465",
    phone: "02-2677-4183",
    lat: 37.51574102668877,
    lng: 126.89156501552227,
    kakaoUrl: "http://place.map.kakao.com/24040605",
    naverUrl: "https://map.naver.com/p/search/%EC%98%A4%EB%B3%B5%EC%88%9C%EB%8C%80%EA%B5%AD%20%EC%84%9C%EC%9A%B8%20%EC%98%81%EB%93%B1%ED%8F%AC%EA%B5%AC%20%EB%8F%84%EB%A6%BC%EB%A1%9C%20465",
    rating: 4.2,
    reviewCount: 501,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBSSfZyWxYOXqD-43LmnP1wLFoqrxepN32ZbRonIgZUwy6WahKDMFnZ0mQrn3WuELBrw7Xs2PQRmQbdW97C1P69_9AUyVRpBKDjkQ53R4AlrpnGxYMbfiX9kL323jIWWUB39mT7LkjZbo5lkw=s4800-w800",
    youtubers: [
      {
        name: "또간집(풍자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "문래동에서 2시간 만에 완판된다는 국밥집으로, 순댓국과 수육이 함께 나오는 정식이 또갈집으로 선정됐다."
      }
    ]
  },
  {
    id: "ttg-004",
    name: "왕거미식당",
    category: "육류,고기",
    address: "대구 중구 국채보상로 696-8",
    phone: "053-427-6380",
    lat: 35.86849974081334,
    lng: 128.60669855070034,
    kakaoUrl: "http://place.map.kakao.com/21227823",
    naverUrl: "https://map.naver.com/p/search/%EC%99%95%EA%B1%B0%EB%AF%B8%EC%8B%9D%EB%8B%B9%20%EB%8C%80%EA%B5%AC%20%EC%A4%91%EA%B5%AC%20%EA%B5%AD%EC%B1%84%EB%B3%B4%EC%83%81%EB%A1%9C%20696-8",
    rating: 3.9,
    reviewCount: 668,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAqBAigcjUAp8tMew51peprJX-IR8HJTNCRdpb0CpXMwdk7veRQ3D63PS4DakLggXUDoyb1WHdQ2P-kn0TFRTB1lKK_pXy4pqIZHkbcdATHYebzc5v3xTmzanfqte9R_CybBMZDcFL-lSREOFY=s4800-w800",
    youtubers: [
      {
        name: "또간집(풍자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "대구를 대표하는 맛집으로 소개됐으며, 뭉티기(생고기)와 오드레기(소 힘줄)가 또갈집으로 선정됐다."
      }
    ]
  },
  {
    id: "ttg-005",
    name: "떡도리탕 강남본점",
    category: "닭요리",
    address: "서울 강남구 테헤란로1길 28-9",
    phone: "02-501-2940",
    lat: 37.5005001139566,
    lng: 127.028078078172,
    kakaoUrl: "http://place.map.kakao.com/353333104",
    naverUrl: "https://map.naver.com/p/search/%EB%96%A1%EB%8F%84%EB%A6%AC%ED%83%95%20%EA%B0%95%EB%82%A8%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%ED%85%8C%ED%97%A4%EB%9E%80%EB%A1%9C1%EA%B8%B8%2028-9",
    rating: 4.2,
    reviewCount: 393,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD_M9-q79VB9ZL2MEulCMgwsnigagMNEbwbk7zKebVLgjcbgNE84fqAPlK88n96RD1ijQZTzqs8iuMX-8gGYlneD4i9_12ruJAtfep0zGQhILeEQ5q8SdyIx4abaYuvei-RSvnMzTNAiHdF4A=s4800-w800",
    youtubers: [
      {
        name: "또간집(풍자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "프랜차이즈가 즐비한 강남에서 30년간 자리를 지켜온 맛집으로 소개됐으며, 떡도리탕이 또갈집으로 선정됐다."
      }
    ]
  },
  {
    id: "ttg-006",
    name: "섬집",
    category: "한식",
    address: "서울 용산구 한강대로14길 8",
    phone: "02-794-0087",
    lat: 37.52497665587376,
    lng: 126.96469635999026,
    kakaoUrl: "http://place.map.kakao.com/18821272",
    naverUrl: "https://map.naver.com/p/search/%EC%84%AC%EC%A7%91%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%ED%95%9C%EA%B0%95%EB%8C%80%EB%A1%9C14%EA%B8%B8%208",
    rating: 4.2,
    reviewCount: 573,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjClvXX7yhEyCb7K78S67doDmd-ZhA17KPg_xaRLpVrfr-RhHw4tKGcEtIqcOf0HRNvU7vTdalaL_xWxVpNUrKkLNjxOvh_ArgE3B61nNaI1Qn-4jvG5Id3t-Jhb6ia8sM3vkQWRxHn8YXX2DqC6_uOwCQ=s4800-w800",
    youtubers: [
      {
        name: "또간집(풍자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "밥 네 공기까지 가능하다고 소개된 용산 맛집으로, 육전과 김치찜이 또갈집으로 선정됐다."
      }
    ]
  },
  {
    id: "ttg-007",
    name: "정철황소곱창 본점",
    category: "육류,고기",
    address: "경기 수원시 영통구 영통로130번길 42",
    phone: "031-204-9204",
    lat: 37.2396527874756,
    lng: 127.058513579611,
    kakaoUrl: "http://place.map.kakao.com/23346761",
    naverUrl: "https://map.naver.com/p/search/%EC%A0%95%EC%B2%A0%ED%99%A9%EC%86%8C%EA%B3%B1%EC%B0%BD%20%EB%B3%B8%EC%A0%90%20%EA%B2%BD%EA%B8%B0%20%EC%88%98%EC%9B%90%EC%8B%9C%20%EC%98%81%ED%86%B5%EA%B5%AC%20%EC%98%81%ED%86%B5%EB%A1%9C130%EB%B2%88%EA%B8%B8%2042",
    rating: 4.2,
    reviewCount: 276,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAZ6WoNVM4S0sg2c2PfgUfDXNeCUuJzI84oCX3a7sGpU7R94ua1Ziqf9QtckxaoxPzppSZduvPMAhaKpJ53Dimr7hHlD10UqBzMOED0l8j9Dp3lCt6CjklxYPlquQeNe4u_WtcSSuAeDDIdkCk=s4800-w800",
    youtubers: [
      {
        name: "또간집(풍자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "수원 로컬 맛집으로 소개됐으며, 곱창구이와 얼큰라면, 알곱창구이가 또갈집으로 선정됐다."
      }
    ]
  },
  {
    id: "ttg-008",
    name: "선경준치회집",
    category: "해물,생선",
    address: "전남 목포시 해안로57번길 1",
    phone: "061-242-5653",
    lat: 34.780780992150966,
    lng: 126.3706786324871,
    kakaoUrl: "http://place.map.kakao.com/8425892",
    naverUrl: "https://map.naver.com/p/search/%EC%84%A0%EA%B2%BD%EC%A4%80%EC%B9%98%ED%9A%8C%EC%A7%91%20%EC%A0%84%EB%82%A8%20%EB%AA%A9%ED%8F%AC%EC%8B%9C%20%ED%95%B4%EC%95%88%EB%A1%9C57%EB%B2%88%EA%B8%B8%201",
    rating: 4.1,
    reviewCount: 1384,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAxmHiOmKufLtYFOWWpe78vOeO0CzMrn_k3BTB_CrPoYA5kCcA4szNW3yBwtyLq-sGn45euXK0AhcamWmlGuIqIlOzIM_ZxP7wvU2iZxS_Cbg3DSmRBJXBSD7Wt1sW5gPX4G7roYm3Phjz-DEpVLL-9BA=s4800-w800",
    youtubers: [
      {
        name: "또간집(풍자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "목포 찐맛집으로 소개됐으며, 준치 회무침과 붕장어 양념구이가 또갈집으로 선정됐다."
      }
    ]
  },
  {
    id: "ttg-009",
    name: "25시참숯구이",
    category: "육류,고기",
    address: "광주 북구 연양로105번길 7",
    phone: "062-574-6692",
    lat: 35.2071676753264,
    lng: 126.878857883062,
    kakaoUrl: "http://place.map.kakao.com/2083224089",
    naverUrl: "https://map.naver.com/p/search/25%EC%8B%9C%EC%B0%B8%EC%88%AF%EA%B5%AC%EC%9D%B4%20%EA%B4%91%EC%A3%BC%20%EB%B6%81%EA%B5%AC%20%EC%97%B0%EC%96%91%EB%A1%9C105%EB%B2%88%EA%B8%B8%207",
    rating: 4.4,
    reviewCount: 298,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCntYSBf16F-JQZQlRQZB4mQyGh2HaMj_v9ZBjeU8rPVVdhtA3I6f1Tg0H9lWQ7UvPmVZeJH2FZOniim3X7Z8g7zte51LOMb-kV8cX-hMLPrlOV_Iwv-jbGU-3bCOoIc1mfQ-h51h5vkq2Ya6g=s4800-w800",
    youtubers: [
      {
        name: "또간집(풍자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "전라도 맛집 특집에서 소개됐으며, 오돌뼈 구이와 된장 삼겹살이 또갈집으로 선정됐다."
      }
    ]
  },
  {
    id: "ttg-010",
    name: "남동어시장",
    category: "해물,생선",
    address: "인천 남동구 하촌로71번길 45",
    phone: null,
    lat: 37.454542219001,
    lng: 126.731380650665,
    kakaoUrl: "http://place.map.kakao.com/1627641819",
    naverUrl: "https://map.naver.com/p/search/%EB%82%A8%EB%8F%99%EC%96%B4%EC%8B%9C%EC%9E%A5%20%EC%9D%B8%EC%B2%9C%20%EB%82%A8%EB%8F%99%EA%B5%AC%20%ED%95%98%EC%B4%8C%EB%A1%9C71%EB%B2%88%EA%B8%B8%2045",
    rating: 4.3,
    reviewCount: 234,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCKSCEadC9lQ4NbE-xCFvCY9bsndn2thGMUOwJAjDUvhomN94ovwhuoVa-b--s16gR_z_PyfUZ9kAt7kptNR4gRnyq6qfltpnw15_xggdI5eF3PRpNDj5PYM1YUUhaHlMgt7yt1BCsVV9epmZXfI8zV=s4800-w800",
    youtubers: [
      {
        name: "또간집(풍자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "인천 주민들만 안다는 로컬 찐맛집으로 소개됐으며, 참다랑어·방어·참돔·대광어로 구성된 모듬숙성회가 또갈집으로 선정됐다."
      }
    ]
  },
  {
    id: "ttg-011",
    name: "송정희어머니순두부",
    category: "두부전문점",
    address: "강원특별자치도 속초시 원암학사평길 192",
    phone: "033-636-0914",
    lat: 38.20536434293349,
    lng: 128.52867766844184,
    kakaoUrl: "http://place.map.kakao.com/1629060954",
    naverUrl: "https://map.naver.com/p/search/%EC%86%A1%EC%A0%95%ED%9D%AC%EC%96%B4%EB%A8%B8%EB%8B%88%EC%88%9C%EB%91%90%EB%B6%80%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%86%8D%EC%B4%88%EC%8B%9C%20%EC%9B%90%EC%95%94%ED%95%99%EC%82%AC%ED%8F%89%EA%B8%B8%20192",
    rating: 3.8,
    reviewCount: 194,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDXlw3q5VtCkHFYyG7ffcUQfmVZHoJjrCy8B6rQiqpy7XyhKNeido8RGQdr1LiIU-4IYFIidnuFKpyq90IZuKnucD_OQX7BHc5DQtmDs6wZFoh59HqT0xRQXKdBffwd1aCCuIawme4TBcrGri8apXcXWw=s4800-w800",
    youtubers: [
      {
        name: "또간집(풍자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "속초 찐맛집으로 소개됐으며, 해물순두부와 순두부가 또갈집으로 선정됐다."
      }
    ]
  },
  {
    id: "ttg-012",
    name: "희신이네",
    category: "닭요리",
    address: "제주특별자치도 서귀포시 호근서호로 190",
    phone: "010-6798-7651",
    lat: 33.257644371743154,
    lng: 126.52063235220808,
    kakaoUrl: "http://place.map.kakao.com/27449497",
    naverUrl: "https://map.naver.com/p/search/%ED%9D%AC%EC%8B%A0%EC%9D%B4%EB%84%A4%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%84%9C%EA%B7%80%ED%8F%AC%EC%8B%9C%20%ED%98%B8%EA%B7%BC%EC%84%9C%ED%98%B8%EB%A1%9C%20190",
    rating: 4,
    reviewCount: 407,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjC9F8Yl7eZ8ScmeXiEcJowmJDx7M2dLF-S-whUiw9GyR6zmyziwLdNKn9wzEWFoAj7f_BBcwZ8daYLh1CnX23B4Wc0BdOBchRNZ-MsqxGX_EKTJ2S5Js9D1ejb2wImVw7cQyLejaqG0W9k1Fg=s4800-w800",
    youtubers: [
      {
        name: "또간집(풍자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "서귀포 맛집으로 소개됐으며, 닭고기냉밀면과 닭깐풍기가 또갈집으로 선정됐다."
      }
    ]
  },
  {
    id: "ttg-014",
    name: "빼돌린뒷고기",
    category: "육류,고기",
    address: "경북 경주시 충효중앙길 78",
    phone: "054-775-9282",
    lat: 35.8441683447751,
    lng: 129.182622039761,
    kakaoUrl: "http://place.map.kakao.com/2006190067",
    naverUrl: "https://map.naver.com/p/search/%EB%B9%BC%EB%8F%8C%EB%A6%B0%EB%92%B7%EA%B3%A0%EA%B8%B0%20%EA%B2%BD%EB%B6%81%20%EA%B2%BD%EC%A3%BC%EC%8B%9C%20%EC%B6%A9%ED%9A%A8%EC%A4%91%EC%95%99%EA%B8%B8%2078",
    rating: 4.4,
    reviewCount: 97,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDn-FfZ7sejqySVPOSjq0d0S0V5ngNbb2mAP2vxRAh5_nBC7C7I6AdSAPmEkzKul0tUbrcP4i4niE-aHzPWfgJOTSDEVtNQxUkh7NRXQEBqSkmC6dh0iLf8-tivR7o24LT749as4KsloB9H=s4800-w800",
    youtubers: [
      {
        name: "또간집(풍자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "경주 맛집으로 소개됐으며, 뒷목살·뽈살로 구성된 뒷고기 모듬이 또갈집으로 선정됐다."
      }
    ]
  },
  {
    id: "ttg-016",
    name: "산사랑",
    category: "한정식",
    address: "경기 용인시 수지구 샘말로89번길 9",
    phone: "031-263-6070",
    lat: 37.353187295001746,
    lng: 127.04572323500693,
    kakaoUrl: "http://place.map.kakao.com/12405307",
    naverUrl: "https://map.naver.com/p/search/%EC%82%B0%EC%82%AC%EB%9E%91%20%EA%B2%BD%EA%B8%B0%20%EC%9A%A9%EC%9D%B8%EC%8B%9C%20%EC%88%98%EC%A7%80%EA%B5%AC%20%EC%83%98%EB%A7%90%EB%A1%9C89%EB%B2%88%EA%B8%B8%209",
    rating: 3.9,
    reviewCount: 1767,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjA3Y_0GMdzpVmYHClGzejLn8bI61fh72com2mWCGJrjZERoXySkC9g6in3tnZ-sWGlvKOWOBOfsUdb8z58s_kvx2tiNUIBwQlb0JnOZLP64OOuLZ7EXer3ZWiWbsmEzIE7i3aLQtJCIz6VjWGU=s4800-w800",
    youtubers: [
      {
        name: "또간집(풍자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "용인 맛집으로 소개됐으며, 한정식 코스가 또갈집으로 선정됐다."
      }
    ]
  },
  {
    id: "ttg-017",
    name: "백금식당",
    category: "한식",
    address: "전남 여수시 교동남1길 5-15",
    phone: "061-663-7072",
    lat: 34.739789179631,
    lng: 127.73441502014767,
    kakaoUrl: "http://place.map.kakao.com/21292784",
    naverUrl: "https://map.naver.com/p/search/%EB%B0%B1%EA%B8%88%EC%8B%9D%EB%8B%B9%20%EC%A0%84%EB%82%A8%20%EC%97%AC%EC%88%98%EC%8B%9C%20%EA%B5%90%EB%8F%99%EB%82%A81%EA%B8%B8%205-15",
    rating: 3.7,
    reviewCount: 107,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAUSyRpuf-uiVV-qfbjeqKmu_8YYdlRZwNipmeH1a7TruuvdR732EfSdB2cOQji4PkTlvoee-MSMfjy1I8xHx8VxukksKXe6rHiyJ0rKBXshI90tCUJetHRw831mRqEx4CEvoSK752lAYffCfV-2fpz=s4800-w800",
    youtubers: [
      {
        name: "또간집(풍자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "여수 맛집으로 소개됐으며, 백반과 서대회무침이 또갈집으로 선정됐다."
      }
    ]
  },
  {
    id: "ttg-018",
    name: "소라편의점식당",
    category: "한식",
    address: "전남 순천시 덕월길 68",
    phone: "061-741-2588",
    lat: 34.9262474208717,
    lng: 127.487339516517,
    kakaoUrl: "http://place.map.kakao.com/21571846",
    naverUrl: "https://map.naver.com/p/search/%EC%86%8C%EB%9D%BC%ED%8E%B8%EC%9D%98%EC%A0%90%EC%8B%9D%EB%8B%B9%20%EC%A0%84%EB%82%A8%20%EC%88%9C%EC%B2%9C%EC%8B%9C%20%EB%8D%95%EC%9B%94%EA%B8%B8%2068",
    rating: 4.2,
    reviewCount: 61,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCmjGCeaBmzPKsZaCtuFMe7vpqjLA1bfGozkO10FNb2JpjcX20tlIkTJ7e4yMxz-3HYE1Ii97FJgwLmGJ7h_nW1vHgj-k7sdQbaPxxVOpSgx6UPifsdHb2E7IhxUGd7IwKLNTuLDMAlU46BnQ=s4800-w800",
    youtubers: [
      {
        name: "또간집(풍자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "순천 맛집으로 소개됐으며, 두루치기가 또갈집으로 선정됐다."
      }
    ]
  },
  {
    id: "ttg-019",
    name: "대련집",
    category: "칼국수",
    address: "서울 종로구 종로16길 37",
    phone: "02-2265-5349",
    lat: 37.56839334531018,
    lng: 126.98891841085968,
    kakaoUrl: "http://place.map.kakao.com/7818113",
    naverUrl: "https://map.naver.com/p/search/%EB%8C%80%EB%A0%A8%EC%A7%91%20%EC%84%9C%EC%9A%B8%20%EC%A2%85%EB%A1%9C%EA%B5%AC%20%EC%A2%85%EB%A1%9C16%EA%B8%B8%2037",
    rating: 4,
    reviewCount: 1453,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAt5ZQPvZTY-z3Ro2sH1r6JsNIjPdwTaH8PIGfaSxH9Xk1FwVuxCBflp8Jsam1BZDvcZArDRTCsS9NT-mJTa4KJpeyihdTbBmFLU5-pZf5sB9gin6pTLxHaRAfn0ofIg-5c3vixbGkC2xqNP2E=s4800-w800",
    youtubers: [
      {
        name: "또간집(풍자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "종로 맛집으로 소개됐으며, 시골칼국수와 생배추보쌈이 또갈집으로 선정됐다."
      }
    ]
  },
  {
    id: "ttg-020",
    name: "인천식당",
    category: "한식",
    address: "경북 포항시 북구 중앙로 328",
    phone: "054-241-0767",
    lat: 36.041921853182345,
    lng: 129.36619825791558,
    kakaoUrl: "http://place.map.kakao.com/14076429",
    naverUrl: "https://map.naver.com/p/search/%EC%9D%B8%EC%B2%9C%EC%8B%9D%EB%8B%B9%20%EA%B2%BD%EB%B6%81%20%ED%8F%AC%ED%95%AD%EC%8B%9C%20%EB%B6%81%EA%B5%AC%20%EC%A4%91%EC%95%99%EB%A1%9C%20328",
    rating: 4.1,
    reviewCount: 189,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAryB57e_klytLKNNS-6RoWqiTxZgjl4uSZhWGodOaoQRubT-h7dEng4wEU8f93yz5jrzG3XlFnmcbsxc8GLdF3NvcR2aGJbsAkExJnmbckwrKAwRMq3BRYNX1fKtbvQdEwqeE04NiruXfKoNvCDxjj=s4800-w800",
    youtubers: [
      {
        name: "또간집(풍자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "포항 맛집으로 소개됐으며, 두루치기가 또갈집으로 선정됐다."
      }
    ]
  },
  {
    id: "ttg-021",
    name: "유야케도쿄",
    category: "돈까스,우동",
    address: "서울 서대문구 이화여대3길 28",
    phone: null,
    lat: 37.55807326279892,
    lng: 126.9441628345876,
    kakaoUrl: "http://place.map.kakao.com/1459458596",
    naverUrl: "https://map.naver.com/p/search/%EC%9C%A0%EC%95%BC%EC%BC%80%EB%8F%84%EC%BF%84%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EC%9D%B4%ED%99%94%EC%97%AC%EB%8C%803%EA%B8%B8%2028",
    rating: 4.3,
    reviewCount: 98,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBa1ARfuD9FqgWJm3Q3kf7FTR3MOTFi9mgAK4vdKCt8QZwsYtzvp04mdzcl3Lw5jN34SfP7u-jFZS5zwERuO54f2iRisWthjptJCxNk7XVVx50RsEByZzHmeSVCr-nUybgCc1DJBkX6Rgll=s4800-w800",
    youtubers: [
      {
        name: "또간집(풍자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "신촌 맛집으로 소개됐으며, 치즈돈까스가 또갈집으로 선정됐다."
      }
    ]
  },
  {
    id: "ttg-022",
    name: "토리카미",
    category: "호프,요리주점",
    address: "서울 중구 충무로5길 21",
    phone: "02-6465-3809",
    lat: 37.5653283702735,
    lng: 126.991484843776,
    kakaoUrl: "http://place.map.kakao.com/1732828194",
    naverUrl: "https://map.naver.com/p/search/%ED%86%A0%EB%A6%AC%EC%B9%B4%EB%AF%B8%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EC%B6%A9%EB%AC%B4%EB%A1%9C5%EA%B8%B8%2021",
    rating: 4.3,
    reviewCount: 22,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBMySzhcdGs8kRBXPFBPWUNrrTAjyhzxxQW2QXEf_wuDe7a8XvlFex2gYSz5YkwMOudMhKNzB3ATTgniFsLrS24oB75bapSYe34memS3IWI8UA4OLGb2RII97heXd0BlxUM05tqX2SJZVIsBFU=s4800-w800",
    youtubers: [
      {
        name: "또간집(풍자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "을지로의 새로 뜨는 맛집 3대장 중 하나로 소개됐으며, 닭 모듬구이가 또갈집으로 선정됐다."
      }
    ]
  },
  {
    id: "ttg-023",
    name: "카미야",
    category: "돈까스,우동",
    address: "서울 마포구 와우산로21길 28-6",
    phone: "02-322-5733",
    lat: 37.552582876796265,
    lng: 126.9223637900431,
    kakaoUrl: "http://place.map.kakao.com/12771116",
    naverUrl: "https://map.naver.com/p/search/%EC%B9%B4%EB%AF%B8%EC%95%BC%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EC%99%80%EC%9A%B0%EC%82%B0%EB%A1%9C21%EA%B8%B8%2028-6",
    rating: 4.5,
    reviewCount: 309,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjA5eFOD2LiVS3faTx1qv-SBQRVPKY-583KTRcI6gfxXliEUedJiZ86DCF0KrYh9hM97PTgNZuaSvk5hmMxrd6oy2UjEXU9r9tn8gZua_8lRZF_RhYiIowtdQu09MQka3r0nrllp9SYeYXG-vA=s4800-w800",
    youtubers: [
      {
        name: "또간집(풍자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "홍대 술자리 맛집으로 소개됐으며, 오코노미소스동이 또갈집으로 선정됐다."
      }
    ]
  },
  {
    id: "ttg-024",
    name: "와타요업 갈마본점",
    category: "일식",
    address: "대전 서구 갈마역로25번길 9-8",
    phone: "010-4792-3220",
    lat: 36.3525647319605,
    lng: 127.373476882175,
    kakaoUrl: "http://place.map.kakao.com/118007880",
    naverUrl: "https://map.naver.com/p/search/%EC%99%80%ED%83%80%EC%9A%94%EC%97%85%20%EA%B0%88%EB%A7%88%EB%B3%B8%EC%A0%90%20%EB%8C%80%EC%A0%84%20%EC%84%9C%EA%B5%AC%20%EA%B0%88%EB%A7%88%EC%97%AD%EB%A1%9C25%EB%B2%88%EA%B8%B8%209-8",
    rating: 4.4,
    reviewCount: 501,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBbcINcIDo60R9tjR0pdIuF7Yep_QGZJgWf4FBOg-z7TvKfvQ2lkCnyCtJq1a_ezuKLPxUNYagsImRWYZlEPjSmWEDLI4zYH44F5QAyfvIrHLFAZfFaBt9VHZTPTCEeWpK951Dy5xMAOECnMQ=s4800-w800",
    youtubers: [
      {
        name: "또간집(풍자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "대전 맛집으로 소개됐으며, 텐동이 또갈집으로 선정됐다."
      }
    ]
  },
  {
    id: "ttg-025",
    name: "담택 본점",
    category: "일본식라면",
    address: "서울 마포구 동교로12안길 51",
    phone: null,
    lat: 37.554451999412265,
    lng: 126.91516525478127,
    kakaoUrl: "http://place.map.kakao.com/1534943798",
    naverUrl: "https://map.naver.com/p/search/%EB%8B%B4%ED%83%9D%20%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EB%8F%99%EA%B5%90%EB%A1%9C12%EC%95%88%EA%B8%B8%2051",
    rating: 4.5,
    reviewCount: 450,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAJxRpB1J5K0wZN8KiUeeWO4JMVb3GgoHT1bClEfJX-40jLiYXN3_vmdaoqdw8hrv3tEObqXwsSDpgOc-T5lvlnQthok0g0SpfYZ_f699QA7o8N5FKSLPJrblKzUqf_WGbQxth3kP__N_eP=s4800-w800",
    youtubers: [
      {
        name: "또간집(풍자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "합정 인근 맛집으로 소개됐으며, 라멘이 또갈집으로 선정됐다."
      }
    ]
  },
  {
    id: "ttg-026",
    name: "뉴오더클럽",
    category: "피자",
    address: "서울 마포구 동교로34길 3",
    phone: "02-336-1025",
    lat: 37.5610590758941,
    lng: 126.924552986639,
    kakaoUrl: "http://place.map.kakao.com/1629395786",
    naverUrl: "https://map.naver.com/p/search/%EB%89%B4%EC%98%A4%EB%8D%94%ED%81%B4%EB%9F%BD%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EB%8F%99%EA%B5%90%EB%A1%9C34%EA%B8%B8%203",
    rating: 4.3,
    reviewCount: 318,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCGnGAFHna5Dgv9pKGbFkRpC3H1aQOIhh7gT4XSv-EGfdYEOY8QL-_kvHIIM1DOs_ExBC0gI7WzklpCZgVIC-exsQUeD3tKUGXv3ttS8iermvHZsg0h4yg7fzlZq0HoHVqJgrrstgVYNlqe5w=s4800-w800",
    youtubers: [
      {
        name: "또간집(풍자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "연남동 맛집 종결자로 소개됐으며, 포테이토와 루꼴라 반반 피자가 또갈집으로 선정됐다."
      }
    ]
  },
  {
    id: "ttg-027",
    name: "자코비버거 이태원점",
    category: "햄버거",
    address: "서울 용산구 신흥로 38",
    phone: "02-3785-0433",
    lat: 37.5417975454425,
    lng: 126.987421943293,
    kakaoUrl: "http://place.map.kakao.com/8057957",
    naverUrl: "https://map.naver.com/p/search/%EC%9E%90%EC%BD%94%EB%B9%84%EB%B2%84%EA%B1%B0%20%EC%9D%B4%ED%83%9C%EC%9B%90%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%EC%8B%A0%ED%9D%A5%EB%A1%9C%2038",
    rating: 4.2,
    reviewCount: 935,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBkGyH584T9r0L1sJDLh2suK1lBTtYdGzwOQZ7VsopsPX1S4S6gSiBEAw2yY0Y7ioKxgnEbZmes_OdPCk8CNVPEBI9EjcYcHXu2C3imepzkVSQIHSvDl_zBJFtpn4ptK2rBzAy5oDgK38b7tAY=s4800-w800",
    youtubers: [
      {
        name: "또간집(풍자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "이태원 맛집 종결자로 소개됐으며, 내장을 활용한 버거가 또갈집으로 선정됐다."
      }
    ]
  },
  {
    id: "ttg-028",
    name: "더빛남",
    category: "베트남음식",
    address: "서울 송파구 오금로18길 5",
    phone: "0507-1371-2495",
    lat: 37.51026608123815,
    lng: 127.11085769148723,
    kakaoUrl: "http://place.map.kakao.com/1618885386",
    naverUrl: "https://map.naver.com/p/search/%EB%8D%94%EB%B9%9B%EB%82%A8%20%EC%84%9C%EC%9A%B8%20%EC%86%A1%ED%8C%8C%EA%B5%AC%20%EC%98%A4%EA%B8%88%EB%A1%9C18%EA%B8%B8%205",
    rating: 4.5,
    reviewCount: 151,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjB3jISUGUvFNn2gOR16OaZHgsw0KjvtZRvxkH-ch4jabnpWCmwrxi1TKGPK4bGC0gVxh8mFk6PoRnFuO9tn04cTJzZ5BxRA9GaZWdXon-5YGTVGOULA7XUafeseBNCihuncH8eOOiB3UoPWYEA=s4800-w800",
    youtubers: [
      {
        name: "또간집(풍자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "잠실 주민들만 안다는 로컬 맛집으로 소개됐으며, 차돌·양지·도가니가 들어간 쌀국수가 또갈집으로 선정됐다."
      }
    ]
  },
  {
    id: "lyj-001",
    name: "떡산",
    category: "분식",
    address: "서울 은평구 연서로 247-1",
    phone: "02-6082-4321",
    lat: 37.619553682927936,
    lng: 126.92238708629974,
    kakaoUrl: "http://place.map.kakao.com/57913604",
    naverUrl: "https://map.naver.com/p/search/%EB%96%A1%EC%82%B0%20%EC%84%9C%EC%9A%B8%20%EC%9D%80%ED%8F%89%EA%B5%AC%20%EC%97%B0%EC%84%9C%EB%A1%9C%20247-1",
    rating: 3.2,
    reviewCount: 127,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCT-StuyvMSzLQ4WQ_N8eMH1-U9xw5pSM3SxMeY3EHumH2MknO8uiEMrYHRUJ8EsVo-NRQMbQ8OczfQjg2eINSpIcWi2YV33Q-KiI0fN7R7psnk8zfPDcrwOAjdNcADWcdRsFJ5hV9PP8laiq6EjbAYSA=s4800-w800",
    youtubers: [
      {
        name: "전지적 참견 시점(이영자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "연신내 인근에서 부산식 전통 떡볶이를 선보이는 곳으로 소개됐다."
      }
    ]
  },
  {
    id: "lyj-002",
    name: "굴다리식당",
    category: "한식",
    address: "서울 마포구 새창로 8-1",
    phone: "02-712-0066",
    lat: 37.5421087241179,
    lng: 126.950805519086,
    kakaoUrl: "http://place.map.kakao.com/12079226",
    naverUrl: "https://map.naver.com/p/search/%EA%B5%B4%EB%8B%A4%EB%A6%AC%EC%8B%9D%EB%8B%B9%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EC%83%88%EC%B0%BD%EB%A1%9C%208-1",
    rating: 3.6,
    reviewCount: 1343,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBgvACE-3WcVBy0B6rkwJ5kTP6iVcvjGPJbJgyiXMR73EYjMIMMxpFyFgD_xasALWsTGIuRXroZxVIpldsV0bp4vFdKFiXseFrAEhpj-RKruYV0yVBIt129YdgJhVDot9qfCrs-dqkMQkGSvw=s4800-w800",
    youtubers: [
      {
        name: "전지적 참견 시점(이영자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "공덕역 인근의 김치찌개·제육볶음 노포로 소개됐다."
      }
    ]
  },
  {
    id: "lyj-003",
    name: "슬로우치즈",
    category: "양식",
    address: "서울 강남구 삼성로145길 13",
    phone: "02-517-7172",
    lat: 37.5223740928915,
    lng: 127.046991452104,
    kakaoUrl: "http://place.map.kakao.com/416864455",
    naverUrl: "https://map.naver.com/p/search/%EC%8A%AC%EB%A1%9C%EC%9A%B0%EC%B9%98%EC%A6%88%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%82%BC%EC%84%B1%EB%A1%9C145%EA%B8%B8%2013",
    rating: 4.3,
    reviewCount: 81,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAAYAFddowXlm4-wHbg4SOd_GvIx5wKLu_ggEBZJUpwGqcWyENpWZTUA3Xih5txxB2241kUtobudWZztVGlIfVL2XDhEmKRMpLosiOhosNVmNErXwU_KBDnZ_ch-bj6BPtYZgROyrjJFW9Ftg=s4800-w800",
    youtubers: [
      {
        name: "전지적 참견 시점(이영자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "모짜렐라·부라타 등 다양한 치즈 요리를 선보이는 청담 인근 레스토랑으로 소개됐다."
      }
    ]
  },
  {
    id: "lyj-004",
    name: "참사랑해 본점",
    category: "참치회",
    address: "서울 강동구 양재대로 1500",
    phone: "02-473-1337",
    lat: 37.53949112801616,
    lng: 127.14111969249298,
    kakaoUrl: "http://place.map.kakao.com/27331509",
    naverUrl: "https://map.naver.com/p/search/%EC%B0%B8%EC%82%AC%EB%9E%91%ED%95%B4%20%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%8F%99%EA%B5%AC%20%EC%96%91%EC%9E%AC%EB%8C%80%EB%A1%9C%201500",
    rating: 4.2,
    reviewCount: 25,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDcRi09pQ8ePsDs0igw9QePCUmzsL9rPaeS-v-1BxHKf_5JrpRxTO-rtjHDAYchiNSezDz57XCq9bypwxu60Rh9HIeL66ERWtIM0Sj2-ugUmplMxvPT0ocgWdUy3JFyvs0surbudvJgJ_Zjpoo=s4800-w800",
    youtubers: [
      {
        name: "전지적 참견 시점(이영자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "참치구이로 유명한 강동구의 참치 전문점으로 소개됐다."
      }
    ]
  },
  {
    id: "lyj-005",
    name: "영원식당",
    category: "수제비",
    address: "서울 영등포구 여의나루로 117",
    phone: "02-784-1866",
    lat: 37.526152949040615,
    lng: 126.9310817631017,
    kakaoUrl: "http://place.map.kakao.com/13289961",
    naverUrl: "https://map.naver.com/p/search/%EC%98%81%EC%9B%90%EC%8B%9D%EB%8B%B9%20%EC%84%9C%EC%9A%B8%20%EC%98%81%EB%93%B1%ED%8F%AC%EA%B5%AC%20%EC%97%AC%EC%9D%98%EB%82%98%EB%A3%A8%EB%A1%9C%20117",
    rating: 3.9,
    reviewCount: 701,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBZwfdB1JklBRi_prsSGa4pdb2ZV6htNJbn_Df1C7dEupHUXShMIF1pQUThJmSot0CNVgEKGmXyNJE2lrNYAbkIbjl7DSIHA7-L-KZD4UZElLYwEFrZccH_aMnBaonJlJVk33Fe5VmwrYvAwRc=s4800-w800",
    youtubers: [
      {
        name: "전지적 참견 시점(이영자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "여의도에서 수제비와 감자전을 파는 노포로 소개됐다."
      },
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "여의도에서 오랫동안 수제비와 감자전을 선보여온 노포로 소개됐다."
      }
    ]
  },
  {
    id: "lyj-006",
    name: "한남동한방통닭",
    category: "치킨",
    address: "서울 용산구 대사관로34길 12",
    phone: "02-797-8677",
    lat: 37.53274120851465,
    lng: 127.00596242739974,
    kakaoUrl: "http://place.map.kakao.com/16330571",
    naverUrl: "https://map.naver.com/p/search/%ED%95%9C%EB%82%A8%EB%8F%99%ED%95%9C%EB%B0%A9%ED%86%B5%EB%8B%AD%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%EB%8C%80%EC%82%AC%EA%B4%80%EB%A1%9C34%EA%B8%B8%2012",
    rating: 4.3,
    reviewCount: 1149,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCpsU6uKZhHgsesYUYB5kaaSrZtksXCDQY5KGrCqmlaBX8PZk1WEOBYKoUOmgBcGCPkFcF8ANPjgHrsx57Oz6dHMqQBXvK9c_S5CZuIDhsI_7w6eYfcmt4v3-tnheq6uvbSookM4OS9TCKRWA=s4800-w800",
    youtubers: [
      {
        name: "전지적 참견 시점(이영자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "장작으로 구워내는 한방 통닭으로 유명해져 유명 인사들의 단골집으로도 알려진 곳으로 소개됐다."
      }
    ]
  },
  {
    id: "lyj-007",
    name: "진주집",
    category: "국수",
    address: "서울 영등포구 국제금융로6길 33",
    phone: "02-780-6108",
    lat: 37.52059128119736,
    lng: 126.9269500559961,
    kakaoUrl: "http://place.map.kakao.com/8094563",
    naverUrl: "https://map.naver.com/p/search/%EC%A7%84%EC%A3%BC%EC%A7%91%20%EC%84%9C%EC%9A%B8%20%EC%98%81%EB%93%B1%ED%8F%AC%EA%B5%AC%20%EA%B5%AD%EC%A0%9C%EA%B8%88%EC%9C%B5%EB%A1%9C6%EA%B8%B8%2033",
    rating: 4.2,
    reviewCount: 3769,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCteeQFQojwEyYQHUwzkoMXnvYsWm3GbUcNRLCpuo4kArT76_w3iak-YBjzAG8kxlINWLhfkXVW91Cb7Jn_Ue25KCk9f9kgk6Le-Xr0uCJa9v7MG9KbkJp5gc2Lkhv3gqhQYjYcwktXmzwihw=s4800-w800",
    youtubers: [
      {
        name: "전지적 참견 시점(이영자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "여의도의 콩국수·비빔국수 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "lyj-008",
    name: "민소한우 중앙여의도점",
    category: "육류,고기",
    address: "서울 영등포구 국제금융로2길 37",
    phone: "02-780-3365",
    lat: 37.5228671738776,
    lng: 126.924030366469,
    kakaoUrl: "http://place.map.kakao.com/12539001",
    naverUrl: "https://map.naver.com/p/search/%EB%AF%BC%EC%86%8C%ED%95%9C%EC%9A%B0%20%EC%A4%91%EC%95%99%EC%97%AC%EC%9D%98%EB%8F%84%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%98%81%EB%93%B1%ED%8F%AC%EA%B5%AC%20%EA%B5%AD%EC%A0%9C%EA%B8%88%EC%9C%B5%EB%A1%9C2%EA%B8%B8%2037",
    rating: 4,
    reviewCount: 177,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBZtTApLmPPpHDU2hXEOMot_CiSRjZxlWEIuauaw1VY87StMQ3a4JOcUjxcWeWfDu0OaF1hsLyZNe0HQpT-QmchktA_Uce96SpaUT6iMl_Uc04MKpWITk2_NWOk7-WYrR8W4klbtnZOVnvoVQ=s4800-w800",
    youtubers: [
      {
        name: "전지적 참견 시점(이영자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "여의도에서 특안심·등심을 선보이는 한우 전문점으로 소개됐다."
      }
    ]
  },
  {
    id: "lyj-009",
    name: "무탄 압구정 본점",
    category: "중식",
    address: "서울 강남구 논현로176길 22",
    phone: "02-549-9339",
    lat: 37.5272954209603,
    lng: 127.030307744874,
    kakaoUrl: "http://place.map.kakao.com/1696571508",
    naverUrl: "https://map.naver.com/p/search/%EB%AC%B4%ED%83%84%20%EC%95%95%EA%B5%AC%EC%A0%95%20%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EB%85%BC%ED%98%84%EB%A1%9C176%EA%B8%B8%2022",
    rating: 4.8,
    reviewCount: 4386,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDPD6QxP0HCiunQQH_pmhtcsJ7e462xM8UX_xgg_r_N2AA4RqBju5Or8CpfbeXV3RBssxpQnqbkOYbJjOu1P8QzxMx76QxWvAdgN00tpBdC1QaA0xmtc-ELYZ7K8OMiPjy2Yh7p47Va1L1q=s4800-w800",
    youtubers: [
      {
        name: "전지적 참견 시점(이영자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "트러플 짜장면과 고추 유린기를 선보이는 압구정의 이색 중식당으로 소개됐다."
      }
    ]
  },
  {
    id: "lyj-010",
    name: "소이연남",
    category: "태국음식",
    address: "서울 마포구 동교로 267",
    phone: "02-323-5130",
    lat: 37.5635139207821,
    lng: 126.92538808404,
    kakaoUrl: "http://place.map.kakao.com/25479306",
    naverUrl: "https://map.naver.com/p/search/%EC%86%8C%EC%9D%B4%EC%97%B0%EB%82%A8%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EB%8F%99%EA%B5%90%EB%A1%9C%20267",
    rating: 4.1,
    reviewCount: 1520,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAgimFaXR0Tt16n9VKzmlBKgMAgor2p1vZ7h0vqc70HrEygssZWivR-4HEjFH1WSf7oM0ido6r4JxEcw-d2dqAXeyvcQOk7tvywjUPVxrGNM7GHC36sqBjhE6cAldBSrvNgnw78yWghYm9d3UE=s4800-w800",
    youtubers: [
      {
        name: "전지적 참견 시점(이영자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "연남동의 소고기 쌀국수 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "lyj-011",
    name: "구삼부대찌개",
    category: "찌개,전골",
    address: "서울 강동구 강동대로53길 12",
    phone: "02-472-7729",
    lat: 37.5233623583694,
    lng: 127.131722574862,
    kakaoUrl: "http://place.map.kakao.com/27076619",
    naverUrl: "https://map.naver.com/p/search/%EA%B5%AC%EC%82%BC%EB%B6%80%EB%8C%80%EC%B0%8C%EA%B0%9C%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%8F%99%EA%B5%AC%20%EA%B0%95%EB%8F%99%EB%8C%80%EB%A1%9C53%EA%B8%B8%2012",
    rating: 4,
    reviewCount: 198,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCK2GZ5Dh4j-QAQjsf-2ymWTKjELw53fwuAtQrz4QqeQmYsqSplNhS6dRldalCIIzI0iVBo9xLSwtWUVHXNC0WAqPQY9AwXbjEyEabrF8ulQY37T5uFvs1pi68rrJsiyOYxxMUb-jfCa3nBfA=s4800-w800",
    youtubers: [
      {
        name: "전지적 참견 시점(이영자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "부대전골과 버터밥으로 유명한 강동구의 부대찌개 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "lyj-012",
    name: "남도분식 익선점",
    category: "분식",
    address: "서울 종로구 수표로28길 33",
    phone: "02-763-7778",
    lat: 37.573148901450146,
    lng: 126.99007574368089,
    kakaoUrl: "http://place.map.kakao.com/763250184",
    naverUrl: "https://map.naver.com/p/search/%EB%82%A8%EB%8F%84%EB%B6%84%EC%8B%9D%20%EC%9D%B5%EC%84%A0%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%A2%85%EB%A1%9C%EA%B5%AC%20%EC%88%98%ED%91%9C%EB%A1%9C28%EA%B8%B8%2033",
    rating: 3.9,
    reviewCount: 405,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDoQE8C5-R78Veqs7EsM2Tqe9NoHYapZY6L90IgndBQ20IWWpWRjuzDmLtWOnMEaAlHgcxcmSgeWsgsogs4Y1pX8ltgu1_AAxVAVguACI6JNzgbn3X4a0f32Aua3DBOBgRmIogqB1qcArCfzM0=s4800-w800",
    youtubers: [
      {
        name: "전지적 참견 시점(이영자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "익선동의 즉석 떡볶이·상추튀김 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "lyj-013",
    name: "도동집",
    category: "퓨전한식",
    address: "서울 용산구 후암로48길 1",
    phone: "02-772-9463",
    lat: 37.55284578740163,
    lng: 126.9768047948429,
    kakaoUrl: "http://place.map.kakao.com/27270808",
    naverUrl: "https://map.naver.com/p/search/%EB%8F%84%EB%8F%99%EC%A7%91%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%ED%9B%84%EC%95%94%EB%A1%9C48%EA%B8%B8%201",
    rating: 4.1,
    reviewCount: 728,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjA523_oZfRCKVFGMQcLsPIAYFvg2l5l7G_QQuENnu5BH1fpqxzXKd188aY5EkCOOV-CrlrVQ-fllIjNIT_QL6ogumynJwfN6dhGbLKmDm0MeEalplYs2mjUxm3UacldckP3YquSgbNuffdI=s4800-w800",
    youtubers: [
      {
        name: "전지적 참견 시점(이영자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "후암동에서 도동탕면·도동비면 등 독자적인 메뉴를 선보이는 곳으로 소개됐다."
      }
    ]
  },
  {
    id: "lyj-014",
    name: "진미식당",
    category: "게,대게",
    address: "서울 마포구 마포대로 186-6",
    phone: "02-3211-4468",
    lat: 37.550608920427024,
    lng: 126.95579734486303,
    kakaoUrl: "http://place.map.kakao.com/1386489124",
    naverUrl: "https://map.naver.com/p/search/%EC%A7%84%EB%AF%B8%EC%8B%9D%EB%8B%B9%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EB%A7%88%ED%8F%AC%EB%8C%80%EB%A1%9C%20186-6",
    rating: 4.3,
    reviewCount: 1124,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAAuU5wvrbl1HHR2Nx3XqVaCbOfgc88jea8GcGjuxOQ5LhVX3HUoHCXQQv-eQboX5tzZwCjz79DAX6Z4vnR2lUoQDCyxhPhLifbYQebcUiTf1E4JSC0_zi-eLfq7Abe6sTBU2vy9E6Dre6QujKxeENKvg=s4800-w800",
    youtubers: [
      {
        name: "전지적 참견 시점(이영자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "마포의 간장게장·달걀찜 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "lyj-015",
    name: "뉴만두집",
    category: "한식",
    address: "서울 강남구 압구정로 338",
    phone: "02-544-3710",
    lat: 37.5279236124535,
    lng: 127.038876598377,
    kakaoUrl: "http://place.map.kakao.com/13092552",
    naverUrl: "https://map.naver.com/p/search/%EB%89%B4%EB%A7%8C%EB%91%90%EC%A7%91%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%95%95%EA%B5%AC%EC%A0%95%EB%A1%9C%20338",
    rating: 4.1,
    reviewCount: 822,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBSEmPDDlIss3_5ISRtT7-uKKykX24xqth75TjR8nZe_MTLnXTbqUhpFSRD8nCYLUxWkrUCrxjk0S4g4Qtr_ikQ89t8Cfp_yyhMqmoq37cFGCWjYWgb6xlhHwG6inPiwH3Uus7f9QkJ4EEZ1Q=s4800-w800",
    youtubers: [
      {
        name: "전지적 참견 시점(이영자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "압구정의 만두국·만두 전문점으로 소개됐다."
      }
    ]
  },
  {
    id: "lyj-016",
    name: "선채 용산",
    category: "한식",
    address: "서울 용산구 한강대로52길 29-10",
    phone: "02-2039-2771",
    lat: 37.53161024306737,
    lng: 126.97310499380934,
    kakaoUrl: "http://place.map.kakao.com/2141900202",
    naverUrl: "https://map.naver.com/p/search/%EC%84%A0%EC%B1%84%20%EC%9A%A9%EC%82%B0%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%ED%95%9C%EA%B0%95%EB%8C%80%EB%A1%9C52%EA%B8%B8%2029-10",
    rating: 4.6,
    reviewCount: 20,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAHKLcDquM1-3wxMYKyrLjIBT4Ssoc-ZfBCg6LX-RM-YqvO_Cg5aGX-Y_XI8AdgNQvK11L3A0Rj7_zbAW7T1eYLkU7ox8P7aV3i7rVqS2sEkRzM9rSVxT-8FkQuosSbmBMiX2vc6qtg0_LK0_zt5Tf_eA=s4800-w800",
    youtubers: [
      {
        name: "전지적 참견 시점(이영자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "전국 팔도 재료로 만드는 요리를 선보이는 용산의 작은 한식 다이닝으로, 전복 들깨 칼비빔과 육회 묵은지말이가 대표 메뉴로 소개됐다."
      }
    ]
  },
  {
    id: "lyj-017",
    name: "반티엔야오 카오위 강남점",
    category: "중식",
    address: "서울 서초구 서초대로73길 12",
    phone: "02-6953-6668",
    lat: 37.49843286149087,
    lng: 127.02562896506164,
    kakaoUrl: "http://place.map.kakao.com/1890287094",
    naverUrl: "https://map.naver.com/p/search/%EB%B0%98%ED%8B%B0%EC%97%94%EC%95%BC%EC%98%A4%20%EC%B9%B4%EC%98%A4%EC%9C%84%20%EA%B0%95%EB%82%A8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EC%84%9C%EC%B4%88%EB%8C%80%EB%A1%9C73%EA%B8%B8%2012",
    rating: 4.4,
    reviewCount: 119,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjB1FnaTkpTMu-LNEqKcJGdll6annnViTJETzvQKXSgBeyk09Dw1khESritEfQKcO-Q083KUwdh_PWgwFELYyBe1PhJebasuEk9VYsdPZD3CsnulPgDBe4LeoCkq8CfsltPDdNdfoJ9bdybQeg=s4800-w800",
    youtubers: [
      {
        name: "전지적 참견 시점(이영자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "마라 카오위 등 중국식 구이 요리를 전문으로 하는 강남의 식당으로 소개됐다."
      }
    ]
  },
  {
    id: "lyj-018",
    name: "한성칼국수",
    category: "한식",
    address: "서울 강남구 언주로148길 14",
    phone: "02-544-0540",
    lat: 37.520450854963826,
    lng: 127.03551983007482,
    kakaoUrl: "http://place.map.kakao.com/8140834",
    naverUrl: "https://map.naver.com/p/search/%ED%95%9C%EC%84%B1%EC%B9%BC%EA%B5%AD%EC%88%98%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%96%B8%EC%A3%BC%EB%A1%9C148%EA%B8%B8%2014",
    rating: 3.9,
    reviewCount: 963,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCj2rdvPVZXFQVFq3TUn1Ny8YXoEohH98_kKvCV3jdL3aQf7lLR30XbjPezXd0a1qriA_fW3fFrZjsJoWHPiUS7Uu2KRxmM1bNEktYxpfAJHyPTu6WRjhw7ppOynUK6ET37wWq4rDGL0eJ0Nw=s4800-w800",
    youtubers: [
      {
        name: "전지적 참견 시점(이영자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "논현동의 바지락 칼국수·손만두 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "lyj-019",
    name: "마복림할머니집",
    category: "떡볶이",
    address: "서울 중구 다산로35길 5",
    phone: "02-2232-8930",
    lat: 37.56327523942241,
    lng: 127.01512154258373,
    kakaoUrl: "http://place.map.kakao.com/25036918",
    naverUrl: "https://map.naver.com/p/search/%EB%A7%88%EB%B3%B5%EB%A6%BC%ED%95%A0%EB%A8%B8%EB%8B%88%EC%A7%91%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EB%8B%A4%EC%82%B0%EB%A1%9C35%EA%B8%B8%205",
    rating: 3.6,
    reviewCount: 4658,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjA6gq3WXQWMOPz5qU3ggDbIfO8Uui9C3Fbw6Zm3EPtdtEftnO99cBFfLH3nX6PRoY436RDA1wvegc4D7ykBNgV3leGJcwz62ziTUcKNuSeOkknsHKCHWjJ5DK-OYXE52URUkx9rSYb-ElhkiSf3Bx4Wyg=s4800-w800",
    youtubers: [
      {
        name: "전지적 참견 시점(이영자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "신당동 즉석떡볶이 골목의 원조격 노포로 소개됐다."
      }
    ]
  },
  {
    id: "lyj-020",
    name: "성심당 본점",
    category: "제과,베이커리",
    address: "대전 중구 대종로480번길 15",
    phone: "042-229-5302",
    lat: 36.32774375491543,
    lng: 127.42724536162811,
    kakaoUrl: "http://place.map.kakao.com/17733090",
    naverUrl: "https://map.naver.com/p/search/%EC%84%B1%EC%8B%AC%EB%8B%B9%20%EB%B3%B8%EC%A0%90%20%EB%8C%80%EC%A0%84%20%EC%A4%91%EA%B5%AC%20%EB%8C%80%EC%A2%85%EB%A1%9C480%EB%B2%88%EA%B8%B8%2015",
    rating: 4.5,
    reviewCount: 12940,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjA84IZyWvvrp2HKfUDPsqmMfoTK8CeGthnc1kVIh3JUqd4Pj8AeKMv2K9HXLVkGX8Tg4XAY8Tl__-KBJs9BsENECghDGn7yZ09tKItIMW0o_oqwrM1pLvzIrRhgoCPWCzDdtFzv4NmXIhrwew=s4800-w800",
    youtubers: [
      {
        name: "전지적 참견 시점(이영자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "대전을 대표하는 빵집으로, 튀김소보로와 판타롱부추빵이 유명하다고 소개됐다."
      }
    ]
  },
  {
    id: "lyj-021",
    name: "원조기장손칼국수 기장시장본점",
    category: "칼국수",
    address: "부산 기장군 기장읍 읍내로104번길 16",
    phone: "0507-1369-8757",
    lat: 35.243311060601705,
    lng: 129.2149797190951,
    kakaoUrl: "http://place.map.kakao.com/23879267",
    naverUrl: "https://map.naver.com/p/search/%EC%9B%90%EC%A1%B0%EA%B8%B0%EC%9E%A5%EC%86%90%EC%B9%BC%EA%B5%AD%EC%88%98%20%EA%B8%B0%EC%9E%A5%EC%8B%9C%EC%9E%A5%EB%B3%B8%EC%A0%90%20%EB%B6%80%EC%82%B0%20%EA%B8%B0%EC%9E%A5%EA%B5%B0%20%EA%B8%B0%EC%9E%A5%EC%9D%8D%20%EC%9D%8D%EB%82%B4%EB%A1%9C104%EB%B2%88%EA%B8%B8%2016",
    rating: 4.3,
    reviewCount: 46,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDM4ppZ55KyDQXWEt7pAsAfXboRu9RzgfpoiL8zi-JG04QZO4VIuUQiGwgxM8sXFQEvraNe-OAPpAzuKJ672HnocFSS3k6OOq55B0To396llDlDdjrq4iXI-mTkCFe-MdZAsFjbI3ZQCBAADw=s4800-w800",
    youtubers: [
      {
        name: "전지적 참견 시점(이영자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "기장시장의 멸치칼국수·수제비 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "lyj-022",
    name: "삼백집 전주본점",
    category: "국밥",
    address: "전북특별자치도 전주시 완산구 전주객사2길 22",
    phone: "063-284-2227",
    lat: 35.8178522281359,
    lng: 127.141006036071,
    kakaoUrl: "http://place.map.kakao.com/8350296",
    naverUrl: "https://map.naver.com/p/search/%EC%82%BC%EB%B0%B1%EC%A7%91%20%EC%A0%84%EC%A3%BC%EB%B3%B8%EC%A0%90%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%84%EC%A3%BC%EC%8B%9C%20%EC%99%84%EC%82%B0%EA%B5%AC%20%EC%A0%84%EC%A3%BC%EA%B0%9D%EC%82%AC2%EA%B8%B8%2022",
    rating: 4,
    reviewCount: 2526,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBRHCsE0tl1aupyo84Ey_NZxRjg0wgTn7zJlyb3k9cNdTaap3o2Bvtuq0r6M_TLZPZz8FqzdDFIs7cdD77t127AtyhPBsml5tNTDEKaBzMQKkR1PxJQ0U708mDWmjvDWZx3EeH8p5gad2MQ5ko=s4800-w800",
    youtubers: [
      {
        name: "전지적 참견 시점(이영자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "전주의 콩나물국밥·수란 노포로 소개됐다."
      }
    ]
  },
  {
    id: "lyj-023",
    name: "초당할머니순두부",
    category: "두부전문점",
    address: "강원특별자치도 강릉시 초당순두부길 77",
    phone: "033-652-2058",
    lat: 37.7905546548915,
    lng: 128.915396082152,
    kakaoUrl: "http://place.map.kakao.com/8535139",
    naverUrl: "https://map.naver.com/p/search/%EC%B4%88%EB%8B%B9%ED%95%A0%EB%A8%B8%EB%8B%88%EC%88%9C%EB%91%90%EB%B6%80%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EA%B0%95%EB%A6%89%EC%8B%9C%20%EC%B4%88%EB%8B%B9%EC%88%9C%EB%91%90%EB%B6%80%EA%B8%B8%2077",
    rating: 3.5,
    reviewCount: 3201,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjB20V7uHX3fzZvpjw9McRV8mZ7Ypq8jLZMB2iKbSpL7iyDnEWt0E5GzisFL6ksRyJ_9glZ0I0iut3QI_zQBVS8CX8aFwsSeB1psrL_pou1FrSkgWYb6Hbezh5BAwVS_evykNrBB9YazT47WyD8=s4800-w800",
    youtubers: [
      {
        name: "전지적 참견 시점(이영자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "강릉 초당동의 순두부·두부전골 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "lyj-024",
    name: "서보",
    category: "태국음식",
    address: "서울 송파구 오금로18길 5",
    phone: "0507-1355-8518",
    lat: 37.51015892450543,
    lng: 127.11079080112465,
    kakaoUrl: "http://place.map.kakao.com/290687035",
    naverUrl: "https://map.naver.com/p/search/%EC%84%9C%EB%B3%B4%20%EC%84%9C%EC%9A%B8%20%EC%86%A1%ED%8C%8C%EA%B5%AC%20%EC%98%A4%EA%B8%88%EB%A1%9C18%EA%B8%B8%205",
    rating: 4.5,
    reviewCount: 116,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDHPWTgADws24ljRISVi89dT_BWZ0RUgEoVu71mwIi2L5-dxmiu5S8Zh28AS9RZ4EnLUWaCM9OhQz3PLVSwxPqirXEyUR3eNG9qz8Uf_rrGGEx7e8wN7RQmlZPpzYrqveAOZpe_MWMqMt7NPAnhxOAQ=s4800-w800",
    youtubers: [
      {
        name: "전지적 참견 시점(이영자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "족발덮밥과 새우국밥을 선보이는 잠실 인근 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "lyj-025",
    name: "와카노키친",
    category: "일본식주점",
    address: "서울 강동구 암사길 23",
    phone: null,
    lat: 37.5517419654121,
    lng: 127.131797401603,
    kakaoUrl: "http://place.map.kakao.com/1660147516",
    naverUrl: "https://map.naver.com/p/search/%EC%99%80%EC%B9%B4%EB%85%B8%ED%82%A4%EC%B9%9C%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%8F%99%EA%B5%AC%20%EC%95%94%EC%82%AC%EA%B8%B8%2023",
    rating: 4.2,
    reviewCount: 29,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAnH0SuHimrlg8FPrE-qojVYCZFkBWyoPZ5v98YEa795EXnoCUhIe33mDs7aNwoIGmbOH_AUvxgSpz5ScWlBv-WnhYhL0REjA_LbYe--zA8TY9Y5aQfsfey8jqNlvEZtTXj4JBfORMlYZoAUCU=s4800-w800",
    youtubers: [
      {
        name: "전지적 참견 시점(이영자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "우니·소고기 다다끼·차돌사시미 등 다양한 안주를 선보이는 이자카야로 소개됐다."
      }
    ]
  },
  {
    id: "lyj-026",
    name: "봉자막창 부천원종점",
    category: "곱창,막창",
    address: "경기 부천시 오정구 원종로 7",
    phone: "032-673-7333",
    lat: 37.524287905474,
    lng: 126.800886551231,
    kakaoUrl: "http://place.map.kakao.com/570286556",
    naverUrl: "https://map.naver.com/p/search/%EB%B4%89%EC%9E%90%EB%A7%89%EC%B0%BD%20%EB%B6%80%EC%B2%9C%EC%9B%90%EC%A2%85%EC%A0%90%20%EA%B2%BD%EA%B8%B0%20%EB%B6%80%EC%B2%9C%EC%8B%9C%20%EC%98%A4%EC%A0%95%EA%B5%AC%20%EC%9B%90%EC%A2%85%EB%A1%9C%207",
    rating: 4.5,
    reviewCount: 24,
    photoUrl: null,
    youtubers: [
      {
        name: "전지적 참견 시점(이영자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "부천의 막창 전문점으로 소개됐다."
      }
    ]
  },
  {
    id: "czr-001",
    name: "월래순교자관",
    category: "중국요리",
    address: "서울 구로구 디지털로19길 13",
    phone: "02-855-8488",
    lat: 37.4802731041657,
    lng: 126.889810723306,
    kakaoUrl: "http://place.map.kakao.com/1125944924",
    naverUrl: "https://map.naver.com/p/search/%EC%9B%94%EB%9E%98%EC%88%9C%EA%B5%90%EC%9E%90%EA%B4%80%20%EC%84%9C%EC%9A%B8%20%EA%B5%AC%EB%A1%9C%EA%B5%AC%20%EB%94%94%EC%A7%80%ED%84%B8%EB%A1%9C19%EA%B8%B8%2013",
    rating: 4.2,
    reviewCount: 1197,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjB8L8PW-GeQS4SHJQdLycCDX2lb3-No3bB3g49EPzFz3jlHjckceqzJSUiYU7cYU9lOgaUfn_xXEuP0x-9IMwuGJ0J6leBUidKsLa8N7rrFgB-anGBwAYojqG5dMSFfZP590MckO63JOcaM=s4800-w800",
    youtubers: [
      {
        name: "최자로드",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "가리봉동에서 군만두·소롱포로 신뢰받는 중식당으로 소개됐다."
      }
    ]
  },
  {
    id: "czr-002",
    name: "심마니약초백숙",
    category: "닭요리",
    address: "서울 성동구 성덕정13길 4",
    phone: "02-466-9368",
    lat: 37.53808482920842,
    lng: 127.05340996120808,
    kakaoUrl: "http://place.map.kakao.com/27594348",
    naverUrl: "https://map.naver.com/p/search/%EC%8B%AC%EB%A7%88%EB%8B%88%EC%95%BD%EC%B4%88%EB%B0%B1%EC%88%99%20%EC%84%9C%EC%9A%B8%20%EC%84%B1%EB%8F%99%EA%B5%AC%20%EC%84%B1%EB%8D%95%EC%A0%9513%EA%B8%B8%204",
    rating: 2.8,
    reviewCount: 4,
    photoUrl: null,
    youtubers: [
      {
        name: "최자로드",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "직접 캐온 산약초로 끓이는 백숙을 선보이는 성수동 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "czr-003",
    name: "야반",
    category: "한정식",
    address: "경기 이천시 경충대로 2849",
    phone: "031-633-9970",
    lat: 37.2902794670161,
    lng: 127.425607180687,
    kakaoUrl: "http://place.map.kakao.com/991903346",
    naverUrl: "https://map.naver.com/p/search/%EC%95%BC%EB%B0%98%20%EA%B2%BD%EA%B8%B0%20%EC%9D%B4%EC%B2%9C%EC%8B%9C%20%EA%B2%BD%EC%B6%A9%EB%8C%80%EB%A1%9C%202849",
    rating: 4.6,
    reviewCount: 50,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBtxqitwm8T6cZ4canfAkJlZhVseiGXhx9gZ3kEbYevqh3NlFteypdB-aX2wa4TdVZ214FtU5bJn8rHar0Iq7DfoI2fCe75LQaUN-sh5LQlaJosz39-2YDPUcUN1k4yx-VL0epKRPVK5AScAw=s4800-w800",
    youtubers: [
      {
        name: "최자로드",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "이천 현지에서도 인기가 많은 한정식집으로, 방송 이후 더 유명해진 곳으로 소개됐다."
      }
    ]
  },
  {
    id: "czr-004",
    name: "만선호프",
    category: "호프,요리주점",
    address: "서울 중구 충무로9길 14",
    phone: null,
    lat: 37.5671528905606,
    lng: 126.991532176337,
    kakaoUrl: "http://place.map.kakao.com/1745558364",
    naverUrl: "https://map.naver.com/p/search/%EB%A7%8C%EC%84%A0%ED%98%B8%ED%94%84%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EC%B6%A9%EB%AC%B4%EB%A1%9C9%EA%B8%B8%2014",
    rating: 3.5,
    reviewCount: 78,
    photoUrl: null,
    youtubers: [
      {
        name: "최자로드",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "을지로 노가리 골목의 대표 호프집으로 소개됐다."
      }
    ]
  },
  {
    id: "czr-005",
    name: "혜장국",
    category: "한식",
    address: "서울 서초구 사평대로56길 4",
    phone: null,
    lat: 37.503456573558,
    lng: 127.022675514232,
    kakaoUrl: "http://place.map.kakao.com/1581082162",
    naverUrl: "https://map.naver.com/p/search/%ED%98%9C%EC%9E%A5%EA%B5%AD%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EC%82%AC%ED%8F%89%EB%8C%80%EB%A1%9C56%EA%B8%B8%204",
    rating: 4.3,
    reviewCount: 463,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjC2Izeds_XMpjlDYNZ6ri8rwZm3cRtCcqNm18QChDY0uxnSrQKB2ByBd046j-3CQL3yWGbSiY4PCL3HpmE3xUuWksh9bqoSjdBUrP7T15rMOrNq_LZ7L15cJg5HYy7-o5Hhwc3nCGD2a8jvcvFlHFVK5w=s4800-w800",
    youtubers: [
      {
        name: "최자로드",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "신논현 인근에서 대구식 육개장을 선보이는 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "czr-006",
    name: "송강",
    category: "장어",
    address: "서울 서초구 명달로9길 5",
    phone: "02-598-9288",
    lat: 37.48188855125893,
    lng: 127.00448631281752,
    kakaoUrl: "http://place.map.kakao.com/11892091",
    naverUrl: "https://map.naver.com/p/search/%EC%86%A1%EA%B0%95%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EB%AA%85%EB%8B%AC%EB%A1%9C9%EA%B8%B8%205",
    rating: 4.2,
    reviewCount: 356,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjA5qBXHR81mbgJZRtkX84OCijpLOj453GsvJlmHZ2sA9tJZwxOmck1G26ysRlkcNkgM_vh74ihKNFi-zH_4o-0520A1p4MLx0R_HUjOdIamgRpEBeSxQ5Rbv0IiQc2Ap58Auc9D1Y272ElF-Lc=s4800-w800",
    youtubers: [
      {
        name: "최자로드",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "방배동에서 황복 사시미와 황복지리를 선보이는 곳으로 소개됐다."
      }
    ]
  },
  {
    id: "czr-007",
    name: "고도식 마포점",
    category: "육류,고기",
    address: "서울 마포구 마포대로1길 16",
    phone: "02-6952-8684",
    lat: 37.539701421130765,
    lng: 126.9431536656136,
    kakaoUrl: "http://place.map.kakao.com/1142993069",
    naverUrl: "https://map.naver.com/p/search/%EA%B3%A0%EB%8F%84%EC%8B%9D%20%EB%A7%88%ED%8F%AC%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EB%A7%88%ED%8F%AC%EB%8C%80%EB%A1%9C1%EA%B8%B8%2016",
    rating: 4.6,
    reviewCount: 295,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCc2Y0JypLvswAUYS8P5fLWDXLNzWP3PcTV-uhEfHlXvl89c7c5EaPhuToJ5w51Rm2CKuoAIrP2CR2WaVQ67DP0auaqunyqwPoig1iYyQQ6DYvzuFHY2Kr_ZaQU9noNWsdhPd83wkX-WllF4VJnJfuLBA=s4800-w800",
    youtubers: [
      {
        name: "최자로드",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "알등심과 발효 목살 등 다양한 부위를 선보이는 마포의 고깃집으로 소개됐다."
      }
    ]
  },
  {
    id: "czr-008",
    name: "을지로 산수갑산 을지로점",
    category: "순대",
    address: "서울 중구 을지로20길 24",
    phone: null,
    lat: 37.56537903946138,
    lng: 126.99529702271732,
    kakaoUrl: "http://place.map.kakao.com/27072121",
    naverUrl: "https://map.naver.com/p/search/%EC%9D%84%EC%A7%80%EB%A1%9C%20%EC%82%B0%EC%88%98%EA%B0%91%EC%82%B0%20%EC%9D%84%EC%A7%80%EB%A1%9C%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EC%9D%84%EC%A7%80%EB%A1%9C20%EA%B8%B8%2024",
    rating: 3.9,
    reviewCount: 1857,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCJKcn6pg6InzwxO32CSSRSD4Ei47wNt_IPRTg0VRnhDZsYL8oFOqBpe1ItEq_d3CjX-YrIsYA1ThT_28LhCJd6M7K9_Y3KXybWqJdUB3zlPR7e313f06zn2ejbG40vopQbL7CzJ0QVKiQt8IDTMXI-wg=s4800-w800",
    youtubers: [
      {
        name: "최자로드",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "을지로의 유명 순대국밥집으로, 순대정식이 대표 메뉴로 소개됐다."
      }
    ]
  },
  {
    id: "czr-009",
    name: "뫼촌",
    category: "닭요리",
    address: "서울 마포구 새창로6길 18",
    phone: "02-711-9966",
    lat: 37.54124633240712,
    lng: 126.95267988084042,
    kakaoUrl: "http://place.map.kakao.com/2121293267",
    naverUrl: "https://map.naver.com/p/search/%EB%AB%BC%EC%B4%8C%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EC%83%88%EC%B0%BD%EB%A1%9C6%EA%B8%B8%2018",
    rating: 4,
    reviewCount: 224,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBsXn5MDgU7r_XHi9blIxsK5hddqIHE3kzQPqVkf2QTWHEsw7oO7tkQLBKZIWbwofFouxM6texOQka5Qxr5VlRG0wgxscSId0b1RNnBsNhQqTpxCZlqjl0250Kd9pNCXEdGHuepnzb4yTcudLvVmLG1uA=s4800-w800",
    youtubers: [
      {
        name: "최자로드",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "공덕 인근의 닭볶음탕·감자전 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "czr-010",
    name: "중화요리팔공",
    category: "중국요리",
    address: "서울 관악구 남부순환로 1680",
    phone: "02-877-9815",
    lat: 37.48405234129973,
    lng: 126.9371129279526,
    kakaoUrl: "http://place.map.kakao.com/1518802779",
    naverUrl: "https://map.naver.com/p/search/%EC%A4%91%ED%99%94%EC%9A%94%EB%A6%AC%ED%8C%94%EA%B3%B5%20%EC%84%9C%EC%9A%B8%20%EA%B4%80%EC%95%85%EA%B5%AC%20%EB%82%A8%EB%B6%80%EC%88%9C%ED%99%98%EB%A1%9C%201680",
    rating: 4.5,
    reviewCount: 682,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAZ_MpPEo0K2wkmN-n3e2t1NUvusPKpilr7SjrvQ3AB8Z8Mn4JqPO96yeCkcA6SENFin94TyD605LaizK_futXPpu8dLzPo4tVwNlXTo_RT6U86M78XSDxUCJSyC-DF7MdhDf9eW2hMauOTRg=s4800-w800",
    youtubers: [
      {
        name: "최자로드",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "신림에서 짜장면보다 짬뽕이 유명하다고 소개된 중식당으로, 늘 웨이팅이 있는 곳이다."
      }
    ]
  },
  {
    id: "czr-011",
    name: "산동만두",
    category: "분식",
    address: "서울 용산구 후암로28길 10",
    phone: "02-3789-8285",
    lat: 37.5498618736387,
    lng: 126.977806097361,
    kakaoUrl: "http://place.map.kakao.com/78191558",
    naverUrl: "https://map.naver.com/p/search/%EC%82%B0%EB%8F%99%EB%A7%8C%EB%91%90%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%ED%9B%84%EC%95%94%EB%A1%9C28%EA%B8%B8%2010",
    rating: 4.3,
    reviewCount: 45,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDrzssGEkyxPUpiBFiptDsidJS9E-hQ1MPnWVqxvZfrRHr78OXpD8MXrKPDXpvmjv9zWRmViAIYD5BhwP1XJWW8Z_X2m_cXz2Phwwvu4k3BCChlAC5u_raC0aZne7RDJw4UnYObjzQqOtkkWZ0=s4800-w800",
    youtubers: [
      {
        name: "최자로드",
        videoTitle: "최자의 점메추 프로젝트(?) 🔥 최자세끼 🔥 | 최자로드 온더웨이 EP. 18",
        videoUrl: "https://www.youtube.com/watch?v=u4jD_Q0Rdfc",
        recommendNote: "후암동의 만두·군만두 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "czr-012",
    name: "금강산",
    category: "한식",
    address: "서울 용산구 청파로 303",
    phone: "02-713-6650",
    lat: 37.54665621823538,
    lng: 126.97008387342409,
    kakaoUrl: "http://place.map.kakao.com/13026428",
    naverUrl: "https://map.naver.com/p/search/%EA%B8%88%EA%B0%95%EC%82%B0%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%EC%B2%AD%ED%8C%8C%EB%A1%9C%20303",
    rating: 4.3,
    reviewCount: 118,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBgd4dNdw9ARh-czdusXsNUrzqU4z_DgnZMVDGqN34rpaogBGB-Wfsg5pF1QN0EWBFqd9aj3qs0cxAnHzDDvCaDttJ0Iq2b0-xza7Y55IKD6P2U6lco_X8-AE1FBC1lP5uvMrqUNNvbItHXKw=s4800-w800",
    youtubers: [
      {
        name: "최자로드",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "숙대 인근에서 묵은지 삼겹살을 선보이는 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "czr-013",
    name: "신당한우곱창",
    category: "곱창,막창",
    address: "서울 중구 다산로 236",
    phone: "02-552-7850",
    lat: 37.5639580504948,
    lng: 127.016208268417,
    kakaoUrl: "http://place.map.kakao.com/868837637",
    naverUrl: "https://map.naver.com/p/search/%EC%8B%A0%EB%8B%B9%ED%95%9C%EC%9A%B0%EA%B3%B1%EC%B0%BD%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EB%8B%A4%EC%82%B0%EB%A1%9C%20236",
    rating: 4.9,
    reviewCount: 9,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDZQ7oKLReo_SrqvdO3cu6spFScORXgrUMvMSfTRoNW70oKjLUs7fJcZA3jELyKcXJumbdMlbEq9YhqjCtUHb_5TdsEhJDRxKqsaEXdOgH4SUJrB6kev-5MtMCHP-HrUCe7vblr_nPScueACw=s4800-w800",
    youtubers: [
      {
        name: "최자로드",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "신당역 인근의 한우곱창 전문점으로 소개됐다."
      }
    ]
  },
  {
    id: "czr-014",
    name: "대머리식당",
    category: "한식",
    address: "서울 성북구 돌곶이로 162",
    phone: "02-915-9233",
    lat: 37.6158344635536,
    lng: 127.051064309237,
    kakaoUrl: "http://place.map.kakao.com/12098241",
    naverUrl: "https://map.naver.com/p/search/%EB%8C%80%EB%A8%B8%EB%A6%AC%EC%8B%9D%EB%8B%B9%20%EC%84%9C%EC%9A%B8%20%EC%84%B1%EB%B6%81%EA%B5%AC%20%EB%8F%8C%EA%B3%B6%EC%9D%B4%EB%A1%9C%20162",
    rating: 4.2,
    reviewCount: 363,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjB7OR0tJ49z2oxwaqrLBurA7XBci-_B9II9iVOFkwxrYNRtNMJW6BSVjmrnJdHAthL-6ve7DVIMwHyfxpJPKio00zChpjwp_Ej97PhzHDTH-sJuntiyOLyvKcCLfz5GTod7ewOr0KimIpa4VA=s4800-w800",
    youtubers: [
      {
        name: "최자로드",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "장위동에서 생선구이와 돌솥밥을 선보이는 노포로 소개됐다."
      }
    ]
  },
  {
    id: "czr-015",
    name: "홍지로스",
    category: "한식",
    address: "서울 종로구 삼일대로 428",
    phone: null,
    lat: 37.57308294850953,
    lng: 126.98812305173762,
    kakaoUrl: "http://place.map.kakao.com/2057838663",
    naverUrl: "https://map.naver.com/p/search/%ED%99%8D%EC%A7%80%EB%A1%9C%EC%8A%A4%20%EC%84%9C%EC%9A%B8%20%EC%A2%85%EB%A1%9C%EA%B5%AC%20%EC%82%BC%EC%9D%BC%EB%8C%80%EB%A1%9C%20428",
    rating: 4.9,
    reviewCount: 334,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjACzmW7JFT-t4d06xlok7EjY5WF-GXV0SQ9kiRVnCo4d7KTyVxktfySSUl7WnbBqEr8m3CoQzaiysf-uoadYpD2cj3lhl-iZ2IE8tXF3aHxhtAVbsGAoKa_Gmk68yQ6JEefOPamNyZ46alu5xwXhqGyHA=s4800-w800",
    youtubers: [
      {
        name: "최자로드",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "낙원상가 인근의 삼겹살·차돌박이 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "czr-016",
    name: "오죽이네",
    category: "닭요리",
    address: "서울 종로구 돈화문로11가길 25",
    phone: "02-741-8874",
    lat: 37.57375803293386,
    lng: 126.99080354567869,
    kakaoUrl: "http://place.map.kakao.com/16734831",
    naverUrl: "https://map.naver.com/p/search/%EC%98%A4%EC%A3%BD%EC%9D%B4%EB%84%A4%20%EC%84%9C%EC%9A%B8%20%EC%A2%85%EB%A1%9C%EA%B5%AC%20%EB%8F%88%ED%99%94%EB%AC%B8%EB%A1%9C11%EA%B0%80%EA%B8%B8%2025",
    rating: 4.3,
    reviewCount: 631,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBBxkEYynIRq7pw2JiN9v1GiJDxFecLSsZ4BusDh1y9Vd9KPc5JgtSovV3MfQJVI12RPSiiiD3CqS56bt1KJgTdaFcNrcvjDIiFTA5-Xfddb-pWQLItO3Swwdan-SPrHbUMBO3zvBlQ0EMYoU8=s4800-w800",
    youtubers: [
      {
        name: "최자로드",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "익선동의 닭매운탕 맛집으로, 인기가 많아 별관까지 운영한다고 소개됐다."
      }
    ]
  },
  {
    id: "czr-017",
    name: "브리즈 버거",
    category: "햄버거",
    address: "서울 서초구 방배로19길 14",
    phone: "0502-5553-7615",
    lat: 37.4852699787426,
    lng: 126.994184942873,
    kakaoUrl: "http://place.map.kakao.com/996411963",
    naverUrl: "https://map.naver.com/p/search/%EB%B8%8C%EB%A6%AC%EC%A6%88%20%EB%B2%84%EA%B1%B0%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EB%B0%A9%EB%B0%B0%EB%A1%9C19%EA%B8%B8%2014",
    rating: 4.7,
    reviewCount: 22,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDt7wwiv-bRMaKgqaizXaGDAk562vSxw2j24EsKSku1OiqI33t83GAMSW5QxAeURAFbTHZyj57FoBtfan86UPhFX8UozFfcxK9WKVoWC3PkpmKuEi2xPYjF87UwOhXvJ3wYNieAeoDZUv4YXxfsuSYKlg=s4800-w800",
    youtubers: [
      {
        name: "최자로드",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "내방역 인근의 수제버거 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "czr-018",
    name: "대화정진짜해장국",
    category: "해장국",
    address: "서울 중구 장충단로 249-20",
    phone: "0507-1348-8485",
    lat: 37.567537664098374,
    lng: 127.00776494708423,
    kakaoUrl: "http://place.map.kakao.com/8895765",
    naverUrl: "https://map.naver.com/p/search/%EB%8C%80%ED%99%94%EC%A0%95%EC%A7%84%EC%A7%9C%ED%95%B4%EC%9E%A5%EA%B5%AD%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EC%9E%A5%EC%B6%A9%EB%8B%A8%EB%A1%9C%20249-20",
    rating: 4.2,
    reviewCount: 762,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCu23Q0gsFOkRmbn7nf6YSSoFe3B7cVHcJPLLEgcHjMpJOs7HY21KRUQ26tr86ryv2fHkrvZ9SlkpdFXlT0wbFFtAoM29x7rDYMwlC4YGs3jmDDw3c_vSS5cH4VcvckYeEAQV-G3XUW11B64rGX4Bdr=s4800-w800",
    youtubers: [
      {
        name: "최자로드",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "선지가 풍성하게 들어간 해장국으로 소개됐다."
      }
    ]
  },
  {
    id: "czr-020",
    name: "카와카츠 합정점",
    category: "돈까스,우동",
    address: "서울 마포구 양화로 78-7",
    phone: "0507-1365-6317",
    lat: 37.5515073363916,
    lng: 126.917421754867,
    kakaoUrl: "http://place.map.kakao.com/1363495640",
    naverUrl: "https://map.naver.com/p/search/%EC%B9%B4%EC%99%80%EC%B9%B4%EC%B8%A0%20%ED%95%A9%EC%A0%95%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EC%96%91%ED%99%94%EB%A1%9C%2078-7",
    rating: 4.6,
    reviewCount: 171,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDC6DQJ8X9-JqZpsPVP6xy28_gzZCg63m_4B2UgEn7oaf4BSiulYkCvKJCpj0z8KNfy5AlutdTvhEocEFtBVYm_-DzLzTfO_HUJww0kIUVBLCUiS6OY67lyWsUijgeaEwVBhXUv2qZ9Cby2Fg=s4800-w800",
    youtubers: [
      {
        name: "최자로드",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "비계 손질이 뛰어난 카츠 전문점으로 소개됐다."
      }
    ]
  },
  {
    id: "czr-021",
    name: "사랑방 참숯화로구이",
    category: "육류,고기",
    address: "서울 용산구 신흥로36길 4",
    phone: "02-774-5950",
    lat: 37.54640812590351,
    lng: 126.98178921083972,
    kakaoUrl: "http://place.map.kakao.com/15413494",
    naverUrl: "https://map.naver.com/p/search/%EC%82%AC%EB%9E%91%EB%B0%A9%20%EC%B0%B8%EC%88%AF%ED%99%94%EB%A1%9C%EA%B5%AC%EC%9D%B4%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%EC%8B%A0%ED%9D%A5%EB%A1%9C36%EA%B8%B8%204",
    rating: 4.4,
    reviewCount: 161,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCfn9iy0nPT3Zo4OPD-qL-hq1ZxwbN4H7z5pVhIei_FJB5Yij077sQp_t-U4xna7vDld9G9ujOSkc0m4sWBzRay66nCEyXgMo0qbr1gsCb_HY_j53zrW7tX9VOGUCWsgSXpE7tBFg-HRp0Q_446Tr0GNw=s4800-w800",
    youtubers: [
      {
        name: "최자로드",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "후암동의 참숯 화로구이 삼겹살 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "czr-022",
    name: "신림순대곱창볶음",
    category: "순대",
    address: "서울 용산구 한강대로62길 18",
    phone: null,
    lat: 37.53413127317479,
    lng: 126.97323306940186,
    kakaoUrl: "http://place.map.kakao.com/15662545",
    naverUrl: "https://map.naver.com/p/search/%EC%8B%A0%EB%A6%BC%EC%88%9C%EB%8C%80%EA%B3%B1%EC%B0%BD%EB%B3%B6%EC%9D%8C%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%ED%95%9C%EA%B0%95%EB%8C%80%EB%A1%9C62%EA%B8%B8%2018",
    rating: 3.9,
    reviewCount: 15,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjC4PKZ4bd9fnP3JfvM79HFNL63ZK244cEQ5tkkZCOgFIXD4k_O_sTP7W0qK-2g1bGQbliMyrkgqLaWBQKg48t_Q2cL0m9ycFFhKCRByml84OfEcyfLOeAhMCO-W8MPjm1ii6tGiLFUiRLl0=s4800-w800",
    youtubers: [
      {
        name: "최자로드",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "삼각지 인근에서 순대볶음·곱창볶음을 선보이는 곳으로 소개됐다."
      }
    ]
  },
  {
    id: "czr-023",
    name: "목로",
    category: "한식",
    address: "서울 강남구 압구정로28길 18",
    phone: null,
    lat: 37.52550130032503,
    lng: 127.02755008720861,
    kakaoUrl: "http://place.map.kakao.com/7866991",
    naverUrl: "https://map.naver.com/p/search/%EB%AA%A9%EB%A1%9C%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%95%95%EA%B5%AC%EC%A0%95%EB%A1%9C28%EA%B8%B8%2018",
    rating: 4.1,
    reviewCount: 122,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBoMt4Bi5pMP3dKkXde-K1j_o8qkMX_xt6mjuej_u9xodTCz80iQem2Fy_OTWJqkD9D2LvjNasAWgzSEcuZNLvMtKt42-oK3i0c3BxXkSryJCo9USTNwwn6zWhi596n3kQ-gmfspH7G4VH8ZA=s4800-w800",
    youtubers: [
      {
        name: "최자로드",
        videoTitle: "[SUB] 조정석에게 만두의 정석을 알려주다 | (다시 쓰는) 최자로드 EP.02",
        videoUrl: "https://www.youtube.com/watch?v=jrLiUX7Fo_o",
        recommendNote: "압구정의 만두국·평양만두 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "czr-025",
    name: "신비갈비살 본점",
    category: "육류,고기",
    address: "서울 강남구 강남대로158길 15",
    phone: "02-543-5992",
    lat: 37.51912099743737,
    lng: 127.02012151373633,
    kakaoUrl: "http://place.map.kakao.com/1390828006",
    naverUrl: "https://map.naver.com/p/search/%EC%8B%A0%EB%B9%84%EA%B0%88%EB%B9%84%EC%82%B4%20%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EA%B0%95%EB%82%A8%EB%8C%80%EB%A1%9C158%EA%B8%B8%2015",
    rating: 4.5,
    reviewCount: 104,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBwQhddiMhz8biI9jH85THSzPS1qT80wKyFAog2WtUWiCGi8w4UGqCk9_S_6xvA2v1rsNkBRjEwutnep1WgVyjZ8sDWkzgvLpCsx9ASAizFwKNfvM5Bf03L9fHddQ9U7KT9g4s6Bzlen09rlMvl7IUWuA=s4800-w800",
    youtubers: [
      {
        name: "최자로드",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "짝갈비·한우갈비 전문점으로 소개됐다."
      }
    ]
  },
  {
    id: "czr-026",
    name: "미성옥",
    category: "설렁탕",
    address: "서울 중구 명동길 25-11",
    phone: "02-776-8929",
    lat: 37.5641707054203,
    lng: 126.983936564299,
    kakaoUrl: "http://place.map.kakao.com/19157171",
    naverUrl: "https://map.naver.com/p/search/%EB%AF%B8%EC%84%B1%EC%98%A5%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EB%AA%85%EB%8F%99%EA%B8%B8%2025-11",
    rating: 4.4,
    reviewCount: 1527,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDwH0FClCRaLp4t9Y3OKvKCGNjVvS_GX40GfdjARgukQr5LW4eZgN5twS5DhHPa_xR4rzu65DusflHtnxqrTfNWMXKBOD1Fw3mW_E6yR8_cHxIdt4gM3vX3_RlfbvENgHPHiGiMgQsCm7ffXbbJFHSM=s4800-w800",
    youtubers: [
      {
        name: "최자로드",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "명동의 설렁탕·수육 노포로 소개됐다."
      }
    ]
  },
  {
    id: "czr-027",
    name: "카와카츠 본점",
    category: "돈까스,우동",
    address: "서울 마포구 동교로 126",
    phone: "070-8801-2053",
    lat: 37.554741054656375,
    lng: 126.916195926392,
    kakaoUrl: "http://place.map.kakao.com/1351221007",
    naverUrl: "https://map.naver.com/p/search/%EC%B9%B4%EC%99%80%EC%B9%B4%EC%B8%A0%20%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EB%8F%99%EA%B5%90%EB%A1%9C%20126",
    rating: 4.5,
    reviewCount: 591,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAA3xjn-vvhC88atDFeLmZ_-VrlsPiML9R9NRcNE0GdnCTiiOUV5GJKuuZEOpOR17fZX6z8Y-eDjKM8qqVNoyvT-r7OZ8dX1bzRDwHfV3m_FqYR-zL-xFMP6dtbvIi4bHU1L-doI1giDRcLuYGFzG1w_w=s4800-w800",
    youtubers: [
      {
        name: "최자로드",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "홍대 인근의 카츠 전문점 본점으로 소개됐다."
      }
    ]
  },
  {
    id: "czr-028",
    name: "우촌숯불갈비",
    category: "육류,고기",
    address: "서울 성동구 장터길 44-1",
    phone: "02-2292-9072",
    lat: 37.5481466436773,
    lng: 127.02069965148,
    kakaoUrl: "http://place.map.kakao.com/9307166",
    naverUrl: "https://map.naver.com/p/search/%EC%9A%B0%EC%B4%8C%EC%88%AF%EB%B6%88%EA%B0%88%EB%B9%84%20%EC%84%9C%EC%9A%B8%20%EC%84%B1%EB%8F%99%EA%B5%AC%20%EC%9E%A5%ED%84%B0%EA%B8%B8%2044-1",
    rating: 4.6,
    reviewCount: 44,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAPQ3ZCOuSxQcSwXI7yXZ_T9KZuolIEsLuerL6kVtDey8-WBqLfPN5uprrwRWLORtpnzZNxsvs8E41oQivdXbxTMNyxXFnF3vxJ9rb0f6g7MQgBgaaZQBFE7fZrq_pPyWSH0e7uGuFPXtpJpjGuG9KDRg=s4800-w800",
    youtubers: [
      {
        name: "최자로드",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "금호동의 숯불 삼겹살 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "czr-029",
    name: "성천막국수 답십리점",
    category: "한식",
    address: "서울 동대문구 답십리로48나길 2",
    phone: "02-2244-5529",
    lat: 37.56988437438424,
    lng: 127.05780878599663,
    kakaoUrl: "http://place.map.kakao.com/9141738",
    naverUrl: "https://map.naver.com/p/search/%EC%84%B1%EC%B2%9C%EB%A7%89%EA%B5%AD%EC%88%98%20%EB%8B%B5%EC%8B%AD%EB%A6%AC%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EB%8B%B5%EC%8B%AD%EB%A6%AC%EB%A1%9C48%EB%82%98%EA%B8%B8%202",
    rating: 4.1,
    reviewCount: 951,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCFXxo1jiA-bwNcTeM0F6pRGsFdwehcSzgmqh2eWi1yR10XTOf0OrDLLbMaW6c_biNMHNajGs9F4_kjdJLR33LD6CPEUhMwtz5pOBbfgK1k6rS3Ns-MEqGitw7Mbqh-4-IFyLnJMT-BGc2yWQ=s4800-w800",
    youtubers: [
      {
        name: "최자로드",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "답십리의 막국수·제육 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "czr-030",
    name: "최가네황소곱창",
    category: "육류,고기",
    address: "서울 종로구 돈화문로4길 27",
    phone: "02-2274-6683",
    lat: 37.57012181541133,
    lng: 126.99386480069762,
    kakaoUrl: "http://place.map.kakao.com/16415346",
    naverUrl: "https://map.naver.com/p/search/%EC%B5%9C%EA%B0%80%EB%84%A4%ED%99%A9%EC%86%8C%EA%B3%B1%EC%B0%BD%20%EC%84%9C%EC%9A%B8%20%EC%A2%85%EB%A1%9C%EA%B5%AC%20%EB%8F%88%ED%99%94%EB%AC%B8%EB%A1%9C4%EA%B8%B8%2027",
    rating: 4,
    reviewCount: 177,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCu4d4eioHe1gIXhfrumtKiGpqcJGFfIk-sXPdzvZ3GFqZaXMFojCQbXMP3U_vqjxlVjspJdUu-ODa6zdnLHZcpnOUhf2a8o3hXGq34vNKKKjZrSfHdQia2bw_7tQB1fvDunjVsrqGE-6V6=s4800-w800",
    youtubers: [
      {
        name: "최자로드",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "종로3가의 소곱창 전문점으로 소개됐다."
      }
    ]
  },
  {
    id: "czr-032",
    name: "조선옥",
    category: "육류,고기",
    address: "서울 중구 을지로15길 6-5",
    phone: "02-2266-0333",
    lat: 37.5667899215171,
    lng: 126.993638692943,
    kakaoUrl: "http://place.map.kakao.com/649080277",
    naverUrl: "https://map.naver.com/p/search/%EC%A1%B0%EC%84%A0%EC%98%A5%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EC%9D%84%EC%A7%80%EB%A1%9C15%EA%B8%B8%206-5",
    rating: 3.8,
    reviewCount: 1062,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjB_GehHAPvQKYk5m6knsIvFpeL4D5rukpYaLNm3xq8REHJ-DGxFSjBElBcLGjw2L5EfHxWEJlcBTJ-tky7cYV2AnHJdnzmj7IiOIwjxB7XX4F4L--iYENkNUD4NJjTaVciw5x96Zlvxe027rlg=s4800-w800",
    youtubers: [
      {
        name: "최자로드",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "을지로3가의 양념갈비·갈비탕 노포로 소개됐다."
      },
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "을지로3가의 100년 넘은 노포로, 양념갈비와 갈비탕을 선보이는 곳으로 소개됐다."
      }
    ]
  },
  {
    id: "czr-033",
    name: "평양집",
    category: "육류,고기",
    address: "서울 용산구 한강대로 186",
    phone: "02-798-3989",
    lat: 37.5348864781984,
    lng: 126.973977275672,
    kakaoUrl: "http://place.map.kakao.com/8122347",
    naverUrl: "https://map.naver.com/p/search/%ED%8F%89%EC%96%91%EC%A7%91%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%ED%95%9C%EA%B0%95%EB%8C%80%EB%A1%9C%20186",
    rating: 3.8,
    reviewCount: 1531,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDlB3G0fEQhWZaUMrUgK00nHkEyKCIHWBPF1qrrYa8oYhBOOJunqcDszxwqmAfaf_rEzvZW_7FGN-VU002akK2AJ7h1rflS8DkH5gv8SINSh5aRR8lEJ7wDfgUVoviGZntzlKtC7S-nnRUxli7bNCzSBg=s4800-w800",
    youtubers: [
      {
        name: "최자로드",
        videoTitle: "삼각지역 평양집",
        videoUrl: "https://www.youtube.com/watch?v=0i-g2PFmPP8",
        recommendNote: "삼각지의 내장탕·내장곰탕 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "czr-034",
    name: "대물섬",
    category: "한식",
    address: "서울 용산구 독서당로 65-11",
    phone: "070-8870-6707",
    lat: 37.5340691545836,
    lng: 127.008131446965,
    kakaoUrl: "http://place.map.kakao.com/1827653054",
    naverUrl: "https://map.naver.com/p/search/%EB%8C%80%EB%AC%BC%EC%84%AC%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%EB%8F%85%EC%84%9C%EB%8B%B9%EB%A1%9C%2065-11",
    rating: 4.6,
    reviewCount: 28,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAP0m8wRTTkoBCoOZMMndcBGs5ttk0sz34FasybDrCYamg3an5yW0GXRou4oLP1STWf76cr7H6q5FdHN2mIso_yCsXM42vQQQZjT-aoza1Wqx_LE9g5YXkpF9W6WzIbPNL2h2UPvlva96DaL2Ciwju6_A=s4800-w800",
    youtubers: [
      {
        name: "최자로드",
        videoTitle: "[SUB] 세븐틴의 힙합 듀오 X 다듀의 대광어 맛 프리스타일 벌스 | (다시 쓰는) 최자로드 EP.01",
        videoUrl: "https://www.youtube.com/watch?v=lY1IigHIkV4",
        recommendNote: "한남동의 숙성회 횟집으로 소개됐다."
      }
    ]
  },
  {
    id: "czr-035",
    name: "금돼지식당",
    category: "육류,고기",
    address: "서울 중구 다산로 149",
    phone: "0507-1307-8750",
    lat: 37.55705875134064,
    lng: 127.01167974212188,
    kakaoUrl: "http://place.map.kakao.com/1065693087",
    naverUrl: "https://map.naver.com/p/search/%EA%B8%88%EB%8F%BC%EC%A7%80%EC%8B%9D%EB%8B%B9%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EB%8B%A4%EC%82%B0%EB%A1%9C%20149",
    rating: 4.3,
    reviewCount: 3024,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCW9m9XPJ-c6xyBtOUPCfPTR14ciTBqxnuHZKEey7rJtD2L_Bxj0qxlhL_LKwImr2qyVv_edHEZXGRor4n8UYy3A0m6BAA0dOri2fjnSqzm5tic_vyk697Qh6MoxCSTR3PYzk_U--z7Zuyf=s4800-w800",
    youtubers: [
      {
        name: "최자로드",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "약수역 인근의 삼겹살·꽃목살 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "czr-036",
    name: "봉구네가마솥순대국",
    category: "순대",
    address: "서울 서대문구 증가로10길 50",
    phone: "02-373-1170",
    lat: 37.57914579363387,
    lng: 126.92477247953684,
    kakaoUrl: "http://place.map.kakao.com/26546071",
    naverUrl: "https://map.naver.com/p/search/%EB%B4%89%EA%B5%AC%EB%84%A4%EA%B0%80%EB%A7%88%EC%86%A5%EC%88%9C%EB%8C%80%EA%B5%AD%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EC%A6%9D%EA%B0%80%EB%A1%9C10%EA%B8%B8%2050",
    rating: 3.6,
    reviewCount: 53,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDNyF9W0HOQH8fuTkjeEqjkJCMcDGGeQ2aFtqaYBBXqHF2wEkihc5dcaHG4QTQwr_Vo4_bRjWCtNJ0B80VSIU9cl5ey0cJvJQshhQPaWvWT9MTovp1s-kMpzmxkpIHqqy-sMm5nvfXLK9R7=s4800-w800",
    youtubers: [
      {
        name: "최자로드",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "가마솥에 끓인 순대국을 선보이는 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "czr-037",
    name: "스시702",
    category: "초밥,롤",
    address: "서울 강남구 압구정로28길 31",
    phone: null,
    lat: 37.524466905586046,
    lng: 127.02773862814922,
    kakaoUrl: "http://place.map.kakao.com/1341632439",
    naverUrl: "https://map.naver.com/p/search/%EC%8A%A4%EC%8B%9C702%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%95%95%EA%B5%AC%EC%A0%95%EB%A1%9C28%EA%B8%B8%2031",
    rating: 4.6,
    reviewCount: 48,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjA9pEoSYov_DKzDEzaB2Ypw8M8Q96Uor88W470RptZv5fUoEsSr0iGeIoQeMNSFeNnFTy1-cekpTSzCesfiaURu6ykm8mgWiXTy3A95nga1NuHCtmAYXA1x8o9yt0dogA3SKSl9JtUqfrcfsQ=s4800-w800",
    youtubers: [
      {
        name: "최자로드",
        videoTitle: "[SUB] 참치 180kg 먹기 챌린지 | 최자로드 온더웨이 EP.04",
        videoUrl: "https://www.youtube.com/watch?v=hYJVZtoY1qA",
        recommendNote: "압구정의 초밥·캘리포니아롤 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "czr-038",
    name: "닭진미",
    category: "닭요리",
    address: "서울 중구 남대문시장길 22-20",
    phone: "02-753-9063",
    lat: 37.55956187021395,
    lng: 126.97704718094006,
    kakaoUrl: "http://place.map.kakao.com/8167414",
    naverUrl: "https://map.naver.com/p/search/%EB%8B%AD%EC%A7%84%EB%AF%B8%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EB%82%A8%EB%8C%80%EB%AC%B8%EC%8B%9C%EC%9E%A5%EA%B8%B8%2022-20",
    rating: 4.2,
    reviewCount: 713,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBg8SvlshxpdUHfugWWRowrWxOVj4zvl8ODZRQStK7PmKxnuKAxdTfkK456733cyfhtuqEBf3i3TfTC4NbvrDLQ7nGAn2HEtnaZRI5ajWQfSPUGjCZ_M6KQdcr5U2Q9LBrO-8L5FiyDDmxwLPlwcLkdqQ=s4800-w800",
    youtubers: [
      {
        name: "최자로드",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "남대문시장의 닭곰탕 노포로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-002",
    name: "묵동부대찌개전문",
    category: "찌개,전골",
    address: "서울 중랑구 중랑역로 247",
    phone: "02-974-4866",
    lat: 37.615439206010024,
    lng: 127.07571032915537,
    kakaoUrl: "http://place.map.kakao.com/16064808",
    naverUrl: "https://map.naver.com/p/search/%EB%AC%B5%EB%8F%99%EB%B6%80%EB%8C%80%EC%B0%8C%EA%B0%9C%EC%A0%84%EB%AC%B8%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EB%9E%91%EA%B5%AC%20%EC%A4%91%EB%9E%91%EC%97%AD%EB%A1%9C%20247",
    rating: 4.2,
    reviewCount: 16,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAzRrVV-VG3aNXZcmyNoWGJCPzZWypBiYaSpmh8r5xMHjQnyASAteua_yrcj9uYTnKrFTvDDjZtGcZ-U1E_iqbpABKiXVHeunR0p4Gy-EcKGT5MSCdyMiDr6ojtZfsq-h9_ji9Ls2t99Gra=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "묵동에서 미나리를 넣은 맑은 부대찌개를 선보이는 곳으로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-003",
    name: "일등바우",
    category: "해물,생선",
    address: "서울 송파구 송이로20길 20",
    phone: "02-448-8312",
    lat: 37.495577673828954,
    lng: 127.11940426706997,
    kakaoUrl: "http://place.map.kakao.com/9351511",
    naverUrl: "https://map.naver.com/p/search/%EC%9D%BC%EB%93%B1%EB%B0%94%EC%9A%B0%20%EC%84%9C%EC%9A%B8%20%EC%86%A1%ED%8C%8C%EA%B5%AC%20%EC%86%A1%EC%9D%B4%EB%A1%9C20%EA%B8%B8%2020",
    rating: 3.9,
    reviewCount: 156,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAkzsw80ytvbRYevSxuUBwa6SPUFJ2howqKcg8W1Bm1i-ydo7ocYRK5EemIybmnW-QI7iv62io2zPJbH6CR84Za8B2xSgzsRe8Ivd5FXFvv592TyQht9VBFOoQ0QtV8B_ufCf0gRLf0JJE4YiU=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "가락동에서 민어회와 병어조림 등 남도 해산물 요리를 선보이는 곳으로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-004",
    name: "신명먹거리",
    category: "한식",
    address: "서울 성동구 상원6길 3",
    phone: "02-464-8075",
    lat: 37.54854390914657,
    lng: 127.04859215663367,
    kakaoUrl: "http://place.map.kakao.com/19009694",
    naverUrl: "https://map.naver.com/p/search/%EC%8B%A0%EB%AA%85%EB%A8%B9%EA%B1%B0%EB%A6%AC%20%EC%84%9C%EC%9A%B8%20%EC%84%B1%EB%8F%99%EA%B5%AC%20%EC%83%81%EC%9B%906%EA%B8%B8%203",
    rating: 4.1,
    reviewCount: 34,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAxsBocKF7nvdGiE_uBHpoOHOu6Rt33lsq73aiAqOUbvb4CaTCYu1hF4zMhKHb4DtiLftdl2y5qrzLlSvtXgauK5VHKGcqcJkAdSzjgOJsiQ90Y0PRmtIdkys1a-INhg4VwwXCrV0XY4FtnRlQxRCN6=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "성수동의 허름하지만 정성 가득한 백반집으로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-005",
    name: "어울림",
    category: "해물,생선",
    address: "서울 광진구 광장로1나길 10",
    phone: "02-453-1470",
    lat: 37.54845309615863,
    lng: 127.10199247106137,
    kakaoUrl: "http://place.map.kakao.com/1320909178",
    naverUrl: "https://map.naver.com/p/search/%EC%96%B4%EC%9A%B8%EB%A6%BC%20%EC%84%9C%EC%9A%B8%20%EA%B4%91%EC%A7%84%EA%B5%AC%20%EA%B4%91%EC%9E%A5%EB%A1%9C1%EB%82%98%EA%B8%B8%2010",
    rating: 4.1,
    reviewCount: 102,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBnsKi0xGqwWSNSoFrfpatZwRLBNWLqazfBnlaMmD9-TTDuPX5_rEkvD_oR9OJGfr-gyxEIAGSDNbUxq5tePwrKq0d7w8QpoR9znVoSaGMDpMlYq9j4-2kMkI1lO223AfKkhhD6NrZHu1eODg=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "광나루역 인근에서 새조개 등 해산물 요리를 선보이는 여수식 전문점으로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-006",
    name: "무수옥",
    category: "육류,고기",
    address: "서울 도봉구 도봉로165길 15",
    phone: "02-954-6292",
    lat: 37.67713476879158,
    lng: 127.0441642533523,
    kakaoUrl: "http://place.map.kakao.com/13091152",
    naverUrl: "https://map.naver.com/p/search/%EB%AC%B4%EC%88%98%EC%98%A5%20%EC%84%9C%EC%9A%B8%20%EB%8F%84%EB%B4%89%EA%B5%AC%20%EB%8F%84%EB%B4%89%EB%A1%9C165%EA%B8%B8%2015",
    rating: 4.1,
    reviewCount: 1112,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBPoMjzTx0jlt8eRQWY6zYXTiLNO0zQDf0Y-5vwwtso_OuiP-oQFtv3wEHsuf7qL5YMni0r6sAmjHXNguvlQn6JPxPRZ8GsP0jljzUHQgrn4ByUqiIoPfMEfeuArlG0QKB3_WfMxQejA8-5dCRAzHD1=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "도봉역 인근의 설렁탕·육회비빔밥 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-007",
    name: "오시오",
    category: "한식",
    address: "서울 성동구 행당로17길 19-1",
    phone: "02-2299-8686",
    lat: 37.5600478086458,
    lng: 127.03307581536,
    kakaoUrl: "http://place.map.kakao.com/20742403",
    naverUrl: "https://map.naver.com/p/search/%EC%98%A4%EC%8B%9C%EC%98%A4%20%EC%84%9C%EC%9A%B8%20%EC%84%B1%EB%8F%99%EA%B5%AC%20%ED%96%89%EB%8B%B9%EB%A1%9C17%EA%B8%B8%2019-1",
    rating: 2.8,
    reviewCount: 15,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDrTZWfxw467VvxSY0_I1rWaXKn7bBFB68646_aJ-44REgU6UkDYfuv8Ul0N3qbrIr7XYS2uWOWgSIlRkN2fo42L1CugTpJD12eGuDBBxHHFbMnaWsy520s1_DV_44Q47vpS7icPwDUDPiAEg=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "왕십리에서 남도식 서대찜을 선보이는 곳으로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-008",
    name: "고사리 익스프레스",
    category: "한식",
    address: "서울 중구 퇴계로85길 12-10",
    phone: "02-2039-3140",
    lat: 37.5662676217473,
    lng: 127.020008547897,
    kakaoUrl: "http://place.map.kakao.com/173951940",
    naverUrl: "https://map.naver.com/p/search/%EA%B3%A0%EC%82%AC%EB%A6%AC%20%EC%9D%B5%EC%8A%A4%ED%94%84%EB%A0%88%EC%8A%A4%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%ED%87%B4%EA%B3%84%EB%A1%9C85%EA%B8%B8%2012-10",
    rating: 4.7,
    reviewCount: 74,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjB4lYLshQj1ujUV6GOWslDQlLYRFZTGDaX2AfEV5zROV4NFhNIKgneyoYV6MkDWksipbo43ItnN6RW8_gsph72YS_cslSXomnpIbwpTuN2eRI8JlTpXU5mdLBW45OGNz5_RSJKXEMy6rKqyVA=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "신당역 중앙시장에서 고사리를 활용한 온면·파스타 등을 선보이는 비건 식당으로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-009",
    name: "금성스테이크부대찌개",
    category: "찌개,전골",
    address: "서울 강남구 언주로174길 26",
    phone: "02-547-4872",
    lat: 37.528064220310426,
    lng: 127.03586622964322,
    kakaoUrl: "http://place.map.kakao.com/10215748",
    naverUrl: "https://map.naver.com/p/search/%EA%B8%88%EC%84%B1%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%81%AC%EB%B6%80%EB%8C%80%EC%B0%8C%EA%B0%9C%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%96%B8%EC%A3%BC%EB%A1%9C174%EA%B8%B8%2026",
    rating: 3.7,
    reviewCount: 248,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBe-_VcNMYm44kS6Kyro2Fl57npNFdkbXP5XKk0vZ1vPSVsG18OnLnEmMVKg2AabOBTeZpkQBQNwEh0ZLdl2IN2GJMLJMjNy5XsZVJiNGqR3ni27XXN-ewAXVr2293mvj_HM8YmvAqZ3wApLg=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "압구정의 오래된 부대찌개 노포로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-010",
    name: "천일삼계탕",
    category: "삼계탕",
    address: "서울 중구 장충단로13길 43",
    phone: "02-2273-9405",
    lat: 37.56802786318591,
    lng: 127.00683682037156,
    kakaoUrl: "http://place.map.kakao.com/21397712",
    naverUrl: "https://map.naver.com/p/search/%EC%B2%9C%EC%9D%BC%EC%82%BC%EA%B3%84%ED%83%95%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EC%9E%A5%EC%B6%A9%EB%8B%A8%EB%A1%9C13%EA%B8%B8%2043",
    rating: 4.7,
    reviewCount: 135,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjB0Oj-yCMrWMw4FVTBE_BqSyAWeLzLxvOHMb-q1KpzTv9omZZUxM-ZpuUx50xRTczCLff1qB-0YvoNGx_HYkjIYkR4w_a97fzQwaP5sl2-xKA00H6z0WQTZGsJR2Yb8-osa-QYPkc9jriMslRc=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "동대문 인근의 삼계탕·인삼주 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-011",
    name: "일등식당",
    category: "해장국",
    address: "서울 마포구 방울내로 82",
    phone: "02-333-0361",
    lat: 37.5605470785376,
    lng: 126.904339369294,
    kakaoUrl: "http://place.map.kakao.com/16050121",
    naverUrl: "https://map.naver.com/p/search/%EC%9D%BC%EB%93%B1%EC%8B%9D%EB%8B%B9%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EB%B0%A9%EC%9A%B8%EB%82%B4%EB%A1%9C%2082",
    rating: 4.2,
    reviewCount: 921,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDXqDBtKhX5lBCHLqCSPxRLgNJCZbyfUM7ZdLMsNZChGYiL6gGJ7RH7LyASoxAeDrprEouWkzlj04J678KUr06JBZ9nKcAWSWJ1cHLgdX6DU6g7heXROIRPtmXTvpGe3Uof-h3rWGB6aEgRT9Pzg2dutg=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "망원동에서 33년간 이어온 뼈해장국 노포로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-012",
    name: "이문설농탕",
    category: "설렁탕",
    address: "서울 종로구 우정국로 38-13",
    phone: "02-733-6526",
    lat: 37.5727337640939,
    lng: 126.983907557385,
    kakaoUrl: "http://place.map.kakao.com/24725293",
    naverUrl: "https://map.naver.com/p/search/%EC%9D%B4%EB%AC%B8%EC%84%A4%EB%86%8D%ED%83%95%20%EC%84%9C%EC%9A%B8%20%EC%A2%85%EB%A1%9C%EA%B5%AC%20%EC%9A%B0%EC%A0%95%EA%B5%AD%EB%A1%9C%2038-13",
    rating: 4,
    reviewCount: 2632,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDFCRtzk4iyNVEDG5k0cXH62-g-sgtKz0Spmh22D6K2s_o9IJWF3yn50v3dnYFESaJanHL3KFqUwRnkaEKLerSc8El9ah5nnDlXN7C_F4xyu0KDJ75b2im5lu3DObOSEW8HmCCl3plp8RdHXYVxFZtDpw=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "인사동 인근에서 국내 최고령급 역사를 지닌 설렁탕 노포로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-013",
    name: "가향",
    category: "한식",
    address: "서울 종로구 삼일대로 390-10",
    phone: "02-2279-5327",
    lat: 37.5693537687393,
    lng: 126.988522088184,
    kakaoUrl: "http://place.map.kakao.com/1979164872",
    naverUrl: "https://map.naver.com/p/search/%EA%B0%80%ED%96%A5%20%EC%84%9C%EC%9A%B8%20%EC%A2%85%EB%A1%9C%EA%B5%AC%20%EC%82%BC%EC%9D%BC%EB%8C%80%EB%A1%9C%20390-10",
    rating: 5,
    reviewCount: 5,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDoI2ukmUFyXhOcKJowKy13baPK13fOInt-9XTXgKdSMYz5VypTroFLXYKvKjT6EfZEaXPTBRzkn-fraywUbb3LpeDtnPI3kf9rYVGhgPbNiOC5Spj0OxLlmH9TlJN8tHVLmWM82HWiHtSnIQU=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "종로3가에서 가오리찜 등을 선보이는 횟집으로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-014",
    name: "솔",
    category: "한식",
    address: "서울 영등포구 국제금융로8길 27-9",
    phone: "02-783-5568",
    lat: 37.5196590716325,
    lng: 126.928965618836,
    kakaoUrl: "http://place.map.kakao.com/10552768",
    naverUrl: "https://map.naver.com/p/search/%EC%86%94%20%EC%84%9C%EC%9A%B8%20%EC%98%81%EB%93%B1%ED%8F%AC%EA%B5%AC%20%EA%B5%AD%EC%A0%9C%EA%B8%88%EC%9C%B5%EB%A1%9C8%EA%B8%B8%2027-9",
    rating: 4.5,
    reviewCount: 12,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDBlS-Ua_TopYToLoWvdAyBgcF53aID8CvGRpu9__mM-tZvFfx5Ym1vMjBcJoW-q3kyiR0B-agZQxOMjDGsjd4tDdewcM6s7kxYt1ty78PKODEYHgCBVuhV5aQMcP4bRARdrD647POc3UL08Q=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "여의도의 작은 김치찌개·수제비 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-015",
    name: "뚱보돼지갈비통고기",
    category: "육류,고기",
    address: "서울 중구 퇴계로27길 14",
    phone: "02-2267-1801",
    lat: 37.561807293985616,
    lng: 126.99173311525246,
    kakaoUrl: "http://place.map.kakao.com/10365977",
    naverUrl: "https://map.naver.com/p/search/%EB%9A%B1%EB%B3%B4%EB%8F%BC%EC%A7%80%EA%B0%88%EB%B9%84%ED%86%B5%EA%B3%A0%EA%B8%B0%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%ED%87%B4%EA%B3%84%EB%A1%9C27%EA%B8%B8%2014",
    rating: 4.2,
    reviewCount: 298,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAeoUrRYFZr9YW7hnumK7-e7pwCrf0WJR_xdC_iqJU9BQ1fmPUfp9aVL-caaCN4aBe-Q6ZC12WhBTYGNjYACkjYzFNUMxRnJAoDlqriWhX8-Dbiy47ROY-MvAPuGr_-pFt_HDfRYiKD3qQnRQ=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "충무로에서 고추장불고기 쌈밥을 선보이는 돼지갈비 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-016",
    name: "동경전통육개장설곰탕",
    category: "국밥",
    address: "서울 강남구 테헤란로7길 22",
    phone: "02-566-9779",
    lat: 37.5004570371425,
    lng: 127.0309957919559,
    kakaoUrl: "http://place.map.kakao.com/541903475",
    naverUrl: "https://map.naver.com/p/search/%EB%8F%99%EA%B2%BD%EC%A0%84%ED%86%B5%EC%9C%A1%EA%B0%9C%EC%9E%A5%EC%84%A4%EA%B3%B0%ED%83%95%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%ED%85%8C%ED%97%A4%EB%9E%80%EB%A1%9C7%EA%B8%B8%2022",
    rating: 3.4,
    reviewCount: 8,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCqhOmW5rywuweT5eSySycuReKmY2cPjPhArSZIBT9Bxc2gpAJpSXHGtnNadSP2oarL9RzIxYROI_SSNyS0Su0wT2xTFEpWVt8dqc_hMOd-MB9lFkF-9fg93GJ1CrhA6j0R9mn7GH3TixYcuA=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "강남역 인근의 전통 방식 육개장·설곰탕 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-017",
    name: "경동맛집",
    category: "해물,생선",
    address: "서울 종로구 자하문로1길 7",
    phone: null,
    lat: 37.5764508458905,
    lng: 126.971997577113,
    kakaoUrl: "http://place.map.kakao.com/1620522747",
    naverUrl: "https://map.naver.com/p/search/%EA%B2%BD%EB%8F%99%EB%A7%9B%EC%A7%91%20%EC%84%9C%EC%9A%B8%20%EC%A2%85%EB%A1%9C%EA%B5%AC%20%EC%9E%90%ED%95%98%EB%AC%B8%EB%A1%9C1%EA%B8%B8%207",
    rating: 4.2,
    reviewCount: 25,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAnPZzB89yNZWc6L3NGw-YvpSvVuXxw8a9Zib4ZDDjIeEQtVDXN7h9kZYHObyU-NMfGfEw_h8Ia-ZgNjqUkdyd25op7A3Z2q7CARY24NsYqQMCFzm7KYzu0o7cCDkUF40X48jGoav2HrwqNiA=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "서촌에서 생선조림·가오리찜을 안주로 곁들일 수 있는 곳으로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-018",
    name: "토박이",
    category: "한식",
    address: "서울 서초구 반포대로39길 38",
    phone: "02-532-4837",
    lat: 37.4984635561412,
    lng: 127.001981289571,
    kakaoUrl: "http://place.map.kakao.com/10905508",
    naverUrl: "https://map.naver.com/p/search/%ED%86%A0%EB%B0%95%EC%9D%B4%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EB%B0%98%ED%8F%AC%EB%8C%80%EB%A1%9C39%EA%B8%B8%2038",
    rating: 4.1,
    reviewCount: 307,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjA4XHm0IFLYR5ZeF5m1DFv-C300h76qigrr1JuiiKrRkjA1YJwvIxL_TwqwuX_JXMW8n95yjX7c7CN3K8S1l97ClOyu33HS4ThuBg-kV-_cgnV4nem4Ui2rVS1l0R_0UYuGfV7rAT-hZ0DBtw=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "서래마을에서 집밥 스타일의 만두전골을 선보이는 곳으로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-019",
    name: "충무집",
    category: "해물,생선",
    address: "서울 중구 을지로3길 30-14",
    phone: "010-2019-4088",
    lat: 37.5673779751551,
    lng: 126.982020677003,
    kakaoUrl: "http://place.map.kakao.com/781644913",
    naverUrl: "https://map.naver.com/p/search/%EC%B6%A9%EB%AC%B4%EC%A7%91%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EC%9D%84%EC%A7%80%EB%A1%9C3%EA%B8%B8%2030-14",
    rating: 4,
    reviewCount: 690,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBYTtaTLnmVlRcTr2i2MyWTeDlMwoFdojHro2fIPi-doamUJm6-m-6r8yhAN0VmHqlwbrUhILRFIcOf0u2D9FrPbRPJb6Qh4sJe8W9OkwBBBEfrzzqwLzqlhw6mHFrOAqc52QpyQCvDPRiK1cY=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "을지로입구역 인근에서 도다리쑥국을 선보이는 횟집으로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-020",
    name: "신신식당",
    category: "한식",
    address: "서울 성북구 삼선교로23길 7",
    phone: "02-929-2913",
    lat: 37.5899303502004,
    lng: 127.014381909579,
    kakaoUrl: "http://place.map.kakao.com/1275857761",
    naverUrl: "https://map.naver.com/p/search/%EC%8B%A0%EC%8B%A0%EC%8B%9D%EB%8B%B9%20%EC%84%9C%EC%9A%B8%20%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%82%BC%EC%84%A0%EA%B5%90%EB%A1%9C23%EA%B8%B8%207",
    rating: 4.3,
    reviewCount: 102,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCHRmJIgvbQBUp82JC5Wg7bqPCawiG8mYEYdvbNxpuqIHMVC9E91z9A7TeR6rpShOKFV8yxfMu6PGQtBI4qzm1posyc_pxRFQdV3H3ot9LmtDlxT1wu8MbaEXNaZfDhgQ9pSs5nj3hk_bijp9s=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "성신여대 인근의 우렁쌈밥 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-021",
    name: "창성옥 용문본점",
    category: "해장국",
    address: "서울 용산구 새창로 124-10",
    phone: "02-718-2878",
    lat: 37.5363747672842,
    lng: 126.960412992937,
    kakaoUrl: "http://place.map.kakao.com/10469081",
    naverUrl: "https://map.naver.com/p/search/%EC%B0%BD%EC%84%B1%EC%98%A5%20%EC%9A%A9%EB%AC%B8%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%EC%83%88%EC%B0%BD%EB%A1%9C%20124-10",
    rating: 4.1,
    reviewCount: 1232,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAGJ962V-sOeZEWMNTyn5igU-9Erx7Jfu8-ePfrdBRYyu-uoWk7moaN_E5zdNDFY7FsQNTC0mKMVQVyg5vpH04JSHjXH6mQoQe0QjG2p85qIZKGbXb8zjExUY7sJBE-zgvYi97r9gSPmy587wpKja2E=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "뼈전골을 곁들인 해장국 노포로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-022",
    name: "잊지마 식당",
    category: "한식",
    address: "서울 중구 퇴계로41길 47",
    phone: "02-2265-4328",
    lat: 37.56393654999313,
    lng: 126.99543746428647,
    kakaoUrl: "http://place.map.kakao.com/16765311",
    naverUrl: "https://map.naver.com/p/search/%EC%9E%8A%EC%A7%80%EB%A7%88%20%EC%8B%9D%EB%8B%B9%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%ED%87%B4%EA%B3%84%EB%A1%9C41%EA%B8%B8%2047",
    rating: 3.9,
    reviewCount: 213,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDBW1ifzgaEGtRLS1tm1ZZZgkw094WSwLU9aJ_o90kw_x2yn2OBc1cIQJyhtalZK-1WBC22OJc1WDHn89vH3Htomq5oz8RO0dNvgOxnRydw7GTHuEShcyWqQQlmxoB-rdBkoILh1DOI4I4H-xQ=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "충무로에서 생선구이 백반을 선보이는 곳으로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-023",
    name: "버섯잔치집 본점",
    category: "샤브샤브",
    address: "서울 강동구 성내로 52",
    phone: "02-470-0092",
    lat: 37.5282884155882,
    lng: 127.125676399035,
    kakaoUrl: "http://place.map.kakao.com/8313639",
    naverUrl: "https://map.naver.com/p/search/%EB%B2%84%EC%84%AF%EC%9E%94%EC%B9%98%EC%A7%91%20%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%8F%99%EA%B5%AC%20%EC%84%B1%EB%82%B4%EB%A1%9C%2052",
    rating: 4.3,
    reviewCount: 513,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCFZOjE8EF7vubDKkLhyxEGusCTywTzHYscQj0LN-RgYrlEScCRnrWubLjtoeq84isM0ADC4618EFhq65a9CcDQwyW9uqzhc-xnWvGmmoBH4KBaPBMD855KF6OIiNUo9Tk1td325UZsQPsN_FeOpbc3uA=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "강동구청 인근에서 버섯 무한리필을 선보이는 곳으로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-024",
    name: "일미장어",
    category: "장어",
    address: "서울 용산구 후암로57길 35-15",
    phone: "02-777-4380",
    lat: 37.552157810329795,
    lng: 126.97431417197112,
    kakaoUrl: "http://place.map.kakao.com/16039548",
    naverUrl: "https://map.naver.com/p/search/%EC%9D%BC%EB%AF%B8%EC%9E%A5%EC%96%B4%20%EC%84%9C%EC%9A%B8%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%ED%9B%84%EC%95%94%EB%A1%9C57%EA%B8%B8%2035-15",
    rating: 4,
    reviewCount: 341,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjB1zlLRv9s_9UR39i-8Z6XmRhwwqjyQsHT_zm2x_otFDaORu3PAbSCiRqqIkllOOpb3cTPxRQzZmqWZ_aSwyJxa12gcjemENZnAYeKlFHgmTr5oozb1iKKEHiwuAN68VmiOBr5lkUSeBWaAYAqk4Fw9qA=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "서울역 인근의 장어구이 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-025",
    name: "민정식당 본점",
    category: "한식",
    address: "서울 광진구 아차산로42길 41-4",
    phone: "02-452-3574",
    lat: 37.5355872979807,
    lng: 127.079041930436,
    kakaoUrl: "http://place.map.kakao.com/16085841",
    naverUrl: "https://map.naver.com/p/search/%EB%AF%BC%EC%A0%95%EC%8B%9D%EB%8B%B9%20%EB%B3%B8%EC%A0%90%20%EC%84%9C%EC%9A%B8%20%EA%B4%91%EC%A7%84%EA%B5%AC%20%EC%95%84%EC%B0%A8%EC%82%B0%EB%A1%9C42%EA%B8%B8%2041-4",
    rating: 4.5,
    reviewCount: 273,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBTo7JlH3rzFXS2LKQsfptY98eVm6XMX-adcZHT4ppaSY2EixAlcPocKW4HST6iZ0lgggPMEvgeD6FZlEOJduxKND4uikgfQSS1OFOtvp1bCAuXtgFWybvYnNFdv6jyMJQUrgrfD5pHrovR=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "설렁탕과 수육전골을 함께 선보이는 곳으로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-027",
    name: "해남닭집",
    category: "치킨",
    address: "서울 광진구 능동로13길 46",
    phone: "02-466-4656",
    lat: 37.5439831154697,
    lng: 127.069998313511,
    kakaoUrl: "http://place.map.kakao.com/11499383",
    naverUrl: "https://map.naver.com/p/search/%ED%95%B4%EB%82%A8%EB%8B%AD%EC%A7%91%20%EC%84%9C%EC%9A%B8%20%EA%B4%91%EC%A7%84%EA%B5%AC%20%EB%8A%A5%EB%8F%99%EB%A1%9C13%EA%B8%B8%2046",
    rating: 4.1,
    reviewCount: 109,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDTuVyRP7R173BOQtMHkZTXFO3M6IyJ9-4vcvZdqSRAUlHUDej-xTv_Cgnxgo9v_nudIZOpMqMBN-83tnELOEHkytyTVPaj6jTKTFOlhouekF8cQsWF2fOOelg7hdWZBr4uKC61cz99GHMPgQ=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "건대 인근에서 옛날통닭을 선보이는 노포로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-028",
    name: "돈불리제담",
    category: "한식",
    address: "서울 강남구 압구정로2길 46",
    phone: "02-546-2995",
    lat: 37.51877490915872,
    lng: 127.02071755239015,
    kakaoUrl: "http://place.map.kakao.com/267115983",
    naverUrl: "https://map.naver.com/p/search/%EB%8F%88%EB%B6%88%EB%A6%AC%EC%A0%9C%EB%8B%B4%20%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%95%95%EA%B5%AC%EC%A0%95%EB%A1%9C2%EA%B8%B8%2046",
    rating: 4.3,
    reviewCount: 90,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCYT2ag1j0nK9pBK1PEoaGii9sjcnc-kFMUMimh19zUxQMUlDiR-HKiCdZ6i2hjn46MaVnZ1sDlRULtKaHUvY40Bw0ZIut1GeiBVV0UBpYQcFGnl7TNLm4LRxjnrN0Zjn6pNqj0cmTcCwANKOI=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "신사동에서 제주식 고기국수와 돔베고기를 선보이는 곳으로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-029",
    name: "서울복집",
    category: "복어",
    address: "서울 중구 명동길 25-6",
    phone: "02-3789-9389",
    lat: 37.563986878949244,
    lng: 126.98376682435733,
    kakaoUrl: "http://place.map.kakao.com/1348519662",
    naverUrl: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%EB%B3%B5%EC%A7%91%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EB%AA%85%EB%8F%99%EA%B8%B8%2025-6",
    rating: 4.1,
    reviewCount: 84,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBPvLZRKQL7ZCePhkLRG-xLjXlYOjWjagvbunNaNXHcTdR14ICtMBRnjMZ2M1Fp99AEVikS0GBq71E3LLOkYHpSDhxmrZZnUPDqlJRS6qGaJgUIoVDYcVSQVSCB9CJ3SaAoSxKd1Y4k1uJIiw=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "명동에서 참복 요리를 선보이는 복어 전문점으로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-030",
    name: "오복꼬리곰탕",
    category: "곰탕",
    address: "서울 서초구 강남대로97길 16",
    phone: "02-542-4610",
    lat: 37.514812614135614,
    lng: 127.01881391373699,
    kakaoUrl: "http://place.map.kakao.com/171777481",
    naverUrl: "https://map.naver.com/p/search/%EC%98%A4%EB%B3%B5%EA%BC%AC%EB%A6%AC%EA%B3%B0%ED%83%95%20%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EA%B0%95%EB%82%A8%EB%8C%80%EB%A1%9C97%EA%B8%B8%2016",
    rating: 3.9,
    reviewCount: 53,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBxGgIW-VOYCpH1jSmcmO5LLnKmaJkukl794QMrByV0j_sKMW1--vyenLdxrPP6RkVv2by1n_9ELFCGxlIw12TltMaRP9ffaArs5vgm6B4XHgPumQ0bX0bBoxbPa09tTJ9d0_gYehJIT8YuKsM5aJL70w=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "신사역 인근의 꼬리곰탕 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-031",
    name: "다락정",
    category: "한식",
    address: "서울 종로구 삼청로 131-1",
    phone: "02-725-1697",
    lat: 37.58724572376609,
    lng: 126.98152565031037,
    kakaoUrl: "http://place.map.kakao.com/25732519",
    naverUrl: "https://map.naver.com/p/search/%EB%8B%A4%EB%9D%BD%EC%A0%95%20%EC%84%9C%EC%9A%B8%20%EC%A2%85%EB%A1%9C%EA%B5%AC%20%EC%82%BC%EC%B2%AD%EB%A1%9C%20131-1",
    rating: 4,
    reviewCount: 222,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjB2TqmOTPAyeB4WQBjdrVz3GkM7nn8GkoadsC1OlgOCsV3kkP-Qp6HTqLJja1JeML1v2QQr9fvt21YPGtU-3y4yh4jXZN5ilmNl0bBEWvgLAP3zmQXBqScUc5EovtiVl4AnlvXWNBY0eK7unuA=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "삼청동에서 만두국·만두전골을 선보이는 곳으로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-032",
    name: "동대문곱창",
    category: "곱창,막창",
    address: "서울 광진구 아차산로49길 9",
    phone: "02-455-9194",
    lat: 37.53730622503729,
    lng: 127.08450869204134,
    kakaoUrl: "http://place.map.kakao.com/16793832",
    naverUrl: "https://map.naver.com/p/search/%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B3%B1%EC%B0%BD%20%EC%84%9C%EC%9A%B8%20%EA%B4%91%EC%A7%84%EA%B5%AC%20%EC%95%84%EC%B0%A8%EC%82%B0%EB%A1%9C49%EA%B8%B8%209",
    rating: 4.6,
    reviewCount: 5,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDf5kdImIwvniaSwAxNMTWQRJQgGz_zFkPBxtF3HANAb8q2cx9gDxu9uLZriQpJh4ad9RVsAEZz9yM1L4GWkNdMRCXOQ07pjUezRChOoN1rHRf3D63djbClgu89NfjtydbOoNmnJFtdORtGOUQ=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "건대 인근의 곱창·닭볶음탕 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-033",
    name: "홍연옥콩나물국밥맛있는집",
    category: "국밥",
    address: "서울 중구 퇴계로 431",
    phone: "02-2252-5489",
    lat: 37.565813598827,
    lng: 127.019536428171,
    kakaoUrl: "http://place.map.kakao.com/1452642112",
    naverUrl: "https://map.naver.com/p/search/%ED%99%8D%EC%97%B0%EC%98%A5%EC%BD%A9%EB%82%98%EB%AC%BC%EA%B5%AD%EB%B0%A5%EB%A7%9B%EC%9E%88%EB%8A%94%EC%A7%91%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%ED%87%B4%EA%B3%84%EB%A1%9C%20431",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCmQAJftHiLKr0KS08ofuNWNzPwwyDdgB0wcGhY5U3HKyNWxCaUC6HTyfOtF50mRiGivc3m4XDGHOlkpYeXFSc0QZFyxhSwVQvmLcx2nyVeoH8tKg6Cp1Uj-HbeVhgpkvm31xja83mB8ptyVA=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "신당역 인근의 콩나물국밥 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-034",
    name: "유원설렁탕",
    category: "설렁탕",
    address: "서울 송파구 삼전로 90",
    phone: "02-414-2256",
    lat: 37.5063922787565,
    lng: 127.09012766229003,
    kakaoUrl: "http://place.map.kakao.com/13141184",
    naverUrl: "https://map.naver.com/p/search/%EC%9C%A0%EC%9B%90%EC%84%A4%EB%A0%81%ED%83%95%20%EC%84%9C%EC%9A%B8%20%EC%86%A1%ED%8C%8C%EA%B5%AC%20%EC%82%BC%EC%A0%84%EB%A1%9C%2090",
    rating: 3.9,
    reviewCount: 151,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjA5qUxaLdxLoih2--B148CuC4ajelRidPEnW1mxWe9y-MH9Jonpt_0NgfOR0_AZyK-OxgV1vtR9eM7zPyfTeV3mt8eKBqoKkiShG4xZblxQVQhcy2FNsfHXnT0OFN8aS_nsuEPE5Bxk-G__0-5IS8ja=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "잠실 인근에서 도가니탕을 함께 선보이는 설렁탕집으로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-035",
    name: "주유소식당",
    category: "한식",
    address: "서울 중구 창경궁로5길 11",
    phone: "02-2275-4935",
    lat: 37.5671090155253,
    lng: 126.997342275322,
    kakaoUrl: "http://place.map.kakao.com/9464519",
    naverUrl: "https://map.naver.com/p/search/%EC%A3%BC%EC%9C%A0%EC%86%8C%EC%8B%9D%EB%8B%B9%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EC%B0%BD%EA%B2%BD%EA%B6%81%EB%A1%9C5%EA%B8%B8%2011",
    rating: 4.4,
    reviewCount: 11,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD3WTSM8DOYKYVjcJOUFMrvAyV_HmCdeOVOwvUUwdrVG45KXZ7B8hMMvTL9mFtWVMQlXwOA6VDhGaOfDJIcn-KZxzcZj6A6_e-Wd4BAjeIo4jmPjOP1alBDfdHDn6mqoTuirA5pnmn0Bm3sLHU=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "을지로4가 인근에서 낙지볶음·제육볶음을 선보이는 곳으로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-036",
    name: "춘천막국수",
    category: "국수",
    address: "서울 중구 다산로10길 6",
    phone: "02-2232-2969",
    lat: 37.553462727154525,
    lng: 127.01030699031857,
    kakaoUrl: "http://place.map.kakao.com/9974647",
    naverUrl: "https://map.naver.com/p/search/%EC%B6%98%EC%B2%9C%EB%A7%89%EA%B5%AD%EC%88%98%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EB%8B%A4%EC%82%B0%EB%A1%9C10%EA%B8%B8%206",
    rating: 4.8,
    reviewCount: 5,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAEjgvxl2RPADJeGQM8Lh_UyTvjx1FYmqCgycL6d0FwKpf2YB-0m6z4tbkIdhQXkyc4jrXnr16_ByKdQdjRw_5acWRq1YjTUFpYrpOKNP0CfcCS2RqQzAvcHuaM7UYWJ0tHp6SII3g9U0tR0zg=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "약수역 인근에서 이북식 찜닭과 막국수를 함께 선보이는 곳으로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-037",
    name: "목포낙지마을",
    category: "해물,생선",
    address: "서울 마포구 월드컵로32길 11",
    phone: "02-333-1032",
    lat: 37.562512961527226,
    lng: 126.90534419340985,
    kakaoUrl: "http://place.map.kakao.com/8997552",
    naverUrl: "https://map.naver.com/p/search/%EB%AA%A9%ED%8F%AC%EB%82%99%EC%A7%80%EB%A7%88%EC%9D%84%20%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EC%9B%94%EB%93%9C%EC%BB%B5%EB%A1%9C32%EA%B8%B8%2011",
    rating: 4.3,
    reviewCount: 122,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDF2P9fXXrRV94DhflcLR9Z1KrsoNAPmBmXrr7UguGlDpe2Vo3rwbIJ0f8lqh8xJIlftdKGJNJm8MxHMe3UckcxucPs6u75aAsEvzgu-YWXVgdL2ofyy7O_kowLqReK9Jl0lmxJ0_y7YZEc2WQR0i-V=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "마포구청역 인근에서 민어회를 선보이는 목포식 해산물 전문점으로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-038",
    name: "신복촌",
    category: "해물,생선",
    address: "서울 영등포구 국제금융로8길 19",
    phone: "02-706-2500",
    lat: 37.52080894475147,
    lng: 126.92928805480548,
    kakaoUrl: "http://place.map.kakao.com/12725316",
    naverUrl: "https://map.naver.com/p/search/%EC%8B%A0%EB%B3%B5%EC%B4%8C%20%EC%84%9C%EC%9A%B8%20%EC%98%81%EB%93%B1%ED%8F%AC%EA%B5%AC%20%EA%B5%AD%EC%A0%9C%EA%B8%88%EC%9C%B5%EB%A1%9C8%EA%B8%B8%2019",
    rating: 4.2,
    reviewCount: 320,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCaVE2dG61wAcatSn6jbyVmS84qji-9lsbCGCkofrYnBw8rFdWs4BosLmxcpSINN_E5SkU4o7TISTV_p94UbS8cS2Zl2U_En1ivfcpq4O3a-5Uah0yGDDjwpL86QO0AkkahNGO9k7g9b06b=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "여의도의 자연산 우럭 전문 횟집으로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-039",
    name: "사랑방칼국수",
    category: "칼국수",
    address: "서울 중구 퇴계로27길 46",
    phone: "02-2272-2020",
    lat: 37.563266879496595,
    lng: 126.99133001470943,
    kakaoUrl: "http://place.map.kakao.com/7919722",
    naverUrl: "https://map.naver.com/p/search/%EC%82%AC%EB%9E%91%EB%B0%A9%EC%B9%BC%EA%B5%AD%EC%88%98%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%ED%87%B4%EA%B3%84%EB%A1%9C27%EA%B8%B8%2046",
    rating: 4.4,
    reviewCount: 1277,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCGskGPyIVycCjoHJsjkhxNC8JZStpC2f3kzxqsnoa-4pJsLfw1zb3UUXNUJNcwH5yITw120UcKDFZbt3xmepvxzP7V1AkneAsvlZ9gUfLhZt_gmc6biKCocEXiULaxTNsH7AerLbmRYvDGddjrK4wt=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "충무로에서 백숙과 칼국수를 함께 선보이는 곳으로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-040",
    name: "황평집",
    category: "닭요리",
    address: "서울 중구 마른내로 74",
    phone: "02-2266-6875",
    lat: 37.5640672191679,
    lng: 126.996129025206,
    kakaoUrl: "http://place.map.kakao.com/12751485",
    naverUrl: "https://map.naver.com/p/search/%ED%99%A9%ED%8F%89%EC%A7%91%20%EC%84%9C%EC%9A%B8%20%EC%A4%91%EA%B5%AC%20%EB%A7%88%EB%A5%B8%EB%82%B4%EB%A1%9C%2074",
    rating: 4.2,
    reviewCount: 1138,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDvL7Pj5c8_QIcrRtIYKwjqkmitBcCz1CyY-A370wT4Rph81-o0bwm5T3aESicdbLpVFm7j2lQmbZar8a-Y9kauDfwBREiwtbje2Gco-DSgrv27BfzkLJSJdNvSIAUfastcZKP7lynpv4zq0AM=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "충무로 인근의 닭곰탕·닭무침 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-041",
    name: "김경자원조손칼국수보쌈",
    category: "칼국수",
    address: "서울 성동구 금호산2길 20-1",
    phone: null,
    lat: 37.5487924548573,
    lng: 127.021837121177,
    kakaoUrl: "http://place.map.kakao.com/323486428",
    naverUrl: "https://map.naver.com/p/search/%EA%B9%80%EA%B2%BD%EC%9E%90%EC%9B%90%EC%A1%B0%EC%86%90%EC%B9%BC%EA%B5%AD%EC%88%98%EB%B3%B4%EC%8C%88%20%EC%84%9C%EC%9A%B8%20%EC%84%B1%EB%8F%99%EA%B5%AC%20%EA%B8%88%ED%98%B8%EC%82%B02%EA%B8%B8%2020-1",
    rating: 4.2,
    reviewCount: 269,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCKBQAPsgy-6nkB-D7n5VYKtEk-Ln0gKF0PNIBXZ3BJOsXMuZ-IMJYqzP3eMTUA2LCEK5-9P__KHd9vnyFP80LbEqvnp-B2TITMTf7l32HGD_nWH5QLdP4gAXpIe2fM3aJbdMj9iQIYEgGXnL4=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "금남시장 인근에서 손칼국수와 보쌈을 함께 선보이는 곳으로 소개됐다."
      }
    ]
  },
  {
    id: "hyb-042",
    name: "광주식당",
    category: "해물,생선",
    address: "서울 종로구 지봉로2길 15",
    phone: "02-2236-5247",
    lat: 37.57084146864495,
    lng: 127.01753642468066,
    kakaoUrl: "http://place.map.kakao.com/1407123477",
    naverUrl: "https://map.naver.com/p/search/%EA%B4%91%EC%A3%BC%EC%8B%9D%EB%8B%B9%20%EC%84%9C%EC%9A%B8%20%EC%A2%85%EB%A1%9C%EA%B5%AC%20%EC%A7%80%EB%B4%89%EB%A1%9C2%EA%B8%B8%2015",
    rating: 4.1,
    reviewCount: 262,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD3t-reLKIlj3QpuW61GNqgNUWp1CUxPQiSCzAYES8onSQEryGkAkRnWdJHcqbetVcJjUi-ibVppv0E-CgH7mEovzbdWghXsXfpfiIkr3SQO5DZXxAZlUjmLW_9gGBAhcF9sO7PcIcGTlgY-GQ=s4800-w800",
    youtubers: [
      {
        name: "식객 허영만의 백반기행",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "동묘 인근의 동태탕 맛집으로 소개됐다."
      }
    ]
  },
  {
    id: "bng-001",
    name: "함흥냉면옥",
    category: "냉면",
    address: "강원특별자치도 속초시 청초호반로 299",
    phone: "033-633-2256",
    lat: 38.20197170493448,
    lng: 128.58985417360296,
    kakaoUrl: "http://place.map.kakao.com/19125965",
    naverUrl: "https://map.naver.com/p/search/%ED%95%A8%ED%9D%A5%EB%83%89%EB%A9%B4%EC%98%A5%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%86%8D%EC%B4%88%EC%8B%9C%20%EC%B2%AD%EC%B4%88%ED%98%B8%EB%B0%98%EB%A1%9C%20299",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAn93D4LpbJ1QUOM1dzn0VkyQQdxTcOeyt-zXSJVmalY76vKDTCLuWze2U5A050nVN3fMDAK1WFqHyzwi-7-b21kFUm1nnqhvOySzE-jaqJLOwDBEzHIY8uX2tw_GPHC39gLPh130MF4Rj5BQ=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-002",
    name: "원주복추어탕",
    category: "추어",
    address: "강원특별자치도 원주시 치악로 1748",
    phone: "033-763-7987",
    lat: 37.33857277212638,
    lng: 127.95642970296068,
    kakaoUrl: "http://place.map.kakao.com/8034498",
    naverUrl: "https://map.naver.com/p/search/%EC%9B%90%EC%A3%BC%EB%B3%B5%EC%B6%94%EC%96%B4%ED%83%95%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%9B%90%EC%A3%BC%EC%8B%9C%20%EC%B9%98%EC%95%85%EB%A1%9C%201748",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDu2iE3gJxlsSjP-6bTjDUWzdGBrIYI2wMERmvYBW4QrrR4tjX7aoJKktOybYLeLv5FPLzDaKEPF10B5NGuOKa7BaTNsEuRSQ40LXxxfuRADfIjdoQmgNCimI6JG1AWKPCI4cgI8BgtgokZ2pU=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-003",
    name: "춘천명물닭갈비",
    category: "닭요리",
    address: "강원특별자치도 춘천시 옛경춘로 813",
    phone: "033-255-2069",
    lat: 37.87002083825877,
    lng: 127.70738430643054,
    kakaoUrl: "http://place.map.kakao.com/8556470",
    naverUrl: "https://map.naver.com/p/search/%EC%B6%98%EC%B2%9C%EB%AA%85%EB%AC%BC%EB%8B%AD%EA%B0%88%EB%B9%84%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%B6%98%EC%B2%9C%EC%8B%9C%20%EC%98%9B%EA%B2%BD%EC%B6%98%EB%A1%9C%20813",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAPnA1ZZR97B4kU8rmesyJ262bzNmntEAtsmqqtSTfKD4cYB2vbUad8KedOpSPYB0lwzbI0tJEkzP9t1hfcZw5wSja26RqPwLg7iTly6v-dKcpk9lqD_-hCmeq4-okvqL3MDvIgS9NE8fjW1tk29STKOg=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-004",
    name: "강촌막국수",
    category: "국수",
    address: "강원특별자치도 춘천시 남산면 강촌로 62-1",
    phone: "033-262-9868",
    lat: 37.8132431048481,
    lng: 127.633591300979,
    kakaoUrl: "http://place.map.kakao.com/1780968404",
    naverUrl: "https://map.naver.com/p/search/%EA%B0%95%EC%B4%8C%EB%A7%89%EA%B5%AD%EC%88%98%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%B6%98%EC%B2%9C%EC%8B%9C%20%EB%82%A8%EC%82%B0%EB%A9%B4%20%EA%B0%95%EC%B4%8C%EB%A1%9C%2062-1",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBysITNSsRkYjnUYf8q-sMvNIf_fs1ZTgIUwhfPujUC_DUF84g-Wz41hWxV99n48skqP8XwHiOVDA9zFNhOWJReJ-FUfhzf7ebC1ZzkXVrWUgHsKZxf6fUjipvnFAyxCetlT9XFGsnOHDQZdgNrrold=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-005",
    name: "경복궁식당",
    category: "한정식",
    address: "경북 김천시 대항면 황학동길 11-8",
    phone: "054-436-1516",
    lat: 36.1148169008901,
    lng: 128.016421920741,
    kakaoUrl: "http://place.map.kakao.com/11279060",
    naverUrl: "https://map.naver.com/p/search/%EA%B2%BD%EB%B3%B5%EA%B6%81%EC%8B%9D%EB%8B%B9%20%EA%B2%BD%EB%B6%81%20%EA%B9%80%EC%B2%9C%EC%8B%9C%20%EB%8C%80%ED%95%AD%EB%A9%B4%20%ED%99%A9%ED%95%99%EB%8F%99%EA%B8%B8%2011-8",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAkHVlL7P2wfipMjThVal1ipMYrtpiJ0WIeIasBhnI02bCOluTmpdPsgJGITaAnhjuF9ICYDYET8dBF3NuS33KGAZueYBu3HfLl1N1zUlSFjFDVpyPMs_itm6nUBLXF2phetL7JLpFMS-5jmA=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-006",
    name: "축산본점식육식당",
    category: "육류,고기",
    address: "경북 영주시 번영로173번길 10",
    phone: "054-631-1437",
    lat: 36.8268057812276,
    lng: 128.624053022266,
    kakaoUrl: "http://place.map.kakao.com/18523672",
    naverUrl: "https://map.naver.com/p/search/%EC%B6%95%EC%82%B0%EB%B3%B8%EC%A0%90%EC%8B%9D%EC%9C%A1%EC%8B%9D%EB%8B%B9%20%EA%B2%BD%EB%B6%81%20%EC%98%81%EC%A3%BC%EC%8B%9C%20%EB%B2%88%EC%98%81%EB%A1%9C173%EB%B2%88%EA%B8%B8%2010",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAdvWevPdfp2q9d9dflKoZsbOmFckHlFV5Aa9c3lKALQkMI-LgxQcGfFzb1sNNfkf0oXoP6tpumec1-QjE7H1TEgrDmSL81hvt6J1S4ojKYZP0-swRVlXKd-tc59yF0XQVT28UqTyR-l8K5VQ=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증) · 한국관광공사 등록 음식점",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-007",
    name: "풍기삼계탕",
    category: "삼계탕",
    address: "경북 영주시 중앙로 130",
    phone: "054-631-4900",
    lat: 36.826717742581096,
    lng: 128.62653817548488,
    kakaoUrl: "http://place.map.kakao.com/8120413",
    naverUrl: "https://map.naver.com/p/search/%ED%92%8D%EA%B8%B0%EC%82%BC%EA%B3%84%ED%83%95%20%EA%B2%BD%EB%B6%81%20%EC%98%81%EC%A3%BC%EC%8B%9C%20%EC%A4%91%EC%95%99%EB%A1%9C%20130",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjC7aB6D09yzL4nkGlhycEKJMHRN8uK3N6LbdwDabjDuuIN6r4DjTCmRfD6oRam4LKy0DcKgl3BL6S-J0Hy4ii8vWMsGH6NGbydPPQbv5dTuRZ74zriZYsffXhVa9YALrLv4Cqa5HWmnDRCB8g=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-008",
    name: "안동회관",
    category: "불고기,두루치기",
    address: "경북 안동시 태사길 71",
    phone: "054-857-9555",
    lat: 36.5665426329665,
    lng: 128.735093804991,
    kakaoUrl: "http://place.map.kakao.com/1050762246",
    naverUrl: "https://map.naver.com/p/search/%EC%95%88%EB%8F%99%ED%9A%8C%EA%B4%80%20%EA%B2%BD%EB%B6%81%20%EC%95%88%EB%8F%99%EC%8B%9C%20%ED%83%9C%EC%82%AC%EA%B8%B8%2071",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAA1Vk5bQ7FNCCIdWKyGavM9I5AFwVN4NkYHVkI7VoQZPAydrVUUVp6FNeU1XaKxEi4r45xdDUHrsJrum_NQ2KITcfOueCh9JDNXwJfU1-9TpJZe5kKE2G0DmGuaNXBLKGXpHNL1Y16WnIUr6c=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-009",
    name: "포항 금산삼계탕",
    category: "삼계탕",
    address: "경북 포항시 북구 중흥로 145",
    phone: "054-283-2355",
    lat: 36.0176535109731,
    lng: 129.353345851859,
    kakaoUrl: "http://place.map.kakao.com/9674900",
    naverUrl: "https://map.naver.com/p/search/%ED%8F%AC%ED%95%AD%20%EA%B8%88%EC%82%B0%EC%82%BC%EA%B3%84%ED%83%95%20%EA%B2%BD%EB%B6%81%20%ED%8F%AC%ED%95%AD%EC%8B%9C%20%EB%B6%81%EA%B5%AC%20%EC%A4%91%ED%9D%A5%EB%A1%9C%20145",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAgTboToAtD89Bm1_6HKtO9HRDsWEnkrt7T5_m1cMdOmmAn9_CFIdLwYBmyWKG-QdJO9EYObVoxIPBMOfRnnr4JH4No_r9vG6DlbJrH9oxxM8bGoviDCDVLdcB0rwn8uGv8wvFg3J9jhxQ09O8=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-010",
    name: "형제돌구이",
    category: "육류,고기",
    address: "대전 유성구 계룡로52번길 14",
    phone: "042-822-1351",
    lat: 36.354433983842114,
    lng: 127.33639093388268,
    kakaoUrl: "http://place.map.kakao.com/8690684",
    naverUrl: "https://map.naver.com/p/search/%ED%98%95%EC%A0%9C%EB%8F%8C%EA%B5%AC%EC%9D%B4%20%EB%8C%80%EC%A0%84%20%EC%9C%A0%EC%84%B1%EA%B5%AC%20%EA%B3%84%EB%A3%A1%EB%A1%9C52%EB%B2%88%EA%B8%B8%2014",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBPcrEZg3AP4yCCDWKabrwSC1YipAw05h_aPUAPoB0auX9XAf8RWgUOLccm-mNR6B-WG2HLyReaDm9R8o3nwzxylNkwt1RziWFxl2Rit-42c80a1qS4bmuVqXSFovRZEXATLLcBBwGN8yEHAYtOTMDWUA=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-011",
    name: "사리원면옥",
    category: "갈비",
    address: "대전 서구 둔산로31번길 77",
    phone: "042-487-4209",
    lat: 36.3552706779717,
    lng: 127.377295592005,
    kakaoUrl: "http://place.map.kakao.com/17968768",
    naverUrl: "https://map.naver.com/p/search/%EC%82%AC%EB%A6%AC%EC%9B%90%EB%A9%B4%EC%98%A5%20%EB%8C%80%EC%A0%84%20%EC%84%9C%EA%B5%AC%20%EB%91%94%EC%82%B0%EB%A1%9C31%EB%B2%88%EA%B8%B8%2077",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjA61LBTk7bwDZSTPHH-uDR4vpnJwtE7XlleitUJLkMt8Jt7RDO0aGt9cwRt_ymeS__NXEN1gvBL8aJDUAOjdyF-IhCnowmcnCLAVZA2PmC9ow5NtW-QTq2SxP7A8s38Tec_7rxnq0_BEAc1bG9JiElj=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-012",
    name: "대들보함흥면옥",
    category: "냉면",
    address: "대전 중구 계백로1583번길 39",
    phone: "042-522-5900",
    lat: 36.3197280642308,
    lng: 127.395204605204,
    kakaoUrl: "http://place.map.kakao.com/16505390",
    naverUrl: "https://map.naver.com/p/search/%EB%8C%80%EB%93%A4%EB%B3%B4%ED%95%A8%ED%9D%A5%EB%A9%B4%EC%98%A5%20%EB%8C%80%EC%A0%84%20%EC%A4%91%EA%B5%AC%20%EA%B3%84%EB%B0%B1%EB%A1%9C1583%EB%B2%88%EA%B8%B8%2039",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBvnxe4c-nlJ-pP2mwZccdv-FH4PlXTf2My6X9DZZXJQvcjWeGWqw2XihDUT2tC-JqryrD_A4L3AFfp49FsE_58bjOqZtpX97JiGKuHt_WXvZWau0pgH3SSMZqSLYK8h13JxsLbgqv3gZMdCqA=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-013",
    name: "자연산형제횟집",
    category: "회",
    address: "대전 대덕구 중리로76번길 22",
    phone: "042-624-2957",
    lat: 36.365710578277806,
    lng: 127.42638649232971,
    kakaoUrl: "http://place.map.kakao.com/9603921",
    naverUrl: "https://map.naver.com/p/search/%EC%9E%90%EC%97%B0%EC%82%B0%ED%98%95%EC%A0%9C%ED%9A%9F%EC%A7%91%20%EB%8C%80%EC%A0%84%20%EB%8C%80%EB%8D%95%EA%B5%AC%20%EC%A4%91%EB%A6%AC%EB%A1%9C76%EB%B2%88%EA%B8%B8%2022",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCDNciJc-U72xuuC3JJjoETqIJkNMIwHpEBCxpFEIXbPp_yoVWUHsHE2lkhhlNjj5gFy3QE0kKfXqWJasDeJaxUKuUciFbvvEdtoc5f9V4AsbIAorsME6_n67eYpxmwVV4DBE1KoAL4EnTfpFsbS9YV=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-014",
    name: "내호냉면",
    category: "냉면",
    address: "부산 남구 우암번영로26번길 17",
    phone: "051-646-6195",
    lat: 35.1264751024665,
    lng: 129.070867880766,
    kakaoUrl: "http://place.map.kakao.com/11023144",
    naverUrl: "https://map.naver.com/p/search/%EB%82%B4%ED%98%B8%EB%83%89%EB%A9%B4%20%EB%B6%80%EC%82%B0%20%EB%82%A8%EA%B5%AC%20%EC%9A%B0%EC%95%94%EB%B2%88%EC%98%81%EB%A1%9C26%EB%B2%88%EA%B8%B8%2017",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDN0wem6mENhohPr9I-yaJBTUeO5LGAp8T01AUkBdeZw6wqYPryOE3kUKbaxJ1tO4UjC_9tGHxTUqJf4R96ozVK8N81ospZfO_5Z9Zsi7liVPQMtrxiXgnrzze7iDRHgoXDaXZ74cEvhAv0BRk=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-015",
    name: "해운대원조할매국밥",
    category: "국밥",
    address: "부산 해운대구 구남로21번길 33",
    phone: "051-746-0387",
    lat: 35.163301573016895,
    lng: 129.1613417627714,
    kakaoUrl: "http://place.map.kakao.com/367285394",
    naverUrl: "https://map.naver.com/p/search/%ED%95%B4%EC%9A%B4%EB%8C%80%EC%9B%90%EC%A1%B0%ED%95%A0%EB%A7%A4%EA%B5%AD%EB%B0%A5%20%EB%B6%80%EC%82%B0%20%ED%95%B4%EC%9A%B4%EB%8C%80%EA%B5%AC%20%EA%B5%AC%EB%82%A8%EB%A1%9C21%EB%B2%88%EA%B8%B8%2033",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDDcU1w2pt3HhT_pXXGmzRDlRufF5PMMrBzPrORZ9S9fuqp4TqYfDW4PFOTfDkmy2AL5h97W772fNi6-04d0PV1MIG5MKIWv2CDQGE2K97JjG9xkDbNkiQ1AHH7xpoD97Uq3i8oRnU4Z2qIAw=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-016",
    name: "광안리 신라횟집",
    category: "회",
    address: "부산 수영구 민락수변로7번길 16",
    phone: "051-753-2800",
    lat: 35.1552492407698,
    lng: 129.12455738853336,
    kakaoUrl: "http://place.map.kakao.com/9859956",
    naverUrl: "https://map.naver.com/p/search/%EA%B4%91%EC%95%88%EB%A6%AC%20%EC%8B%A0%EB%9D%BC%ED%9A%9F%EC%A7%91%20%EB%B6%80%EC%82%B0%20%EC%88%98%EC%98%81%EA%B5%AC%20%EB%AF%BC%EB%9D%BD%EC%88%98%EB%B3%80%EB%A1%9C7%EB%B2%88%EA%B8%B8%2016",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCXVqUF6bhBEy_lqwClykwBKgru016Ij1FwC-ugBMIHgE1UFuw8uRIsuwxhQpFwN0iwVc8LEq0_MdoHZlOLd37O2_V2EhHi2yXUl4_KfPRup90N-R21IxRRis3ROfOEVyiM21LnPJJFCHkwMA=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-017",
    name: "온천입구 기장곰장어",
    category: "장어",
    address: "부산 동래구 시실로 20",
    phone: "051-554-2878",
    lat: 35.2169043616926,
    lng: 129.085988779298,
    kakaoUrl: "http://place.map.kakao.com/24122340",
    naverUrl: "https://map.naver.com/p/search/%EC%98%A8%EC%B2%9C%EC%9E%85%EA%B5%AC%20%EA%B8%B0%EC%9E%A5%EA%B3%B0%EC%9E%A5%EC%96%B4%20%EB%B6%80%EC%82%B0%20%EB%8F%99%EB%9E%98%EA%B5%AC%20%EC%8B%9C%EC%8B%A4%EB%A1%9C%2020",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCfx9frFnPxRuPqVXSfL91LDTs0-ks_8PLAQSWTnqV7iWKevPJZM-AP3QBWQ0J8-VyOmrX6Bj9NH24OoL7XOoIv9SU0bLn48jS3ZFHVKPNoLvQmy_TSz4oPLdpmkew1rxmnfD2ghQ3huo8sVo4=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-018",
    name: "함흥보쌈",
    category: "족발,보쌈",
    address: "부산 영도구 남항로 42",
    phone: "051-416-2342",
    lat: 35.08844668707108,
    lng: 129.04106787427168,
    kakaoUrl: "http://place.map.kakao.com/11994552",
    naverUrl: "https://map.naver.com/p/search/%ED%95%A8%ED%9D%A5%EB%B3%B4%EC%8C%88%20%EB%B6%80%EC%82%B0%20%EC%98%81%EB%8F%84%EA%B5%AC%20%EB%82%A8%ED%95%AD%EB%A1%9C%2042",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-019",
    name: "신포순대 신포시장본점",
    category: "순대",
    address: "인천 제물포구 제물량로166번길 33",
    phone: "032-773-5735",
    lat: 37.4715450780911,
    lng: 126.626268181068,
    kakaoUrl: "http://place.map.kakao.com/7974900",
    naverUrl: "https://map.naver.com/p/search/%EC%8B%A0%ED%8F%AC%EC%88%9C%EB%8C%80%20%EC%8B%A0%ED%8F%AC%EC%8B%9C%EC%9E%A5%EB%B3%B8%EC%A0%90%20%EC%9D%B8%EC%B2%9C%20%EC%A0%9C%EB%AC%BC%ED%8F%AC%EA%B5%AC%20%EC%A0%9C%EB%AC%BC%EB%9F%89%EB%A1%9C166%EB%B2%88%EA%B8%B8%2033",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCBiBJPGJxuvcT63iETbCHuBGDLIfgAFwA8Q-q1CcALQx_GSheV_QTGY3EJPekKM4sK5OcEoznlInqW1sJqJeLXmpAPY4eWkBF1olF7mz7RCq3qIkAb3RIx9-0MLhS_KwVQK68e48QNIf1UGw=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-020",
    name: "부암갈비",
    category: "갈비",
    address: "인천 남동구 용천로 149",
    phone: "0502-5550-3547",
    lat: 37.46304021542,
    lng: 126.714336437057,
    kakaoUrl: "http://place.map.kakao.com/11057071",
    naverUrl: "https://map.naver.com/p/search/%EB%B6%80%EC%95%94%EA%B0%88%EB%B9%84%20%EC%9D%B8%EC%B2%9C%20%EB%82%A8%EB%8F%99%EA%B5%AC%20%EC%9A%A9%EC%B2%9C%EB%A1%9C%20149",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCzvl-qybVgZsA_d87Zt3zOJfWtTDpwCAsLlbuJuqLRu4sDRshmezlAYmTErwInVlQt4SgQJLuFN7ViF494vugVWUvjreaCHLkAsi8MR64fan5Q8E9q0yq1AsGILnLm0okfCBlU0n-FxlFmSac=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-021",
    name: "초가숯불갈비",
    category: "갈비",
    address: "인천 부평구 열우물로49번길 8",
    phone: "032-427-3131",
    lat: 37.472108700393,
    lng: 126.700089634521,
    kakaoUrl: "http://place.map.kakao.com/16092223",
    naverUrl: "https://map.naver.com/p/search/%EC%B4%88%EA%B0%80%EC%88%AF%EB%B6%88%EA%B0%88%EB%B9%84%20%EC%9D%B8%EC%B2%9C%20%EB%B6%80%ED%8F%89%EA%B5%AC%20%EC%97%B4%EC%9A%B0%EB%AC%BC%EB%A1%9C49%EB%B2%88%EA%B8%B8%208",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCfTuSsCvoH4hsejjbQXMSgv_4RoJ4ZwVQfcazu1cJaPGVwO7ht4DnSSvQUjZ32V-TxXplYLVGQKoCp4-KBQNWYl-pLx5NFfk2SWdUsgBSh88PnQljZx8_37fTEZd-gZv5sempm_seBo_FFcaE=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-022",
    name: "인현통닭삼계탕",
    category: "삼계탕",
    address: "인천 제물포구 참외전로 134",
    phone: "032-772-8487",
    lat: 37.4744455987878,
    lng: 126.631779646161,
    kakaoUrl: "http://place.map.kakao.com/1496770414",
    naverUrl: "https://map.naver.com/p/search/%EC%9D%B8%ED%98%84%ED%86%B5%EB%8B%AD%EC%82%BC%EA%B3%84%ED%83%95%20%EC%9D%B8%EC%B2%9C%20%EC%A0%9C%EB%AC%BC%ED%8F%AC%EA%B5%AC%20%EC%B0%B8%EC%99%B8%EC%A0%84%EB%A1%9C%20134",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjASsVaw7OAOqOUUSjW7IatTDT33pF7ozlyZI3hliuAJyAFy-B6PZRaT5pa2IJ_Mr_EKL6LlHybxAtgEM7U10h3OSSaQ3bvREu2hLryTxRz4cLJaHSA5B965e8S37aLzG4nwiTgUbAhBu1XxoA=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-023",
    name: "순천 건봉국밥",
    category: "한식",
    address: "전남광주통합특별시 순천시 장평로 65",
    phone: "061-752-0900",
    lat: 34.94553910858391,
    lng: 127.49395611781057,
    kakaoUrl: "http://place.map.kakao.com/14502586",
    naverUrl: "https://map.naver.com/p/search/%EC%88%9C%EC%B2%9C%20%EA%B1%B4%EB%B4%89%EA%B5%AD%EB%B0%A5%20%EC%A0%84%EB%82%A8%EA%B4%91%EC%A3%BC%ED%86%B5%ED%95%A9%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%88%9C%EC%B2%9C%EC%8B%9C%20%EC%9E%A5%ED%8F%89%EB%A1%9C%2065",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDRPUDYdDbY7nfEaB5CjWaoojQYhypIij-xUc0-pZ4Iid4JKUm8E47sQ_M7yZu_ecru9fCGteXe3bLdOB5V2kJ6znwEqBzsjoKmVM1sL4OIWDgosLpz-7Fzgcaoqkk-RtuGJuHsIGYrZ_gc=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-024",
    name: "영광굴비",
    category: "수산물판매",
    address: "전남광주통합특별시 영광군 영광읍 중앙로2길 65",
    phone: "061-351-2863",
    lat: 35.275059422524656,
    lng: 126.51249479780684,
    kakaoUrl: "http://place.map.kakao.com/16641212",
    naverUrl: "https://map.naver.com/p/search/%EC%98%81%EA%B4%91%EA%B5%B4%EB%B9%84%20%EC%A0%84%EB%82%A8%EA%B4%91%EC%A3%BC%ED%86%B5%ED%95%A9%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%98%81%EA%B4%91%EA%B5%B0%20%EC%98%81%EA%B4%91%EC%9D%8D%20%EC%A4%91%EC%95%99%EB%A1%9C2%EA%B8%B8%2065",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-025",
    name: "독천식당",
    category: "해물,생선",
    address: "전남광주통합특별시 영암군 학산면 독천로 162-2",
    phone: "061-472-4222",
    lat: 34.724745435172444,
    lng: 126.56710722452331,
    kakaoUrl: "http://place.map.kakao.com/7833148",
    naverUrl: "https://map.naver.com/p/search/%EB%8F%85%EC%B2%9C%EC%8B%9D%EB%8B%B9%20%EC%A0%84%EB%82%A8%20%EC%98%81%EC%95%94%EA%B5%B0%20%ED%95%99%EC%82%B0%EB%A9%B4%20%EB%8F%85%EC%B2%9C%EB%A1%9C%20162-2",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCC1RO9_Uo6KAVvrvsw-essfynqLaSsHJtNrl_ipolnDPfIOccs0fD881dcOfJlvt63mspUaDjog0t4Wdh2iDZbPaviT0XkSZHB5osziNsmgkN5Ajs-BMmktp1_WzuwlpZ4vfLEN2SeStK9iRyiNxuW5g=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-026",
    name: "거목순대국밥",
    category: "국밥",
    address: "전남광주통합특별시 순천시 장평로 50",
    phone: "061-741-7888",
    lat: 34.9441894836991,
    lng: 127.494241396839,
    kakaoUrl: "http://place.map.kakao.com/9676338",
    naverUrl: "https://map.naver.com/p/search/%EA%B1%B0%EB%AA%A9%EC%88%9C%EB%8C%80%EA%B5%AD%EB%B0%A5%20%EC%A0%84%EB%82%A8%EA%B4%91%EC%A3%BC%ED%86%B5%ED%95%A9%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%88%9C%EC%B2%9C%EC%8B%9C%20%EC%9E%A5%ED%8F%89%EB%A1%9C%2050",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjB-qxLtTL8cENZw75ufRvO_4xzEOOa-ORFrd04LRkFMnJAP_n5FYfXVcG7rIOV6QYWAt9qXws4O9VK3o4OuXquazM7jOBvuJZLB4854RGKLhFztlnCV5UsVfSqJbRCVz8tqPibpOlJQmfjK=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-027",
    name: "중앙횟집",
    category: "회",
    address: "전남광주통합특별시 목포시 번화로 44-1",
    phone: null,
    lat: 34.7861661190379,
    lng: 126.384286174961,
    kakaoUrl: "http://place.map.kakao.com/10082568",
    naverUrl: "https://map.naver.com/p/search/%EC%A4%91%EC%95%99%ED%9A%9F%EC%A7%91%20%EC%A0%84%EB%82%A8%EA%B4%91%EC%A3%BC%ED%86%B5%ED%95%A9%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EB%AA%A9%ED%8F%AC%EC%8B%9C%20%EB%B2%88%ED%99%94%EB%A1%9C%2044-1",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAaZlzFapbWYejpN3Fud0pC2vl6IPhL882pqM7FSjl_qL-dzizdmRtlcVuJUO4c6CzqwuLR3KJ3wBdqFLOlYPzJU8mCmSLmIhz1yM4BlZgecd2mGc3vFGe0iJa6DI1Q2mV2tWlw1rCd38IRoA=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-028",
    name: "가족회관",
    category: "한식",
    address: "전북특별자치도 전주시 완산구 전라감영5길 17",
    phone: "063-284-0982",
    lat: 35.81708744597352,
    lng: 127.14596642351144,
    kakaoUrl: "http://place.map.kakao.com/8676321",
    naverUrl: "https://map.naver.com/p/search/%EA%B0%80%EC%A1%B1%ED%9A%8C%EA%B4%80%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%84%EC%A3%BC%EC%8B%9C%20%EC%99%84%EC%82%B0%EA%B5%AC%20%EC%A0%84%EB%9D%BC%EA%B0%90%EC%98%815%EA%B8%B8%2017",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjA6aLV6ySTHXnwqoqZZkIBvAIz5V3wH-oEWMwr1vZ-S2hcAQCeqzOTPhz7LeP4NoMVih0KSzNxMwEExqBZRJODGS4Ketah2fUtkKrnhF6GD2hAOMZDq35K5vBUDf7KLirLrHd9LlwbjsqcBYvkrvdSH=s4800-w683",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-029",
    name: "전주우족설렁탕",
    category: "설렁탕",
    address: "전북특별자치도 군산시 대학로 88",
    phone: "063-445-9502",
    lat: 35.9827394545413,
    lng: 126.708248031671,
    kakaoUrl: "http://place.map.kakao.com/22017628",
    naverUrl: "https://map.naver.com/p/search/%EC%A0%84%EC%A3%BC%EC%9A%B0%EC%A1%B1%EC%84%A4%EB%A0%81%ED%83%95%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EA%B5%B0%EC%82%B0%EC%8B%9C%20%EB%8C%80%ED%95%99%EB%A1%9C%2088",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAI1XMORimf48AheCpiFffbboh4iN5UvxXSDAlME2y6dYhbZO3ZKsrbMnLETpZzyXMZCESV6TpwFBYtRPHyXGimWfmpIgealxpRXzQYTToyrzb4hynJMpMCm5Uxh1oQyIShr_CMQMtjRiNz-97TqZydaw=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-030",
    name: "소씨네 흥부골 남원추어탕",
    category: "추어",
    address: "전북특별자치도 남원시 인월면 천왕봉로 62-8",
    phone: "0503-7154-5002",
    lat: 35.459734919377,
    lng: 127.605196108615,
    kakaoUrl: "http://place.map.kakao.com/10967467",
    naverUrl: "https://map.naver.com/p/search/%EC%86%8C%EC%94%A8%EB%84%A4%20%ED%9D%A5%EB%B6%80%EA%B3%A8%20%EB%82%A8%EC%9B%90%EC%B6%94%EC%96%B4%ED%83%95%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EB%82%A8%EC%9B%90%EC%8B%9C%20%EC%9D%B8%EC%9B%94%EB%A9%B4%20%EC%B2%9C%EC%99%95%EB%B4%89%EB%A1%9C%2062-8",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAc6HH1KiIQIPx_zPBDxc85HCYx9yMBC3Dn_ztzBiMSqRnoAOdmHGeoRUGNjtphvdJ-Y16s8tVUDYlcpPQGRqCt3fWLBwN_7CT8tdc_MmFrkXn8MUbh5Ef2MDYxjCtpRsICrxwa2pO066kZ4g=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-031",
    name: "한양불고기",
    category: "불고기,두루치기",
    address: "전북특별자치도 전주시 완산구 우전2길 6",
    phone: "063-228-8011",
    lat: 35.80505758272181,
    lng: 127.10830326677558,
    kakaoUrl: "http://place.map.kakao.com/95190439",
    naverUrl: "https://map.naver.com/p/search/%ED%95%9C%EC%96%91%EB%B6%88%EA%B3%A0%EA%B8%B0%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%84%EC%A3%BC%EC%8B%9C%20%EC%99%84%EC%82%B0%EA%B5%AC%20%EC%9A%B0%EC%A0%842%EA%B8%B8%206",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCFpcL1DIIjj9flFNb9FM35NJXynJ_EPNRv_uq0TLtedKFNMGdKWoCix41hVzPpMNmKgxnld42tOR1YZSWi0lvogK-l7-41hnKrvw-h6biGFO8W6JsrItx_EVUrHFId-ubrw5bTtF5ZSrofoA=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-032",
    name: "신가네 정읍국밥 본점",
    category: "국밥",
    address: "전북특별자치도 정읍시 수성5로 19",
    phone: "063-531-6610",
    lat: 35.58559938735592,
    lng: 126.85832984732768,
    kakaoUrl: "http://place.map.kakao.com/194866317",
    naverUrl: "https://map.naver.com/p/search/%EC%8B%A0%EA%B0%80%EB%84%A4%20%EC%A0%95%EC%9D%8D%EA%B5%AD%EB%B0%A5%20%EB%B3%B8%EC%A0%90%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%95%EC%9D%8D%EC%8B%9C%20%EC%88%98%EC%84%B15%EB%A1%9C%2019",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCBqHrJl-RCs1MhdEPESdELLK-l1Iywfb4OtV7U3qG1jXO5qaY3Pbp8U20JoPHYKRm7fHvGtZbYWdwTga4GTp3I6AinLHQJaP0b1M2G0ZDQ8C1GzziVF0wg279g8ksvlLoTqljjp52wshJG=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-033",
    name: "향원복집",
    category: "복어",
    address: "제주특별자치도 서귀포시 부두로 43",
    phone: "064-762-2341",
    lat: 33.2411717396146,
    lng: 126.564808431373,
    kakaoUrl: "http://place.map.kakao.com/10910045",
    naverUrl: "https://map.naver.com/p/search/%ED%96%A5%EC%9B%90%EB%B3%B5%EC%A7%91%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%84%9C%EA%B7%80%ED%8F%AC%EC%8B%9C%20%EB%B6%80%EB%91%90%EB%A1%9C%2043",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCqBn4i4tGw9S-AA5Z3ujgyuuSjOR5t-NV6Km7n2LLtTB24l7DB5zJrswuXZOyGj4u-z8KDX76HvffPF0Qamu9xBw1bhoJp8xI5fZzgjSXtgZuuCbMO52lDDjiLRiuTscmPY89TJ-VehLFdSA=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-034",
    name: "성안식당",
    category: "해물,생선",
    address: "제주특별자치도 제주시 애월읍 애월로11길 5",
    phone: "064-799-0145",
    lat: 33.464812783368316,
    lng: 126.32018791480692,
    kakaoUrl: "http://place.map.kakao.com/9141709",
    naverUrl: "https://map.naver.com/p/search/%EC%84%B1%EC%95%88%EC%8B%9D%EB%8B%B9%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EC%95%A0%EC%9B%94%EC%9D%8D%20%EC%95%A0%EC%9B%94%EB%A1%9C11%EA%B8%B8%205",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjByd8VLmsoGAwtjg1NgHJP3MFaPMqGNhmvLyDhXscQdX9IofwPRyg4-I89d3GUJMjc4Rwx7Ab8nCVNTItuJahs9xE6HCfR39_QhMW9Ll2xQ5Cd1kk9ta5jZU4B9nZuVqAyn3zXJQ_GL_AcMOsnHwi6x=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-035",
    name: "진미명가식당",
    category: "회",
    address: "제주특별자치도 서귀포시 안덕면 사계남로 167",
    phone: "064-794-3639",
    lat: 33.22832083350651,
    lng: 126.30758350181715,
    kakaoUrl: "http://place.map.kakao.com/10764025",
    naverUrl: "https://map.naver.com/p/search/%EC%A7%84%EB%AF%B8%EB%AA%85%EA%B0%80%EC%8B%9D%EB%8B%B9%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%84%9C%EA%B7%80%ED%8F%AC%EC%8B%9C%20%EC%95%88%EB%8D%95%EB%A9%B4%20%EC%82%AC%EA%B3%84%EB%82%A8%EB%A1%9C%20167",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAiMPdIiLt2TBrbJlHJ53iz0RamFEk4tURDaZ7DscPR7eCkqdVYdNd6jv4zWJCxzIFnQ1ydXHgQPVdXpNiSpB2eZlSE3LB2Z0vyO4wc1L99XAPIjKytKfSEsihzu6pJiPbo-AIOCKgI_iToEsnirXs0mQ=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-036",
    name: "신제주보말칼국수",
    category: "칼국수",
    address: "제주특별자치도 제주시 선덕로5길 19",
    phone: "064-711-1470",
    lat: 33.487915014993874,
    lng: 126.49993500394655,
    kakaoUrl: "http://place.map.kakao.com/1527491418",
    naverUrl: "https://map.naver.com/p/search/%EC%8B%A0%EC%A0%9C%EC%A3%BC%EB%B3%B4%EB%A7%90%EC%B9%BC%EA%B5%AD%EC%88%98%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EC%84%A0%EB%8D%95%EB%A1%9C5%EA%B8%B8%2019",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBxrAEE0a4IR5IyyS_vG_g-L1xTl-2V0uYEg_YbhTnNur5qmSa1AdHy4V9sB_4VqVNt8bm55ohP8tGQnvPePcBg1YGkhxGGs7u0r7eiQGsRq3AThkUmyeLcvOyvt4Oe46SPvx_KN3uOtYO1=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-037",
    name: "큰마을영양굴밥",
    category: "굴,전복",
    address: "충남 서산시 부석면 간월도1길 65",
    phone: "041-662-2706",
    lat: 36.609512016483855,
    lng: 126.41644924844258,
    kakaoUrl: "http://place.map.kakao.com/8100305",
    naverUrl: "https://map.naver.com/p/search/%ED%81%B0%EB%A7%88%EC%9D%84%EC%98%81%EC%96%91%EA%B5%B4%EB%B0%A5%20%EC%B6%A9%EB%82%A8%20%EC%84%9C%EC%82%B0%EC%8B%9C%20%EB%B6%80%EC%84%9D%EB%A9%B4%20%EA%B0%84%EC%9B%94%EB%8F%841%EA%B8%B8%2065",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBi4deKa-5XxoF4sIS4eOlKsfzBzdbLqrzNzvpMuwWjUEwhScvD5Z1kcaMUf6zITzXbaWbKIc5CQcW6vrgbKzrqS0pqdBqR6HiUy1lwKnUlntydXU5HBVFTD209JRHWzDpwQXYN9-VzxEzi0jk=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-038",
    name: "금산원조 김정이삼계탕",
    category: "삼계탕",
    address: "충남 금산군 금산읍 인삼약초로 33",
    phone: "041-752-2678",
    lat: 36.1009828538327,
    lng: 127.496840904758,
    kakaoUrl: "http://place.map.kakao.com/22132117",
    naverUrl: "https://map.naver.com/p/search/%EA%B8%88%EC%82%B0%EC%9B%90%EC%A1%B0%20%EA%B9%80%EC%A0%95%EC%9D%B4%EC%82%BC%EA%B3%84%ED%83%95%20%EC%B6%A9%EB%82%A8%20%EA%B8%88%EC%82%B0%EA%B5%B0%20%EA%B8%88%EC%82%B0%EC%9D%8D%20%EC%9D%B8%EC%82%BC%EC%95%BD%EC%B4%88%EB%A1%9C%2033",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCHYVplA9hwQl556CvwRgkeuvUWeXTpjyl1K-zH9lfOERhB08AhLaWiBz3oEXARpxXbDyn7o5F5PAB99Eb_QzvzQHOcndwk_TTljG4mL8kJQCayyTw4KafdKl9ZHwjwAVgaa92AYnUMkQBe0Es=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-039",
    name: "삽다리곱창 홍성본점",
    category: "곱창,막창",
    address: "충남 홍성군 홍성읍 도청대로 6-1",
    phone: "041-634-0362",
    lat: 36.6052482831999,
    lng: 126.662599190822,
    kakaoUrl: "http://place.map.kakao.com/21259191",
    naverUrl: "https://map.naver.com/p/search/%EC%82%BD%EB%8B%A4%EB%A6%AC%EA%B3%B1%EC%B0%BD%20%ED%99%8D%EC%84%B1%EB%B3%B8%EC%A0%90%20%EC%B6%A9%EB%82%A8%20%ED%99%8D%EC%84%B1%EA%B5%B0%20%ED%99%8D%EC%84%B1%EC%9D%8D%20%EB%8F%84%EC%B2%AD%EB%8C%80%EB%A1%9C%206-1",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjC_qS3_G1dtmdztzVx2zVW3pQSJ_OFC0yAovTMX3uyUA9sYWHWPbwHaT-awFMlxrU36clqkKZFD7jsuG2ORhqnxYsB0QxLRRMRM1JpjbQ-UUzptCBc87E0rHeJ7yFfHIrG_IV6CLQYU0SP9Mg=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-040",
    name: "기러기칼국수",
    category: "칼국수",
    address: "충남 예산군 오가면 윤봉길로 1854",
    phone: "041-333-3331",
    lat: 36.68566718692699,
    lng: 126.77526606761283,
    kakaoUrl: "http://place.map.kakao.com/13034823",
    naverUrl: "https://map.naver.com/p/search/%EA%B8%B0%EB%9F%AC%EA%B8%B0%EC%B9%BC%EA%B5%AD%EC%88%98%20%EC%B6%A9%EB%82%A8%20%EC%98%88%EC%82%B0%EA%B5%B0%20%EC%98%A4%EA%B0%80%EB%A9%B4%20%EC%9C%A4%EB%B4%89%EA%B8%B8%EB%A1%9C%201854",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjA5uRAPk6y8Y7_P3eA6kWbhLEhCq6f8lVheP5oKR0O8sZXMfQ-MzdfbY9s0h6StqlnGZ0BsEUMOrdAWB6LSB9X0TFr0MOaXOSBTGseOaPk9OmiYodUxaYYopu89t6DgE3GJUWL3mhupp2OPdyfn6HKctA=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-041",
    name: "백마강식당",
    category: "매운탕,해물탕",
    address: "충남 부여군 규암면 진변로 11",
    phone: "041-835-2752",
    lat: 36.2770458643122,
    lng: 126.887186354598,
    kakaoUrl: "http://place.map.kakao.com/7886291",
    naverUrl: "https://map.naver.com/p/search/%EB%B0%B1%EB%A7%88%EA%B0%95%EC%8B%9D%EB%8B%B9%20%EC%B6%A9%EB%82%A8%20%EB%B6%80%EC%97%AC%EA%B5%B0%20%EA%B7%9C%EC%95%94%EB%A9%B4%20%EC%A7%84%EB%B3%80%EB%A1%9C%2011",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-042",
    name: "금강설렁탕",
    category: "설렁탕",
    address: "충북 청주시 상당구 상당로5번길 35",
    phone: "043-256-2311",
    lat: 36.62860359269337,
    lng: 127.48920522313308,
    kakaoUrl: "http://place.map.kakao.com/10219410",
    naverUrl: "https://map.naver.com/p/search/%EA%B8%88%EA%B0%95%EC%84%A4%EB%A0%81%ED%83%95%20%EC%B6%A9%EB%B6%81%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%EC%83%81%EB%8B%B9%EA%B5%AC%20%EC%83%81%EB%8B%B9%EB%A1%9C5%EB%B2%88%EA%B8%B8%2035",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDRcQoSqIuU0N--jppEVYObj2jpaR91ogr2DDclbNTtC6mRVdeYtMC5rGY7_bKgM1dnS34IwBsUA2gOHKWLkD0MLsisfCmhFTfJhyCA2UQH-b_1c29pTen6W_FU53Ty62wZj2VKlobUWXzqZw=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-043",
    name: "청주왕족발,보쌈",
    category: "족발,보쌈",
    address: "충북 진천군 진천읍 중앙서로 21",
    phone: "043-534-0491",
    lat: 36.85777455707055,
    lng: 127.44224752455615,
    kakaoUrl: "http://place.map.kakao.com/11238997",
    naverUrl: "https://map.naver.com/p/search/%EC%B2%AD%EC%A3%BC%EC%99%95%EC%A1%B1%EB%B0%9C%2C%EB%B3%B4%EC%8C%88%20%EC%B6%A9%EB%B6%81%20%EC%A7%84%EC%B2%9C%EA%B5%B0%20%EC%A7%84%EC%B2%9C%EC%9D%8D%20%EC%A4%91%EC%95%99%EC%84%9C%EB%A1%9C%2021",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjADsJH_ALPtLeHPq6qgABSmXRJFmPeEBrM-DPXUTOzMO_43-lr2ALXu2c0-8X5vtEpyl5_gXjEwTANipdiTX-ro5stRKydv_Cs9gMcchQKsNYrVlW7TVz39Eq4RVEvifvEinJLeWYJkYA5DN_A=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-044",
    name: "육거리소문난만두",
    category: "분식",
    address: "충북 청주시 상당구 상당로1번길 36",
    phone: "043-252-1195",
    lat: 36.628331980114844,
    lng: 127.48885692079449,
    kakaoUrl: "http://place.map.kakao.com/367735226",
    naverUrl: "https://map.naver.com/p/search/%EC%9C%A1%EA%B1%B0%EB%A6%AC%EC%86%8C%EB%AC%B8%EB%82%9C%EB%A7%8C%EB%91%90%20%EC%B6%A9%EB%B6%81%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%EC%83%81%EB%8B%B9%EA%B5%AC%20%EC%83%81%EB%8B%B9%EB%A1%9C1%EB%B2%88%EA%B8%B8%2036",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD1LKecFNd8950LwCb760_u6rpbhD_xlPOWkcND2tn-Ti6-2igx0--W7P44b8MUfZUi_F7AX8WcdpD0XoM8bSeBKzG0YRozjdvAbmw8BkmLBLuwKQ7xZPpMPYDvKb-iITVi9B8eTfawtPCxnGAzcWlA=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "bng-045",
    name: "신라식당",
    category: "한식",
    address: "충북 보은군 보은읍 교사삼산길 40",
    phone: "043-544-2869",
    lat: 36.485618035190285,
    lng: 127.71717640477608,
    kakaoUrl: "http://place.map.kakao.com/9196328",
    naverUrl: "https://map.naver.com/p/search/%EC%8B%A0%EB%9D%BC%EC%8B%9D%EB%8B%B9%20%EC%B6%A9%EB%B6%81%20%EB%B3%B4%EC%9D%80%EA%B5%B0%20%EB%B3%B4%EC%9D%80%EC%9D%8D%20%EA%B5%90%EC%82%AC%EC%82%BC%EC%82%B0%EA%B8%B8%2040",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAlxUdSS9LTCx2S6K-hjLYASQG5YU--0JHxZkCxK_7fv04pjrzUMSHL3gTSM-kOboXRZuELNnBiDxUc2wR8XVSCGyreQ48gUKNaAISDpwcB0bq6sVO9vjl1P58kL09Vf-HluoKCPmSY3-jL1A=s4800-w800",
    certification: "백년가게(중소벤처기업부 공식 인증)",
    recommendNote: "오랜 기간 한 자리를 지켜온 노포로, 중소벤처기업부가 백년가게로 공식 인증한 곳입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-001",
    name: "계곡가든꽃게장",
    category: "한식",
    address: "전북특별자치도 군산시 개정면 금강로 470",
    phone: null,
    lat: 35.9831246695,
    lng: 126.7713770921,
    kakaoUrl: "http://place.map.kakao.com/9682726",
    naverUrl: "https://map.naver.com/p/search/%EA%B3%84%EA%B3%A1%EA%B0%80%EB%93%A0%EA%BD%83%EA%B2%8C%EC%9E%A5%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EA%B5%B0%EC%82%B0%EC%8B%9C%20%EA%B0%9C%EC%A0%95%EB%A9%B4%20%EA%B8%88%EA%B0%95%EB%A1%9C%20470",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAnG81en-9M2ZCmgDjEydEFsdNMugiCfEq6M-Qlbss7IfVvwCLoXX4trsn09d1q8zjx6pyatC-fEkeb20Fa4cTC6jrR9ysS8h7lAEX97XTIx1dNZpkG03hTQxjZWK1jPvJ8u3TabzR7FAywCw=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-002",
    name: "무진장갈비촌",
    category: "한식",
    address: "전북특별자치도 익산시 선화로31길 58",
    phone: null,
    lat: 35.9506148877,
    lng: 126.9560281092,
    kakaoUrl: "http://place.map.kakao.com/9774041",
    naverUrl: "https://map.naver.com/p/search/%EB%AC%B4%EC%A7%84%EC%9E%A5%EA%B0%88%EB%B9%84%EC%B4%8C%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%9D%B5%EC%82%B0%EC%8B%9C%20%EC%84%A0%ED%99%94%EB%A1%9C31%EA%B8%B8%2058",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-003",
    name: "뚜부카페",
    category: "한식",
    address: "전북특별자치도 익산시 금마면 고도9길 23",
    phone: null,
    lat: 35.9980946376,
    lng: 127.0617285428,
    kakaoUrl: "http://place.map.kakao.com/24170112",
    naverUrl: "https://map.naver.com/p/search/%EB%9A%9C%EB%B6%80%EC%B9%B4%ED%8E%98%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%9D%B5%EC%82%B0%EC%8B%9C%20%EA%B8%88%EB%A7%88%EB%A9%B4%20%EA%B3%A0%EB%8F%849%EA%B8%B8%2023",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjC4v58z-SseEQL5RpD4ewNWWYeSRcWVFkRXPSn4M3y0N_7cTXTDi6t2dMfF3Gac9dUdO6IM0JrXxavaEGE9US3BZQzrwU45yYqdjrRDZiSVoNXMP05AH_NPQz-8LyXUNyi__Yk6zjb-fpeT=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-004",
    name: "하얀섬금강민물",
    category: "한식",
    address: "전북특별자치도 무주군 적상면 괴목로 568",
    phone: null,
    lat: 35.950133821,
    lng: 127.7153049798,
    kakaoUrl: "http://place.map.kakao.com/155851828",
    naverUrl: "https://map.naver.com/p/search/%ED%95%98%EC%96%80%EC%84%AC%EA%B8%88%EA%B0%95%EB%AF%BC%EB%AC%BC%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EB%AC%B4%EC%A3%BC%EA%B5%B0%20%EC%A0%81%EC%83%81%EB%A9%B4%20%EA%B4%B4%EB%AA%A9%EB%A1%9C%20568",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDFIVVBY7cMpFnH9Jz_T4DmtXt22ENnejgznY5MOUSerK7NzjK_7tt0Q4EEIhWXe4kCnFsG1xQqYHJuWlSHFvtMH9rP6kUgbwG-04ASHNyLTs-VFbFgkps6QhNngvEnAWDkc57f4v4d2ttmFQ=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-005",
    name: "종가집",
    category: "한식",
    address: "전북특별자치도 익산시 동서로 477 종가집",
    phone: null,
    lat: 35.9521263418,
    lng: 126.9858170778,
    kakaoUrl: "http://place.map.kakao.com/1067306002",
    naverUrl: "https://map.naver.com/p/search/%EC%A2%85%EA%B0%80%EC%A7%91%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%9D%B5%EC%82%B0%EC%8B%9C%20%EB%8F%99%EC%84%9C%EB%A1%9C%20477%20%EC%A2%85%EA%B0%80%EC%A7%91",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCG04LuJ3EkOvfsnwtjZjWNKjg_MSNfLIpz27nVxrMOaMqYPCKuuSemFEnTONBKVVmbjThDKOgOVkbxe9SYrbGwAkHTLCVfvruwZNh0xpuJ_ewQHOdyHD_4JLU9YJga9iahmk4LrS0RgXXAsqYlwNP5TQ=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-006",
    name: "씨아전복",
    category: "한식",
    address: "전북특별자치도 정읍시 상사2길 30",
    phone: null,
    lat: 35.5605882362,
    lng: 126.8638908277,
    kakaoUrl: null,
    naverUrl: "https://map.naver.com/p/search/%EC%94%A8%EC%95%84%EC%A0%84%EB%B3%B5%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%95%EC%9D%8D%EC%8B%9C%20%EC%83%81%EC%82%AC2%EA%B8%B8%2030",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCduR9eefjwJ3btt86oonDCiHbzfcbpYDNwSBOlceYbBDFyA2GwBsERuzeT_tP4Ifyvo4scqsQXUZE5nmKJGhuLFRH3n13SaR2QuI7Bl4ZOJ5UPP-eqSrTJYWQ3xNSLCA8GKBMnH_ta6-qV=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-007",
    name: "세계로가든",
    category: "한식",
    address: "전북특별자치도 진안군 전진로 2759 세계로가든",
    phone: null,
    lat: 35.7758669246,
    lng: 127.3672683028,
    kakaoUrl: "http://place.map.kakao.com/21260364",
    naverUrl: "https://map.naver.com/p/search/%EC%84%B8%EA%B3%84%EB%A1%9C%EA%B0%80%EB%93%A0%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A7%84%EC%95%88%EA%B5%B0%20%EC%A0%84%EC%A7%84%EB%A1%9C%202759%20%EC%84%B8%EA%B3%84%EB%A1%9C%EA%B0%80%EB%93%A0",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-008",
    name: "삼일식당",
    category: "한식",
    address: "전북특별자치도 익산시 중앙로 22-222",
    phone: null,
    lat: 35.9371107392,
    lng: 126.9483152612,
    kakaoUrl: "http://place.map.kakao.com/10433836",
    naverUrl: "https://map.naver.com/p/search/%EC%82%BC%EC%9D%BC%EC%8B%9D%EB%8B%B9%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%9D%B5%EC%82%B0%EC%8B%9C%20%EC%A4%91%EC%95%99%EB%A1%9C%2022-222",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDu-i6RyO_rd-hVgNf-fj5IznoClNGfTN4vESNc6p043w0CQ7hTlmxw60km3mlLAcopwEVDX8rdfIU6ovkXBEQoVClDZi7aMVmeGusQssoK1KJ6E5GqwU0ettV8bZqy39CHDJ5adx5IitbpuUw=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-009",
    name: "전라도음식이야기",
    category: "한식",
    address: "전북특별자치도 전주시 덕진구 아중6길 14-6",
    phone: null,
    lat: 35.8329626008,
    lng: 127.1729146352,
    kakaoUrl: "http://place.map.kakao.com/11171294",
    naverUrl: "https://map.naver.com/p/search/%EC%A0%84%EB%9D%BC%EB%8F%84%EC%9D%8C%EC%8B%9D%EC%9D%B4%EC%95%BC%EA%B8%B0%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%84%EC%A3%BC%EC%8B%9C%20%EB%8D%95%EC%A7%84%EA%B5%AC%20%EC%95%84%EC%A4%916%EA%B8%B8%2014-6",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBn6PomsT4Ds4C4Len2JZhw7OuyRH9rp1d_zHC-ByQAsYQ9KPgfiIV7I-wamCwTEBTHCBkG96zC6V8lxiBik3UwrKeYl6Qo0NNkqNF7-MJ9N5G8MtXauCblahqSpsYHjCGd4ofIFCEK2mg2ZDTEoy8mxg=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-010",
    name: "여무누리 한우치즈",
    category: "한식",
    address: "전북특별자치도 임실군 치즈마을2길 36-3 여무누리",
    phone: null,
    lat: 35.641081093,
    lng: 127.302288715,
    kakaoUrl: "http://place.map.kakao.com/219502586",
    naverUrl: "https://map.naver.com/p/search/%EC%97%AC%EB%AC%B4%EB%88%84%EB%A6%AC%20%ED%95%9C%EC%9A%B0%EC%B9%98%EC%A6%88%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%9E%84%EC%8B%A4%EA%B5%B0%20%EC%B9%98%EC%A6%88%EB%A7%88%EC%9D%842%EA%B8%B8%2036-3%20%EC%97%AC%EB%AC%B4%EB%88%84%EB%A6%AC",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjARnh_SNsWKnd7VBAcwbpFxLval1zcxmmvomsIqpd-KLq2loYY2_gRnW1O2xZqEzOZI3_bn4Tb4uBZMRjNz0Fopq0pyrbZKhb0rJlsqvXd667FMBNl3XU5bqoewrSjYhwMftQkFaJ_cogDs=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-011",
    name: "부산집",
    category: "한식",
    address: "전북특별자치도 남원시 요천로 1411 부산집",
    phone: null,
    lat: 35.4009706936,
    lng: 127.3768244667,
    kakaoUrl: "http://place.map.kakao.com/10467728",
    naverUrl: "https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EC%A7%91%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EB%82%A8%EC%9B%90%EC%8B%9C%20%EC%9A%94%EC%B2%9C%EB%A1%9C%201411%20%EB%B6%80%EC%82%B0%EC%A7%91",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAkdgup1eduu3aqdD-RENjW7u6-ntY0GyIw8kv-OUZNRPquyLK5ma6vef7RW1M0JEDD6KAY6JbjuSQ7bMtfj_rtVtNGDsuW21v9yYa3OX256s3Q8mGVbYLreRp2hFXdhr6VenTHVw2InSTJiIk=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-012",
    name: "무주뚝배기",
    category: "한식",
    address: "전북특별자치도 무주군 관동길 7",
    phone: null,
    lat: 35.9070449811,
    lng: 127.7549387356,
    kakaoUrl: "http://place.map.kakao.com/17382268",
    naverUrl: "https://map.naver.com/p/search/%EB%AC%B4%EC%A3%BC%EB%9A%9D%EB%B0%B0%EA%B8%B0%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EB%AC%B4%EC%A3%BC%EA%B5%B0%20%EA%B4%80%EB%8F%99%EA%B8%B8%207",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCO_J0FHOYwqri1518Y2oWj55E7uJvxVUAEzrjBNPR1ltxBmjFJLTerwMsH0TqYaI_cGtngc-smYoHGti8HG8ubi74V7ss-GGkWU3VWpK6sXFyvgoabiz5FW_34B0fVin8XdfM8xyBPc0Ddmw=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-013",
    name: "삼부회관",
    category: "한식",
    address: "전북특별자치도 정읍시 수성택지5길 39 (수성동)",
    phone: null,
    lat: 35.581321816,
    lng: 126.8534801125,
    kakaoUrl: "http://place.map.kakao.com/1240843476",
    naverUrl: "https://map.naver.com/p/search/%EC%82%BC%EB%B6%80%ED%9A%8C%EA%B4%80%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%95%EC%9D%8D%EC%8B%9C%20%EC%88%98%EC%84%B1%ED%83%9D%EC%A7%805%EA%B8%B8%2039%20(%EC%88%98%EC%84%B1%EB%8F%99)",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAk0ce6z-F0iKlkH7SYCBDi7kACeyAQQ-uekBPB_FXEuLzu_pAK4JTjnNIk30e8PUCOJ_1iCUC3aaaIBGx08QaF9kefLxj8_noMlmYdYsowcj8ivmaAtfawmDLHTz6K4lqjZWyAon8sDcO5wpO0yPlp=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-014",
    name: "행복정거장 모악산점",
    category: "한식",
    address: "전북특별자치도 완주군 구이면 모악산길 95",
    phone: null,
    lat: 35.7294677121,
    lng: 127.1094174289,
    kakaoUrl: null,
    naverUrl: "https://map.naver.com/p/search/%ED%96%89%EB%B3%B5%EC%A0%95%EA%B1%B0%EC%9E%A5%20%EB%AA%A8%EC%95%85%EC%82%B0%EC%A0%90%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%99%84%EC%A3%BC%EA%B5%B0%20%EA%B5%AC%EC%9D%B4%EB%A9%B4%20%EB%AA%A8%EC%95%85%EC%82%B0%EA%B8%B8%2095",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjALpNa7ldGB1UEEvv8BElACPcmK4mGiYKb7baQ8cOMaUr4Mbn0_ka3vwzlh6BSoq9r69hNgxGF_p2ZP2n2dF2o2VyqsSoD75-lzTlATMm8LOSQjNvQDDdS31dVoxKFcFmGvmc41fXZPppSkcA=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-015",
    name: "다솜차반",
    category: "한식",
    address: "전북특별자치도 김제시 대율2길 83",
    phone: null,
    lat: 35.7899317255,
    lng: 127.0321838399,
    kakaoUrl: "http://place.map.kakao.com/12032542",
    naverUrl: "https://map.naver.com/p/search/%EB%8B%A4%EC%86%9C%EC%B0%A8%EB%B0%98%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EA%B9%80%EC%A0%9C%EC%8B%9C%20%EB%8C%80%EC%9C%A82%EA%B8%B8%2083",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCE4wmHUlkAU0AoHfSq8-Suc_QSNiWdrg_slsDxAk3VKqMJ_DCPJzTazLfAqwVEVyxw8sCv_HmQ0E4tH-vapRZzhkR8ijcNF4HzInDKxgqpDJL1KEMROn1abAUAFZQfWrN8s9F3K_-LFNPWc30=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-016",
    name: "운정식당",
    category: "한식",
    address: "전북특별자치도 군산시 중정길 8-2",
    phone: null,
    lat: 35.9847596165,
    lng: 126.7142877104,
    kakaoUrl: "http://place.map.kakao.com/21690852",
    naverUrl: "https://map.naver.com/p/search/%EC%9A%B4%EC%A0%95%EC%8B%9D%EB%8B%B9%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EA%B5%B0%EC%82%B0%EC%8B%9C%20%EC%A4%91%EC%A0%95%EA%B8%B8%208-2",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjARMAIN-cWF-wToe0Ro3tMdOdcTSwF5-11sd8zr5qtSPHIBZLPvq4o2WvIFJnV11ANPYOvJuSWD40GMiHZk-9RgSKgb3EngLB9kBJz0HgB0SLgYrYV13_PC57n-VVsljNBZfyQvpvXCey3C5uk=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-017",
    name: "한국관",
    category: "한식",
    address: "전북특별자치도 무주군 설천면 구천동1로 87",
    phone: null,
    lat: 35.9001628197,
    lng: 127.7767703184,
    kakaoUrl: null,
    naverUrl: "https://map.naver.com/p/search/%ED%95%9C%EA%B5%AD%EA%B4%80%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EB%AC%B4%EC%A3%BC%EA%B5%B0%20%EC%84%A4%EC%B2%9C%EB%A9%B4%20%EA%B5%AC%EC%B2%9C%EB%8F%991%EB%A1%9C%2087",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-018",
    name: "기양초",
    category: "한식",
    address: "전북특별자치도 완주군 소양면 송광수만로 508",
    phone: null,
    lat: 35.9043695861,
    lng: 127.2431426185,
    kakaoUrl: "http://place.map.kakao.com/8213559",
    naverUrl: "https://map.naver.com/p/search/%EA%B8%B0%EC%96%91%EC%B4%88%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%99%84%EC%A3%BC%EA%B5%B0%20%EC%86%8C%EC%96%91%EB%A9%B4%20%EC%86%A1%EA%B4%91%EC%88%98%EB%A7%8C%EB%A1%9C%20508",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjASZj4OSrfs9BD2hAwIiGefbd6bWo2kUbEgETbly_Bx34YvK_RO2_VU8o13qvZ4hhXCKg5uvVDuVxLkCXWB3lAdQ3xBfwnE-m9PKaPnWI6s4QNB1HZBjWsXIk2vJukmy5f4IymYF66ggUxd7cs=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-019",
    name: "삼봉가든",
    category: "한식",
    address: "전북특별자치도 장수군 장수읍 장수로 1858-3",
    phone: null,
    lat: 35.6220895847,
    lng: 127.5061961431,
    kakaoUrl: null,
    naverUrl: "https://map.naver.com/p/search/%EC%82%BC%EB%B4%89%EA%B0%80%EB%93%A0%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%9E%A5%EC%88%98%EA%B5%B0%20%EC%9E%A5%EC%88%98%EC%9D%8D%20%EC%9E%A5%EC%88%98%EB%A1%9C%201858-3",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBxRbrfbzaMe0Pc_iy9sngTEQ-hQPGjFscTcBhgwbGwH7-7C3dFyc6W5NGc7R9zM52_y-r21v-NmT2Sg2XA4J78ggTGE3fvoG_-tjkxczaZxyDEggOwkFWQ6PefkiaUjzrDCUUrmk98kKRIeKw=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-020",
    name: "거북선숯불풍천장어",
    category: "한식",
    address: "전북특별자치도 고창군 상하면 고리포길 199",
    phone: null,
    lat: 35.4329676956,
    lng: 126.4336878622,
    kakaoUrl: "http://place.map.kakao.com/18854970",
    naverUrl: "https://map.naver.com/p/search/%EA%B1%B0%EB%B6%81%EC%84%A0%EC%88%AF%EB%B6%88%ED%92%8D%EC%B2%9C%EC%9E%A5%EC%96%B4%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EA%B3%A0%EC%B0%BD%EA%B5%B0%20%EC%83%81%ED%95%98%EB%A9%B4%20%EA%B3%A0%EB%A6%AC%ED%8F%AC%EA%B8%B8%20199",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAkb9th3FQWPN8FN74c8AJ4YMi-9-Zdxre1EI4db6AqUZihRyATrS9maIqzcbWmUI9poVCmm-D1Qhxl1_y2mbR1Rc3Z67elWTl0qkNKQC8c5dWtF35Xl3M9a-raudiLaRE-hTUFT14zDIw-wA=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-021",
    name: "옥정호산장",
    category: "한식",
    address: "전북특별자치도 임실군 운암면 운정길 7",
    phone: null,
    lat: 35.5940024562,
    lng: 127.1045908121,
    kakaoUrl: "http://place.map.kakao.com/1977462106",
    naverUrl: "https://map.naver.com/p/search/%EC%98%A5%EC%A0%95%ED%98%B8%EC%82%B0%EC%9E%A5%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%9E%84%EC%8B%A4%EA%B5%B0%20%EC%9A%B4%EC%95%94%EB%A9%B4%20%EC%9A%B4%EC%A0%95%EA%B8%B8%207",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDSGafdwSPwr-ku2tmvenJ2ZjImFPX_qOJgkyfArU2xrCAxKiUVGGiZYpb2UeN01SoJ2PJEDpAoRHMrMZEVAelHa1Pt1ZQ5TUiAGlQfhZdpZT-l7PsrsHHpYWNGoOiFMSoUGI-SJuvlAgCUzoXO2JBDaA=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-022",
    name: "두레식당",
    category: "한식",
    address: "전북특별자치도 남원시 서문1길 14",
    phone: null,
    lat: 35.4100224346,
    lng: 127.3760937412,
    kakaoUrl: "http://place.map.kakao.com/10283822",
    naverUrl: "https://map.naver.com/p/search/%EB%91%90%EB%A0%88%EC%8B%9D%EB%8B%B9%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EB%82%A8%EC%9B%90%EC%8B%9C%20%EC%84%9C%EB%AC%B81%EA%B8%B8%2014",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjA6q5u968XxP2bsAVLjNFcTa8M134imkUfZjvFKuNZCuy3LNNQpd4xnyVzpAaHSIGWi4OdCxiHR_hNlrUp0Ws7PtyIc5x2KQCMtsNuvKC2VQ7TzspaPbGkhHkZ6qJjxoeC1ukVs9qXkAqXlQw=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-023",
    name: "삼포가든",
    category: "한식",
    address: "전북특별자치도 남원시 요천로 2264",
    phone: null,
    lat: 35.4572847768,
    lng: 127.4348428773,
    kakaoUrl: "http://place.map.kakao.com/10431705",
    naverUrl: "https://map.naver.com/p/search/%EC%82%BC%ED%8F%AC%EA%B0%80%EB%93%A0%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EB%82%A8%EC%9B%90%EC%8B%9C%20%EC%9A%94%EC%B2%9C%EB%A1%9C%202264",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDd7n84GgsRdw0QiDycvb3kBNrSdwDpyiW-9LPdD5gWA6fG9Ppu8aVRWIjzHzrg-7aeWLItcRtc5owJFXTvOrPrWzLC-DKaYEBt_YN7TpFJMrR7X0W8A8AqeowGx5jDm6D210jVsYiYBJf3=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-024",
    name: "아중리 육전골 본점",
    category: "한식",
    address: "전북특별자치도 전주시 덕진구 아중1길 24",
    phone: null,
    lat: 35.8289269392,
    lng: 127.1724036753,
    kakaoUrl: "http://place.map.kakao.com/1714677957",
    naverUrl: "https://map.naver.com/p/search/%EC%95%84%EC%A4%91%EB%A6%AC%20%EC%9C%A1%EC%A0%84%EA%B3%A8%20%EB%B3%B8%EC%A0%90%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%84%EC%A3%BC%EC%8B%9C%20%EB%8D%95%EC%A7%84%EA%B5%AC%20%EC%95%84%EC%A4%911%EA%B8%B8%2024",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAh0VZ7yFR9OtO28ZRA8yBtKNzHkV9ameDaZl5rkqzOjwjx32-uETCt7fN3VAuuJFxbHeLx030_n2f907QC-OqX6c2qb6aNjCSg5Iet7j8ApoLu4rLHOZcQNcSqDS16wdogkyorFhbW52eESLY=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-025",
    name: "금강참붕어",
    category: "한식",
    address: "전북특별자치도 진안군 상전면 금지1길 18-20",
    phone: null,
    lat: 35.8621062626,
    lng: 127.4764007728,
    kakaoUrl: "http://place.map.kakao.com/8706107",
    naverUrl: "https://map.naver.com/p/search/%EA%B8%88%EA%B0%95%EC%B0%B8%EB%B6%95%EC%96%B4%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A7%84%EC%95%88%EA%B5%B0%20%EC%83%81%EC%A0%84%EB%A9%B4%20%EA%B8%88%EC%A7%801%EA%B8%B8%2018-20",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBu2qJWukmIHJiofMjhbQtD67-ACQNWwJ3cAOMznJCtt3YiZtjBfruCIx29CABauJ4m7cLcYs1ia5kpnnk5XUSmPL-kyilPE8muoC3oK6JNWUS7-b1Gp48970_55WLWKq5gd8-B5ViAxs4MOR4=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-026",
    name: "이민물장어 하우스",
    category: "한식",
    address: "충청남도 부여군 규암면 백제문로304번길 59-2",
    phone: null,
    lat: 36.3017931464,
    lng: 126.8951021003,
    kakaoUrl: "http://place.map.kakao.com/19017215",
    naverUrl: "https://map.naver.com/p/search/%EC%9D%B4%EB%AF%BC%EB%AC%BC%EC%9E%A5%EC%96%B4%20%ED%95%98%EC%9A%B0%EC%8A%A4%20%EC%B6%A9%EC%B2%AD%EB%82%A8%EB%8F%84%20%EB%B6%80%EC%97%AC%EA%B5%B0%20%EA%B7%9C%EC%95%94%EB%A9%B4%20%EB%B0%B1%EC%A0%9C%EB%AC%B8%EB%A1%9C304%EB%B2%88%EA%B8%B8%2059-2",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBGGWs62W9xZpBHJyX7S2l7LAtKsYTIVuPKAdvpMQZw6YK4m6t3vtN_CEMCCi_efy-aR43EdTZ2nPcuaGYWt1YMzlpYsQtdp3YI3jead7t74jFE5THT7EsDQIXyiv6T3QWz8DscTlXZLg_8TSA=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-027",
    name: "청화집",
    category: "한식",
    address: "충청남도 천안시 동남구 병천면 충절로 1749",
    phone: null,
    lat: 36.7623085217,
    lng: 127.299242233,
    kakaoUrl: "http://place.map.kakao.com/11233700",
    naverUrl: "https://map.naver.com/p/search/%EC%B2%AD%ED%99%94%EC%A7%91%20%EC%B6%A9%EC%B2%AD%EB%82%A8%EB%8F%84%20%EC%B2%9C%EC%95%88%EC%8B%9C%20%EB%8F%99%EB%82%A8%EA%B5%AC%20%EB%B3%91%EC%B2%9C%EB%A9%B4%20%EC%B6%A9%EC%A0%88%EB%A1%9C%201749",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAdvc2d95ythH5IqYqMlvxm7vDNVOLNGXxi1VRDbDJiPRlvJGiwFvgtADnMMUAY1wzMTP91SJFaNEnyFcyZfV6LIe7Q47l03IF83C0_LxHOrFopTkcoLrFqNPsdq5Vr45cCTZARXDeXVAw7JW2M7OM7Aw=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-028",
    name: "이화식당",
    category: "한식",
    address: "충청남도 아산시 신현로23번길 62",
    phone: null,
    lat: 36.863234802,
    lng: 126.9303699382,
    kakaoUrl: "http://place.map.kakao.com/22576393",
    naverUrl: "https://map.naver.com/p/search/%EC%9D%B4%ED%99%94%EC%8B%9D%EB%8B%B9%20%EC%B6%A9%EC%B2%AD%EB%82%A8%EB%8F%84%20%EC%95%84%EC%82%B0%EC%8B%9C%20%EC%8B%A0%ED%98%84%EB%A1%9C23%EB%B2%88%EA%B8%B8%2062",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjB7OghVSpzK7117UJVovOQ7mNBxBf8lsOeOgLRxxyLRuBlHaLxkZTcWDNMlTKPkgIfigxVvDwQZ651gGXd4kBOVwyeGNtNNBt72lh-o9Yp-NWrIgjWs1tq2g5Tis01ely9scJSyqbyv-tnp9Q=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-029",
    name: "호호아줌마",
    category: "한식",
    address: "충청남도 태안군 소원면 모항항길 121-7",
    phone: null,
    lat: 36.7763699759,
    lng: 126.1362247072,
    kakaoUrl: "http://place.map.kakao.com/259703447",
    naverUrl: "https://map.naver.com/p/search/%ED%98%B8%ED%98%B8%EC%95%84%EC%A4%8C%EB%A7%88%20%EC%B6%A9%EC%B2%AD%EB%82%A8%EB%8F%84%20%ED%83%9C%EC%95%88%EA%B5%B0%20%EC%86%8C%EC%9B%90%EB%A9%B4%20%EB%AA%A8%ED%95%AD%ED%95%AD%EA%B8%B8%20121-7",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCFAAVhyL6yr93jNuhBA-trha7g73Xi_eXFdZ9IkvKAq6N9sSYoVaeg0b0nz775kGj4g-RkYMO8glJwHEoHTxLmP0mVHhFD0MtFpS_9Tg1MuiRd6QZKScgB1j4CsmdlwbJZYCvaKh5vNFBc8uc=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-030",
    name: "옥양수산",
    category: "한식",
    address: "충청남도 태안군 근흥면 신진부두길 48",
    phone: null,
    lat: 36.6763232007,
    lng: 126.1368744891,
    kakaoUrl: "http://place.map.kakao.com/16943301",
    naverUrl: "https://map.naver.com/p/search/%EC%98%A5%EC%96%91%EC%88%98%EC%82%B0%20%EC%B6%A9%EC%B2%AD%EB%82%A8%EB%8F%84%20%ED%83%9C%EC%95%88%EA%B5%B0%20%EA%B7%BC%ED%9D%A5%EB%A9%B4%20%EC%8B%A0%EC%A7%84%EB%B6%80%EB%91%90%EA%B8%B8%2048",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAJWr7eSRChLG0gCT7VyL7-7_ZAkv_saCr9iQCtL3ZzR5H8JFTg8R_mekx2qe_tUDdGm2V8zmmQWcjQQRdMiw79kFgFlhOIl4_TIRMHxSin6YD-0rxepy-gc6ak_1TlE9dqchogWu1BSOID=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-031",
    name: "현대갈비",
    category: "한식",
    address: "충청남도 아산시 충무로20번길 19",
    phone: null,
    lat: 36.7824371237,
    lng: 127.0066819221,
    kakaoUrl: "http://place.map.kakao.com/9590154",
    naverUrl: "https://map.naver.com/p/search/%ED%98%84%EB%8C%80%EA%B0%88%EB%B9%84%20%EC%B6%A9%EC%B2%AD%EB%82%A8%EB%8F%84%20%EC%95%84%EC%82%B0%EC%8B%9C%20%EC%B6%A9%EB%AC%B4%EB%A1%9C20%EB%B2%88%EA%B8%B8%2019",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDEGB0J6be3qfqZ58HLOvxn6aqSzk_znL-mYXyTwSnzVimHUdD-TYZ32S5BpwxMBlLeUWw3AbgpWY6JiHheOes0ZdA58YnmOTUkiliIIVKI3OaStw4F5qCS3_AAFmE6IGLb48PfcksWhaPpOBM=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-032",
    name: "털보선장횟집",
    category: "한식",
    address: "충청남도 태안군 안면읍 백사장1길 95",
    phone: null,
    lat: 36.5861450128,
    lng: 126.3184187527,
    kakaoUrl: "http://place.map.kakao.com/8107879",
    naverUrl: "https://map.naver.com/p/search/%ED%84%B8%EB%B3%B4%EC%84%A0%EC%9E%A5%ED%9A%9F%EC%A7%91%20%EC%B6%A9%EC%B2%AD%EB%82%A8%EB%8F%84%20%ED%83%9C%EC%95%88%EA%B5%B0%20%EC%95%88%EB%A9%B4%EC%9D%8D%20%EB%B0%B1%EC%82%AC%EC%9E%A51%EA%B8%B8%2095",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCWh0-jbUWFZcdrIIHPN3x9_lFrI4ZajzcDqDhCWoQe97TUqj-qdo4lSINXdiV_jeNruI_TbNKpDgmI22rsRsfs9yY8JDiGUwvw_7JwDoSnhEF_jHLXpEumsKYucTDlurTZY7y6vxB6E4Iev4G-FozmTA=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-033",
    name: "태양이네",
    category: "한식",
    address: "충청남도 서천군 서천읍 충절로 42",
    phone: null,
    lat: 36.0750654976,
    lng: 126.686832271,
    kakaoUrl: "http://place.map.kakao.com/10037542",
    naverUrl: "https://map.naver.com/p/search/%ED%83%9C%EC%96%91%EC%9D%B4%EB%84%A4%20%EC%B6%A9%EC%B2%AD%EB%82%A8%EB%8F%84%20%EC%84%9C%EC%B2%9C%EA%B5%B0%20%EC%84%9C%EC%B2%9C%EC%9D%8D%20%EC%B6%A9%EC%A0%88%EB%A1%9C%2042",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-034",
    name: "엄청난해장국",
    category: "한식",
    address: "충청남도 아산시 갈산길 5",
    phone: null,
    lat: 36.7901928606,
    lng: 127.0674873386,
    kakaoUrl: null,
    naverUrl: "https://map.naver.com/p/search/%EC%97%84%EC%B2%AD%EB%82%9C%ED%95%B4%EC%9E%A5%EA%B5%AD%20%EC%B6%A9%EC%B2%AD%EB%82%A8%EB%8F%84%20%EC%95%84%EC%82%B0%EC%8B%9C%20%EA%B0%88%EC%82%B0%EA%B8%B8%205",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjClSxoXbUyEOJRCVq136BHHyLPaYWbOzQ4f4OzGGLvASBAiFK4w_wq5t4Oz9NN-O1Kdnbc1UJ5T1j6I4ICR9I7FtHIiTovPxtQzNz1_ctiuEIIIVTaOIsDmR_NoioZf_KVSIBanu5w-ROT6PzI=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-035",
    name: "서동한우 본점",
    category: "한식",
    address: "충청남도 부여군 성왕로 256",
    phone: null,
    lat: 36.2830206494,
    lng: 126.9154452179,
    kakaoUrl: "http://place.map.kakao.com/25732690",
    naverUrl: "https://map.naver.com/p/search/%EC%84%9C%EB%8F%99%ED%95%9C%EC%9A%B0%20%EB%B3%B8%EC%A0%90%20%EC%B6%A9%EC%B2%AD%EB%82%A8%EB%8F%84%20%EB%B6%80%EC%97%AC%EA%B5%B0%20%EC%84%B1%EC%99%95%EB%A1%9C%20256",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjC_Yez0QshFhqaHPQUNZYc-BNi9OyaSfrlCCyVEgsk_07g4itoiVvL68J6SphyxJ8PmB9RbZ9mH_2WCCGxXagf1hWBglVR0NsF5PjTE47EV0qv3Hejnzd5V_Km4RJxu0ISmJ-ajJaMR--IEzyMxKBBsfw=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-036",
    name: "신풍매운탕",
    category: "한식",
    address: "충청남도 논산시 신풍길 84-15",
    phone: null,
    lat: 36.1813535198,
    lng: 127.177702221,
    kakaoUrl: "http://place.map.kakao.com/16627985",
    naverUrl: "https://map.naver.com/p/search/%EC%8B%A0%ED%92%8D%EB%A7%A4%EC%9A%B4%ED%83%95%20%EC%B6%A9%EC%B2%AD%EB%82%A8%EB%8F%84%20%EB%85%BC%EC%82%B0%EC%8B%9C%20%EC%8B%A0%ED%92%8D%EA%B8%B8%2084-15",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAgaA9GatM0OtSNG0Ohcmy4ha95GEMCwtmpxz3oj76_dQJJliE3msQjbydkhIGL3FEXy_3ELqbEOPGMHmUJty0Q3GfzR3syz4YPDJUogYN75YtWvHi0VOoC2gZKebjgdhRYhshPnG-rNlkE2Q=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-037",
    name: "고창애풍천장어",
    category: "한식",
    address: "충청남도 공주시 창벽로 234-1",
    phone: null,
    lat: 36.4508112728,
    lng: 127.1606770704,
    kakaoUrl: "http://place.map.kakao.com/1644736314",
    naverUrl: "https://map.naver.com/p/search/%EA%B3%A0%EC%B0%BD%EC%95%A0%ED%92%8D%EC%B2%9C%EC%9E%A5%EC%96%B4%20%EC%B6%A9%EC%B2%AD%EB%82%A8%EB%8F%84%20%EA%B3%B5%EC%A3%BC%EC%8B%9C%20%EC%B0%BD%EB%B2%BD%EB%A1%9C%20234-1",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCd8Z9x2jlgi6EoKulimm1ek1m_aCn-AxeIcDVeLPGlw7pYisXaWaa2Za2ICyCVI0-Di6XlV9lF0mo-l71kpVwjxUC3YLVcBrINb3zw-KZEpoyHh0LpUyIM2jA--OcAUESces0WyCdsBkaHCdR_Ion4=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-038",
    name: "신정골해장국 본점",
    category: "한식",
    address: "충청남도 아산시 음봉면로 257",
    phone: null,
    lat: 36.8651501676,
    lng: 127.0265167598,
    kakaoUrl: "http://place.map.kakao.com/16421752",
    naverUrl: "https://map.naver.com/p/search/%EC%8B%A0%EC%A0%95%EA%B3%A8%ED%95%B4%EC%9E%A5%EA%B5%AD%20%EB%B3%B8%EC%A0%90%20%EC%B6%A9%EC%B2%AD%EB%82%A8%EB%8F%84%20%EC%95%84%EC%82%B0%EC%8B%9C%20%EC%9D%8C%EB%B4%89%EB%A9%B4%EB%A1%9C%20257",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDborh9EigmlxhVRB5C8xCA2MupPJ8AaMl_ZntHBMoEcbl8asD5Oay6HGWCuO7C4wYVWG41i_wq3Ah-5vsdbqMZFJdUAcNKFG68VUckHACwou_RgFXDBMnem9Gv8G3vi70GR9d39c-R4u24P90=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-039",
    name: "저곡식당",
    category: "한식",
    address: "충청남도 금산군 제원면 금강로 286",
    phone: null,
    lat: 36.1103212436,
    lng: 127.5651278978,
    kakaoUrl: null,
    naverUrl: "https://map.naver.com/p/search/%EC%A0%80%EA%B3%A1%EC%8B%9D%EB%8B%B9%20%EC%B6%A9%EC%B2%AD%EB%82%A8%EB%8F%84%20%EA%B8%88%EC%82%B0%EA%B5%B0%20%EC%A0%9C%EC%9B%90%EB%A9%B4%20%EA%B8%88%EA%B0%95%EB%A1%9C%20286",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCn2JukioCEoRAHwFJS7Z6HB1vZhBouzuLvFr4fg9KWQb72JO1hFgLuBo-DToez9Z3jgyl9261-bDa68ql6wWu6XW8QBy0soSxmwJCIlxcHx80_IPo29-0ivBOJaIPjlrKI2GrOXvU4K89uZg=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-040",
    name: "밥꽃하나피었네",
    category: "한식",
    address: "충청남도 공주시 계룡면 신원사로 502",
    phone: null,
    lat: 36.3325778994,
    lng: 127.1780314776,
    kakaoUrl: "http://place.map.kakao.com/26646193",
    naverUrl: "https://map.naver.com/p/search/%EB%B0%A5%EA%BD%83%ED%95%98%EB%82%98%ED%94%BC%EC%97%88%EB%84%A4%20%EC%B6%A9%EC%B2%AD%EB%82%A8%EB%8F%84%20%EA%B3%B5%EC%A3%BC%EC%8B%9C%20%EA%B3%84%EB%A3%A1%EB%A9%B4%20%EC%8B%A0%EC%9B%90%EC%82%AC%EB%A1%9C%20502",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjB9hTSF6iqZVBb62fARhTc3F2EeEGmqcMCY-Letj0aab6VzRrXtgBigdLXfljmP37ggy9myxGkKc9xO3fGTO37qgI-F4yc-o3DwQdJoOYHuRXs7RDtPnlDfh8uphdsUNVcIIGRHAE7WEOEOaQ=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-041",
    name: "원조부석냉면",
    category: "한식",
    address: "충청남도 서산시 부석면 취평2길 15-10",
    phone: null,
    lat: 36.7137065715,
    lng: 126.391967076,
    kakaoUrl: "http://place.map.kakao.com/11433016",
    naverUrl: "https://map.naver.com/p/search/%EC%9B%90%EC%A1%B0%EB%B6%80%EC%84%9D%EB%83%89%EB%A9%B4%20%EC%B6%A9%EC%B2%AD%EB%82%A8%EB%8F%84%20%EC%84%9C%EC%82%B0%EC%8B%9C%20%EB%B6%80%EC%84%9D%EB%A9%B4%20%EC%B7%A8%ED%8F%892%EA%B8%B8%2015-10",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-042",
    name: "시장정육점식당",
    category: "한식",
    address: "충청남도 공주시 백미고을길 10-5",
    phone: null,
    lat: 36.4658727579,
    lng: 127.1222495564,
    kakaoUrl: "http://place.map.kakao.com/7970877",
    naverUrl: "https://map.naver.com/p/search/%EC%8B%9C%EC%9E%A5%EC%A0%95%EC%9C%A1%EC%A0%90%EC%8B%9D%EB%8B%B9%20%EC%B6%A9%EC%B2%AD%EB%82%A8%EB%8F%84%20%EA%B3%B5%EC%A3%BC%EC%8B%9C%20%EB%B0%B1%EB%AF%B8%EA%B3%A0%EC%9D%84%EA%B8%B8%2010-5",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCw9fUo2ouWXgeeAN6-TL3sObMTpz0dPDMqDqLv4ANqhk5Mn2vfgrgF97d7sgkjfQw4WHOp76sqJwGHbwyvIg1q3EqbhjPwvcAbgQT0uvihcGJD56Andx5a-2QDaJmJv96cDgXJGeWo6V0Xcw=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-043",
    name: "마세오른",
    category: "한식",
    address: "충청남도 공주시 반포면 정광터1길 98-20",
    phone: null,
    lat: 36.4032568837,
    lng: 127.2328413307,
    kakaoUrl: "http://place.map.kakao.com/1872891743",
    naverUrl: "https://map.naver.com/p/search/%EB%A7%88%EC%84%B8%EC%98%A4%EB%A5%B8%20%EC%B6%A9%EC%B2%AD%EB%82%A8%EB%8F%84%20%EA%B3%B5%EC%A3%BC%EC%8B%9C%20%EB%B0%98%ED%8F%AC%EB%A9%B4%20%EC%A0%95%EA%B4%91%ED%84%B01%EA%B8%B8%2098-20",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAXNMCxKeFu0RanKY7P6EZOlyzC1WhsdGJgH58ixm6Jmqkosc_7EVvtngejaSQHmhl_tBEptBItuejFNhT2VbSQVZIwzu7GH66a5tsVPEfchKoSe4kPsGSSAMvDZHb1v9HIQ5VuTfIF83HuM9s=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-044",
    name: "대천키조개삼합",
    category: "한식",
    address: "충청남도 보령시 해수욕장8길 51 (신흑동)",
    phone: null,
    lat: 36.3130991607,
    lng: 126.513125001,
    kakaoUrl: "http://place.map.kakao.com/1410156268",
    naverUrl: "https://map.naver.com/p/search/%EB%8C%80%EC%B2%9C%ED%82%A4%EC%A1%B0%EA%B0%9C%EC%82%BC%ED%95%A9%20%EC%B6%A9%EC%B2%AD%EB%82%A8%EB%8F%84%20%EB%B3%B4%EB%A0%B9%EC%8B%9C%20%ED%95%B4%EC%88%98%EC%9A%95%EC%9E%A58%EA%B8%B8%2051%20(%EC%8B%A0%ED%9D%91%EB%8F%99)",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDx7EpEE-r53al8qcWJ2c8Zbd1_RQK5suWRxzuFVILDSukmDT0EuMygyxbv2Vld3idSsuCRXtYLEP-_Xsa77OGRFOvW_EFtg6AekSDch9LJ3VYmXlTX7WKJW6uk_-wOz0GmbsO06Eh4nPygZX0=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-045",
    name: "이화갈비",
    category: "한식",
    address: "충청남도 천안시 서북구 불당29길 18 (불당동)",
    phone: null,
    lat: 36.8092746034,
    lng: 127.1017198411,
    kakaoUrl: null,
    naverUrl: "https://map.naver.com/p/search/%EC%9D%B4%ED%99%94%EA%B0%88%EB%B9%84%20%EC%B6%A9%EC%B2%AD%EB%82%A8%EB%8F%84%20%EC%B2%9C%EC%95%88%EC%8B%9C%20%EC%84%9C%EB%B6%81%EA%B5%AC%20%EB%B6%88%EB%8B%B929%EA%B8%B8%2018%20(%EB%B6%88%EB%8B%B9%EB%8F%99)",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCqUv4Fdhv0N6LICtph6z0AlG5M6wECYwSxYK0hrgrc4uafew3xtOt7rQugvssIcjmS9Ullj7AAigrtGc5Y3o8btZ6A-JlWu_O9w-bd1ykZs4qRZr3OKlhWwAPfFe4N_qn0hE0wiyswH1jLKw=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-046",
    name: "일미정",
    category: "한식",
    address: "충청남도 서천군 장산로 641-7 대장금",
    phone: null,
    lat: 36.0026466892,
    lng: 126.7274832895,
    kakaoUrl: "http://place.map.kakao.com/1835926482",
    naverUrl: "https://map.naver.com/p/search/%EC%9D%BC%EB%AF%B8%EC%A0%95%20%EC%B6%A9%EC%B2%AD%EB%82%A8%EB%8F%84%20%EC%84%9C%EC%B2%9C%EA%B5%B0%20%EC%9E%A5%EC%82%B0%EB%A1%9C%20641-7%20%EB%8C%80%EC%9E%A5%EA%B8%88",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDgXflxsUD9IFDn1m_8Pynj3JHAyuXGhX4i14SQEc3R8yVKfLKLI9imSeIAS6jPPQjC3eM62sdV2Bvu3KcYlV372UozeYKAYekwhgpITCo5IyxLeoMBfVP99yT96KhHynCU4v1D8Hl6wog9nA=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-047",
    name: "태균네횟집",
    category: "한식",
    address: "충청남도 당진시 석문면 석문방조제로 1798-8",
    phone: null,
    lat: 37.0234517136,
    lng: 126.5732812441,
    kakaoUrl: "http://place.map.kakao.com/554037683",
    naverUrl: "https://map.naver.com/p/search/%ED%83%9C%EA%B7%A0%EB%84%A4%ED%9A%9F%EC%A7%91%20%EC%B6%A9%EC%B2%AD%EB%82%A8%EB%8F%84%20%EB%8B%B9%EC%A7%84%EC%8B%9C%20%EC%84%9D%EB%AC%B8%EB%A9%B4%20%EC%84%9D%EB%AC%B8%EB%B0%A9%EC%A1%B0%EC%A0%9C%EB%A1%9C%201798-8",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjC9Zjr0xm63MCoFs7lr8Y6hJa7lU8LQIkVGsAFRuj-gFxvSazOK12u4CdugbIDvjBWvrDS35Qq0wtrhmxZJdFF7eLluI8phLuxqWHC-V3XibU7-ZQrE-gWtlrYD241NSGSTt2I9RHTYPZWOeW0=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-048",
    name: "소우리생고기집",
    category: "한식",
    address: "충청남도 천안시 서북구 봉주로 258 소우리생고기집",
    phone: null,
    lat: 36.8785151585,
    lng: 127.1753362993,
    kakaoUrl: "http://place.map.kakao.com/9870874",
    naverUrl: "https://map.naver.com/p/search/%EC%86%8C%EC%9A%B0%EB%A6%AC%EC%83%9D%EA%B3%A0%EA%B8%B0%EC%A7%91%20%EC%B6%A9%EC%B2%AD%EB%82%A8%EB%8F%84%20%EC%B2%9C%EC%95%88%EC%8B%9C%20%EC%84%9C%EB%B6%81%EA%B5%AC%20%EB%B4%89%EC%A3%BC%EB%A1%9C%20258%20%EC%86%8C%EC%9A%B0%EB%A6%AC%EC%83%9D%EA%B3%A0%EA%B8%B0%EC%A7%91",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBkM1C2MDF3uY-YdprWtgTFa2cFEKH5iikUQV7qI6xxowvn8hkYY24Z-RZnHJLxWxp2YXehwObHA_4iWGTnGr7X8OADBY1NnsdrodlafC4T22GFTrRvuhoP3ZI5wRCLCAcG_kdqpXBcHvB7YRy7NhvENw=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-049",
    name: "미식가",
    category: "한식",
    address: "충청남도 태안군 정주내3길 16-5",
    phone: null,
    lat: 36.7462124438,
    lng: 126.3050268657,
    kakaoUrl: "http://place.map.kakao.com/63107069",
    naverUrl: "https://map.naver.com/p/search/%EB%AF%B8%EC%8B%9D%EA%B0%80%20%EC%B6%A9%EC%B2%AD%EB%82%A8%EB%8F%84%20%ED%83%9C%EC%95%88%EA%B5%B0%20%EC%A0%95%EC%A3%BC%EB%82%B43%EA%B8%B8%2016-5",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBvKfaQ3G9jYy4Vc0ZU6_Z42YGC8RpioRNBIemewd-YMisETqLetRlIuOOwPvQ7teYkf0yKwRlVClCa9DXH3ThrCkDtQzYo8dk3T1oXuOl1P87h9X3KYGNNZ8pen04aFSchuGXeZK8F4vPa044=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-050",
    name: "맘앤쉐프",
    category: "한식",
    address: "충청남도 천안시 동남구 은지2길 38 1층",
    phone: null,
    lat: 36.7887131488,
    lng: 127.2617337695,
    kakaoUrl: "http://place.map.kakao.com/26542788",
    naverUrl: "https://map.naver.com/p/search/%EB%A7%98%EC%95%A4%EC%89%90%ED%94%84%20%EC%B6%A9%EC%B2%AD%EB%82%A8%EB%8F%84%20%EC%B2%9C%EC%95%88%EC%8B%9C%20%EB%8F%99%EB%82%A8%EA%B5%AC%20%EC%9D%80%EC%A7%802%EA%B8%B8%2038%201%EC%B8%B5",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjA-Tnca-Q4ZxNgx8l81nsFwGx79vnwor2XI0S5MQP1uozr7Q7k-cS-39766V2oklaYx_OsGltogQi35mxj8XYKV6fGPMjsK1tkY7n3zoAhzrXvjjG5woZs34vUsgMtRZlW08CBv4iXYK2vm2A=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-051",
    name: "요석궁1779",
    category: "한식",
    address: "경상북도 경주시 교촌안길 19-4 (교동)",
    phone: null,
    lat: 35.8301138657,
    lng: 129.2168092022,
    kakaoUrl: "http://place.map.kakao.com/8014452",
    naverUrl: "https://map.naver.com/p/search/%EC%9A%94%EC%84%9D%EA%B6%811779%20%EA%B2%BD%EC%83%81%EB%B6%81%EB%8F%84%20%EA%B2%BD%EC%A3%BC%EC%8B%9C%20%EA%B5%90%EC%B4%8C%EC%95%88%EA%B8%B8%2019-4%20(%EA%B5%90%EB%8F%99)",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjB-bO6GVUASgBIMb83UQ_UXQ0ooOsNro1TOjDhYlri9x_u2zNlEmG3LPuI340ajdIoqFTiwwrIjGrPQiJKnD3Hffp6s1xF9GkTzEmfTvcMUTDTd35odnp_GD7WxKzy5wg8lQJ9I0PSu5dFw_7I=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-052",
    name: "솔밭식당",
    category: "한식",
    address: "경상북도 문경시 중앙6길 6 (점촌동)",
    phone: null,
    lat: 36.5950662939,
    lng: 128.2004384113,
    kakaoUrl: null,
    naverUrl: "https://map.naver.com/p/search/%EC%86%94%EB%B0%AD%EC%8B%9D%EB%8B%B9%20%EA%B2%BD%EC%83%81%EB%B6%81%EB%8F%84%20%EB%AC%B8%EA%B2%BD%EC%8B%9C%20%EC%A4%91%EC%95%996%EA%B8%B8%206%20(%EC%A0%90%EC%B4%8C%EB%8F%99)",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBBkYoXUUw1_iRMgU8ZfyfxcOcpiuAomlWJE6j3mljQWKw65bNvl1US3NK38cn02-cQqP2cMI6EYq_Qc5TTOB7SBJPFaIr_v3N_GoYF8RzTtF4XqME0aGzpzjmBAhOjSY-ZBRByZnHN-y8wWg=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-053",
    name: "THE 신촌s 덮죽",
    category: "한식",
    address: "경상북도 포항시 북구 중앙로294번길 10-7",
    phone: null,
    lat: 36.0387570362,
    lng: 129.367226136,
    kakaoUrl: null,
    naverUrl: "https://map.naver.com/p/search/THE%20%EC%8B%A0%EC%B4%8Cs%20%EB%8D%AE%EC%A3%BD%20%EA%B2%BD%EC%83%81%EB%B6%81%EB%8F%84%20%ED%8F%AC%ED%95%AD%EC%8B%9C%20%EB%B6%81%EA%B5%AC%20%EC%A4%91%EC%95%99%EB%A1%9C294%EB%B2%88%EA%B8%B8%2010-7",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBUj12zAHMTKAwxkA9werbt41M47246jSV4rB7SpZ6jLkjmaXXi3i37WK0K3BnznFsWBywzTcp5JJ0EpFMdtRuk0cp1h5uk7RMI7mETGYCmRwPhZntWHn0lQEMfQNAXkvqOMNhgUeqYPPfKb33mLiXFUQ=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-054",
    name: "화목정본점",
    category: "한식",
    address: "경상북도 포항시 북구 장량중앙로 62 1층",
    phone: null,
    lat: 36.089765559,
    lng: 129.3883922444,
    kakaoUrl: null,
    naverUrl: "https://map.naver.com/p/search/%ED%99%94%EB%AA%A9%EC%A0%95%EB%B3%B8%EC%A0%90%20%EA%B2%BD%EC%83%81%EB%B6%81%EB%8F%84%20%ED%8F%AC%ED%95%AD%EC%8B%9C%20%EB%B6%81%EA%B5%AC%20%EC%9E%A5%EB%9F%89%EC%A4%91%EC%95%99%EB%A1%9C%2062%201%EC%B8%B5",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCc3FbtE5HepOSnpbmnJZKZqb0T8MiciCjFW3l6lVtmd5hHjJM_x41dl17RdphYikPb6-ibL6rj5wrld7_uUsQZbMktY1RRQXeqEXYhQ0L4o35SE-ZY9gy9OHLgqCyKZf7dqPIfdPrzJ-6YwgM=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-055",
    name: "송정원순두부",
    category: "한식",
    address: "경상북도 경주시 구매1길 23",
    phone: null,
    lat: 35.7705556788,
    lng: 129.3099694078,
    kakaoUrl: "http://place.map.kakao.com/1593013454",
    naverUrl: "https://map.naver.com/p/search/%EC%86%A1%EC%A0%95%EC%9B%90%EC%88%9C%EB%91%90%EB%B6%80%20%EA%B2%BD%EC%83%81%EB%B6%81%EB%8F%84%20%EA%B2%BD%EC%A3%BC%EC%8B%9C%20%EA%B5%AC%EB%A7%A41%EA%B8%B8%2023",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBmiqbe8ymRuIj9qZ-CzsiPLsY8lwo6eV6wmtIpgyL1QxpDmGHEOsVfWa6vgyBtfQPjONoSK6jMuBCrh54NA9MO5Z2k202d5wPRATXdqgr6guYNd_lZI8LfooaAwNhojTDST8LKNJP4ZecvGIO6qZrlmQ=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-056",
    name: "맷돌순두부",
    category: "한식",
    address: "경상북도 경주시 북군길 7",
    phone: null,
    lat: 35.8518178431,
    lng: 129.2628878797,
    kakaoUrl: "http://place.map.kakao.com/10341223",
    naverUrl: "https://map.naver.com/p/search/%EB%A7%B7%EB%8F%8C%EC%88%9C%EB%91%90%EB%B6%80%20%EA%B2%BD%EC%83%81%EB%B6%81%EB%8F%84%20%EA%B2%BD%EC%A3%BC%EC%8B%9C%20%EB%B6%81%EA%B5%B0%EA%B8%B8%207",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjB3zcl0BcbbjzZVh-swmEPn_v_JbT65P-oOTOwy44vGxVnLI9P31O07Fkh0ZoFd0oSvuYKV39groddy026z9zHDcE5U2zIBZ1PmzO0r1fS1kYCeMhSC6TRaGqXZ1mpylKRtUlFYU93MvlEf3xoZDkPJag=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-057",
    name: "부산식당",
    category: "한식",
    address: "경상북도 경주시 불국신택지7길 32-7 (진현동)",
    phone: null,
    lat: 35.7868513844,
    lng: 129.3269146823,
    kakaoUrl: "http://place.map.kakao.com/9828767",
    naverUrl: "https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EC%8B%9D%EB%8B%B9%20%EA%B2%BD%EC%83%81%EB%B6%81%EB%8F%84%20%EA%B2%BD%EC%A3%BC%EC%8B%9C%20%EB%B6%88%EA%B5%AD%EC%8B%A0%ED%83%9D%EC%A7%807%EA%B8%B8%2032-7%20(%EC%A7%84%ED%98%84%EB%8F%99)",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAUkLWIXXtYnQfS9vr3WTU_S4zuf30ArdwUNIpRkTNCyxVKYKTxSRqALay2MwRClcz2PaQGpNkv1Hf3UFWVStIDdryMD3F9t9Ia_NLHlUyW0gK45J7ZRhvbmSMuTg3fCPn3qx6XsZsv6SapImE=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-058",
    name: "황소곳간",
    category: "한식",
    address: "경상북도 안동시 풍산읍 풍산태사로 1029",
    phone: null,
    lat: 36.578916696,
    lng: 128.5708447787,
    kakaoUrl: "http://place.map.kakao.com/1248538874",
    naverUrl: "https://map.naver.com/p/search/%ED%99%A9%EC%86%8C%EA%B3%B3%EA%B0%84%20%EA%B2%BD%EC%83%81%EB%B6%81%EB%8F%84%20%EC%95%88%EB%8F%99%EC%8B%9C%20%ED%92%8D%EC%82%B0%EC%9D%8D%20%ED%92%8D%EC%82%B0%ED%83%9C%EC%82%AC%EB%A1%9C%201029",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBTEFyOjeLubqopF9nEniOShPt7LH2AUWGuZ87w5q7a4inzxXO43gSkLyeSMery9fGn95HhZyEUa2G6Z8r4qW1CjStXU1a_KGb2bo6YVbZ0B986mBahbfp-sL9iz7Ry1vRSZgEOMuvJdZymVJM=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-059",
    name: "화산숯불&손두부",
    category: "한식",
    address: "경상북도 경주시 천강로 460",
    phone: null,
    lat: 35.9275264313,
    lng: 129.2877918634,
    kakaoUrl: null,
    naverUrl: "https://map.naver.com/p/search/%ED%99%94%EC%82%B0%EC%88%AF%EB%B6%88%26%EC%86%90%EB%91%90%EB%B6%80%20%EA%B2%BD%EC%83%81%EB%B6%81%EB%8F%84%20%EA%B2%BD%EC%A3%BC%EC%8B%9C%20%EC%B2%9C%EA%B0%95%EB%A1%9C%20460",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-060",
    name: "신라궁",
    category: "한식",
    address: "경상북도 칠곡군 한티로 578",
    phone: null,
    lat: 36.0072432662,
    lng: 128.5923257831,
    kakaoUrl: "http://place.map.kakao.com/584588861",
    naverUrl: "https://map.naver.com/p/search/%EC%8B%A0%EB%9D%BC%EA%B6%81%20%EA%B2%BD%EC%83%81%EB%B6%81%EB%8F%84%20%EC%B9%A0%EA%B3%A1%EA%B5%B0%20%ED%95%9C%ED%8B%B0%EB%A1%9C%20578",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCWO1nzA9ivS7g7cWSJhMMLL16ClPVQijER6WuE3rtBsJ8JQFxcVQWcOEmchDMzIf7Zj-TjenDKlImyefW2NJf6AtP3PbA49niOzaZp5Q6VK5bw8gaUO9IYC06IU7Qfke0KcHQD20slAYZ7=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-061",
    name: "연지곤지",
    category: "한식",
    address: "경상북도 경산시 삼성현로 558",
    phone: null,
    lat: 35.8043415542,
    lng: 128.7593611908,
    kakaoUrl: "http://place.map.kakao.com/1780097604",
    naverUrl: "https://map.naver.com/p/search/%EC%97%B0%EC%A7%80%EA%B3%A4%EC%A7%80%20%EA%B2%BD%EC%83%81%EB%B6%81%EB%8F%84%20%EA%B2%BD%EC%82%B0%EC%8B%9C%20%EC%82%BC%EC%84%B1%ED%98%84%EB%A1%9C%20558",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCsqpUPV37LulaDH0IoqUn7Zrl-MgM81ly-_Psqlkkd_vVq4bNn5UkZvTGcVvFAVbcOCqdNzo-dHgU1bZJEsnXbCLoWeFUWVaEmKKmxL87YL61wMDMZyC6WvxxABjlxSo2J9LAPQoI24tTnD6I=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-062",
    name: "장군암소숯불",
    category: "한식",
    address: "경상북도 경주시 부엉길 13",
    phone: null,
    lat: 35.8497668229,
    lng: 129.1966604084,
    kakaoUrl: "http://place.map.kakao.com/18649226",
    naverUrl: "https://map.naver.com/p/search/%EC%9E%A5%EA%B5%B0%EC%95%94%EC%86%8C%EC%88%AF%EB%B6%88%20%EA%B2%BD%EC%83%81%EB%B6%81%EB%8F%84%20%EA%B2%BD%EC%A3%BC%EC%8B%9C%20%EB%B6%80%EC%97%89%EA%B8%B8%2013",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCrv5P2EIJWhVKvsloPMH65BCeiEdpGX7rvl-rX1g9aLFF3A7skfV8_oUb-YQqt3sqJdIXEsG-Q0qFK1GvmoD5v-5ky0h62Ng_7YQsSTzttroky7bkoSTvM61pZ7yKGe7JgpmOLCHpDyEfeRQ=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-063",
    name: "안동 유진찜닭",
    category: "한식",
    address: "경상북도 안동시 번영1길 47",
    phone: null,
    lat: 36.5654739591,
    lng: 128.7278756588,
    kakaoUrl: "http://place.map.kakao.com/11421315",
    naverUrl: "https://map.naver.com/p/search/%EC%95%88%EB%8F%99%20%EC%9C%A0%EC%A7%84%EC%B0%9C%EB%8B%AD%20%EA%B2%BD%EC%83%81%EB%B6%81%EB%8F%84%20%EC%95%88%EB%8F%99%EC%8B%9C%20%EB%B2%88%EC%98%811%EA%B8%B8%2047",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAMQ-0sQeQIY-n70n7NOcXuAGzdGC8FIHSpViO6NeTGpQMi8uXxYqR9yJKuphEMLzwqwXTPxj7fRmQfPsLDoRuWwrAx4O914votyYc5GApxyitOlbkqXN7Rz-5H5JTcrNyLJskpfPzVyHdwX5NazXSVJQ=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-064",
    name: "미남장어 본점",
    category: "한식",
    address: "경상북도 포항시 북구 장량로 238",
    phone: null,
    lat: 36.0817168174,
    lng: 129.4065964358,
    kakaoUrl: "http://place.map.kakao.com/940635730",
    naverUrl: "https://map.naver.com/p/search/%EB%AF%B8%EB%82%A8%EC%9E%A5%EC%96%B4%20%EB%B3%B8%EC%A0%90%20%EA%B2%BD%EC%83%81%EB%B6%81%EB%8F%84%20%ED%8F%AC%ED%95%AD%EC%8B%9C%20%EB%B6%81%EA%B5%AC%20%EC%9E%A5%EB%9F%89%EB%A1%9C%20238",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjC201h_x56u9FSC-iIapNnMkubf2CbAU0R1HDMbl9u9eZvtbHQP6ozc1MnIhwNyc0RaBY6MLY3NquYpoOQ-AMz1HcNNIW_ANSl6ZTTKiAK1u4n0ClG1qz53Ik_ipgoGItRLdly1WdWYbf1AUg=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-065",
    name: "경주밀면 본점",
    category: "한식",
    address: "경상북도 경주시 시래둑길 7 한림원",
    phone: null,
    lat: 35.7732802417,
    lng: 129.3031004864,
    kakaoUrl: "http://place.map.kakao.com/297045319",
    naverUrl: "https://map.naver.com/p/search/%EA%B2%BD%EC%A3%BC%EB%B0%80%EB%A9%B4%20%EB%B3%B8%EC%A0%90%20%EA%B2%BD%EC%83%81%EB%B6%81%EB%8F%84%20%EA%B2%BD%EC%A3%BC%EC%8B%9C%20%EC%8B%9C%EB%9E%98%EB%91%91%EA%B8%B8%207%20%ED%95%9C%EB%A6%BC%EC%9B%90",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAjPujIsxCl0e1Kx8yihNTaeQDrobhs-3JLarsBaWdDxPRwBk5dYrz_hGY-wwGKYP2wB6pJ7Ed_Ui6q7XDD_4agQ-NcsThfG9muI7u_wv5SgH_3dOqF1ClFJZL9LUQlhej516ql6zEvreWXd_s=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-066",
    name: "뿔난염소식당",
    category: "한식",
    address: "경상북도 의성군 봉양면 경북대로 5347",
    phone: null,
    lat: 36.3268137131,
    lng: 128.6567360515,
    kakaoUrl: "http://place.map.kakao.com/1740563197",
    naverUrl: "https://map.naver.com/p/search/%EB%BF%94%EB%82%9C%EC%97%BC%EC%86%8C%EC%8B%9D%EB%8B%B9%20%EA%B2%BD%EC%83%81%EB%B6%81%EB%8F%84%20%EC%9D%98%EC%84%B1%EA%B5%B0%20%EB%B4%89%EC%96%91%EB%A9%B4%20%EA%B2%BD%EB%B6%81%EB%8C%80%EB%A1%9C%205347",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBNJ4y-0IvIsKMNk_DqIVoIll0Pc6Tk9Hd02UWgEa8gbwnsC96C8Ro1ODscUPEQu5VSKUtEyaUx8DfxxObqtXyJJJqqBipMznbKxfA1ZmW-YeDkkcY3TCeTe6NZOwaaTCgQlzCV3TDf--rpzA=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-067",
    name: "두꺼비식당",
    category: "한식",
    address: "경상북도 울릉군 울릉읍 도동길 54",
    phone: null,
    lat: 37.4828513441,
    lng: 130.9082209065,
    kakaoUrl: "http://place.map.kakao.com/8276580",
    naverUrl: "https://map.naver.com/p/search/%EB%91%90%EA%BA%BC%EB%B9%84%EC%8B%9D%EB%8B%B9%20%EA%B2%BD%EC%83%81%EB%B6%81%EB%8F%84%20%EC%9A%B8%EB%A6%89%EA%B5%B0%20%EC%9A%B8%EB%A6%89%EC%9D%8D%20%EB%8F%84%EB%8F%99%EA%B8%B8%2054",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBJpn-8s1K8vRKHCa6Vj2jm-66Q__k2pXwf2n6CCvBoX5aYqHmmC9Tzm84yd7G7HhfvBDKIL8gWXUbLgg7vs4e1Na_5srcAX94Oa-rbsqdvKaC7QDbJHu9F_b1FzVMU4pHo6a0YLlqg90k1tSk=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-068",
    name: "명희네집",
    category: "한식",
    address: "경상북도 김천시 아랫장터5길 15",
    phone: null,
    lat: 36.1211468203,
    lng: 128.128741403,
    kakaoUrl: "http://place.map.kakao.com/21496398",
    naverUrl: "https://map.naver.com/p/search/%EB%AA%85%ED%9D%AC%EB%84%A4%EC%A7%91%20%EA%B2%BD%EC%83%81%EB%B6%81%EB%8F%84%20%EA%B9%80%EC%B2%9C%EC%8B%9C%20%EC%95%84%EB%9E%AB%EC%9E%A5%ED%84%B05%EA%B8%B8%2015",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-069",
    name: "포항할매집",
    category: "한식",
    address: "경상북도 영천시 시장4길 52 영천공설시장 1층",
    phone: null,
    lat: 35.9642934681,
    lng: 128.9386075939,
    kakaoUrl: "http://place.map.kakao.com/9535626",
    naverUrl: "https://map.naver.com/p/search/%ED%8F%AC%ED%95%AD%ED%95%A0%EB%A7%A4%EC%A7%91%20%EA%B2%BD%EC%83%81%EB%B6%81%EB%8F%84%20%EC%98%81%EC%B2%9C%EC%8B%9C%20%EC%8B%9C%EC%9E%A54%EA%B8%B8%2052%20%EC%98%81%EC%B2%9C%EA%B3%B5%EC%84%A4%EC%8B%9C%EC%9E%A5%201%EC%B8%B5",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCHCNvY1U42SJZP00cJIzQo0k7cALYe3uVfVsG0ncIARg0qbzG4uWNA0YXRQPu09n5yY3ENhcL_K5A8Yk5yOfN5v3x-Que8h9tLAGWuFxn_gSFT6YBX-YDmsaD7YkkLv8BDq-H7SDEGK7ZkKg0Dr0kJ=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-070",
    name: "정애분식",
    category: "한식",
    address: "경상북도 울릉군 울릉순환로 212-10",
    phone: null,
    lat: 37.4927696897,
    lng: 130.9099148756,
    kakaoUrl: "http://place.map.kakao.com/25044362",
    naverUrl: "https://map.naver.com/p/search/%EC%A0%95%EC%95%A0%EB%B6%84%EC%8B%9D%20%EA%B2%BD%EC%83%81%EB%B6%81%EB%8F%84%20%EC%9A%B8%EB%A6%89%EA%B5%B0%20%EC%9A%B8%EB%A6%89%EC%88%9C%ED%99%98%EB%A1%9C%20212-10",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAOq9OLjwZuNzOZgN0QzMmXEpXeSeXAxVWuJgHWe8zU8ov_65SlzNE2u3RKVCD3RE2j5H7xoNptkDCL545oaViPYXc5QTi1l-hUK2ZGCUJqc7zGlKOzKgtc6UulrDoe0yWpkZfc-SVSzbzbjw=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-071",
    name: "평남식당",
    category: "한식",
    address: "경상북도 포항시 북구 죽도시장3길 9-16",
    phone: null,
    lat: 36.0358934378,
    lng: 129.3654874825,
    kakaoUrl: "http://place.map.kakao.com/16784162",
    naverUrl: "https://map.naver.com/p/search/%ED%8F%89%EB%82%A8%EC%8B%9D%EB%8B%B9%20%EA%B2%BD%EC%83%81%EB%B6%81%EB%8F%84%20%ED%8F%AC%ED%95%AD%EC%8B%9C%20%EB%B6%81%EA%B5%AC%20%EC%A3%BD%EB%8F%84%EC%8B%9C%EC%9E%A53%EA%B8%B8%209-16",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCo-boA0EBsZwnwv1e9TIbqkuKSF_XYQZwbGoFtjMKuoEhNtkhmTEgZcmOz87laUgAQUJPDga7sRfAZP67rUUgo8bOSBnc291CXsb7DDJagQtDvSnMmuJrup_hDSOGnhqWg69Xv_JW9z5wYq1U=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-073",
    name: "산여울식당",
    category: "한식",
    address: "경상북도 성주군 수륜면 참별로 1415-14",
    phone: null,
    lat: 35.8715538606,
    lng: 128.1790521503,
    kakaoUrl: "http://place.map.kakao.com/15207659",
    naverUrl: "https://map.naver.com/p/search/%EC%82%B0%EC%97%AC%EC%9A%B8%EC%8B%9D%EB%8B%B9%20%EA%B2%BD%EC%83%81%EB%B6%81%EB%8F%84%20%EC%84%B1%EC%A3%BC%EA%B5%B0%20%EC%88%98%EB%A5%9C%EB%A9%B4%20%EC%B0%B8%EB%B3%84%EB%A1%9C%201415-14",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjC8ylUd1M4VzKJPxn_UZZp42JyjgJSxtapjuvBFsSGz1qbv95Gc2XNTNhrZ_WCIyKWihKo15KA1GmrpePGm2yzNwDve-vqC7uEV8DCcESrwYi1md3eQOMADbPhiFlbsV-pmYEHG7StwXjo=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-074",
    name: "맛50년 헛제사밥",
    category: "한식",
    address: "경상북도 안동시 석주로 201 (상아동)",
    phone: null,
    lat: 36.5775870355,
    lng: 128.7580809592,
    kakaoUrl: "http://place.map.kakao.com/16282007",
    naverUrl: "https://map.naver.com/p/search/%EB%A7%9B50%EB%85%84%20%ED%97%9B%EC%A0%9C%EC%82%AC%EB%B0%A5%20%EA%B2%BD%EC%83%81%EB%B6%81%EB%8F%84%20%EC%95%88%EB%8F%99%EC%8B%9C%20%EC%84%9D%EC%A3%BC%EB%A1%9C%20201%20(%EC%83%81%EC%95%84%EB%8F%99)",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAOiMT8GUePCJRIjkAFDGkdrcG_ICMncz86czSVaI479A3bxgyTARvMvPXvpPRzNHRVhpJciqwq0c5COBa7VfEyk737WH5r8_r39Brg8B5Cu-fal48yEuvh8zy-kwODhwYx8teub9h35iDW=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-075",
    name: "명성송어장",
    category: "한식",
    address: "경상북도 문경시 마성면 동성길 59",
    phone: null,
    lat: 36.6801468377,
    lng: 128.1254343553,
    kakaoUrl: "http://place.map.kakao.com/438386823",
    naverUrl: "https://map.naver.com/p/search/%EB%AA%85%EC%84%B1%EC%86%A1%EC%96%B4%EC%9E%A5%20%EA%B2%BD%EC%83%81%EB%B6%81%EB%8F%84%20%EB%AC%B8%EA%B2%BD%EC%8B%9C%20%EB%A7%88%EC%84%B1%EB%A9%B4%20%EB%8F%99%EC%84%B1%EA%B8%B8%2059",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD-6t2PS-NdrGstYF88RRQQFtJZQ1Voq1fuaZs6kUV9lsM1_sPI71EvFZyl9mNsfctp0XfxerrcmjJkeeNWHEbwjriajV9YbyKjZrDhvPimbzRvCZ2oYUQUnnzZa9Q9nc_oeB6cGWB0afvWqA=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-076",
    name: "충주농협 탄금한우타운",
    category: "한식",
    address: "충청북도 충주시 탄금대로 364",
    phone: null,
    lat: 36.9874322975,
    lng: 127.8939741061,
    kakaoUrl: "http://place.map.kakao.com/22922119",
    naverUrl: "https://map.naver.com/p/search/%EC%B6%A9%EC%A3%BC%EB%86%8D%ED%98%91%20%ED%83%84%EA%B8%88%ED%95%9C%EC%9A%B0%ED%83%80%EC%9A%B4%20%EC%B6%A9%EC%B2%AD%EB%B6%81%EB%8F%84%20%EC%B6%A9%EC%A3%BC%EC%8B%9C%20%ED%83%84%EA%B8%88%EB%8C%80%EB%A1%9C%20364",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAYldraIS9BSOUtDOw1_fVLz2fZIXudjzOGAZwCKPDDE2a-pAiSdvfJcItepTsXIiJjLcCRWGmD_fVDfjtZ9i7z5YQNNDpXMm4zrNTUY_yXKFZzhMqjPIlKJlyS6yy4J1a8eEsaZVDMIlAr=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-077",
    name: "신토불이약초식당",
    category: "한식",
    address: "충청북도 보은군 속리산면 법주사로 268",
    phone: null,
    lat: 36.5315388721,
    lng: 127.8228572386,
    kakaoUrl: "http://place.map.kakao.com/17249072",
    naverUrl: "https://map.naver.com/p/search/%EC%8B%A0%ED%86%A0%EB%B6%88%EC%9D%B4%EC%95%BD%EC%B4%88%EC%8B%9D%EB%8B%B9%20%EC%B6%A9%EC%B2%AD%EB%B6%81%EB%8F%84%20%EB%B3%B4%EC%9D%80%EA%B5%B0%20%EC%86%8D%EB%A6%AC%EC%82%B0%EB%A9%B4%20%EB%B2%95%EC%A3%BC%EC%82%AC%EB%A1%9C%20268",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCe6wuQpEWIB-ydjCRgzLZBS2G8__jC7Xrk0BKJfppwpNto3b_VaGom3xDYb0Onk6s0i8yvLEZ5-lpasg7Ckd1OA0BTITd3gTw1GhwS6sP_HpwDexXaaxz4JRLHMWRBfWYS2DghDZB-guC-JA=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-078",
    name: "언덕넘어",
    category: "한식",
    address: "충청북도 충주시 수안보면 미륵송계로 9",
    phone: null,
    lat: 36.8410289609,
    lng: 128.0057988102,
    kakaoUrl: "http://place.map.kakao.com/14558441",
    naverUrl: "https://map.naver.com/p/search/%EC%96%B8%EB%8D%95%EB%84%98%EC%96%B4%20%EC%B6%A9%EC%B2%AD%EB%B6%81%EB%8F%84%20%EC%B6%A9%EC%A3%BC%EC%8B%9C%20%EC%88%98%EC%95%88%EB%B3%B4%EB%A9%B4%20%EB%AF%B8%EB%A5%B5%EC%86%A1%EA%B3%84%EB%A1%9C%209",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-079",
    name: "고원갈비",
    category: "한식",
    address: "충청북도 제천시 의병대로15길 5",
    phone: null,
    lat: 37.1370403639,
    lng: 128.2087942841,
    kakaoUrl: "http://place.map.kakao.com/9688287",
    naverUrl: "https://map.naver.com/p/search/%EA%B3%A0%EC%9B%90%EA%B0%88%EB%B9%84%20%EC%B6%A9%EC%B2%AD%EB%B6%81%EB%8F%84%20%EC%A0%9C%EC%B2%9C%EC%8B%9C%20%EC%9D%98%EB%B3%91%EB%8C%80%EB%A1%9C15%EA%B8%B8%205",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAEMDTq4qY8lGulMeDc00NPj1DKvraKhXYu1AqItpEQ-SX9MdA4ib71EioWt07lBI0P7rNhxjYjPg9_aRCaZYevPuJjyVW5Husj8OxRYRZd3k1uql2W56sp5dzQqVrSwiJ0-wAYZ1LcQ2YrYGY=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-080",
    name: "노송식당",
    category: "한식",
    address: "충청북도 제천시 내토로43길 5 (화산동)",
    phone: null,
    lat: 37.1282164622,
    lng: 128.2131941465,
    kakaoUrl: "http://place.map.kakao.com/10265372",
    naverUrl: "https://map.naver.com/p/search/%EB%85%B8%EC%86%A1%EC%8B%9D%EB%8B%B9%20%EC%B6%A9%EC%B2%AD%EB%B6%81%EB%8F%84%20%EC%A0%9C%EC%B2%9C%EC%8B%9C%20%EB%82%B4%ED%86%A0%EB%A1%9C43%EA%B8%B8%205%20(%ED%99%94%EC%82%B0%EB%8F%99)",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAfkkLMyhxMi7xMGrBlUoZjOYdv7oorIBeumyVyeS0RlnRwzZojPmFFjldxP0SJi2SwG04d_-6KkkkZxF0NjXSpvqs-oiwiWP0PP8aja1WYbCKLqJh08hP1-VmRcPfwenSS2d_0kJO0U3-u2A=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-081",
    name: "남들갈비",
    category: "한식",
    address: "충청북도 청주시 서원구 청남로2133번길 8",
    phone: null,
    lat: 36.6228390236,
    lng: 127.4875152814,
    kakaoUrl: "http://place.map.kakao.com/10190681",
    naverUrl: "https://map.naver.com/p/search/%EB%82%A8%EB%93%A4%EA%B0%88%EB%B9%84%20%EC%B6%A9%EC%B2%AD%EB%B6%81%EB%8F%84%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%EC%84%9C%EC%9B%90%EA%B5%AC%20%EC%B2%AD%EB%82%A8%EB%A1%9C2133%EB%B2%88%EA%B8%B8%208",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCHzg6YzL94F21h7O6rEZabDBXU23vYma5qsqhVjT_8DJSA_LNF2Y4Qra_sit8VYjbzjVpfCNPJXRfu9hEqnAIiisxYmV7xTyP340b9uFJSx09CN45qkk9tAswrFRIWtlbisb43S6-0--9aFg=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-082",
    name: "장림산방",
    category: "한식",
    address: "충청북도 단양군 대강면 단양로 142 1층",
    phone: null,
    lat: 36.9213318231,
    lng: 128.3570650517,
    kakaoUrl: "http://place.map.kakao.com/11270550",
    naverUrl: "https://map.naver.com/p/search/%EC%9E%A5%EB%A6%BC%EC%82%B0%EB%B0%A9%20%EC%B6%A9%EC%B2%AD%EB%B6%81%EB%8F%84%20%EB%8B%A8%EC%96%91%EA%B5%B0%20%EB%8C%80%EA%B0%95%EB%A9%B4%20%EB%8B%A8%EC%96%91%EB%A1%9C%20142%201%EC%B8%B5",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAlc5d2O5LiYi1wjxzPOBwz5wXP4eNoLwZ55HrQUTO8qI-SXwUGPiM-MRp6PvisaMcsUau7BG4qamZqvKswmMbquKYXZ78CwufJMwzFdU1Z_Olyxq-Etkskzfzc4SbMRmn75aPuMlEIWarHMrA=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-083",
    name: "안림홍두깨칼국수보쌈",
    category: "한식",
    address: "충청북도 충주시 안림로 72",
    phone: null,
    lat: 36.9701159659,
    lng: 127.9548219151,
    kakaoUrl: "http://place.map.kakao.com/1898783858",
    naverUrl: "https://map.naver.com/p/search/%EC%95%88%EB%A6%BC%ED%99%8D%EB%91%90%EA%B9%A8%EC%B9%BC%EA%B5%AD%EC%88%98%EB%B3%B4%EC%8C%88%20%EC%B6%A9%EC%B2%AD%EB%B6%81%EB%8F%84%20%EC%B6%A9%EC%A3%BC%EC%8B%9C%20%EC%95%88%EB%A6%BC%EB%A1%9C%2072",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjABfDWQoWwv3xM0kh4pQtXlE7gxZWgnlzLtq0qrey_C4wFlQCYMCs6ZBA8eOB5eMaeVD1chiUGSoB3_BcLJemRUD3R35fYfdhQNprqkYviTqZibP5J5mjeg1CiHfGlgs_b39otE0XSCEtTbDQ=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-084",
    name: "비원쏘가리",
    category: "한식",
    address: "충청북도 단양군 단양읍 삼봉로 179",
    phone: null,
    lat: 36.9759062123,
    lng: 128.3623629908,
    kakaoUrl: "http://place.map.kakao.com/7914792",
    naverUrl: "https://map.naver.com/p/search/%EB%B9%84%EC%9B%90%EC%8F%98%EA%B0%80%EB%A6%AC%20%EC%B6%A9%EC%B2%AD%EB%B6%81%EB%8F%84%20%EB%8B%A8%EC%96%91%EA%B5%B0%20%EB%8B%A8%EC%96%91%EC%9D%8D%20%EC%82%BC%EB%B4%89%EB%A1%9C%20179",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBs0f7o8WfqsF2WY1c10Icnw1O0eSadzvtOTR-C3Aol6AC9L55RZrPLd2tYKmcRhQrUf2f7xijCkPWojptnlsEKaGOVDmINXx_ibqnAxWYskJdag5Z4oG09rbPU7QeEpG2xkW1XJQvfpC1THJtvwMOgVQ=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-085",
    name: "인터식당",
    category: "한식",
    address: "충청북도 영동군 신촌2길 4 음식점",
    phone: null,
    lat: 36.2239729044,
    lng: 127.9153741817,
    kakaoUrl: "http://place.map.kakao.com/16138833",
    naverUrl: "https://map.naver.com/p/search/%EC%9D%B8%ED%84%B0%EC%8B%9D%EB%8B%B9%20%EC%B6%A9%EC%B2%AD%EB%B6%81%EB%8F%84%20%EC%98%81%EB%8F%99%EA%B5%B0%20%EC%8B%A0%EC%B4%8C2%EA%B8%B8%204%20%EC%9D%8C%EC%8B%9D%EC%A0%90",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDRb1wvM8szsI8mN64Ap4k1auDPKSnIjXA9OIKyy1Z6viQULiXh3B3apTwc8eFjuo_GnM3O0lY3Tx_3FCWeb1ka6Fvi9xkWzJtv8Qtxrttf75swHeOrkdp6geEpl7GER-auijlj8v5NSJtsoyS8SHKWfQ=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-086",
    name: "리정",
    category: "한식",
    address: "충청북도 청주시 청원구 우암로 71-1",
    phone: null,
    lat: 36.6545353715,
    lng: 127.4866894798,
    kakaoUrl: "http://place.map.kakao.com/11085093",
    naverUrl: "https://map.naver.com/p/search/%EB%A6%AC%EC%A0%95%20%EC%B6%A9%EC%B2%AD%EB%B6%81%EB%8F%84%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%EC%B2%AD%EC%9B%90%EA%B5%AC%20%EC%9A%B0%EC%95%94%EB%A1%9C%2071-1",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDesx_SaFoc9_dnGgZmt5mKDh9slcer2bx78758qTJ9sSUJBIzcLAhemFCmkdWC9yjk_wSnwZ986E2EuijHgTk2n9vmEXChaIc4SzVzblKTAnVNO7GlPgU0vxyuNYkC16iKTs92pAX-JJ-lHU8=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-087",
    name: "고화갈비살 청주본점",
    category: "한식",
    address: "충청북도 청주시 상당구 단재로 557 1층",
    phone: null,
    lat: 36.5816858255,
    lng: 127.5106504544,
    kakaoUrl: "http://place.map.kakao.com/1567121615",
    naverUrl: "https://map.naver.com/p/search/%EA%B3%A0%ED%99%94%EA%B0%88%EB%B9%84%EC%82%B4%20%EC%B2%AD%EC%A3%BC%EB%B3%B8%EC%A0%90%20%EC%B6%A9%EC%B2%AD%EB%B6%81%EB%8F%84%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%EC%83%81%EB%8B%B9%EA%B5%AC%20%EB%8B%A8%EC%9E%AC%EB%A1%9C%20557%201%EC%B8%B5",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCI-LYcyVQ6xFfv1rrklEpX1y7csegMuMiAZtgq2dmXeUdEx-iQTffXM6w6yfgUiMD9hP6Zl5otHI6LUWBKfvoz1qhUxVlytMHbI19s0Bj8LDd-q5z8kvNogDzv_DWLImrSNXeaLTqCuStPNCE=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-088",
    name: "용자1",
    category: "한식",
    address: "충청북도 청주시 흥덕구 죽천로 96-19 태희빌라",
    phone: null,
    lat: 36.6375530474,
    lng: 127.434275207,
    kakaoUrl: "http://place.map.kakao.com/26981291",
    naverUrl: "https://map.naver.com/p/search/%EC%9A%A9%EC%9E%901%20%EC%B6%A9%EC%B2%AD%EB%B6%81%EB%8F%84%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%ED%9D%A5%EB%8D%95%EA%B5%AC%20%EC%A3%BD%EC%B2%9C%EB%A1%9C%2096-19%20%ED%83%9C%ED%9D%AC%EB%B9%8C%EB%9D%BC",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDbqQLi_BliOXTNh9Sy2k_qrngFKft_PPIQoR98LLqRMWuIDNl0UN3E71tq4kC-G23MEMDpZzmNGpvrEGTpEsSbs5hfYIetH9CJrle3KtrzovcG2jiruJBqfbnelmp-ZIoB_Kklc11WjuweAw=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-089",
    name: "보국가든",
    category: "한식",
    address: "충청북도 청주시 흥덕구 심동로 654-12",
    phone: null,
    lat: 36.6787742067,
    lng: 127.3288113194,
    kakaoUrl: "http://place.map.kakao.com/2097149863",
    naverUrl: "https://map.naver.com/p/search/%EB%B3%B4%EA%B5%AD%EA%B0%80%EB%93%A0%20%EC%B6%A9%EC%B2%AD%EB%B6%81%EB%8F%84%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%ED%9D%A5%EB%8D%95%EA%B5%AC%20%EC%8B%AC%EB%8F%99%EB%A1%9C%20654-12",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDXNkSaHRGDzyIiMrI9LIucKAfHqcDkQlVSgOBXeiY_Etl9-GuKONc3U5WU8VeqVAaLSVkP2SxeS6j1pFiYJ_81qMQuqtZ_xkj1RDS6d3TyEYLU_yLZ3RK06NO4DWY4Kzpuy3_XFtrSqtIl_A=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-090",
    name: "성화옻닭",
    category: "한식",
    address: "충청북도 청주시 서원구 신성화로46번길 5-2",
    phone: null,
    lat: 36.6192861358,
    lng: 127.4586318584,
    kakaoUrl: "http://place.map.kakao.com/12593994",
    naverUrl: "https://map.naver.com/p/search/%EC%84%B1%ED%99%94%EC%98%BB%EB%8B%AD%20%EC%B6%A9%EC%B2%AD%EB%B6%81%EB%8F%84%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%EC%84%9C%EC%9B%90%EA%B5%AC%20%EC%8B%A0%EC%84%B1%ED%99%94%EB%A1%9C46%EB%B2%88%EA%B8%B8%205-2",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAYmDNIGP5-mtHN_uBQxrZi8_BMvihZfbjKi_YTg0Epfma-FDYPrvSLDzIzLBqqaL-ANg9QmW_rfjxNoUZpbI3LbfYflNIGRYW7sL4z1IxUJPUtb7igNvSS7VfRvRIQ6eAesCjcR56bQw0Rx3U=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-091",
    name: "가람",
    category: "한식",
    address: "충청북도 제천시 수산면 월악로 2970",
    phone: null,
    lat: 36.932935468,
    lng: 128.1772085952,
    kakaoUrl: "http://place.map.kakao.com/17791344",
    naverUrl: "https://map.naver.com/p/search/%EA%B0%80%EB%9E%8C%20%EC%B6%A9%EC%B2%AD%EB%B6%81%EB%8F%84%20%EC%A0%9C%EC%B2%9C%EC%8B%9C%20%EC%88%98%EC%82%B0%EB%A9%B4%20%EC%9B%94%EC%95%85%EB%A1%9C%202970",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDO_g-AyK7Trec_PhE5ae8oRyNzaRQVzir4Q4GRfJRfwJAru13wVeEuG6s7LJQl9oPFXyVkdpU1PcxCr6HD1fFlC9WQhXOX3SBtKAm_rGPzBDl6Ah-kX9nI42Dm3Qg3rOx1DBI0AnW5MSwMVQ=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-092",
    name: "김천식당",
    category: "한식",
    address: "충청북도 보은군 삼산로1길 25-4",
    phone: null,
    lat: 36.4824482097,
    lng: 127.7214621081,
    kakaoUrl: "http://place.map.kakao.com/21257499",
    naverUrl: "https://map.naver.com/p/search/%EA%B9%80%EC%B2%9C%EC%8B%9D%EB%8B%B9%20%EC%B6%A9%EC%B2%AD%EB%B6%81%EB%8F%84%20%EB%B3%B4%EC%9D%80%EA%B5%B0%20%EC%82%BC%EC%82%B0%EB%A1%9C1%EA%B8%B8%2025-4",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBzkek2_GzrPImuw7U1POwDcJzwKPd3ZB0CFUtVwaDNIkXXaFO6tsPIqYuz9C39xAO8g8bkeOKlMXx6bnOcYsPC_aK4snx-oN36xbJ8uEif0ACNTixSMU83ij3bZPT-6VA3ev7ra2vznawVRg=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-093",
    name: "할머니집",
    category: "한식",
    address: "충청북도 진천군 이월면 화산동길 18",
    phone: null,
    lat: 36.9416676423,
    lng: 127.4099828364,
    kakaoUrl: null,
    naverUrl: "https://map.naver.com/p/search/%ED%95%A0%EB%A8%B8%EB%8B%88%EC%A7%91%20%EC%B6%A9%EC%B2%AD%EB%B6%81%EB%8F%84%20%EC%A7%84%EC%B2%9C%EA%B5%B0%20%EC%9D%B4%EC%9B%94%EB%A9%B4%20%ED%99%94%EC%82%B0%EB%8F%99%EA%B8%B8%2018",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD8eQPdmrn2IdmoYcKn87QuedWdKiGUupBf9_VrbfNqSkRjQXKIYhQ3hKDjIlm8Y271WHFCrx6qTrcMK0rBe6p0cNQKebnBVIQ6CmUC_pSqKZLvG10aVLrN-5j7DjPenMv_C-xXiwdGeN9lsQ=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-094",
    name: "청풍떡갈비",
    category: "한식",
    address: "충청북도 제천시 금성면 청풍호로 1643",
    phone: null,
    lat: 37.0227917721,
    lng: 128.1752645045,
    kakaoUrl: "http://place.map.kakao.com/9501991",
    naverUrl: "https://map.naver.com/p/search/%EC%B2%AD%ED%92%8D%EB%96%A1%EA%B0%88%EB%B9%84%20%EC%B6%A9%EC%B2%AD%EB%B6%81%EB%8F%84%20%EC%A0%9C%EC%B2%9C%EC%8B%9C%20%EA%B8%88%EC%84%B1%EB%A9%B4%20%EC%B2%AD%ED%92%8D%ED%98%B8%EB%A1%9C%201643",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjA4GIk73vXgApWQro1ZHhFyOr2yBvzSgaFvQJ5isSZrDGYPhVsUjQY7-ZF_r-ToCD4pG2bVcPCnJGAMvj1TFJiCK0iji7e3dip3fGsFqG1Sy7JqDy0qPAiPpT_D-WcVGgXLBBud7ZmUqQIU=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-095",
    name: "하하형제두묵골",
    category: "한식",
    address: "충청북도 음성군 감곡면 중간말길 7-10",
    phone: null,
    lat: 37.1117532343,
    lng: 127.6960550311,
    kakaoUrl: "http://place.map.kakao.com/256409580",
    naverUrl: "https://map.naver.com/p/search/%ED%95%98%ED%95%98%ED%98%95%EC%A0%9C%EB%91%90%EB%AC%B5%EA%B3%A8%20%EC%B6%A9%EC%B2%AD%EB%B6%81%EB%8F%84%20%EC%9D%8C%EC%84%B1%EA%B5%B0%20%EA%B0%90%EA%B3%A1%EB%A9%B4%20%EC%A4%91%EA%B0%84%EB%A7%90%EA%B8%B8%207-10",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDmMW2gVM6GL1J_9XnjiTQXpErW-ePvoz1_wXIr2AuILJ_FTfbiGHYgDCeJtLefblPHaB5qZomKMtY4hJZQzhvwq-lDDrmqCApGgsyFZk3Xdr9Sx7otxxaUX5BMzD-fMDFc15M_FJ9ozcjyGci3Jnrs=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-096",
    name: "토담20",
    category: "한식",
    address: "충청북도 충주시 앙성면 산전장수1길 5",
    phone: null,
    lat: 37.0966594717,
    lng: 127.7898664564,
    kakaoUrl: "http://place.map.kakao.com/334948651",
    naverUrl: "https://map.naver.com/p/search/%ED%86%A0%EB%8B%B420%20%EC%B6%A9%EC%B2%AD%EB%B6%81%EB%8F%84%20%EC%B6%A9%EC%A3%BC%EC%8B%9C%20%EC%95%99%EC%84%B1%EB%A9%B4%20%EC%82%B0%EC%A0%84%EC%9E%A5%EC%88%981%EA%B8%B8%205",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDbd6HSiueNGNSfl2pwwgeZP_wm1hYyIIDSpQb2HyFu4ttKjRiAQytD_m-KNfYmUQEflM2cvmjdvq4mUDCDpay5_xtqr0NdokdfkhYzT7dTfJRaZHF2SRUUbMYAmHyzyb4emXrmUsvPIvkq0FuPBau0kQ=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-097",
    name: "갑오징어와코다리",
    category: "한식",
    address: "충청북도 음성군 삼성면 금일로 1274",
    phone: null,
    lat: 37.0419072775,
    lng: 127.4757713143,
    kakaoUrl: "http://place.map.kakao.com/852569620",
    naverUrl: "https://map.naver.com/p/search/%EA%B0%91%EC%98%A4%EC%A7%95%EC%96%B4%EC%99%80%EC%BD%94%EB%8B%A4%EB%A6%AC%20%EC%B6%A9%EC%B2%AD%EB%B6%81%EB%8F%84%20%EC%9D%8C%EC%84%B1%EA%B5%B0%20%EC%82%BC%EC%84%B1%EB%A9%B4%20%EA%B8%88%EC%9D%BC%EB%A1%9C%201274",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAeCsTiJkWSXsyoJ21bWRHEq7Hw9BF2KIWjOKgiXjFG2feuyKBaebzmxvMpA_zCH3VT3tvTlK8KQltWYk4A_DQkdasrgCQVc_3hf-65vx_csaMUv177JvRA1vhVGmp2r5ISBx2z1SnDwMj18g=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-098",
    name: "갑돌갈비",
    category: "한식",
    address: "충청북도 영동군 계산로2길 5-23 갑돌갈비",
    phone: null,
    lat: 36.173273469,
    lng: 127.7802292626,
    kakaoUrl: "http://place.map.kakao.com/9703225",
    naverUrl: "https://map.naver.com/p/search/%EA%B0%91%EB%8F%8C%EA%B0%88%EB%B9%84%20%EC%B6%A9%EC%B2%AD%EB%B6%81%EB%8F%84%20%EC%98%81%EB%8F%99%EA%B5%B0%20%EA%B3%84%EC%82%B0%EB%A1%9C2%EA%B8%B8%205-23%20%EA%B0%91%EB%8F%8C%EA%B0%88%EB%B9%84",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDgcP4aLo4ogGHCLl81odN7ZolCgjNyGXV32mLP3Z0cq3O5KLtJaG2ZnBzDiOivd3ZiyWrpiSnav93mW29ROEbrFURzwZU_C24oNrgLtgc4XNnePObpvHeZWzRGsjhHjLta6v6eeDWjasPq=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-099",
    name: "유진가든",
    category: "한식",
    address: "충청북도 충주시 양평길 6 유진가든",
    phone: null,
    lat: 37.039517496,
    lng: 127.8682638158,
    kakaoUrl: "http://place.map.kakao.com/10680733",
    naverUrl: "https://map.naver.com/p/search/%EC%9C%A0%EC%A7%84%EA%B0%80%EB%93%A0%20%EC%B6%A9%EC%B2%AD%EB%B6%81%EB%8F%84%20%EC%B6%A9%EC%A3%BC%EC%8B%9C%20%EC%96%91%ED%8F%89%EA%B8%B8%206%20%EC%9C%A0%EC%A7%84%EA%B0%80%EB%93%A0",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBCOM-rIN2AugXxLGWFPa2tTv9DrqAyERi3kIA5ALjtNIYqIEIZXf0556pSJ4Ie_r3Qkagd6FmF6yy2KUKSPg0YsgX5Nhvkfzn4GF1AeKECUYUtcbh-gwmVPcbGFyxVoiJ3phLKxei1lASfqCh1NtZrHA=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-100",
    name: "마느리막국수",
    category: "한식",
    address: "충청북도 단양군 삼봉로 79 마느리막국수",
    phone: null,
    lat: 36.9796861537,
    lng: 128.3527498522,
    kakaoUrl: "http://place.map.kakao.com/1713403843",
    naverUrl: "https://map.naver.com/p/search/%EB%A7%88%EB%8A%90%EB%A6%AC%EB%A7%89%EA%B5%AD%EC%88%98%20%EC%B6%A9%EC%B2%AD%EB%B6%81%EB%8F%84%20%EB%8B%A8%EC%96%91%EA%B5%B0%20%EC%82%BC%EB%B4%89%EB%A1%9C%2079%20%EB%A7%88%EB%8A%90%EB%A6%AC%EB%A7%89%EA%B5%AD%EC%88%98",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAFhUTS7-6vEqMjrEsdsqhaa6uFU9TOPbyY67GcoHGO3ZQcucXagSZgmpl43UoryMLCQ04xMZdTX2zhSBi4SsRsS4qFNGzCv6G1xck2yNVwRpYx60UGe-0OYMAolrYk6FxQ7UwQxKMLyeY-oME=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-101",
    name: "천매막국수 어사또왕족발보쌈",
    category: "한식",
    address: "강원특별자치도 원주시 매봉길 49",
    phone: null,
    lat: 37.3209281396,
    lng: 127.9454709566,
    kakaoUrl: "http://place.map.kakao.com/10086474",
    naverUrl: "https://map.naver.com/p/search/%EC%B2%9C%EB%A7%A4%EB%A7%89%EA%B5%AD%EC%88%98%20%EC%96%B4%EC%82%AC%EB%98%90%EC%99%95%EC%A1%B1%EB%B0%9C%EB%B3%B4%EC%8C%88%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%9B%90%EC%A3%BC%EC%8B%9C%20%EB%A7%A4%EB%B4%89%EA%B8%B8%2049",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBHO0YXifcH1-PRkZdrkmDtlqDL3lTHXAyCnAy9VhVvQduK1ZS-OfpOtBxkHE2VGw-XFBTV2bf5np8qZqugb8ooFC-9pedgLqxqq_NJrb7N40koz6pKOot9AqSW2ka-9KwqP1lQcqlWsjXuOg=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-102",
    name: "명동산골닭갈비",
    category: "한식",
    address: "강원특별자치도 춘천시 금강로62번길 7",
    phone: null,
    lat: 37.8794260201,
    lng: 127.7279631305,
    kakaoUrl: "http://place.map.kakao.com/12462859",
    naverUrl: "https://map.naver.com/p/search/%EB%AA%85%EB%8F%99%EC%82%B0%EA%B3%A8%EB%8B%AD%EA%B0%88%EB%B9%84%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%B6%98%EC%B2%9C%EC%8B%9C%20%EA%B8%88%EA%B0%95%EB%A1%9C62%EB%B2%88%EA%B8%B8%207",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDlO3WO0b08VFsQpWEFFfynB_Uf_aSP7dgq9IXpRp64J6IVCJN4uxKSCcHAgkjmzCh_pLAEmP7QyDLL_SJi8_TYApzvo-GsnbDpmWqRTbL4x9VXjZWA1poayiNP6mHQ38erx9GwWvhbl928=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-103",
    name: "방가네",
    category: "한식",
    address: "강원특별자치도 원주시 소초면 장수2로 294",
    phone: null,
    lat: 37.398081045,
    lng: 127.9835402676,
    kakaoUrl: "http://place.map.kakao.com/10399246",
    naverUrl: "https://map.naver.com/p/search/%EB%B0%A9%EA%B0%80%EB%84%A4%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%9B%90%EC%A3%BC%EC%8B%9C%20%EC%86%8C%EC%B4%88%EB%A9%B4%20%EC%9E%A5%EC%88%982%EB%A1%9C%20294",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCPOEc5P675lSMUMwV_43T71nSCzEQ_mtW9BUAuFzEtYV30s-enHlgsH7RiOdgeYkGI2b89pcNF9Nkci_9TLC3dN3qQJda4YMFdr2bVR_RFRS8LPRP-cgguuNcWvj7-bnkclynfTQchz_lcPL0=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-104",
    name: "청산회관",
    category: "한식",
    address: "강원특별자치도 평창군 진부면 진부중앙로 86-1",
    phone: null,
    lat: 37.6386946913,
    lng: 128.560303282,
    kakaoUrl: "http://place.map.kakao.com/8601941",
    naverUrl: "https://map.naver.com/p/search/%EC%B2%AD%EC%82%B0%ED%9A%8C%EA%B4%80%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%ED%8F%89%EC%B0%BD%EA%B5%B0%20%EC%A7%84%EB%B6%80%EB%A9%B4%20%EC%A7%84%EB%B6%80%EC%A4%91%EC%95%99%EB%A1%9C%2086-1",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCOCVeFPTQ4F03fjOI0mwUf1ExnEnoMf4umGeL9FPq5vnczolhXjkZh0OBPe2YWHea2wAIf3YrF9K6q-MiEid2xotJiXqBF0RLoeOfUjJY6S_onSvSTwxXmlxZl9SlYYe7vrlvZEOsHiBHdfcPN7fQd=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-105",
    name: "석장골오골계숯불구이",
    category: "한식",
    address: "강원특별자치도 양구군 양구읍 양록길23번길 16-7",
    phone: null,
    lat: 38.1082153389,
    lng: 127.9857522289,
    kakaoUrl: "http://place.map.kakao.com/15748343",
    naverUrl: "https://map.naver.com/p/search/%EC%84%9D%EC%9E%A5%EA%B3%A8%EC%98%A4%EA%B3%A8%EA%B3%84%EC%88%AF%EB%B6%88%EA%B5%AC%EC%9D%B4%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%96%91%EA%B5%AC%EA%B5%B0%20%EC%96%91%EA%B5%AC%EC%9D%8D%20%EC%96%91%EB%A1%9D%EA%B8%B823%EB%B2%88%EA%B8%B8%2016-7",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCwOi1WGgXV54_D4Pt5uDJ2aXS4L0_3qIURz9OG2tZ1ydhwobiDeFRt43tzOESWgS3VD4AzEAQiH5wcLkYlWFpbpxjY18oMxQvqcJLSJ2X42L-aRaou9zbYfO4LWgSY3CX5tvmuZhNYn3_ekSQ=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-106",
    name: "봉평메밀미가연",
    category: "한식",
    address: "강원특별자치도 평창군 봉평면 기풍로 108",
    phone: null,
    lat: 37.6120831812,
    lng: 128.3783593882,
    kakaoUrl: "http://place.map.kakao.com/7881392",
    naverUrl: "https://map.naver.com/p/search/%EB%B4%89%ED%8F%89%EB%A9%94%EB%B0%80%EB%AF%B8%EA%B0%80%EC%97%B0%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%ED%8F%89%EC%B0%BD%EA%B5%B0%20%EB%B4%89%ED%8F%89%EB%A9%B4%20%EA%B8%B0%ED%92%8D%EB%A1%9C%20108",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBhXdkAoDBXBzhFx4cYx8NKtkPUClXvTBfxWbX5C_WqXMmRzTdMpISF5whVvpnhChNtClbzogdG5Bld33WprVNEHVu_gae6HVs_AQ5CnNSIoV_KVg2Llgw_XLeJoaQZWqfF3mW-OzeKILaKpGCz4DrJmg=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-107",
    name: "천선식당",
    category: "한식",
    address: "강원특별자치도 양양군 양양읍 남대천로 13",
    phone: null,
    lat: 38.0688849367,
    lng: 128.6240065354,
    kakaoUrl: "http://place.map.kakao.com/8093510",
    naverUrl: "https://map.naver.com/p/search/%EC%B2%9C%EC%84%A0%EC%8B%9D%EB%8B%B9%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%96%91%EC%96%91%EA%B5%B0%20%EC%96%91%EC%96%91%EC%9D%8D%20%EB%82%A8%EB%8C%80%EC%B2%9C%EB%A1%9C%2013",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCt9NgEf_-GIlAYpicbxPg_yI4pAkiGzVlGbzwQaAYs4zllqY3H8kFEh0HRHxFKRURj38jGblnep8mGnHlb2zO78Cy1qAUOvImglopLoqlHPwmIVVQjbhJOSGUpCqUho0P4lNQ7rO71cEswXw=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-108",
    name: "강릉전복해물뚝배기",
    category: "한식",
    address: "강원특별자치도 강릉시 창해로 361-2 (강문동) 1층",
    phone: null,
    lat: 37.794897418,
    lng: 128.9171802111,
    kakaoUrl: "http://place.map.kakao.com/26638883",
    naverUrl: "https://map.naver.com/p/search/%EA%B0%95%EB%A6%89%EC%A0%84%EB%B3%B5%ED%95%B4%EB%AC%BC%EB%9A%9D%EB%B0%B0%EA%B8%B0%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EA%B0%95%EB%A6%89%EC%8B%9C%20%EC%B0%BD%ED%95%B4%EB%A1%9C%20361-2%20(%EA%B0%95%EB%AC%B8%EB%8F%99)%201%EC%B8%B5",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBT0oGHjOm2baiWD55DBoz-Tr9jBWE5l-sl5IMCgNg1ClAODKy4ZhSm-7wbaZieUqZ48V1VmJxVBWnxwntwiEN7-lRzBd928SgAWH8h5lfgiGC1OQ8a4DpkTi4tEhv-HPyGLtNZdLDgmczF8mYbD3jB=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-109",
    name: "대관령한우타운",
    category: "한식",
    address: "강원특별자치도 평창군 대관령면 올림픽로 38",
    phone: null,
    lat: 37.6754181304,
    lng: 128.6998618055,
    kakaoUrl: "http://place.map.kakao.com/9732079",
    naverUrl: "https://map.naver.com/p/search/%EB%8C%80%EA%B4%80%EB%A0%B9%ED%95%9C%EC%9A%B0%ED%83%80%EC%9A%B4%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%ED%8F%89%EC%B0%BD%EA%B5%B0%20%EB%8C%80%EA%B4%80%EB%A0%B9%EB%A9%B4%20%EC%98%AC%EB%A6%BC%ED%94%BD%EB%A1%9C%2038",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBHSIc7F9z_-vgRkd8OpVIUFRRfNde0IbVqjDVskQ-8vPoP1sdPwZY0OQy7UyhRJAeh0ri_tIipvobPiO-Hd0BFqo56QUKZ8-U7FeuaZV1XsuaMv3cUh9helJJjfjZON0tOrTRDlsK7KUxBnA=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-110",
    name: "대박집",
    category: "한식",
    address: "강원특별자치도 정선군 정선읍 5일장길 37-5",
    phone: null,
    lat: 37.3808375725,
    lng: 128.6644961407,
    kakaoUrl: null,
    naverUrl: "https://map.naver.com/p/search/%EB%8C%80%EB%B0%95%EC%A7%91%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%95%EC%84%A0%EA%B5%B0%20%EC%A0%95%EC%84%A0%EC%9D%8D%205%EC%9D%BC%EC%9E%A5%EA%B8%B8%2037-5",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCYwi7BlXk1k5ccsvPhY9joDgHWyvvX7lnA_CJFMHrgojNQ1ybw6aXWAsixnKVegBYhdi-9Be5SJ5SGuJRQcI_bO0e38_wzjvUrKVGiXzINIT4epGaDgsGkbQrQBxQn1qjAGJ6rIWe0-IQTUOU=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-111",
    name: "농가",
    category: "한식",
    address: "강원특별자치도 원주시 양지뜰3길 11 (반곡동)",
    phone: null,
    lat: 37.3262059878,
    lng: 127.9820425041,
    kakaoUrl: null,
    naverUrl: "https://map.naver.com/p/search/%EB%86%8D%EA%B0%80%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%9B%90%EC%A3%BC%EC%8B%9C%20%EC%96%91%EC%A7%80%EB%9C%B03%EA%B8%B8%2011%20(%EB%B0%98%EA%B3%A1%EB%8F%99)",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAASWzpgpbbD-kIPylEsQ75PLJa2mwDmTq9SqFl8k6dS6ygq1pQrp4gaH37PWlBvwCx-dcD2esGDK2bhiTbiGol5i6dd5wlQLvo4PBTfcykbNw4rr-NP5MjhGXjL8O-M7g85Gj5AeIdjcfbbw=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-112",
    name: "굴뚝촌",
    category: "한식",
    address: "강원특별자치도 동해시 삼화로 253-6 굴뚝새",
    phone: null,
    lat: 37.4744869353,
    lng: 129.0463534845,
    kakaoUrl: "http://place.map.kakao.com/8868298",
    naverUrl: "https://map.naver.com/p/search/%EA%B5%B4%EB%9A%9D%EC%B4%8C%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EB%8F%99%ED%95%B4%EC%8B%9C%20%EC%82%BC%ED%99%94%EB%A1%9C%20253-6%20%EA%B5%B4%EB%9A%9D%EC%83%88",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCJiPaqiuhK2UXqji4pdR2nj9m6jKzxx0u2w6Mor6VYP6Wx270ExdOPXQAGK7itETjZPA57aX41WhOAJyFNHRJpekzan7so25AcPR2as6wbmeGy7g30ImyffPG9u3Z-FDNU49serKKO-ybiMc-ngfY8=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-113",
    name: "입암메밀타운",
    category: "한식",
    address: "강원특별자치도 양양군 현남면 화상천로 155",
    phone: null,
    lat: 37.9246546591,
    lng: 128.7772415906,
    kakaoUrl: "http://place.map.kakao.com/9418061",
    naverUrl: "https://map.naver.com/p/search/%EC%9E%85%EC%95%94%EB%A9%94%EB%B0%80%ED%83%80%EC%9A%B4%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%96%91%EC%96%91%EA%B5%B0%20%ED%98%84%EB%82%A8%EB%A9%B4%20%ED%99%94%EC%83%81%EC%B2%9C%EB%A1%9C%20155",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBdFjiH7e2UOGecstTznZe50ywuRMxy8QpE4B1tTqV4T5Is1wS1B6Wx6LSEAj-V0SJM-P2Db3mNkgpnklgb7ViiOZwvSBhtTwQbi-kOK1OKuxA6Hk6rDcXFUER8eOFTzKqL2boZ4htREdnfxg=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-114",
    name: "산야",
    category: "한식",
    address: "강원특별자치도 동해시 임항로 36 승우4차아파트",
    phone: null,
    lat: 37.5383224115,
    lng: 129.1061239407,
    kakaoUrl: null,
    naverUrl: "https://map.naver.com/p/search/%EC%82%B0%EC%95%BC%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EB%8F%99%ED%95%B4%EC%8B%9C%20%EC%9E%84%ED%95%AD%EB%A1%9C%2036%20%EC%8A%B9%EC%9A%B04%EC%B0%A8%EC%95%84%ED%8C%8C%ED%8A%B8",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-115",
    name: "옛뜰",
    category: "한식",
    address: "강원특별자치도 양양군 손양면 동명로 289",
    phone: null,
    lat: 38.0881971675,
    lng: 128.6541587573,
    kakaoUrl: "http://place.map.kakao.com/11183614",
    naverUrl: "https://map.naver.com/p/search/%EC%98%9B%EB%9C%B0%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%96%91%EC%96%91%EA%B5%B0%20%EC%86%90%EC%96%91%EB%A9%B4%20%EB%8F%99%EB%AA%85%EB%A1%9C%20289",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBQG8X5UHi-rW4iiOrvR-nym52IU_pugouPWu5NGQRttpowSYImmv_pJj6J115-n3bmTJqxs46AWLvs72fNRUtK8cD655OoHf23dnrx74Q2toSZ2KBJw7yji-yLNwHjoJLpEjaSPC4xVSQK4_I=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-116",
    name: "성진회관",
    category: "한식",
    address: "강원특별자치도 고성군 거진읍 거탄진로 99",
    phone: null,
    lat: 38.4440962438,
    lng: 128.4533547709,
    kakaoUrl: "http://place.map.kakao.com/21400557",
    naverUrl: "https://map.naver.com/p/search/%EC%84%B1%EC%A7%84%ED%9A%8C%EA%B4%80%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EA%B3%A0%EC%84%B1%EA%B5%B0%20%EA%B1%B0%EC%A7%84%EC%9D%8D%20%EA%B1%B0%ED%83%84%EC%A7%84%EB%A1%9C%2099",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBinmMdKBVEu-s_ILANOVSAoEBizs32h4GslnlWd3eXpDCF72NdSccaZs31cO7iYE8ffv3xrhmezlrkgkVns7arjF8M2K0eqMzXr1NjSTgLFfcvdKwrefzN1TWO7R9Bhbm8cPwoaxAtMuhYqeM=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-117",
    name: "삼척횟집",
    category: "한식",
    address: "강원특별자치도 삼척시 새천년도로 125",
    phone: null,
    lat: 37.4422351648,
    lng: 129.1921858597,
    kakaoUrl: "http://place.map.kakao.com/19530668",
    naverUrl: "https://map.naver.com/p/search/%EC%82%BC%EC%B2%99%ED%9A%9F%EC%A7%91%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%82%BC%EC%B2%99%EC%8B%9C%20%EC%83%88%EC%B2%9C%EB%85%84%EB%8F%84%EB%A1%9C%20125",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBkYRZzb22vy1HvsxNiLkp2Z0UNDasKsfaQ7w-dv-ZUV_aMLir2BoXAJ6BAqu_egxZ7UunSwnE5yO0msTJaYaEppycFKtLpbeCpmixIdcZM2h7Ehu-gBcHwJjT2FflUnukQaNrmBA52AIebmA=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-118",
    name: "고향집",
    category: "한식",
    address: "강원특별자치도 인제군 조침령로 115",
    phone: null,
    lat: 37.9456602339,
    lng: 128.3290648523,
    kakaoUrl: null,
    naverUrl: "https://map.naver.com/p/search/%EA%B3%A0%ED%96%A5%EC%A7%91%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%9D%B8%EC%A0%9C%EA%B5%B0%20%EC%A1%B0%EC%B9%A8%EB%A0%B9%EB%A1%9C%20115",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCDbFVTzQMs2Ch08DyIz_sZvamlUxjcATJwMFhXmrvuL4krK3qYer31ICF2IhdPsyVUhtE3zLargVV7iZTUybBqwGkWkagPdSCwxFLFyYk_CdME0KyIyI3PrVIHYod43qJB5fFs61kdYQW6bR4=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-119",
    name: "하조맛식당",
    category: "한식",
    address: "강원특별자치도 양양군 하륜길 8",
    phone: null,
    lat: 38.0200203383,
    lng: 128.7241545392,
    kakaoUrl: "http://place.map.kakao.com/18435212",
    naverUrl: "https://map.naver.com/p/search/%ED%95%98%EC%A1%B0%EB%A7%9B%EC%8B%9D%EB%8B%B9%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%96%91%EC%96%91%EA%B5%B0%20%ED%95%98%EB%A5%9C%EA%B8%B8%208",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCF3tZP5WcCCstTtEdHB0zDh2MkwzrNtwYR90U-oRr118T43kdhd-AieBUVEANvO0C8ZhsuMd-A2jBrVg8e4cBdQTPu2thUwem7QATYlMX8FqHaTubamku31ZOo-lNBoQiNOkG57SakwhIAQsrUoT_8bg=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-120",
    name: "들꽃가든",
    category: "한식",
    address: "강원특별자치도 원주시 월송석화로 488 1층",
    phone: null,
    lat: 37.4061719168,
    lng: 127.8416528468,
    kakaoUrl: null,
    naverUrl: "https://map.naver.com/p/search/%EB%93%A4%EA%BD%83%EA%B0%80%EB%93%A0%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%9B%90%EC%A3%BC%EC%8B%9C%20%EC%9B%94%EC%86%A1%EC%84%9D%ED%99%94%EB%A1%9C%20488%201%EC%B8%B5",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCY4cfAbaq-jfUI3f-kBGaT5GU9KYvrziLZz_2K5kc3gnbeuF6LThNVl00G-jPYEWGFzPI7rn8YNT_p6ZiMGVAq4j_hZ1u8O_DAn-YnjgdRwGlYyvzWyYcSd0tR9cp8iFf3SAajHjt_7eB8VmkvYoyYHg=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-121",
    name: "명가춘천막국수",
    category: "한식",
    address: "강원특별자치도 춘천시 당간지주길 76 (근화동)",
    phone: null,
    lat: 37.8923022242,
    lng: 127.7238964519,
    kakaoUrl: "http://place.map.kakao.com/8549621",
    naverUrl: "https://map.naver.com/p/search/%EB%AA%85%EA%B0%80%EC%B6%98%EC%B2%9C%EB%A7%89%EA%B5%AD%EC%88%98%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%B6%98%EC%B2%9C%EC%8B%9C%20%EB%8B%B9%EA%B0%84%EC%A7%80%EC%A3%BC%EA%B8%B8%2076%20(%EA%B7%BC%ED%99%94%EB%8F%99)",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCVaGL94cO6Qa7xH246C3Qhzbadpq0M0QNQHaQ18fJvCBZ8G2AVybXJjgcM5rVHSmCGyoiT2IC9K3Kaz2ZkfA0tOwdWUz2EekDz5uzfwpjqYskoO09FR-tpyixJECZroWywbkF3DKwpTXBOKw=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-122",
    name: "부림해물",
    category: "한식",
    address: "강원특별자치도 삼척시 동해대로 3935 (정상동)",
    phone: null,
    lat: 37.4345525118,
    lng: 129.181731476,
    kakaoUrl: "http://place.map.kakao.com/16911885",
    naverUrl: "https://map.naver.com/p/search/%EB%B6%80%EB%A6%BC%ED%95%B4%EB%AC%BC%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%82%BC%EC%B2%99%EC%8B%9C%20%EB%8F%99%ED%95%B4%EB%8C%80%EB%A1%9C%203935%20(%EC%A0%95%EC%83%81%EB%8F%99)",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAUsNh_yTWuEonB3wkegb7ds2tONN_SBQdDE-h6AliVE8OlHtQGcNXpTnxZfYIr5IfRt1xHyUI_xaUG2HdK6FNgZFhbvWXhn_xIAhcur3pjPOJYeFqFEenPGuZ1ncoKaTh83EI2308M8ijmEKGiGhRK3A=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-123",
    name: "88생선구이",
    category: "한식",
    address: "강원특별자치도 속초시 중앙부두길 71",
    phone: null,
    lat: 38.2038158437,
    lng: 128.5919830153,
    kakaoUrl: "http://place.map.kakao.com/25622898",
    naverUrl: "https://map.naver.com/p/search/88%EC%83%9D%EC%84%A0%EA%B5%AC%EC%9D%B4%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%86%8D%EC%B4%88%EC%8B%9C%20%EC%A4%91%EC%95%99%EB%B6%80%EB%91%90%EA%B8%B8%2071",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCuijxcOkah5I-7XgamnIc7ykP2XLZivegMwvWIbN0Si4W_zB4Jcn6STMUyAOTDBuU2jrqnmlRAyJvcdQyqnpq57WC_uCjXzSemr3aMsOeEURZ0_2Zhm0biydPos-2_SnRWgaVs4tZ0OwxkIySRCgGDXw=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-124",
    name: "까치장칼국수",
    category: "한식",
    address: "강원특별자치도 강릉시 강릉대로313번길 62",
    phone: null,
    lat: 37.7686363338,
    lng: 128.9052237686,
    kakaoUrl: "http://place.map.kakao.com/8240944",
    naverUrl: "https://map.naver.com/p/search/%EA%B9%8C%EC%B9%98%EC%9E%A5%EC%B9%BC%EA%B5%AD%EC%88%98%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EA%B0%95%EB%A6%89%EC%8B%9C%20%EA%B0%95%EB%A6%89%EB%8C%80%EB%A1%9C313%EB%B2%88%EA%B8%B8%2062",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD7X4HNO9-YcH0JIYySihtOm0ndQ3A2nwkoxJXBbzk0ZUczbgfJ7UMB4ELqBE5Dk2pgtC1hFgyIIVYGo8ucKuogHXZC8-9oObfcQs1fIG20woIcg4j_IZUI1rXMjujJNVeABLyO5VDBxx1OrR5dN6FBWg=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-125",
    name: "택지골수제생갈비",
    category: "한식",
    address: "강원특별자치도 강릉시 하슬라로232번길 1",
    phone: null,
    lat: 37.7706827534,
    lng: 128.8761735453,
    kakaoUrl: "http://place.map.kakao.com/10906027",
    naverUrl: "https://map.naver.com/p/search/%ED%83%9D%EC%A7%80%EA%B3%A8%EC%88%98%EC%A0%9C%EC%83%9D%EA%B0%88%EB%B9%84%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EA%B0%95%EB%A6%89%EC%8B%9C%20%ED%95%98%EC%8A%AC%EB%9D%BC%EB%A1%9C232%EB%B2%88%EA%B8%B8%201",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBSctZRDef0nS8E37Wsfjtg-0Jhll1Byjd2KtjbaqvdgmbJY2GXOwNBWAGpHy_dArgbq5Psh95zTby7m3g-RC5SW7VGvEn-HcQ3CYeSGgLTgIn9Aj91lgdNqWKtyuKhid0QzfiCpqafF6pcQg=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-126",
    name: "해녀의 부엌",
    category: "한식",
    address: "제주특별자치도 제주시 구좌읍 해맞이해안로 2265",
    phone: null,
    lat: 33.4978173678,
    lng: 126.912306105,
    kakaoUrl: "http://place.map.kakao.com/383811140",
    naverUrl: "https://map.naver.com/p/search/%ED%95%B4%EB%85%80%EC%9D%98%20%EB%B6%80%EC%97%8C%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EA%B5%AC%EC%A2%8C%EC%9D%8D%20%ED%95%B4%EB%A7%9E%EC%9D%B4%ED%95%B4%EC%95%88%EB%A1%9C%202265",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBDxI0IXYmMyzDUBAA6NBzOtbbUwavJFdhowjZI2NgQT9xW0XVPZNTtdMlirzWLr4GJgzSSmrW0FrNZPzsBkyzJWmjc4VDKMKmEXbq5BxbcVbzirRzXimVncplYC2LylhbeqYuecn5RkSaJXUReh6KM=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-127",
    name: "소금바치순이네",
    category: "한식",
    address: "제주특별자치도 제주시 구좌읍 해맞이해안로 2196",
    phone: null,
    lat: 33.5036972787,
    lng: 126.9126503843,
    kakaoUrl: "http://place.map.kakao.com/26915572",
    naverUrl: "https://map.naver.com/p/search/%EC%86%8C%EA%B8%88%EB%B0%94%EC%B9%98%EC%88%9C%EC%9D%B4%EB%84%A4%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EA%B5%AC%EC%A2%8C%EC%9D%8D%20%ED%95%B4%EB%A7%9E%EC%9D%B4%ED%95%B4%EC%95%88%EB%A1%9C%202196",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDlVjDBCcT9ZFhNte-jqtiWb4wwtL3pNTELyCLXMS-0hiukb9Vf8p_cnr8UK7VMuP5pej3ziVZl6MCsm0KZSCBmY1QDs2Daq_sIIWT4tYr8Rfg7d4uYDd8ObZNxXUpKrm5CVwotQ14BdApQ=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-128",
    name: "낭뜰에쉼팡",
    category: "한식",
    address: "제주특별자치도 제주시 조천읍 남조로 2343",
    phone: null,
    lat: 33.4735270537,
    lng: 126.6571482427,
    kakaoUrl: "http://place.map.kakao.com/8874256",
    naverUrl: "https://map.naver.com/p/search/%EB%82%AD%EB%9C%B0%EC%97%90%EC%89%BC%ED%8C%A1%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EC%A1%B0%EC%B2%9C%EC%9D%8D%20%EB%82%A8%EC%A1%B0%EB%A1%9C%202343",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAn4NVyd9UKogYvE2PA31vu5GtoaQEFNTDNVfHAiWSdkAoOY_-WlXkmxKv6gn06nVP67kxIgRstyGk2Ca99kWFeYSBCWthtPbDDbavNqwyTW7kaGXvEvFJ1hmy2WF7sLxjUQmQzmntiZcGG72IvON7p=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-129",
    name: "숙성도 제주본점",
    category: "한식",
    address: "제주특별자치도 제주시 제원길 30 (연동) 2, 3층",
    phone: null,
    lat: 33.4873145093,
    lng: 126.4888958794,
    kakaoUrl: "http://place.map.kakao.com/316010726",
    naverUrl: "https://map.naver.com/p/search/%EC%88%99%EC%84%B1%EB%8F%84%20%EC%A0%9C%EC%A3%BC%EB%B3%B8%EC%A0%90%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EC%A0%9C%EC%9B%90%EA%B8%B8%2030%20(%EC%97%B0%EB%8F%99)%202%2C%203%EC%B8%B5",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDmhEDxz_Z84MV8NfVivedSP8conph_HbxPVdtwkEXGpleE0KZT_Ms7WX-eWD6LdDT6KmhfaVkHO3fNGCutBtskWEqYORutnaErhbvhnswafeby_uy5ng9zS6TOiFkUwR0fB24Tx528MDIl8Q=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-130",
    name: "당케올레국수",
    category: "한식",
    address: "제주특별자치도 서귀포시 표선면 민속해안로 584",
    phone: null,
    lat: 33.3253241907,
    lng: 126.843346594,
    kakaoUrl: "http://place.map.kakao.com/25589899",
    naverUrl: "https://map.naver.com/p/search/%EB%8B%B9%EC%BC%80%EC%98%AC%EB%A0%88%EA%B5%AD%EC%88%98%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%84%9C%EA%B7%80%ED%8F%AC%EC%8B%9C%20%ED%91%9C%EC%84%A0%EB%A9%B4%20%EB%AF%BC%EC%86%8D%ED%95%B4%EC%95%88%EB%A1%9C%20584",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjA3eD9rlMNb-6Uc_CTIh-aJMIdjZNIqh7VWVlZ83QRh5AdMTXDffSxyutJU78xu7Mg6fnPPySTj3HZOjetSRGTX9VwCXIz0La3dTN_p0Pgw6Qh5p6UCIllWRpJq-hOBd2D3O0MXwcIC7yFc=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-131",
    name: "연화키친",
    category: "한식",
    address: "제주특별자치도 제주시 상가로 51",
    phone: null,
    lat: 33.4489831231,
    lng: 126.3439926768,
    kakaoUrl: "http://place.map.kakao.com/26909406",
    naverUrl: "https://map.naver.com/p/search/%EC%97%B0%ED%99%94%ED%82%A4%EC%B9%9C%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EC%83%81%EA%B0%80%EB%A1%9C%2051",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDR2N5A_1oQfitbSAR01b0n4r3tPKNvWW2RaiMsineDmZA11W8o9W19DsniHxPBjkDcXYUVDt_uuFY3H56nMRH3lYrvceQsM7egQkB-nnlixY3SW9xLui57k3ujL7qpoN-y-vrM4RgMus-Zhg=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-132",
    name: "미스칠",
    category: "한식",
    address: "제주특별자치도 제주시 일주서로 7831 (연동)",
    phone: null,
    lat: 33.4939470207,
    lng: 126.4833684316,
    kakaoUrl: "http://place.map.kakao.com/182376522",
    naverUrl: "https://map.naver.com/p/search/%EB%AF%B8%EC%8A%A4%EC%B9%A0%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EC%9D%BC%EC%A3%BC%EC%84%9C%EB%A1%9C%207831%20(%EC%97%B0%EB%8F%99)",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBfmtHLPjWU6b_hSK-8umJVqwnVdwTjG0nrmmZI-p8zs6BgdEU2GiWPY1xfphwWi0kqucKgY5pkzh5rFLxLWvVClmQoXXmpYbMdj52NgG5hlE2fzXR7b9syiNXhnnkZ3VWp1ygrMrdFxz9TvjR1Fg4sBw=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-133",
    name: "제주광해 애월점",
    category: "한식",
    address: "제주특별자치도 제주시 애월읍 애월해안로 867",
    phone: null,
    lat: 33.4877767845,
    lng: 126.3904433191,
    kakaoUrl: null,
    naverUrl: "https://map.naver.com/p/search/%EC%A0%9C%EC%A3%BC%EA%B4%91%ED%95%B4%20%EC%95%A0%EC%9B%94%EC%A0%90%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EC%95%A0%EC%9B%94%EC%9D%8D%20%EC%95%A0%EC%9B%94%ED%95%B4%EC%95%88%EB%A1%9C%20867",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCH3Xbqyv-TU2JHvjzpCQ30xj823gHQxTyH4KOsx3s2pUHBh6PSWL2Tp8cDtaKaZSl-HLmq2avzmOxvGBFaDoCsP2Z8jzR_YdZLyo4RRWbBeP9E21abEc9v1Og8Xbkr3zWhF--4tg5JsXe2fA=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-134",
    name: "협재해녀의집",
    category: "한식",
    address: "제주특별자치도 제주시 한림읍 협재3길 19",
    phone: null,
    lat: 33.3988648733,
    lng: 126.2439108383,
    kakaoUrl: "http://place.map.kakao.com/20198888",
    naverUrl: "https://map.naver.com/p/search/%ED%98%91%EC%9E%AC%ED%95%B4%EB%85%80%EC%9D%98%EC%A7%91%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%ED%95%9C%EB%A6%BC%EC%9D%8D%20%ED%98%91%EC%9E%AC3%EA%B8%B8%2019",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBRL2X5nokBddNplH4oX1slNvwWgDIoJ9HsmInLfV527s9rfPToscFKMA6xGjX39s7VL1k6pWI_CSbKx5xKKTw0MZrPqbGiIL-1HG5HoURRvaeJJz9ZrA4wxOsE60bq7swome95vh5DKewp6A=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-135",
    name: "해녀잠수촌",
    category: "한식",
    address: "제주특별자치도 제주시 서해안로 498 (용담삼동)",
    phone: null,
    lat: 33.5192638011,
    lng: 126.4921643149,
    kakaoUrl: "http://place.map.kakao.com/9648399",
    naverUrl: "https://map.naver.com/p/search/%ED%95%B4%EB%85%80%EC%9E%A0%EC%88%98%EC%B4%8C%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EC%84%9C%ED%95%B4%EC%95%88%EB%A1%9C%20498%20(%EC%9A%A9%EB%8B%B4%EC%82%BC%EB%8F%99)",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDNMavZDwvB1ch5SXotUPVQcr-rheoXOB4fiPWqHQwOSl6Y_aoxUq3X7NtwEoWuPxcpmBw1hfTpi7bx1wfWOPjUSiyFLfWAHM517CWSTWtuLKL0q3qgkzYDlhdLMmEa7S4YnETBBLCSOJiM3A4ty7SfUg=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-136",
    name: "만덕이네",
    category: "한식",
    address: "제주특별자치도 서귀포시 표선면 서성일로 16",
    phone: null,
    lat: 33.3933743337,
    lng: 126.8011014756,
    kakaoUrl: "http://place.map.kakao.com/9982608",
    naverUrl: "https://map.naver.com/p/search/%EB%A7%8C%EB%8D%95%EC%9D%B4%EB%84%A4%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%84%9C%EA%B7%80%ED%8F%AC%EC%8B%9C%20%ED%91%9C%EC%84%A0%EB%A9%B4%20%EC%84%9C%EC%84%B1%EC%9D%BC%EB%A1%9C%2016",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjC0jPXBrTgwacikefuLKgzqxjINAiYs8J2TMryf3-O9peu1wXl7m3nwcNKsImigcbl8nZn_FfIXulrWK9NGfZc4cZ89jnG3oYwWzdFD0qvoIrG3pkSlmsXBKrxgRqhSN2AGb6NnLk0Wi5RPeg=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-137",
    name: "대기정",
    category: "한식",
    address: "제주특별자치도 서귀포시 이어도로 41 (대포동)",
    phone: null,
    lat: 33.2403019678,
    lng: 126.4285622273,
    kakaoUrl: "http://place.map.kakao.com/15383715",
    naverUrl: "https://map.naver.com/p/search/%EB%8C%80%EA%B8%B0%EC%A0%95%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%84%9C%EA%B7%80%ED%8F%AC%EC%8B%9C%20%EC%9D%B4%EC%96%B4%EB%8F%84%EB%A1%9C%2041%20(%EB%8C%80%ED%8F%AC%EB%8F%99)",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBGH3xhyrFIjtPaZkPfsLrV21lA6o7ceUGPC8X1-H_slu6O_PGAsnrD3ePsoEFmqw3FJwTASehYX6SD8DZt8yaSN6ZyYskYu6OV0yc-QM1prna6fqJU7TjcvoFX-zUPqphut7LDRk0nd4JDSvx4tvwK=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-138",
    name: "복자씨연탄구이",
    category: "한식",
    address: "제주특별자치도 서귀포시 성산읍 해맞이해안로 2764",
    phone: null,
    lat: 33.4692039841,
    lng: 126.9197672298,
    kakaoUrl: "http://place.map.kakao.com/18678487",
    naverUrl: "https://map.naver.com/p/search/%EB%B3%B5%EC%9E%90%EC%94%A8%EC%97%B0%ED%83%84%EA%B5%AC%EC%9D%B4%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%84%9C%EA%B7%80%ED%8F%AC%EC%8B%9C%20%EC%84%B1%EC%82%B0%EC%9D%8D%20%ED%95%B4%EB%A7%9E%EC%9D%B4%ED%95%B4%EC%95%88%EB%A1%9C%202764",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDNmQrf5KkUD1p0p-zy4EMRsny0YEkOArcJDRspIHurX51OWBdpZK4odwPCGDCAhckymQiIDAO6qKQOJNShvp_0ieN5K0DPzk8E80CqfdVkdlmQgdwPLvOvil_hiTZ7Jcf_PNXN9ocwtZoWIA=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-139",
    name: "경미네집",
    category: "한식",
    address: "제주특별자치도 서귀포시 성산읍 일출로 259",
    phone: null,
    lat: 33.4612828593,
    lng: 126.9334967787,
    kakaoUrl: "http://place.map.kakao.com/21931852",
    naverUrl: "https://map.naver.com/p/search/%EA%B2%BD%EB%AF%B8%EB%84%A4%EC%A7%91%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%84%9C%EA%B7%80%ED%8F%AC%EC%8B%9C%20%EC%84%B1%EC%82%B0%EC%9D%8D%20%EC%9D%BC%EC%B6%9C%EB%A1%9C%20259",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDjPG7fSRciINYSEfaKLNQMKujPaOTKxY7VPqDPZ1SqFKyxDMkA3L9XEVq9OoIopxchA-6aDgOM4mTs_efJ8NshIqkDgljSGkUHSfu1ncofaOC20_naJyMnazV06chpaj5OyWIV3ad9_D8oHQ=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-140",
    name: "오전열한시",
    category: "한식",
    address: "제주특별자치도 서귀포시 상예로 248",
    phone: null,
    lat: 33.2667762829,
    lng: 126.3942757212,
    kakaoUrl: "http://place.map.kakao.com/1489783324",
    naverUrl: "https://map.naver.com/p/search/%EC%98%A4%EC%A0%84%EC%97%B4%ED%95%9C%EC%8B%9C%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%84%9C%EA%B7%80%ED%8F%AC%EC%8B%9C%20%EC%83%81%EC%98%88%EB%A1%9C%20248",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDKKbm2iIeZrLwpXtO6qZyBhfrlvGaBj1KAb7onQxPLh7wBtKz-QGjLsrNkJ3X9zmqzVfI8RnOD4IAjs5EiJ76uaB6QIOkNqnfL3A_fnfsXML3MyyLZtvvpceseqllEJYXZY7lC-yQTYjLHTg=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-141",
    name: "중문칠돈가",
    category: "한식",
    address: "제주특별자치도 서귀포시 중문관광로 8 (색달동)",
    phone: null,
    lat: 33.2574915152,
    lng: 126.4144741763,
    kakaoUrl: "http://place.map.kakao.com/1258744113",
    naverUrl: "https://map.naver.com/p/search/%EC%A4%91%EB%AC%B8%EC%B9%A0%EB%8F%88%EA%B0%80%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%84%9C%EA%B7%80%ED%8F%AC%EC%8B%9C%20%EC%A4%91%EB%AC%B8%EA%B4%80%EA%B4%91%EB%A1%9C%208%20(%EC%83%89%EB%8B%AC%EB%8F%99)",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-142",
    name: "가람돌솥밥",
    category: "한식",
    address: "제주특별자치도 서귀포시 중문관광로 332 (대포동)",
    phone: null,
    lat: 33.2496926417,
    lng: 126.4313090015,
    kakaoUrl: "http://place.map.kakao.com/10954053",
    naverUrl: "https://map.naver.com/p/search/%EA%B0%80%EB%9E%8C%EB%8F%8C%EC%86%A5%EB%B0%A5%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%84%9C%EA%B7%80%ED%8F%AC%EC%8B%9C%20%EC%A4%91%EB%AC%B8%EA%B4%80%EA%B4%91%EB%A1%9C%20332%20(%EB%8C%80%ED%8F%AC%EB%8F%99)",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjB7pAQh0oFyFAY0zDG_RVHxSj-OVuP96ylq-n6GSCjLkBF3HG1Nf_2CSahMMUIsczHEs0UGi4otXiYrte7YOMWhkO3I_ZFCtbw7J--AS6Yt5_FlOIelOSPtFq40Tym5bnIYVoziNydjq1Adbd_BO5juuA=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-143",
    name: "바움하우스",
    category: "한식",
    address: "제주특별자치도 제주시 서해안로 448 1층",
    phone: null,
    lat: 33.5177194543,
    lng: 126.4875064221,
    kakaoUrl: "http://place.map.kakao.com/2073218507",
    naverUrl: "https://map.naver.com/p/search/%EB%B0%94%EC%9B%80%ED%95%98%EC%9A%B0%EC%8A%A4%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EC%84%9C%ED%95%B4%EC%95%88%EB%A1%9C%20448%201%EC%B8%B5",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCW9wq7NN9ishvlOvDJYSi3SbJcMOhRXZ_VxZAzA1DaD8KQfGPkCiVySRvelfTzO6VayJV-yGS5wl3i7t0U4F0DZfbWFvRFCnKIMhj57awOoFaW6UVX0MHSO47p1sGpFdCMwml0LfV-U31B=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-144",
    name: "제주명가두루치기",
    category: "한식",
    address: "제주특별자치도 서귀포시 태평로 495",
    phone: null,
    lat: 33.249605972,
    lng: 126.5710330019,
    kakaoUrl: null,
    naverUrl: "https://map.naver.com/p/search/%EC%A0%9C%EC%A3%BC%EB%AA%85%EA%B0%80%EB%91%90%EB%A3%A8%EC%B9%98%EA%B8%B0%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%84%9C%EA%B7%80%ED%8F%AC%EC%8B%9C%20%ED%83%9C%ED%8F%89%EB%A1%9C%20495",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjA6WJ0Dip8tKV4bLlHUA-MCM3d751t_oOI02Xdv_gKnI7CQm4gwFyniPbUzk-h2LXYTlg1DZ-my2cS5slByPUoZ82OjUC0Ggyb-7j5g5HLoHpYZ13eFkWJEyoJ5egEZ9B8YDsfcXPDU_haDdg=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-145",
    name: "자연과사람들 밀면",
    category: "한식",
    address: "제주특별자치도 제주시 남조로 2185",
    phone: null,
    lat: 33.4604841192,
    lng: 126.6613759501,
    kakaoUrl: "http://place.map.kakao.com/216689403",
    naverUrl: "https://map.naver.com/p/search/%EC%9E%90%EC%97%B0%EA%B3%BC%EC%82%AC%EB%9E%8C%EB%93%A4%20%EB%B0%80%EB%A9%B4%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EB%82%A8%EC%A1%B0%EB%A1%9C%202185",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBpzP-p39wuWfN2zsCrXVYBjbgzob17AmlaFvdmdJcQ8LNvXKFpNjQx8MaodLslB2VLviB5oZ2XqWoxp734WvTrJRMifqjdwfOcX3NLjVl6VkC4NBlkCPl8a5mDxMNcc3JO8wOs4o4Dl2-ZHg=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-146",
    name: "흑본오겹 함덕점",
    category: "한식",
    address: "제주특별자치도 제주시 신북로 454",
    phone: null,
    lat: 33.5436693167,
    lng: 126.6587242813,
    kakaoUrl: "http://place.map.kakao.com/1317601096",
    naverUrl: "https://map.naver.com/p/search/%ED%9D%91%EB%B3%B8%EC%98%A4%EA%B2%B9%20%ED%95%A8%EB%8D%95%EC%A0%90%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EC%8B%A0%EB%B6%81%EB%A1%9C%20454",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDCVnBoCEqk9gztpUYK2IhHPj5kK5i6ywjyfZZq-1fJARENIF1t8qeNkkVsRLzMcadtR1pitrMu0QFrQpGqJqgf_0_NluATQR3G0cdfk4P-lebZg0fqkMVJFfqDP9xXr6oCDUf63B29ZbuINA=s4800-w716",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-147",
    name: "흑돼지해물삼합",
    category: "한식",
    address: "제주특별자치도 서귀포시 태평로482번길 50",
    phone: null,
    lat: 33.2456869486,
    lng: 126.5703303734,
    kakaoUrl: "http://place.map.kakao.com/469585269",
    naverUrl: "https://map.naver.com/p/search/%ED%9D%91%EB%8F%BC%EC%A7%80%ED%95%B4%EB%AC%BC%EC%82%BC%ED%95%A9%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%84%9C%EA%B7%80%ED%8F%AC%EC%8B%9C%20%ED%83%9C%ED%8F%89%EB%A1%9C482%EB%B2%88%EA%B8%B8%2050",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBVHaTL16LUbzJm46z-tNlh21b-otuYVwEgW9dJWJU2l4yOyIhr5L0zfZIE64GHHPstGGnRc3kJs6qn_ZXdPYUfkf5fQqYohq9P5N6E77OgR8wIWOLOw0ModYPay4UhwRoZhaQoxBolxn0y6A=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-148",
    name: "성읍칠십리식당",
    category: "한식",
    address: "제주특별자치도 서귀포시 표선면 성읍정의현로 74",
    phone: null,
    lat: 33.3893025655,
    lng: 126.8013682122,
    kakaoUrl: "http://place.map.kakao.com/18653628",
    naverUrl: "https://map.naver.com/p/search/%EC%84%B1%EC%9D%8D%EC%B9%A0%EC%8B%AD%EB%A6%AC%EC%8B%9D%EB%8B%B9%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%84%9C%EA%B7%80%ED%8F%AC%EC%8B%9C%20%ED%91%9C%EC%84%A0%EB%A9%B4%20%EC%84%B1%EC%9D%8D%EC%A0%95%EC%9D%98%ED%98%84%EB%A1%9C%2074",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBGv_Ni6uZlRrH9D89PNoeAMLBkkf4erTV1LYfFqLbcHQU6m0yH89zMDwhyFCrg6e0MNszQQACZ3ybvuwrHhw1a3ZGej9hlHT6KQ26YjidAzWjAY0KUIT88ZZkY8GsKcPlJi9GHm9UmcHFCDQ=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-149",
    name: "한길정",
    category: "한식",
    address: "제주특별자치도 서귀포시 중산간동로 8128-6",
    phone: null,
    lat: 33.2639818043,
    lng: 126.5484040845,
    kakaoUrl: "http://place.map.kakao.com/9574093",
    naverUrl: "https://map.naver.com/p/search/%ED%95%9C%EA%B8%B8%EC%A0%95%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%84%9C%EA%B7%80%ED%8F%AC%EC%8B%9C%20%EC%A4%91%EC%82%B0%EA%B0%84%EB%8F%99%EB%A1%9C%208128-6",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAfMGmgwWRCvQDaTk4j02zOcvKdwoiuK60DjiFeBtsgcU8RvfJX0RsQPJbdy0KvNUTQMkTk8x_EjryvsSLli7Nz9UBdFSix6lGqosKsF8S5iFyIOkfPvTjpEJio9dE5BZ6SsMJIsC7uNYIn=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "tap-150",
    name: "연미정",
    category: "한식",
    address: "제주특별자치도 제주시 세평항로 14",
    phone: null,
    lat: 33.5246662305,
    lng: 126.853854999,
    kakaoUrl: "http://place.map.kakao.com/18352760",
    naverUrl: "https://map.naver.com/p/search/%EC%97%B0%EB%AF%B8%EC%A0%95%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EC%84%B8%ED%8F%89%ED%95%AD%EB%A1%9C%2014",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCB0c9wA6bhyXoJYlmNMwQKiC5umHsynog017Tm7AvcHLhYJBapzdcJgo4MkQOGNGxSw0qzeXSXmtQfaUsDDBQJ4ercHTQTDNZQtCyDMGfpSzwxLLl1nx44-1THFFOKDfQRe6V2Ui9quzX-qZI=s4800-w800",
    certification: "한국관광공사 등록 음식점",
    recommendNote: "한국관광공사 국문 관광정보 서비스(TourAPI)에 등록된 음식점입니다.",
    youtubers: [
    ]
  },
  {
    id: "chk-001",
    name: "행복한두부",
    category: "한식",
    address: "강원특별자치도 춘천시 둥지길 4",
    phone: "033-255-7710",
    lat: 37.8747251672646,
    lng: 127.735375471645,
    kakaoUrl: "http://place.map.kakao.com/16827324",
    naverUrl: "https://map.naver.com/p/search/%ED%96%89%EB%B3%B5%ED%95%9C%EB%91%90%EB%B6%80%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%B6%98%EC%B2%9C%EC%8B%9C%20%EB%91%A5%EC%A7%80%EA%B8%B8%204",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDt7emdWyfx5JaRfsNRM2Qu2M08zVNn_MgWs92pBG6DciThn8baGyFpg9MVQ04pFP54kzpGQIMS9oOZYMTJKmuVU0B85JU1LyxZwUcPGpcPTCkaKqQXOhtPXpNimX6c-44oM8veC46YBZVIaetUYd7TgA=s4800-w800",
    certification: "착한가격업소(행정안전부)",
    recommendNote: "착한가격업소로 지정된 곳, 대표메뉴 두부찌개 8,000원",
    youtubers: [
    ]
  },
  {
    id: "chk-002",
    name: "형제칼국수",
    category: "한식",
    address: "강원특별자치도 강릉시 강릉대로204번길 2",
    phone: "033-746-8910",
    lat: 37.757879615605844,
    lng: 128.89309445092806,
    kakaoUrl: "http://place.map.kakao.com/13131970",
    naverUrl: "https://map.naver.com/p/search/%ED%98%95%EC%A0%9C%EC%B9%BC%EA%B5%AD%EC%88%98%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EA%B0%95%EB%A6%89%EC%8B%9C%20%EA%B0%95%EB%A6%89%EB%8C%80%EB%A1%9C204%EB%B2%88%EA%B8%B8%202",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDOkapLFte6nYeQtdhwrT5nhClsJKRshc3yhWVjxezIWYSZ0qc4qgIv7yupZjPQSgKuxVjR_F9roq0f9tvVRctNqKslo7NqBxlg1VL2cYh8xZCCgrRMI9LkfTqLY247YbARTbedpZ1l7NrFJvZZRLukWw=s4800-w800",
    certification: "착한가격업소(행정안전부)",
    recommendNote: "착한가격업소로 지정된 곳, 대표메뉴 칼국수 6,000원",
    youtubers: [
    ]
  },
  {
    id: "chk-003",
    name: "학사식당",
    category: "한식",
    address: "강원특별자치도 강릉시 강변로172번길 9-3",
    phone: "033-648-1135",
    lat: 37.74602813001972,
    lng: 128.8882658720527,
    kakaoUrl: "http://place.map.kakao.com/10865663",
    naverUrl: "https://map.naver.com/p/search/%ED%95%99%EC%82%AC%EC%8B%9D%EB%8B%B9%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EA%B0%95%EB%A6%89%EC%8B%9C%20%EA%B0%95%EB%B3%80%EB%A1%9C172%EB%B2%88%EA%B8%B8%209-3",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAMrnMORaUqFyuWey6PQWfBIy6N7cD4XqAhBkMO5jQJUdFbPFpKjHAd96JtUBR69NDAHkLUDb7Hy6pscePXTYOM6MXr1slAe3u46lC0DHXU-ZrzjyciSxwATsu0L-zA8l7htfU41IAN1sVPe9XgH0Lk7A=s4800-w800",
    certification: "착한가격업소(행정안전부)",
    recommendNote: "착한가격업소로 지정된 곳, 대표메뉴 돈까스 9,000원",
    youtubers: [
    ]
  },
  {
    id: "chk-004",
    name: "한아름칼국수",
    category: "한식",
    address: "강원특별자치도 동해시 발한복개로 30-1",
    phone: "033-532-4954",
    lat: 37.55084390392139,
    lng: 129.1076211295367,
    kakaoUrl: "http://place.map.kakao.com/14932425",
    naverUrl: "https://map.naver.com/p/search/%ED%95%9C%EC%95%84%EB%A6%84%EC%B9%BC%EA%B5%AD%EC%88%98%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EB%8F%99%ED%95%B4%EC%8B%9C%20%EB%B0%9C%ED%95%9C%EB%B3%B5%EA%B0%9C%EB%A1%9C%2030-1",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCR2CbdkwIxA6a95xJbIPuT9C8-RWY_7GNHe_t_pZoYiu0JKiRqBQUbnlq5QIgfxmIOBkmLzP78rJZpx0ZDe-JYEfsuIAu47Hvfy5Z0EqEnCr2apbDBa8O2W8BZvbglpSaXmtjH5pl5bvPMzPgxp0Pvgg=s4800-w800",
    certification: "착한가격업소(행정안전부)",
    recommendNote: "착한가격업소로 지정된 곳, 대표메뉴 홍합칼국수 6,000원",
    youtubers: [
    ]
  },
  {
    id: "chk-005",
    name: "할매곱창",
    category: "한식",
    address: "강원특별자치도 태백시 동태백로 385",
    phone: null,
    lat: 37.11261508658994,
    lng: 129.03667613075976,
    kakaoUrl: "http://place.map.kakao.com/10051504",
    naverUrl: "https://map.naver.com/p/search/%ED%95%A0%EB%A7%A4%EA%B3%B1%EC%B0%BD%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%ED%83%9C%EB%B0%B1%EC%8B%9C%20%EB%8F%99%ED%83%9C%EB%B0%B1%EB%A1%9C%20385",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCHYFMHD8DZzAoe005mgV3OFjfQrqbFwxqyrX28mj2X2OKFkFzh_h42WWCxCcatO88FaIQ87o0ZToxMkSbQNd9H4Ho3ot30k8g4n5a8AHfxQQI0IKtS8uWVI8b-R_lyZGmp4dL8gAhVZ__bDoOveMIi=s4800-w800",
    certification: "착한가격업소(행정안전부)",
    recommendNote: "착한가격업소로 지정된 곳, 대표메뉴 돼지곱창(400g) 10,000원",
    youtubers: [
    ]
  },
  {
    id: "chk-006",
    name: "동강청정한우앤한돈",
    category: "한식",
    address: "강원특별자치도 속초시 선사로 7-10",
    phone: "033-637-3775",
    lat: 38.1878893621796,
    lng: 128.591506504962,
    kakaoUrl: "http://place.map.kakao.com/12257294",
    naverUrl: "https://map.naver.com/p/search/%EB%8F%99%EA%B0%95%EC%B2%AD%EC%A0%95%ED%95%9C%EC%9A%B0%EC%95%A4%ED%95%9C%EB%8F%88%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%86%8D%EC%B4%88%EC%8B%9C%20%EC%84%A0%EC%82%AC%EB%A1%9C%207-10",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAd8XgSVn05EHRYKsf1MiUTOmxccsDAI2CoF14rtGwf1WiV6qQaPyliBA5aEATf_uXme2RdodNtRzYTuFHOLIlw4CHGjMOzuWq9d54VlwsWbBtrAPAchiOWv9KlzMkvYZXK3d-0gnHIgtS-6wA=s4800-w800",
    certification: "착한가격업소(행정안전부)",
    recommendNote: "착한가격업소로 지정된 곳, 대표메뉴 한우청국장 9,000원",
    youtubers: [
    ]
  },
  {
    id: "chk-007",
    name: "가향",
    category: "중식",
    address: "강원특별자치도 삼척시 청석로 79-10",
    phone: "033-574-8547",
    lat: 37.4483633975708,
    lng: 129.177808246381,
    kakaoUrl: "http://place.map.kakao.com/1522457509",
    naverUrl: "https://map.naver.com/p/search/%EA%B0%80%ED%96%A5%20%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%82%BC%EC%B2%99%EC%8B%9C%20%EC%B2%AD%EC%84%9D%EB%A1%9C%2079-10",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDKqOLE9U5ASMJVuq1lfwJH1fCm1HG_42DAG2ICmZGJifgrf_cv8gV_F47Xl4ndnkhLUUv3Z3tE0hYAEDUh4_v96_MEAOCzjw0k81FzNBAFvhV9mYtH3iTmcdnlDn6zAj2UwuwW03d-kj8oFuYmbvmh=s4800-w800",
    certification: "착한가격업소(행정안전부)",
    recommendNote: "착한가격업소로 지정된 곳, 대표메뉴 짜장면 5,000원",
    youtubers: [
    ]
  },
  {
    id: "chk-008",
    name: "대박삼겹살",
    category: "한식",
    address: "충북 청주시 상당구 남사로89번길 56",
    phone: "043-224-3992",
    lat: 36.63487379658935,
    lng: 127.48564453620212,
    kakaoUrl: "http://place.map.kakao.com/19387376",
    naverUrl: "https://map.naver.com/p/search/%EB%8C%80%EB%B0%95%EC%82%BC%EA%B2%B9%EC%82%B4%20%EC%B6%A9%EB%B6%81%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%EC%83%81%EB%8B%B9%EA%B5%AC%20%EB%82%A8%EC%82%AC%EB%A1%9C89%EB%B2%88%EA%B8%B8%2056",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    certification: "착한가격업소(행정안전부)",
    recommendNote: "착한가격업소로 지정된 곳, 대표메뉴 삼겹살(200g) 13,000원",
    youtubers: [
    ]
  },
  {
    id: "chk-009",
    name: "산수촌숯불갈비",
    category: "한식",
    address: "충북 충주시 봉현로 184",
    phone: "043-846-6692",
    lat: 36.9790065080023,
    lng: 127.924683001887,
    kakaoUrl: "http://place.map.kakao.com/9810673",
    naverUrl: "https://map.naver.com/p/search/%EC%82%B0%EC%88%98%EC%B4%8C%EC%88%AF%EB%B6%88%EA%B0%88%EB%B9%84%20%EC%B6%A9%EB%B6%81%20%EC%B6%A9%EC%A3%BC%EC%8B%9C%20%EB%B4%89%ED%98%84%EB%A1%9C%20184",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBgFStMDm0_-JdGrkoV0RmWLcKWxcoXP5hZ0_oUbJsxzzxXDlXKruAxAEV9FSXGBUnQHBkyHefZy3wT9Wg4Xj-TcOdH7-aO7EPsHCLnsj8watCZjIAOrBgT4JaZVqDuQsiddr5qgKX1RGpZrQ=s4800-w800",
    certification: "착한가격업소(행정안전부)",
    recommendNote: "착한가격업소로 지정된 곳, 대표메뉴 한방돼지갈비 10,000원",
    youtubers: [
    ]
  },
  {
    id: "chk-010",
    name: "쥐눈이콩마을",
    category: "한식",
    address: "충북 제천시 내토로17길 4-1",
    phone: "043-642-4489",
    lat: 37.1309496726402,
    lng: 128.204871607347,
    kakaoUrl: "http://place.map.kakao.com/10784153",
    naverUrl: "https://map.naver.com/p/search/%EC%A5%90%EB%88%88%EC%9D%B4%EC%BD%A9%EB%A7%88%EC%9D%84%20%EC%B6%A9%EB%B6%81%20%EC%A0%9C%EC%B2%9C%EC%8B%9C%20%EB%82%B4%ED%86%A0%EB%A1%9C17%EA%B8%B8%204-1",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAdRLA1DLlRxzSx2fhxLlO9aTUvCUYm9SsM2JH6T59jYc6ss5X7lk7NPs7R-8lit_ChqBBYVOcDIyUSs5iAlf8rNz7uGf8c9RW6glC2-VPUS__4YQm7p_XrEoNYfN_VVL9ol-Pz3jmx0g0mp384xb6t6g=s4800-w800",
    certification: "착한가격업소(행정안전부)",
    recommendNote: "착한가격업소로 지정된 곳, 대표메뉴 두부전골 9,000원",
    youtubers: [
    ]
  },
  {
    id: "chk-011",
    name: "팔도식당",
    category: "한식",
    address: "충북 보은군 속리산면 법주사로 262-1",
    phone: "043-544-2531",
    lat: 36.53127958798736,
    lng: 127.82255834842778,
    kakaoUrl: "http://place.map.kakao.com/10892544",
    naverUrl: "https://map.naver.com/p/search/%ED%8C%94%EB%8F%84%EC%8B%9D%EB%8B%B9%20%EC%B6%A9%EB%B6%81%20%EB%B3%B4%EC%9D%80%EA%B5%B0%20%EC%86%8D%EB%A6%AC%EC%82%B0%EB%A9%B4%20%EB%B2%95%EC%A3%BC%EC%82%AC%EB%A1%9C%20262-1",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDl7BgizT5lmunWZ1xpsAK1ByryxQewGu12yLjmETiIh2ruouElgu62Y8xU3pvhgVpXnLO91AfAKzeTxPAWSTj1BgG_tj5KwHitm3V6IGUC98PA0PF_ghRrWObCALgUiiuc5VtFUs5hggwjxY8=s4800-w800",
    certification: "착한가격업소(행정안전부)",
    recommendNote: "착한가격업소로 지정된 곳, 대표메뉴 돌솥비빔밥 11,000원",
    youtubers: [
    ]
  },
  {
    id: "chk-012",
    name: "홍능갈비",
    category: "한식",
    address: "충북 영동군 영동읍 계산로7길 7-4",
    phone: "043-744-1185",
    lat: 36.1714764571105,
    lng: 127.784257227361,
    kakaoUrl: "http://place.map.kakao.com/10107909",
    naverUrl: "https://map.naver.com/p/search/%ED%99%8D%EB%8A%A5%EA%B0%88%EB%B9%84%20%EC%B6%A9%EB%B6%81%20%EC%98%81%EB%8F%99%EA%B5%B0%20%EC%98%81%EB%8F%99%EC%9D%8D%20%EA%B3%84%EC%82%B0%EB%A1%9C7%EA%B8%B8%207-4",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDLsOcsgFhkFFBE6KMArj5VjzBdJD3uVbv7dP2fhJL2-PTuOdcFoql1956ehHRqy2eKkUblAfCpivErdYu7H-NjPPJBGrCUp9VdJa4qkGVuB8z5sqShf5Trls1QUH0gip3-J_N8cD5uv7C98uY=s4800-w800",
    certification: "착한가격업소(행정안전부)",
    recommendNote: "착한가격업소로 지정된 곳, 대표메뉴 돼지갈비(220g) 9,000원",
    youtubers: [
    ]
  },
  {
    id: "chk-013",
    name: "선비숯불갈비",
    category: "한식",
    address: "충남 천안시 동남구 터미널3길 21",
    phone: "041-551-7175",
    lat: 36.82127579767063,
    lng: 127.15858846620964,
    kakaoUrl: "http://place.map.kakao.com/24068763",
    naverUrl: "https://map.naver.com/p/search/%EC%84%A0%EB%B9%84%EC%88%AF%EB%B6%88%EA%B0%88%EB%B9%84%20%EC%B6%A9%EB%82%A8%20%EC%B2%9C%EC%95%88%EC%8B%9C%20%EB%8F%99%EB%82%A8%EA%B5%AC%20%ED%84%B0%EB%AF%B8%EB%84%903%EA%B8%B8%2021",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjA4GOgQpV2Bjy-2au0OpPG7_heEdJZzbJgf1pWX2qwLCOw9k5DM0Be-4bfreBDF8aQoZlClBlYHfUw9fbi0eUkqssaznjHq5l_f7k6IgOWsdJK3wIrFyUSLfnB0dhZrmWWimTyLIoEdINKVfA=s4800-w800",
    certification: "착한가격업소(행정안전부)",
    recommendNote: "착한가격업소로 지정된 곳, 대표메뉴 돼지갈비(300g) 15,000원",
    youtubers: [
    ]
  },
  {
    id: "chk-014",
    name: "한우타운",
    category: "한식",
    address: "충남 청양군 비봉면 록평용당로 775-1",
    phone: "041-853-2289",
    lat: 36.520583564183,
    lng: 126.783515092055,
    kakaoUrl: "http://place.map.kakao.com/19726847",
    naverUrl: "https://map.naver.com/p/search/%ED%95%9C%EC%9A%B0%ED%83%80%EC%9A%B4%20%EC%B6%A9%EB%82%A8%20%EC%B2%AD%EC%96%91%EA%B5%B0%20%EB%B9%84%EB%B4%89%EB%A9%B4%20%EB%A1%9D%ED%8F%89%EC%9A%A9%EB%8B%B9%EB%A1%9C%20775-1",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjB8FHRboZgilp1AuTWkq_noutVwN6vlPUKaToHTmQutM8FMrueJ6iM3EVK5alhBB3WVO6_tDbkn9xNp7JegzEymdieKz8vaZI-imJKFYOvebX4oulQWvlN505lPKTT2NFlW4ihKVuD5Dm0MDQ=s4800-w800",
    certification: "착한가격업소(행정안전부)",
    recommendNote: "착한가격업소로 지정된 곳, 대표메뉴 돼지갈비(250g) 15,000원",
    youtubers: [
    ]
  },
  {
    id: "chk-015",
    name: "남촌별미",
    category: "한식",
    address: "충남 보령시 작은오랏7길 35",
    phone: "041-936-2581",
    lat: 36.34514159632306,
    lng: 126.60407995799423,
    kakaoUrl: "http://place.map.kakao.com/1458801423",
    naverUrl: "https://map.naver.com/p/search/%EB%82%A8%EC%B4%8C%EB%B3%84%EB%AF%B8%20%EC%B6%A9%EB%82%A8%20%EB%B3%B4%EB%A0%B9%EC%8B%9C%20%EC%9E%91%EC%9D%80%EC%98%A4%EB%9E%8F7%EA%B8%B8%2035",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    certification: "착한가격업소(행정안전부)",
    recommendNote: "착한가격업소로 지정된 곳, 대표메뉴 김치찌개 9,000원",
    youtubers: [
    ]
  },
  {
    id: "chk-016",
    name: "농원정",
    category: "한식",
    address: "충남 아산시 실옥로 93",
    phone: "041-531-9782",
    lat: 36.7899159900703,
    lng: 126.988742488457,
    kakaoUrl: "http://place.map.kakao.com/12383819",
    naverUrl: "https://map.naver.com/p/search/%EB%86%8D%EC%9B%90%EC%A0%95%20%EC%B6%A9%EB%82%A8%20%EC%95%84%EC%82%B0%EC%8B%9C%20%EC%8B%A4%EC%98%A5%EB%A1%9C%2093",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBkEaWksd6SR9Gz4-dicVEMLoVU7001Tab0Z2NE7Oz55DovIEaFPlxDN55rFmFUFtp11bnRaquoK-fvaRWeBftKKjxbpj85akSFqHt9rF8UE1bMdA6DNiv7S-BzOUDD46oJIY6qJnImB4fu3A=s4800-w800",
    certification: "착한가격업소(행정안전부)",
    recommendNote: "착한가격업소로 지정된 곳, 대표메뉴 삼계탕 14,000원",
    youtubers: [
    ]
  },
  {
    id: "chk-017",
    name: "겨울나그네",
    category: "양식",
    address: "충남 서산시 고운로 176",
    phone: "041-664-3235",
    lat: 36.78334287723914,
    lng: 126.45489427739862,
    kakaoUrl: "http://place.map.kakao.com/10170130",
    naverUrl: "https://map.naver.com/p/search/%EA%B2%A8%EC%9A%B8%EB%82%98%EA%B7%B8%EB%84%A4%20%EC%B6%A9%EB%82%A8%20%EC%84%9C%EC%82%B0%EC%8B%9C%20%EA%B3%A0%EC%9A%B4%EB%A1%9C%20176",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCMuZVyWMDvwc6lLeylVDhTwYYRx-1scTFHLX1KupN_bS8FNnISljOBDfg2duyn0HN4NlX6NUCH2FSDiCsgx6l59XlAMEGRk6QezPPKok_yvnVVT9He4dVmn3iU3n5dOSwHEOw5iCIhslibrUFDHAZWTA=s4800-w800",
    certification: "착한가격업소(행정안전부)",
    recommendNote: "착한가격업소로 지정된 곳, 대표메뉴 돈까스 8,500원",
    youtubers: [
    ]
  },
  {
    id: "chk-018",
    name: "한마당",
    category: "한식",
    address: "충남 당진시 고대면 대촌리",
    phone: "041-742-6990",
    lat: 36.9398126143914,
    lng: 126.587063592137,
    kakaoUrl: "http://place.map.kakao.com/25392503",
    naverUrl: "https://map.naver.com/p/search/%ED%95%9C%EB%A7%88%EB%8B%B9%20%EC%B6%A9%EB%82%A8%20%EB%8B%B9%EC%A7%84%EC%8B%9C%20%EA%B3%A0%EB%8C%80%EB%A9%B4%20%EB%8C%80%EC%B4%8C%EB%A6%AC",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    certification: "착한가격업소(행정안전부)",
    recommendNote: "착한가격업소로 지정된 곳, 대표메뉴 소고기등심 25,000원",
    youtubers: [
    ]
  },
  {
    id: "chk-019",
    name: "아마계돈불닭",
    category: "한식",
    address: "충남 계룡시 엄사면 번영3길 24",
    phone: "042-841-6900",
    lat: 36.2870698863376,
    lng: 127.238519450979,
    kakaoUrl: "http://place.map.kakao.com/10600324",
    naverUrl: "https://map.naver.com/p/search/%EC%95%84%EB%A7%88%EA%B3%84%EB%8F%88%EB%B6%88%EB%8B%AD%20%EC%B6%A9%EB%82%A8%20%EA%B3%84%EB%A3%A1%EC%8B%9C%20%EC%97%84%EC%82%AC%EB%A9%B4%20%EB%B2%88%EC%98%813%EA%B8%B8%2024",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    certification: "착한가격업소(행정안전부)",
    recommendNote: "착한가격업소로 지정된 곳, 대표메뉴 후라이드치킨 16,000원",
    youtubers: [
    ]
  },
  {
    id: "chk-020",
    name: "갈비전문점 엘에이 반월직영점",
    category: "한식",
    address: "전북특별자치도 전주시 덕진구 쪽구름로 138",
    phone: "063-213-8822",
    lat: 35.8742429556282,
    lng: 127.070236262962,
    kakaoUrl: "http://place.map.kakao.com/288723265",
    naverUrl: "https://map.naver.com/p/search/%EA%B0%88%EB%B9%84%EC%A0%84%EB%AC%B8%EC%A0%90%20%EC%97%98%EC%97%90%EC%9D%B4%20%EB%B0%98%EC%9B%94%EC%A7%81%EC%98%81%EC%A0%90%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%84%EC%A3%BC%EC%8B%9C%20%EB%8D%95%EC%A7%84%EA%B5%AC%20%EC%AA%BD%EA%B5%AC%EB%A6%84%EB%A1%9C%20138",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjADGYHJhkEwTjYibp0YwhgFm61cBCHQdDqSWZxH7ud6GwB5er0ZCwpzQl-uBqL-dGwuemw0yIj7b_fQXvp3w6pkAY2qED7CBh7hFRPjlNA5NeHNmQrXmYI44JAYcd_ZF9yr6mVtd3QvQTZF8is=s4800-w800",
    certification: "착한가격업소(행정안전부)",
    recommendNote: "착한가격업소로 지정된 곳, 대표메뉴 돼지갈비(350g) 19,000원",
    youtubers: [
    ]
  },
  {
    id: "chk-021",
    name: "아서원",
    category: "중식",
    address: "전북특별자치도 전주시 완산구 서곡4길 45-6",
    phone: "063-445-0901",
    lat: 35.8323288071067,
    lng: 127.103202755144,
    kakaoUrl: "http://place.map.kakao.com/15109003",
    naverUrl: "https://map.naver.com/p/search/%EC%95%84%EC%84%9C%EC%9B%90%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%84%EC%A3%BC%EC%8B%9C%20%EC%99%84%EC%82%B0%EA%B5%AC%20%EC%84%9C%EA%B3%A14%EA%B8%B8%2045-6",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCLr6solVznlKuzy3iBJPN0HWGesUxYaFylxNqArQOISW1_BTHw7iED8-O_MNm9VetIHPBx6F7mAvGom7iA_8LtrkK6CsoZUJwHbAIXpQ7tGSrIa96xX4rM86GiHXBIQuO9gxhrgEsBgUlRT2g=s4800-w800",
    certification: "착한가격업소(행정안전부)",
    recommendNote: "착한가격업소로 지정된 곳, 대표메뉴 짜장면 4,500원",
    youtubers: [
    ]
  },
  {
    id: "chk-022",
    name: "진미식당",
    category: "한식",
    address: "전북특별자치도 익산시 황등면 황등로 158",
    phone: "063-856-4422",
    lat: 36.005871926761,
    lng: 126.944878383499,
    kakaoUrl: "http://place.map.kakao.com/10776596",
    naverUrl: "https://map.naver.com/p/search/%EC%A7%84%EB%AF%B8%EC%8B%9D%EB%8B%B9%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%9D%B5%EC%82%B0%EC%8B%9C%20%ED%99%A9%EB%93%B1%EB%A9%B4%20%ED%99%A9%EB%93%B1%EB%A1%9C%20158",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDGHW2paQXkxr4zQ6n2vMRUU1X89jN-dZtRb93a3F07xM1TQ3AkTVAGCllLBjjHwMcSBAta3JkwQqrypTxXvL2mfL3D6vyrYsJPqaCOEDebwuHNd9-puvuajClde0-dYhaOLMtTNi3otPZAlaZMrdo2=s4800-w800",
    certification: "착한가격업소(행정안전부)",
    recommendNote: "착한가격업소로 지정된 곳, 대표메뉴 맑은선지국밥(공기밥 포함) 6,000원",
    youtubers: [
    ]
  },
  {
    id: "chk-023",
    name: "청원",
    category: "중식",
    address: "전북특별자치도 고창군 아산면 선운사로 67",
    phone: "063-538-6001",
    lat: 35.5032939372761,
    lng: 126.59592590245097,
    kakaoUrl: "http://place.map.kakao.com/9449160",
    naverUrl: "https://map.naver.com/p/search/%EC%B2%AD%EC%9B%90%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EA%B3%A0%EC%B0%BD%EA%B5%B0%20%EC%95%84%EC%82%B0%EB%A9%B4%20%EC%84%A0%EC%9A%B4%EC%82%AC%EB%A1%9C%2067",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAYtX8vPzZn6sq2cmeSovLB2pljTkw8wtsamMr9yGX6OjbUMO0Yz2g7P3Arv0G1ieU-kXW-bCwAPdKJiHJx_NBIer3v56wzUOUG1QLH0L6NpQ1F31qZiWzFd3NKra9Gl9ib_UGI8mM495I4=s4800-w800",
    certification: "착한가격업소(행정안전부)",
    recommendNote: "착한가격업소로 지정된 곳, 대표메뉴 자장면 5,000원",
    youtubers: [
    ]
  },
  {
    id: "chk-024",
    name: "선비고을",
    category: "한식",
    address: "전북특별자치도 남원시 양림길 68",
    phone: "063-633-8932",
    lat: 35.4029574386135,
    lng: 127.389574402904,
    kakaoUrl: "http://place.map.kakao.com/10486694",
    naverUrl: "https://map.naver.com/p/search/%EC%84%A0%EB%B9%84%EA%B3%A0%EC%9D%84%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EB%82%A8%EC%9B%90%EC%8B%9C%20%EC%96%91%EB%A6%BC%EA%B8%B8%2068",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDnZeBEGDgS-3x4QhGSby0ABnqRtcrEf5tC34syt1Ts0KBec3TNvD5G6Bh9EZDmYJLXtaYwQ_DzR6UroxnbqIueQKkP2cSDENifJJ5SJ8JIomXi7XpxWFa2SJI7b3A5BmSwqXDf8yr-pJC-=s4800-w800",
    certification: "착한가격업소(행정안전부)",
    recommendNote: "착한가격업소로 지정된 곳, 대표메뉴 갈치구이백반정식 9,000원",
    youtubers: [
    ]
  },
  {
    id: "chk-025",
    name: "국밥집",
    category: "한식",
    address: "전북특별자치도 전주시 완산구 동문길 88",
    phone: "063-291-8818",
    lat: 35.81828668481779,
    lng: 127.14917874864973,
    kakaoUrl: "http://place.map.kakao.com/26615208",
    naverUrl: "https://map.naver.com/p/search/%EA%B5%AD%EB%B0%A5%EC%A7%91%20%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%84%EC%A3%BC%EC%8B%9C%20%EC%99%84%EC%82%B0%EA%B5%AC%20%EB%8F%99%EB%AC%B8%EA%B8%B8%2088",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    certification: "착한가격업소(행정안전부)",
    recommendNote: "착한가격업소로 지정된 곳, 대표메뉴 콩나물국밥 6,000원",
    youtubers: [
    ]
  },
  {
    id: "chk-026",
    name: "밀밭",
    category: "한식",
    address: "경북 영주시 대학로 40-1",
    phone: "054-638-3663",
    lat: 36.80959163234763,
    lng: 128.6197898187562,
    kakaoUrl: "http://place.map.kakao.com/11534916",
    naverUrl: "https://map.naver.com/p/search/%EB%B0%80%EB%B0%AD%20%EA%B2%BD%EB%B6%81%20%EC%98%81%EC%A3%BC%EC%8B%9C%20%EB%8C%80%ED%95%99%EB%A1%9C%2040-1",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBgWXAnVmtYfg19fgU5X7a98RoqnGh-Cr0TEawWEVVc_fYA-uwZ_nN1EszwLNUCxc0poBJrKROVJLGDFI8ZI2OfFW0c2urGp-GfBIofA2hEV3C-ewTv_QhiSRzkrmbbxUigx8bG5LRJ_nTI=s4800-w800",
    certification: "착한가격업소(행정안전부)",
    recommendNote: "착한가격업소로 지정된 곳, 대표메뉴 잔치국수 4,000원",
    youtubers: [
    ]
  },
  {
    id: "chk-027",
    name: "삼부식당",
    category: "한식",
    address: "경북 경주시 봉황로51번길 14",
    phone: "054-774-0568",
    lat: 35.84438971866894,
    lng: 129.20866353073168,
    kakaoUrl: "http://place.map.kakao.com/16235926",
    naverUrl: "https://map.naver.com/p/search/%EC%82%BC%EB%B6%80%EC%8B%9D%EB%8B%B9%20%EA%B2%BD%EB%B6%81%20%EA%B2%BD%EC%A3%BC%EC%8B%9C%20%EB%B4%89%ED%99%A9%EB%A1%9C51%EB%B2%88%EA%B8%B8%2014",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjCBaWNADS3Laa2vdc0uF0HkoJPhqqMagKPw1-7QQfkaQ0zQEU1ypbwo7BribC70Qx7B4NGiQx-ZlJAPvA_y-UF_xdan2iK4JKB68M1u4-YrtoeiTLwZIzCVsaqh6iLSibAOFYaNr_5hImUoqTo=s4800-w800",
    certification: "착한가격업소(행정안전부)",
    recommendNote: "착한가격업소로 지정된 곳, 대표메뉴 보리밥 7,000원",
    youtubers: [
    ]
  },
  {
    id: "chk-028",
    name: "부자가든",
    category: "한식",
    address: "경북 김천시 지례면 장터길 89",
    phone: "054-434-3700",
    lat: 35.988849679569,
    lng: 128.029946418635,
    kakaoUrl: "http://place.map.kakao.com/11053227",
    naverUrl: "https://map.naver.com/p/search/%EB%B6%80%EC%9E%90%EA%B0%80%EB%93%A0%20%EA%B2%BD%EB%B6%81%20%EA%B9%80%EC%B2%9C%EC%8B%9C%20%EC%A7%80%EB%A1%80%EB%A9%B4%20%EC%9E%A5%ED%84%B0%EA%B8%B8%2089",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBBPjCYnB_Sma4X7AQ3osQ3Qf2PIkflFbZmMJ5CYEtYMcQ6sWwjb2IcNut-E6NhDib0Lq6V3juKPG7as0MToNV4MOG7FUptFddzICS53-cJS75IdE8yteQTzt1VVd_CgzYFIq_StjpBrIGPKKg=s4800-w800",
    certification: "착한가격업소(행정안전부)",
    recommendNote: "착한가격업소로 지정된 곳, 대표메뉴 참숯소금구이(200g) 12,000원",
    youtubers: [
    ]
  },
  {
    id: "chk-029",
    name: "금식당",
    category: "한식",
    address: "경북 안동시 경동로 862",
    phone: "054-823-5599",
    lat: 36.5593642277848,
    lng: 128.75006478242,
    kakaoUrl: "http://place.map.kakao.com/11016441",
    naverUrl: "https://map.naver.com/p/search/%EA%B8%88%EC%8B%9D%EB%8B%B9%20%EA%B2%BD%EB%B6%81%20%EC%95%88%EB%8F%99%EC%8B%9C%20%EA%B2%BD%EB%8F%99%EB%A1%9C%20862",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAhtNBO6IRbDSUSA0IR9JtdqALYMc1Iud-uO9Ov2H8VUQCHJwch6ickpSlDsUAsj8zLjqL-AU3wIX4H-eu16gsURyQrsU2gsamc46oNwZCeQ_6W1hpGzSOiTp_OtN4tzABAGNGpSHlUHiSYZA=s4800-w800",
    certification: "착한가격업소(행정안전부)",
    recommendNote: "착한가격업소로 지정된 곳, 대표메뉴 된장찌개 7,000원",
    youtubers: [
    ]
  },
  {
    id: "chk-030",
    name: "야일한정식",
    category: "한식",
    address: "경북 영주시 원당로20번길 24",
    phone: "054-636-9963",
    lat: 36.8161215058734,
    lng: 128.618380966769,
    kakaoUrl: "http://place.map.kakao.com/21288377",
    naverUrl: "https://map.naver.com/p/search/%EC%95%BC%EC%9D%BC%ED%95%9C%EC%A0%95%EC%8B%9D%20%EA%B2%BD%EB%B6%81%20%EC%98%81%EC%A3%BC%EC%8B%9C%20%EC%9B%90%EB%8B%B9%EB%A1%9C20%EB%B2%88%EA%B8%B8%2024",
    rating: null,
    reviewCount: null,
    photoUrl: null,
    certification: "착한가격업소(행정안전부)",
    recommendNote: "착한가격업소로 지정된 곳, 대표메뉴 김치찌개 5,000원",
    youtubers: [
    ]
  },
  {
    id: "chk-031",
    name: "미각루",
    category: "중식",
    address: "경북 영천시 청산1길 6",
    phone: "054-331-4666",
    lat: 35.9735721382616,
    lng: 128.937756890116,
    kakaoUrl: "http://place.map.kakao.com/10414102",
    naverUrl: "https://map.naver.com/p/search/%EB%AF%B8%EA%B0%81%EB%A3%A8%20%EA%B2%BD%EB%B6%81%20%EC%98%81%EC%B2%9C%EC%8B%9C%20%EC%B2%AD%EC%82%B01%EA%B8%B8%206",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjDODgF3Wt3858_j2g9n2GSpsju4mokiAnPaR3Wsm-m6ijDl6PJShLIN0zzd6O6_8y5vEHJk2sE1a8bxZCRwyxTknPqde93jrcOGwrIVf0HLL1IgazkFgf3et6KRSnix-UU7YssdXpeWOReH=s4800-w800",
    certification: "착한가격업소(행정안전부)",
    recommendNote: "착한가격업소로 지정된 곳, 대표메뉴 짜장면 6,000원",
    youtubers: [
    ]
  },
  {
    id: "chk-032",
    name: "신미국밥",
    category: "한식",
    address: "제주특별자치도 제주시 구좌읍 김녕로 108",
    phone: "064-784-9995",
    lat: 33.5543487514431,
    lng: 126.749592280753,
    kakaoUrl: "http://place.map.kakao.com/397186525",
    naverUrl: "https://map.naver.com/p/search/%EC%8B%A0%EB%AF%B8%EA%B5%AD%EB%B0%A5%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EA%B5%AC%EC%A2%8C%EC%9D%8D%20%EA%B9%80%EB%85%95%EB%A1%9C%20108",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjB-PfGmFnRt2LuwUMtYoJn8k2TmNNoiKN94aqhHZqDwTp1LPTcIMyCOGGyrhvGgM8iCQYt19idpj0NbXl9Jb1xWwYGLcZz1k6VJcxlDWeqUazO-GY9JE3egbNLW0BARd_mcW70yNTsoKrfu=s4800-w800",
    certification: "착한가격업소(행정안전부)",
    recommendNote: "착한가격업소로 지정된 곳, 대표메뉴 순대국밥 9,000원",
    youtubers: [
    ]
  },
  {
    id: "chk-033",
    name: "갈비에제왕",
    category: "한식",
    address: "제주특별자치도 서귀포시 대정읍 영서중로 5-1",
    phone: "010-4763-1729",
    lat: 33.22115678844075,
    lng: 126.25411735887558,
    kakaoUrl: "http://place.map.kakao.com/2114576226",
    naverUrl: "https://map.naver.com/p/search/%EA%B0%88%EB%B9%84%EC%97%90%EC%A0%9C%EC%99%95%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%84%9C%EA%B7%80%ED%8F%AC%EC%8B%9C%20%EB%8C%80%EC%A0%95%EC%9D%8D%20%EC%98%81%EC%84%9C%EC%A4%91%EB%A1%9C%205-1",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjD_iQsPiVWgkbtJY2sg09m0BX0qT-6qxt9z_7kFq1eOLAbDFnvgKtM4wiiq4y1jgdYGNtusMPnlRytz3QEYvf5wbYn4U4YKvRFLfMVdDmgPwLscou9bBoRUR7TZCIRsI6wDJIZM9l7G60iyS2F0hms-Ig=s4800-w800",
    certification: "착한가격업소(행정안전부)",
    recommendNote: "착한가격업소로 지정된 곳, 대표메뉴 흑돼지오겹살(200g) 15,900원",
    youtubers: [
    ]
  },
  {
    id: "chk-034",
    name: "우리두리",
    category: "한식",
    address: "제주특별자치도 제주시 구좌읍 김녕로 173",
    phone: "064-782-5442",
    lat: 33.55623632800645,
    lng: 126.75618797412758,
    kakaoUrl: "http://place.map.kakao.com/23585259",
    naverUrl: "https://map.naver.com/p/search/%EC%9A%B0%EB%A6%AC%EB%91%90%EB%A6%AC%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EA%B5%AC%EC%A2%8C%EC%9D%8D%20%EA%B9%80%EB%85%95%EB%A1%9C%20173",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAdQv2han3WsGd-1tZ7HbYYkCyePKz_zFgMaApSAcqJJeOx9jnDioF2EdAzIZqmGUSXP28e5TCYv_H_9MMm3lqF7dbuEk-BM6bJFX3Wo0BGlZ6LJww6cyFPzZ49ehRqNnOPk20zXS9GOQOFUCM=s4800-w800",
    certification: "착한가격업소(행정안전부)",
    recommendNote: "착한가격업소로 지정된 곳, 대표메뉴 고등어구이 13,000원",
    youtubers: [
    ]
  },
  {
    id: "chk-035",
    name: "해바라기",
    category: "한식",
    address: "제주특별자치도 제주시 중앙로 46-8",
    phone: "064-764-9909",
    lat: 33.51440548694659,
    lng: 126.52418085855678,
    kakaoUrl: "http://place.map.kakao.com/24161783",
    naverUrl: "https://map.naver.com/p/search/%ED%95%B4%EB%B0%94%EB%9D%BC%EA%B8%B0%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EC%A4%91%EC%95%99%EB%A1%9C%2046-8",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjB0cquG9Ce-N8B02FyAlSYqlj0U8o9zPVL-CgRzcTPzQYBRGzp8lDPHu2dqbZtAyHSn35Y6fQQ9aaSoEY5ijXw53xV7cVALnlnr7AhN8HfUJjH46f6_-Z_iJ3x8McTe-XKbDGGpc5L09TZf7BKYA6PZVQ=s4800-w800",
    certification: "착한가격업소(행정안전부)",
    recommendNote: "착한가격업소로 지정된 곳, 대표메뉴 두루치기 10,000원",
    youtubers: [
    ]
  },
  {
    id: "chk-036",
    name: "소라횟집",
    category: "한식",
    address: "제주특별자치도 제주시 구좌읍 해맞이해안로 1240-3",
    phone: "064-784-3545",
    lat: 33.53245889498701,
    lng: 126.846271675771,
    kakaoUrl: "http://place.map.kakao.com/1400643211",
    naverUrl: "https://map.naver.com/p/search/%EC%86%8C%EB%9D%BC%ED%9A%9F%EC%A7%91%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EA%B5%AC%EC%A2%8C%EC%9D%8D%20%ED%95%B4%EB%A7%9E%EC%9D%B4%ED%95%B4%EC%95%88%EB%A1%9C%201240-3",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAZshzJ-EDrUElbk0flctD2ktG1vjnTlc3eir6LxirDlJ1csOUBMEryUtvRlPi-1hzSm_WES71mOzrM-WsnkC60IGDKDUt55r6nnhdAYnugEJViLKBW7rInRx7WIAeh7P2MNGw1d232OL3-zj8=s4800-w800",
    certification: "착한가격업소(행정안전부)",
    recommendNote: "착한가격업소로 지정된 곳, 대표메뉴 우럭매운탕 13,000원",
    youtubers: [
    ]
  },
  {
    id: "chk-037",
    name: "백년손님",
    category: "한식",
    address: "제주특별자치도 서귀포시 성산읍 금백조로 114",
    phone: "064-783-3456",
    lat: 33.43864173137846,
    lng: 126.86101767648013,
    kakaoUrl: "http://place.map.kakao.com/109329301",
    naverUrl: "https://map.naver.com/p/search/%EB%B0%B1%EB%85%84%EC%86%90%EB%8B%98%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%84%9C%EA%B7%80%ED%8F%AC%EC%8B%9C%20%EC%84%B1%EC%82%B0%EC%9D%8D%20%EA%B8%88%EB%B0%B1%EC%A1%B0%EB%A1%9C%20114",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjAmcOaPegas86DifM4RYgZE8Y9bVgiRM3HIKwp3piLszG3c7JKwAcdYywcMx_jaLdl5mkuMihQl9jNREXBvyGMI0waYeqHh0-fMH3y-BzMoAGO45Cg58XfIo6g5uH50T0YyCPxuhWLw0cW1Lw=s4800-w800",
    certification: "착한가격업소(행정안전부)",
    recommendNote: "착한가격업소로 지정된 곳, 대표메뉴 국밥 8,000원",
    youtubers: [
    ]
  },
  {
    id: "chk-038",
    name: "옛날통닭닭치고족치고함덕점",
    category: "한식",
    address: "제주특별자치도 제주시 조천읍 함와로 54",
    phone: "064-784-1752",
    lat: 33.53531866636005,
    lng: 126.67536410875003,
    kakaoUrl: "http://place.map.kakao.com/1856565562",
    naverUrl: "https://map.naver.com/p/search/%EC%98%9B%EB%82%A0%ED%86%B5%EB%8B%AD%EB%8B%AD%EC%B9%98%EA%B3%A0%EC%A1%B1%EC%B9%98%EA%B3%A0%ED%95%A8%EB%8D%95%EC%A0%90%20%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%9C%EC%A3%BC%EC%8B%9C%20%EC%A1%B0%EC%B2%9C%EC%9D%8D%20%ED%95%A8%EC%99%80%EB%A1%9C%2054",
    rating: null,
    reviewCount: null,
    photoUrl: "https://lh3.googleusercontent.com/place-photos/AG9NLjBLi3H53yykjsLrAZr5s0bMAyQIv94TTm1Pn2xG_6-MKSnlpSO5otFT6_Tcnt3_aRq3t9vTZwzVEW_fF6kXBwPjBGU6zQL1fIsvIEEYL4bxCQ0d9cZdycB0A460g6s0ToI7KCWqsHNmF4XSRQ=s4800-w800",
    certification: "착한가격업소(행정안전부)",
    recommendNote: "착한가격업소로 지정된 곳, 대표메뉴 양념통닭 15,000원",
    youtubers: [
    ]
  }
];
