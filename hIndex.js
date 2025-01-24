// Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.

// According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

// Example 1:

// Input: citations = [3,0,6,1,5]
// Output: 3
// Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
// Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.

// !not understand

function hIndex(citations) {
  citations.sort((a, b) => a - b);
  let n = citations.length;
  let l = 0;
  let r = n - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (citations[mid] === n - mid) {
      return n - mid;
    } else if (citations[mid] < n - mid) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return n - l;
}

let citations = [3, 0, 6, 1, 5];
console.log(hIndex(citations)); //3
