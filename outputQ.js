// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise");
// });

// console.log("End");

// 1. Write a program to remove duplicates from an array ?
const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
function removeDuplicates(arr) {
  const uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}
console.log(removeDuplicates(arr)); // [1, 2, 3, 4, 5]

// time complexity: O(n^2)
// space complexity: O(n)
// optimization
function removeDuplicates(arr) {
  //   const uniqueArr = [...new Set(arr)];
  //   return uniqueArr;
  const uniqueArr = arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
  return uniqueArr;
}
console.log(removeDuplicates(arr)); // [1, 2, 3, 4, 5]
// time complexity: O(n)
// space complexity: O(n)
// 2. Write a program to find the largest number in an array ?
const arr1 = [1, 2, 3, 4, 5];
function findLargest(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
console.log(findLargest(arr1)); // 5
// time complexity: O(n)
// space complexity: O(1)
// optimization
function findLargest(arr) {
  return Math.max(...arr);
}
console.log(findLargest(arr1)); // 5

//3. Write a program to find the second largest number in an array ?
const arr2 = [1, 2, 3, 4, 5];
function findSecondLargest(arr) {
  let largest = arr[0];
  let secondLargest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
console.log(findSecondLargest(arr2)); // 4
// time complexity: O(n)
// space complexity: O(1)
// optimization
function findSecondLargest(arr) {
  const uniqueArr = [...new Set(arr)];
  uniqueArr.sort((a, b) => b - a);
  return uniqueArr[1];
}
console.log(findSecondLargest(arr2)); // 4
// time complexity: O(nlogn)
// space complexity: O(n)
// 4. Write a Program to find longest word in a given sentence ?
const str = "The quick brown fox jumps over the lazy dog";
function findLongestWord(str) {
  const words = str.split(" ");
  let longestWord = ""; // here we are using empty string for longest word and smallest word for word[0] comparison
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      // smallest word use < operator
      longestWord = words[i];
    }
  }
  return longestWord;
}
console.log(findLongestWord(str)); // jumps
// time complexity: O(n)
// space complexity: O(1)
// optimization
function findLongestWord(str) {
  const words = str.split(" ");
  const longestWord = words.reduce((a, b) => (a.length > b.length ? a : b));
  return longestWord;
}
console.log(findLongestWord(str)); // jumps
// find smallest word if the spaces are
const str1 = "The quick brown fox jumps over  the lazy dog";
function findSmallestWord(str) {
  const words = str.split(" ");
  let smallestWord = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i] !== "") {
      if (words[i].length < smallestWord.length) {
        smallestWord = words[i];
      }
    }
  }
  return smallestWord;
}
console.log(findSmallestWord(str1)); // The
// Write a JavaScript function to check if a given number is prime or not ?
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
// console.log(isPrime(7)); // true
// console.log(isPrime(2)); // true
console.log(isPrime(10)); // false
// time complexity: O(sqrt(n))
// space complexity: O(1)

// Write a function sumOfThirds(arr), which takes an array arr as an argument. This function should return a sum of every third number in the array, starting from the first one.

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function sumOfThirds1(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 3) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumOfThirds1(arr3)); // 15
// time complexity: O(n)
// space complexity: O(1)
// optimization
function sumOfThirds2(arr) {
  return arr.reduce((acc, curr, index) => {
    if (index % 3 === 0) {
      acc += curr;
    }
    return acc;
  }, 0);
}
console.log(sumOfThirds2(arr3)); // 15

// write a function to find the sum of upto every third index in an array
// ex ample: [1, 2, 3, 4, 5, 6, 7, 8, 9] => [6,15,24] first 3 elements sum, next 3 elements sum, next 3 elements sum
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function sumOfThirds(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i += 3) {
    let sum = 0;
    for (let j = i; j < i + 3 && j < arr.length; j++) {
      sum += arr[j];
    }
    result.push(sum);
  }
  return result;
}
console.log(sumOfThirds(arr4)); // [6, 15, 24]
// optimization
function sumOfThirdsOptimization(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i += 3) {
    result.push(arr.slice(i, i + 3).reduce((a, b) => a + b, 0));
  }
  return result;
}
console.log(sumOfThirdsOptimization(arr4)); // [6, 15, 24]

// write a function to find the febonacci series upto n
function fibonacci(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  }
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
//  Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31] ?
const arr5 = [0, 3, 4, 31];
const arr6 = [4, 6, 30];
function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }
  return mergedArray;
}
console.log(mergeSortedArrays(arr5, arr6)); // [0, 3, 4, 4, 6, 30, 31]
// time complexity: O(n + m)
// space complexity: O(n + m)
// optimization
function mergeSortedArraysOptimization(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}
console.log(mergeSortedArraysOptimization(arr5, arr6)); // [0, 3, 4, 4, 6, 30, 31]
// time complexity: O(nlogn)
// space complexity: O(n + m)

// Create a function which will accepts two arrays arr1 and arr2. The function should return true if every value in arr1 has its corresponding value squared in array2. The frequency of  values must be same.
// Example: [1,2,3,4] and [1,4,9,16] => true
// Example: [1,2,3,4] and [1,4,9,15] => false
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
console.log(same([1, 2, 3, 4], [1, 4, 9, 16])); // true
console.log(same([1, 2, 3, 4], [1, 4, 9, 15])); // false
// time complexity: O(n)
// space complexity: O(n)
// optimization
function sameOptimization(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const frequencyCounter1 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    if (!(Math.sqrt(val) in frequencyCounter1)) {
      return false;
    }
    frequencyCounter1[Math.sqrt(val)]--;
    if (frequencyCounter1[Math.sqrt(val)] < 0) {
      return false;
    }
  }
  return true;
}
console.log(sameOptimization([1, 2, 3, 4], [1, 4, 9, 16])); // true
console.log(sameOptimization([1, 2, 3, 4], [1, 4, 9, 15])); // false
// time complexity: O(n)
// space complexity: O(n)
