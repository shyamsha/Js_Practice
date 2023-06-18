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
