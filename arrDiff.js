// Write a function that takes an array of integers and returns the largest difference between any two numbers in the array.

const { log } = require("console");
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];

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

function SmallestDiff(arr) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }
  }
  return secondSmallest - smallest;
}

console.log(SmallestDiff(arr1));
