function solve(arr) {
  let i = 0;
  let eidx = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      const tmp = arr[i];
      arr[i] = arr[eidx];
      arr[eidx] = tmp;
      eidx++;
    }
  }
  return arr;
}
