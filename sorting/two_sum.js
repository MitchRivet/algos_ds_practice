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
