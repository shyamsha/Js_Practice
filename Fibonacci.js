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
  let f0 = 0;
  let f1 = 1;

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

//recursive function of fibonacci

function rf(n) {
  if (n < 2) {
    return n;
  }
  return rf(n - 1) + rf(n - 2);
}

// console.log(rf(12)); // represents sequence of order 7

// range between fibonacci

for (let i = 0; i < 7; i++) {
  // console.log(rf(i)); // utilizing above function
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
