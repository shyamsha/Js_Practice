Array.prototype.myFindIndex = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return i;
    }
  }
  return -1;
};

const arr = [10, 20, 31, 44, 55, 67];

const result1 = arr.myFindIndex((element) => element % 20 === 0);
console.log(result1);
// output: 1

const result2 = arr.myFindIndex((element) => element % 3 === 0);
console.log(result2);
// output: -1
