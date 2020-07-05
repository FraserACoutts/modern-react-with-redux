import axios from 'axios';

const KEY = 'AIzaSyDwESlm4zmU-wnmCT9X9rBmKwZL3Gch5mA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

