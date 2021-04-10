/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // throw new Error('Not implemented');

  const result = matrix.map((ar) => ar.map((el) => +el));

  matrix.forEach((ar, height) => {
    ar.forEach((el, width) => {
      if (el) {
        for (let i = Math.max(0, height - 1); i < Math.min(matrix.length, height + 2); i++) {
          for (let j = Math.max(0, width - 1); j < Math.min(matrix[i].length, width + 2); j++) {
            result[i][j]++;
          }
        }
        result[height][width] -= 2;
      }
    });
  });

  return result;

  // const fieldWidth = matrix[0].length; // max m[i] length?
  // const fieldHeight = matrix.length;
  // const minerow = new Array(fieldWidth).fill(0);
  // const minefield = new Array(fieldHeight).fill(minerow);

  // function matrixInc (i, j) {
  //   for (let index1 = i ? i - 1 : 0; index1 < i + 2 && index1 < fieldHeight - 1; index1++) {
  //     for (let index2 = j ? j - 1 : 0; index2 < j + 2 && index2 < fieldWidth; index2++) {
  //       minefield[index1][index2]++;
  //     }
  //   }
  //   minefield[i][j] -= 1;
  // }

  // function matrixInc (i, j) {
  //   for (index1 = Math.max( i - 1 , 0); index1 < Math.min(i + 2 ,fieldHeight); index1++) {
  //     for (index2 = Math.max(j - 1 , 0); index2 < Math.min(j + 2,fieldWidth); index2++) {
  //       minefield[index1][index2]++;
  //     }
  //   }
  //   minefield[i][j] -= 1;
  // }

  // return matrix.forEach((row, i) => row.forEach((el, j) => { if (el) matrixInc(i, j); }));
}

module.exports = minesweeper;
