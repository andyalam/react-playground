import axios from 'axios';

const KEY = 'AIzaSyByXr_SZ6CuC4nMBiFrs5gD0oRaYfbhzio';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
