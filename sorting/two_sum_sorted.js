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
