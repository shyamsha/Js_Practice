// Merge Sorted Array
// modify nums1 in-place instead
// m,n are the number of elements in nums1 and nums2 respectively

var merge = function (nums1, m, nums2, n) {
  // last element
  let last = m + n - 1;
  // reverse oder to in place comparison
  while (m > 0 && n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[last] = nums1[m - 1];
      m -= 1;
    } else {
      nums1[last] = nums2[n - 1];
      n -= 1;
    }
    last -= 1;
  }
  // fill remains ele in nums1
  while (n > 0) {
    nums1[last] = nums2[n - 1];
    n -= 1;
    last -= 1;
  }
  return nums1;
  return nums1;
};
// let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// let nums1 = [1], m = 1, nums2 = [], n = 0
let nums1 = [0],
  m = 0,
  nums2 = [1],
  n = 1;
console.log(merge(nums1, m, nums2, n)); // [1]
