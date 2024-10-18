let str1 = "abc";
let str2 = "pqrsd";

// use case
// let str1='abcsd'
// let str2='pqr'

function stringAlternative(word1, word2) {
  let maxLength = Math.max(word1.length, word2.length);
  let str = "";
  for (let i = 0; i < maxLength; i++) {
    str += (word1[i] || "") + (word2[i] || "");
  }
  return str;
}

console.log(stringAlternative(str1, str2));
