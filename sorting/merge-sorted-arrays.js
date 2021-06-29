function merger_first_into_second(arr1, arr2) {
  // so we have three pointers
  let end1 = arr1.length - 1;
  let end2 = arr1.length - 1;
  let finalEnd = arr2.length - 1;

  while (finalEnd >= 0) {
    if (end1 < 0) {
      break;
    } else if (end2 < 0) {
      arr2[finalEnd] = arr1[end1];
      end1--;
      finalEnd--;
    }
    // we are looking to take the larger elements first
    else if (arr1[end1] >= arr2[end2]) {
      arr2[finalEnd] = arr1[end1];
      finalEnd--;
      end1--;
    } else {
      arr2[finalEnd] = arr2[end2];
      finalEnd--;
      end2--;
    }
  }

  return arr2;
}
