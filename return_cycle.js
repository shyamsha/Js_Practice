// Implement a function that takes one or more values and returns a function that cycles through those values each time it is called.

// In this implementation, we use a closure to keep track of the current index in the values array.
// Each time the returned function is called, it returns the current value and increments the index,
// wrapping around to the beginning of the array when it reaches the end with the help of the modulo operator.

function cycle(...values) {
  let index = 0;

  return () => {
    const currentValue = values[index];
    index = (index + 1) % values.length;
    return currentValue;
  };
}
const helloFn = cycle("hello");
console.log(helloFn()); // "hello"
console.log(helloFn()); // "hello"

const onOffFn = cycle("on", "off");
console.log(onOffFn()); // "on"
console.log(onOffFn()); // "off"
console.log(onOffFn()); // "on"
