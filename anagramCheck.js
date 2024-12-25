function anagramCheck(string1, string2) {
  let a1 = string1.toLowerCase().split("").sort().join("");
  let b1 = string2.toLowerCase().split("").sort().join("");
  return a1 === b1;
}
// The code first converts both input strings to lowercase, then splits them into arrays of characters,
// sorts the arrays, and finally joins them back together.
// The sorting step has a time complexity of O(n log n) where n is the length of the input strings

console.log(anagramCheck("silenT", "listen"));

function optimizedAnagram(s, t) {
  if (s.length !== t.length) return false;
  let counter = {};
  for (let i = 0; i < s.length; i++) {
    counter[s[i]] = (counter[s[i]] || 0) + 1;
    counter[t[i]] = (counter[t[i]] || 0) - 1;
  }
  for (let key in counter) {
    if (counter[key] !== 0) return false;
  }
  return true;
}
console.log(optimizedAnagram("silent", "listen"));
