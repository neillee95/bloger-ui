import axios from "./axios";

export function getArticles() {
  return axios.get('/articles');
}
