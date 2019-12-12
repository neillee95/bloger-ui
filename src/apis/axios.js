import axios from 'axios';
import {Message, MessageBox} from 'element-ui';
import {getToken, removeToken} from '@/utils/auth';
import router from "@/router";

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  withCredentials: true,
  timeout: 8000
});

// request interceptor
axiosInstance.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers['Authorization'] = 'Bearer ' + getToken();
    }
    return config
  },
  error => {
    return Promise.reject(error);
  }
);

// response interceptor
axiosInstance.interceptors.response.use(
  response => /* do nothing */response,
  error => {
    const response = error.response;
    if (response) {
      const status = response.status;
      switch (status) {
        case 401:
          MessageBox.confirm('登录信息已失效，请重新登录', '提示', {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            removeToken();
            location.reload();
          });
          break;
        case 403:
          Message({
            message: '你没有该操作权限',
            type: 'error',
            duration: 3 * 1000
          });
          break;
        case 404:
          router.push({path: '/404'});
          break;
        case 500:
          Message({
            message: '请求错误' + error,
            type: 'error',
            duration: 3 * 1000
          });
          break;
      }
      return response;
    } else {
      Message({
        message: '请求失败' + error,
        type: 'error',
        duration: 3 * 1000
      });
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;

