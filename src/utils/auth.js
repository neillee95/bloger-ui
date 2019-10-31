import {getCookies, removeCookies, setCookies} from './cookie'

const tokenKey = 'AuthToken';

export function setToken(token) {
  setCookies(tokenKey, token);
}

export function getToken() {
  return getCookies(tokenKey);
}

export function removeToken() {
  removeCookies(tokenKey);
}
