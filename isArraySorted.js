// find array sorted or not

function isSorted(arr, n = arr.length) {
  if (n === 1 || n === 0) {
    return true;
  }
  return arr[n - 1] >= arr[n - 2] && isSorted(arr, n - 1);
}

let arr = [20, 23, 23, 45, 78, 88];
// let len = arr.length;

console.log(isSorted(arr));
// if (isSorted(arr) === 1) {
//   return "sorted";
// } else {
//   return "not sorted";
// }
