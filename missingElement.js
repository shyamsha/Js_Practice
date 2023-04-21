let missingArrayMultipleValue = [1, 2, 3, 4, 5, 9, 10];
let missingArraySingleValue = [1, 2, 3, 4, 5, 6, 7, 9, 10];

function missingElement(array) {
  for (let i = 0; i < array.length; i++) {
    let diff = array[i + 1] - array[i];
    if (diff === 2) {
      return array[i] + 1;
    } else if (diff === -2) {
      return array[i] - 1;
    }
  }
}
console.log(missingElement(missingArraySingleValue));
function missing(arr) {
  let missingValue = [];
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  console.log();

  for (let i = min; i < max; i++) {
    if (arr.indexOf(i) < 0) {
      missingValue.push(i);
    }
  }
  return missingValue;
}

console.log(missing(missingArrayMultipleValue));
