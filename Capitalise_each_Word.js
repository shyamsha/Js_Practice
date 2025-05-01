function capitalizeWords(string) {
  var capitalize = [];
  var saperate = string.split(" ");
  if (string === "") {
    return "empty string";
  } else {
    for (var i = 0; i < saperate.length; i++) {
      capitalize.push(
        saperate[i].charAt(0).toUpperCase() + saperate[i].slice(1)
      );
    }
  }
  let captial = capitalize.join(" ");
  return captial;
}

const capital = function (str) {
  const newStr = str.split(" ");
  for (let i = 0; i < newStr.length; i++) {
    newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1);
  }
  return newStr.join(" ");
};

// console.log(capital("Use the defined types in your main component"));

function capitalizeWords1(sentence) {
  return sentence
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

console.log(capitalizeWords1("hello world")); // "Hello World"
console.log(capitalizeWords1(" hello world! ")); // "Hello World!"
console.log(capitalizeWords1("hello   worLD!")); // "Hello World!"
