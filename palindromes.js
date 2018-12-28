module.exports = str => {
  let l = 0;
  let r = str.length - 1;
  const regExp = /^[a-z0-9]+$/i;
  let lStr = [];
  let rStr = [];

  while (l <= r) {
    while (l < r && !str[l].match(regExp)) {
      l++;
    }

    while (l < r && !str[r].match(regExp)) {
      r--;
    }

    if (str[l].toLowerCase() != str[r].toLowerCase()) {
      return [];
    }

    if (l != r) {
      lStr.push(str[l].toLowerCase());
      rStr.push(str[r].toLowerCase());
    } else {
      lStr.push(str[l].toLowerCase());
    }

    l++;
    r--;
  }

  return [rStr.join('') + lStr.reverse().join('')];
};
