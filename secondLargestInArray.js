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

function secondSmallestElement(arr) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }
  }

  return secondSmallest;
}

const numbers = [5, 2, 8, 3, 1, 7];
console.log("Second smallest element:", secondSmallestElement(numbers));
