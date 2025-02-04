// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
var strStr = function (haystack, needle) {
  // let j = 0;
  // for (let i = 0; i < haystack.length; i++) {
  //   if (haystack[i] === needle[j]) {
  //     j++;
  //     if (j === needle.length) {
  //       return i - (j - 1);
  //     }
  //   } else {
  //     i = i - j;
  //     j = 0;
  //   }
  // }
  // return -1;
  if (needle.length === 0) return 0;
  if (haystack.length === 0) return -1;
  let res = haystack.includes(needle);
  if (res) {
    return haystack.indexOf(needle);
  } else {
    return -1;
  }
};

let s1 = "mississippi";
let s2 = "issip";
console.log(strStr(s1, s2));
