function transposition(_rows, _cols, matrix) {
  if (_rows === 0 || _cols === 0) {
    return [[]];
  }

  const rows = matrix.length,
    cols = matrix[0].length;
  const grid = [];
  for (let j = 0; j < cols; j++) {
    grid[j] = Array(rows);
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid[j][i] = matrix[i][j];
    }
  }
  return grid;
}

console.log(
  transposition(4, 3, [
    [1, 2, 3],
    [0, 2, 6],
    [7, 4, 1],
    [2, 7, 0],
  ])
);
