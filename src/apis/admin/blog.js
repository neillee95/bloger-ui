import axios from "../axios";

export function saveBlogConfig(config) {
  return axios.put('/admin/system/blog',
    JSON.stringify(config),
    {
      headers: {
        'Content-Type': 'application/json'
      }
    });
}
