// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

function findMedianSortedArrays(nums1, nums2) {
  const val = [...nums1, ...nums2].sort(function (a, b) {
    return a - b;
  });
  if (val.length % 2 !== 0) {
    const median = Math.floor(val.length / 2);
    return val[median].toFixed(4);
  } else if (val.length % 2 === 0) {
    const med1 = val[val.length / 2 - 1];
    const med2 = val[val.length / 2];
    const median = (med1 + med2) / 2;
    return median.toFixed(4);
  }
}
