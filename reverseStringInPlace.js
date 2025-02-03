function reverseInPlace(str) {
  return str.split(" ").reverse().join(" ").split("").reverse().join("");
}
function reverseInPlace1(str) {
  return str
    .split(" ")
    .map((val) => val.split("").reverse().join(""))
    .join(" ");
}

// console.log(reverseInPlace1("I am the good boy"));

// console.log("I am the good boy".split("").reverse().join(""));

const str = "JavaScript is awesome";
let reversedString = "";
for (let i = 0; i < str.length; i++) {
  reversedString = str[i] + reversedString;
}

// console.log(reversedString); // "emosewa si tpircSavaJ"

function reverseStringWithRecursion(str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringWithRecursion(str.substr(1)) + str[0];
  }
}
// console.log(reverseStringWithRecursion("JavaScript is awesome"));

// Input: s = "the sky is blue"
// Output: "blue is sky the"

// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string

let reverseWordsInPlace = function (s) {
  // with out taking extra space
  // s = s.split(" ").filter((val) => val !== "");
  // let res = "";
  // let j = s.length - 1;
  // for (let i = 0; i < s.length; i++) {
  //   let temp = s[i];
  //   res += s[j] + " ";
  //   s[j] = temp;

  //   j--;
  // }
  // return res.trim();
  return s.trim().split(/\s+/).reverse().join(" ");
};
let s = " a good   example";

console.log(reverseWordsInPlace(s)); // Output: "example good a"
