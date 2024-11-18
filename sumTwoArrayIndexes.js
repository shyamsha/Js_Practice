// write two array indexes sum

function sumTwoArrayIndexes(arr1, arr2) {
  let sum = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr1[i] || !arr2[i]) {
      sum.push(arr1[i] + arr2[i]);
    } else {
      return "array index is not equal";
    }
  }
  return sum;
}

console.log(sumTwoArrayIndexes([1, 2, 3, 4], [4, 5, 6, 7]));
