// LC #40 Combination Sum 2
var combinationSum2 = function (candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b);

  const helper = (slate, sum, idx) => {
    if (sum === target) {
      result.push([...slate]);
    } else if (sum > target || slate.length > candidates.length) {
      return;
    } else {
      for (let i = idx; i < candidates.length; i++) {
        if (candidates[i] === candidates[i - 1] && i !== idx) continue;
        slate.push(candidates[i]);
        helper(slate, sum + candidates[i], i + 1);
        slate.pop();
      }
    }
  };

  helper([], 0, 0);
  return result;
};
