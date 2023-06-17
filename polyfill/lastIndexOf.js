Array.prototype.myLastIndexOf = function (
  element,
  fromIndex = this.length - 1
) {
  for (let i = fromIndex; i >= 0; i--) {
    if (this[i] === element) {
      return i;
    }
  }
  return -1;
};

const arr = ["a", "b", "c", "d", "e", "f", "a"];

console.log(arr.myLastIndexOf("a"));
//  output: 6

console.log(arr.myLastIndexOf("f", 5));
// output: -1

console.log(arr.myLastIndexOf("z"));
//  output: -1
