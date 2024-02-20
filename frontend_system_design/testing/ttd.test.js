// palindrome check

// use cases

const isPalindrome = require("./ttd");

test("abc --> false", () => {
  const result = isPalindrome("abc");
  expert(result).toBe(false);
});
