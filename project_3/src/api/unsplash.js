import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {Authorization: 'Client-ID 7045b308315db37e2fec1960fde01a088a531221c37e77935a500d39ddcb2cc3'}
});