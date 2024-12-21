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
console.log(reverseStringWithRecursion("JavaScript is awesome"));
