/**
 * YouTube 채널의 전체 업로드 영상(제목+설명+URL)을 가져와 로컬에 캐시한다.
 * playlistItems API는 quota 비용이 낮아(1 unit/call) 전체 영상 목록 수집에 적합.
 *
 * 실행: YOUTUBE_API_KEY=키 node data/fetch-channel-videos.js
 */
const fs = require('fs');
const path = require('path');

const CACHE_DIR = path.join(__dirname, '..', '_yt-cache');
if (!fs.existsSync(CACHE_DIR)) fs.mkdirSync(CACHE_DIR);

const CHANNELS = {
  '성시경의 먹을텐데': 'UCl23-Cci_SMqyGXE1T_LYUg',
  '또간집(풍자)': 'UC4ZA57iJrf73bJlApKFeLRw',
  '승우아빠': 'UCgsffS7MfKL6YU3r_U3E-aA',
  '쯔양': 'UCfpaSruWW3S4dibonKXENjA',
  // TV 방송 채널 (프로그램 전용 채널이 아니라 방송사 종합 채널인 경우도 있음 — 매칭 스크립트에서 태그로 필터링)
  '최자로드': 'UCYdUe6y0F8TQS6siNVS7QMw',
  '식객 허영만의 백반기행': 'UCb5ymSxGa41rYAMDvh22I2Q',
  '전지적 참견 시점(이영자)': 'UCiwQRG2sCcfjKkgxMEdJGPg',
  '맛있는 녀석들': 'UCsOW9TPy2TKkqCchUHL04Fg',
};

async function getUploadsPlaylistId(key, channelId) {
  const res = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${key}`);
  const data = await res.json();
  if (data.error) throw new Error(JSON.stringify(data.error));
  return data.items[0].contentDetails.relatedPlaylists.uploads;
}

async function fetchAllVideos(key, playlistId) {
  const videos = [];
  let pageToken = '';
  while (true) {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=50&key=${key}${pageToken ? '&pageToken=' + pageToken : ''}`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.error) throw new Error(JSON.stringify(data.error));
    (data.items || []).forEach(it => {
      const s = it.snippet;
      if (!s.resourceId || !s.resourceId.videoId) return;
      videos.push({
        videoId: s.resourceId.videoId,
        title: s.title,
        description: s.description || '',
        publishedAt: s.publishedAt,
      });
    });
    if (!data.nextPageToken) break;
    pageToken = data.nextPageToken;
    await new Promise(r => setTimeout(r, 100));
  }
  return videos;
}

async function main() {
  const key = process.env.YOUTUBE_API_KEY;
  if (!key) { console.error('YOUTUBE_API_KEY 환경변수가 없습니다.'); process.exit(1); }

  for (const [name, channelId] of Object.entries(CHANNELS)) {
    const cacheFile = path.join(CACHE_DIR, `${channelId}.json`);
    if (fs.existsSync(cacheFile)) {
      const cached = JSON.parse(fs.readFileSync(cacheFile, 'utf-8'));
      console.log(`[캐시 있음] ${name}: ${cached.length}개 영상`);
      continue;
    }
    console.log(`[가져오는 중] ${name} (${channelId})...`);
    const uploadsId = await getUploadsPlaylistId(key, channelId);
    const videos = await fetchAllVideos(key, uploadsId);
    fs.writeFileSync(cacheFile, JSON.stringify(videos, null, 2), 'utf-8');
    console.log(`[완료] ${name}: ${videos.length}개 영상 저장 (${cacheFile})`);
  }
}

main().catch(e => { console.error('실패:', e); process.exit(1); });
