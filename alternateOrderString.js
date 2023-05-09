let str1 = "abc";
let str2 = "pqrsd";

// use case
// let str1='abcsd'
// let str2='pqr'

function merge(s1, s2) {
  let newArray = [];
  let s1L = s1.length;
  let s2L = s2.length;
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s1.length; j++) {
      if (i == j) {
        newArray.push(s1[i], s2[j]);
      }
    }
  }
  if (s1.length > s2.length) {
    newArray.push(s1.slice(-(s1.length - s2.length)));
  }
  if (s2.length > s1.length) {
    newArray.push(s2.slice(-(s2.length - s1.length)));
  }
  return newArray.join("");
}

console.log(merge(str1, str2));

var mergeAlternately = function (word1, word2) {
  let i = 0,
    j = 0;
  let str = "";
  while (i < word1.length && j < word2.length) {
    str += str.length % 2 == 0 ? word1[i++] : word2[j++];
  }

  while (i < word1.length) {
    str += word1[i++];
  }

  while (j < word2.length) {
    str += word2[j++];
  }

  return str;
};
console.log(mergeAlternately(str1, str2));

//using one loop
function stringAlternative(word1, word2) {
  let maxLength = Math.max(word1.length, word2.length);
  let str = "";
  for (let i = 0; i < maxLength; i++) {
    str += (word1[i] || "") + (word2[i] || "");
  }
  return str;
}

console.log(stringAlternative(str1, str2));
