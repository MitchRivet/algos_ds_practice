// we need to go R G B
function dutch_flag_sort(balls) {
  if (balls.length <= 1) return;
  return quickSortHelper(balls, 0, balls.length - 1);
}

function quickSortHelper(arr, start, end) {
  //base case
  if (end <= start) {
    return;
  }

  let p = pivot(arr, start, end);
  quickSortHelper(arr, start, p - 1);
  quickSortHelper(arr, p + 1, end);
}

function pivot(arr, start, end) {
  let p = start;
  const endVal = arr[end];

  let i;
  for (i = start; i < end; i++) {
    // we can leverage that this is reverse alphabetical order
    if (arr[i].charCodeAt(0) >= endVal.charCodeAt(0)) {
      swap(arr, i, p);
      p++;
    }
  }
  swap(arr, p, end);
  return p;
}

function swap(arr, i, j) {
  let temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}
