// longest common prefix in string array

function commonPrefix(strs) {
  if (strs.length === 0) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }
  return prefix;
}

const longestCommonPrefix = function (strs) {
  let res = "";
  let words = strs.sort();
  let firstWord = words[0];
  let lastWord = words[words.length - 1];
  for (let i = 0; i < firstWord.length; i++) {
    if (firstWord[i] !== lastWord[i]) {
      return res;
    }
    res += firstWord[i];
  }
  return res;
};

let strs = ["flower", "flow", "flight"];
let strs1 = ["aaa", "aa", "aaa"];
console.log(longestCommonPrefix(strs1));
// sorted array: ["aa", "aaa", "aaa"]
// firstWord: "aa"
// lastWord: "aaa"
// checking the first letter of firstWord and lastWord
// returns output: "aa"
