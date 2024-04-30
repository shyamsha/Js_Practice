const { log } = require("console");

function firstNonRepeatChar(str) {
  //* if space is present, remove it
  let char;
  str = str.split(" ").join("");
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      char = str[i];
      break;
    }
  }
  return char;
}

log(firstNonRepeatChar("the quick brown fox jumps then quickly blow air"));
log(firstNonRepeatChar("HI HILARY"));

//another way
function firstNonRepeatChar1(str) {
  str = str.split(" ").join("");
  let len = str.length,
    char,
    charCount = {};
  for (let i = 0; i < len; i++) {
    char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else charCount[char] = 1;
  }
  for (let j in charCount) {
    if (charCount[j] == 1) return j;
  }
}

log(firstNonRepeatChar1("the quick brown fox jumps then quickly blow air"));
log(firstNonRepeatChar1("HI HILARY"));
