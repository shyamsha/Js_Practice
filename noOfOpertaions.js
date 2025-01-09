// 1769. Minimum Number of Operations to Move All Balls to Each Box
// Medium
// Topics
// Companies
// Hint
// You have n boxes. You are given a binary string boxes of length n,
// where boxes[i] is '0' if the ith box is empty, and '1' if it contains one ball.

// In one operation, you can move one ball from a box to an adjacent box. Box i is adjacent to box j if abs(i - j) == 1.
// Note that after doing so, there may be more than one ball in some boxes.

// Return an array answer of size n, where answer[i] is the minimum number of operations needed to move all the balls to the ith box.

// Each answer[i] is calculated considering the initial state of the boxes.

// Example 1:

// Input: boxes = "110"
// Output: [1,1,3]
// Explanation: The answer for each box is as follows:
// 1) First box: you will have to move one ball from the second box to the first box in one operation.
// 2) Second box: you will have to move one ball from the first box to the second box in one operation.
// 3) Third box: you will have to move one ball from the first box to the third box in two operations,
// and move one ball from the second box to the third box in one operation.

const minOperations = function (boxes) {
  let n = boxes.length;
  let prefix = 0;
  let prefixSum = Array(n).fill(0);
  let prefixNow = 0;

  let postfix = 0;
  let postfixSum = Array(n).fill(0);
  let postfixNow = 0;
  // prefix
  for (let i = 0; i < n; i++) {
    prefixNow += prefix;
    prefixSum[i] = prefixNow;
    if (boxes[i] === "1") prefix++;
  }
  // postfix or suffix
  for (let j = n; j >= 0; j--) {
    postfixNow += postfix;
    postfixSum[j] = postfixNow;
    if (boxes[j] === "1") postfix++;
  }
  // Combine prefix and postfix
  const result = Array(n);
  for (let i = 0; i < n; i++) {
    result[i] = prefixSum[i] + postfixSum[i];
  }
  return result;
};

let boxes = "001011";
console.log(minOperations(boxes));
