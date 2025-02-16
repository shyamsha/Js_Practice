// Given an array of positive integers nums and a positive integer target, return the minimal length of a
// subarray mans of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.
// subArray means contiguous elements in an array

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

function minimumSizeSubArray(target, nums) {
  let sum = 0;
  let min = Infinity;
  let start = 0;
  for (let end = 0; end < nums.length; end++) {
    sum += nums[end];
    while (sum >= target) {
      min = Math.min(min, end - start + 1);
      sum -= nums[start];
      start++;
    }
  }
  return min === Infinity ? 0 : min;
}

console.log(minimumSizeSubArray(7, [2, 3, 1, 2, 4, 3])); // 2
