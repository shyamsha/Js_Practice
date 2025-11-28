// longest length of palindrome

function longestPalindrome(str) {
  let longest = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let substring = str.substring(i, j);
      if (isPalindrome(substring) && substring.length > longest.length) {
        longest = substring;
      }
    }
  }
  return longest;
}

function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (element !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(longestPalindrome("babad")); // Output: "bab" or "aba"

// optimized version

function expandAroundCenter(str, left, right) {
  while (left >= 0 && right < str.length && str[left] === str[right]) {
    left--;
    right++;
  }
  return str.substring(left + 1, right);
}

function longestPalindromeOptimized(str) {
  let longest = "";
  for (let i = 0; i < str.length; i++) {
    let oddPalindrome = expandAroundCenter(str, i, i);
    let evenPalindrome = expandAroundCenter(str, i, i + 1);
    if (oddPalindrome.length > longest.length) {
      longest = oddPalindrome;
    }
    if (evenPalindrome.length > longest.length) {
      longest = evenPalindrome;
    }
  }
  return longest;
}

console.log(longestPalindromeOptimized("cbbd")); // Output: "bb"
