export function groupBy(list, name) {
  return list.reduce((obj, item) => {
    if (!obj[item[name]]) {
      obj[item[name]] = [];
      obj[item[name]].push(item);
    } else {
      obj[item[name]].push(item);
    }
    return obj;
  }, {})
}
