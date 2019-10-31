function add0 (m) {
  return m < 10 ? '0' + m : m;
}

export function dateFormat(datetime) {

  if (!datetime) {
    return null;
  }

  try {
    datetime = new Date(datetime);
  } catch (e) {
    return null;
  }

  const year = datetime.getFullYear(),
    month = datetime.getMonth() + 1,
    day = datetime.getDate(),
    hour = datetime.getHours(),
    minute = datetime.getMinutes(),
    second = datetime.getSeconds();

  return year + '-' +
    add0(month) + '-' +
    add0(day) + ' ' +
    add0(hour) + ':' +
    add0(minute) + ':' +
    add0(second)
}


