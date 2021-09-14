import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  return !str.match(/(.)\1{0,}/g)
    ? ''
    : str.match(/(.)\1{0,}/g)
      .reduce((acc, val) =>
        val.length === 1
          ? acc += val[0]
          : acc + val.length + val[0]
        , '')
}