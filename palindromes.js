module.exports = str => {
  let l = 0;
  let r = str.length - 1;
  const regex = /^[a-z0-9]+$/i;

  while (l < r) {
    if (str[l].toLowerCase() != str[r].toLowerCase()) {
      return [];
    }

    l++;
    r--;
  }

  return [str.toLowerCase()];
};
