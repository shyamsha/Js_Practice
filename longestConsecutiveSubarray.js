// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
let arr = [102, 4, 100, 1, 3, 2, 1, 1];
// let arr = [2, 0, 2, 1, 4, 3, 1, 0];
// let arr = [0,3,7,2,5,8,4,6,0,1];

function consecutive(arr) {
  let sort = arr.sort((a, b) => a - b);
  let longest = 1;
  let count = 0;
  let smallest = Number.MIN_SAFE_INTEGER;
  for (let i = 1; i < sort.length; i++) {
    if (sort[i] - 1 === smallest) {
      count += 1;
      smallest = sort[i];
    } else if (smallest !== sort[i]) {
      count = 1;
      smallest = sort[i];
    }
    longest = Math.max(longest, count);
  }

  return longest;
}
console.log(consecutive(arr));
