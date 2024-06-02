// implement chunks of array

function chunks(arr, size) {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

// not optimized solution
function chunks1(arr, size) {
  let result = [];
  let minArr = [];
  for (let i = 0; i < arr.length; i++) {
    minArr.push(arr[i]);
    if (minArr.length === size || i === arr.length - 1) {
      result.push(minArr);
      minArr = []; // here we re-initializes array again and again that take lot of memory
    }
  }
  return result;
}

// optimized solution
function chunks2(arr, size) {
  let result = [];
  let minArr = [];
  for (let i = 0; i < arr.length; i++) {
    minArr.push(arr[i]);
    if (minArr.length === size || i === arr.length - 1) {
      result.push([...minArr]);
      minArr.length = 0;
    }
  }
  return result;
}

console.log(chunks1([1, 2, 3, 4, 5], 4));
