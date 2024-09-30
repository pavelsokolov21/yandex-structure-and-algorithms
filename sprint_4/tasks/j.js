const findCommonSubarray = (a, b) => {
  const dp = new Array(a.length + 1).fill(0);
  let max = 0;

  for (let i = a.length - 1; i >= 0; i--) {
    let prev = 0;

    for (let j = b.length - 1; j >= 0; j--) {
      let temp = dp[j];

      if (a[i] === b[j]) {
        dp[j] = prev + 1;
        max = Math.max(max, dp[j]);
      } else {
        dp[j] = 0;
      }

      prev = temp;
      console.log(
        `i = ${i}, j = ${j} a[i] = ${a[i]}, b[j] = ${b[j]}, temp = ${temp}, prev = ${prev} dp = [${dp}]`
      );
    }
  }

  return max;
};
