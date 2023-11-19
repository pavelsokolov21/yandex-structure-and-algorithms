/**
 * Метеорологическая служба вашего города решила исследовать погоду новым способом.

Под температурой воздуха в конкретный день будем понимать максимальную температуру в этот день.
Под хаотичностью погоды за n дней служба понимает количество дней, в которые температура строго больше, чем в день до (если такой существует) и в день после текущего (если такой существует). Например, если за 5 дней максимальная температура воздуха составляла [1, 2, 5, 4, 8] градусов, то хаотичность за этот период равна 2: в 3-й и 5-й дни выполнялись описанные условия.
Определите по ежедневным показаниям температуры хаотичность погоды за этот период.

Заметим, что если число показаний n=1, то единственный день будет хаотичным.
 */

function getWeatherRandomness(temperatures) {
  if (temperatures.length === 1) {
    return 1;
  }

  let count = 0;
  const length = temperatures.length;

  for (let i = 0; i < length; i++) {
    const curr = temperatures[i];

    if (i === 0) {
      const next = temperatures[i + 1];

      if (curr > next) {
        count++;
      }

      continue;
    }

    if (i === length - 1) {
      const prev = temperatures[i - 1];

      if (curr > prev) {
        count++;
      }

      continue;
    }

    const prev = temperatures[i - 1];
    const next = temperatures[i + 1];

    if (curr > prev && curr > next) {
      count++;
    }
  }

  return count;
}
