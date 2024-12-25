// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Input: s = "()"
// Output: true

// Input: s = "()[]{}"
// Output: true

// Input: s = "(]"
// Output: false

function isValid(s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{") {
      arr.push("}");
    } else if (s[i] === "[") {
      arr.push("]");
    } else if (s[i] === "(") {
      arr.push(")");
    } else if (arr.pop() !== s[i]) {
      return false;
    }
  }
  console.log(arr);
  return !arr.length;
}

let str = "[[]]";
console.log(isValid(str));

var isValid1 = function (s) {
  let set = new Set();
  if (s.length % 2 != 0) return false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{" || s[i] === "[" || s[i] === "(") {
      set.add(s[i]);
    } else if (s[i] === ")" && set.size !== 0 && set.has("(")) {
      set.delete("(");
    } else if (s[i] === "}" && set.size !== 0 && set.has("{")) {
      set.delete("{");
    } else if (s[i] === "]" && set.size !== 0 && set.has("[")) {
      set.delete("[");
    }
  }
  return set.size === 0;
};

let s = "{([)}";
// sconsole.log(isValid1(s));
