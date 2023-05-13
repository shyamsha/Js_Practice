let a = [3, 4, 9, 34, 23, 3, 2, 10, -9].sort((a, b) => a - b);
let target = 9;
console.log(a);

function binary(arr, t) {
  //to-do
  let low = 0;
  let heigh = arr.length - 1;

  while (low <= heigh) {
    let mid = Math.floor(low + heigh / 2);
    for (let i = 0; i < arr.length; i++) {
      if (t === arr[mid]) {
        console.log(mid);
        return mid;
      }
      if (t > arr[mid]) {
        low = mid + 1;
      } else {
        heigh = mid - 1;
      }
    }
  }
  return -1;
}

console.log(binary(a, target));
