// palindrome check

// use cases

const isPalindrome = require("./ttd");

test("// abc -> false", () => {
  const result = isPalindrome("abc");
  expect(result).toBe(false);
});
