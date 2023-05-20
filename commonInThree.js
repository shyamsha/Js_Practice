function commonInThree(array1, array2, array3) {
  let arrays = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      for (let k = 0; k < array3.length; k++) {
        if (array1[i] == array2[j] && array1[i] == array3[k]) {
          arrays.push(array1[i]);
        }
      }
    }
  }
  return arrays;
}

console.log(commonInThree([23, 12, 121], [232, 24, 12], [34, 45, 12]));
