//sorted array remove the duplicates in-place such that each element appear only once and return the new length.

var removeDuplicates = function (nums) {
  let left = 1;
  let right = 1;

  let count = 0;

  while (right < nums.length) {
    if (nums[right - 1] !== nums[right]) {
      nums[left] = nums[right];
      left++;
      count++;
    }

    right++;
  }
  console.log(nums);
  return count + 1;
};
// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

// console.log(removeDuplicates(nums));

let removeDuplicates1 = function (nums) {
  let j = 1;
  for (var i = 1; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
};
// console.log(removeDuplicates1(nums));

// Remove Duplicates from Sorted Array II
// Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice and return the new length.
function removeDuplicates2(nums) {
  // let count = 1;
  // let j = 1;

  // for (let i = 1; i < nums.length; i++) {
  //   if (nums[i] === nums[i - 1]) {
  //     count++;
  //   } else {
  //     count = 1;
  //   }
  //   if (count <= 2) {
  //     nums[j] = nums[i];
  //     j++;
  //   }
  // }
  // console.log(nums);
  // return j;
  let j = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[j - 2] !== nums[i]) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
}
// let nums = [1, 1, 1, 2, 2, 3];
let nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicates2(nums));
