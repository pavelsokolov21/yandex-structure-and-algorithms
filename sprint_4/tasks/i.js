const groupAnagrams = (arr) =>
  Object.values(
    Object.fromEntries(
      arr
        .map((word) => word.split("").sort().join(""))
        .reduce((acc, word, idx) => {
          const bucket = acc.get(word) ?? [];

          bucket.push(idx);
          acc.set(word, bucket);

          return acc;
        }, new Map())
    )
  ).sort((a, b) => a[0] - b[0]);

console.log(groupAnagrams(["tan", "eat", "tea", "ate", "nat", "bar"]));
