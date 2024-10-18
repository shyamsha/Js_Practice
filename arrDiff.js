// Write a function that takes an array of integers and returns the largest difference between any two numbers in the array.

const { log } = require("console");
let arr = [11, 2, 33, 4, 5, 6, 7, 8, 9, 10, 12];

function largestDiff(arr) {
  let min = arr[0];
  let max = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else {
      let diff = arr[i] - min;
      if (diff > max) {
        max = diff;
      }
    }
  }
  return max;
}
log(largestDiff(arr));

let arr1 = [1, 22, 3, 4, 5, 6, 7, 8, 9, 10, 12];

log(largestDiff(arr1));

// pattern was calculating biggest number in array and subtracting it from the smallest number in array
