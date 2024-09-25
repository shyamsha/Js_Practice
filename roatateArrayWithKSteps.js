// rotate array with k steps
function rotateArray(arr, k) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    console.log((i + k) % 9, i);
    arr2[(i + k) % arr.length] = arr[i];
    console.log(arr2);
  }
  return arr2;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(rotateArray(arr, 4));

// breakdown problem
// 1. create a new array2
// 2. loop through the array
// 2.1. empty first 4 elements to the new array2
// 2.2. For each iteration, it calculates the new position of the current element using the formula (i + k) % arr.length.
// 3. return the new array2
