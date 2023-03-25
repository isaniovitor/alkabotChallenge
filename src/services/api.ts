import axios from 'axios';

// const { REACT_APP_GATEWAY } = process.env;

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export default api;
