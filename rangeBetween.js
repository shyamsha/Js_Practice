// create array from range

function rangeBetween(firstNum, secondNum) {
  let array = [];
  for (let i = firstNum; i <= secondNum; i++) {
    array.push(i);
  }
  return array;
}

// console.log(rangeBetween(1,5))

function rangeBetween1(firstNum, secondNum) {
  return Array.from(
    { length: secondNum - firstNum + 1 },
    (_, i) => firstNum + i
  );
}

// console.log(rangeBetween1(1, 5));

function rangeRecursive(startNum, endNum, array = []) {
  if (endNum < startNum) {
    return array;
  }
  return rangeRecursive(startNum, endNum - 1, [endNum, ...array]);
}

console.log(rangeRecursive(1, 5));
