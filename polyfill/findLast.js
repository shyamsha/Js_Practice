Array.prototype.myFindLast = function (cb) {
  for (let i = this.length; i >= 0; i--) {
    if (cb(this[i], i, this)) {
      return this[i];
    }
  }
};

const arr = [10, 20, 31, 44, 55, 67];

const result1 = arr.myFindLast((element) => element % 5 === 0);
console.log(result1);
// output: 55

const result2 = arr.myFindLast((element) => element % 3 === 0);
console.log(result2);
// output: undefined
