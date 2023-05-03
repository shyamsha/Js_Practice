// 1. Write a function which loops through an array and checks if n of the elements
// of the array satisfy the condition function that is passed

// Signature of the 'some' function
// (array, n, conditionFunction) -> trueOrFalse
// array - Input array
// n - The function should check if n elements of the conditionFunction satisfy

// Write the some function and isEven and isPrime functions

function isEven(num) {
  return num % 2 === 0 ? "true" : "false";
}

function isPrime(num, b) {
  let isPrime = "true";
  if (num > 1) {
    for (let i = 2; i < b; i++) {
      if (num % i === 0 && num !== 2) {
        isPrime = "false";
        break;
      }
    }
  }
  return isPrime;
}

function some(a, b, c) {
  let output = [];
  let count = 0;
  for (let i = 0; i < b; i++) {
    output.push(c(a[i], b));
  }
  for (let j = 0; j < output.length; j++) {
    if (output[j] === "true") {
      count++;
    }
  }
  return count === b ? true : false;
}

console.log(some([2, 4, 6], 3, isEven));
console.log(some([2, 3, 4], 3, isEven));
console.log(some([2, 3, 11], 3, isPrime));
console.log(some([2, 3, 5, 9], 4, isPrime));
