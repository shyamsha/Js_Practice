function reverseInPlace(str) {
  return str.split(" ").reverse().join(" ").split("").reverse().join("");
}

console.log(reverseInPlace("I am the good boy"));

// console.log("I am the good boy".split("").reverse().join(""));
