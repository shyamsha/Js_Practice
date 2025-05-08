function detectType(value) {
  if (value === null) {
    return "null";
  }
  if (Array.isArray(value)) {
    return "array";
  }

  return typeof value;
}
console.log(detectType(null)); // null
console.log(detectType([])); // array
console.log(detectType({})); // object
console.log(detectType(1)); // number
console.log(detectType("")); // string
console.log(detectType(undefined)); // undefined
console.log(detectType(true)); // boolean
console.log(detectType(() => {})); // function
console.log(detectType(new Date())); // object
console.log(detectType(Symbol(1))); // object
