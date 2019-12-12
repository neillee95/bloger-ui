import axios from "./axios";

export function getArchives(skip, size) {
  return axios.get('/archives', {params: {"skip": skip, "size": size}});
}
