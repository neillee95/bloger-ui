import axios from "./axios";

export function getMetrics() {
  return axios.get('/metrics');
}
