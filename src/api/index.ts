import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://crazy-gold-hospital-gown.cyclic.app/api',
});

export { instance as axios };
