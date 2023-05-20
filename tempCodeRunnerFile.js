    }
  }
  return true;
}

console.log(isPrime(6));

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