import axios from './axios';

export function getAboutMe() {
  return axios.get('/aboutme');
}
