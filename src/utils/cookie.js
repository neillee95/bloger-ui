import Cookies from 'js-cookie';

export function setCookies(key, value, expireTime = 1, path = '/') {
  if (expireTime instanceof Object) {
    expireTime = new Date(new Date().getTime() + getTime(expireTime));
  }
  Cookies.set(key, value, {expires: expireTime, path: path});
}

export function getCookies(key) {
  return Cookies.get(key);
}

export function removeCookies(key, path = '/') {
  Cookies.remove(key, {path: path});
}

function getTime({days, hours, minutes, seconds}) {
  return dayToTime(days) + hourToTime(hours) + minuteToTime(minutes) + secondToTime(seconds)
}

function dayToTime(day) {
  if (day && !isNaN(day)) {
    return hourToTime(day * 24);
  }
  return 0;
}

function hourToTime(hour) {
  if (hour && !isNaN(hour)) {
    return minuteToTime(hour * 60);
  }
  return 0;
}

function minuteToTime(minute) {
  if (minute && !isNaN(minute)) {
    return secondToTime(minute * 60);
  }
  return 0;
}

function secondToTime(second) {
  if (second && !isNaN(second)) {
    return second * 1000;
  }
  return 0;
}
