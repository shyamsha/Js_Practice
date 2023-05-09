function filterValues(array) {
  let b = array.filter(function (fl) {
    if (fl) {
      return array;
    }
  });
  return b;
}

//modifying original array and with out using filter

function fns(n) {
  return n >= 10;
}

var filter = function (arr, fn) {
  let size = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (fn(arr[i])) {
      arr[size] = arr[i];
      size++;
    }
  }
  // Ensure array is of length size
  while (arr.length > size) {
    arr.pop();
  }
  return arr;
};

console.log(filter([0, 1, 10, 20], fns));
