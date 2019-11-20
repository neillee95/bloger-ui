import axios from '../axios';

export function updateAboutMe(content) {
  return axios.put('/admin/aboutme',
    content,
    {
      headers: {
        'Content-Type': 'text/plain'
      }
    }
  );
}
