function minBy(array, iteratee) {
  let result, computed;

  // Iterate through array to find the minimum `result`.
  for (const value of array) {
    const current = iteratee(value);
    if (current != null && (current < computed || computed === undefined)) {
      computed = current; // Store the calculated value of the current `result`.
      result = value;
    }
  }

  return result;
}
console.log(minBy([10, 2, 8], (value) => value));
console.log(minBy([{ n: 1 }, { n: 2 }, { n: 0 }], (o) => o.n));
// The function iterates through the 'array' once, performing a constant number of operations for each element.
// Therefore, the time complexity is O(n) where n is the number of elements in the array.
