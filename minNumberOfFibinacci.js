// Find the Minimum Number of Fibonacci Numbers Whose Sum Is K
// 1414 leet code problem

var findMinFibonacciNumbers = function (k) {
  let minV = 1,
    maxV = 1;

  while (maxV <= k) {
    [minV, maxV] = [maxV, minV + maxV];
  }

  let count = 0;
  while (k > 0) {
    if (maxV <= k) {
      count++;
      k -= maxV;
    } else {
      [minV, maxV] = [maxV - minV, minV];
    }
  }

  return count;
};
console.log(findMinFibonacciNumbers(21));
