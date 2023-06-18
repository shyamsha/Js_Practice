//polyfill for map

const arr = [1, 2, 3, 4];

Array.prototype.map = function (callBack) {
  const resultArray = [];

  for (let i = 0; i < this.length; i++) {
    resultArray.push(callBack(this[i], i, this));
  }
  return resultArray;
};

// Multiply each element with its index
// and return a new array
const result = arr.map((item, index) => item * index);
console.log(result);

// Add 2 to each element of the array
// and return new array
const newArr = arr.map(function (item) {
  return item + 2;
});

console.log(newArr);

//polyfill for filter

Array.prototype.myFilter = function (cb) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

const arr1 = [1, 2, 3, 4, 5];

const result1 = arr1.myFilter((el) => el % 2 === 0);

console.log(result1);
// output: [2, 4];
