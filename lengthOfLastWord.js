// find length of last word in string

function length(s) {
  index = s.length - 1; // length of string
  output = 0;
  while (s[index] === " " && index >= 0) {
    // checking word space is there or not if not going next while
    index -= 1;
  }
  while (s[index] !== " " && index >= 0) {
    output += 1;
    index -= 1;
  }
  return output;
}

console.log(length("find last det "));