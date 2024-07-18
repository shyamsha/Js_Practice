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

const arr = [10, 20, 31, 44, 55, 67];

const result1 = arr.myFindLastIndex((element) => element % 5 === 0);
console.log(result1);
// output: 4

const result2 = arr.myFindLastIndex((element) => element % 3 === 0);
console.log(result2);
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
