// polyfill for string.trim()

// Declare a whitespace array
const whitespace = [" ", "", "\t", "\n", "\u3000"];

const trim = (str) => {
  let stringBeg = 0,
    stringEnd = str.length;

  // Find the index from the beginning of the string
  // which is not a whitespace
  for (let i = 0; i < str.length; i++) {
    if (whitespace.indexOf(str[i]) === -1) {
      stringBeg = i;
      break;
    }
  }
  // Find the index from the end of the string
  // which is not a whitespace
  for (let j = str.length - 1; j >= 0; j--) {
    if (whitespace.indexOf(str[j]) === -1) {
      stringEnd = j;
      break;
    }
  }

  // Return the string between the 2 found indices
  return str.slice(stringBeg, stringEnd + 1);
};

let s = "   syam  kumar   ";
console.log(s);
console.log(trim(s));
