function two_sum(numbers, target) {
  const targetMap = {};

  for (let i = 0; i < numbers.length; i++) {
    const n = numbers[i];
    if (targetMap[n] || targetMap[n] === 0) {
      return [targetMap[n], i];
    }
    const t = target - n;
    targetMap[t] = i;
  }
  return [-1, -1];
}

function pair_sum_sorted_array(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (right > left) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left, right];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return [-1, -1];
}
