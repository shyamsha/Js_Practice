let arr = [3, 5, 1, 9, 3, 6, 2, 2];
let number = 2;

function lastIndexOf(array, index) {
  for (let i = array.length; i > 0; i--) {
    //       console.log(arr[i])
    if (array[i] === index) {
      return i;
    }
  }

  return -1;
}

console.log(lastIndexOf(arr, number));
