/*
Libs included:
    underscore lodash chai sinon sinon-chai mocha async request q bluebird jsdom
*/
/*
'''
Nearly Sorted Array

Given an array of n elements, where each element is at most k away from its target position,
devise an algorithm that sorts in O(n log k) time. For example, let us consider k is 2, an
element at index 7 in the sorted array, can be at indexes 5, 6, 7, 8, 9 in the given array.

  Input : arr[] = {6, 5, 3, 2, 8, 10, 9}
              k = 3
  Output : arr[] = {2, 3, 5, 6, 8, 9, 10}

  Input : arr[] = {10, 9, 7, 70, 4, 8, 60, 50}
              k = 4
  Output : arr[] = {4, 7, 8, 9, 10, 50, 60, 70}
 '''
 */

// quick sort, merge sort O(nlogn)
// selection sort, O(n^2)
// insertion sort, O(n^2)
// bubble sort O(n^2)
// heap sort O(nlogn)

// 6, 5, 3, 2

//   2
//  3  5
// 6 1

// {7, 8, 9, 10, 70}

// 1. partition w/ a random pivot
// 2. recurse on the left/right sides of the pivot and partition again

function quickSort(arr, low, high) {
  const pivotIdx = partition(arr, low, high);

  quickSort(arr, low, pivotIdx - 1);
  quicksort(arr, pivotIdx, high);
}

function partition(arr, low, high) {
  const partitionIdx = Math.floor(Math.random() * (high - low + 1) + low);
  swap(arr, partitionIdx, high);

  let i = low;
  let j = low;
  while (j < high) {
    if (arr[j] < arr[high]) {
      swap(arr, j, i);
      i++;
    }
    j++;
  }

  swap(arr, i, high);
  return i;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

quickSort(arr, 0, arr.length - 1);

console.log(arr);

console.log("Hello, world!");
