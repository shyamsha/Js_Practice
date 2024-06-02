// count sbstr
function countSubStr(string, substr) {
  var convertStr = string.toLowerCase().split(" ");
  var count = 0;
  for (var i = 0; i < convertStr.length; i++) {
    if (convertStr[i] === substr) {
      count += 1;
    }
  }
  return count;
}

console.log(countSubStr("I am good the good boy", "good"));

// count of characters between the first and last  specific one character

function countCharsInBetween(str, char) {
  str = str.toLowerCase();
  if (!str || !str.includes(char)) {
    return -1;
  }
  const firstIndex = str.indexOf(char);
  const lastIndex = str.lastIndexOf(char);
  return firstIndex === lastIndex ? -1 : lastIndex - (firstIndex + 1);
}

console.log(countCharsInBetween("XeroX", "x"));

// Write a function which returns a list of elements which contains at least one character as digit

function numInStr(mixArray) {
  return mixArray.filter((value) => {
    return /[0-9]/.test(value);
  });
}

numInStr(["1a", "a", "2b", "b"]); // ['1a', '2b']
numInStr(["abc", "abc10"]); // ['abc10']
numInStr(["abc", "ab10c", "a10bc", "bcd"]); // ['ab10c', 'a10bc']
numInStr(["this is a test", "test1"]); // ['test1']
