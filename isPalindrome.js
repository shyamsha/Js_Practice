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

// console.log(isPalindrome("madam"));
// console.log(checkPalindrome1("madam"));

function PalindromeWithRecursion(num) {
  num = "" + num;
  if (num.length <= 1) {
    return true;
  }
  if (num[0] !== num[num.length - 1]) {
    return false;
  }
  return PalindromeWithRecursion(num.substring(1, num.length - 1));
}

console.log(PalindromeWithRecursion(12321));
console.log(PalindromeWithRecursion(10));
