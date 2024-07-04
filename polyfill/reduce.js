//polyfill for reduce
// reduce of this polyfill
Array.prototype.myReduce = function (cb, initialValue) {
  let result; // it acts as prev value
  let currIndex = 0; // it acts as curr value
  if (arguments.length < 2) {
    result = this[0];
    currIndex = 1;
  }
  if (arguments.length > 1) {
    result = initialValue;
  }

  for (let i = currIndex; i < this.length; i++) {
    result = cb(result, this[i]);
  }
  return result;
};

// Code to calculate sum of array elements
// using our own reduce method
const arr = [1, 2, 3, 4];
console.log(arr.myReduce((total, elem) => total + elem));

// Code to calculate multiplication of all array elements
console.log(arr.myReduce((prod, elem) => prod * elem, 5));

const sum = arr.myReduce((prev, curr) => prev + curr, 6);
console.log(sum);

Array.prototype.myReduce1 = function (cb, initial) {
  let acc = initial;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }
  return acc;
};
const oddEvenCount = arr.myReduce1(
  (prev, curr) =>
    curr % 2 == 0
      ? { ...prev, even: prev.even + 1 }
      : { ...prev, odd: prev.odd + 1 },
  { even: 0, odd: 0 }
);
console.log(oddEvenCount);
// output: {even: 2, odd: 2};

// polyfill for reduce right

const arr1 = [1, 2];

Array.prototype.myReduceRight = function (cb, initialValue) {
  let result;
  let startIndex = this.length - 1;
  if (arguments.length <= 1) {
    result = this[this.length - 1];
    startIndex = this.length - 2;
  }
  if (arguments.length > 1) {
    result = initialValue;
  }
  for (let i = startIndex; i >= 0; i--) {
    result = cb(result, this[i]);
  }
  return result;
};

const subtract = arr1.myReduceRight((prev, curr) => prev + curr);
console.log(subtract);
