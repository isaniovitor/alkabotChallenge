import api from './api';

export default {
  async get(path: string) {
    const url = `/${path}`;
    return api.get(url);
  },
};
