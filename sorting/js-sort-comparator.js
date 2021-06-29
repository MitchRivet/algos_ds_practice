const test = [
  [10, 15],
  [1, 5],
  [5, 8],
];

// Why does this work:
test.sort((a, b) => {
  return a[0] - b[0];
});

// but not this:
test.sort((a, b) => {
  return a[0] < b[0];
});
