function stringChop(string, number) {
  let lengthOfChopped = [];
  let str = number;
  for (let i = 0; i < string.length; i++) {
    lengthOfChopped.push(string.slice(i, number));
    i = number;
    i--;
    number += str;
  }
  return lengthOfChopped;
}

console.log(stringChop("ibpbhixfiouhdljnjfflpapptrxgcomvnb", 33));

function stringChop1(str, size = str.length) {
  const arr = [];
  let i = 0;
  while (i < str.length) {
    arr.push(str.slice(i, i + size));
    i += size;
  }
  return arr;
}
console.log(stringChop1("java", 2));
