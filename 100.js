// 1. converted input string to hash using 31 as a prime number
// 2. used charCodeAt() to get the ASCII value of the character
const generateHash = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = hash * 31 + str.charCodeAt(i);
  }
  return hash;
};

// console.log(generateHash("hello world"));

// 2. convert capitalize the first letter of each word

function capitalize(str) {
  let word = str.split(" ");
  return word
    .map((currentEle) =>
      currentEle.replace(currentEle[0], currentEle[0].toUpperCase())
    )
    .join(" ");
}

// console.log(capitalize("hello world"));

// 3. write function that takes in a string and char and returns the number of chars count in the string for representing the char

function charCount(str, char) {
  // this solution calculates the number of times a character appears in a string for all chars
  // let obj = {};
  // for (let i = 0; i < str.length; i++) {
  //   if (obj[str[i]]) {
  //     obj[str[i]] += 1;
  //   } else {
  //     obj[str[i]] = 1;
  //   }
  // }
  // console.log(obj);

  // return obj[char];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}
// console.log(charCount("hello worLd", "o"));

// 4. write function that takes in a 3 sides triangle and returns if it is 3 sides equilateral, isosceles, or scalene

function checkTriangleType(a, b, c) {
  if (a === b && b === c) {
    return "equilateral";
  } else if (a === b || b === c || a === c) {
    return "isosceles";
  } else {
    return "scalene";
  }
}

// console.log(checkTriangleType(1, 2, 3));

// 5. write function that takes in a array of numbers and returns the sorted array asc.

function ascendingSort(arr) {
  let temp;
  let done = false;
  while (!done) {
    done = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        // if you want descending order, change > to <
        done = false; // it is indicating that the array is not sorted while loop will run again
        temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}

// console.log(ascendingSort([1, 2, 3, 7, 8, 9, 10, 4, 5, 6]));

// 6. write function that string is palindrome or not

function palindrome(str) {
  let reversed = str.split("").reverse().join(""); // we can do reverse string using for loop also

  return str === reversed;
}

// console.log(palindrome("hello"));

// 7. write function find max number in array

function findMax(arr) {
  // return Math.max(...arr);
  let max = arr[0];
  return arr.reduce((acc, cur) => {
    acc > cur ? (acc = cur) : cur;
  }, arr[0]);
}
console.log(findMax([1, 2, 5, 6]));
