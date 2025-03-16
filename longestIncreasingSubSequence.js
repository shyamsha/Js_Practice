// Longest Increasing Subsequence

// Given an unsorted array of integers, find the length of longest increasing subsequence.

function longestIncreasingSubSequence(arr) {
  let dp = new Array(arr.length).fill(1);
  console.log(dp);
  let longest = 1;
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        longest = Math.max(longest, dp[i]);
      }
    }
  }
  return longest;
}

let arr2 = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(longestIncreasingSubSequence(arr2));

var lengthOfLIS = function (nums) {
  const piles = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    const n = nums[i];
    if (n > piles[piles.length - 1]) {
      piles.push(n);
    } else {
      let j = 0;
      while (j < piles.length) {
        if (n <= piles[j]) {
          piles[j] = n;
          break;
        }
        j++;
      }
    }
  }
  return piles.length;
};

// todo: read about dynamic programming
