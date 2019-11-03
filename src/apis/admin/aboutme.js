import axios from '../axios';

export function getAboutMe() {
  return axios.get('/aboutme');
}

export function updateAboutMe(content) {
  return axios.put('/admin/aboutme', content);
}
