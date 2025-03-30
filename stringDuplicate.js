let a = "madam";
function removeDuplicates(s) {
  let str = "";
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = true;
      str += s[i];
    }
  }
  return str;
}
console.log(removeDuplicates(a));

function removeDuplicates2(s) {
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (str.includes(s[i])) {
      continue;
    }
    str += s[i];
  }
  return str;
}

let x =
  "Int32,Int32,Int32,Int32,Int32,Int32,Int32,Int32,Int32,Double,Double,Double";
const result = Array.from(new Set(x)).join("");

console.log(result);
