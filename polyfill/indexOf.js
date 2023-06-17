Array.prototype.myIndexOf = function (element, fromIndex = 0) {
  for (let i = fromIndex; i < this.length; i++) {
    if (this[i] === element) {
      return i;
    }
  }
  return -1;
};

const arr = ["a", "b", "c", "d", "e", "a"];

console.log(arr.myIndexOf("a"));
//  output: 0

console.log(arr.myIndexOf("b", 2));
// output: -1

console.log(arr.myIndexOf("z"));
// output: -1
