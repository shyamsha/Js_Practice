// You're given a string s and an array of strings words. Each string in words has the same length. You need to find all the starting indices of substrings in s that are concatenations of each word in words, exactly once, without any intervening characters.You're given a string s and an array of strings words. Each string in words has the same length. You need to find all the starting indices of substrings in s that are concatenations of each word in words, exactly once, without any intervening characters.

let s = "barfoothefoobarman";
let words = ["foo", "bar"];

function findSubstrings(s, words) {
  let wordLength = words[0].length;
  let wordCount = words.length;
  let totalLength = wordLength * wordCount;
  let result = [];
  let wordMap = {};
  for (let word of words) {
    if (wordMap[word]) {
      wordMap[word]++;
    } else {
      wordMap[word] = 1;
    }
  }

  for (let i = 0; i < s.length - totalLength + 1; i++) {
    let seen = {};
    let j = 0;
    while (j < wordCount) {
      let word = s.substr(i + j * wordLength, wordLength);
      if (wordMap[word]) {
        if (seen[word]) {
          seen[word]++;
        } else {
          seen[word] = 1;
        }
        if (seen[word] > wordMap[word]) {
          break;
        }
      } else {
        break;
      }
      j++;
    }
    if (j === wordCount) {
      result.push(i);
    }
  }
  return result;
}

console.log(findSubstrings(s, words));
