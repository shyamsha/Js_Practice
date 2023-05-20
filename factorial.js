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
