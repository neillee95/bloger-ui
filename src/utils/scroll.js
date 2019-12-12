export function scrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
}

export function clientHeight() {
  return document.documentElement.clientHeight || document.body.clientHeight;
}

export function scrollHeight() {
  return document.documentElement.scrollHeight || document.body.scrollHeight;
}
