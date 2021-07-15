function get_distinct_subsets(str) {
  const result = [];
  const strArr = str.split("");
  const sortedStrArr = strArr.sort();

  function helper(arr, slate) {
    result.push(slate);

    for (let i = 0; i < arr.length; i++) {
      if (i === 0 || arr[i] !== arr[i - 1]) {
        helper(arr.slice(i + 1), slate + arr[i]);
      }
    }

    // other idea
    // if (idx === str.length) {
    //     result.push(slate)
    //     return
    // }

    // helper(idx + 1, slate)
    // const charCount = countMap.get(sortedStr[idx])
    // if (charCount > 0) {
    //     helper(idx + 1, slate + sortedStr[idx])

    // }
    //  countMap.set(sortedStr[idx], charCount - 1)
  }

  helper(sortedStrArr, "");
  return result;
}
