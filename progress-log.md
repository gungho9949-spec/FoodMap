# FoodMap 작업 진행 로그

자리 비운 사이 자동 진행 기록. 최신 항목이 아래로 추가됨.

---

## 2026-08-15 (Day 1)

### 1-1. videoUrl 채널별 현황 (완료)

전체 660곳, `youtubers` 배열 기준 채널별 추천 건수 / videoUrl 채워진 건수:

| 채널 | 추천 건수 | videoUrl 채워짐 |
|---|---|---|
| 쯔양 | 436 | 0 |
| 승우아빠 | 64 | 0 |
| 식객 허영만의 백반기행 | 44 | 0 |
| 최자로드 | 40 | 0 |
| 성시경의 먹을텐데 | 38 | 0 |
| 또간집(풍자) | 28 | 0 |
| 전지적 참견 시점(이영자) | 26 | 0 |
| 맛있는 녀석들 | 2 | 0 |

전 채널 videoUrl 0건 — 처음부터 매칭 필요.

### 1-2/1-3. YouTube 영상 매칭 — 🚫 차단됨 (API 키 없음)

- 환경변수/`.env` 파일 전체를 뒤졌지만 `YOUTUBE_API_KEY`(또는 유사 키)를 찾지 못함
  (`data/.env.txt`에는 `GOOGLE_PLACES_KEY`만 존재)
- 혹시 같은 GCP 프로젝트에서 YouTube Data API v3가 같이 활성화되어 있을까 싶어
  기존 `GOOGLE_PLACES_KEY`로 `youtube/v3/search` 호출을 테스트함 → 결과:
  ```
  403 PERMISSION_DENIED / API_KEY_SERVICE_BLOCKED
  "Requests to this API youtube method ... are blocked."
  ```
  → 이 키는 YouTube Data API용으로 활성화/허용되어 있지 않음. 사용 불가.
- **YouTube Data API 키는 사용자가 Google Cloud Console에서 직접 발급해야 하는 자격 증명이라
  제가 임의로 만들거나 우회할 수 없습니다.** 자리 비우신 동안 이 작업은 진행이 불가능하여
  **1번 작업(유튜브 영상 매칭)은 전체 보류**하고, 우선순위상 다음 작업들을 먼저 진행합니다.
- 키를 발급받으시면(YouTube Data API v3 활성화 필요) `data/.env.txt`에
  `YOUTUBE_API_KEY=...` 한 줄 추가해주시면 이어서 진행하겠습니다.

**→ 순서를 조정해 2번(필터 UI) → 3번(평점 재시도) → 4번(unmatched 정리) 순으로 진행합니다.**
(1번은 키 확보 시 재개)

---
