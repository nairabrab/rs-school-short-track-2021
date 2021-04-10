/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new Error('Not implemented');

  const sort1 = s1.split('').sort();
  const sort2 = s2.split('').sort();
  const set1 = new Set(s1);
  const set2 = new Set(s2);
  const setInter = [...set1].filter((el) => set2.has(el));
  let res = 0;
  setInter.forEach((s) => {
    res += Math.min(sort1.lastIndexOf(s) - sort1.indexOf(s) + 1,
      sort2.lastIndexOf(s) - sort2.indexOf(s) + 1);
  });
  return res;
}

module.exports = getCommonCharacterCount;
