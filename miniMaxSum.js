// [1,2,3,4,5] find the min and max sum
// Sum everything except 1 , the sum is 14
// Sum everything except 2 , the sum is 13
//and so on... last one we can find the min and max of sum

function miniMaxSum(arr) {
  let min = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    min += arr[i];
    max += arr[i];
  }
  min = min - Math.max.apply(null, arr);
  max = max - Math.min.apply(null, arr);
  console.log(min, max);
}
log(miniMaxSum([1, 3, 5, 7, 9]));
