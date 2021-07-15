// LC #77 Combinations

var combine = function (n, k) {
  const result = [];
  const helper = (slate, idx) => {
    if (slate.length === k) {
      result.push([...slate]);
      return;
    } else if (idx > n) {
      return;
    } else {
      helper(slate, idx + 1);

      slate.push(idx);
      helper(slate, idx + 1);
      slate.pop();
    }
  };

  helper([], 1);

  return result;
};
