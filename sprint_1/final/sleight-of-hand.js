function printTrainer(k, matrix) {
  const numbers = new Array(9).fill(0);
  const LENGTH = 4;
  const fingers = k * 2;

  for (let i = 0; i < LENGTH; i++) {
    for (let j = 0; j < LENGTH; j++) {
      const el = matrix[i][j];

      if (el === ".") {
        continue;
      }

      const numEl = Number(el);

      numbers[numEl - 1] += 1;
    }
  }

  return numbers.filter((count) => count > 0 && fingers >= count).length;
}
