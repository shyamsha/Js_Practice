const { log } = require("console");

// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one digit, return it

function addingNumbersUptoSingleDigit(num) {
  let string = "" + num;
  let arr = string.split("").map((data) => Number(data));
  let result = arr.reduce((a, b) => a + b);
  if (result > 9) {
    result = addingNumbersUptoSingleDigit(result);
  }

  return result;
}

log(addingNumbersUptoSingleDigit(823));

var addDigits = function (num) {
  let result = num
    .toString()
    .split("")
    .reduce((a, b) => Number(a) + Number(b));
  if (result > 9) {
    result = addDigits(result);
  }
  return result;
};

log(addDigits(38));
