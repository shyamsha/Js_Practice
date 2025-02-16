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
