// Write a function lastCardLoser(n) that takes an integer n, representing the number of cards in the pile.
// The function should return the name of the player who will lose the game if both players play optimally.
// If there is no clear winning strategy, return null.

// Example 1:
// lastCardLoser(1) ➡ 'x'
// Player X picks the only card and loses.

function lastCardLoser(n) {
  return n % 3 !== 0 ? "Player Y" : "Player X";
}

console.log(lastCardLoser(2));

// intersection of two arrays
// common elements in two arrays
function intersection(arr1, arr2) {
  return arr1.filter((el) => arr2.includes(el));
  // return arr1.filter((el) => arr2.indexOf(el) !== -1);
}
