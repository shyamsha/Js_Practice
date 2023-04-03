/* A simple program to print subarray
with sum as given sum */

/* Returns true if the there is a subarray
of arr[] with sum equal to 'sum' otherwise
returns false. Also, prints the result */
function subArraySum(arr, n, sum) {
  // Pick a starting point
  for (let i = 0; i < n; i++) {
    let currentSum = arr[i];

    if (currentSum == sum) {
      console.log("Sum found at indexes " + i);
      return;
    } else {
      // Try all subarrays starting with 'i'
      for (let j = i + 1; j < n; j++) {
        currentSum += arr[j];

        if (currentSum == sum) {
          console.log("Sum found between indexes " + i + " and " + j);
          return;
        }
      }
    }
  }
  console.log("No subarray found");
  return;
}

let arr = [15, 2, 4, 8, 9, 5, 10, 23];
let n = arr.length;
let sum = 23;
subArraySum(arr, n, sum); //"Sum found between indexes 1 and 4"
