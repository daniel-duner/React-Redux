import axios from 'axios';
const KEY = 'AIzaSyBNN4BJRVwWCC1NhR8q4GUAqdtKPR4xvtA';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3', 
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});