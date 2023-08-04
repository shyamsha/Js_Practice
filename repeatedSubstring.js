// Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

// Example 1:

// Input: s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.

//some edge cases fail on leet code
var repeatedSubstringPattern = function (s) {
  let sub = "";
  let s2 = "";
  for (let i = 0; i < s.length; i++) {
    if (!sub.includes(s[i])) {
      sub += s[i];
    } else {
      s2 += s[i];
    }
    log(sub, s2);
    if (sub.length === s2.length && sub === s2) return true;
  }

  return false;
};

let s = "ababba";
let t = "abcabcabcabc";
console.log(repeatedSubstringPattern(s));

// some edge cases fail on leet code
var repeatedSubstringPattern1 = function (s) {
  let sb = "";
  let len = s.length;
  for (i = len / 2; i >= 1; i--) {
    if (len % i === 0) {
      let repeats = len / i;
      let subString = s.substring(0, i);
      for (let j = 0; j < repeats; j++) {
        sb += subString;
      }
      if (sb === s) return true;
    }
  }
  return false;
};

function subString() {
  let combinedString = s + s;
  if (combinedString.substring(1, combinedString.length - 1).includes(s))
    return true;
  return false;
}
