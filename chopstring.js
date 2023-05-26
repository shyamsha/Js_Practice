function cutString(str, num = str.length) {
  const el = [];
  for (let i = 0; i < str.length; i = i + num) {
    el.push(str.slice(i, i + num));
  }
  return el;
}

console.log(cutString("javascript", 4));

function arrayChop(str, size = str.length) {
  const arr = [];
  let i = 0;
  while (i < str.length) {
    arr.push(str.slice(i, i + size));
    i = i + size;
  }
  return arr;
}

console.log(arrayChop([1], 1));

// using reduce
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
  return arr.reduce((chunkedArray, element) => {
    const lastChunk = chunkedArray[chunkedArray.length - 1];
    if (!lastChunk || lastChunk.length === size) {
      chunkedArray.push([element]);
    } else {
      lastChunk.push(element);
    }
    return chunkedArray;
  }, []);
};

function paginateArray(array, pageSize, pageNumber) {
  // Calculate the starting index of the current page
  const startIndex = (pageNumber - 1) * pageSize;

  // Create a chunk of the array based on the page size
  const chunkedArray = array.slice(startIndex, startIndex + pageSize);

  return chunkedArray;
}

// Example usage
const data = [
  "Racoon 1",
  "Racoon 2",
  "Racoon 3",
  "Racoon 4",
  "Racoon 5",
  "Racoon 6",
  "Racoon 7",
  "Racoon 8",
  "Racoon 9",
  "Racoon 10",
];

const pageSize = 3; // Number of items per page
const pageNumber = 3; // Current page number

const result = paginateArray(data, pageSize, pageNumber);
console.log(result);
