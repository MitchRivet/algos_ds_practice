// Leetcode # 96

const map = new Map();
function how_many_BSTs(n) {
  if (map.has(n)) {
    return map.get(n);
  }

  if (n === 1) return 1;
  if (n === 0) return 1;
  if (n === 2) return 2;
  let result = 0;

  for (let i = 1; i <= n; i++) {
    result += how_many_BSTs(i - 1) * how_many_BSTs(n - i);
  }

  map.set(n, result);
  return result;
}
