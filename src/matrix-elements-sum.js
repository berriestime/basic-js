const { NotImplementedError } = require("../extensions/index.js");

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
  let totalSum = 0;
  const rows = matrix.length;
  const columns = matrix[0].length;
  const isZeroBelow = Array(columns).fill(false);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      if (!isZeroBelow[col]) {
        totalSum += matrix[row][col];
      }
      if (matrix[row][col] === 0) {
        isZeroBelow[col] = true;
      }
    }
  }

  return totalSum;
}

module.exports = {
  getMatrixElementsSum,
};
