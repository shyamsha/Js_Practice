// Find Smallest Letter Greater Than Target
// Input: letters = ["c","f","j"], target = "a"
// Output: "c"
// Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'

let letters = ["x", "x", "y", "y"];
let target = "x";

let nextGreatestLetter = function (letters, target) {
  let set = new Set(letters);
  for (let c of set) {
    if (c > target) return c;
  }
  return letters[0];
};

console.log(nextGreatestLetter(letters, target));

var nextGreatestLetter1 = function (letters, target) {
  if (!letters.includes(target)) {
    letters.push(target);
  }
  let result = "";
  for (let i = 0; i < letters.sort().length; i++) {
    if (letters[i] === target) {
      result = letters[i + 1];
    }
  }
  return result || letters[0];
};
