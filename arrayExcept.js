function arrayExcept(array, array2) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (!array2.includes(i)) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

console.log(arrayExcept([1, 2, 3, 4, 5], [0, 2, 4]));

// The function iterates through each element in the 'array' and for each element,
// it checks if it is present in 'array2' using the includes() method, which has a time complexity of O(n).
// Therefore, the overall time complexity of the function is O(n^2).
