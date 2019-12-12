import {getCookies, removeCookies, setCookies} from './cookie'
import constant from '@/constant';

export function setToken(token) {
  setCookies(constant.TOKEN_KEY, token);
}

export function getToken() {
  return getCookies(constant.TOKEN_KEY);
}

export function removeToken() {
  removeCookies(constant.TOKEN_KEY);
}
