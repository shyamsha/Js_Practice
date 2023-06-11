// a function that modifies a provided function such that the provided function will only be called if the arguments have not been passed before. If they have been passed before, it should return the previous output without calling the provided function.
// This type of optimization is called memoization and is an extremely important example of a higher-order function.
// closures benefits to usage
// it is called first class functions
// it is like pure functions.
//  It is important to note that memoization only works correctly for pure functions. A pure function is defined as function that always returns the same output given the same inputs and doesn't have any side-effects.

const add = (a, b) => {
  return a + b;
};

function memoize(fn) {
  let cache = {};
  return function (...args) {
    let n = args;
    if (n in cache !== true) {
      cache[n] = fn(...args);
      return cache[n];
    } else {
      return cache[n];
    }
  };
}

const memoizedAdd = memoize(add);
// console.log(memoizedAdd(2, 2)); // 4 first call
// console.log(memoizedAdd(2, 2)); // 4 second from call cache result
// console.log(memoizedAdd(2, 3)); // new input it calls actual function and stores input

// same like using react memo it is do shallow comparison by react memo

// storing unique value fn can be any function and there are no constraints on what type of values it accepts. Inputs are considered identical if they are === to each other.
function memoize1(fn) {
  let cache = new Map();
  return function (...args) {
    let n = cache;
    for (const arg of args) {
      if (!n.has(arg)) n.set(arg, new Map());
      n = n.get(arg);
    }
    if (!n.has("__CACHE__")) n.set("__CACHE__", fn(...args));
    return n.get("__CACHE__");
  };
}
