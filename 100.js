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
  // another solution
  // return arr.reduce((acc, cur) => {
  //  return cur> acc ? (acc = cur) : acc;
  // });
  // another solution
  let max = a[0];
  a.forEach((c) => (c > max ? (max = c) : max));
  return max;
}
// console.log(findMax([1, 2, 5, 6]));

// 8.factorial
function factorial(num) {
  return num === 1 ? num : num * factorial(num - 1);
}
// console.log(factorial(5));

// 9.calculates average
function average(arr) {
  let sum = arr.reduce((acc, cur) => acc + cur);
  return sum / arr.length;
}
// console.log(average([1, 2, 3, 4, 5]));

// 10.check Arrays are equal both with indexes
function equal(arr1, arr2) {
  let count = 0;
  // check condition for both array lengths equal or not
  // for (let i = 0; i < arr1.length; i++) {
  //   if (arr1.indexOf(arr1[i]) === arr2.indexOf(arr1[i])) {
  //     count++;
  //   }
  // }
  // return count === arr1.length;
  return arr1.every((cur, index) => cur === arr2[index]);
}
// console.log(equal([1, 2, 3], [1, 2, 3]));
// console.log(equal([1, 2, 3], [1, 3, 2]));
// console.log(equal([], []));

// 11. sum of digits in number with out using Number conversion
function sumOfDigits(num) {
  return Array.from(String(num), Number).reduce((acc, cur) => acc + cur);
}
// console.log(sumOfDigits(12345));

// 12. remove duplicates
function duplicates(arr) {
  // return arr.filter(
  //   (current) => arr.lastIndexOf(current) === arr.indexOf(current)
  // );
  // using Set
  // return [...new Set(arr)];
  return arr.filter((value, index, self) => self.indexOf(value) === index);
}
// console.log(duplicates([1, 2, 2, 3, 4, 5]));

// 13.count vowels
function countVowels(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  // for (let c of str.toLowerCase()) {
  //   if (vowels.indexOf(c) >= 0) {
  //     count++;
  //   }
  // }
  // return count;
  return str
    .toLowerCase()
    .split("")
    .reduce((acc, currVal) => {
      vowels.includes(currVal) ? acc++ : acc;

      return acc;
    }, 0);
}
// console.log(countVowels("hello word"));

// 14. power of 2 or not
function isPower(n) {
  let x = 1;
  while (x < n) {
    x = x * 2;
  }
  return x === n;
}
// console.log(isPower(16));

// 15. sum of squares
function sumOfSquares(arr) {
  return arr.reduce((acc, cur) => (acc += cur * cur), 0);
}
// console.log(sumOfSquares([1, 2, 3]));

// 16. minimum value in array
function findMin(arr) {
  return Math.min(...arr);
}
// console.log(findMin([1, 2, 3]));

// 17. string to camel case
function toCamelCase(str) {
  return str
    .trim()
    .split(" ")
    .map((current, index) => {
      if (index === 0) {
        return current.toLowerCase();
      } else {
        return current.charAt(0).toUpperCase() + current.slice(1);
      }
    })
    .join("");
}
// console.log(toCamelCase(" my name is salma"));

// 18. check char is upper case
function isUpperCase(char) {
  // const charCode = char.charCodeAt(0);
  // return charCode >= 65 && charCode <= 90;
  // another solution
  return char === char.toUpperCase();
}
// console.log(isUpperCase("a"));

// 19. start with specific string
function startWith(str1, str2) {
  // return str1.trim().split(" ")[0] === str2;
  return str1.startsWith(str2);
}
// console.log(startWith(" hello", "hello"));
// 20. reverse String
function reverse(str) {
  return [...str].reverse().join("");
}
// console.log(reverse("hello"));
// 21.find frequent value in array
function findMode(arr) {
  let obj = {};
  let max = 0;
  let maxEle;
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    if (obj[arr[i]] > max) {
      max = obj[arr[i]];
      maxEle = arr[i];
    }
  }
  return { [maxEle]: max };
}
// console.log(findMode([1,2,5,2,6,8,5,2]));
// 22. fibonacci sequence
function fibonacci(num) {
  if (num < 2) {
    return num;
  }
  return fibonacci(num - 2) + fibonacci(num - 1);
}
for (let i = 0; i <= 5; i++) {
  // console.log(fibonacci(i));
}
// 23. truncate string
function truncate(str, length) {
  return str.length > length ? `${str.slice(0, length)}...` : str;
}
// console.log(truncate("1111111111111111111", 5));
// 24.recursive way fill array with range
function numRange(n1, n2, arr = []) {
  if (n1 <= n2) {
    arr.push(n1);
    return numRange(n1 + 1, n2, arr); // if you give n++ it will throw RangeError: Maximum call stack size exceeded
  }
  return arr;
}
console.log(numRange(3, 8));
