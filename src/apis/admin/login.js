import axios from "../axios";

export function login(form) {
  return axios.post('/auth', JSON.stringify(form),
    {
      headers: {
        "Content-Type": "application/json"
      }
    });
}
