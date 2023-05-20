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

// find missing element in unsorted array another way
// it give only one value this formula
function missingNumber(arr) {
  var n = arr.length + 1,
    sum = 0,
    expectedSum = (n * (n + 1)) / 2;

  for (var i = 0, len = arr.length; i < len; i++) {
    sum += arr[i];
  }

  return expectedSum - sum;
}

console.log(missingNumber([5, 2, 6, 1, 3]));
console.log(missingNumber(missingArraySingleValue));
