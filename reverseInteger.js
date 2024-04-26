let a = -1213;

var reverse = function (x) {
  x = "" + x;
  let rev = "";
  for (let n = x.length - 1; n >= 0; n--) {
    rev += x[n];
  }
  if (x < 0) {
    if (parseInt(rev) * -1 <= -Infinity) return 0; // int 32 bit representing
    return parseInt(rev) * -1;
  }
  if (parseInt(rev) >= Infinity) return 0; // int 32 bit representing
  return parseInt(rev);
};
console.log(reverse(a));

let num = 3849;
function reversedNumber(num) {
  let reversedNum = 0;
  while (num !== 0) {
    reversedNum = reversedNum * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return reversedNum;
}

console.log(reversedNumber(a)); // 9483
