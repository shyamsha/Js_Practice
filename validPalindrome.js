// Given a string, check if the string can become palindrome by removing at-most one character from the string.
// The order of the characters in the string should remain same.

// "abca"
// "abc"
// "ymdadmt"

// Output:
true; // removing 'c' will make the string palindrome "aba"
false;
false;

const solution = (s) => {
  const arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    if (isPalindrome(arr, i)) {
      return true;
    }
  }
  return false;
};

const isPalindrome = (arr, index) => {
  // remove the character from the array
  const filtered = arr.filter((_, i) => i !== index);
  const n = filtered.length;

  //check if filtered array is palindrome
  for (let i = 0; i < n; i++) {
    if (filtered[i] !== filtered[n - i - 1]) {
      return false;
    }
  }

  return true;
};
const str = "abca";
console.log(solution(str)); // true

// optimized solution
const solution1 = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
      );
    }
    left++;
    right--;
  }

  return true;
};
function isPalindrome1(s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
// time complexity: O(n)
// space complexity: O(1)

// remove the i'th character from the string
const cut = (s, i) => s.substr(0, i) + s.substr(i + 1);

const validPalindrome = (s, n = s.length) => {
  const reversed = s.split("").reverse().join("");

  //base case
  if (reversed === s) {
    return true;
  }
  for (let i = 0; i < n; i++) {
    const start = i;
    const end = n - i - 1;

    //get the updated string by removing the characters
    const nTransformed = cut(s, start);
    const rTransformed = cut(reversed, end);

    if (nTransformed === rTransformed) {
      return true;
    }
  }
  return false;
};
