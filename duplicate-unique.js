arr = [1, 2, 3, 4, 4, 6, 6, 45, 25];
arr1 = [];
for (let i = 0; i < arr.length; i++) {
  if (!arr1.includes(arr[i])) {
    arr1.push(arr[i]);
  } else {
    console.log(arr[i]);
  }
}
console.log(arr1);

function removeDuplicate(arr) {
  var exists = {},
    outArr = [],
    elm;

  for (var i = 0; i < arr.length; i++) {
    elm = arr[i];
    if (!exists[elm]) {
      outArr.push(elm);
      exists[elm] = true;
    }
  }
  return outArr;
}

console.log(removeDuplicate([1, 3, 3, 3, 1, 5, 6, 7, 8, 1]));
