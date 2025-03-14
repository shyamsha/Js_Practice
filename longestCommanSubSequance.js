// Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.
// means the characters are text1 and text2 are in the same order.
//A common subsequence of two strings is a subsequence that is common to both strings.

// Input: text1 = "abcde", text2 = "ace"
// Output: 3
// Explanation: The longest common subsequence is "ace" and its length is 3.
// Example 2:

// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.
// Example 3:

// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.

function longestCommonSubsequence(text1, text2) {
  let dp = new Array(text1.length).fill(0);
  let longest = 0;
  for (let c of text2) {
    let currentLen = 0;
    for (let i = 0; i < dp.length; i++) {
      if (currentLen < dp[i]) {
        currentLen = dp[i];
      } else if (c === text1[i]) {
        dp[i] = currentLen + 1;
        longest = Math.max(longest, dp[i]);
      }
    }
  }
  return longest;
}
console.log(longestCommonSubsequence("abcde", "ace")); // 3
