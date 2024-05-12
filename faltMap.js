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
console.log(arr1.flat(Infinity));
// flatMap() depth until 2
console.log(arr1.flatMap((element) => element)); // [1, 2, 4, 5, 6, 7, 8, [6]]

// dept flatten array using recursion
let flatten = (a) => (Array.isArray(a) ? [].concat(...a.map(flatten)) : a);
let flatArray = [].concat.apply([], arr4);

console.log(flatten(arr1));

function flattenMultiArray(arr) {
  const flattened = [].concat(...arr);
  return flattened.some((item) => Array.isArray(item))
    ? flattenMultiArray(flattened)
    : flattened;
}
const multiDimensionalArr = [11, [22, 33], [44, [55, 66, [77, [88]], 99]]];
function flat(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object" && Array.isArray(arr[i])) {
      result = result.concat(flat(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(flat(multiDimensionalArr));

const flatArr = flattenMultiArray(multiDimensionalArr); // [11, 22, 33, 44, 55, 66, 77, 88, 99]

function flatten(arr) {
  const newArr = arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = acc.concat(flatten(item));
    } else {
      acc.push(item);
    }

    return acc;
  }, []);

  return newArr;
}

const numArr = [1, [2, [3], 4, [5, 6, [7]]]];

flatten(numArr); // [1, 2, 3, 4, 5, 6, 7]

// Flatten array of array object example [1,[{3:[5]}]]

let arr13 = [1, [{ 3: [{ 5: [1] }] }]];

let flatten = function (a) {
  let arr = a.flat(Infinity);
  let e = [];
  function helper(obj) {
    e.push(Object.keys(obj));
    for (key in obj) {
      let value = obj[key];
      if (Array.isArray(value) && value.length > 0) {
        helper1(value);
      }
    }
  }
  function helper1(array) {
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === "object" && !Array.isArray(array[i])) {
        helper(array[i]);
      }
      if (typeof array[i] !== "object" && !Array.isArray(array[i])) {
        e.push(array[i]);
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object" && !Array.isArray(arr[i])) {
      helper(arr[i]);
    }
    if (typeof arr[i] !== "object" && !Array.isArray(arr[i])) {
      e.push(arr[i]);
    }
  }
  return e.flat(Infinity);
};

console.log(flatten(arr13));
