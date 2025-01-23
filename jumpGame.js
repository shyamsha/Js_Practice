// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

let canJump = function (nums) {
  let lastPos = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= lastPos) {
      lastPos = i;
    }
  }
  return lastPos === 0;
};
let nums = [2, 3, 1, 1, 4];
// let nums = [3, 2, 1, 0, 4];
// let nums = [1];

console.log(canJump(nums));

let canJump1 = function (nums) {
  // some edge cases are not covered
  let length = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (length - element === 0) {
      return true;
    }
    length--;
  }
  return false;
};

// jumpGame 2 find the index number of jumps to reach the last index

let jump = function (nums) {
  let jumps = 0;
  let currentJumpEnd = 0;
  let farthest = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i === currentJumpEnd) {
      jumps++;
      currentJumpEnd = farthest;
    }
  }
  return jumps;
};

let nums1 = [2, 3, 1, 1, 4];
// let nums1 = [1, 2];

console.log(jump(nums1));
