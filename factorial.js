function factorial(fact) {
  let factorial = 1;
  for (let i = fact - 1; i >= 0; i--) {
    factorial += factorial * i;
  }
  return factorial;
}

// 2.Prime Factors
function factors(n) {
  let factors = [];
  for (let i = n; i >= 1; i--) {
    if (n % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}
factors(42);

//recursive function

function factorialR(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

console.log(factorialR(4));

function extraLongFactorials(n) {
  let result = BigInt(1);
  for (let i = BigInt(1); i <= BigInt(n); i++) {
    result *= i;
  }
  return result;
}

console.log(extraLongFactorials(25));
