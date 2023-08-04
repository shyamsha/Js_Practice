//
var strStr = function (haystack, needle) {
  let j = 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[j]) {
      j++;
      if (j === needle.length) {
        return i - (j - 1);
      }
    } else {
      i = i - j;
      j = 0;
    }
  }
  return -1;
};

let s1 = "mississippi";
let s2 = "issip";
console.log(strStr(s1, s2));
