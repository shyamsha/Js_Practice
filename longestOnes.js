// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array
// if you can flip at most k 0's.

// Example 1:

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

var longestOnes = function (nums, k) {
  let start = 0;
  let count = 0;
  let longest = 0;
  let flip = k;

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    const item = nums[windowEnd];

    if (item === 1) {
      count++;
    } else if (item === 0 && flip !== 0) {
      count++;
      flip--;
    } else {
      longest = Math.max(count, longest);
      windowEnd = start;
      start++;
      count = 0;
      flip = k;
    }
  }

  longest = Math.max(count, longest);
  return longest;
};

var longestOnes1 = function (nums, k) {
  let i = 0;
  let j = 0;
  while (i < nums.length) {
    if (nums[i] === 0) {
      k--;
    }
    if (k < 0) {
      if (nums[j] === 0) {
        k++;
      }
      j++;
    }
    i++;
  }
  return i - j;
};
let nums = [0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
let k = 2;
console.log(longestOnes(nums, k));
