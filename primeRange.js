// program to print prime numbers between the two numbers

// take input from the user
const lowerNumber = 5;
const higherNumber = 15;

// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
  let flag = 0;

  // looping through 2 to user input number
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = 1;
      break;
    }
  }

  // if number greater than 1 and not divisible by other numbers
  if (i > 1 && flag == 0) {
    console.log(i);
  }
}

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    // we can use i <= Math.sqrt(n) to achieve here we use optimization code if bigger n
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(9));

function primeFactors(n) {
  let factors = [];
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      factors.push(i);
      n = n / i;
      i--;
    }
  }
  return factors;
}

console.log(primeFactors(12));

// another way
function primeFactors(n) {
  var factors = [],
    divisor = 2;

  while (n > 2) {
    if (n % divisor == 0) {
      factors.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }
  return factors;
}

// console.log(primeFactors(69));
