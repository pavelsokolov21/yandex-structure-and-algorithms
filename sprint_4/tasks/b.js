const getMaxDraw = (arr) => {
  const hashMap = new Map();
  let currentSum = 0;
  let maxLength = 0;

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];

    if (el === 1) {
      currentSum++;
    } else {
      currentSum--;
    }

    if (currentSum === 0) {
      maxLength = i + 1;
    }

    if (hashMap.has(currentSum)) {
      maxLength = Math.max(maxLength, i - hashMap.get(currentSum));
    } else {
      hashMap.set(currentSum, i);
    }
  }

  return maxLength;
};

console.log(getMaxDraw([0, 0, 1, 0, 1, 1, 1, 0, 0, 0]));
