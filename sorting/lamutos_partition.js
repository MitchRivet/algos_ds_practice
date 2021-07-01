/* This function takes last element as 
pivot, places the pivot element at its 
correct position in sorted array, and
places all smaller (smaller than pivot)
to left of pivot and all greater elements 
to right of pivot */
function partition(arr, low, high) {
  let pivot = arr[high];

  // Index of smaller element
  // i = slow pointer, j = fast
  // low - 1 to account for the first ++. will be different if you have your pivot at the beginning.
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    // If current element is smaller
    // than or equal to pivot
    if (arr[j] <= pivot) {
      i++; // increment index of
      // smaller element
      Swap(arr, i, j);
    }
  }
  Swap(arr, i + 1, high);
  return i + 1;
}

function Swap(a, i, j) {
  [a[i], a[j]] = [a[j], a[i]];
}

function partition2(arr, low, high) {
  const pivotIdx = Math.floor(Math.random() * (high - low + 1) + low);
  Swap(arr, pivotIdx, high);
  let i = low;
  let j = low;

  while (j < high) {
    // j is going to track the right side of the partition
    // so if it's less than the pivot, you need to swap
    if (arr[j] < arr[high]) {
      Swap(arr, i, j);
      i++;
    }
    j++;
  }

  Swap(arr, i, high);
  return i;
}
