const { log } = require("console");

// const arr = [1, 3, 4, 3, 4, 5, 5, 2, 3, 6, 7, 8, 2];
const arr = ["a", "a", "c", "d", "c", "c", "c", "a", "a", "c", "d"];

let mostRepeat = function (array) {
  let obj = {};
  let maxEl = array[0],
    maxCount = 1;
  for (let i = 0; i < array.length; i++) {
    let el = array[i];
    if (!obj[el]) obj[el] = 1;
    else obj[el]++;
    if (obj[el] > maxCount) {
      maxEl = el;
      maxCount = obj[el];
    }
  }
  return { maxEl, maxCount };
};

log(mostRepeat(arr));

function mostRepeat1(arr) {
  return arr
    .sort(
      (a, b) =>
        arr.filter((v) => v === a).length - arr.filter((v) => v === b).length
    )
    .pop();
}

log(mostRepeat1(arr));

let majorityElement = function (arr) {
  let element = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      element = arr[i];
    }
    if (arr[i] === element) {
      count++;
    } else {
      count--;
    }
  }
  return element;
};
let nums = [2, 2, 3, 2, 2, 3, 3, 3];
console.log(majorityElement(nums));
