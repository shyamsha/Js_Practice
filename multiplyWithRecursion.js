const arr = [1, 2, 3, 4];

function multiplyWithRecursion(arr) {
  if (arr.length === 0) return 1;
  // return arr[0] * multiplyWithRecursion(arr.slice(1));
  return (
    arr[arr.length - 1] * multiplyWithRecursion(arr.slice(0, arr.length - 1))
  );
}

console.log(multiplyWithRecursion(arr)); // 24

//* it work like this way 4 * 3 * 2 * 1 = 24
//* 4 * multiplyWithRecursion([1,2,3])
//* 4 * 3 * multiplyWithRecursion([1,2])
//* 4 * 3 * 2 * multiplyWithRecursion([1])
//* 4 * 3 * 2 * 1 multiplyWithRecursion([1])
//! 24 * 1  multiplyWithRecursion([]) so base condition triggered return 1
