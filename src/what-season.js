const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  // Check if the provided date is an instance of Date and is valid
  if (!(date instanceof Date) || isNaN(date)) {
    throw new Error("Invalid date!");
  }

  // Check if the date object properties have been tampered with
  const methods = ["toString", "toDateString", "valueOf", "getTime"];
  for (let method of methods) {
    if (
      typeof date[method] !== "function" ||
      date[method]() !== Date.prototype[method].call(date)
    ) {
      throw new Error("Invalid date!");
    }
  }

  // Check for the toStringTag to be 'Date'
  if (Object.prototype.toString.call(date) !== "[object Date]") {
    throw new Error("Invalid date!");
  }

  const month = date.getMonth();
  switch (month) {
    case 0:
    case 1:
    case 11:
      return "winter";
    case 2:
    case 3:
    case 4:
      return "spring";
    case 5:
    case 6:
    case 7:
      return "summer";
    case 8:
    case 9:
    case 10:
      return "autumn";
    default:
      throw new Error("Invalid date");
  }
}

module.exports = {
  getSeason,
};
