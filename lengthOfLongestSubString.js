// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

function subString(s) {
  let set = new Set();
  let left = 0;
  let maxSize = 0;

  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[i]);
    maxSize = Math.max(maxSize, i - left + 1);
  }
  return maxSize;
}

var lengthOfLongestSubstring = function minimizeStr(str) {
  let leftIndex = 0;
  let rightIndex = 0;
  let maxSize = 0;
  let set = new Set();
  while (rightIndex < str.length) {
    if (!set.has(str[rightIndex])) {
      set.add(str[rightIndex]);
      rightIndex++;
      maxSize = Math.max(maxSize, set.size);
    } else {
      set.delete(str[leftIndex]);
      leftIndex++;
    }
  }
  return maxSize;
};
