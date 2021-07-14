// LC #47 permutations 2

var permuteUnique = function (nums) {
  const result = [];
  const slate = [];
  const numMap = new Map();

  nums.forEach((n) => {
    numMap.set(n, numMap.get(n) + 1 || 1);
  });

  function dfs() {
    if (slate.length === nums.length) {
      result.push([...slate]);
      return;
    }

    for (let [key, value] of numMap) {
      if (value > 0) {
        slate.push(key);
        numMap.set(key, value - 1);
        dfs();
        numMap.set(key, value);
        slate.pop();
      }
    }
  }

  dfs();
  return result;
};
