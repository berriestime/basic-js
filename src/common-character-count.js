const { NotImplementedError } = require("../extensions/index.js");

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
  const s1CharCount = countCharacters(s1);
  const s2CharCount = countCharacters(s2);

  let commonCount = 0;

  for (const char in s1CharCount) {
    if (s2CharCount[char]) {
      commonCount += Math.min(s1CharCount[char], s2CharCount[char]);
    }
  }

  return commonCount;
}

function countCharacters(str) {
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  return charCount;
}

module.exports = {
  getCommonCharacterCount,
};
