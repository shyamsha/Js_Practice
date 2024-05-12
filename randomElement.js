// return some random element from array

function randomElement(array) {
  if (array.length === 0) {
    return "empty array";
  } else {
    return array[Math.floor(Math.random() * array.length)];
  }
}

console.log(randomElement([1, 2, 3, 4, 5]));

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

console.log(generatePass(8));

console.log(
  Math.random().toString(36).slice(2) +
    Math.random().toString(36).toUpperCase().slice(2)
);
