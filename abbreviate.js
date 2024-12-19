let abbreviate = (str) => {
  let wordSplit = str.trim().split(" ");
  let code = "";
  for (let i = 0; i < wordSplit.length; i++) {
    if (wordSplit[i] === "") {
      wordSplit.pop(wordSplit[i]);
    } else {
      code += wordSplit[i][0].toUpperCase();
    }
  }
  return code;
};
// o(n) time complexity
console.log(abbreviate(" non residence indians "));
