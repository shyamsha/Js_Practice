// Design a lazy function that wraps an initial function and returns an object that allows chaining of additional function calls. These functions should not execute immediately.
// Instead, all operations should be queued and only run in sequence when . execute ()
// is called.
// Example Inputs & Outputs
// Example 1:
// const add = (a, b) = a + b;
// const multiply = (a, b) => a * b;
// const result = lazy (add). add (2, 3) • execute(); // → 5
// Example 2:
// const result2 = lazy(multiply).multiply(2, 3).add(4, 5).execute(); // → returns [6, 9]
// multiply(2, 3) = 6, add(4, 5) = 9 → returns [6, 9]
// Example 3:
// const divide = (a, b) => a / b;
// const result3 = lazy(divide).divide(10, 2).divide(6, 3).execute(); // → returns [5, 2]

// use proxy to intercept the function calls
function lazy(fn) {
  const queue = [];

  const handler = {
    get(target, prop) {
      return (...args) => {
        queue.push([target, args]);
        return this; // maintain chainability
      };
    },
    apply(target, thisArg, args) {
      return target(...args);
    },
  };

  const proxy = new Proxy(fn, handler);

  function execute() {
    return queue.map(([func, args]) => func(...args));
  }

  return { ...proxy, execute };
}
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const result = lazy(add).add(2, 3).execute(); // → 5
const result2 = lazy(multiply).multiply(2, 3).add(4, 5).execute(); // → returns [6, 9]
const result3 = lazy(divide).divide(10, 2).divide(6, 3).execute(); // → returns [5, 2]
console.log(result); // 5
console.log(result2); // [6, 9]
console.log(result3); // [5, 2]
// The above code uses a Proxy to intercept function calls and queue them for execution later. The execute method runs all queued functions in sequence and returns their results.
// The lazy function allows for chaining of function calls, and the use of Proxy makes it easy to intercept and handle the function calls without modifying the original functions.
// The code is a good example of how to use Proxy to create a lazy evaluation mechanism in JavaScript. It allows for chaining of function calls and deferring execution until the execute method is called.
