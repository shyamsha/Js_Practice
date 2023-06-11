// polyfill for includes()

const { log } = require("console");

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

Array.prototype.myIncludes = function (ele) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === ele) {
      return true;
    }
  }
  return false;
};

log(nums.myIncludes(5));
