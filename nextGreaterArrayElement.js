// For the given array [7, 12, 1, 20]

// - The next greater element for 7 is 12.
// - The next greater element for 12 is 20.
// - The next greater element for 1 is 20.
// - There is no greater element for 20 on the right side.

// Output: [12, 20, 20, -1]

function greater(arr) {
  let newArray = [];
  let n = arr.length;
  let next, i, j;
  for (i = 0; i < n; i++) {
    next = -1;
    for (j = i + 1; j < n; j++) {
      if (arr[i] < arr[j]) {
        next = arr[j];
        break;
      }
    }
    newArray.push(next);
  }
  return newArray;
}

console.log(greater(arr));
