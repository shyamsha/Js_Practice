// You are given a 0-indexed 2D integer matrix grid of size n * n with values in the range [1, n2]. Each integer appears exactly once except a which appears twice and b which is missing. The task is to find the repeating and missing numbers a and b.

// Return a 0-indexed integer array ans of size 2 where ans[0] equals to a and ans[1] equals to b.

// Input: grid = [[1,3],[2,2]]
// Output: [2,4]
// Explanation: Number 2 is repeated and number 4 is missing so the answer is [2,4].

const findMissingAndRepeatedValues = function (grid) {
  const hashMap = {};
  let repeated = null;
  let missing = null;
  let n = grid.length;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      hashMap[grid[i][j]] = (hashMap[grid[i][j]] || 0) + 1;
    }
  }

  for (let i = 1; i < n * n + 1; i++) {
    if (hashMap[i] === 2) {
      repeated = i;
    } else if (!hashMap[i]) {
      missing = i;
    }
  }
  return [repeated, missing];
};
let grid1 = [
  [1, 3],
  [2, 2],
];
let grid = [
  [9, 1, 7],
  [8, 9, 2],
  [3, 4, 6],
];
console.log(findMissingAndRepeatedValues(grid));

//!todo optimized solution
