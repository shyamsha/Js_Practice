// return some random element from array

function randomElement(array) {
  if (array.length === 0) {
    return "empty array";
  } else {
    return array[Math.floor(Math.random() * array.length)];
  }
}

// console.log(randomElement([1, 2, 3, 4, 5]));

// random password
/* Function to generate combination of password */
function generatePass(length) {
  let pass = "";
  let str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
    "abcdefghijklmnopqrstuvwxyz" +
    "0123456789" +
    "!@#$%^&*()_+";

  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length);
    pass += str.charAt(char);
  }

  return pass;
}

// console.log(generatePass(8));

// console.log(
//   Math.random().toString(36).slice(2) +
//     Math.random().toString(36).toUpperCase().slice(2)
// );

function generateRandomNumbers(count, min, max) {
  // 1: Create a `Set` object
  let uniqueNumbers = new Set();
  while (uniqueNumbers.size < count) {
    // 2: Generate each random number
    uniqueNumbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  // 3: Immediately insert them numbers into the Set...
  return Array.from(uniqueNumbers);
}
// ...set how many numbers to generate from a given range
// console.log(generateRandomNumbers(10, 1, 10));

function shuffleArray(array) {
  const newArray = [...array]; // Create a copy to avoid modifying the original
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
  }
  return newArray;
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5];
const shuffledArray = shuffleArray(originalArray);

// console.log("Original Array:", originalArray);
// console.log("Shuffled Array:", shuffledArray);

//shuffle mutate the original array
function shuffleArrayMutate(array) {
  // for (let i = array.length - 1; i > 0; i--) {
  //   const j = Math.floor(Math.random() * (i + 1));
  //   [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  // }
  // return array;
  return array.sort(() => Math.random() - 0.5);
}

console.log("Shuffled Array:", shuffleArrayMutate(originalArray));
