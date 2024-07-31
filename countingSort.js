// Another sorting method, the counting sort, does not require comparison.
// Instead, you create an integer array whose index range covers the entire range of values in your array to sort.
// Each time a value occurs in the original array, you increment the counter at that index.
// At the end, run through your counting array, printing the value of each non-zero valued index that number of times.

// Given a list of integers, count and return the number of times each value appears as an array of integers.
// ex: [1,1,3,2,1], All of the values are in the range [0..3] so create an array of zeros
// we fill the arr with zeros like [0,0,0,0]
// i	arr[i]	result
// 0	1	    [0, 1, 0, 0]
// 1	1	    [0, 2, 0, 0]
// 2	3	    [0, 2, 0, 1]
// 3	2	    [0, 2, 1, 1]
// 4	1	    [0, 3, 1, 1] end of result

function countingSort(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let result = new Array(100).fill(0);
  for (let j = 0; j < sorted.length; j++) {
    result[sorted[j]] += 1;
  }
  return result;
}
log(
  countingSort([
    63, 54, 17, 78, 43, 70, 32, 97, 16, 94, 74, 18, 60, 61, 35, 83, 13, 56, 75,
    52, 70, 12, 24, 37, 17, 0, 16, 64, 34, 81, 82, 24, 69, 2, 30, 61, 83, 37,
    97, 16, 70, 53, 0, 61, 12, 17, 97, 67, 33, 30, 49, 70, 11, 40, 67, 94, 84,
    60, 35, 58, 19, 81, 16, 14, 68, 46, 42, 81, 75, 87, 13, 84, 33, 34, 14, 96,
    7, 59, 17, 98, 79, 47, 71, 75, 8, 27, 73, 66, 64, 12, 29, 35, 80, 78, 80, 6,
    5, 24, 49, 82,
  ])
);

function countingSort(arr) {
  let max = Math.max(...arr);
  let result = [];
  for (let i = 0; i <= max; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === i) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
}
