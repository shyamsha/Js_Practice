//compare two array are equal or not

let arr1 = [1, 2, 3];
let arr2 = [3, 1, 21];

function compare(a, b) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        count++;
      }
    }
  }
  return count === a.length;
}
console.log(compare(arr1, arr2));

let array1 = [11, 22, 33];
let array2 = [11, 22, 33];
let array3 = [33, 22, 1, 11];

console.log(JSON.stringify(array1) === JSON.stringify(array2));
console.log(array1.toString() === array2.toString());

// A function to compare if two arrays have the same elements regardless of their order
const ignoreOrderCompare = (a, b) => {
  if (a.length !== b.length) return false;
  const elements = new Set([...a, ...b]);
  for (const x of elements) {
    const count1 = a.filter((e) => e === x).length;
    const count2 = b.filter((e) => e === x).length;
    if (count1 !== count2) return false;
  }
  return true;
};

// Declaring arrays
const a = [1, 2, 3];
const b = [3, 1, 2];

// Comparing the arrays
if (ignoreOrderCompare(a, b)) console.log("The arrays have the same elements.");
else console.log("The arrays have different elements.");

const compareArrays = (a, b) =>
  a.length === b.length &&
  a.every((element, index) => {
    if (b.indexOf(element) > -1) {
      console.log(element, [b.indexOf(element)]);
      return (element = [b.indexOf(element)]);
    }
  });

console.log(compareArrays(array1, array2)); //false
console.log(compareArrays(array1, array3)); //true
