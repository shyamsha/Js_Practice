// Given a list of integer, the order of the elements will increase then decrease. Find the peak.
// example
// [1, 3, 6, 4, 2, 0]
// output: 6

function findPeakValue(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return arr[left];
}
console.log(findPeakValue([1, 2, 4, 5, 7, 8, 3]));
