//increment array to number

var incrementArray = function (digits) {
  let r = BigInt(digits.join("")) + BigInt(1);
  return r.toString().split("");
};

let s = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
let s1 = [9, 9];
console.log(incrementArray(s));
