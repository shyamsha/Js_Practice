let arr1 = [1, 3, 9, 8, 7, 6, 4, 2, 5];

function ascendingSort() {
  let temp;
  let done = false;
  while (!done) {
    done = true;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] > arr1[i + 1]) {
        done = false;
        temp = arr1[i + 1];
        arr1[i + 1] = arr1[i];
        arr1[i] = temp;
      }
    }
  }
  return arr1;
}

console.log(ascendingSort());

function descendingSort(arr1) {
  let temp;
  let done = false;
  while (!done) {
    done = true;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] < arr1[i + 1]) {
        done = false;
        temp = arr1[i + 1];
        arr1[i + 1] = arr1[i];
        arr1[i] = temp;
      }
    }
  }
  return arr1;
}

console.log(descendingSort(arr1));

var numbers = [12, 10, 15, 11, 14, 13, 16, -1, 16, 11];
numbers.sort((a, b) => b - a);
console.log(numbers);

//another way
const arr = [4, 56, 5, 3, 34, 37, 89, 57, 98];
const sortWithReduce = (arr) => {
  return arr.reduce((acc, val) => {
    let ind = 0;
    while (ind < arr.length && val < arr[ind]) {
      ind++;
    }
    acc.splice(ind, 0, val);
    return acc;
  }, []);
};
console.log(sortWithReduce(arr));
