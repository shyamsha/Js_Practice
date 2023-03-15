const arr = [2, 2, 3, 4, 5, 5, 6, 6, 7, 2, 1];
// output shoud be [{value:2,count:3},{value:7,count:1}...]
const arr1 = [...new Set(arr)]; //The Set object lets you store unique values of any type
const c = [];

arr1.map((curr) => {
  let count = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (curr === arr[i]) {
      count += 1;
    }
  }
  c.push({ value: curr, count: count });
});

console.log(c);

// pair duplicates sub array

const d = [];

arr1.map((curr) => {
  let subArray = [];
  for (let i = 0; i <= arr.length; i++) {
    if (curr === arr[i]) {
      subArray.push(arr[i]);
    }
  }
  d.push(subArray); // [[2, 2, 2], [3], [4], [5, 5], [6, 6], [7], [1]]
});

console.log(d);
