//polyfill for reduce
// some edge cases of this polyfill
Array.prototype.myReduce = function (callback, initialValue) {
  // Variable that accumulates the result
  // after performing operation one-by-one
  // on the array elements
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    // If the initialValue exists, we call
    // the callback function on the existing
    // element and store in accumulator
    if (accumulator) {
      accumulator = callback.call(undefined, accumulator, this[i], i, this);

      // If initialValue does not exist,
      // we assign accumulator to the
      // current element of the array
    } else {
      accumulator = this[i];
    }
  }
  // We return the overall accumulated response
  return accumulator;
};

// Code to calculate sum of array elements
// using our own reduce method
const arr = [1, 2, 3, 4];
console.log(arr.myReduce((total, elem) => total + elem));

// Code to calculate multiplication of all array elements
console.log(arr.myReduce((prod, elem) => prod * elem));
