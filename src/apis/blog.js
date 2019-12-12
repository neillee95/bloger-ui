import axios from "./axios";

export function getBlogConfig() {
  return axios.get('/system/blog');
}
