import axios from "../axios";

export function updatePassword(passwordForm) {
  return axios.put('/admin/system/password',
    JSON.stringify(passwordForm),
    {
      headers: {
        'Content-Type': 'application/json'
      }
    });
}
