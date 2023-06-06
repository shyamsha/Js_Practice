// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Find First and Last Position of Element in Sorted Array

var searchRange = function (nums, target) {
  return [nums.indexOf(target), nums.lastIndexOf(target)];
};
console.log(searchRange(arr, 8));
