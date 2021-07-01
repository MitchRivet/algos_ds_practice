function find_top_k_frequent_elements(arr, k) {
  const countMap = {};
  arr.forEach((n) => {
    if (n in countMap) {
      countMap[n] += 1;
    } else {
      countMap[n] = 1;
    }
  });

  const uniqueNums = Object.keys(countMap);

  const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };

  const partition = (arr, low, high) => {
    const pivotIdx = Math.floor(Math.random() * (high - low + 1)) + low;
    const pivotFreq = countMap[arr[pivotIdx]];
    swap(arr, pivotIdx, high);
    let i = low;
    let j = low;

    while (j <= high) {
      if (countMap[arr[j]] < pivotFreq) {
        swap(arr, i, j);
        i++;
      }
      j++;
    }
    swap(arr, i, high);
    return i;
  };

  const quickSelect = (arr, low, high) => {
    const pivotIdx = partition(arr, low, high);
    if (pivotIdx > arr.length - k) {
      return quickSelect(arr, low, pivotIdx - 1);
    } else if (pivotIdx < arr.length - k) {
      return quickSelect(arr, pivotIdx + 1, high);
    }

    return arr;
  };

  quickSelect(uniqueNums, 0, uniqueNums.length - 1);

  const result = [];
  for (let j = uniqueNums.length - 1; j >= uniqueNums.length - k; j--) {
    result.push(uniqueNums[j]);
  }

  return result;
}
