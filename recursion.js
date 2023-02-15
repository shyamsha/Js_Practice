// recursion - when a function calls itself for as long as a condition met
// Recursion is a concept where a function calls itself, and keeps calling itself until it is told to stop.

function printHello() {
  console.log("hello");

  printHello();
}

printHello()

// this calls function itself but there is condition stop result multiple time executed call stack exceed

let counter = 0;

function printHello1() {
  console.log("hello");
  counter++;
  console.log(counter);

  if (counter > 3) {
    return;
  }

  printHello1();
}

printHello1(); // hello 1 hello 2 hello 3 hello 4

//  if the counter variable IS NOT GREATER than 3, the function should keep calling itself.
//  if the counter variable IS GREATER than 3, the function should end execution.

// factorial with recursion
function factorial(n) {
  if (n === 1) {  // give base condition to stop recursion
    return n
  }
  const preceding = n - 1

  return n * factorial(preceding)
}

factorial(5)
