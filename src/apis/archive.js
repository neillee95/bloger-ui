import axios from "./axios";

export function getArchives(page, size) {
  return axios.get('/archives', {params: {"page": page, "size": size}});
}
