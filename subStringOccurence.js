// minimize length of string
// 1.divide two parts of string left and right
// 2.with out reverse swap them right+left
// 3.after remove suffix of right part character and prefix of left part character same
// string is "aabcccabba" after divide and append "cabbaaabcc" after
// you can remove repeating chars suffix and prefix string look like "cabbbcc" --> "cacc"
// there is no repeating elements in suffix and prefix so return string is "cacc".

function minimizeStr(str) {
  let left;
  let right;
  let newString;
  let prefix;
  let suffix;
  let length = str.toLowerCase().length / 2;
  if (str.length % 2 === 0) {
    left = str.substring(0, length);
    right = str.substring(length);
    newString = right + left;
    prefix = left[0];
    suffix = right[right.length - 1];
  } else {
    return "String is not even";
  }
  let arr = [];
  arr.push(right[right.length - 1]);

  return newString;
}
// cabba aabcc

console.log(minimizeStr("aabcccabba"));
