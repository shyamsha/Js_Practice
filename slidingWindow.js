function maxSubArr(arr, k) {
  let result = [];
  for (let i = 0; i <= arr.length - k; i++) {
    let max = arr[i];
    for (let j = 1; j < k; j++) {
      if (arr[i + j] > max) {
        max = arr[i + j];
      }
    }
    result.push(max);
  }
  return result;
}
// console.log(maxSubArr(arr, k));
// time complexity is O(n * k) where n is the number of elements in the input array and k is the size of the sliding window. o(n*2)

function optimizedMaxSubArr(arr, k) {
  //if elements are positive that some edge cases will not work
  let result = [];
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
    if (i >= k - 1) {
      result.push(max);
    }
  }
  return result;
}
let arr = [1, 3, -1, -3, 5, 3, 6, 7, 9];
let k = 3;
console.log(optimizedMaxSubArr1([1, -1], 1)); // this will not work for this edge case
console.log(optimizedMaxSubArr1(arr, k));

function optimizedMaxSubArr1(arr, k) {
  let result = [];
  let dequeue = [];
  for (let i = 0; i < arr.length; i++) {
    while (dequeue.length > 0 && dequeue[dequeue.length - 1] < arr[i]) {
      dequeue.pop();
    }
    dequeue.push(arr[i]);
    if (i >= k - 1) {
      result.push(dequeue[0]);
      if (arr[i - k + 1] === dequeue[0]) {
        dequeue.shift();
      }
    }
  }
  return result;
}
