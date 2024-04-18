// implement a function countBy(array, iteratee) that creates an object composed of keys generated from
// the results of running each element of array through iteratee.
// The corresponding value of each key is the number of times the key was returned by iteratee.

/**
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns the composed aggregate object.
 */
function countBy(array, iteratee) {
  let result = {};
  if (array.length === 0) {
    return {};
  }
  for (let i = 0; i < array.length; i++) {
    const key = String(iteratee(array[i]));
    if (!Object.prototype.hasOwnProperty.call(result, key)) {
      result[key] = 0;
    }
    result[key]++;
  }
  return result;
}

console.log(countBy([6.1, 4.2, 6.3], Math.floor));
// => { '4': 1, '6': 2 }

console.log(countBy([{ n: 3 }, { n: 5 }, { n: 3 }], (o) => o.n));
// => { '3': 2, '5': 1 }
