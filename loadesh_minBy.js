function minBy1(array, iteratee) {
  let result, computed;
  // Iterate through array to find the minimum `result`.
  for (let i = 0; i < array.length; i++) {
    const current = iteratee(array[i]);
    if (current != null && (current < computed || computed === undefined)) {
      computed = current; // Store the calculated value of the current `result`.
      result = array[i];
    }
  }
  return result;
}
const minBy = (array, iteratee) => {
  // using reduce to iterate over the array
  return array.reduce((result, current) => {
    const computed = iteratee(current);
    if (
      computed != null &&
      (computed < iteratee(result) || result === undefined)
    ) {
      return current;
    }
    return result;
  }, undefined);
};
console.log(minBy([10, 2, 8], (value) => value));
console.log(minBy([null, undefined, 0], (value) => value));
console.log(minBy([{ n: 1 }, { n: 2 }], (o) => o.m));
// The function iterates through the 'array' once, performing a constant number of operations for each element.
// Therefore, the time complexity is O(n) where n is the number of elements in the array.
