import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://game-store-ars7.onrender.com/api',
});

export { instance as axios };
