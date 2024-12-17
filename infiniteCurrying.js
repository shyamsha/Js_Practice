function infiniteCurryingAdd(a) {
  return function (b) {
    if (b) return infiniteCurryingAdd(a + b);
    return a;
  };
}

console.log(infiniteCurryingAdd(2)(1)(3)());
