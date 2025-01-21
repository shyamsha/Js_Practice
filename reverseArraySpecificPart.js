function reversePart(arr, start, end) {
  // Ensure valid indices
  if (start < 0 || end >= arr.length || start > end) {
    return arr;
  }

  // Reverse the specified portion
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }

  return arr;
}

let arr = [1, 2, 3, 4, 5, 6];
console.log(reversePart(arr, 1, 4)); // [1, 5, 4, 3, 2, 6]
