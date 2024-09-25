const matchString = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }

  const uniqCharsSecondStr = Array.from(new Set(b));
  const hashMapChars = Array.from(new Set(a)).reduce((acc, char, idx) => {
    const anotherStrChar = uniqCharsSecondStr[idx];

    if (!acc.has(char)) {
      acc.set(char, anotherStrChar);
    }

    return acc;
  }, new Map());

  for (let i = 0; i < a.length; i++) {
    const charFirst = a[i];
    const charSecond = b[i];

    if (charSecond !== hashMapChars.get(charFirst)) {
      return false;
    }
  }

  return true;
};

console.log(matchString("mxyskaoghi", "qodfrgmslc"));
