const { log } = require("console");

function firstNonRepeatChar(str) {
  let char;
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      char = str[i];
      break;
    }
  }
  return char;
}

log(firstNonRepeatChar("the quick brown fox jumps then quickly blow air"));

//another way
function firstNonRepeatChar(str) {
  var len = str.length,
    char,
    charCount = {};
  for (var i = 0; i < len; i++) {
    char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else charCount[char] = 1;
  }
  for (var j in charCount) {
    if (charCount[j] == 1) return j;
  }
}

log(firstNonRepeatChar("the quick brown fox jumps then quickly blow air"));
