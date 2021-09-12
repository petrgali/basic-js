import { NotImplementedError } from '../extensions/index.js';

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
export default function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!'
  if (!(date instanceof Date) || date.toString !== new Date().toString) throw new Error("Invalid date!")

  const month = date.getMonth();
  switch (true) {
    case (2 <= month && month <= 4):
      return "spring"
    case (5 <= month && month <= 7):
      return "summer"
    case (8 <= month && month <= 10):
      return "fall"
    default:
      return "winter"
  }
}
