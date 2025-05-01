// group by any array like lodash groupBy

// function groupBy(fn) {
//   return function (arr) {
//     return arr.reduce((acc, curr) => {
//       const key = fn(curr);
//       if (!acc[key]) {
//         acc[key] = [];
//       }
//       acc[key].push(curr);
//       return acc;
//     }, {});
//   };
// }
Array.prototype.groupBy = function (fn) {
  return this.reduce((acc, item) => {
    const key = fn(item);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});
};

const array1 = [{ id: "1" }, { id: "1" }, { id: "2" }];
const fn1 = function (item) {
  return item.id;
};

console.log(array1.groupBy(fn1));
// { '1': [ { id: '1' }, { id: '1' } ], '2': [ { id: '2' } ] }

function groupBy1(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    for (const key in ele) {
      let k = ele[key];
      if (!obj[k]) {
        obj[k] = [];
      }
      obj[k].push(ele);
    }
  }
  return obj;
}
const arr = [{ id: "1" }, { id: "1" }, { id: "2" }];
console.log(groupBy1(arr));

function groupBy2(arr, key) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    const k = ele[key];
    if (!obj[k]) {
      obj[k] = [];
    }
    obj[k].push(ele);
  }
  return obj;
}
const arr2 = [
  { id: 1, category: "ele" },
  { id: 2, category: "clo" },
  { id: 3, category: "ele" },
];
console.log(groupBy2(arr2, "category"));
