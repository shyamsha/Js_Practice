function arrayExcept(array, index) {
  let value = [];
  for (let i = 0; i < array.length; i++) {
    if (!index.includes(i)) {
      value.push(array[i]);
    }
  }
  return value;
}

console.log(arrayExcept([1, 2, 3, 4, 5], [0, 2, 4]));
