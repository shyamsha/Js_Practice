// You are given an integer array nums and an integer k.

// In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

// Return the maximum number of operations you can perform on the array.

// Input: nums = [1,2,3,4], k = 5
// Output: 2
// Explanation: Starting with nums = [1,2,3,4]:
// - Remove numbers 1 and 4, then nums = [2,3]
// - Remove numbers 2 and 3, then nums = []
// There are no more pairs that sum up to 5, hence a total of 2 operations.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  let count = 0;
  while (left < right) {
    if (nums[left] + nums[right] < k) {
      left++;
    } else if (nums[left] + nums[right] > k) {
      right--;
    } else {
      left++;
      right--;
      count++;
    }
  }
  return count;
};

// The code first sorts the 'nums' array in O(n log n) time complexity. Then, it iterates through the array once in a while loop, which has a linear time complexity of O(n).
// Therefore, the overall time complexity is O(n log n) + O(n) = O(n log n).
