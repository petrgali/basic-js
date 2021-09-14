import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!")
  let array = [...arr]
  let out = []
  for (let id = 0; id < array.length; id++) {
    switch (array[id]) {
      case '--discard-next':
        array[id + 1] = undefined
        break
      case '--discard-prev':
        if (array[id - 1] != undefined) {
          out.pop()
        }
        break
      case '--double-next':
        if (array[id + 1] != undefined) {
          out.push(array[id + 1])
        }
        break
      case '--double-prev':
        if (array[id - 1] != undefined) {
          out.push(array[id - 1])
        }
        break
      default:
        if (array[id]!=undefined) out.push(array[id])
    }
  }
  return out
}
