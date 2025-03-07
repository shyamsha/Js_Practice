// write program to find the maximum sum of an hourglass in a 2D array.
// The hourglass is defined as the following pattern in the 2D array:
// a b c first row 3 index elements
// d second row 2 index element
// e f g third row 3 index elements
// The sum of an hourglass is the sum of all 7 elements in the hourglass. calculate max sum of all hourglass in the 2D array.

function hourglassSum(arr) {
  let max = -63;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let sum = 0;
      sum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];
      max = Math.max(max, sum);
    }
  }
  return max;
}
let arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];
console.log(hourglassSum(arr));
