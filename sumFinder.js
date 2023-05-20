// From a unsorted array, check whether there are any two numbers that will sum up to a given number

const { log } = require("console");

function sumFinder(arr, sum) {
  var differ = {},
    len = arr.length,
    subtract;

  for (var i = 0; i < len; i++) {
    subtract = sum - arr[i];

    if (differ[subtract]) return true;
    else differ[arr[i]] = true;
  }
  return false;
}

log(sumFinder([4, 3, 2, 1, 7], 9));
