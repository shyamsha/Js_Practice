function sameMultiply(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let arr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] * arr1[i] === arr2[i]) {
      arr.push(true);
    }
  }
  return arr.length === arr2.length;
}

console.log(sameMultiply([1, 2, 3], [1, 4, 9])); // true
