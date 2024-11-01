// multiplying array values and sum

function squareSum(a) {
  // var sum = 0;
  // for (var i = 0; i < a.length; i++) {
  //     sum += a[i] * a[i];
  // }
  // return sum;
  return a.reduce((acc, cur) => (acc += cur * cur), 0);
}
console.log(squareSum([1, 2, 3, 4]));
