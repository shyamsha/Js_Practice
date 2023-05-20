// A closure is a function having access to the parent scope, even after the parent function has closed.
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state
// (the lexical environment).
// In other words, a closure gives you access to an outer function's scope from an inner function.
// In JavaScript, closures are created every time a function is created
let x = 100;
function n() {
  console.log(x);
}
n();

function add(x) {
  return function (y) {
    return x + y;
  };
}

console.log(add(5)(10));

function z() {
  for (var i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }
}
z(); // 5 5 5 5 5 here closure works every time var modify with new when for loop executing.
//  if you want execute 0 1 2 3 4 use let instead of var when using let it creates block scope of function create every time

function c() {
  setTimeout(function () {
    for (var i = 0; i < 5; i++) {
      console.log(i);
    }
  }, 1000);
}

c(); // 0 1 2 3 4 this is another way of solution var define inside it work normal for loop

function y() {
  //here we taking another function pass i value
  for (var i = 0; i < 5; i++) {
    function close(i) {
      // here every time function will call variable remembers
      setTimeout(function () {
        console.log(i);
      }, 1000);
    }
  }
  close(i);
} //0 1 2 3 4

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
  let count = [];
  let isTrue = 0;
  for (let i = 0; i < b; i++) {
    count.push(c(a[i], b));
  }
  for (let j = 0; j < count.length; j++) {
    if (count[j] === "true") {
      isTrue++;
    }
  }
  return isTrue === b ? true : false;
}

console.log(some([2, 4, 6], 3, isEven));
console.log(some([2, 3, 4], 3, isEven));
console.log(some([2, 3, 11], 3, isPrime));
console.log(some([2, 3, 5, 9], 4, isPrime));
