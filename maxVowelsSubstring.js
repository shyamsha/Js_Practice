// find max vowels in substrings k

var maxVowels = function (s, k) {
  let mVowel = 0;
  let cVowel = 0;
  let left = 0;
  for (let i = 0; i < s.length; i++) {
    if ("aeiou".indexOf(s[i]) >= 0) {
      cVowel++;
    }
    if (i - left + 1 > k) {
      if ("aeiou".indexOf(s[left]) >= 0) {
        cVowel--;
      }
      left++;
    }
    mVowel = Math.max(mVowel, cVowel);
  }
  return mVowel;
};

let s = "ibpbhixfiouhdljnjfflpapptrxgcomvnb",
  k = 33;
console.log(maxVowels(s, k));

// The code snippet has a single loop that iterates through the input string 's'.
// The time complexity is directly proportional to the length of the input string, making it O(n), where n is the length of the input string.
