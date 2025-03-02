//  Item in containers problem
// Example:
// sample input --> (I'm using word star instead of symbol * here)
// s= '*|*|*|'
// startIndices = [1]
// endIndices = [6]

// output --> (Count of number of stars between opening and closing window represented by '|' )
// 2
function countItems(s, startIndices, endIndices) {
  const n = s.length;
  const itemPrefixSum = Array(n).fill(0);
  const pipeIndices = [];

  // Step 1: Preprocess the string
  let itemCount = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === "*") itemCount++;
    itemPrefixSum[i] = itemCount;
    if (s[i] === "|") pipeIndices.push(i);
  }

  // Helper function to find nearest pipe index
  function findLeftPipe(index) {
    let low = 0,
      high = pipeIndices.length - 1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (pipeIndices[mid] >= index) high = mid - 1;
      else low = mid + 1;
    }
    return pipeIndices[low] ?? -1;
  }

  function findRightPipe(index) {
    let low = 0,
      high = pipeIndices.length - 1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (pipeIndices[mid] <= index) low = mid + 1;
      else high = mid - 1;
    }
    return pipeIndices[high] ?? -1;
  }

  const result = [];

  // Step 2: Process each query
  for (let i = 0; i < startIndices.length; i++) {
    const start = startIndices[i] - 1;
    const end = endIndices[i] - 1;

    const leftPipe = findLeftPipe(start);
    const rightPipe = findRightPipe(end);

    if (leftPipe === -1 || rightPipe === -1 || leftPipe >= rightPipe) {
      result.push(0);
    } else {
      result.push(itemPrefixSum[rightPipe] - itemPrefixSum[leftPipe]);
    }
  }

  return result;
}

// Example usage:
const s = "|**|*|*";
const startIndices = [1, 1];
const endIndices = [5, 6];
console.log(countItems(s, startIndices, endIndices)); // Output: [2, 3]

// processLogs problem

function processLogs(logs, threshold) {
  const n = logs.length;
  let obj = {};
  for (let i = 0; i < n; i++) {
    let [sender, recipient, amount] = logs[i].split(" ");
    obj[sender] = (obj[sender] || 0) + 1;
    if (sender !== recipient) {
      obj[recipient] = (obj[recipient] || 0) + 1;
    }
  }
  const res = [];
  for (let key in obj) {
    if (obj[key] >= threshold) {
      res.push(key);
    }
  }
  return res.sort((a, b) => parseInt(a) - parseInt(b));
}
console.log(
  processLogs(["88 99 200", "88 99 300", "99 32 100", "12 12 15"], 2)
); // ["88", "99"]
