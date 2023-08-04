var findTheDifference = function (s, t) {
  s = [...s].sort();
  t = [...t].sort();
  for (let i = 0; i < t.length; i++) {
    if (s[i] !== t[i]) {
      return t[i];
    }
  }
};

let s = "ymr";
let t = "ymrj";
console.log(findTheDifference(s, t));
