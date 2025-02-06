// create function to spilt into single bunches
// 1. The input array will never be
// empty.
// 2. Objects will always have a name
// and quantity over 0.
// 3. The returned object should have
// each fruit in the same order as the
// original.

const splitBunches = (arr) => {
  // let spilt = [];
  // let count = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   const element = arr[i];
  //   if (element.quantity === 1) {
  //     spilt.push(arr[i]);
  //   }
  //   while (element.quantity > 1 && element.quantity > count) {
  //     if (count < element.quantity) {
  //       let obj = { name: element.name, quantity: 1 };
  //       spilt.push(obj);
  //       count++;
  //     }
  //   }
  //   if (count >= element.quantity) {
  //     count = 0;
  //   }
  // }
  // return spilt;
  let newArr = [];
  arr.forEach((element) => {
    for (let j = 0; j < element.quantity; j++) {
      newArr.push({ name: element.name, quantity: 1 });
    }
  });
  return newArr;
};
let arr = [
  { name: "Currants", quantity: 1 },
  { name: "Grapes", quantity: 2 },
  { name: "Bananas", quantity: 2 },
];
// output: [
//   { name: 'Currants', quantity: 1 },
//   { name: 'Grapes', quantity: 1 },
//   { name: 'Grapes', quantity: 1 },
//   { name: 'Bananas', quantity: 1 },
//   { name: 'Bananas', quantity: 1 }
// ]
console.log(splitBunches(arr));
