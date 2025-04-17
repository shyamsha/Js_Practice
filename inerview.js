// Questions
//1. "Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.
// Note: You can only move either down or right at any point in time."
// "You are given a string s and an array of strings words. All the strings of words are of the same length.

//2. A concatenated substring in s is a substring that contains all the strings of any permutation of words concatenated.

// For example, if words = [""""ab"""",""""cd"""",""""ef""""], then """"abcdef"""", """"abefcd"""", """"cdabef"""", """"cdefab"""", """"efabcd"""", and """"efcdab"""" are all concatenated strings. """"acdbef"""" is not a concatenated substring because it is not the concatenation of any permutation of words.
// Return the starting indices of all the concatenated substrings in s. You can return the answer in any order.

// Input: s = """"barfoothefoobarman"""", words = [""""foo"""",""""bar""""]
// Output: [0,9]
// Explanation: Since words.length == 2 and words[i].length == 3, the concatenated substring has to be of length 6.
// The substring starting at 0 is """"barfoo"""". It is the concatenation of [""""bar"""",""""foo""""] which is a permutation of words.
// The substring starting at 9 is """"foobar"""". It is the concatenation of [""""foo"""",""""bar""""] which is a permutation of words.
// The output order does not matter. Returning [9,0] is fine too."

// 3.Convert this array into a binary tree [1,2,null, 3, null,4,5,6,null,null,7,8,null,9,null,10,11,null,null,null,12], consider null values as no node at that position in the tree, Print the right face of a binary tree
