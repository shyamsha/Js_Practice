//s='abc' t= 'ahbgdc' s string includes in t string with respective order

let s = "axc";
let t = "ahbgdc";

let isSubsequence = function (s, t) {
  let i = 0,
    j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }
  if (i === s.length) {
    return true;
  }
  return false;
};
console.log(isSubsequence(s, t));
