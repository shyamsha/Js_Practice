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
