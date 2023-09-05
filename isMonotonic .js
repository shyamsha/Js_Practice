let nums = [1, 1, 0];
let nums1 = [1, 1, 2];

function isMonotonic(nums) {
  return (
    nums.every((v, i) => i === 0 || v <= nums[i - 1]) ||
    nums.every((v, i) => i === 0 || v >= nums[i - 1])
  );
}

console.log(isMonotonic(nums));

var isMonotonic1 = function (nums) {
  let increasing = true;
  let decreasing = true;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] < nums[i]) {
      decreasing = false;
    } else if (nums[i - 1] > nums[i]) {
      increasing = false;
    }
  }
  return increasing || decreasing;
};
