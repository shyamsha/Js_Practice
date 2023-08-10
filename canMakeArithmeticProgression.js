// A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

// Given an array of numbers arr,
// return true if the array can be rearranged to form an arithmetic progression. Otherwise, return false.

// Input: arr = [3,5,1]
// Output: true
// Explanation: We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively,
// between each consecutive elements.

var canMakeArithmeticProgression = function (arr) {
  arr.sort((a, b) => a - b);
  let diff = arr[1] - arr[0];
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== diff) {
      return false;
    }
  }
  return true;
};

function canMakeArithmeticProgression1(arr) {
  const max = Math.max(...arr);
  let current = Math.min(...arr);
  const gap = (max - current) / (arr.length - 1);
  const set = new Set(arr);

  while (current < max) {
    current += gap;
    if (!set.has(current)) return false;
  }
  return true;
}
