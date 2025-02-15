const GOOGLE_API_KEY = "AIzaSyACb2b7BULfpSMKmBFLA5s9SWMpLuL_204";

export const YOUTUBE_Videos_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const OFFSET_LIVE_CHAT = 10;
