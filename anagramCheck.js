function anagramCheck(string1, string2) {
  let a1 = string1.toLowerCase().split("").sort().join("");
  let b1 = string2.toLowerCase().split("").sort().join("");
  console.log(a1, b1);
  if (a1 === b1) {
    return true;
  } else {
    return false;
  }
}
// The code first converts both input strings to lowercase, then splits them into arrays of characters,
// sorts the arrays, and finally joins them back together.
// The sorting step has a time complexity of O(n log n) where n is the length of the input strings

anagramCheck("silenT", "listen");
