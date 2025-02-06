// Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and
// is fully (left and right) justified.
// Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
// Output:
// [
//    "This    is    an",
//    "example  of text",
//    "justification.  "
// ]

const fullJustify = (words, maxWidth) => {
  let res = [];
  let line = [];
  let lineLength = 0;
  for (let i = 0; i < words.length; i++) {
    if (lineLength + words[i].length + line.length <= maxWidth) {
      line.push(words[i]);
      lineLength += words[i].length;
    } else {
      let diff = maxWidth - lineLength;
      let spaces = line.length - 1;
      let newLine = "";
      if (spaces === 0) {
        newLine = line[0] + " ".repeat(diff);
      } else {
        let space = Math.floor(diff / spaces);
        let extra = diff % spaces;
        for (let j = 0; j < line.length; j++) {
          newLine += line[j];
          if (j < spaces) {
            newLine += " ".repeat(space + (j < extra ? 1 : 0));
          }
        }
      }
      res.push(newLine);
      line = [words[i]];
      lineLength = words[i].length;
    }
  }
  res.push(
    line.join(" ") + " ".repeat(maxWidth - lineLength - line.length + 1)
  );
  return res;
};
let words = ["This", "is", "an", "example", "of", "text", "justification."];
let maxWidth = 16;
console.log(fullJustify(words, maxWidth));
