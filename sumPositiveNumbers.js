// You get an array of numbers, return the sum of all of the positives ones.

const array1 = [1, -2, -3, -4];

let accumulator = 0;
const sumWithPositives = array1
  .filter((currentValue) => {
    if (currentValue > 0) {
      return (accumulator += currentValue);
    }
  })
  .join("");

console.log(sumWithPositives);
