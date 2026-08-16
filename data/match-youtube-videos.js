/**
 * curated-food.js의 각 식당에 대해, 캐시된 채널 영상 목록(제목+설명)에서
 * 식당명이 "유일하게" 등장하는 영상이 있으면 videoUrl/videoTitle을 채운다.
 * - 0건 매칭: 검색 자체 안됨
 * - 2건 이상 매칭: 애매함 → 매칭하지 않고 스킵 (동명이인/여러 후보로 기록)
 * 원문(설명) 그대로 복사하지 않고, videoTitle은 실제 영상 제목만 사용.
 *
 * 실행: node data/match-youtube-videos.js <채널명>
 * 예:   node data/match-youtube-videos.js "또간집(풍자)"
 */
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'curated-food.js');
const CACHE_DIR = path.join(__dirname, '..', '_yt-cache');

const CHANNELS = {
  '성시경의 먹을텐데': 'UCl23-Cci_SMqyGXE1T_LYUg',
  '또간집(풍자)': 'UC4ZA57iJrf73bJlApKFeLRw',
  '승우아빠': 'UCgsffS7MfKL6YU3r_U3E-aA',
  '쯔양': 'UCfpaSruWW3S4dibonKXENjA',
};

function normalize(s) {
  return (s || '')
    .replace(/\([^)]*\)/g, '')
    .replace(/[\s\-·,./!?~"'’‘]/g, '')
    .toLowerCase();
}

// 영상 타임스탬프/챕터 라벨이나 보일러플레이트 문구로 흔히 쓰여
// 식당명과 우연히 겹칠 수 있는 일반 단어 — 이 단어들만으로는 매칭하지 않는다.
// ("오프닝"이 승우아빠 채널 타임스탬프 챕터명과 우연히 일치해 오매칭된 사례로 추가됨)
const GENERIC_BLACKLIST = new Set([
  '오프닝', '인트로', '아웃트로', '엔딩', '클로징', '예고', '예고편',
  '하이라이트', '비하인드', '비하인드컷', '쿠키영상', '다음편', '이전편',
  '광고', '협찬', '협찬문의', '비지니스문의', '구독', '좋아요', '알림설정',
  '시작', '끝', '마무리', '먹방', '요리', '레시피', '리뷰',
]);

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

function main() {
  const channelName = process.argv[2];
  if (!channelName || !CHANNELS[channelName]) {
    console.error('사용법: node data/match-youtube-videos.js "<채널명>"');
    console.error('채널명:', Object.keys(CHANNELS).join(', '));
    process.exit(1);
  }
  const channelId = CHANNELS[channelName];
  const cacheFile = path.join(CACHE_DIR, `${channelId}.json`);
  const videos = JSON.parse(fs.readFileSync(cacheFile, 'utf-8'));
  const videosNorm = videos.map(v => ({
    ...v,
    normText: normalize(v.title) + '||' + normalize(v.description),
  }));

  const data = loadData();
  const targets = [];
  data.forEach(food => {
    food.youtubers.forEach(yt => {
      if (yt.name === channelName && !yt.videoUrl) targets.push({ food, yt });
    });
  });

  console.log(`채널: ${channelName} / 영상 ${videos.length}개 / 매칭 대상 ${targets.length}건\n`);

  let matched = 0, notFound = 0, ambiguous = 0;
  const notFoundList = [];
  const ambiguousList = [];

  targets.forEach(({ food, yt }) => {
    const normName = normalize(food.name);
    if (normName.length < 2 || GENERIC_BLACKLIST.has(normName)) {
      notFound++; notFoundList.push(food.name); return;
    }

    const hits = videosNorm.filter(v => v.normText.includes(normName));

    if (hits.length === 0) {
      notFound++;
      notFoundList.push(food.name);
    } else if (hits.length === 1) {
      yt.videoUrl = `https://www.youtube.com/watch?v=${hits[0].videoId}`;
      yt.videoTitle = hits[0].title;
      matched++;
      console.log(`✅ ${food.name} -> ${hits[0].title}`);
    } else {
      // 후보가 여럿이어도, 제목이 서로 사실상 동일(쇼츠+본편 등)하면 가장 오래된(본편일 가능성 높은) 것 채택
      const uniqueTitles = new Set(hits.map(h => normalize(h.title)));
      if (uniqueTitles.size === 1) {
        const best = hits.slice().sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt))[0];
        yt.videoUrl = `https://www.youtube.com/watch?v=${best.videoId}`;
        yt.videoTitle = best.title;
        matched++;
        console.log(`✅ ${food.name} -> ${best.title} (동일제목 ${hits.length}건 중 최초본 채택)`);
      } else {
        ambiguous++;
        ambiguousList.push({ name: food.name, candidates: hits.slice(0, 5).map(h => h.title) });
        console.log(`⚠️  ${food.name} -> 후보 ${hits.length}건, 애매하여 스킵`);
      }
    }
  });

  saveData(data);

  console.log(`\n=== ${channelName} 결과 ===`);
  console.log(`매칭: ${matched} / 검색안됨: ${notFound} / 애매(스킵): ${ambiguous} / 전체: ${targets.length}`);

  fs.writeFileSync(
    path.join(__dirname, '..', `_yt-match-result-${channelId}.json`),
    JSON.stringify({ channelName, matched, notFound, ambiguous, notFoundList, ambiguousList }, null, 2),
    'utf-8'
  );
}

main();
