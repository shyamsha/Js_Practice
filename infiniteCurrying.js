function infiniteCurryingAdd(a) {
  return function (b) {
    if (b) return infiniteCurryingAdd(a + b);
    return a;
  };
}

console.log(infiniteCurryingAdd(2)(1)(3)());

const multiply = (a) => {
  return function (b) {
    if (b) return multiply(a * b);
    return a;
  };
};
console.log(multiply(2)(3)(4)());
