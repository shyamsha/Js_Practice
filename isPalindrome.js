function isPalindrome(str) {
  var i,
    len = str.length;
  for (i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) return false;
  }
  return true;
}

function checkPalindrome1(str) {
  return str == str.split("").reverse().join("");
}

console.log(isPalindrome("madam"));
console.log(isPalindrome1("madam"));
