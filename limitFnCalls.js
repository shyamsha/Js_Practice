// limits the number of function calls by executing the function once for a given count of calls
// ToDo
function limitFnCalls(fn, count, context) {
  let calls = 0;
  return function (...args) {
    if (calls < count) {
      calls++;
      return fn.call(context || this, ...args);
    }
    return null;
  };
}

const add = (a, b) => a + b;
const sub = (a, b) => a - b;

const limitedAdd = limitFnCalls(add, 2);
const limitedAdd1 = limitFnCalls(add, 0);
console.log(limitedAdd(5, 2)); // 7
console.log(limitedAdd1(5, 2)); // 7
