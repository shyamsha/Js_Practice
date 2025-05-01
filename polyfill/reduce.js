//polyfill for reduce
// reduce of this polyfill
Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== "function")
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
// console.log(arr.myReduce((total, elem) => total + elem));

// Code to calculate multiplication of all array elements
// console.log(arr.myReduce((prod, elem) => prod * elem, 5));

const sum = arr.myReduce((prev, curr) => prev + curr, 6);
// console.log(sum);

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
// console.log(subtract);

// power full way usage reduce
// functions
const upperCase = (str) => {
  return str.toUpperCase();
};

const reverse = (str) => {
  return str.split("").reverse().join("");
};

const append = (str) => {
  return "Hello " + str;
};

// array of functions to be piped
const arr21 = [upperCase, reverse, append];

// initial value
const initialValue = "learnersbucket";

const finalValue = arr21.myReduce((previousValue, currentElement) => {
  // pass the value through each function
  // currentElement is the function from the array
  const newValue = currentElement(previousValue);

  // return the value received from the function
  return newValue;
}, initialValue);

// console.log(finalValue);

// "Hello TEKCUBSRENRAEL"

// Similarly, if we want to run a promise in a sequence we can do the same with this
// helper function to create a promise
// that resolves after a certain time
const asyncTask = function (i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${i}`), 100 * i);
  });
};

// create an array of task
const promises = [
  asyncTask(3),
  asyncTask(1),
  asyncTask(7),
  asyncTask(2),
  asyncTask(5),
];

// mani function to run promise in series
const asyncSeriesExecuter = function (promises) {
  promises.myReduce((acc, curr) => {
    // return when previous promise is resolved
    return acc.then(() => {
      // run the current promise
      return curr.then((val) => {
        console.log(val);
      });
    });
  }, Promise.resolve());
};

asyncSeriesExecuter(promises);
