// find char in string

const { forEach } = require("lodash");

function stringIncludes(string, character) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === character) {
      return true;
    }
  }
  return false;
}

// console.log(stringIncludes("skajfklsd", "f"));
// console.log("skajfklsd".includes("f"));

// count how many stings in string
function countString(string1, string2) {
  let count = 0;
  for (let i = 0; i < string1.length; i++) {
    for (let j = 0; j < string2.length; j++) {
      if (string1[i + j] !== string2[j]) break;
      if (j === string2.length - 1) count++;
    }
  }
  return count;
}
console.log(countString("hello hello", "lo")); //  time complexity o(n^2)

// optimized version
function countStringOptimized(string1, string2) {
  let count = 0;
  for (let i = 0; i < string1.length; i++) {
    if (string1[i] === string2[0]) {
      let match = true;
      for (let j = 1; j < string2.length; j++) {
        if (string1[i + j] !== string2[j]) {
          match = false;
          break;
        }
      }
      if (match) count++;
    }
  }
  return count;
}
