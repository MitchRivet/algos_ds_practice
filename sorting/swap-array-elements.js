function swap(items, leftIndex, rightIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}

function swapDestructure(array, left, right) {
  [array[left], array[right]] = [array[right], array[left]];
}
