// Find Second largest element in an array
function findSecondLargestElem(arr) {
  let first = 0,
    second = 0;

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] != first) {
      second = arr[i];
    }
  }
  console.log(second, first);
}
let arr = [12, 35, 1, 10, 34, 1];

findSecondLargestElem(arr);

let arr1 = [-12, -35, -1, -10, -34];

function findNegativeSecondLargestElem(arr) {
  let first = -Infinity,
    second = -Infinity;

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] != first) {
      second = arr[i];
    }
  }
  console.log(second, first);
}
console.log(findNegativeSecondLargestElem(arr1));
