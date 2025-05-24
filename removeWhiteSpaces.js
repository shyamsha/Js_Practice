function removeWhitespace(str) {
  return str.replace(/\s/g, "");
}

const myString = "  Hello  World!  \n This is a test. ";
const stringWithoutWhitespace = removeWhitespace(myString);
console.log(stringWithoutWhitespace); // Output: HelloWorld!Thisisatest.
