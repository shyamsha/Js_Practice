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
