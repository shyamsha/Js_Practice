// Given an array of intervals where intervals[i] = [starti, endi],
// merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// ex.
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

let arr = [
  [1, 3],
  [2, 6],
  [15, 18],
  [8, 10],
];

var merge = function (arr) {
  arr = arr.sort((a, b) => a[0] - b[0]);
  let newArray = arr[0];
  let merged = [];
  for (let i = 1; i < arr.length; i++) {
    let interval = arr[i];
    if (interval[0] <= newArray[1]) {
      newArray[1] = Math.max(newArray[1], interval[1]);
    } else {
      merged.push(newArray);
      newArray = interval;
    }
  }
  merged.push(newArray);
  return merged;
};

console.log(merge(arr));
