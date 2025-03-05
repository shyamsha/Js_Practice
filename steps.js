// Davis has a number of staircases in his house and he likes to climb each staircase 1,2 or 3  steps at a time.
// Being a very precocious child, he wonders how many ways there are to reach the top of the staircase.

// Given the respective heights for each of the  staircases in his house, find and print the number of ways he can climb each staircase,

// Example

// The staircase has  steps. Davis can step on the following sequences of steps:

// 1 1 1 1 1
// 1 1 1 2
// 1 1 2 1
// 1 2 1 1
// 2 1 1 1
// 1 2 2
// 2 2 1
// 2 1 2
// 1 1 3
// 1 3 1
// 3 1 1
// 2 3
// 3 2
// There are  13 possible ways he can take these 5 steps and

function steps(n) {
  if (n < 0) {
    return 0;
  }
  if (n === 0) {
    return 1;
  }
  return steps(n - 1) + steps(n - 2) + steps(n - 3);
}

console.log(steps(5)); // 13

function steps1(n) {
  if (n < 0) return 0;
  if (n === 0) return 1;
  // dynamic programming
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= n; i++) {
    dp[i] += dp[i - 1];
    if (i >= 2) dp[i] += dp[i - 2];
    if (i >= 3) dp[i] += dp[i - 3];
  }
  return dp[n];
}

// memorization approach
function steps2(n) {
  const memo = new Array(n + 1).fill(0);
  return helper(n, memo);
}
function helper(n, memo) {
  if (n < 0) return 0;
  if (n === 0) return 1;
  if (memo[n] > 0) return memo[n];
  memo[n] = helper(n - 1, memo) + helper(n - 2, memo) + helper(n - 3, memo);
  return memo[n];
}
