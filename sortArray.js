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
    let currentValue = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = currentValue;
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

// heap sort

/**
 * @param {Array<number>} arr The input integer array to be sorted.
 * @return {Array<number>}
 */
function heapSort(arr) {
  // Begin by building a max heap.
  const size = arr.length;
  for (let i = Math.floor(size / 2 - 1); i >= 0; i--) {
    // Start with the index of the last parent node.
    // heapify: Swaps parent with child as long as child is larger than parent.
    heapify(arr, size, i);
  }

  // Iterate through the heap backwards, swapping the last element of the heap with the max element (the root of a max heap).
  // Max elements swapped to the end constitute the sorted part of the array (ignored in the next iteration by "i--").
  for (let i = size - 1; i >= 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Build a max heap again in preparation for the swap in the next iteration.
    heapify(arr, i, 0);
  }

  return arr;
}

function heapify(arr, size, parentIdx) {
  let largest = parentIdx; // Initiate largest value's index with parent index.
  const leftChildIdx = 2 * parentIdx + 1; // Calculate index of left child.
  const rightChildIdx = 2 * parentIdx + 2; // Calculate index of right child.
  // Set `largest` to index with highest value between parent, left and right child.
  // See if left child of parent exists and is larger than parent.
  if (leftChildIdx < size && arr[leftChildIdx] > arr[largest]) {
    largest = leftChildIdx;
  }
  // See if right child of parent exists and is larger than parent.
  if (rightChildIdx < size && arr[rightChildIdx] > arr[largest]) {
    largest = rightChildIdx;
  }
  // If `largest` is not the current parent, swap positions with the current parent.
  if (largest !== parentIdx) {
    [arr[parentIdx], arr[largest]] = [arr[largest], arr[parentIdx]];
    // Continue to recursively heapify the affected subtree.
    heapify(arr, size, largest);
  }
}

//descending order
function heapifyMin(arr, size, parentIdx) {
  let smallest = parentIdx; // initiate smallest value's index with parent index
  const leftChildIdx = 2 * parentIdx + 1; // calculate index of left child
  const rightChildIdx = 2 * parentIdx + 2; // calculate index of right child
  // set 'smallest' to index with lowest value between parent, left and right child
  if (leftChildIdx < size && arr[leftChildIdx] < arr[smallest]) {
    smallest = leftChildIdx;
  }
  if (rightChildIdx < size && arr[rightChildIdx] < arr[smallest]) {
    smallest = rightChildIdx;
  }
  // if 'smallest' is not the current parent, swap positions with the current parent
  if (smallest !== parentIdx) {
    [arr[parentIdx], arr[smallest]] = [arr[smallest], arr[parentIdx]];
    // continue to recursively heapify the affected subtree
    heapifyMin(arr, size, smallest);
  }
}

// another way

function heapSort1(arr) {
  const result = arr.slice(0);
  const size = arr.length;
  for (let i = Math.floor(size / 2 - 1); i >= 0; i--) {
    heapify(result, size, i);
  }
  for (let i = size - 1; i >= 0; i--) {
    [result[0], result[i]] = [result[i], result[0]];
    heapify(result, i, 0);
  }
  return result;
}

heapSort([9, 3, 6, 2, 1, 11]); // [1, 2, 3, 6, 9, 11]
heapSort([12, 16, 14, 1, 2, 3]); // [1, 2, 3, 12, 14, 16]
