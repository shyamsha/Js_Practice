//polyfill for reduce
// reduce of this polyfill
Array.prototype.myReduce = function (cb, initialValue) {
  if (typeof cb !== "function")
    throw new TypeError("callback is not a function");
  if (this.length === 0 && initialValue === undefined)
    throw new TypeError("Reduce of empty array with no initial value");
  let accumulator = initialValue !== undefined ? initialValue : this[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};

// Code to calculate sum of array elements
// using our own reduce method
const arr = [1, 2, 3, 4];
console.log(arr.myReduce((total, elem) => total + elem));

// Code to calculate multiplication of all array elements
console.log(arr.myReduce((prod, elem) => prod * elem, 5));

const sum = arr.myReduce((prev, curr) => prev + curr, 6);
console.log(sum);

// polyfill for reduce right

const arr1 = [1, 2];

Array.prototype.myReduceRight = function (cb, initialValue) {
  let result = null;
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
