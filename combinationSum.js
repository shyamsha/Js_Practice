// Given an array of distinct integers candidates and a target integer target,
// return a list of all unique combinations of candidates where the chosen numbers sum to target.
// You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the
// frequency
//  of at least one of the chosen numbers is different.

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.

const combinationSum = function (candidates, target) {
  const result = [];

  function dfs(index, currentVal, arr) {
    // Base case: if target becomes 0, we found a valid combination
    if (currentVal < 0) return; // Stop recursion if current value exceeds currentVal
    if (currentVal === 0) result.push([...arr]); // Create a new array copy

    // Try all possible numbers from current index
    for (let i = index; i < candidates.length; i++) {
      // Only proceed if current number doesn't exceed target
      // if (candidates[i] <= target) {
      // Include current number in combination
      arr.push(candidates[i]);

      // Recursive call with:
      // - same index i (allowing reuse of same number)
      // - reduced target by current number
      dfs(i, currentVal - candidates[i], arr);

      // Backtrack: remove the last added number to try other combinations
      arr.pop();
      // }
    }
  }

  dfs(0, target, []);
  return result;
};
// console.log(combinationSum([2, 3, 6, 7], 7));

// The solution set must not contain duplicate combinations.
// Each number in candidates may only be used once in the combination.
const combinationSum2 = function (candidates, target) {
  const result = [];
  candidates = candidates.sort((a, b) => a - b);
  function dfs(index, currentVal, arr) {
    // Base case: if target becomes 0, we found a valid combination
    if (currentVal < 0) return; // Stop recursion if current value exceeds currentVal
    if (currentVal === 0) {
      const newArr = [...arr];
      result.push(newArr); // Create a new array copy
    }

    // Try all possible numbers from current index
    for (let i = index; i < candidates.length; i++) {
      // Only proceed if current number doesn't exceed target and if it's not a duplicate
      if (i > index && candidates[i] === candidates[i - 1]) {
        continue;
      }
      if (candidates[i] > target) return;

      // Include current number in combination
      arr.push(candidates[i]);

      // Recursive call with:
      // - same index i (allowing reuse of same number)
      // - reduced target by current number
      dfs(i + 1, currentVal - candidates[i], arr);

      // Backtrack: remove the last added number to try other combinations
      arr.pop();
    }
  }

  dfs(0, target, []);
  return result;
};
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
