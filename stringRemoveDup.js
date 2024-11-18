// remove duplicates in string
const { log } = require("console");

function removeDup(string) {
  let eachWord = string.split(" "); //splitting each word
  let uniqueArr = [];
  for (let i = 0; i < eachWord.length; i++) {
    for (let j = i + 1; j < eachWord.length; j++) {
      if (eachWord[i] == eachWord[j]) {
        if (uniqueArr.indexOf(eachWord[j]) < 0) {
          uniqueArr.push(eachWord[j]);
        }
      }
    }
  }
  let join = uniqueArr.join(" "); //join all words together
  return join;
}

log(removeDup("java script was nice java java"));

function removeDuplicateChar(str) {
  let char = "";
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      char += str[i];
    }
  }
  return char;
}

log(removeDuplicateChar("the quick brown fox jumps then quickly blow air"));

function removeDuplicateChar2(str) {
  var len = str.length,
    charCount = {};

  for (var i = 0; i < len; i++) {
    if (!charCount[str[i]]) {
      charCount[str[i]] = 1;
    }
  }
  return Object.keys(charCount).join("");
}

log(removeDuplicateChar2("Learn more javascript dude"));
