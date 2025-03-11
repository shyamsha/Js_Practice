// console.log(isPalindrome("A man, a plan, a canal: Panama"));
function isPalindrome(str) {
  // let len = str.length;
  // for (let i = 0; i < len / 2; i++) {
  //   if (str[i] !== str[len - 1 - i]) return false;
  // }
  // return true;
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (element !== str[str.length - 1 - i]) {
      return false;
    }
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

// console.log(PalindromeWithRecursion(12321));
// console.log(PalindromeWithRecursion(10));
var isPalindrome = function (x) {
  let xCopy = x;
  let output = 0;
  while (xCopy > 0) {
    output = output * 10 + (xCopy % 10);
    xCopy = Math.floor(xCopy / 10);
  }

  return output === x;
};

var isPalindrome12 = function (x) {
  let str = x + "";
  let j = str.length - 1;
  for (let i = 0; i < str.length; i++) {
    console.log(str[i], str[j]);
    if (str[i] === str[j]) {
      j--;
    }
  }
  console.log(j);
  return j < 0;
};

console.log(isPalindrome(121));
