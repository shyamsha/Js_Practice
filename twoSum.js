// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

//o(n2) solution its takes memory lot
let twoSum = function (nums, target) {
  if (nums[0] + nums[1] === target) {
    return [0, 1];
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (i !== j) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }
};

// optimized solution
let twoSum1 = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let x = target - nums[i];
    if (map.has(x)) {
      return [map.get(x), i];
    } else {
      map.set(nums[i], i);
    }
  }
};

let nums = [3, 2, 4];
let target = 6;

// console.log(twoSum1(nums, target));

// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.
// Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
let twoSum2SortedArray = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let x = target - nums[i];
    if (map.has(x)) {
      return [map.get(x), i + 1];
    } else {
      map.set(nums[i], i + 1);
    }
  }
};

var twoSum1SortedArray = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let total = numbers[left] + numbers[right];

    if (total === target) {
      return [left + 1, right + 1];
    } else if (total > target) {
      right--;
    } else {
      left++;
    }
  }
};

let numbers = [2, 7, 11, 15];
let t = 9;
console.log(twoSum1SortedArray(numbers, t));
