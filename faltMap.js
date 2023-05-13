// These new array methods are the flat() and flatMap() methods.

// You use the flat() method for concatenating sub-arrays recursively into a single array.
// The flat() method takes a depth value as its parameter which is optional depending on the depth of the array you wish to flatten (concatenate).
// The flat() method takes in 1 as a depth by default.

// flatMap() works basically the same expect that it is a combination of the map() and flat() methods together.
// flatMap() loops through the elements in the array and concatenates the elements.

// Both new methods are useful when you're changing an original array into a new array.

const arr4 = [1, 2, [3, [4, 5, [6, 7]]]];

console.log(arr4.flatMap((element) => element).flat(2)); // [1, 2, 3, 4, 5, 6, 7]

console.log(arr4.flat(3)); // [1, 2, 3, 4, 5, 6, 7]

const arr3 = [1, 2, [4, 5], 6, 7, [8]];

console.log(arr3.flatMap((element) => element)); // [1, 2, 4, 5, 6, 7, 8]

const arr1 = [1, 2, [4, 5], 6, 7, [8, [6]]];

// flatMap() depth until 2
console.log(arr1.flatMap((element) => element)); // [1, 2, 4, 5, 6, 7, 8, [6]]

// dept flatten array using recursion
let flatten = (a) => (Array.isArray(a) ? [].concat(...a.map(flatten)) : a);

console.log(flatten(arr1));
