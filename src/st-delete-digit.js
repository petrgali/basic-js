import { NotImplementedError } from '../extensions/index.js';

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
export default function deleteDigit(n) {
  let arr = []
  const stringified = String(n)

  for (let i in stringified) {
    arr.push(+(stringified.substring(0, +i) + stringified.substring(+i + 1)))
  }
  return Math.max(...arr)
}