import axios from 'axios';
import { BASE_PATH } from '../constants';

const api = axios.create({
  baseURL: BASE_PATH,
});

export default api;
