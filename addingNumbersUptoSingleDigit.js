const { log } = require("console");

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
