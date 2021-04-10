/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  // throw new Error('Not implemented');
  // binary search
  let searchStart = 0;
  let searchEnd = array.length - 1;
  let searchNext = Math.ceil((searchEnd - searchStart) / 2);
  for (let i = 0; i < searchEnd; i++) {
    if (searchEnd === searchStart) return searchEnd;
    if (array[searchEnd] === value) return searchEnd;
    if (array[searchStart] === value) return searchStart;
    if (array[searchNext] < value) {
      searchStart = searchNext;
      searchNext = Math.ceil((searchEnd - searchStart) / 2);
    } else if (array[searchNext] === value) return searchNext;
    else {
      searchEnd = searchNext;
      searchNext = Math.ceil((searchEnd - searchStart) / 2);
    }
  }
  return searchEnd;
}

module.exports = findIndex;
