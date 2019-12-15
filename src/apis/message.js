import axios from './axios';

export function leaveMessage(message) {
  return axios.post('message',
    JSON.stringify(message),
    {
      headers: {
        'Content-Type': 'application/json'
      }
    });
}

export function getLeaveMessages() {
  return axios.get('/messages');
}
