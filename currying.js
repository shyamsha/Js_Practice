//normal function
function add(a, b) {
  return a + b;
}
console.log(add(1, 2));

//currying function
// Currying is a powerful technique in functional programming that transforms a function with multiple arguments into a sequence of functions.

function addCurrying(a) {
  return function (b) {
    return a + b;
  };
}
let addSum = addCurrying;
console.log(addSum(2)(4));

function addBase(base) {
  return function (num) {
    return base + num;
  };
}

var addTen = addBase(10);
addTen(5); //15
addTen(80); //90
addTen(-5); //5

// here’s the “advanced” curry implementation for multi-argument functions that we could use above.

function add(a, b, c) {
  return a + b + c;
}

function currying(fn) {
  return function curry(...args) {
    console.log(args.length, fn.length);
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curry.apply(this, args.concat(args2));
      };
    }
  };
}

let sum = currying(add);
console.log(sum(2)(2)(4));
console.log(sum(2, 2)(4));
console.log(sum(2)(2, 4));
console.log(sum(2, 2, 4));
console.log(sum()()(2, 2, 4));
// we can call sum in various ways, all of which should return the same result
// Currying with Recursive Function Calls
var curry = function (fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }

    return (...nextArgs) => curried(...args, ...nextArgs);
  };
};
// with bind return new function and accumulate previous value
var curry1 = function (fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }

    return curried.bind(this, ...args);
  };
};
// use cases
// Memoization
// Reusable utility functions: Currying can help create reusable utility functions that can be easily customized for specific use cases.
// It allows you to create flexible and reusable code by enabling partial application of function arguments
// Event handling: In event-driven programming, currying can be used to create event handlers with specific configurations
//example
const handleClick = (buttonId) => (event) => {
  console.log(`Button ${buttonId} clicked`, event);
};

const button1Handler = handleClick(1);
document.getElementById("button1").addEventListener("click", button1Handler);

// Customizing API calls: Currying can help create more specific API calls based on a generic API call function.
const apiCall = (baseUrl) => (endpoint) => (params) =>
  fetch(`${baseUrl}${endpoint}`, { ...params });

const myApiCall = apiCall("https://my-api.com");
const getUser = myApiCall("/users");
const updateUser = myApiCall("/users/update");

// Usage:
getUser({ userId: 1 });
updateUser({ userId: 1, name: "John Doe" });
//Higher-order functions and functional composition: Currying enables the creation of higher-order functions that can be composed to create more complex functionality.
const compose = (f, g) => (x) => f(g(x));

const double = (x) => x * 2;
const square = (x) => x * x;

const doubleThenSquare = compose(square, double);

const result = doubleThenSquare(5); // (5 * 2)^2 = 100

function sum(...args) {
  let total = args.reduce((acc, curr) => acc + curr, 0); // Calculate the initial sum

  // Return a function that adds to the existing total
  return function (...nextArgs) {
    if (nextArgs.length > 0) {
      total += nextArgs.reduce((acc, curr) => acc + curr, 0); // Add the new arguments
      return sum(total); // Call sum again recursively with the updated total
    } else {
      return total; // If no new arguments, return the final total
    }
  };
}

console.log(sum(1)(2)(3)(4)(5)()); // Output: 15
console.log(sum(1, 2, 3)(4, 5)()); // Output: 15
console.log(sum(1, 2)(3)(4, 5)()); // Output: 15

function sum1(...args) {
  let total = args.reduce((acc, num) => acc + num, 0);

  function adder(...innerArgs) {
    if (innerArgs.length === 0) return total;
    total += innerArgs.reduce((acc, num) => acc + num, 0);
    return adder;
  }

  adder.toString = () => total; // For cases like sum(1)(2) + 3

  return adder;
}

// Test cases
console.log(sum1(1)(2)(3)(4)(5)() + 3 + 5); // Output: 15
console.log(sum1(1, 2, 3)(4, 5)()); // Output: 15
console.log(sum1(1, 2)(3)(4, 5)()); // Output: 15
