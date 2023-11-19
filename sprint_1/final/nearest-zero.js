function calculateDistances(length, street = []) {
  const result = [];
  let lastZeroIdx = null;

  for (let i = 0; i < length; i++) {
    const el = street[i];

    if (el === 0) {
      lastZeroIdx = i;
      result.push(0);

      continue;
    }

    if (lastZeroIdx !== null) {
      result.push(i - lastZeroIdx);

      continue;
    }

    result.push(length);
  }

  return result;
}

function nearestZero(length, street = []) {
  const nearest = calculateDistances(length, street);
  const nearestReversed = calculateDistances(
    length,
    [...street].reverse()
  ).reverse();

  return nearest
    .map((el, idx) => {
      const reversedEl = nearestReversed[idx];

      return Math.min(el, reversedEl);
    })
    .join(" ");
}

console.log(nearestZero(6, [0, 7, 9, 4, 8, 20]));
