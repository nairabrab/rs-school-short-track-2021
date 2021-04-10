/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new Error('Not implemented');
  // const s = n.toString();
  // const minDigit = Math.min(...s);
  // return s.slice(s.indexOf(`${minDigit}`)); // тока не слйас,а ~remove~
  const cuts = [];
  let s = n.toString();
  const { length } = s;
  cuts.push(Number(n.toString().slice(1)));
  for (let i = 1; i < length - 1; i++) {
    s = n.toString();
    s = s.slice(0, i) + s.slice(i + 1);
    cuts.push(Number(s));
  }
  cuts.push(Number(n.toString().slice(0, length - 1)));
  return Math.max(...cuts);
}

module.exports = deleteDigit;
