// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

//o(n2) solution its takes memory lot
let twoSum = function (nums, target) {
  if (nums[0] + nums[1] === target) {
    return [0, 1];
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (i !== j) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }
};

// optimized solution
let twoSum1 = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let x = target - nums[i];
    if (map.has(x)) {
      return [map.get(x), i];
    }
    map.set(nums[i], i);
  }
  return null;
};
