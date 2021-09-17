import { NotImplementedError } from '../extensions/index.js';

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
export default function minesweeper(matrix) {
  const mines = []
  for (let row = 0; row < matrix.length; row++) {
    mines.push([])
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col])
        mines[row].push(1);
      else {
        let neigbours = 0
        for (let x = row - 1; x <= row + 1; x++) {
          for (let y = col - 1; y <= col + 1; y++) {
            if (matrix[x] && matrix[x][y]) neigbours += matrix[x][y]
          }
        }
        mines[row].push(neigbours)
      }
    }
  }
  return mines
}
