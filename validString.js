// Given a string of lowercase alphabets, find if it can be converted to a Valid String by removing 1 or 0 characters.
// A “valid” string is string such that for all distinct characters in string each such character occurs the same number of times in it.

// Testcase 1: string str1 = "abbca"
// Testcase 2: string str2 = “aabbbcc”
//every character repeat exact same number 'abc' same number of times repeating
// 'aabbm' here one a and b exact same number of times repeating but m not so this is not valid string
let str1 = "abcc";
let str2 = "aabbcc";

function validString(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }
  let set = new Set(Object.values(obj));
  log(set);
  return set.size === 1;
}

console.log(validString(str1));

// if array of all same values
function allEqual(arr) {
  let set = new Set(arr);
  log(set);
  return set.size === 1;
}

// log(allEqual(['a', 'a', 'a', 'a'])); // true
