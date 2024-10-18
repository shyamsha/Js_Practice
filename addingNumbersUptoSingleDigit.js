const { log } = require("console");

// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one digit, return it

function addingNumbersUptoSingleDigit(num) {
  let string = "" + num; // convert to string
  let arr = string.split("").map(Number); // convert to array with numeric values
  console.log(Array.from(num.toString()).map(Number)); // we can use this to convert to array with numeric values

  let result = arr.reduce((a, b) => a + b);
  if (result > 9) {
    result = addingNumbersUptoSingleDigit(result);
  }

  return result;
}

log(addingNumbersUptoSingleDigit(823));
