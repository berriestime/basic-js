const { NotImplementedError } = require("../extensions/index.js");

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

function countMines(matrix, row, col) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  let count = 0;

  for (let i = Math.max(0, row - 1); i <= Math.min(row + 1, numRows - 1); i++) {
    for (
      let j = Math.max(0, col - 1);
      j <= Math.min(col + 1, numCols - 1);
      j++
    ) {
      if (i !== row || j !== col) {
        count += matrix[i][j] ? 1 : 0;
      }
    }
  }

  return count;
}

function minesweeper(matrix) {
  const result = [];

  for (let i = 0; i < matrix.length; i++) {
    result.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      result[i].push(countMines(matrix, i, j));
    }
  }

  return result;
}

module.exports = {
  minesweeper,
};
