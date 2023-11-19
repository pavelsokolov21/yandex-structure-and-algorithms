/**
 * Дана матрица. Нужно написать функцию, которая для элемента возвращает всех его соседей.
 * Соседним считается элемент, находящийся от текущего на одну ячейку влево, вправо, вверх или вниз.
 * Диагональные элементы соседними не считаются.
 * Например, в матрице A соседними элементами для (0, 0) будут 2 и 0. А для (2, 1) –— 1, 2, 7, 7.
 */

function getNeighbours(matrix, row, col) {
  const rowLength = matrix.length;
  const columnLength = matrix[0].length;

  if (row >= rowLength || col >= columnLength) {
    return [];
  }

  const neighboursIdxs = {
    up: row - 1,
    right: col + 1,
    down: row + 1,
    left: col - 1,
  };

  const result = [];

  if (neighboursIdxs.up !== -1) {
    result.push(matrix[neighboursIdxs.up][col]);
  }

  if (neighboursIdxs.right !== columnLength) {
    result.push(matrix[row][neighboursIdxs.right]);
  }

  if (neighboursIdxs.down !== rowLength) {
    result.push(matrix[neighboursIdxs.down][col]);
  }

  if (neighboursIdxs.left !== -1) {
    result.push(matrix[row][neighboursIdxs.left]);
  }

  return [...result].sort((a, b) => a - b);
}
