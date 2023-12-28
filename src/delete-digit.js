const { NotImplementedError } = require("../extensions/index.js");

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
  const numStr = String(n);

  return [...numStr].reduce((maxNum, _, index) => {
    const currentNum = Number(numStr.slice(0, index) + numStr.slice(index + 1));
    return Math.max(maxNum, currentNum);
  }, 0);
}

module.exports = {
  deleteDigit,
};
