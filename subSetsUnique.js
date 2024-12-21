const { result } = require("lodash");

function subSets(arr) {
  let res = [];
  let temp = [];
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      for (let k = i; k <= j; k++) {
        temp.push(arr[k]);
      }
      res.push(temp);
      temp = [];
    }
  }
  return res;
}
// console.log(subSets([1, 2, 3]));

function subSetsWithRecursion(arr) {
  let res = [];
  let temp = [];

  function helper(arr, i) {
    if (i === arr.length) {
      return res.push([...temp]);
    }
    temp.push(arr[i]);
    helper(arr, i + 1);
    temp.pop();
    helper(arr, i + 1);
  }
  helper(arr, 0);
  return res;
}
console.log(subSetsWithRecursion([1, 2, 3], 0));
//output: [ [ 1, 2, 3 ], [ 1, 2 ],[ 1, 3 ],[ 1 ],[ 2, 3 ],[ 2 ],[ 3 ],[] ]
