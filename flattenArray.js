// flatten array without any built in method

/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */

let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
let n = 1;

let flat = function (arr, arrayDepth) {
  // with out using array depth array will be deep flatten
  let res = [];
  function helper(arr, depth) {
    for (var i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "object" && depth < arrayDepth) {
        helper(arr[i], depth + 1);
      } else {
        res.push(arr[i]);
      }
    }
    return res;
  }
  return helper(arr, 0);
};

console.log(flat(arr, n));
