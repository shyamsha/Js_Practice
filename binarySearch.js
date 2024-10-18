let a = [3, 4, 9, 34, 23, 3, 2, 10, -9].sort((a, b) => a - b);
let target = 3;
console.log(a);

function binary(arr, t) {
  let low = 0;
  let heigh = arr.length - 1;

  while (low <= heigh) {
    let mid = Math.floor((low + heigh) / 2);
    if (t === arr[mid]) {
      return mid;
    }
    if (t > arr[mid]) {
      low = mid + 1;
    } else {
      heigh = mid - 1;
    }
  }
  return -1;
}

console.log(binary(a, target));

function recursiveBinarySearch(arr, t) {
  return search(arr, t, 0, arr.length - 1);
}

function search(arr, t, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (t === arr[middleIndex]) {
    return middleIndex;
  }
  if (t > arr[middleIndex]) {
    return search(arr, t, middleIndex + 1, rightIndex);
  } else {
    return search(arr, t, leftIndex, middleIndex - 1);
  }
}

console.log(recursiveBinarySearch(a, target));
