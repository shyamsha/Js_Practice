function isArraySameValues(arr) {
  return arr.every((v) => v === arr[0]);
}

console.log(isArraySameValues([1, 1, 1]));

[1, 1, 1, 1].every((val, i, arr) => val === arr[0]);

var array = ["a", "a", "an"];

console.log(
  !!array.reduce(function (a, b) {
    return a === b ? a : NaN;
  })
);

function allEqual(arr1) {
  return new Set(arr1).size == 1;
}

console.log(allEqual(["a", "a", "a", "a"])); // true
console.log(allEqual(["a", "a", "b", "a"])); // false

Array.prototype.allValuesSame = function () {
  for (let i = 1; i < this.length; i++) {
    if (this[i] !== this[0]) {
      return false;
    }
  }
  return true;
};

array.allValuesSame();
