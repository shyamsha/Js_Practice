// [1,2,3,4,5] find the min and max sum
// Sum everything except 1 , the sum is 14
// Sum everything except 2 , the sum is 13
//and so on... last one we can find the min and max of sum

function miniMaxSum1(arr) {
  const totalSum = arr.reduce((acc, num) => acc + num, 0);
  const min = totalSum - Math.max(...arr);
  const max = totalSum - Math.min(...arr);
  console.log(min, max);
}

console.log(miniMaxSum1([1, 2, 3, 4, 5]));
