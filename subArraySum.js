/* A simple program to print subarray
with sum as given sum */

/* Returns true if the there is a subarray
of arr[] with sum equal to 'sum' otherwise
returns false. Also, prints the result */
function subArraySum(arr, n, sum) {
  let curr_sum = 0;
  let start_index = 0;

  for (let i = 0; i < n; i++) {
    curr_sum += arr[i];

    while (curr_sum > sum) {
      curr_sum -= arr[start_index];
      start_index++;
    }

    if (curr_sum === sum) {
      console.log("Sum found between indexes " + start_index + " and " + i);
      return;
    }
  }
  console.log("No subarray found");
  return;
}

let arr = [15, 2, 4, 8, 9, 5, 10, 23];
let n = arr.length;
let sum = 23;
console.log(subArraySum(arr, n, sum));

// 1.It initializes two variables: curr_sum (current sum) set to 0, and start_index set to 0.

// 2.The function then iterates through the array using a for loop from 0 to n-1 (where n is the array length).

// 3.In each iteration, it adds the current element (arr[i]) to curr_sum.

// 4.If curr_sum becomes greater than the target sum, it enters a while loop.
// This loop subtracts elements from the start of the current subarray (incrementing start_index) until curr_sum is no longer greater than sum.

// 5.If curr_sum equals the target sum, it means a subarray with the desired sum has been found else it prints "No subarray found"

// This algorithm uses a sliding window approach, efficiently handling cases where the subarray sum might temporarily exceed the target sum by adjusting the start index.

// sub array sum with k steps
function subArraySum(arr, k) {
  let sum = 0;
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (i >= k - 1) {
      maxSum = Math.max(sum, maxSum);
      sum -= arr[i - (k - 1)];
    }
  }
  return maxSum;
}
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(subArraySum(arr1, 2));
// problem breakdown steps
// 1. create a variable to store the sum of the first k elements
// 2. create a variable to store the max sum of the subarray
// 3. iterate through the array
// 4. add the current element to the sum
// 5. if the current index is greater than or equal to k - 1
// 6. update the max sum with the current sum
// 7. subtract the element at the current index minus k - 1 from the sum
// 8. return the max sum
