const { log } = require("console");
// find kth positive missing element in an array

function missingElementsOfKth(arr, k) {
  let count = 0;
  for (let i = 1; i <= arr[arr.length - 1]; i++) {
    if (arr.includes(i)) {
      continue;
    } else {
      count++;
    }
    if (count === k) {
      return i;
    }
  }
}

// console.log(missingElementsOfKth([2, 3, 4, 7, 11], 1));

// missing element in an array is [1, 5, 6, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, ...]
// so the 1st missing element is 1
// Time Complexity: O(n)

// maximum positive numbers or negative numbers in an array

function maxPositiveNegative(arr) {
  let positive = 0;
  let negative = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    } else {
      negative++;
    }
  }
  if (positive > negative) {
    return positive;
  } else {
    return negative;
  }
}

// console.log(maxPositiveNegative([1, 2, 3, 4, -1, -2, -3]));
// time complexity: O(n)

// implement bubble sort

function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));
// time complexity: O(n^2)

// implement selection sort

function selectionSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}
// console.log(selectionSort([64, 34, 25, 12, 22, 11, 90]));
// time complexity: O(n^2)

// implement insertion sort

function insertionSort(arr) {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
// console.log(insertionSort([64, 34, 25, 12, 22, 11, 90]));
// time complexity: O(n^2)

// merge sort implementation

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  function merge(left, right) {
    console.log(left, right, "left and right");
    let result = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    console.log(result);
    return [...result, ...left, ...right];
  }
  return merge(left, right);
}

// console.log(mergeSort([8, 3, 5, 4, 7, 6, 1, 2]));
// explanation of merge sort
// [8,3,5,4,7,6,1,2]
// [8,3,5,4] [7,6,1,2]
// [8,3] [5,4] [7,6] [1,2]
// [8] [3] [5] [4] [7] [6] [1] [2]
// [3,8] [4,5] [6,7] [1,2]
// [3,4,5,8] [1,2,6,7]
// [1,2,3,4,5,6,7,8]
//time complexity: O(n log n)

// merge overlapping intervals implementation
// like  [1,3],[2,6] => 123456 => [1,6] so 3 2 overlapping intervals

function merge(intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }
  // we can use merge sort here but that will take O(n log n) time complexity but this one same time complexity but faster minimal code
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [];
  let prev = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    let current = intervals[i];
    console.log(prev, current, result);
    if (prev[1] >= current[0]) {
      prev = [prev[0], Math.max(prev[1], current[1])];
    } else {
      result.push(prev);
      prev = current;
    }
  }
  result.push(prev);
  return result;
}

// console.log(merge([[1,3],[2,6],[8,10],[15,18],[16,20]]));
//time complexity: O(n log n)

// implement quick sort

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
// console.log(quickSort([8, 3, 5, 4, 7, 6, 1, 2]));
// worst case time complexity: O(n^2)
// best case time complexity: O(n log n)
//explanation of quick sort
// [8,3,5,4,7,6,1,2]
// [3,5,4,7,6,1,2] 8 []
// [ 1, 2 ] [ 5, 4, 7, 6 ] 3
// [] [ 2 ] 1
// [ 4 ] [ 7, 6 ] 5
// [ 6 ] [] 7
// [1, 2, 3, 4, 5, 6, 7, 8]

class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  get(index) {
    if (index >= this.length) {
      return "index out of range";
    }
    return this.data[index];
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  shift() {
    const firstItem = this.data[0];
    const ele = this.data;
    // for (let i = 0; i < this.length; i++) {
    //   this.data[i] = this.data[i + 1];
    // }
    for (let key in ele) {
      // let key it will take declaration of variable not initialization
      ele[key] = ele[parseInt(key) + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }
  deleteByIndex(index) {
    const item = this.data[index];
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
  unshift(item) {
    for (let i = this.length; i >= 0; i--) {
      console.log(this.data[i - 1]);
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = item;
    this.length++;
    return this.length;
  }
  size() {
    return this.length;
  }
}

const newArray = new myArray();
newArray.push(1);
newArray.push("apple");
newArray.push("banana");
// newArray.shift();
console.log(newArray);
newArray.unshift(123);
console.log(newArray);

// implement linked list

class Node {
  constructor(element) {
    this.head = element;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return newNode;
  }

  pop() {
    if (!this.head.head) {
      this.length = 0;
      return undefined;
    }
    let temp = this.head;
    let prev = this.head;
    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    return temp;
  }

  unshift(value) {
    let newNode = new Node(value);

    if (!this.head.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.tail.next = null;
    this.length++;
    return newNode;
  }
  shift() {
    if (!this.head.head) {
      return undefined;
    }
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }
  getFirst() {
    if (!this.head.head) {
      return null;
    }
    return this.head;
  }
  getLast() {
    if (!this.head) {
      return null;
    }
    let temp = this.head;
    while (temp) {
      if (!temp.next) {
        return temp;
      }
      temp = temp.next;
    }
  }
  getElementByIndex(index) {
    let counter = 0;
    let temp = this.head;
    while (temp) {
      if (counter === index) {
        return temp;
      }
      counter++;
      temp = temp.next;
    }
    return null;
  }
  replaceElementByIndex(index, value) {
    let temp = this.getElementByIndex(index);
    if (temp) {
      temp.head = value;
      return true;
    }
    return false;
  }
  insertElementByIndex(index, value) {
    let newNode = new Node(value);
    let temp = this.getElementByIndex(index - 1);
    if (index > this.length) {
      return false;
    }
    if (index === 0) {
      this.unshift(value);
      return true;
    }
    if (index === this.length) {
      this.push(value);
      return true;
    }
    if (temp) {
      newNode.next = temp.next;
      temp.next = newNode;
      this.length++;
      return true;
    }
    return false;
  }
  size() {
    // return this.length;
    let counter = 0;
    let temp = this.head;
    while (temp) {
      counter++;
      temp = temp.next;
    }
    return counter;
  }
  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    return true;
  }
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp;
    let prev = null;
    for (let i = 0; i <= this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
  }
}

let linkedList = new LinkedList(1);
linkedList.push(10);
linkedList.push(15);
linkedList.pop();
linkedList.pop();
linkedList.unshift(2);
linkedList.unshift(3);
linkedList.shift();
log(linkedList.getLast());
log(linkedList.getElementByIndex(2));
log(linkedList.replaceElementByIndex(2, 20));
log(linkedList.insertElementByIndex(1, 18));
log(linkedList.size());
linkedList.reverse();
log(linkedList.clear());
log(linkedList);

class Node1 {
  constructor(value) {
    this.head = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 0;
  }
  push(value) {
    let newNode = new Node1(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }
  pop() {
    let temp = this.tail;
    if (this.length === 0) {
      return undefined;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    this.tail = temp.prev;
    this.tail.next = null;
    temp.prev = null;
    this.length--;
    return temp;
  }
  unshift(value) {
    let newNode = new Node1(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return newNode;
  }
  shift() {
    if (this.length === 0) {
      return undefined;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    let temp = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    temp.next = null;
    this.length--;
    return temp;
  }
}

const doubleLinkedList = new DoublyLinkedList(0);
doubleLinkedList.push(1);
doubleLinkedList.push(2);
doubleLinkedList.push(3);
doubleLinkedList.pop();
doubleLinkedList.unshift(3);
doubleLinkedList.shift();
log(doubleLinkedList);

// implement reverse linked list

function reverseLinkedList(head) {
  // iterative approach and each head has next and next has next and so on
  // so we need to reverse the next to previous and previous to next
  let current = head;
  let prev = null;

  while (current !== null) {
    const nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }
  return prev;
}
function recursivelyReverseList(head) {
  // recursive approach
  // time complexity: O(n) and space complexity: O(n)
  if (head === null || head.next === null) {
    return head;
  }
  let reversedHead = recursivelyReverseList(head.next);
  head.next.next = head;
  head.next = null;
  return reversedHead;
}
