function can_attend_all_meetings(intervals) {
  // for each array, we need to check if the end time of one is less than the start time of another
  intervals.sort((a, b) => a[0] - b[0]);

  // intervals.length - 1 so we can check the i+1 start time
  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i][1] > intervals[i + 1][0]) {
      return 0;
    }
  }
  return 1;
}
