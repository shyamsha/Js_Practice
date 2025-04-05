// order the sting according to indexes

function shuffleString(str, indexes) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    result[indexes[i]] = str[i];
  }
  return result.join("");
}

let s = "codeleet",
  indices = [4, 5, 6, 7, 0, 2, 1, 3];

console.log(shuffleString(s, indices)); // "leetcode"
