const matrix = [
  [0, 1, 0, 3, 12],
  [0, 1, 0, 0, 12],
  [1, 1, 0, 3, 12],
];

// Output:
// [
// [1,3,12,0,0],
// [1,12,0,0,0],
// [1,1,3,12,0]
// ]

function moveZeros(arr) {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== 0) {
      if (j !== i) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      i++;
    }
  }
  return arr;
}

function moveZerosInMatrix(matrix) {
  return matrix.map((row) => moveZeros(row));
}
console.log(moveZerosInMatrix(matrix));
