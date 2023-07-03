// bubble sort
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
// bubble sort
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
// insertion sort
const sort = [-6, 20, 8, -2, 4];
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
  return arr;
}
console.log(insertionSort(sort));

// quick sort
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort([-3, -4, 6, 4, 40, 50, 2, 3, 5]));

// merge sort

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}
function merge(leftArr, rightArr) {
  const sortedArray = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArray.push(leftArr.shift());
    } else {
      sortedArray.push(rightArr.shift());
    }
  }
  return [...sortedArray, ...leftArr, ...rightArr];
}
console.log(mergeSort([-3, -4, 6, 4, 40, 50, 2, 3, 5]));

function defaultComparator(a, b) {
  a = a.toString();
  b = b.toString();
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

Array.prototype.mySort = function (cb = defaultComparator) {
  for (var i = 0; i < this.length; i++) {
    for (var j = i + 1; j < this.length; j++) {
      if (cb(this[i], this[j]) > 0) {
        var swap = this[i];
        this[i] = this[j];
        this[j] = swap;
      }
    }
  }
};
