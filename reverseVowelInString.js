// JavaScript program to reverse order of vowels

// utility function to check for vowel
function isVowel(c) {
  return (
    c == "a" ||
    c == "A" ||
    c == "e" ||
    c == "E" ||
    c == "i" ||
    c == "I" ||
    c == "o" ||
    c == "O" ||
    c == "u" ||
    c == "U"
  );
}

// Function to reverse order of vowels
function reverseVowel(str) {
  // Start two indexes from two corners
  // and move toward each other
  let i = 0;
  let j = str.length - 1;
  let str1 = str.split("");
  while (i < j) {
    if (!isVowel(str1[i])) {
      i++;
      continue;
    }
    if (!isVowel(str1[j])) {
      j--;
      continue;
    }

    // swapping
    let t = str1[i];
    str1[i] = str1[j];
    str1[j] = t;

    i++;
    j--;
  }
  return str1.join("");
}

let str = "hello world";

let s = "leetcode";

//another way
var reverseVowels = function (str) {
  let s = str.split("");
  let str1 = "aeiou";
  let vowels = "";
  let j = 0;
  for (let i = 0; i <= s.length; i++) {
    if (str1.indexOf(s[i]) >= 0) {
      vowels += s[i];
      j++;
    }
  }
  for (let i = 0; i <= s.length; i++) {
    if (str1.indexOf(s[i]) >= 0) {
      s[i] = vowels[--j];
    }
  }
  return s.join("");
};
console.log(reverseVowel(str));
