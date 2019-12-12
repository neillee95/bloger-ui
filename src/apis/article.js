import axios from "./axios";

export function getArticles() {
  return axios.get('/articles');
}

export function getArticle(articleId) {
  return axios.get(`/article/${articleId}`);
}

export function viewArticleAndCount(articleId) {
  return axios.put(`/article/${articleId}/view`);
}
