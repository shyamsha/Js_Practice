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
