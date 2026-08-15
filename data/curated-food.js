// 유튜버 추천 맛집 데이터 (통합 스키마: youtubers 배열)
// 여러 유튜버가 같은 곳을 추천한 경우 youtubers 배열에 여러 항목이 들어감

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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "서울로7017 인근에 위치한 닭요리 전문점으로, 팬들 사이에서 대표 방문 맛집으로 회자된다."
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
    rating: null,
    reviewCount: null,
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-013",
    name: "BBQ 빌리지 송리단길점",
    category: "BBQ",
    address: "서울 송파구 석촌호수로 284",
    phone: "02-2203-8292",
    lat: 37.510854252512566,
    lng: 127.10715207964112,
    kakaoUrl: "http://place.map.kakao.com/1403631289",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-017",
    name: "모트 32 서울",
    category: "중국요리",
    address: "서울 서초구 신반포로 176",
    phone: "02-6282-0320",
    lat: 37.50324245415351,
    lng: 127.00358509602569,
    kakaoUrl: "http://place.map.kakao.com/1744813047",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-024",
    name: "개화식당",
    category: "중국요리",
    address: "경기 평택시 통복시장로6번길 2",
    phone: "031-655-2225",
    lat: 36.99568970617554,
    lng: 127.0851637903361,
    kakaoUrl: "http://place.map.kakao.com/11039136",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-029",
    name: "고동경양 문래본점",
    category: "양식",
    address: "서울 영등포구 경인로72길 4",
    phone: "02-2671-7123",
    lat: 37.510626516116666,
    lng: 126.89209722472836,
    kakaoUrl: "http://place.map.kakao.com/1475914998",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-032",
    name: "고향손칼국수",
    category: "칼국수",
    address: "경기 고양시 일산서구 중앙로 1371",
    phone: "031-914-9866",
    lat: 37.66687281115239,
    lng: 126.76630300840841,
    kakaoUrl: "http://place.map.kakao.com/21479267",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-041",
    name: "괭이부리마을 마곡김장훈점",
    category: "해물,생선",
    address: "서울 강서구 강서로 391",
    phone: null,
    lat: 37.5605446535829,
    lng: 126.838427289344,
    kakaoUrl: "http://place.map.kakao.com/455388326",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-044",
    name: "구들짱황소곱창",
    category: "곱창,막창",
    address: "경기 안양시 동안구 인덕원로 33",
    phone: "031-424-2777",
    lat: 37.40258935617114,
    lng: 126.97447034946981,
    kakaoUrl: "http://place.map.kakao.com/644351777",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-050",
    name: "굴과찜사랑 본사직영점",
    category: "굴,전복",
    address: "서울 성동구 행당로17길 23",
    phone: "02-2296-9922",
    lat: 37.56033886509209,
    lng: 127.03295257700374,
    kakaoUrl: "http://place.map.kakao.com/15278736",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-057",
    name: "금성관",
    category: "곰탕",
    address: "서울 중구 남대문로 29",
    phone: "02-753-7898",
    lat: 37.56143177633828,
    lng: 126.97885526219387,
    kakaoUrl: "http://place.map.kakao.com/20534938",
    rating: null,
    reviewCount: null,
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
    id: "jjy-058",
    name: "금성식당",
    category: "육류,고기",
    address: "전남광주통합특별시 동구 제봉로222번길 2",
    phone: "062-227-4717",
    lat: 35.1550911838805,
    lng: 126.913924730038,
    kakaoUrl: "http://place.map.kakao.com/21224205",
    rating: null,
    reviewCount: null,
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
    id: "jjy-059",
    name: "금암소바",
    category: "일식",
    address: "전북특별자치도 전주시 덕진구 기린대로 400-75",
    phone: "063-278-0945",
    lat: 35.838493649647525,
    lng: 127.1332005894921,
    kakaoUrl: "http://place.map.kakao.com/16779100",
    rating: null,
    reviewCount: null,
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
    id: "jjy-060",
    name: "금은옥",
    category: "육류,고기",
    address: "전북특별자치도 순창군 팔덕면 찬물내기길 2",
    phone: "010-8897-2233",
    lat: 35.380237923412395,
    lng: 127.10201413305116,
    kakaoUrl: "http://place.map.kakao.com/1515963409",
    rating: null,
    reviewCount: null,
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
    id: "jjy-061",
    name: "기라성",
    category: "중국요리",
    address: "전북특별자치도 부안군 계화면 간재로 461",
    phone: "063-582-1040",
    lat: 35.764106253215076,
    lng: 126.69265603439607,
    kakaoUrl: "http://place.map.kakao.com/24481979",
    rating: null,
    reviewCount: null,
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
    id: "jjy-062",
    name: "기장손만두",
    category: "분식",
    address: "부산 기장군 기장읍 차성동로67번길 2-4",
    phone: "0507-1321-7367",
    lat: 35.2440285557,
    lng: 129.215952674612,
    kakaoUrl: "http://place.map.kakao.com/15907104",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-065",
    name: "김가네분식",
    category: "분식",
    address: "부산 기장군 기장읍 읍내로 104",
    phone: "051-724-0427",
    lat: 35.24473634062591,
    lng: 129.21553695883821,
    kakaoUrl: "http://place.map.kakao.com/23878877",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-071",
    name: "김종구의참치박사",
    category: "참치회",
    address: "서울 동작구 동작대로 25-1",
    phone: "02-523-3799",
    lat: 37.4787011422244,
    lng: 126.981010859595,
    kakaoUrl: "http://place.map.kakao.com/27328740",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-073",
    name: "꽃새우영번지 역삼점",
    category: "해물,생선",
    address: "서울 강남구 언주로 536",
    phone: "02-501-2050",
    lat: 37.5061941654576,
    lng: 127.041371600279,
    kakaoUrl: "http://place.map.kakao.com/25968685",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-079",
    name: "남영돈",
    category: "육류,고기",
    address: "서울 용산구 한강대로80길 17",
    phone: "02-793-3598",
    lat: 37.5427503629762,
    lng: 126.973775391327,
    kakaoUrl: "http://place.map.kakao.com/1228257268",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-082",
    name: "내고향강원도",
    category: "회",
    address: "인천 제물포구 연안부두로75번길 34",
    phone: "032-883-4547",
    lat: 37.45158339061045,
    lng: 126.60175263207255,
    kakaoUrl: "http://place.map.kakao.com/11597189",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-087",
    name: "놀부만두",
    category: "분식",
    address: "서울 동대문구 망우로16길 15",
    phone: "02-2241-7550",
    lat: 37.58936199352348,
    lng: 127.06150364912116,
    kakaoUrl: "http://place.map.kakao.com/16063288",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-090",
    name: "뉴타운 생양고기",
    category: "육류,고기",
    address: "서울 중구 난계로 205",
    phone: "02-2231-7712",
    lat: 37.569842175425,
    lng: 127.023267260026,
    kakaoUrl: "http://place.map.kakao.com/1198457054",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-097",
    name: "대궁",
    category: "한정식",
    address: "전북특별자치도 순창군 순창읍 순창5길 20",
    phone: "063-653-8234",
    lat: 35.373554792626,
    lng: 127.14044024629,
    kakaoUrl: "http://place.map.kakao.com/18495699",
    rating: null,
    reviewCount: null,
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
    id: "jjy-099",
    name: "대일분식",
    category: "분식",
    address: "전북특별자치도 익산시 중앙로3길 26-7",
    phone: "063-852-2374",
    lat: 35.9415476664055,
    lng: 126.950561996469,
    kakaoUrl: "http://place.map.kakao.com/21506143",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-111",
    name: "동대문엽기떡볶이 본점홀매장",
    category: "동대문엽기떡볶이",
    address: "서울 중구 퇴계로75길 15",
    phone: "02-2234-8592",
    lat: 37.56611602083025,
    lng: 127.01558053426601,
    kakaoUrl: "http://place.map.kakao.com/1624572111",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-125",
    name: "라면팜 외대점",
    category: "분식",
    address: "서울 동대문구 이문로25길 36",
    phone: "0507-1436-1074",
    lat: 37.5955700336484,
    lng: 127.05752065393662,
    kakaoUrl: "http://place.map.kakao.com/1566501996",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-129",
    name: "레알라면",
    category: "분식",
    address: "서울 동대문구 회기로25길 23-5",
    phone: "0507-1311-4208",
    lat: 37.59109946331917,
    lng: 127.05532060332087,
    kakaoUrl: "http://place.map.kakao.com/21327910",
    rating: null,
    reviewCount: null,
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
    id: "jjy-130",
    name: "롯데리아 면목중앙점",
    category: "롯데리아",
    address: "서울 중랑구 면목로 415",
    phone: "02-439-8245",
    lat: 37.5890322446018,
    lng: 127.087223379478,
    kakaoUrl: "http://place.map.kakao.com/7856782",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-152",
    name: "몽탄",
    category: "육류,고기",
    address: "서울 용산구 백범로99길 50",
    phone: "02-794-8592",
    lat: 37.53599611679934,
    lng: 126.97224578759753,
    kakaoUrl: "http://place.map.kakao.com/220597413",
    rating: null,
    reviewCount: null,
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
    id: "jjy-153",
    name: "무공돈까스 동탄호수공원점",
    category: "무공돈까스",
    address: "경기 화성시 동탄구 동탄대로 182",
    phone: "031-377-3513",
    lat: 37.17075857107155,
    lng: 127.10725998859576,
    kakaoUrl: "http://place.map.kakao.com/119302602",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-157",
    name: "뮌헨호프",
    category: "호프,요리주점",
    address: "서울 중구 을지로14길 30",
    phone: "02-2273-2288",
    lat: 37.564897729978,
    lng: 126.991997632865,
    kakaoUrl: "http://place.map.kakao.com/1626559942",
    rating: null,
    reviewCount: null,
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
    id: "jjy-158",
    name: "미남참치 신림점",
    category: "참치회",
    address: "서울 관악구 남부순환로 1589",
    phone: "02-875-7538",
    lat: 37.4842340583771,
    lng: 126.92719916344,
    kakaoUrl: "http://place.map.kakao.com/222726140",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-162",
    name: "미아리우동집 본점",
    category: "돈까스,우동",
    address: "서울 성북구 종암로 176",
    phone: "02-918-1112",
    lat: 37.60563123391545,
    lng: 127.03174152636089,
    kakaoUrl: "http://place.map.kakao.com/20549279",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-171",
    name: "백제정육점",
    category: "육류,고기",
    address: "서울 종로구 종로35길 34",
    phone: "02-762-7491",
    lat: 37.5726446952293,
    lng: 127.003952922261,
    kakaoUrl: "http://place.map.kakao.com/26967162",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-186",
    name: "부추소곱창",
    category: "곱창,막창",
    address: "서울 동대문구 왕산로43길 16",
    phone: "010-4736-9897",
    lat: 37.5837459869045,
    lng: 127.048184806812,
    kakaoUrl: "http://place.map.kakao.com/350312322",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-190",
    name: "빨간부산오뎅",
    category: "분식",
    address: "서울 송파구 백제고분로48길 36",
    phone: "02-6439-5050",
    lat: 37.5103927830355,
    lng: 127.11681965612,
    kakaoUrl: "http://place.map.kakao.com/1827236569",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-192",
    name: "뻘하우스",
    category: "조개",
    address: "서울 중구 다산로47길 15",
    phone: "02-2231-7292",
    lat: 37.5665314424681,
    lng: 127.015099562759,
    kakaoUrl: "http://place.map.kakao.com/19162981",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-207",
    name: "서울떡볶이",
    category: "떡볶이",
    address: "제주특별자치도 제주시 동문로4길 11",
    phone: "064-726-9266",
    lat: 33.5122953202419,
    lng: 126.527834618103,
    kakaoUrl: "http://place.map.kakao.com/12582103",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-209",
    name: "서유기짬뽕",
    category: "중국요리",
    address: "충남 당진시 신평면 삽교천3길 60",
    phone: "041-363-2017",
    lat: 36.89146638897112,
    lng: 126.82234301604028,
    kakaoUrl: "http://place.map.kakao.com/1598787020",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-212",
    name: "선희식육식당",
    category: "육류,고기",
    address: "전남광주통합특별시 목포시 비파로 145",
    phone: "061-283-2334",
    lat: 34.809883892795,
    lng: 126.420876802296,
    kakaoUrl: "http://place.map.kakao.com/168909374",
    rating: null,
    reviewCount: null,
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
    id: "jjy-213",
    name: "성북동돼지갈비 본점",
    category: "갈비",
    address: "서울 성북구 성북로 115",
    phone: "02-764-2420",
    lat: 37.593288257663986,
    lng: 126.99607316143037,
    kakaoUrl: "http://place.map.kakao.com/10479275",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-216",
    name: "성이네천원김밥",
    category: "한식",
    address: "서울 중랑구 중랑역로 150",
    phone: "02-976-5648",
    lat: 37.606690600278895,
    lng: 127.07710690494243,
    kakaoUrl: "http://place.map.kakao.com/698990184",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 찜·탕 맛집."
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
    id: "jjy-223",
    name: "소문난칼국수",
    category: "칼국수",
    address: "경기 이천시 설봉로58번길 30",
    phone: "031-635-6102",
    lat: 37.2811375395329,
    lng: 127.439916869696,
    kakaoUrl: "http://place.map.kakao.com/10563611",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-226",
    name: "솔밭뽈살하얀살전문",
    category: "육류,고기",
    address: "서울 은평구 갈현로 62",
    phone: "02-388-5937",
    lat: 37.60337704480158,
    lng: 126.91053006318089,
    kakaoUrl: "http://place.map.kakao.com/12502472",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-229",
    name: "송정식당",
    category: "한식",
    address: "서울 종로구 종로40가길 13",
    phone: "02-2267-2817",
    lat: 37.570240760320594,
    lng: 127.00586919907234,
    kakaoUrl: "http://place.map.kakao.com/15758579",
    rating: null,
    reviewCount: null,
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
    id: "jjy-230",
    name: "송주불냉면&수제왕돈까스 안양본점",
    category: "냉면",
    address: "경기 안양시 만안구 안양로257번길 14",
    phone: "031-468-9298",
    lat: 37.3954814249834,
    lng: 126.923025282115,
    kakaoUrl: "http://place.map.kakao.com/17174682",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-238",
    name: "수제비먹는닭갈비 본점",
    category: "닭요리",
    address: "서울 성동구 왕십리로21다길 39",
    phone: "02-2299-8557",
    lat: 37.55964952323087,
    lng: 127.03323522268896,
    kakaoUrl: "http://place.map.kakao.com/413620947",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-245",
    name: "신가원설렁탕&제주본가",
    category: "설렁탕",
    address: "서울 중구 을지로3길 21",
    phone: "02-778-8898",
    lat: 37.56701749691807,
    lng: 126.9815034814155,
    kakaoUrl: "http://place.map.kakao.com/27300574",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-250",
    name: "큰집설농탕",
    category: "설렁탕",
    address: "서울 양천구 화곡로4길 9",
    phone: "02-2605-1999",
    lat: 37.538598155408465,
    lng: 126.8275966297638,
    kakaoUrl: "http://place.map.kakao.com/20623675",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-257",
    name: "압구정곱창 본점",
    category: "곱창,막창",
    address: "서울 강남구 압구정로42길 25-8",
    phone: "02-511-0042",
    lat: 37.5270092181593,
    lng: 127.03563154465,
    kakaoUrl: "http://place.map.kakao.com/27402317",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-260",
    name: "양미옥 남대문점",
    category: "육류,고기",
    address: "서울 중구 남대문로 27-2",
    phone: "02-3789-9288",
    lat: 37.56142095077293,
    lng: 126.97877943305056,
    kakaoUrl: "http://place.map.kakao.com/207440691",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-270",
    name: "영생덕",
    category: "중국요리",
    address: "대구 중구 종로 39",
    phone: "053-255-5777",
    lat: 35.869384767619,
    lng: 128.591393678021,
    kakaoUrl: "http://place.map.kakao.com/9252005",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-272",
    name: "영주랜떡",
    category: "떡볶이",
    address: "경북 영주시 중앙로83번길 26-2",
    phone: null,
    lat: 36.8237256673362,
    lng: 128.623692038873,
    kakaoUrl: "http://place.map.kakao.com/2015360199",
    rating: null,
    reviewCount: null,
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
    id: "jjy-273",
    name: "옛날중국집",
    category: "중국요리",
    address: "서울 성북구 성북로8길 8",
    phone: "02-764-0094",
    lat: 37.590813216797244,
    lng: 127.00437395474002,
    kakaoUrl: "http://place.map.kakao.com/20944335",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-280",
    name: "오근내닭갈비 용산본점",
    category: "닭요리",
    address: "서울 용산구 이촌로29길 15",
    phone: "02-797-0131",
    lat: 37.52452365757104,
    lng: 126.95970882066202,
    kakaoUrl: "http://place.map.kakao.com/27269085",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-284",
    name: "오마카세 오사이초밥 잠실송리단길점",
    category: "초밥,롤",
    address: "서울 송파구 백제고분로45길 17-3",
    phone: "02-423-5422",
    lat: 37.50956464143005,
    lng: 127.10941684026714,
    kakaoUrl: "http://place.map.kakao.com/180526534",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-288",
    name: "옥천옥",
    category: "설렁탕",
    address: "서울 동대문구 하정로 16",
    phone: "02-2292-8201",
    lat: 37.572508327034626,
    lng: 127.0269980020464,
    kakaoUrl: "http://place.map.kakao.com/22618131",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-295",
    name: "우대포 분당직영점",
    category: "육류,고기",
    address: "경기 성남시 분당구 서현동 261-6",
    phone: "0507-1335-6139",
    lat: 37.38583889337056,
    lng: 127.1217593866941,
    kakaoUrl: "http://place.map.kakao.com/1453370999",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-299",
    name: "우면동소나무집",
    category: "닭요리",
    address: "서울 서초구 식유촌길 71",
    phone: "02-572-6794",
    lat: 37.4583969185105,
    lng: 127.011578479991,
    kakaoUrl: "http://place.map.kakao.com/13093421",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-301",
    name: "우암국수",
    category: "국수",
    address: "충북 청주시 청원구 향군로 35",
    phone: "043-255-9766",
    lat: 36.648867248575,
    lng: 127.486345223835,
    kakaoUrl: "http://place.map.kakao.com/10707829",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-305",
    name: "울프강스테이크하우스 청담점",
    category: "스테이크,립",
    address: "서울 강남구 선릉로152길 21",
    phone: "02-556-8700",
    lat: 37.52439983131448,
    lng: 127.04141558950498,
    kakaoUrl: "http://place.map.kakao.com/26572124",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "쯔양이 방문해 리뷰한 고기 맛집."
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
    id: "jjy-331",
    name: "일미간장게장",
    category: "게,대게",
    address: "서울 동대문구 장한로24길 7",
    phone: "02-2242-4338",
    lat: 37.57086352866605,
    lng: 127.07139653824059,
    kakaoUrl: "http://place.map.kakao.com/21360025",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-334",
    name: "입이즐거운그만두",
    category: "분식",
    address: "충북 청주시 청원구 사뜸로 105",
    phone: "043-241-6005",
    lat: 36.67045109153862,
    lng: 127.47741118498271,
    kakaoUrl: "http://place.map.kakao.com/117414142",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-342",
    name: "장수회관",
    category: "육류,고기",
    address: "서울 동대문구 전농로16길 16",
    phone: "02-2243-5678",
    lat: 37.5781877234093,
    lng: 127.058252186758,
    kakaoUrl: "http://place.map.kakao.com/9930398",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-344",
    name: "전농곱창싱",
    category: "곱창,막창",
    address: "서울 동대문구 전농로14길 14",
    phone: "02-2248-6191",
    lat: 37.5761406676034,
    lng: 127.058246063905,
    kakaoUrl: "http://place.map.kakao.com/12998369",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-350",
    name: "전통춘천닭갈비",
    category: "닭요리",
    address: "경기 성남시 분당구 미금일로80번길 9",
    phone: "031-716-0342",
    lat: 37.3468532250388,
    lng: 127.110837067756,
    kakaoUrl: "http://place.map.kakao.com/20617331",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-358",
    name: "제주라면 2호점",
    category: "분식",
    address: "제주특별자치도 제주시 서해안로 210",
    phone: "0507-1439-9666",
    lat: 33.50694524396482,
    lng: 126.46987506474804,
    kakaoUrl: "http://place.map.kakao.com/334649458",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-366",
    name: "정궁중화요리",
    category: "중국요리",
    address: "서울 동대문구 약령시로 116",
    phone: "02-963-4210",
    lat: 37.5829155181329,
    lng: 127.042872227605,
    kakaoUrl: "http://place.map.kakao.com/15810574",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-369",
    name: "즉떡이네",
    category: "떡볶이",
    address: "서울 강동구 천호옛길 96",
    phone: "02-477-9267",
    lat: 37.5371357378669,
    lng: 127.126148353868,
    kakaoUrl: "http://place.map.kakao.com/27245818",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-378",
    name: "오뎅이랑정종",
    category: "오뎅바",
    address: "서울 관악구 남현1길 58",
    phone: "02-581-8950",
    lat: 37.475749368064,
    lng: 126.980600093289,
    kakaoUrl: "http://place.map.kakao.com/21330749",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-389",
    name: "청해조개구이회센타 영미네맛집",
    category: "회",
    address: "충남 당진시 신평면 삽교천3길 20",
    phone: "041-362-8889",
    lat: 36.8902858878102,
    lng: 126.822904426381,
    kakaoUrl: "http://place.map.kakao.com/838893716",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-393",
    name: "초원튀김전문점",
    category: "분식",
    address: "경기 고양시 덕양구 마상로154번길 34",
    phone: "031-964-2911",
    lat: 37.6575763240644,
    lng: 126.838217250012,
    kakaoUrl: "http://place.map.kakao.com/606972245",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-420",
    name: "풍미당",
    category: "국수",
    address: "충북 옥천군 옥천읍 중앙로 23-1",
    phone: "043-732-1827",
    lat: 36.299686589433385,
    lng: 127.56776664041031,
    kakaoUrl: "http://place.map.kakao.com/9536499",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
    youtubers: [
      {
        name: "쯔양",
        videoTitle: null,
        videoUrl: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-447",
    name: "신형제횟집",
    category: "회",
    address: "경남 통영시 사량면 상도일주로 1580-8",
    phone: "055-643-3876",
    lat: 34.8451809284557,
    lng: 128.219451372487,
    kakaoUrl: "http://place.map.kakao.com/1607818083",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-449",
    name: "호근동",
    category: "육류,고기",
    address: "제주특별자치도 제주시 광양10길 17",
    phone: "064-752-3280",
    lat: 33.49862062271936,
    lng: 126.52847706857563,
    kakaoUrl: "http://place.map.kakao.com/10986589",
    rating: null,
    reviewCount: null,
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
    id: "jjy-450",
    name: "호랑이쌀국수 경대본점",
    category: "베트남음식",
    address: "대구 북구 대학로 103-2",
    phone: "053-955-5756",
    lat: 35.8941780169878,
    lng: 128.610779017631,
    kakaoUrl: "http://place.map.kakao.com/1864860472",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "jjy-458",
    name: "화동문어",
    category: "해물,생선",
    address: "강원특별자치도 강릉시 주문진읍 시장길 38",
    phone: "033-662-2703",
    lat: 37.89111205833987,
    lng: 128.82773266891087,
    kakaoUrl: "http://place.map.kakao.com/1519521521",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "sc-002",
    name: "육개옥",
    category: "국밥",
    address: "서울 강남구 봉은사로 167",
    phone: "02-516-9181",
    lat: 37.507238568097,
    lng: 127.032256273604,
    kakaoUrl: "http://place.map.kakao.com/1808543028",
    rating: null,
    reviewCount: null,
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
    id: "sc-003",
    name: "안동국시",
    category: "국수",
    address: "서울 강남구 언주로167길 46",
    phone: "02-548-4986",
    lat: 37.5265964750989,
    lng: 127.029391111084,
    kakaoUrl: "http://place.map.kakao.com/10583440",
    rating: null,
    reviewCount: null,
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
    id: "sc-004",
    name: "신미식당",
    category: "육류,고기",
    address: "서울 강남구 압구정로 214",
    phone: "02-516-4900",
    lat: 37.52793498570478,
    lng: 127.03087366251374,
    kakaoUrl: "http://place.map.kakao.com/11892123",
    rating: null,
    reviewCount: null,
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
    id: "sc-005",
    name: "부흥왕족발",
    category: "족발,보쌈",
    address: "서울 강남구 삼성로146길 8",
    phone: "02-546-3727",
    lat: 37.52309327329298,
    lng: 127.04876908841662,
    kakaoUrl: "http://place.map.kakao.com/10466580",
    rating: null,
    reviewCount: null,
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
    id: "sc-006",
    name: "이남장 삼성점",
    category: "설렁탕",
    address: "서울 강남구 봉은사로108길 21",
    phone: "02-569-8726",
    lat: 37.5135684607614,
    lng: 127.064450126559,
    kakaoUrl: "http://place.map.kakao.com/16649489",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "sc-008",
    name: "대우부대찌개",
    category: "찌개,전골",
    address: "서울 강남구 테헤란로25길 34",
    phone: "02-552-1663",
    lat: 37.502696655575825,
    lng: 127.03521737405278,
    kakaoUrl: "http://place.map.kakao.com/7819490",
    rating: null,
    reviewCount: null,
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
    id: "sc-009",
    name: "도명골청국장",
    category: "한식",
    address: "서울 강남구 봉은사로114길 38",
    phone: "02-569-6999",
    lat: 37.51262098003945,
    lng: 127.06540621093926,
    kakaoUrl: "http://place.map.kakao.com/2130836465",
    rating: null,
    reviewCount: null,
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
    id: "sc-010",
    name: "왕스덕",
    category: "중식",
    address: "경기 성남시 분당구 대왕판교로645번길 36",
    phone: "031-606-8517",
    lat: 37.4004108231145,
    lng: 127.102084009388,
    kakaoUrl: "http://place.map.kakao.com/1379913602",
    rating: null,
    reviewCount: null,
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
    id: "sc-013",
    name: "미남옥",
    category: "곰탕",
    address: "서울 강남구 언주로153길 12",
    phone: "02-549-5553",
    lat: 37.52294578490738,
    lng: 127.03219063516923,
    kakaoUrl: "http://place.map.kakao.com/940697725",
    rating: null,
    reviewCount: null,
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
    id: "sc-014",
    name: "삼호짱뚱이",
    category: "해물,생선",
    address: "서울 강남구 도산대로34길 11",
    phone: "02-547-1416",
    lat: 37.51963671546776,
    lng: 127.03101729816763,
    kakaoUrl: "http://place.map.kakao.com/7929136",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "sc-016",
    name: "영미오리탕",
    category: "오리",
    address: "전남광주통합특별시 북구 경양로 126",
    phone: "062-527-0248",
    lat: 35.16138362196164,
    lng: 126.90552043216846,
    kakaoUrl: "http://place.map.kakao.com/8441874",
    rating: null,
    reviewCount: null,
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
    id: "sc-017",
    name: "맛좋은순대국",
    category: "순대",
    address: "서울 광진구 자양번영로1길 22",
    phone: "02-458-5737",
    lat: 37.530865017051845,
    lng: 127.07367768605853,
    kakaoUrl: "http://place.map.kakao.com/10346328",
    rating: null,
    reviewCount: null,
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
    id: "sc-019",
    name: "어머니대성집",
    category: "해장국",
    address: "서울 동대문구 왕산로11길 4",
    phone: "02-923-1718",
    lat: 37.57741837425039,
    lng: 127.02858466713235,
    kakaoUrl: "http://place.map.kakao.com/907979960",
    rating: null,
    reviewCount: null,
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
    id: "sc-021",
    name: "권영수대가전골",
    category: "찌개,전골",
    address: "서울 동대문구 고산자로36길 3",
    phone: "02-960-6043",
    lat: 37.57945802812345,
    lng: 127.03875167673729,
    kakaoUrl: "http://place.map.kakao.com/1910019452",
    rating: null,
    reviewCount: null,
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
    id: "sc-022",
    name: "부영각",
    category: "중국요리",
    address: "서울 마포구 토정로 268",
    phone: "02-715-7095",
    lat: 37.5425107266566,
    lng: 126.939503454631,
    kakaoUrl: "http://place.map.kakao.com/10470081",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "sc-024",
    name: "길상양꼬치",
    category: "양꼬치",
    address: "서울 서대문구 연세로5가길 17",
    phone: "02-336-8018",
    lat: 37.5571877488669,
    lng: 126.935639080919,
    kakaoUrl: "http://place.map.kakao.com/25799235",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "sc-026",
    name: "성천막국수 논현점",
    category: "국수",
    address: "서울 서초구 강남대로 545-12",
    phone: "02-548-5529",
    lat: 37.510370368086654,
    lng: 127.02058515818821,
    kakaoUrl: "http://place.map.kakao.com/862508200",
    rating: null,
    reviewCount: null,
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
    id: "sc-027",
    name: "서이축산",
    category: "정육점",
    address: "서울 서초구 서래로 29",
    phone: "02-535-1145",
    lat: 37.497564353887654,
    lng: 126.99815217560459,
    kakaoUrl: "http://place.map.kakao.com/1238960275",
    rating: null,
    reviewCount: null,
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
    id: "sc-028",
    name: "영동설렁탕",
    category: "설렁탕",
    address: "서울 서초구 강남대로101안길 24",
    phone: "02-543-4716",
    lat: 37.51615082556445,
    lng: 127.01737204634458,
    kakaoUrl: "http://place.map.kakao.com/8008344",
    rating: null,
    reviewCount: null,
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
    id: "sc-029",
    name: "화목순대국",
    category: "순대",
    address: "서울 영등포구 여의대방로 383",
    phone: "02-780-8191",
    lat: 37.51925139233756,
    lng: 126.93129172468807,
    kakaoUrl: "http://place.map.kakao.com/21423297",
    rating: null,
    reviewCount: null,
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
    id: "sc-030",
    name: "산동교자",
    category: "중국요리",
    address: "서울 중구 남대문로 52-13",
    phone: "02-778-4150",
    lat: 37.56213783919516,
    lng: 126.98240562832072,
    kakaoUrl: "http://place.map.kakao.com/7912905",
    rating: null,
    reviewCount: null,
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
    id: "sc-031",
    name: "필동면옥",
    category: "냉면",
    address: "서울 중구 서애로 26",
    phone: "02-2266-2611",
    lat: 37.5603983847784,
    lng: 126.99693958989,
    kakaoUrl: "http://place.map.kakao.com/11231325",
    rating: null,
    reviewCount: null,
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
    id: "sc-032",
    name: "진미식당",
    category: "한식",
    address: "서울 용산구 백범로90길 38",
    phone: "02-703-6842",
    lat: 37.53673789215872,
    lng: 126.96960923245895,
    kakaoUrl: "http://place.map.kakao.com/16526880",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "sc-035",
    name: "이태원숯불구이",
    category: "육류,고기",
    address: "서울 용산구 녹사평대로32길 41-5",
    phone: "02-797-7777",
    lat: 37.53306807193163,
    lng: 126.9909013187132,
    kakaoUrl: "http://place.map.kakao.com/27510733",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    id: "sc-038",
    name: "명동함흥면옥 본점",
    category: "냉면",
    address: "서울 중구 명동10길 35-19",
    phone: "02-776-8430",
    lat: 37.562769881012464,
    lng: 126.98568556457165,
    kakaoUrl: "http://place.map.kakao.com/7871208",
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
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
    rating: null,
    reviewCount: null,
    youtubers: [
      {
        name: "또간집(풍자)",
        videoTitle: null,
        videoUrl: null,
        recommendNote: "잠실 주민들만 안다는 로컬 맛집으로 소개됐으며, 차돌·양지·도가니가 들어간 쌀국수가 또갈집으로 선정됐다."
      }
    ]
  }
];
