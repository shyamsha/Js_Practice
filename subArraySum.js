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
      return "Sum found between indexes " + start_index + " and " + i;
    }
  }
  return "No subarray found";
}

let arr = [15, 2, 4, 8, 9, 5, 10, 23];
let n = arr.length;
let sum = 28;
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
// console.log(subArraySum(arr1, 2));
// problem breakdown steps
// 1. create a variable to store the sum of the first k elements
// 2. create a variable to store the max sum of the subarray
// 3. iterate through the array
// 4. add the current element to the sum
// 5. if the current index is greater than or equal to k - 1
// 6. update the max sum with the current sum
// 7. subtract the element at the current index minus k - 1 from the sum
// 8. return the max sum

// un-optimized solution
function maxSubArray(nums) {
  let maxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum += nums[j];
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
  }
  return maxSum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

//optimized solution
function maxSubArray1(nums) {
  let maxSum = nums[0];
  let currentSum = 0;
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return maxSum;
}

console.log(maxSubArray1([5, 4, -1, 7, 8]));

// Function to find a continuous sub-array which adds up to
// a given number.
function subarraySum(arr, target) {
  // this is the optimized solution and not work with negative numbers
  // Initialize window
  let s = 0,
    e = 0;

  let curr = 0;
  for (let i = 0; i < arr.length; i++) {
    curr += arr[i];

    // If current sum becomes more or equal,
    // set end and try adjusting start
    if (curr >= target) {
      e = i;

      // While current sum is greater,
      // remove starting elements of current window
      while (curr > target && s < e) {
        curr -= arr[s];
        s++;
      }

      // If we found a subarray
      if (curr === target) {
        return [s, e];
      }
    }
  }
  // If no subarray is found
  return [-1];
}

// Driver Code
let array = [15, 2, 4, 8, 9, 5, 10, 23];
let target = 23;
console.log(subarraySum(array, target));
function sum(arr, sum) {
  //cur_sum to keep track of cumulative sum till that point
  let cur_sum = 0;
  let start = 0;
  let end = -1;
  let n = arr.length;
  let hashMap = new Map();

  for (let i = 0; i < n; i++) {
    cur_sum = cur_sum + arr[i];
    //check whether cur_sum - sum = 0, if 0 it means
    //the sub array is starting from index 0- so stop
    if (cur_sum - sum == 0) {
      start = 0;
      end = i;
      break;
    }
    //if hashMap already has the value, means we already
    // have subarray with the sum - so stop
    if (hashMap.has(cur_sum - sum)) {
      start = hashMap.get(cur_sum - sum) + 1;
      end = i;
      break;
    }
    //if value is not present then add to hashmap
    hashMap.set(cur_sum, i);
  }
  return [start, end];
}
