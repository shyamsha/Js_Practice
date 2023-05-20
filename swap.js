//with out temp

function swapNumb1(a, b) {
  console.log("before swap: ", "a: ", a, "b: ", b);
  b = b - a;
  a = a + b;
  b = a - b;
  console.log("after swap: ", "a: ", a, "b: ", b);
}

function swapNumb2(a, b) {
  console.log("a: " + a + " and b: " + b);
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  console.log("a: " + a + " and b: " + b);
}
