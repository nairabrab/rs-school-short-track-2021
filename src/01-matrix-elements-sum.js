/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  if (!Array.isArray(matrix) && matrix.length) throw new Error();
  let sum = 0;
  // if (!Array.isArray(matrix) && matrix.length) throw new Error();
  // matrix.forEach((ar) => ar.forEach((el) => { if (el > 0) sum += el; }));
  function summ(matrixx) {
    for (let i = 0; i < matrixx[0].length; i++) {
      for (let j = 0; j < matrixx.length; j++) {
        if (matrixx[j][i] === 0) break;
        sum += matrixx[j][i];
      }
    }
    return sum;
  }
  // matrix.forEach(ar => ar.filter(+a > 0)).reduce((cur,sum) => cur+sum)
  if (matrix === [[0]]) return 0;
  return matrix[0].length ? summ(matrix) : matrix[0];
}
module.exports = getMatrixElementsSum;
