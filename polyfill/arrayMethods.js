Array.prototype.myUnshift = function () {
  if (arguments.length > 0) {
    // move elements of the array ahead
    for (let i = this.length - 1; i >= 0; i--) {
      this[i + arguments.length] = this[i];
    }

    // add the args elements at the start
    for (let i = 0; i < arguments.length; i++) {
      this[i] = arguments[i];
    }
  }

  return this.length;
};

const array = ["a", "b", "c", "d", "e"];
const result = array.myUnshift("z", "y", "p");

console.log(result);
// 8

console.log(array);
// ["z", "y", "p", "a", "b", "c", "d", "e"];

Array.prototype.myPop = function () {
  if (this.length > 0) {
    let lastEl = this[this.length - 1];
    this.length -= 1;
    return lastEl;
  }
};

// Test case 1:
const array1 = ["a", "b", "c", "d", "e"];
const result1 = array.myPop();
console.log(result1); // "e"
console.log(array1); // ["a", "b", "c", "d"];

// Test case 2:
const emptyArray1 = [];
const result12 = emptyArray1.myPop();
console.log(result12); // undefined
console.log(emptyArray1); // [];

Array.prototype.myPush = function () {
  for (let i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i];
  }
  return this.length;
};

const array2 = ["a", "b", "c", "d", "e"];
const result2 = array.myPush("z", "y", "p");

console.log(result2);
// 8

console.log(array2);
// ["a", "b", "c", "d", "e", "z", "y", "p"];

Array.prototype.myShift = function () {
  if (this.length > 0) {
    const firstEl = this[0];

    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }

    this.length -= 1;

    return firstEl;
  }
};

// Test case 1:
const array21 = ["a", "b", "c", "d", "e"];
const result21 = array.myShift();
console.log(result21); // "a"
console.log(array21); // ["b", "c", "d", "e"];

// Test case 2:
const emptyArray2 = [];
const result22 = emptyArray2.myShift();
console.log(result22); // undefined
console.log(emptyArray2); // [];

Array.prototype.myFill = function (value, start = 0, end = this.length) {
  if (start < 0) {
    start = this.length + start;
  }

  if (end < 0) {
    end = this.length + end;
  }

  for (let i = start; i < end; i++) {
    this[i] = value;
  }

  return this;
};

// Test case 1:
const arr1 = ["a", "b", "c", "d", "e"];
const result23 = arr1.myFill("*");
console.log(result23);
// ["*", "*", "*", "*", "*"];

// Test case 2:
const arr2 = ["a", "b", "c", "d", "e"];
const result24 = arr2.myFill("*", 1);
console.log(result24);
// ["a", "*", "*", "*", "*"];

// Test case 3:
const arr3 = ["a", "b", "c", "d", "e"];
const result3 = arr3.myFill("*", 1, 3);
console.log(result3);
// ["a", "*", "*", "d", "e"];

// Test case 4:
const arr4 = ["a", "b", "c", "d", "e"];
const result4 = arr4.myFill("*", -4, -1);
console.log(result4);
// ["a", "*", "*", "*", "e"];

Array.prototype.myReverse = function () {
  let start = 0,
    end = this.length - 1;

  while (start < end) {
    let temp = this[start];
    this[start] = this[end];
    this[end] = temp;
    start++;
    end--;
  }

  return this;
};

const arr = [1, 2, 3, 4, 5];
const result25 = arr.myReverse();

console.log(arr); // [5, 4, 3, 2, 1]
console.log(result25); // [5, 4, 3, 2, 1]

function defaultComparator(a, b) {
  a = a.toString();
  b = b.toString();
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

Array.prototype.mySort = function (cb = defaultComparator) {
  for (var i = 0; i < this.length; i++) {
    for (var j = i + 1; j < this.length; j++) {
      if (cb(this[i], this[j]) > 0) {
        var swap = this[i];
        this[i] = this[j];
        this[j] = swap;
      }
    }
  }
};

// Test case 1:

const arr12 = [30, 55, 1, 3, 66, 22];
arr12.mySort();
console.log(arr);
// output: [1, 22, 3, 30, 55, 66];

// Test case 1:
arr12.mySort((a, b) => a - b);
console.log(arr12);
// output: [1, 3, 22, 30, 55, 66];

// polyfills for searching methods

const { log } = require("console");
let ar = [15, 2, 1];

Array.prototype.myAt = function (index) {
  if (index >= 0) {
    return this[index];
  } else {
    return this[this.length + index];
  }
};
console.log(ar.myAt(-1)); //1

Array.prototype.myIndexOf = function (ele, fromIndex = 0) {
  for (let i = fromIndex; i < this.length; i++) {
    if (this[i] === ele) {
      return i;
    }
  }
  return -1;
};
log(ar.myIndexOf(15, 1)); // -1
log(ar.myIndexOf(15)); // 0

Array.prototype.myLastIndexOf = function (ele, fromIndex = this.length - 1) {
  for (let i = fromIndex; i >= 0; i--) {
    if (this[i] === ele) {
      return i;
    }
  }
  return -1;
};
log(ar.myLastIndexOf(1, 1)); // -1
log(ar.myLastIndexOf(15)); // 0

Array.prototype.myFind = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};
log(ar.myFind((ele) => ele > 2)); // 15
log(ar.myFind((ele) => ele > 21)); // undefined

Array.prototype.myFindIndex = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return i;
    }
  }
  return -1;
};
log(ar.myFindIndex((ele) => ele > 2)); // 1
log(ar.myFindIndex((ele) => ele > 21)); // -1

Array.prototype.myFindLast = function (cb) {
  for (let i = this.length; i >= 0; i--) {
    if (cb(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};
log(ar.myFindLast((ele) => ele > 2)); // 15
log(ar.myFindLast((ele) => ele > 21)); // undefined

Array.prototype.myFindLastIndex = function (cb) {
  for (let i = this.length; i >= 0; i--) {
    if (cb(this[i], i, this)) {
      return i;
    }
  }
  return -1;
};

const lastIndex = [10, 20, 31, 44, 55, 67];

const result13 = lastIndex.myFindLastIndex((element) => element % 5 === 0);
console.log(result13);
// output: 4

const result29 = lastIndex.myFindLastIndex((element) => element % 3 === 0);
console.log(result29);
// output: -1

Array.prototype.myIncludes = function (ele, fromIndex = 0) {
  for (let i = fromIndex; i < this.length; i++) {
    if (this[i] === ele) {
      return true;
    }
  }
  return false;
};
log(ar.myIncludes(2)); // true
log(ar.myIncludes(2, 2)); // false

Array.prototype.mySome = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      return true;
    }
  }
  return false;
};
log(ar.mySome((ele) => ele > 2)); // true
log(ar.mySome((ele) => ele > 21)); // false

//every() method accepts a callback function that executes on every element of the array
//It returns true if every element in the array conditions are true, otherwise it returns false
Array.prototype.myEvery = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (!cb(this[i])) {
      return false;
    }
  }
  return true;
};
log(ar.myEvery((ele) => ele > 2)); // false
log(ar.myEvery((ele) => ele > 21)); // true

//Iterative polyfill

Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (typeof this[i] !== "undefined") {
      cb(this[i], i, this);
    }
  }
};
ar.myForEach((ele) => console.log(ele));

Array.prototype.myMap = function (cb) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    const value = cb(this[i], i, this);
    result.push(value);
  }

  return result;
};
ar.myMap((ele) => ele * 2);

Array.prototype.myFilter = function (cb) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};
ar.myFilter((ele) => ele > 2);

// once is lodash function it will execute only once

const once = function (cb, context) {
  let ran;
  return function () {
    if (cb) {
      ran = cb.apply(context || this, arguments);
      cb = null;
    }
    return ran;
  };
};

let a = 10;

function add() {
  a += 10;
}
let startFunc = once(add);
startFunc();
console.log(a);
startFunc();
console.log(a);
startFunc();
console.log(a);
