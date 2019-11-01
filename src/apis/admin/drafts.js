import axios from "../axios";

export function getDrafts() {
  return axios.get('/admin/drafts');
}

export function publish(articleId) {
  return axios.put(`/admin/article/${articleId}/publish`);
}

export function unpublish(articleId) {
  return axios.put(`/admin/article/${articleId}/unpublish`);
}
