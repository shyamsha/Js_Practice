//compare two array are equal or not

let arr1 = [1, 2, 3];
let arr2 = [3, 1, 21];

function compare(a, b) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        count++;
      }
    }
  }
  return count === a.length;
}
console.log(compare(arr1, arr2));

let array1 = [11, 22, 33];
let array2 = [11, 22, 33];
let array3 = [33, 22, 1, 11];

console.log(JSON.stringify(array1) === JSON.stringify(array2));
console.log(array1.toString() === array2.toString());

// A function to compare if two arrays have the same elements regardless of their order
const ignoreOrderCompare = (a, b) => {
  if (a.length !== b.length) return false;
  const elements = new Set([...a, ...b]);
  for (const x of elements) {
    const count1 = a.filter((e) => e === x).length;
    const count2 = b.filter((e) => e === x).length;
    if (count1 !== count2) return false;
  }
  return true;
};

// Declaring arrays
const a = [1, 2, 3];
const b = [3, 1, 2];

// Comparing the arrays
if (ignoreOrderCompare(a, b)) console.log("The arrays have the same elements.");
else console.log("The arrays have different elements.");

const compareArrays = (a, b) =>
  a.length === b.length &&
  a.every((element, index) => {
    if (b.indexOf(element) > -1) {
      console.log(element, [b.indexOf(element)]);
      return (element = [b.indexOf(element)]);
    }
  });

console.log(compareArrays(array1, array2)); //false
console.log(compareArrays(array1, array3)); //true

var isEqual = function (value, other) {
  // Get the value type
  var type = Object.prototype.toString.call(value);

  // If the two objects are not the same type, return false
  if (type !== Object.prototype.toString.call(other)) return false;

  // If items are not an object or array, return false
  if (["[object Array]", "[object Object]"].indexOf(type) < 0) return false;

  // Compare the length of the length of the two items
  var valueLen =
    type === "[object Array]" ? value.length : Object.keys(value).length;
  var otherLen =
    type === "[object Array]" ? other.length : Object.keys(other).length;
  if (valueLen !== otherLen) return false;

  // Compare two items
  var compare = function (item1, item2) {
    // Get the object type
    var itemType = Object.prototype.toString.call(item1);

    // If an object or array, compare recursively
    if (["[object Array]", "[object Object]"].indexOf(itemType) >= 0) {
      if (!isEqual(item1, item2)) return false;
    }

    // Otherwise, do a simple comparison
    else {
      // If the two items are not the same type, return false
      if (itemType !== Object.prototype.toString.call(item2)) return false;

      // Else if it's a function, convert to a string and compare
      // Otherwise, just compare
      if (itemType === "[object Function]") {
        if (item1.toString() !== item2.toString()) return false;
      } else {
        if (item1 !== item2) return false;
      }
    }
  };

  // Compare properties
  if (type === "[object Array]") {
    for (var i = 0; i < valueLen; i++) {
      if (compare(value[i], other[i]) === false) return false;
    }
  } else {
    for (var key in value) {
      if (value.hasOwnProperty(key)) {
        if (compare(value[key], other[key]) === false) return false;
      }
    }
  }

  // If nothing failed, return true
  return true;
};

var arr11 = [1, 2, 3, 4, 5];
var arr22 = [1, 2, 3, 4, 5];
isEqual(arr11, arr22); // returns true

var arrObj1 = [
  1,
  2,
  {
    a: 1,
    b: 2,
    c: 3,
  },
  4,
  5,
];
var arrObj2 = [
  1,
  2,
  {
    c: 3,
    b: 2,
    a: 1,
  },
  4,
  5,
];
isEqual(arrObj1, arrObj2); // returns true

var arr12 = [1, 2, 3, 4, 5];
var arr31 = [5, 4, 3, 2, 1];
isEqual(arr12, arr31); // returns false
