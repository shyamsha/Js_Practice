Array.prototype.mySome = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      return true;
    }
  }
  return false;
};

const arr1 = [10, 21, 32, 43, 54, 65];
const hasEven = arr1.mySome((el) => el % 2 === 0);
console.log(hasEven);
// output: true

const arr2 = [10, 20, 30, 40, 50, 60];
const hasOdd = arr2.mySome((el) => el % 2 !== 0);
console.log(hasOdd);
// output: false
