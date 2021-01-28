// The Postfix Form returns the original value of the variable, before the increment/decrement 
// The Prefix Form returns the value after the increment/decrement. 
// Prefix increment
let prefix = 1;
console.log(++prefix); // 2
console.log(prefix); // 2

// Postfix increment
let postfix = 1;
console.log(postfix++); // 1
console.log(postfix); // 2

// Saying ++x means to increment (++) first then return the value of x, thus we have ++x. 
// Saying x++ means to return the value of x first then increment (++) it after, thus x++.

for (let index = 0; index < 5; ++index) {
  console.log(index)
  
}
