const palindromes = require('../palindromes');

describe('palindromes()', () => {
  it('correctly identifies one-word palindromes', () => {
    expect(palindromes('madam')).toEqual(['madam']);
    expect(palindromes('racecar')).toEqual(['racecar']);
  });
  it('returns an empty array when given no palindromes', () => {
    expect(palindromes('tic tac toe')).toEqual([]);
    expect(palindromes('race a car')).toEqual([]);
  });
  it('ignores punctuation', () => {
    expect(palindromes('yo, banana boy!')).toEqual(['yobananaboy']);
    expect(palindromes('Was it a car or a cat I saw?')).toEqual([
      'wasitacaroracatisaw',
    ]);
  });
  it('detects multi-word palindromes', () => {
    expect(palindromes('A man, a plan, a canal, Panama')).toEqual([
      'amanaplanacanalpanama',
    ]);
  });
});
