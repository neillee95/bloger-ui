import axios from "@/apis/axios";

export function getLeaveMessages(page) {
  return axios.get('/admin/messages', {params: {page}});
}

export function switchShowState(messageId) {
  return axios.put(`/admin/message/${messageId}/show/switch`);
}
