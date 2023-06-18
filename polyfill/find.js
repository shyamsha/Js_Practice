// find polyfill

Array.prototype.myFind = function (cb) {
  for (let i = 0; i < this.length; i++) {
    return cb(this[i], i, this);
  }
};

const myFind = [1, 2, 3, 4, 5, 6].myFind((e, index, self) => {
  if (e === 1) {
    return index;
  }
});
console.log(myFind);

const arr = [10, 20, 31, 44, 55, 67];

const result1 = arr.myFind((element) => element % 20 === 0);
console.log(result1);
// output: 20
