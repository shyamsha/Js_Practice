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
console.log(fibs.next());
console.log(fibs.next());
console.log(fibs.next());
console.log(fibs.next());

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

function createFibonacciGenerator() {
  return generator();
}

// let fibonacciGenerator = createFibonacciGenerator()
// console.log(fibonacciGenerator())
// console.log(fibonacciGenerator())
// console.log(fibonacciGenerator())
// console.log(fibonacciGenerator())
// console.log(fibonacciGenerator())
