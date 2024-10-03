// From a unsorted array, check whether there are any two numbers that will sum up to a given number

const { log } = require("console");

function sumFinder(arr, sum) {
  var differ = {},
    len = arr.length,
    subtract;

  for (var i = 0; i < len; i++) {
    subtract = sum - arr[i];
    if (differ[subtract]) {
      return true;
    } else {
      differ[arr[i]] = true;
    }
  }
  console.log(differ);

  return false;
}

log(sumFinder([4, 3, 1, 1, 7], 9));

const arr = [1, -2, -3, -4];
let k = -5;

function sumWithInitial(arr, k) {
  let map = new Map();
  let sum = [];
  for (let i = 0; i < arr.length; i++) {
    let sub = k - arr[i];
    if (map.has(sub)) {
      sum = [map.get(sub), i];
    } else {
      map.set(arr[i], i);
    }
  }
  if (sum.length === 2) {
    return true;
  } else {
    return false;
  }
}

console.log(sumWithInitial(arr, k));
