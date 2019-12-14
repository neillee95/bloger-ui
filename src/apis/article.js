import axios from "./axios";

export function getArticles(page) {
  return axios.get('/articles', {params: {page}});
}

export function getArticle(articleId) {
  return axios.get(`/article/${articleId}`);
}

export function viewArticleAndCount(articleId) {
  return axios.put(`/article/${articleId}/view`);
}
