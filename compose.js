const add = (a) => a + 5;
const multiply = (a) => a * 2;
const subtract = (a) => a - 1;
const divide = (a) => a / 2;

const compose = function (...funcs) {
  return function (...args) {
    return funcs.reduceRight((acc, func) => func(acc), args);
  };
};

console.log(compose(add, multiply, subtract, divide)(10));
