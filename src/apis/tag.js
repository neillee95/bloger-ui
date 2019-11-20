import axios from './axios';

export function getTags() {
  return axios.get('/tags');
}

export function getArticlesByTag(tag) {
  return axios.get(`/tag/${tag}`);
}
