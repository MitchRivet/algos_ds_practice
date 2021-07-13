// LC #46

var permute = function (nums) {
  function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  const result = [];
  function helper(slate) {
    if (nums.length === slate.length) {
      result.push([...slate]);
    } else {
      const positionToFill = slate.length;
      // for each position, we want to swap where we are with current position
      for (let i = positionToFill; i < nums.length; i++) {
        // swap
        swap(nums, positionToFill, i);

        // helper sandwich
        slate.push(nums[positionToFill]);
        helper(slate);
        slate.pop();

        // swap back
        swap(nums, positionToFill, i);
      }
    }
  }

  helper([]);
  return result;
};
