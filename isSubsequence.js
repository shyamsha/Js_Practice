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
  return i === s.length;
};

function isSubsequence1(s, t) {
  let i = 0;
  for (let j = 0; j < t.length; j++) {
    if (s[i] === t[j]) {
      i++;
    }
  }
  return i === s.length;
}
let s1 = "ab",
  t1 = "baab";

console.log(isSubsequence1(s1, t1));
console.log(isSubsequence(s, t));
