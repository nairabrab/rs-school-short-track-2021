/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  if (!Array.isArray(arr) && arr.length) throw new Error();
  let i = 0;
  const sorted = arr.filter((ele) => ele !== -1).sort((a, b) => a - b);
  return arr.map((el) => (el === -1 ? -1 : sorted[i++]));
}

module.exports = sortByHeight;
