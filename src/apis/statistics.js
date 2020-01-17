import axios from "./axios";

export function getMetrics() {
  return axios.get('/metrics');
}

export function newVisitors(visitor) {
  return axios.post('/statistics/new/visitors',
    JSON.stringify(visitor),
    {
      headers: {
        'Content-Type': 'application/json'
      }
    });
}
