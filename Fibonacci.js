function FibIterator(a) {
  this.state = { x: 1, y: a };
  this.next = function () {
    const ret = this.state.x;
    const z = this.state.x + this.state.y;
    this.state.x = this.state.y;
    this.state.y = z;
    return ret;
  };
}
const fibs = new FibIterator(1);
// console.log(fibs.next());
// console.log(fibs.next());
// console.log(fibs.next());
// console.log(fibs.next());

// Write a function which returns a function that generates fibonacci numbers.
// Don't use generators.

function generator() {
  let f0 = 1;
  let f1 = 0;

  return function () {
    let old_f0 = f0;
    let old_f1 = f1;

    f0 = old_f1;
    f1 = old_f0 + old_f1;

    return f0;
  };
}

function createFibonacciClosureGenerator() {
  return generator();
}

let fibonacciGenerator = createFibonacciClosureGenerator();
// console.log(fibonacciGenerator());
// console.log(fibonacciGenerator());
// console.log(fibonacciGenerator());
// console.log(fibonacciGenerator())
// console.log(fibonacciGenerator())

// 1. Write a function which loops through an array and checks if n of the elements

// of the array satisfy the condition function that is passed
// Signature of the 'some' function

// (array, n, conditionFunction) -> trueOrFalse
// array - Input array
// n - The function should check if n elements of the conditionFunction satisfy
// Signature of the 'isEven' and 'isPrime' functions. They should take one integer as input and return a true or false value.

// (int) -> trueOrFalse

// Write the some function and isEven and isPrime functions

// Example: (When you run the following code, don't change anything)
// console.log(some([2,4,6], 3, isEven)) // should print true
// console.log(some([2,3,4], 3, isEven)) // should print false
// console.log(some([2,3,11], 4, isPrime)) // should print false
// console.log(some([2,3,5,9], 3, isPrime)) // should print true

//recursive function of fibonacci

function rf(n) {
  if (n < 2) {
    return n;
  }
  return rf(n - 1) + rf(n - 2);
}

// range between fibonacci

for (let i = 0; i < 7; i++) {
  // console.log(rf(i)); // utilizing above function
  // console.log(fibonacciGenerator()); // utilizing above function
}

var fibGenerator = function* () {
  let f0 = 0;
  let f1 = 1;
  while (true) {
    let current = f0;
    f0 = f1;
    f1 = current + f1;
    yield current;
  }
};

const gen = fibGenerator();
// console.log(gen.next().value); // 0
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2
// console.log(gen.next().value); // 3
// console.log(gen.next().value); // 5

// Fibonacci generator with out variable
function* fibonacci() {
  [a, b] = [0, 1];
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

// Instantiates the fibonacci generator
var fib = fibonacci();

// gets first 10 numbers from the Fibonacci generator starting from 0
for (let i = 0; i < 10; i++) {
  console.log(fib.next().value);
}

var fibGenerator = function* (a = 0, b = 1) {
  // yield the first number
  yield a;

  // recursively call fibGenerator and yield the entire generator function
  yield* fibGenerator(b, a + b);
};
