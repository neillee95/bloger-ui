import axios from '../axios';
import qs from 'qs';

export function saveArticle(article) {
  return axios.post('/admin/article', qs.stringify(article));
}

export function updateArticle(articleId, article) {
  return axios.post(`/admin/article/${articleId}`, qs.stringify(article));
}

export function getArticle(articleId) {
  return axios.get(`/admin/article/${articleId}`);
}

export function getArticles() {
  return axios.get('/admin/articles');
}

export function deleteArticle(articleId) {
  return axios.delete(`/admin/article/${articleId}`);
}
