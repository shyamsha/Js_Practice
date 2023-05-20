const { log } = require("console");

// find Factors
function factors(n) {
  let factors = [];
  for (let i = n; i >= 1; i--) {
    if (n % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

function gcds(n1, n2) {
  let one = factors(n1);
  let two = factors(n2);

  let gcd = [];
  for (let i = 0; i < one.length; i++) {
    for (let j = 0; j < two.length; j++) {
      if (one[i] === two[j]) {
        gcd.push(one[i]);
      }
    }
  }
  let value = gcd.sort((a, b) => a - b);
  return gcd[gcd.length - 1];
}
log(gcds(48, 32));

// another way single program

function greatestCommonDivisor(a, b) {
  var divisor = 2,
    greatestDivisor = 1;

  if (a < 2 || b < 2) return 1;

  while (a >= divisor && b >= divisor) {
    if (a % divisor == 0 && b % divisor == 0) {
      greatestDivisor = divisor;
    }
    divisor++;
  }
  return greatestDivisor;
}

log(greatestCommonDivisor(14, 21));
log(greatestCommonDivisor(69, 169));

// recursion
function greatestCommonDivisorR(a, b) {
  if (b == 0) return a;
  else return greatestCommonDivisorR(b, a % b);
}
log(greatestCommonDivisorR(14, 21));
