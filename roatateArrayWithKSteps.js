// rotate array with k steps
function rotateArray(arr, k) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    console.log((i + k) % 9, i);
    arr2[(i + k) % arr.length] = arr[i];
    console.log(arr2);
  }
  return arr2;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(rotateArray(arr, 4));

// breakdown problem
// 1. create a new array2
// 2. loop through the array
// 2.1. empty first 4 elements to the new array2
// 2.2. For each iteration, it calculates the new position of the current element using the formula (i + k) % arr.length.
// 3. return the new array2

// Time complexity: O(n)
// Space complexity: O(n)

// rotate array in place with reverser method with space complicity O(1)
function reverseArray(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}
function rotateArray1(arr, k) {
  k = k % arr.length;
  reverseArray(arr, 0, arr.length - 1);
  reverseArray(arr, 0, k - 1);
  reverseArray(arr, k, arr.length - 1);
  return arr;
}
let nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3;
// let nums = [-1, -100, 3, 99],
//   k = 2;
// let nums = [1, 2],
//   k = 3;
console.log(reverseArray(nums, k));

let rotate = function (nums, k) {
  k = k % nums.length;
  nums.unshift(...nums.splice(nums.length - k));
};
