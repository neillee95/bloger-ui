import axios from "../axios";

export function getDrafts() {
  return axios.get('/admin/drafts');
}

export function publish(articleId) {
  return axios.put(`/admin/draft/${articleId}/publish`);
}
