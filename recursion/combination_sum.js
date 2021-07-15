// LC #39 Combination Sum

var combinationSum = function (candidates, target) {
  const result = [];

  const helper = (slate, sum, depth) => {
    if (sum === target) {
      result.push([...slate]);
    } else if (sum > target) {
      return;
    } else {
      for (let i = depth; i < candidates.length; i++) {
        slate.push(candidates[i]);
        helper(slate, sum + candidates[i], i);
        slate.pop();
      }
    }
  };

  helper([], 0, 0);
  return result;
};
