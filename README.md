## JavaScript

[Assessment link(linkedin)](https://www.linkedin.com/skill-assessments/JavaScript/quiz-intro/)

#### Q1. Which operator returns true if the two compared values are not equal?

- [ ] `<>`
- [ ] `~`
- [ ] `==!`
- [x] `!==`

[Reference Javascript Comparison Operators](https://www.w3schools.com/js/js_operators.asp)

#### Q2. How is a forEach statement different from a for statement?

- [ ] Only a for statement uses a callback function.
- [x] A for statement is more generic and can be used with various iterable objects, while a forEach statement is mainly designed for arrays but can also be used with other iterable objects like Sets.
- [ ] Only a forEach statement lets you specify your own iterator.
- [ ] A forEach statement is generic, but a for statement can be used only with an array.

[Reference Differences between forEach and for loop](https://www.geeksforgeeks.org/difference-between-foreach-and-for-loop-in-javascript/)

#### Q3. Review the code below. Which statement calls the addTax function and passes 50 as an argument?

```js
function addTax(total) {
  return total * 1.05;
}
```

- [ ] `addTax = 50;`
- [ ] `return addTax 50;`
- [x] `addTax(50);`
- [ ] `addTax 50;`

[Reference functions in javascript](https://www.w3schools.com/js/js_functions.asp)

#### Q4. Which statement is the correct way to create a variable called rate and assign it the value 100?

- [x] `let rate = 100;`
- [ ] `let 100 = rate;`
- [ ] `100 = let rate;`
- [ ] `rate = 100;`

[Reference Javascript Assignment operators](https://www.w3schools.com/js/js_operators.asp)

#### Q5. Which statement creates a new object using the Person constructor? Which statement creates a new Person object called "student"?

- [x] `var student = new Person();`
- [ ] `var student = construct Person;`
- [ ] `var student = Person();`
- [ ] `var student = construct Person();`

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

#### Q6. When would the final statement in the code shown be logged to the console? When would 'results shown' be logged to the console?

```js
let modal = document.querySelector("#result");
setTimeout(function () {
  modal.classList.remove("hidden");
}, 10000);
console.log("Results shown");
```

- [ ] after 10 second
- [ ] after results are received from the HTTP request
- [ ] after 10000 seconds
- [x] immediately

[Reference Javascript is synchronous and single threaded](https://stackoverflow.com/a/2035662/15067394)

#### Q7. Which snippet could you add to this code to print "food" to the console?

```js
class Animal {
  static belly = [];
  eat() {
    Animal.belly.push("food");
  }
}
let a = new Animal();
a.eat();
console.log(/* Snippet Here */); //Prints food
```

- [ ] `a.prototype.belly[0]`
- [ ] `Object.getPrototype0f (a).belly[0]`
- [x] `Animal.belly[0]`
- [ ] `a.belly[0]`

[Reference Javascript Class static Keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)

#### Q8. You've written the code shown to log a set of consecutive values, but it instead results in the value 5, 5, 5, and 5 being logged to the console. Which revised version of the code would result in the value 1, 2, 3 and 4 being logged?

- [ ] `A`

```js
for (var i = 1; i <= 4; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 10000);
}
```

- [ ] `B`

```js
for (var i = 1; i <= 4; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(j);
    }, j * 1000);
  })(j);
}
```

- [ ] `C`

```js
for (var i = 1; i <= 4; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
```

- [x] `D`

```js
for (var i = 1; i <= 4; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, j * 1000);
  })(i);
}
```

- [ ] `E`

```js
for (var j = 1; j <= 4; j++) {
  setTimeout(function () {
    console.log(j);
  }, j * 1000);
}
```

1. [Reference setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
2. [Reference immediately invoked anonymous functions](https://www.javascripttutorial.net/javascript-anonymous-functions/)

#### Q9. How does a function create a closure?

- [ ] It reloads the document whenever the value changes.
- [x] It returns a reference to a variable in its parent scope.
- [ ] It completes execution without returning.
- [ ] It copies a local variable to the global scope.

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

#### Q10. Which statement creates a new function called discountPrice?

- [x] `A`

```js
let discountPrice = function (price) {
  return price * 0.85;
};
```

- [ ] `B`

```js
let discountPrice(price) {
  return price * 0.85;
};
```

- [ ] `C`

```js
let function = discountPrice(price) {
  return price * 0.85;
};
```

- [x] `D`

```js
discountPrice = function (price) {
  return price * 0.85;
};
```

[Reference defining javascript functions](https://www.w3schools.com/js/js_functions.asp)

#### Q11. What is the result in the console of running the code shown?

```js
var Storm = function () {};
Storm.prototype.precip = "rain";
var WinterStorm = function () {};
WinterStorm.prototype = new Storm();
WinterStorm.prototype.precip = "snow";
var bob = new WinterStorm();
console.log(bob.precip);
```

- [ ] Storm()
- [ ] undefined
- [ ] 'rain'
- [x] 'snow'

[Reference prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

#### Q12. You need to match a time value such as 12:00:32. Which of the following regular expressions would work for your code?

- [ ] `/[0-9]{2,}:[0-9]{2,}:[0-9]{2,}/`
- [x] `/\d\d:\d\d:\d\d/`
- [ ] `/[0-9]+:[0-9]+:[0-9]+/`
- [ ] `/ : : /`

**NOTE**: The first three are all partially correct and will match digits, but the **second option is the most correct** because it will **only** match **2 digit** time values (12:00:32). The first option would have worked if the repetitions range looked like `[0-9]{2}`, however because of the **comma** `[0-9]{2,}` it will select 2 **or more** digits (120:000:321). The third option will any range of time digits, single _and_ multiple (meaning `1:2:3` will also match).

**More resources:**

1. [Repeating characters](https://regexone.com/lesson/repeating_characters)
2. [Kleene operators](https://regexone.com/lesson/kleene_operators)

#### Q13. What is the result in the console of running this code?

```js
"use strict";
function logThis() {
  this.desc = "logger";
  console.log(this);
}
new logThis();
```

- [ ] `undefined`
- [ ] `window`
- [x] `{desc: "logger"}`
- [ ] `function`

[Reference javascript classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

#### Q14. How would you reference the text 'avenue' in the code shown?

```js
let roadTypes = ["street", "road", "avenue", "circle"];
```

- [ ] roadTypes.2
- [ ] roadTypes\[3\]
- [ ] roadTypes.3
- [x] roadTypes\[2\]

[Reference accessing javascript arrays](https://www.w3schools.com/js/js_arrays.asp)

#### Q15. What is the result of running this statement?

```js
console.log(typeof 42);
```

- [ ] `'float'`
- [ ] `'value'`
- [x] `'number'`
- [ ] `'integer'`

[Reference javascript data types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

#### Q16. Which property references the DOM object that dispatched an event?

- [ ] `self`
- [ ] `object`
- [x] `target`
- [ ] `source`

[Reference DOM events](https://www.w3schools.com/jsref/dom_obj_event.asp)

#### Q17. You're adding error handling to the code shown. Which code would you include within the if statement to specify an error message?

```js
function addNumbers(x, y) {
  if (isNaN(x) || isNaN(y)) {
  }
}
```

- [ ] `exception('One or both parameters are not numbers')`
- [ ] `catch('One or both parameters are not numbers')`
- [ ] `error('One or both parameters are not numbers')`
- [x] `throw('One or both parameters are not numbers')`

[Reference javascript throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

#### Q18. Which method converts JSON data to a JavaScript object?

- [ ] `JSON.fromString();`
- [x] `JSON.parse()`
- [ ] `JSON.toObject()`
- [ ] `JSON.stringify()`

[Reference convert json to javascript object](https://www.w3schools.com/js/js_json_parse.asp)

#### Q19. When would you use a conditional statement?

- [ ] When you want to reuse a set of statements multiple times.
- [x] When you want your code to choose between multiple options.
- [ ] When you want to group data together.
- [ ] When you want to loop through a group of statement.

[Reference javascript conditionals](https://www.javascript.com/learn/conditionals)

#### Q20. What would be the result in the console of running this code?

```js
for (var i = 0; i < 5; i++) {
  console.log(i);
}
```

- [ ] 1 2 3 4 5
- [ ] 1 2 3 4
- [x] 0 1 2 3 4
- [ ] 0 1 2 3 4 5

[Reference javascript for loops](https://www.w3schools.com/js/js_loop_for.asp)

#### Q21. Which Object method returns an iterable that can be used to iterate over the properties of an object?

- [ ] `Object.get()`
- [ ] `Object.loop()`
- [ ] `Object.each()`
- [x] `Object.keys()`

[Reference javascript object static methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods)

#### Q22. What will be logged to the console?

```js
var a = ["dog", "cat", "hen"];
a[100] = "fox";
console.log(a.length);
```

- [x] 101
- [ ] 3
- [ ] 4
- [ ] 100

#### Q23. What is one difference between collections created with Map and collections created with Object?

- [ ] You can iterate over values in a Map in their insertion order.
- [x] You can count the records in a Map with a single method call.
- [ ] Keys in Maps can be strings.
- [ ] You can access values in a Map without iterating over the whole collection.

**Explanation:** `Map.prototype.size returns the number of elements in a Map, whereas Object does not have a built-in method to return its size.`
[Reference map methods javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

#### Q24. What is the value of dessert.type after executing this code?

```js
const dessert = { type: "pie" };
dessert.type = "pudding";
```

- [ ] pie
- [ ] The code will throw an error.
- [x] pudding
- [ ] undefined

[Reference working with js objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

#### Q25. 0 && hi

- [ ] ReferenceError
- [ ] true
- [x] 0
- [ ] false

[Reference boolean logic](https://ntgard.medium.com/https-medium-com-ntgard-boolean-logic-in-javascript-part-1-3371af974f19)

#### Q26. Which of the following operators can be used to do a short-circuit evaluation?

- [ ] `++`
- [ ] `--`
- [ ] `==`
- [x] `||`

[Reference short circuit javascript](https://codeburst.io/javascript-what-is-short-circuit-evaluation-ff22b2f5608c)

#### Q27. Which statement sets the Person constructor as the parent of the Student constructor in the prototype chain?

- [ ] `Student.parent = Person;`
- [x] `Student.prototype = new Person();`
- [ ] `Student.prototype = Person;`
- [ ] `Student.prototype = Person();`

[Reference prototype object js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

#### Q28. Why would you include a "use strict" statement in a JavaScript file?

- [ ] to tell parsers to interpret your JavaScript syntax loosely
- [x] to tell parsers to enforce all JavaScript syntax rules when processing your code
- [ ] to instruct the browser to automatically fix any errors it finds in the code
- [ ] to enable ES6 features in your code

[Reference what is use strict in js](https://www.w3schools.com/js/js_strict.asp)

#### Q29. Which Variable-defining keyword allows its variable to be accessed (as undefined) before the line that defines it?

- [ ] all of them
- [ ] `const`
- [x] `var`
- [ ] `let`

[Reference var vs let vs const in js](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)

#### Q30. Which of the following values is not a Boolean false?

- [ ] `Boolean(0)`
- [ ] `Boolean("")`
- [ ] `Boolean(NaN)`
- [x] `Boolean("false")`

[Reference boolean of a string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

#### Q31. Which of the following is not a keyword in JavaScript?

- [ ] `this`
- [ ] `catch`
- [ ] `function`
- [x] `array`

[Reference js reserved words](https://www.w3schools.com/js/js_reserved.asp)

#### Q32. Which variable is an implicit parameter for every function in JavaScript?

- [x] arguments
- [ ] args
- [ ] argsArray
- [ ] argumentsList

[Reference implicit js parameters for functions](https://www.codeproject.com/Tips/1221966/JavaScript-Functions-Implicit-Parameters)

#### Q33. For the following class, how do you get the value of 42 from an instance of X?

```js
class X {
  get Y() {
    return 42;
  }
}
var x = new X();
```

- [ ] `x.get('Y')`
- [x] `x.Y`
- [ ] `x.Y()`
- [ ] `x.get().Y`

[Reference getters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)

#### Q34. What is the result of running this code?

```js
sum(10, 20);
diff(10, 20);
function sum(x, y) {
  return x + y;
}

let diff = function (x, y) {
  return x - y;
};
```

- [ ] 30, ReferenceError, 30, -10
- [x] 30, ReferenceError
- [ ] 30, -10
- [ ] ReferenceError, -10

[Reference accessing before initialization](https://stackoverflow.com/questions/56318460/cannot-access-variable-name-before-initialization)

#### Q35. Why is it usually better to work with Objects instead of Arrays to store a collection of records?

- [ ] Objects are more efficient in terms of storage.
- [ ] Adding a record to an object is significantly faster than pushing a record into an array.
- [x] Most operations involve looking up a record, and objects can do that better than arrays.
- [ ] Working with objects makes the code more readable.

[Reference efficiency of lookups](https://stackoverflow.com/questions/17295056/array-vs-object-efficiency-in-javascript)
**Explanation:** Records in an object can be retrieved using their key which can be any given value (e.g. an employee ID, a city name, etc), whereas to retrieve a record from an array we need to know its index.

#### Q36. Which statement is true about the "async" attribute for the HTML script tag?

- [ ] It can be used for both internal and external JavaScript code.
- [ ] It can be used only for internal JavaScript code.
- [ ] It can be used only for internal or external JavaScript code that exports a promise.
- [x] It can be used only for external JavaScript code.

[Reference async attribute for html](https://www.w3schools.com/tags/att_script_async.asp)

#### Q37. How do you import the lodash library making it top-level Api available as the "\_" variable?

- [x] `import _ from 'lodash';`
- [ ] `import 'lodash' as _;`
- [ ] `import '_' from 'lodash;`
- [ ] `import lodash as _ from 'lodash';`

[Reference how to import library in js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

#### Q38. What does the following expression evaluate to?

```js
[] == [];
```

- [ ] true
- [ ] undefined
- [ ] []
- [x] false

[Reference arrays in js are objects](https://stackoverflow.com/questions/30820611/why-doesnt-equality-check-work-with-arrays)

#### Q39. What type of function can have its execution suspended and then resumed at a later point?

- [x] Generator function
- [ ] Arrow function
- [ ] Async/ Await function
- [ ] Promise function

[Reference what are generators in nodejs](https://www.guru99.com/node-js-generators-compare-callbacks.html#:~:text=Generators%20are%20function%20executions%20that,resumed%20at%20a%20later%20point.)

#### Q40. What will this code print?

```js
var v = 1;
var f1 = function () {
  console.log(v);
};

var f2 = function () {
  var v = 2;
  f1();
};

f2();
```

- [ ] 2
- [x] 1
- [ ] Nothing - this code will throw an error.
- [ ] undefined

[Reference closures in js \/ nested functions](https://javascript.info/closure)

#### Q41. Which statement is true about Functional Programming?

- [ ] Every object in the program has to be a function.
- [ ] Code is grouped with the state it modifies.
- [ ] Date fields and methods are kept in units.
- [x] Side effects are not allowed.

[Reference functional programming](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)

#### Q42. Your code is producing the error: TypeError: Cannot read property 'reduce' of undefined. What does that mean?

- [x] You are calling a method named reduce on an object that's declared but has no value.
- [ ] You are calling a method named reduce on an object that does not exist.
- [ ] You are calling a method named reduce on an empty array.
- [ ] You are calling a method named reduce on an object that has a null value.

**Explanation**: `You cannot invoke reduce on undefined object... It will throw (yourObject is not Defined...)`

#### Q43. How many prototype objects are in the chain for the following array?

`let arr = [];`

- [ ] 3
- [x] 2
- [ ] 0
- [ ] 1

[Reference array prototype](https://www.w3schools.com/jsref/jsref_prototype_array.asp)

#### Q44. Which choice is _not_ a unary operator?

- [ ] `typeof`
- [ ] `delete`
- [x] `instanceof`
- [ ] `void`

[Reference js unary operators](https://www.digitalocean.com/community/tutorials/javascript-unary-operators-simple-and-useful#:~:text=A%20unary%20operation%20is%20an,therefore%20their%20functionality%20is%20guaranteed.)

#### Q45. What type of scope does the end variable have in the code shown?

```js
var start = 1;
if (start === 1) {
  let end = 2;
}
```

- [ ] conditional
- [x] block
- [ ] global
- [ ] function

[Reference block vs function scope](https://josephcardillo.medium.com/the-difference-between-function-and-block-scope-in-javascript-4296b2322abe)

#### Q46. What will the value of y be in this code:

```js
const x = 6 % 2;
const y = x ? "One" : "Two";
```

- [ ] One
- [ ] undefined
- [ ] TRUE
- [x] Two

[Reference ternary operator js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

#### Q47. Which keyword is used to create an error?

- [x] `throw`
- [ ] `exception`
- [ ] `catch`
- [ ] `error`

[Reference throwing errors in js](<https://www.w3schools.com/jsref/jsref_throw.asp#:~:text=The%20throw%20statement%20throws%20(generates,to%20create%20a%20custom%20error.)>)

#### Q48. What's one difference between the async and defer attributes of the HTML script tag?

- [ ] The defer attribute can work synchronously.
- [ ] The defer attribute works only with generators.
- [ ] The defer attribute works only with promises.
- [x] The defer attribute will asynchronously load the scripts in order.

[Reference async vs defer](https://www.digitalocean.com/community/tutorials/html-defer-async#:~:text=%3E-,Async%20vs%20Defer,order%20as%20they%20are%20called.)

#### Q49. The following program has a problem. What is it?

```js
var a;
var b = (a = 3) ? true : false;
```

- [x] The condition in the ternary is using the assignment operator.
- [ ] You can't define a variable without initializing it.
- [ ] You can't use a ternary in the right-hand side of an assignment operator.
- [ ] The code is using the deprecated var keyword.

[Reference ternary operator js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

#### Q50. Which statement references the DOM node created by the code shown?

```html
<p class="pull">lorem ipsum</p>
```

- [ ] `Document.querySelector('class.pull')`
- [x] `document.querySelector('.pull');`
- [ ] `Document.querySelector('pull')`
- [ ] `Document.querySelector('#pull')`

[Reference query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

#### Q51. What value does this code return?

```js
let answer = true;
if (answer === false) {
  return 0;
} else {
  return 10;
}
```

- [x] 10
- [ ] true
- [ ] false
- [ ] 0

[Reference javascript conditionals](https://www.javascript.com/learn/conditionals)

#### Q52. What is the result in the console of running the code shown?

```js
var start = 1;
function setEnd() {
  var end = 10;
}
setEnd();
console.log(end);
```

- [ ] 10
- [ ] 0
- [x] ReferenceError
- [ ] undefined

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

#### Q53. What will this code log in the console?

```js
function sayHello() {
  console.log("hello");
}

console.log(sayHello.prototype);
```

- [ ] undefined
- [ ] "hello"
- [x] an object with a constructor property
- [ ] an error message

[Reference prototypes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

#### Q54. Which collection object allows unique value to be inserted only once?

- [ ] Object
- [x] Set
- [ ] Array
- [ ] Map

[Reference javascript sets](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

#### Q55. What two values will this code print?

```js
function printA() {
  console.log(answer);
  var answer = 1;
}
printA();
printA();
```

- [ ] `1` then `1`
- [ ] `1` then `undefined`
- [x] `undefined` then `undefined`
- [ ] `undefined` then `1`

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

#### Q56. How does the `forEach()` method differ from a `for` statement?

- [ ] forEach allows you to specify your own iterator, whereas for does not.
- [ ] forEach can be used only with strings, whereas for can be used with additional data types.
- [x] forEach can be used only with an array, whereas for can be used with additional data types.
- [ ] for loops can be nested; whereas forEach loop cannot.

[Reference Differences between forEach and for loop](https://www.geeksforgeeks.org/difference-between-foreach-and-for-loop-in-javascript/)

#### Q57. Which choice is an incorrect way to define an arrow function that returns an empty object?

- [ ] => `({})`
- [x] => `{}`
- [ ] => `{ return {};}`
- [ ] => `(({}))`

[Reference arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

#### Q58. Why might you choose to make your code asynchronous?

- [x] to start tasks that might take some time without blocking subsequent tasks from executing immediately
- [ ] to ensure that tasks further down in your code are not initiated until earlier tasks have completed
- [ ] to make your code faster
- [ ] to ensure that the call stack maintains a LIFO (Last in, First Out) structure

**EXPLANATION:** `"to ensure that tasks further down in your code are not initiated until earlier tasks have completed" you use the normal (synchronous) flow where each command is executed sequentially. Asynchronous code allows you to break this sequence: start a long running function (AJAX call to an external service) and continue running the rest of the code in parallel.`

#### Q59. Which expression evaluates to true?

- [ ] `[3] == [3]`
- [x] `3 == '3'`
- [ ] `3 != '3'`
- [ ] `3 === '3'`

1. [Reference booleans](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
2. [Reference 2 - booleans](https://www.scaler.com/topics/boolean-in-javascript/)

#### Q60. Which of these is a valid variable name?

- [ ] 5thItem
- [x] firstName
- [ ] grand total
- [ ] function

[Reference coding conventions](https://www.w3schools.com/js/js_conventions.asp)

#### Q61. Which method cancels event default behavior?

- [ ] `cancel()`
- [ ] `stop()`
- [x] `preventDefault()`
- [ ] `prevent()`

[Reference javascript events](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

#### Q62. Which method do you use to attach one DOM node to another?

- [ ] `attachNode()`
- [ ] `getNode()`
- [ ] `querySelector()`
- [x] `appendChild()`

[Reference Node interface](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)

#### Q63. What statement can be used to skip an iteration in a loop?

- [ ] `break`
- [ ] `pass`
- [ ] `skip`
- [x] `continue`

[Reference break vs continue](https://www.w3schools.com/js/js_break.asp)

#### Q64. Which choice is a valid example for an arrow function?

- [x] `(a,b) => c`
- [ ] `a, b => {return c;}`
- [ ] `a, b => c`
- [ ] `{ a, b } => c`

[Reference arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

#### Q65. Which concept is defined as a template that can be used to generate different objects that share some shape and/or behavior?

- [x] class
- [ ] generator function
- [ ] map
- [ ] proxy

[Reference javascript classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

#### Q66. How do you add a comment to JavaScript code?

- [ ] `! This is a comment`
- [ ] `# This is a comment`
- [ ] `\\ This is a comment`
- [x] `// This is a comment`

[Reference comments in javascript](https://www.w3schools.com/js/js_comments.asp)

#### Q67. If you attempt to call a value as a function but the value is not a function, what kind of error would you get?

- [x] TypeError
- [ ] SystemError
- [ ] SyntaxError
- [ ] LogicError

[Reference javascript errors](https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/error)

#### Q68. Which method is called automatically when an object is initialized?

- [ ] create()
- [ ] new()
- [x] constructor()
- [ ] init()

[Reference javascript constructors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)

#### Q69. What is the result of running the statement shown?

```js
let a = 5;
console.log(++a);
```

- [ ] 4
- [ ] 10
- [x] 6
- [ ] 5

[Reference ++x vs x++](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment)

#### Q70. You've written the event listener shown below for a form button, but each time you click the button, the page reloads. Which statement would stop this from happening?

```js
button.addEventListener(
  "click",
  function (e) {
    button.className = "clicked";
  },
  false
);
```

- [ ] `e.blockReload();`
- [ ] `button.preventDefault();`
- [ ] `button.blockReload();`
- [x] `e.preventDefault();`

[Reference events in javascript](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

#### Q71. Which statement represents the starting code converted to an IIFE?

- [ ] `function() { console.log('lorem ipsum'); }()();`
- [ ] `function() { console.log('lorem ipsum'); }();`
- [x] `(function() { console.log('lorem ipsum'); })();`

[Reference what is an Immediately Invoked Function Expression](https://javascript.plainenglish.io/https-medium-com-javascript-in-plain-english-stop-feeling-iffy-about-using-an-iife-7b0292aba174)

#### Q72. Which statement selects all img elements in the DOM tree?

- [ ] `Document.querySelector('img')`
- [ ] `Document.querySelectorAll('<img>')`
- [x] `Document.querySelectorAll('img')`
- [ ] `Document.querySelector('<img>')`

[Reference query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

#### Q73. Why would you choose an asynchronous structure for your code?

- [ ] To use ES6 syntax
- [x] To start tasks that might take some time without blocking subsequent tasks from executing immediately
- [ ] To ensure that parsers enforce all JavaScript syntax rules when processing your code
- [ ] To ensure that tasks further down in your code aren't initiated until earlier tasks have completed

[Reference async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

#### Q74. What is the HTTP verb to request the contents of an existing resource?

- [ ] DELETE
- [x] GET
- [ ] PATCH
- [ ] POST

[Reference http methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

#### Q75. Which event is fired on a text field within a form when a user tabs to it, or clicks or touches it?

- [x] focus
- [ ] blur
- [ ] hover
- [ ] enter

[Reference javascript events](https://developer.mozilla.org/en-US/docs/Web/Events)

#### Q76. What is the result in the console of running this code?

```js
function logThis() {
  console.log(this);
}
logThis();
```

- [ ] function
- [ ] undefined
- [ ] Function.prototype
- [x] window

[Reference what is the javascript window](https://www.w3schools.com/js/js_window.asp)

#### Q77. Which class-based component is equivalent to this function component?

```js
const Greeting = ({ name }) => <h1>Hello {name}!</h1>;
```

- [x] `class Greeting extends React.Component { render() { return <h1>Hello {this.props.name}!</h1>; } }`
- [ ] `class Greeting extends React.Component { constructor() { return <h1>Hello {this.props.name}!</h1>; } }`
- [ ] `class Greeting extends React.Component { <h>Hello {this.props.name}!</h>; } }`
- [ ] `class Greeting extends React.Component { render({ name }) { return <h1>Hello {name}!</h1>; } }`

#### Q79. What is the output of this code?

```js
var obj;
console.log(obj);
```

- [ ] `ReferenceError: obj is not defined`
- [ ] `{}`
- [x] `undefined`
- [ ] `null`

[Reference working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

#### Q80. How would you use the TaxCalculator to determine the amount of tax on \$50?

```js
class TaxCalculator {
  static calculate(total) {
    return total * 0.05;
  }
}
```

- [ ] calculate(50);
- [ ] new TaxCalculator().calculate(\$50);
- [x] TaxCalculator.calculate(50);
- [ ] new TaxCalculator().calculate(50);

[Reference functions in javascript](https://www.w3schools.com/js/js_functions.asp)

#### Q81. What is wrong with this code?

```js
const foo = {
  bar() {
    console.log("Hello, world!");
  },
  name: "Albert",
  age: 26,
};
```

- [ ] The function bar needs to be defined as a key/value pair.
- [ ] Trailing commas are not allowed in JavaScript.
- [ ] Functions cannot be declared as properties of objects.
- [x] Nothing, there are no errors.

1. [Reference functions in javascript](https://www.w3schools.com/js/js_functions.asp)
2. [Reference working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

#### Q82. What will be logged to the console?

```js
console.log("I");
setTimeout(() => {
  console.log("love");
}, 0);
console.log("Javascript!");
```

- [x] .

```plaintext
I
Javascript!
love
```

- [ ] .

```plaintext
love
I
Javascript!
```

- [ ] The output may change with each execution of code and cannot be determined.

- [ ] .

```plaintext
I
love
Javascript!
```

**Reference**
https://developer.mozilla.org/en-US/docs/Web/API/setTimeout#reasons_for_delays_longer_than_specified especially see the 'late timeouts' section.

#### Q83. What will this code log to the console?

```js
const foo = [1, 2, 3];
const [n] = foo;
console.log(n);
```

- [x] 1
- [ ] undefined
- [ ] NaN
- [ ] Nothing--this is not proper JavaScript syntax and will throw an error.

[Reference array deconstruction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

#### Q84. How do you remove the property name from this object?

```js
const foo = {
  name: "Albert",
};
```

- [ ] delete name from foo;
- [x] delete foo.name;
- [ ] del foo.name;
- [ ] remove foo.name;

[Reference working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

#### Q85. What is the difference between the `map()` and the `forEach()` methods on the Array prototype?

- [ ] There is no difference.
- [ ] The `forEach()` method returns a single output value, whereas the `map()` method performs operation on each value in the array.
- [x] The map() method returns a new array with a transformation applied on each item in the original array, whereas the `forEach()` method iterates through an array with no return value.
- [ ] The `forEach()` method returns a new array with a transformation applied on each item in the original array, whereas the `map()` method iterates through an array with no return value.

1. [Reference map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
2. [Reference Differences between forEach and for loop](https://www.geeksforgeeks.org/difference-between-foreach-and-for-loop-in-javascript/)

#### Q86. Which concept does this code illustrate?

```js
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

var addFive = makeAdder(5);
console.log(addFive(3));
```

- [ ] overloading
- [ ] closure
- [x] currying
- [ ] overriding

[Reference currying](https://javascript.info/currying-partials)

#### Q87. Which tag pair is used in HTML to embed JavaScript?

- [x] `<script></script>`
- [ ] `<js></js>`
- [ ] `<javascript></javascript>`
- [ ] `<code></code>`

[Reference add js to html file](https://www.w3schools.com/tags/tag_script.asp)

#### Q88. If your app receives data from a third-party API, which HTTP response header must the server specify to allow exceptions to the same-origin policy?

- [ ] Security-Mode
- [x] Access-Control-Allow-Origin
- [ ] Different-Origin
- [ ] Same-Origin

[Reference Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

#### Q89. What is the output of this code?

```js
let rainForests = ["Amazon", "Borneo", "Cerrado", "Congo"];
rainForests.splice(0, 2);
console.log(rainForests);
```

- [ ] `["Amazon","Borneo","Cerrado","Congo"]`
- [x] `["Cerrado", "Congo"]`
- [ ] `["Congo"]`
- [ ] `["Amazon","Borneo"]`

[Reference array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

#### Q90. Which missing line would allow you to create five variables(one,two,three,four,five) that correspond to their numerical values (1,2,3,4,5)?

```js
const numbers = [1, 2, 3, 4, 5];
//MISSING LINE
```

- [x] `const [one,two,three,four,five]=numbers`
- [ ] `const {one,two,three,four,five}=numbers`
- [ ] `const [one,two,three,four,five]=[numbers]`
- [ ] `const {one,two,three,four,five}={numbers}`

[Reference array destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

#### Q91. What will this code print?

```js
const obj = {
  a: 1,
  b: 2,
  c: 3,
};

const obj2 = {
  ...obj,
  a: 0,
};

console.log(obj2.a, obj2.b);
```

- [ ] Nothing, it will throw an error
- [x] 0 2
- [ ] undefined 2
- [ ] undefined 2

[Reference spread syntax es6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

#### Q92. Which line could you add to this code to print "jaguar" to the console?

```js
let animals = ["jaguar", "eagle"];
//Missing Line
console.log(animals.pop()); //Prints jaguar
```

- [ ] `animals.filter(e => e === "jaguar");`
- [ ] `animals.reverse();`
- [ ] `animals.shift();`
- [x] `animals.pop();`

[Reference Javascript Array pop()](https://www.w3schools.com/jsref/jsref_pop.asp)

shift() - removes the FIRST element of an array and returns the removed item.

pop() - removes the LAST element of an array and returns the removed item.

reverse() - reverses the order of the elements in an array.

filter() - get every element in the array that meets the condition.

#### Q93. What line is missing from this code?

```js
//Missing Line
for (var i = 0; i < vowels.length; i++) {
  console.log(vowels[i]);
  //Each letter printed on a separate line as follows;
  //a
  //e
  //i
  //o
  //u
}
```

- [ ] `let vowels = "aeiou".toArray();`
- [ ] `let vowels = Array.of("aeiou");`
- [ ] `let vowels = {"a", "e", "i", "o", "u"};`
- [x] `let vowels = "aeiou";`

[Reference working with arrays](https://www.w3schools.com/js/js_arrays.asp)

#### Q94. What will be logged to the console?

```js
const x = 6 % 2;
const y = x ? "One" : "Two";
console.log(y);
```

- [ ] undefined
- [ ] One
- [ ] true
- [x] Two

**Note:** `this question is same with Q46.`
[Reference ternary operator js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

#### Q95. How would you access the word It from this multidimensional array?

`let matrix = [["You","Can"],["Do","It"],["!","!","!"]];`

- [ ] `matrix[1[2]]`
- [x] `matrix[1][1]`
- [ ] `matrix[1,2]`
- [ ] `matrix[1][2]`

#### Q96. What does this code do?

```js
const animals = ["Rabbit", "Dog", "Cat"];
animals.unshift("Lizard");
```

- [x] It adds "Lizard" to the start of the animals array.
- [ ] It adds "Lizard" to the end of the animals array.
- [ ] It replaces "Rabbit" with "Lizard" in the animals array.
- [ ] It replaces "Cat" with "Lizard" in the animals array.

[Reference working with arrays](https://www.w3schools.com/js/js_arrays.asp)

#### Q97. What is the output of this code?

```js
let x = 6 + 3 + "3";
console.log(x);
```

- [x] 93
- [ ] 12
- [ ] 66
- [ ] 633

[Reference type coercion](https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/)

#### Q98. Which statement can take a single expression as input and then look through a number of choices until one that matches that value is found?

- [ ] else
- [ ] when
- [ ] if
- [x] switch

[Reference switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

#### Q99. Which statement prints "roar" to the console?

```js
var sound = "grunt";
var bear = { sound: "roar" };
function roar() {
  console.log(this.sound);
}
```

- [ ] `bear.bind(roar);`
- [ ] `roar.bind(bear);`
- [x] `roar.apply(bear);`
- [ ] `bear[roar]();`

1. [Reference Apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
2. [Reference this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
3. [Reference bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)

#### Q100. Which choice is a valid example of an arrow function, assuming c is defined in the outer scope?

- [ ] `a, b => { return c; }`
- [ ] `a, b => c`
- [ ] `{ a, b } => c`
- [x] `(a,b) => c`

[Reference arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

#### Q101. Which statement correctly imports this code from some-file.js?

```js
//some-file.js
export const printMe = (str) => console.log(str);
```

- [ ] `import printMe from './some-file';`
- [x] `import { printMe } from './some-file';`
- [ ] `import default as printMe from './some-file';`
- [ ] `const printMe = import './some-file';`

[Reference importing libraries in javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

#### Q102. What will be the output of this code?

```js
const arr1 = [2, 4, 6];
const arr2 = [3, 5, 7];

console.log([...arr1, ...arr2]);
```

- [ ] `[2, 3, 4, 5, 6, 7]`
- [ ] `[3,5,7,2,4,6]`
- [ ] `[3, 5, 7, 2, 4, 6]`
- [ ] `[[2, 4, 6], [3, 5, 7]]`
- [x] `[2, 4, 6, 3, 5, 7]`

[Reference spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

#### Q103. Which method call is chained to handle a successful response returned by `fetch()`?

- [ ] `done()`
- [x] `then()`
- [ ] `finally()`
- [ ] `catch()`

[Reference fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

#### Q104. Which choice is not an array method?

- [ ] `array.slice()`
- [ ] `array.shift()`
- [ ] `array.push()`
- [x] `array.replace()`

[Reference working with arrays](https://www.w3schools.com/js/js_arrays.asp)

#### Q105. Which JavaScript loop ensures that at least a singular iteration will happen?

- [x] do…while
- [ ] forEach
- [ ] while
- [ ] for

[Reference loops in js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)

#### Q106. What will be logged to the console?

```js
console.log(typeof "blueberry");
```

- [x] `string`
- [ ] `array`
- [ ] `Boolean`
- [ ] `object`

[Reference what is typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

#### Q107. What is the output that is printed when the div containing the text "Click Here" is clicked?

```html
//HTML Markup
<div id="A">
  <div id="B">
    <div id="C">Click Here</div>
  </div>
</div>
```

```js
//JavaScript
document.querySelectorAll("div").forEach((e) => {
  e.onclick = (e) => console.log(e.currentTarget.id);
});
```

- [x] C B A
- [ ] A
- [ ] C
- [ ] A B C

1. [Reference query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
2. [Reference events](https://developer.mozilla.org/en-US/docs/Web/Events)

#### Q108. What will this code log to the console?

```js
const myNumbers = [1, 2, 3, 4, 5, 6, 7];
const myFunction = (arr) => {
  return arr.map((x) => x + 3).filter((x) => x < 7);
};
console.log(myFunction(myNumbers));
```

- [ ] `[4,5,6,7,8,9,10]`
- [ ] `[4,5,6,7]`
- [ ] `[1,2,3,4,5,6]`
- [x] `[4,5,6]`

[Reference functions in javascript](https://www.w3schools.com/js/js_functions.asp)

#### Q109. What does this code print to the console?

```js
let rainForestAcres = 10;
let animals = 0;

while (rainForestAcres < 13 || animals <= 2) {
  rainForestAcres++;
  animals += 2;
}

console.log(animals);
```

- [ ] 2
- [ ] 4
- [x] 6
- [ ] 8

[Reference MDN JavaScript Looping code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code)

#### Q110. Which snippet could you add to this code to print "YOU GOT THIS" to the console?

```js
let cipherText = [..."YZOGUT QGMORTZ MTRHTILS"];
let plainText = "";

/* Missing Snippet */

console.log(plainText); //Prints YOU GOT THIS
```

- [ ] A

```js
for (let key of cipherText.keys()) {
  plainText += key % 2 === 0 ? key : " ";
}
```

- [ ] B

```js
for (let [index, value] of cipherText.entries()) {
  plainText += index % 2 !== 0 ? value : "";
}
```

- [x] C

```js
for (let [index, value] of cipherText.entries()) {
  plainText += index % 2 === 0 ? value : "";
}
```

- [ ] D

```js
for (let value of cipherText) {
  plainText += value;
}
```

1. [Reference MDN JavaScript Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
2. [Reference MDN JavaScript Array entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries)
3. [Reference MDN JavaScript Remainder/Modulo](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)

#### Q111. Which Pokemon will be logged to the console?

```js
var pokedex = ["Snorlax", "Jigglypuff", "Charmander", "Squirtle"];
pokedex.pop();
console.log(pokedex.pop());
```

- [x] Charmander
- [ ] Jigglypuff
- [ ] Snorlax
- [ ] Squirtle

**Explanation**: `The pop() method removes the last element from an array and returns that element. This method changes the length of the array.`

[Reference Array.pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

#### Q112. Which statement can be used to select the element from the DOM containing the text "The LinkedIn Learning library has great JavaScript courses" from this markup?

```html
<h1 class="content">LinkedIn Learning</h1>
<div class="content">
  <span class="content"
    >The LinkedIn Learning library has great JavaScript courses!</span
  >
</div>
```

- [ ] document.querySelector("div.content")
- [x] document.querySelector("span.content")
- [ ] document.querySelector(".content")
- [ ] document.querySelector("div.span")

#### Q113. Which value is not falsey?

- [x] `[]`
- [ ] `undefined`
- [ ] `0`
- [ ] `null`

[Reference Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

#### Q114. What line of code causes this code segment to throw an error?

```js
const lion = 1;
let tiger = 2;
var bear;

++lion;
bear += lion + tiger;
tiger++;
```

- [x] `line 5, because lion cannot be reassigned a value`
- [ ] `line 6, because the += operator cannot be used with the undefined variable bear`
- [ ] `line 5, because the prefix (++) operator does not exist in JavaScript`
- [ ] `line 3, because the variable bear is left undefined`

1. [Reference const in js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
2. [Reference TypeError: invalid assignment to const "x"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_const_assignment)

#### Q115. What will be the value of `result` after running this code?

```js
const person = { name: "Dave", age: 40, hairColor: "blue" };
const result = Object.keys(person).map((x) => x.toUpperCase());
```

- [ ] It will throw a TypeError.
- [ ] `["Name", "Age", "HairColor"]`
- [ ] `["DAVE", 40, "BLUE"]`
- [x] `["NAME", "AGE", "HAIRCOLOR"]`

1. [Reference Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
2. [Reference Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
3. [Reference String.prototype.toUpperCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)

#### Q116. Which snippet could you insert to this code to print "swim" to the console?

```js
let animals = ["eagle", "osprey", "salmon"];
let key = animal => animal === "salmon";

if(/* Insert Snippet Here */){
  console.log("swim");
}
```

- [ ] `animals.every(key)`
- [ ] `animals.some(key).length === 1`
- [ ] `animals.filter(key) === true`
- [x] `animals.some(key)`

[Reference Array.prototype.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

#### Q117. What is the output of this code?

```js
class RainForest {
  static minimumRainFall = 60;
}

let congo = new RainForest();
RainForest.minimumRainFall = 80;
console.log(congo.minimumRainFall);
```

- [x] `undefined`
- [ ] `None of these answers, as static is not a feature in Javascript.`
- [ ] `60`
- [ ] `80`

[Reference Classes static](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)

#### Q118. How can you attempt to access the property `a.b` on `obj` without throwing an error if a is undefined?

```js
let obj = {};
```

- [ ] `obj?.a.b`
- [x] `obj.a?.b`
- [ ] `obj[a][b]`
- [ ] `obj.?a.?b`

[Reference Optional chaining (?.)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

#### Q119. What happens when you run this code?

```js
if (true) {
  var x = 5;
  const y = 6;
  let z = 7;
}
console.log(x + y + z);
```

- [ ] It will throw a `ReferenceError` about `x`.
- [ ] It will print `18`.
- [ ] It will print `undefined`.
- [x] It will throw a `ReferenceError` about `y`.

[Reference let statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

#### Q120. What does this code print to the console?

```js
const x = [1, 2];
const y = [5, 7];
const z = [...x, ...y];
console.log(z);
```

- [x] `[1,2,5,7]`
- [ ] `[[1, 2], [5, 7]]`
- [ ] `[2,7]`
- [ ] `[2,1,7,5]`

[Reference spread syntax (...)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

#### Q121. Given this code, which statement will be evaluated as false?

```js
const a = { x: 1 };
const b = { x: 1 };
```

- [ ] `a['x'] === b['x']`
- [ ] `a != b`
- [x] `a === b`
- [ ] `a.x === b.x`

[Reference](http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html)

#### Q122. What will this code log to the console?

```js
console.log(typeof 41.1);
```

- [ ] `Nothing. It resuults in a ReferenceError.`
- [ ] `decimal`
- [ ] `float`
- [x] `number`

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#basic_usage)

#### Q123. What is the output of this code?

```js
let scores = [];
scores.push(1, 2);
scores.pop();
scores.push(3, 4);
scores.pop();
score = scores.reduce((a, b) => a + b);
console.log(score);
```

- [ ] `3`
- [x] `4`
- [ ] `6`
- [ ] `7`

1. [Reference Array.prototype.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
2. [Reference Array.prototype.pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
3. [Reference Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

#### Q124. What does this code print to the console?

```js
let bear = {
  sound: "roar",
  roar() {
    console.log(this.sound);
  },
};

bear.sound = "grunt";
let bearSound = bear.roar;
bearSound();
```

- [ ] `Nothing is printed to the console.`
- [ ] `grunt`
- [x] `undefined`
- [ ] `roar`

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

#### Q125. What is the output of this code?

```js
var cat = { name: "Athena" };

function swap(feline) {
  feline.name = "Wild";
  feline = { name: "Tabby" };
}

swap(cat);
console.log(cat.name);
```

- [ ] undefined
- [x] Wild
- [ ] Tabby
- [ ] Athena

#### Q126. What will this code output to the log?

```js
var thing;
let func = (str = "no arg") => {
  console.log(str);
};
func(thing);
func(null);
```

- [ ] null no arg
- [ ] no arg no arg
- [ ] null null
- [x] no arg null

#### Q127. What will this code print to the console?

```js
const myFunc = () => {
  const a = 2;
  return () => console.log("a is " + a);
};
const a = 1;
const test = myFunc();
test();
```

- [ ] a is 1
- [ ] a is undefined
- [ ] It won't print anything.
- [x] a is 2

#### Q128. What will this code print to the console?

```js
const myFunc = (num1, num2 = 2, num3 = 2) => {
  return num1 + num2 + num3;
};
let values = [1, 5];
const test = myFunc(2, ...values);
console.log(test);
```

- [x] 8
- [ ] 6
- [ ] 2
- [ ] 12

#### Q129. Which code would you use to access the Irish flag?

```js
var flagsJSON =
  '{ "countries" : [' +
  '{ "country":"Ireland" , "flag":"🇮🇪" },' +
  '{ "country":"Serbia" , "flag":"🇷🇸" },' +
  '{ "country":"Peru" , "flag":"🇵🇪" } ]}';

var flagDatabase = JSON.parse(flagsJSON);
```

- [ ] flagDatabase.countries[1].flag
- [x] flagDatabase.countries[0].flag
- [ ] flagDatabase[1].flag
- [ ] flagsJSON.countries[0].flag

#### Q130. Which snippet allows the acresOfRainForest variable to increase?

```js
let conservation = true;
let deforestation = false;
let acresOfRainForest = 100;
if (/* Snipped goes here */){
    ++acresOfRainForest;
}
```

- [x] conservation && !deforestation
- [ ] !deforestation && !conservation
- [ ] !conservation || deforestation
- [ ] deforestation && conservation || deforestation

#### Q131. Which of these evaluate to true?

- [x] Boolean("false")
- [ ] Boolean("")
- [ ] Boolean(0)
- [ ] Boolean(NaN)

#### Q132. How would you add a data item named animal with a value of sloth to local storage for the current domain?

- [ ] LocalStorage.setItem("animal","sloth");
- [ ] document.localStorage.setItem("animal","sloth");
- [ ] localStorage.setItem({animal:"sloth"});
- [x] localStorage.setItem("animal","sloth");

[Reference](https://blog.logrocket.com/localstorage-javascript-complete-guide/#setitem)

#### Q133. What value is printed to the console after this code execute?

```js
let cat = Object.create({ type: "lion" });
cat.size = "large";

let copyCat = { ...cat };
cat.type = "tiger";

console.log(copyCat.type, copyCat.size);
```

- [ ] tiger large
- [ ] lion undefined
- [x] undefined large
- [ ] lion large

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)

#### Q134. What does this code print to the console?

```js
let animals = [{ type: "lion" }, "tiger"];
let clones = animals.slice();

clones[0].type = "bear";
clones[1] = "sheep";

console.log(animals[0].type, clones[0].type);
console.log(animals[1], clones[1]);
```

- [x] bear bear
      tiger sheep
- [ ] lion bear
      sheep sheep
- [ ] bear bear
      tiger tiger
- [ ] lion bear
      tiger sheep

[Reference](https://blog.logrocket.com/localstorage-javascript-complete-guide/#setitem)

#### Q135. What will be the output of the following code?

```js
a=5;
b=4;
alert(a++(+(+(+b))));
```

- [ ] 18
- [ ] 10
- [x] 9
- [ ] 20

#### Q136. Which snippet could you add to this code to print "{"type": "tiger"}" to the console?

```js
let cat = { type: "tiger", size: "large" };

let json = /* Snippet here */;

console.log(json); // print {"type":"tiger"}
```

- [ ] `cat.toJSON("type");`
- [x] `JSON.stringify(cat, ["type"]);`
- [ ] `JSON.stringify(cat);`
- [ ] `JSON.stringify(cat, /type/);`

[Reference](https://www.w3schools.com/jsref/jsref_stringify.asp)

#### Q137. Which document method is not used to get a reference to a DOM node?

- [x] document.getNode();
- [ ] document.getElementsByClassName();
- [ ] document.querySelectorAll();
- [ ] document.querySelector();

[Reference](<https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById#:~:text=querySelector()%20and%20Document.,element%20objects%20in%20the%20DOM.>)

#### Q138. In JavaScript, all objects inherit a built-in property from a **\*\*\*\***\_\_\_**\*\*\*\***.

- [ ] node
- [ ] instance variable
- [x] prototype
- [ ] accessor

[Reference](https://www.freecodecamp.org/news/javascript-prototype-explained-with-examples/)

#### Q139. Which of the following are not server-side Javascript objects?

- [ ] Date
- [x] FileUpload
- [ ] Function
- [ ] All of the above

[Reference](https://docs.oracle.com/cd/E19957-01/816-6411-10/jsserv.htm#1035757)

#### Q140. What will be the output of the following code snippet?

```javascript
const obj1 = { first: 20, second: 30, first: 50 };
console.log(obj1);
```

- [ ] first: 30 , second: 50
- [x] first: 50 , second: 30
- [ ] first: 30 , second: 20
- [ ] None of the above

#### Q141. Which object in Javascript doesn’t have a prototype?

- [x] Base Object
- [ ] All objects have prototype
- [ ] None of the objects have prototype
- [ ] None of the above

[Reference](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)

#### Q142. What does … operator do in JS?

- [x] Used to spread iterables to individual elements
- [ ] Describe datatype of undefined
- [ ] No such operator exists
- [ ] None of the above

#### Q143. How to stop an interval timer in Javascript?

- [x] clearInterval
- [ ] clearTimer
- [ ] intervalOver
- [ ] None of the above

[Reference](https://www.interviewbit.com/javascript-mcq/)

#### Q144. What will be the output of the following code snippet?

```javascript
print(typeof NaN);
```

- [ ] Object
- [x] Number
- [ ] String
- [ ] None of the above

#### Q145. What will be the output of the following code snippet?

```javascript
<script type="text/javascript">a = 5 + "9"; document.write(a);</script>
```

- [ ] Compilation Error
- [ ] 14
- [ ] Runtime Error
- [x] 59

#### Q146. Which of the following methods can be used to display data in some form using Javascript?

- [ ] document.write()
- [ ] console.log()
- [ ] window.alert()
- [x] all of the above

#### Q147. What value is assigned to total after this code executes?

```javascript
function sum(num1, num2 = 2, num3 = 3) {
  return num1 + num2 + num3;
}
let values = [1, 5];
let total = sum(4, ...values);
```

- [x] 10
- [ ] 6
- [ ] 7
- [ ] 8

[Reference: Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

#### Q148. Which statement is applicable to the defer attribute of the HTML <script> tag?

- [x] defer allows the browser to continue processing the page while the script loads in the background.
- [ ] defer causes the script to be loaded from the backup content delivery network (CDN).
- [ ] defer blocks the browser from processing HTML below the tag until the script is completely loaded.
- [ ] defer lazy loads the script, causing it to download only when it is called by another script on the page.

[Reference: defer html script attribute](https://www.w3schools.com/tags/att_script_defer.asp)

#### Q149. Which method of a class is called to initialize an object of that class?

- [ ] init()
- [ ] create()
- [ ] new()
- [x] constructor()

[Reference: constructor method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)

#### Q150. Which expression evaluates to true?

- [ ] Boolean(NaN)
- [ ] Boolean(0)
- [x] Boolean("false")
- [ ] Boolean("")

[Reference: Boolean object](https://www.w3schools.com/js/js_booleans.asp)

#### Q151. How would you check if the word "pot" is in the word "potato"?

- [ ] "pot".indexOf("potato") !== -1
- [ ] "potato".includes("Pot")
- [x] "potato".includes("pot")
- [ ] "potato".contains("pot");

[Reference: String.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)

#### Q152. Which collection object allows a unique value to be inserted only once?

- [ ] Map
- [ ] Array
- [x] Set
- [ ] Object

[Reference: developer.mozilla Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

#### Q153. How would you change the color of this header to pink?

```javascript
<h2 id="cleverest">girls</h2>
```

- [ ] document.getElementByName("cleverest").style.color = "pink";
- [ ] document.getElementsByTagName("h2").style.color = "pink";
- [ ] document.getElementByName("h2").style.color = "pink";
- [x] document.getElementById("cleverest").style.color = "pink";

[Reference: W3Schools HTML DOM Style color Property](https://www.w3schools.com/jsref/prop_style_color.asp)

#### Q154. Which line is missing from this code if you expect the code to evaluate to true?

```js
var compare = function (test1, test2) {
  // Missing line
};

compare(1078, "1078"); // yields true
```

- [ ] `test1==test2;`
- [ ] return test1===test2;
- [x] return test1==test2;
- [ ] return test1!=test2;

[Reference: MDN Equality Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality)

#### Q155. What is the output of this code?

```js
if (true) {
  var first = "You";
}

function fScope() {
  var second = "got this!";
}
fScope();
console.log(first);
console.log(second);
```

- [ ] You  
       undefined
- [x] You  
       ReferenceError
- [ ] undefined  
       undefined
- [ ] You  
       got this!

[Reference: W3schools JS Scoping](https://www.w3schools.com/js/js_scope.asp)

#### Q156. What is the output for the code given below?

```js
console.log("hello" + "world" + "!");
```

- [x] helloworld!
- [ ] helloworld !
- [ ] hello world!
- [ ] hello world !

#### Q157. What is the output of this code?

```js
console.log(10 + 10);
```

- [ ] 10
- [x] 20
- [ ] 30
- [ ] 40

#### Q158. Events related to the browser window can be handled by?

- [ ] Onclicks
- [x] Window
- [ ] querySelector
- [ ] None of the above

[Reference: GeeksForGeeks](https://www.geeksforgeeks.org/javascript-course-quiz-1/)

#### Q159. How do you define a function in JavaScript?

- [x] function myFunction() {}
- [ ] def myFunction() {}
- [ ] var myFunction = () => {}
- [ ] func myFunction() {}

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

#### Q160. Your code is producing the error: TypeError: Cannot read property 'reduce' of undefined. What does that mean?

- [x] You are calling a method named reduce on an object that's declared but has no value.
- [ ] You are calling a method named reduce on an object that does not exist.
- [ ] You are calling a method named reduce on an empty array.
- [ ] You are calling a method named reduce on an object that has a null value.

#### Q161. Which of the following methods can be used to display data in some form using Javascript?

- [ ] document.write()
- [ ] console.log()
- [ ] window.alert()
- [x] all of the above

#### Q162. Which document method is not used to get a reference to a DOM node?

- [x] document.getNode();
- [ ] document.getElementsByClassName();
- [ ] document.querySelectorAll();
- [ ] document.querySelector();

#### Q163. Which of these is a valid variable name?

- [ ] 5thItem
- [x] firstName
- [ ] grand total
- [ ] function

#### Q164. What function is used in JavaScript to schedule a function to run after a specified number of milliseconds?

- [x] setTimeout()
- [ ] setInterval()
- [ ] delay()
- [ ] wait()

[Reference](https://www.w3schools.com/js/js_timing.asp)

#### Q165. Which of the following is a server-side Java Script object?

- [ ] Function
- [x] File
- [ ] FileUpload
- [ ] Date

[Reference](https://www.wscubetech.com/quiz-result.html)

#### Q166. Which statement best describes the var keyword's scope in JavaScript?

- [ ] Block scope
- [x] Function scope
- [ ] Global scope
- [ ] Instance scope

#### Q167. What will be logged to the console?

```js
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"), 0);
foo();
bar();
console.log("Third");
```

- [ ] Second, First, Third
- [x] First, Third, Second
- [ ] First, Second, Third
- [ ] Third, First, Second

#### Q168. What will be the output of running this code?

```js
function scream(words) {
  return words.toUpperCase() + "!!!";
}

scream("yay");
```

- [x] YAY!!!
- [ ] ReferenceError
- [ ] Undefined
- [ ] TypeError

## React.js

#### Q1. If you want to import just the Component from the React library, what syntax do you use?

- [ ] `import React.Component from 'react'`
- [ ] `import [ Component ] from 'react'`
- [ ] `import Component from 'react'`
- [x] `import { Component } from 'react'`

#### Q2. If a function component should always render the same way given the same props, what is a simple performance optimization available for it?

- [x] Wrap it in the `React.memo` higher-order component.
- [ ] Implement the `useReducer` Hook.
- [ ] Implement the `useMemo` Hook.
- [ ] Implement the `shouldComponentUpdate` lifecycle method.

#### Q3. How do you fix the syntax error that results from running this code?

```javascript
const person =(firstName, lastName) =>
{
  first: firstName,
  last: lastName
}
console.log(person("Jill", "Wilson"))
```

- [x] Wrap the object in parentheses.
- [ ] Call the function from another file.
- [ ] Add a return statement before the first curly brace.
- [ ] Replace the object with an array.

#### Q4. If you see the following import in a file, what is being used for state management in the component?

`import React, {useState} from 'react';`

- [x] React Hooks
- [ ] stateful components
- [ ] math
- [ ] class components

#### Q5. Using object literal enhancement, you can put values back into an object. When you log person to the console, what is the output?

```javascript
const name = "Rachel";
const age = 31;
const person = { name, age };
console.log(person);
```

- [ ] `{{name: "Rachel", age: 31}}`
- [x] `{name: "Rachel", age: 31}`
- [ ] `{person: "Rachel", person: 31}}`
- [ ] `{person: {name: "Rachel", age: 31}}`

#### Q6. What is the testing library most often associated with React?

- [ ] Mocha
- [ ] Chai
- [ ] Sinon
- [x] Jest

[Reference](https://jestjs.io)

#### Q7. To get the first item from the array ("cooking") using array destructuring, how do you adjust this line?

```javascript
const topics = ["cooking", "art", "history"];
```

- [ ] `const first = ["cooking", "art", "history"]`
- [ ] `const [] = ["cooking", "art", "history"]`
- [ ] `const [, first]["cooking", "art", "history"]`
- [x] `const [first] = ["cooking", "art", "history"]`

#### Q8. How do you handle passing through the component tree without having to pass props down manually at every level?

- [ ] React Send
- [ ] React Pinpoint
- [ ] React Router
- [x] React Context

[Reference](https://reactjs.org/docs/context.html)

#### Q9. What should the console read when the following code is run?

```javascript
const [, , animal] = ["Horse", "Mouse", "Cat"];
console.log(animal);
```

- [ ] Horse
- [x] Cat
- [ ] Mouse
- [ ] undefined

#### Q10. What is the name of the tool used to take JSX and turn it into createElement calls?

- [ ] JSX Editor
- [ ] ReactDOM
- [ ] Browser Buddy
- [x] Babel

#### Q11. Why might you use useReducer over useState in a React component?

- [ ] when you want to replace Redux
- [x] when you need to manage more complex state in an app
- [ ] when you want to improve performance
- [ ] when you want to break your production app

#### Q12. Which props from the props object is available to the component with the following syntax?

```javascript
<Message {...props} />
```

- [ ] any that have not changed
- [x] all of them
- [ ] child props
- [ ] any that have changed

#### Q13. Consider the following code from React Router. What do you call :id in the path prop?

```javascript
<Route path="/:id" />
```

- [ ] This is a route modal
- [x] This is a route parameter
- [ ] This is a route splitter
- [ ] This is a route link

#### Q14. If you created a component called Dish and rendered it to the DOM, what type of element would be rendered?

```javascript
function Dish() {
  return <h1>Mac and Cheese</h1>;
}

ReactDOM.render(<Dish />, document.getElementById("root"));
```

- [ ] `div`
- [ ] section
- [ ] component
- [x] `h1`

#### Q15. What does this React element look like given the following code? (Alternative: Given the following code, what does this React element look like?)

```javascript
React.createElement("h1", null, "What's happening?");
```

- [ ] `<h1 props={null}>What's happening?</h1>`
- [x] `<h1>What's happening?</h1>`
- [ ] `<h1 id="component">What's happening?</h1>`
- [ ] `<h1 id="element">What's happening?</h1>`

[Reference](https://www.geeksforgeeks.org/what-is-the-use-of-react-createelement/)

#### Q16. What property do you need to add to the Suspense component in order to display a spinner or loading state?

```javascript
function MyComponent() {
  return (
    <Suspense>
      <div>
        <Message />
      </div>
    </Suspense>
  );
}
```

- [ ] lazy
- [ ] loading
- [x] fallback
- [ ] spinner

[Reference](https://linguinecode.com/post/how-react-suspense-works)

#### Q17. How would you describe the message variable wrapped in curly braces below?

```javascript
const message = "Hi there";
const element = <p>{message}</p>;
```

- [ ] a JS function
- [ ] a JS element
- [x] a JS expression
- [ ] a JSX wrapper

#### Q18. What can you use to handle code splitting?

- [ ] `React.memo`
- [ ] `React.split`
- [x] `React.lazy`
- [ ] `React.fallback`

[Reference]()

#### Q19. When do you use `useLayoutEffect`?

- [ ] to optimize for all devices
- [ ] to complete the update
- [x] to change the layout of the screen
- [ ] when you need the browser to paint before the effect runs

[Source] (https://react.dev/reference/react/useLayoutEffect)
"useLayoutEffect is a version of useEffect that fires before the browser repaints the screen."

[Explanation]The correct answer to the question "When do you use useLayoutEffect?" is:

When you need to change the layout of the screen.

useLayoutEffect is used when you need to perform DOM mutations that rely on the updated layout of the elements. It allows you to make changes to the DOM synchronously before the browser performs its painting step. This can be useful when you need to measure or manipulate the layout, such as accessing element dimensions or positions, calculating scroll offsets, or performing other operations that require up-to-date layout information.

The other option provided as answer is not accurate:

"When you need the browser to paint before the effect runs" is not correct. The purpose of useLayoutEffect is to run the effect synchronously after the DOM updates but before the browser paints, allowing you to make layout-related changes before the visual rendering occurs.

**Explanation:**
`useLayoutEffect` gets executed _before_ the `useEffect` hook without much concern for DOM mutation. Even though the React hook `useLayoutEffect` is set after the `useEffect` Hook, it gets triggered first!

#### Q20. What is the difference between the click behaviors of these two buttons (assuming that this.handleClick is bound correctly)?

```javascript
A. <button onClick={this.handleClick}>Click Me</button>
B. <button onClick={event => this.handleClick(event)}>Click Me</button>
```

- [ ] Button A will not have access to the event object on click of the button.
- [ ] Button B will not fire the handler this.handleClick successfully.
- [ ] Button A will not fire the handler this.handleClick successfully.
- [x] There is no difference.

#### Q21. How do you destructure the properties that are sent to the Dish component?

```javascript
function Dish(props) {
  return (
    <h1>
      {props.name} {props.cookingTime}
    </h1>
  );
}
```

- [ ] `function Dish([name, cookingTime]) { return <h1>{name} {cookingTime}</h1>; }`
- [x] `function Dish({name, cookingTime}) { return <h1>{name} {cookingTime}</h1>; }`
- [ ] `function Dish(props) { return <h1>{name} {cookingTime}</h1>; }`
- [ ] `function Dish(...props) { return <h1>{name} {cookingTime}</h1>; }`

#### Q22. When might you use `React.PureComponent`?

- [ ] when you do not want your component to have props
- [ ] when you have sibling components that need to be compared
- [x] when you want a default implementation of `shouldComponentUpdate()`
- [ ] when you do not want your component to have state

[Reference](https://reactjs.org/docs/react-api.html#reactpurecomponent)

#### Q23. Why is it important to avoid copying the values of props into a component's state where possible?

- [ ] because you should never mutate state
- [ ] because `getDerivedStateFromProps()` is an unsafe method to use
- [x] because you want to allow a component to update in response to changes in the props
- [ ] because you want to allow data to flow back up to the parent

#### Q24. What is the children prop?

- [ ] a property that adds child components to state
- [x] a special property that JSX creates on components that contain both an opening tag and a closing tag, referencing it's contents.
- [ ] a property that lets you set an array as a property
- [ ] a property that lets you pass data to child elements

[Reference](https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx)

#### Q25. Which attribute is React's replacement for using innerHTML in the browser DOM?

- [ ] injectHTML
- [x] dangerouslySetInnerHTML
- [ ] weirdSetInnerHTML
- [ ] strangeHTML

[Reference](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)

#### Q26. Which of these terms commonly describe React applications?

- [x] declarative
- [ ] integrated
- [ ] closed
- [ ] imperative

[Reference](https://levelup.gitconnected.com/why-react-is-declarative-a300d1e930b7)

#### Q27. When using webpack, why would you need to use a loader?

- [ ] to put together physical file folders
- [x] to preprocess files
- [ ] to load external data
- [ ] to load the website into everyone's phone

#### Q28. A representation of a user interface that is kept in memory and is synced with the "real" DOM is called what?

- [x] virtual DOM
- [ ] DOM
- [ ] virtual elements
- [ ] shadow DOM

#### Q29. You have written the following code but nothing is rendering. How do you fix this problem?

```javascript
const Heading = () => {
  <h1>Hello!</h1>;
};
```

- [ ] Add a render function.
- [x] Change the curly braces to parentheses or add a return statement before the `h1` tag.
- [ ] Move the `h1` to another component.
- [ ] Surround the `h1` in a `div`.

#### Q30. To create a constant in JavaScript, which keyword do you use?

- [x] const
- [ ] let
- [ ] constant
- [ ] var

#### Q31. What do you call a React component that catches JavaScript errors anywhere in the child component tree?

- [ ] error bosses
- [ ] error catchers
- [ ] error helpers
- [x] error boundaries

[Reference](https://www.geeksforgeeks.org/react-js-error-boundaries/)

#### Q32. In which lifecycle method do you make requests for data in a class component?

- [ ] constructor
- [x] componentDidMount
- [ ] componentWillReceiveProps
- [ ] componentWillMount

[Reference](https://reactjs.org/docs/react-component.html#componentdidmount)

#### Q33. React components are composed to create a user interface. How are components composed?

- [ ] by putting them in the same file
- [x] by nesting components
- [ ] with webpack
- [ ] with code splitting

#### Q34. All React components must act like **\_** with respect to their props.

- [ ] monads
- [x] pure functions
- [ ] recursive functions
- [ ] higher-order functions

#### Q35. What is `[e.target.id]` called in this code snippet?

```javascript
const handleChange = (e) => {
  setState((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
};
```

- [ ] a computed property name
- [ ] a set value
- [x] a dynamic key
- [ ] a JSX code string

[Reference](https://www.geeksforgeeks.org/how-to-set-state-with-a-dynamic-key-name-in-reactjs/)

#### Q36. What is the name of this component?

```javascript
class Clock extends React.Component {
  render() {
    return <h1>Look at the time: {time}</h1>;
  }
}
```

- [x] Clock
- [ ] It does not have a name prop.
- [ ] React.Component
- [ ] Component

#### Q37. What is sent to an `Array.map()` function?

- [x] a callback function that is called once for each element in the array
- [ ] the name of another array to iterate over
- [ ] the number of times you want to call the function
- [ ] a string describing what the function should do

#### Q38. Why is it a good idea to pass a function to `setState` instead of an object?

- [ ] It provides better encapsulation.
- [ ] It makes sure that the object is not mutated.
- [ ] It automatically updates a component.
- [x] `setState` is asynchronous and might result in out of sync values.

[Reference](https://medium.com/@wisecobbler/using-a-function-in-setstate-instead-of-an-object-1f5cfd6e55d1)

**Explanation:** Because `this.props` and `this.state` may be updated asynchronously, you should not rely on their values for calculating the next state.

#### Q39. What package contains the render() function that renders a React element tree to the DOM?

- [ ] `React`
- [x] `ReactDOM`
- [ ] `Render`
- [ ] `DOM`

#### Q40. How do you set a default value for an uncontrolled form field?

- [ ] Use the `value` property.
- [x] Use the `defaultValue` property.
- [ ] Use the `default` property.
- [ ] It assigns one automatically.

#### Q41. What do you need to change about this code to get this code to run?

```js
const clock = (props) => {
  return <h1>Look at the time: {props.time}</h1>;
};
```

- [ ] Add quotes around the return value
- [ ] Remove `this`
- [ ] Remove the render method
- [x] Capitalize `clock`

[Reference](https://reactjs.org/docs/jsx-in-depth.html#html-tags-vs.-react-components)

**Explanation:** In JSX, lower-case tag names are considered to be HTML tags.

#### Q42. Which Hook could be used to update the document's title?

- [x] `useEffect(function updateTitle() { document.title = name + ' ' + lastname; });`
- [ ] `useEffect(() => { title = name + ' ' + lastname; });`
- [ ] `useEffect(function updateTitle() { name + ' ' + lastname; });`
- [ ] `useEffect(function updateTitle() { title = name + ' ' + lastname; });`

#### Q43. Which function from React can you use to wrap Component imports to load them lazily?

- [ ] `fallback`
- [ ] `split`
- [x] `lazy`
- [ ] `memo`

[Reference](https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52/)

#### Q44. How do you invoke setDone only when component mounts, using hooks?

```javascript
function MyComponent(props) {
  const [done, setDone] = useState(false);

  return <h1>Done: {done}</h1>;
}
```

- [ ] `useEffect(() => { setDone(true); });`
- [x] `useEffect(() => { setDone(true); }, []);`
- [ ] `useEffect(() => { setDone(true); }, [setDone]);`
- [ ] `useEffect(() => { setDone(true); }, [done, setDone]);`

#### Q45. Currently, `handleClick` is being called instead of passed as a reference. How do you fix this?

```javascript
<button onClick={this.handleClick()}>Click this</button>
```

- [ ] `<button onClick={this.handleClick.bind(handleClick)}>Click this</button>`
- [ ] `<button onClick={handleClick()}>Click this</button>`
- [x] `<button onClick={this.handleClick}>Click this</button>`
- [ ] `<button onclick={this.handleClick}>Click this</button>`

#### Q46. Which answer best describes a function component?

- [ ] A function component is the same as a class component.
- [x] A function component accepts a single props object and returns a React element.
- [ ] A function component is the only way to create a component.
- [ ] A function component is required to create a React component.

#### Q47. Which library does the `fetch()` function come from?

- [ ] FetchJS
- [ ] ReactDOM
- [x] No library. `fetch()` is supported by most browsers.
- [ ] React

#### Q48. What will happen when this useEffect Hook is executed, assuming name is not already equal to John?

```javascript
useEffect(() => {
  setName("John");
}, [name]);
```

- [ ] It will cause an error immediately.
- [ ] It will execute the code inside the function, but only after waiting to ensure that no other component is accessing the name variable.
- [x] It will update the value of name once and not run again until name is changed from the outside.
- [ ] It will cause an infinite loop.

#### Q49. Which choice will not cause a React component to rerender?

- [ ] if the component calls `this.setState(...)`
- [ ] the value of one of the component's props changes
- [ ] if the component calls `this.forceUpdate()`
- [x] one of the component's siblings rerenders

#### Q50. You have created a new method in a class component called handleClick, but it is not working. Which code is missing?

```javascript
class Button extends React.Component{

  constructor(props) {
    super(props);
    // Missing line
  }

  handleClick() {...}
}
```

- [ ] `this.handleClick.bind(this);`
- [ ] `props.bind(handleClick);`
- [ ] `this.handleClick.bind();`
- [x] `this.handleClick = this.handleClick.bind(this);`

#### Q51. React does not render two sibling elements unless they are wrapped in a fragment. Below is one way to render a fragment. What is the shorthand for this?

```javascript
<React.Fragment>
  <h1>Our Staff</h1>
  <p>Our staff is available 9-5 to answer your questions</p>
</React.Fragment>
```

- [ ] A

```javascript
<...>
  <h1>Our Staff</h1>
  <p>Our staff is available 9-5 to answer your questions</p>
</...>
```

- [ ] B

```javascript
<//>
  <h1>Our Staff</h1>
  <p>Our staff is available 9-5 to answer your questions</p>
<///>
```

- [x] C

```javascript
<>
  <h1>Our Staff</h1>
  <p>Our staff is available 9-5 to answer your questions</p>
</>
```

- [ ] D

```javascript
<Frag>
  <h1>Our Staff</h1>
  <p>Our staff is available 9-5 to answer your questions</p>
</Frag>
```

#### Q52. If you wanted to display the count state value in the component, what do you need to add to the curly braces in the `h1`?

```javascript
class Ticker extends React.component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return <h1>{}</h1>;
  }
}
```

- [x] this.state.count
- [ ] count
- [ ] state
- [ ] state.count

#### Q53. Per the following code, when is the Hello component assigned to greeting?

```javascript
const greeting = isLoggedIn ? <Hello /> : null;
```

- [ ] never
- [x] when `isLoggedIn` is true
- [ ] when a user logs in
- [ ] when the Hello function is called

#### Q54. In the following code block, what type is orderNumber?

```javascript
ReactDOM.render(<Message orderNumber="16" />, document.getElementById("root"));
```

- [x] string
- [ ] boolean
- [ ] object
- [ ] number

#### Q55. You have added a style property to the `h1` but there is an unexpected token error when it runs. How do you fix this?

```javascript
const element = <h1 style={ backgroundColor: "blue" }>Hi</h1>;
```

- [ ] `const element = <h1 style="backgroundColor: "blue""}>Hi</h1>;`
- [x] `const element = <h1 style={{backgroundColor: "blue"}}>Hi</h1>;`
- [ ] `const element = <h1 style={blue}>Hi</h1>;`
- [ ] `const element = <h1 style="blue">Hi</h1>;`

#### Q56. Which function is used to update state variables in a React class component?

- [ ] `replaceState`
- [ ] `refreshState`
- [ ] `updateState`
- [x] `setState`

#### Q57. Consider the following component. What is the default color for the star?

```javascript
const Star = ({ selected = false }) => (
  <Icon color={selected ? "red" : "grey"} />
);
```

- [ ] black
- [ ] red
- [x] grey
- [ ] white

#### Q58. What is the difference between the click behaviors of these two buttons(assuming that this.handleClick is not bound correctly)

```javascript
  A. <button onClick=this.handleClick>Click Me</button>
  B. <button onClick={event => this.handleClick(event)}>Click Me</button>
```

- [ ] `Button A will not have access to the event object on click of the button`
- [x] `Button A will not fire the handler this.handleClick successfully`
- [ ] `There is no difference`
- [ ] `Button B will not fire the handler this.handleClick successfully`

#### Q59. How would you add to this code, from React Router, to display a component called About?

- [x] A

```javascript
<Route path="/:id">
  {" "}
  <About />
</Route>
```

- [ ] B

```javascript
<Route path="/tid" about={Component} />
```

- [ ] C

```javascript
<Route path="/:id" route={About} />
```

- [ ] D

```javascript
<Route>
  <About path="/:id" />
</Route>
```

[Reference](https://reactrouter.com/en/main/components/route)

#### Q60. Which class-based component is equivalent to this function component?

```javascript
const Greeting = ({ name }) => <h1>Hello {name}!</h1>;
```

- [ ] A

```javascript
class Greeting extends React.Component {
  constructor() {
    return <h1>Hello {this.props.name}!</h1>;
  }
}
```

- [ ] B

```javascript
class Greeting extends React.Component {
  <h1>Hello {this.props.name}!</h1>;
}
```

- [x] C

```javascript
class Greeting extends React.Component {
  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }
}
```

- [ ] D

```javascript
class Greeting extends React.Component {
  render({ name }) {
    return <h1>Hello {name}!</h1>;
  }
}
```

#### Q61. Give the code below, what does the second argument that is sent to the render function describe?

```javascript
ReactDOM.render(
  <h1>Hi<h1>,
    document.getElementById('root')
)
```

- [x] where the React element should be added to the DOM
- [ ] where to call the function
- [ ] where the root component is
- [ ] where to create a new JavaScript file

#### Q62. Why should you use React Router's Link component instead of a basic `<a>` tag in React?

- [ ] The link component allows the user to use the browser's `Back` button.
- [ ] There is no difference--the `Link` component is just another name for the `<a>` tag.
- [ ] The `<a>` tag will cause an error when used in React.
- [x] The `<a>` tag triggers a full page reload, while the `Link` component does not.

#### Q63. What is the first argument, `x`, that is sent to the `createElement` function?

```javascript
React.createElement(x, y, z);
```

- [x] the element that should be created
- [ ] the order in which this element should be placed on the page
- [ ] the properties of the element
- [ ] data that should be displayed in the element

#### Q64. Which class-based lifecycle method would be called at the same time as this effect Hook?

```javascript
useEffect(() => {
  // do things
}, []);
```

- [ ] componentWillUnmount
- [x] componentDidMount
- [ ] render
- [ ] componentDidUpdate

[Reference](https://reactjs.org/docs/react-component.html#componentdidmount)

#### Q65. What is the name of the base component of this component?

```javascript
class Comp extends React.Component {
  render() {
    return <h1>Look at the time: {time}</h1>;
  }
}
```

- [ ] Comp
- [ ] h1
- [ ] React.Component
- [x] Component

#### Q66. When using a portal, what is the first argument?

```javascript
ReactDOM.createPortal(x, y);
```

- [ ] the current state
- [x] the element to render
- [ ] the App component
- [ ] the page

[Reference](https://reactjs.org/docs/portals.html)

#### Q67. What is `setCount`?

```javascript
const [count, setCount] = useState(0);
```

- [ ] the initial state value
- [ ] a variable
- [ ] a state object
- [x] a function to update the state

[Reference](https://reactjs.org/docs/hooks-state.html#:~:text=If%20we%20want%20to%20update%20the%20current)

#### Q68. What is the use of map function below?

```javascript
const database = [{ data: 1 }, { data: 2 }, { data: 3 }];
database.map((user) => <h1>{user.data}</h1>);
```

- [ ] gives a map of all the entries in database
- [x] returns a heading tag for every entry in the database containing it's data
- [ ] returns one heading tag for all the entries in database
- [ ] checks which entry in the database is suitable for heading tag

#### Q69. Describe what is happening in this code?

```javascript
const { name: firstName } = props;
```

- [ ] It is creating a new object that contains the same name property as the props object.
- [ ] It is assigning the value of the props object's firstName property to a constant called name.
- [ ] It is retrieving the value of props.name.firstName.
- [x] It is assigning the value of the props object's name property to a constant called firstName.

#### Q70. What is wrong with this code?

```javascript
const MyComponent = ({ names }) => (
  <h1>Hello</h1>
  <p>Hello again</p>
);
```

- [ ] React components cannot be defined using functions.
- [x] React does not allow components to return more than one element.
- [ ] The component needs to use the return keyword.
- [ ] String literals must be surrounded by quotes.

#### Q71. When using a portal, what is the second argument?

```javascript
ReactDOM.createPortal(x, y);
```

- [ ] the App component
- [ ] the page
- [ ] the current state
- [x] the DOM element that exists outside of the parent component

#### Q72. Given this code, what will be printed in the `<div>` tag?

```javascript
const MyComponent = ({ children }) => (
  <div>{children.length}</div>
);
...
<MyComponent>
<p>
  Hello <span>World!</span>
</p>
<p>Goodbye</p>
</MyComponent>
```

- [ ] It will produce an error saying "cannot read property "length" of undefined."
- [ ] 1
- [ ] undefined
- [x] 2

#### Q73. What is this pattern called?

```javascript
const [count, setCount] = useState(0);
```

- [ ] object destructuring
- [x] array destructuring
- [ ] spread operating
- [ ] code pushing

#### Q74. What is the first file loaded by the browser in a basic React project?

- [ ] src/App.js
- [ ] src/index.js
- [ ] public/manifest.json
- [x] public/index.html

#### Q75. The code below is rendering nothing and generates this error: "ReactDOM is not defined." How do you fix this issue?

```javascript
import React from "react";
import { createRoot } from "reactjs-dom";

const element = <h1>Hi</h1>;
// Note: error on the line below
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(element);
```

- [x] `createRoot(document.getElementById("root"));`
- [ ] `ReactDOM(element, document.getElementById("root"));`
- [ ] `renderDOM(element, document.getElementById("root"));`
- [ ] `DOM(element, document.getElementById("root"));`

#### Q76. In this component, how do you display whether the user was logged in or not?

```javascript
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is:
    </div>
  );
}
```

- [ ] `The user is loggedIn ? logged in : not logged in.`
- [ ] Write a function to check the login status.
- [ ] `The user is {isLoggedIn = "no"}.`
- [x] `The user is {isLoggedIn ? "logged in." : "not logged in"}.`

#### Q77. You are rendering a list with React when this warning appears in the console: "Warning: Each child in a list should have a unique 'key' prop." How do you fix this issue?

- [ ] Add a key prop with the same value to each item in the list
- [ ] Clear the console warnings
- [ ] Use the UseId hook to generate a unique key for each element in the list
- [x] When iterating over the list items, add a unique property to each list item.

#### Q78. How would you generate the boilerplate code for a new app that you are building to collect underpants?

- [ ] npm create-react-app collect-underpants
- [ ] npx start-app collect-underpants
- [ ] react new collect-underpants
- [x] npx create-react-app collect-underpants

[Source: React Docs](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)

#### Q79. Add the code that will fire the photon torpedoes when the button is clicked.

```javascript
class StarTrekkin extends React.Component {
  firePhotonTorpedoes(e) {
    console.log("pew pew");
  }
  render() {
    return; // Missing code
  }
}
```

- [ ] `<button onClick={firePhotonTorpedoes()}>Pew Pew</button>`
- [ ] `<button onClick={firePhotonTorpedoes}>Pew Pew</button>`
- [ ] `<button onClick={this.firePhotonTorpedoes()}>Pew Pew</button>`
- [x] `<button onClick={this.firePhotonTorpedoes}>Pew Pew</button>`

[Source: React Docs](https://reactjs.org/docs/handling-events.html)

#### Q80. What is the process of deciding whether an update is necessary?

- [ ] shadow DOM
- [ ] fiber
- [x] reconciliation
- [ ] setting state

#### Q81. React is an open-source project but is maintained by which company?

- [ ] Intuit
- [ ] Twitter
- [x] Facebook
- [ ] Snapchat

#### Q82. What command can you use to generate a React project?

- [ ] react-starter
- [x] create-react-app
- [ ] react-gen
- [ ] react-start

[hint](https://create-react-app.dev/)

#### Q83. What is the browser extension called that React developers use to debug applications?

- [x] React Developer Tools
- [ ] React Tooling Add-on
- [ ] React Codewatch
- [ ] React Debug

#### Q84. Which tool is not part of Create React App?

- [ ] React
- [x] jQuery
- [ ] webpack
- [ ] ReactDOM

#### Q85. What is the JavaScript syntax extension that is commonly used to create React elements?

- [ ] HTML
- [ ] JavaScriptX
- [x] JSX
- [ ] React JavaScript

#### Q86. How might you check property types without using Flow or TypeScript?

- [ ] Check Manually.
- [ ] Use `prop-helper`.
- [x] use `prop-types`.
- [ ] user `checker-types`.

#### Q87. How do you add an id of heading to the following h1 element?

```javascript
let dish = <h1>Mac and Cheese</h1>;
```

- [ ] `let dish = <h1 id={heading}>Mac and Cheese</h1>;`
- [x] `let dish = <h1 id="heading">Mac and Cheese</h1>;`
- [ ] `let dish = <h1 id:"heading">Mac and Cheese</h1>;`
- [ ] `let dish = <h1 class="heading">Mac and Cheese</h1>;`

#### Q88. What value of button will allow you to pass the name of the person to be hugged?

```javascript
class Huggable extends React.Component {
  hug(id) {
    console.log("hugging " + id);
  }
  render() {
    let name = "kitten";
    let button = // Missing code
    return button;
  }
}
```

- [ ] `<button onClick={(name) => this.hug(name)}>Hug Button</button>;`
- [ ] `<button onClick={this.hug(e, name)}>Hug Button</button>;`
- [ ] `<button onClick={(e) => hug(name, e)}>Hug Button</button>;`
- [x] `<button onClick={(e) => this.hug(name, e)}>Hug Button</button>;`

**Explanation:**
This question test knowledge of react class components. You need to use `this` in order to call methods declared inside class components.

#### Q89. What syntax do you use to create a component in React?

- [ ] a generator
- [x] a function or a class
- [ ] a service worker
- [ ] a tag

[Reference](https://reactjs.org/docs/components-and-props.html)

**Explanation:**
React Components are like functions that return HTML elements. Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Function components.

#### Q90. You want to disable a button so that it does not emit any events onClick. Which prop do you use to acomplish this?

- [ ] onBlur
- [ ] onPress
- [ ] defaultValue
- [x] disabled

#### Q91. In this function, which is the best way to describe the Dish component?

```javascript
function Dish() {
  return (
    <>
      <Ingredient />
      <Ingredient />
    </>
  );
}
```

- [ ] child component
- [x] parent component
- [ ] nested component
- [ ] sibling component

#### Q92. When does the componentDidMount function fire?

- [x] right after the component is added to the DOM
- [ ] before the component is added to the DOM
- [ ] right after the component is updated
- [ ] right after an API call

[Reference](https://reactjs.org/docs/react-component.html#componentdidmount)

#### Q93. What might you use webpack for in React development?

- [ ] to fetch remote dependencies used by your app
- [x] to split your app into smaller chunks that can be more easily loaded by the browser
- [ ] to format your code so that it is more readable
- [ ] to ensure your app is not vulnerable to code injection

#### Q94. When using the React Developer Tools Chrome extension, what does it mean if the React icon is red?

- [x] You are using the development build of React.
- [ ] You are using the production build of React.
- [ ] You are using webpack.
- [ ] You are using Create React App.

[Reference](https://teamtreehouse.com/community/hey-why-the-logo-of-react-developer-tools-appears-in-red)

#### Q95. How would you modify the constructor to fix this error: "ReferenceError: Must call super constructor in derived class before accessing 'this'..."?

```javascript
class TransIsBeautiful extends React.Component {
  constructor(props){
  // Missing line
  console.log(this) ;
  }
  ...
}
```

- [ ] render(props);
- [x] super(props);
- [ ] super(this);
- [ ] this.super();

#### Q96. Which language can you not use with React?

- [x] Swift.
- [ ] JSX.
- [ ] Javascipt.
- [ ] TypeScript.

#### Q97. This code is part of an app that collects Pokemon. How would you print the list of the ones collected so far?

```javascript
constructor(props) {
    super(props);
    this.state = {
        pokeDex: []
    };
}
```

- [ ] console.log(props.pokeDex);
- [ ] console.log(this.props.pokeDex);
- [ ] console.log(pokeDex);
- [x] console.log(this.state.pokeDex);

[Reference](https://www.digitalocean.com/community/tutorials/how-to-manage-state-on-react-class-components#step-3-setting-state-from-a-static-value)

#### Q98. What would be the result of running this code?

```javascript
function add(x = 1, y = 2) {
  return x + y;
}

add();
```

- [ ] null
- [x] 3
- [ ] 0
- [ ] undefined

![image](https://user-images.githubusercontent.com/62549240/160531605-bf8790d5-5eb9-4291-a9bd-4232f2fd7b6e.png?raw=png)

Explanation: function that called without parameter will use its param default value, thus x will always be default to 1 and y will always be default to 2.

#### Q99. Why might you use a React.ref?

- [ ] to refer to another JS file
- [ ] to bind the function
- [ ] to call a function
- [x] to directly access the DOM node

[Reference](https://reactjs.org/docs/refs-and-the-dom.html)

#### Q100. What pattern is being used in this code block?

```javascript
const { tree, lake } = nature;
```

- [ ] function defaults
- [ ] array destructuring
- [ ] PRPL pattern
- [x] destructuring assignment

[Reference](https://javascript.info/destructuring-assignment)

#### Q101. How would you correct this code block to make sure that the sent property is set to the Boolean value false?

```javascript
ReactDom.render(
  <Message sent=false />,
  document.getElementById("root")
);
```

- [x] A

```javascript
<Message sent={false} />,
```

- [ ] B

```javascript
ReactDom.render(<Message sent="false" />, document.getElementById("root"));
```

- [ ] C

```javascript
<Message sent="false" />,
```

- [ ] D

```javascript
ReactDom.render(<Message sent="false" />, document.getElementById("root"));
```

[Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component)

#### Q102. This code is part of an app that collects Pokemon. The useState hook below is a piece of state holding onto the names of the Pokemon collected so far. How would you access the collected Pokemon in state?

```javascript
const PokeDex = (props) => {
  const [pokeDex, setPokeDex] = useState([]);
  /// ...
};
```

- [ ] props.pokeDex
- [ ] this.props.pokeDex
- [ ] setPokeDex()
- [x] pokeDex

Explanation: useState always return an array with two values, the state itself (on first value) and the set function that lets you update the state (on second value)
[useState Reference](https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)

#### Q103. What would you pass to the onClick prop that will allow you to pass the initName prop into the greet handler?

```javascript
const Greeting = ({ initName }) => {
  const greet = (name) => console.log("Hello, " + name + "!");
  return <button onClick={ ... }>Greeting Button </button>
}
```

- [ ] hug
- [ ] this.hug(initName)
- [ ] (name) => this.hug(name)
- [x] () => hug(initName)

Explanation: Apparently the question misstyped `greet` as `hug`. Putting this aside, we can still learn from this question.

- In a function, the global object is the default binding for `this`. In a browser window the global object is [object Window].
  This is a functional Component, so `this` from `this.hug` actually refers to browser window.
  Since it is a functional component, we can directly refer to hug without using `this`.
- To pass a handler to onClick, we should always pass a function rather than execute a function. So we need to use callback here.
  `initName` is available in Greeting's function scope, so we can directly supply as an argument to hug().

#### Q104. What is the name of the compiler used to transform JSX into JavaScript?

- [x] Babel
- [ ] JSX Editor
- [ ] Browser Buddy
- [ ] ReactDOM

[JSX Transform with Babel](https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)

#### Q105. Which hook is used to prevent a function from being recreated on every component render?

- [x] useCallback
- [ ] useMemo
- [ ] useRef
- [ ] useTransition

[React Hooks useCallback docuementation](https://react.dev/reference/react/useCallback)

#### Q106. Why might you use the `useRef` hook?

- [ ] To bind the function
- [ ] To call a function
- [x] To directly access a DOM
- [ ] To refer to another JS file

[Reference](https://www.smashingmagazine.com/2020/11/react-useref-hook/)

#### Q107. Which of the following is required to use React?

- [x] JavaScript
- [ ] React Router
- [ ] Redux
- [ ] Prop-Types

[Reference](https://reactjs.org/tutorial/tutorial.html#:~:text=What%20Is%20React%3F,of%20code%20called%20%E2%80%9Ccomponents%E2%80%9D.&text=We'll%20get%20to%20the%20funny%20XML%2Dlike%20tags%20soon.)

#### Q108. What is the correct way to get a value from context?

- [ ] const value = useContext(MyContext.Consumer)
- [ ] const value = useContext(MyContext.Provider)
- [x] const value = useContext(MyContext)
- [ ] const value = useContext({value: "intiial value"})

[Reference](https://reactjs.org/docs/hooks-reference.html#usecontext)

#### Q109. Why is ref used?

- [ ] to bind function
- [ ] to call function
- [x] to directly access DOM node
- [ ] to refer to another JS file

[Reference](https://reactjs.org/docs/refs-and-the-dom.html#when-to-use-refs)

#### Q110. Choose the method which should be overridden to stop the component from updating?

- [ ] componentDidMount
- [ ] componentDidUpdate
- [ ] willComponentUpdate
- [x] shouldComponentUpdate

[Reference](https://reactjs.org/docs/react-component.html#shouldcomponentupdate)

#### Q111. What is the functionality of a “webpack” command?

- [ ] Runs react local development server
- [ ] Transfers all JS files to down into one file
- [ ] A module builder
- [x] All of the above

#### Q112. Choose the method which is not a part of ReactDOM?

- [ ] ReactDOM.createPortal()
- [ ] ReactDOM.hydrate()
- [x] ReactDOM.destroy()
- [ ] ReactDOM.findDOMnode()

#### Q113. In react, the key should be?

- [x] Unique among his siblings
- [ ] Unique in DOM
- [ ] Does not requires to be unique
- [ ] all of the above

[Reference](https://reactjs.org/docs/lists-and-keys.html#keys)

#### Q114. Which company developed ReactJS?

- [ ] Google
- [x] Meta (ex Facebook)
- [ ] Apple
- [ ] Twitter

[Reference](https://github.com/facebook/react)

#### Q115. Choose the library which is most often associated with react?

- [ ] Chai
- [ ] Sinon
- [x] Jest
- [ ] Mocha

[Reference](https://reactjs.org/docs/testing-recipes.html)

#### Q116. What of the following is used in React.js to increase performance?

- [ ] Original DOM
- [x] Virtual DOM
- [ ] Both of the above
- [ ] None of the above

[Reference](https://reactjs.org/docs/optimizing-performance.html)

#### Q117. Among The following options, choose the one which helps react for keeping their data uni-directional?

- [ ] DOM
- [x] flux
- [ ] JSX
- [ ] Props

[Reference](https://reactjs.org/blog/2014/05/06/flux.html)

#### Q118. Which choice is a correct refactor of the Greeting class component into a function component?

```javascript
class Greeting extends React.Component {
  render() {
    return <h1>Hello {this.props.name}!<h1>;
  }
}
```

- [ ] `const Greeting = (name) => <h1>{name}</h1>`
- [ ] `function Greeting(name){return <h1>{name}</h1>;}`
- [ ] `const Greeting = props => { <h1>{props.name}</h1> }`
- [x] `const Greeting = ({ name }) => <h1>Hello {name}</h1>;`

#### Q119. Why is the `waitlist` not updating correctly?

```javascript
const Waitlist = () => {
  const [name, setName] = useState("");
  const [waitlist, setWaitlist] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault();
    waitlist.push(name);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit">Add to waitlist</button>
      </form>

      <ol>
        {waitlist.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ol>
    </div>
  );
};
```

- [x] `waitlist` is being mutated directly. Use the `setWaitlist` function instead to update the waitlist state.
- [ ] The form is reloading the page each time `Add to waitlist` is clicked.
- [ ] The `Add to waitlist` button is missing a click handler.
- [ ] There are likely repeated names inside of the `waitlist` array.

[Reference](https://reactjs.org/docs/react-component.html#setstate)

#### Q120. What is the pattern that is used in the Context.Consumer below?

<Context.Consumer>
{(isLoggedIn)=><b>{isLoggedIn ? "Online" : "Offline"}</b>}
</Context.Consumer>

- [ ] higher-order component
- [ ] wish component
- [x] Render Props
- [ ] setup Componet

#### Q121. In React.js which one of the following is used to create a class for Inheritance ?

- [ ] Create
- [x] Extends
- [ ] Inherits
- [ ] Delete

[Reference](https://www.geeksforgeeks.org/react-js-quiz-set-1/)

#### Q122. What is the purpose of render() in React.js?

- [ ] To replace the existing markup
- [ ] To update the existing markup
- [x] Both of the above
- [ ] None of the above

[Reference](https://www.geeksforgeeks.org/explain-the-purpose-of-render-in-reactjs/)

#### Q123. What is the use of super(props) in React.js?

- [ ] To call the constructor of the parent class
- [ ] To initialize this.props in the constructor
- [x] Both of the above
- [ ] None of the above

[Reference](https://www.geeksforgeeks.org/what-is-the-use-of-superprops/)

#### Q124. What is Redux in React.js?

- [x] A state container for JavaScript apps
- [ ] A tool for building UI components
- [ ] Both of the above
- [ ] None of the above

[Reference](https://www.freecodecamp.org/news/what-is-redux-store-actions-reducers-explained/)

#### Q125. What is the purpose of the virtual DOM in React.js, and how does it improve performance in web applications??

- [ ] The virtual DOM is used to store user authentication data securely.
- [ ] The virtual DOM is a backup copy of the actual DOM, created for debugging purposes.
- [x] The virtual DOM is a lightweight representation of the actual DOM, and it helps improve performance by minimizing direct manipulation of the real DOM.
- [ ] The virtual DOM is a database used to store component states.

[Reference](https://medium.com/@vinaynkokate/demystifying-dynamic-web-applications-understanding-the-dom-and-web-browser-interactions-cc1b113adfa)

#### Q126. You run the following code and get this error message: "invalid hook call." what is wrong with the code?

```javascript
import React from "react";

const [poked, setPoked] = React.useState(false);

function PokeButton() {
  return (
    <button onClick={() => setPoked(true)}>
      {poked ? "You have left a poke." : "Poke"}
    </button>
  );
}
```

- [x] The useState call needs to be called inside of the PokeButton component.
- [ ] The react package is likely not installed correctly.
- [ ] useState is not imported correctly. Import useState directly instead of importing react.
- [ ] PokeButton is a pure function and therefore cannot have any local state.

#### Q127. A colleague comes to you for help on a react component. They say that the poke button renders correctly, however when the button is clicked, this error is shown: "setPoked is not defined". What is wrong with their code?

```javascript
function PokeButton() {
  const { poked, setPoked } = useState(false);
  return (
    <button onclick={() => setPoked(true)}>
      {poked ? "You have left a poke." : "Poke"}
    </button>
  );
}
```

- [ ] onClick prop should be onclick.
- [ ] The click handler passed to the onClick prop is inlined. Move this handler into a variable outside of JSX.
- [x] They use object destructructing instead of array destructructing. Wrap the poked and setPoked values in an array.
- [ ] poked and setPoked are not destructured in the correct order.

#### Q128. This component is loaded dynamically. What should you replace XXXX with to complete the code?

```javascript
const OtherComponent = React.lazy(() => import("./OtherComponent.js"));

function MyComponent() {
  return (
    <XXXX fallback={<spinner />}>
      <OtherComponent />
    </XXXX>
  );
}
```

- [ ] Component
- [ ] Fragment
- [x] Suspense
- [ ] Lazy

#### Q129. Elements in lists in React should have \_**\_ that are \_\_\_** .

- [x] keys ; unique
- [ ] keys ; indexes
- [ ] style ; inline
- [ ] values ; not-null
      [Source: React Docs](https://legacy.reactjs.org/docs/lists-and-keys.html)

#### Q130. You want to memorize a callback function so you ensure that React does not recreate the function at each render. Which hook would you use to accomplish this?

- [ ] useRef
- [ ] useMemo
- [ ] memo
- [x] useCallback

[Source: CodeDamn](https://codedamn.com/news/reactjs/usememo-and-usecallback-hooks)

#### Q131. You want to perform a network operation as the result of a change to a component's state named userInput. what would you replace XXXX with?

```javascript
useEffect(callNetworkFunc, XXXX);
```

- [x] [userInput]
- [ ] userInput
- [ ] undefined
- [ ] []

#### Q132. When is the Hello component displayed?

```javascript
<div>{isLoggedIn ? <Hello /> : null}</div>
```

- [ ] when isLoggedIn is false
- [x] when isLoggedIn is true
- [ ] when isLoggedIn is false and the Hello function is invoked
- [ ] never

#### Q133. When do you use `useLayoutEffect`?

- [ ] to optimize for all devices
- [ ] to complete the update
- [x] to change the layout of the screen
- [ ] when you need the browser to paint before the effect runs

#### Q134. What is the difference between state and props in React?

- [ ] Props are set by the parent component, state is set by the child component
- [x] Props are passed to a component, state is managed within the component
- [ ] Props can be updated, state cannot be updated
- [ ] There is no difference - props and state are the same

#### Q135. Which language can you not use with React?

- [x] Swift.
- [ ] JSX.
- [ ] Javascipt.
- [ ] TypeScript.

#### Q136. Which answer best describes a function component?

- [ ] A function component is the same as a class component.
- [x] A function component accepts a single props object and returns a React element.
- [ ] A function component is the only way to create a component.
- [ ] A function component is required to create a React component.

#### Q137. Which library does the `fetch()` function come from?

- [ ] FetchJS
- [ ] ReactDOM
- [x] No library. `fetch()` is supported by most browsers.
- [ ] React

### Q138. In React, what is the purpose of the `key` prop when rendering a list of components

- [ ] The `key` prop is used to provide a unique identifier for the component.
- [ ] The `key` prop is used to define the color of the component.
- [ ] The `key` prop is required to render a list of components.
- [x] The `key` prop is used by React to optimize updates and identify which items have changed or been added/removed in the list.

#### Q139. What is the primary function of React Router?

- [ ] React Router is used for fetching data from APIs.
- [ ] React Router is used to create animations in React applications.
- [ ] React Router is used for managing state in React components.
- [x] React Router is used for adding navigation and routing to React applications, allowing users to navigate between different views or pages.

#### Q140. When should you use Redux in a React application?

- [ ] Redux is always required in React applications.
- [ ] Redux should be used when you need to fetch data from APIs.
- [ ] Redux is used for creating user interfaces but not for state management.
- [x] Redux is typically used when you have complex state management needs, such as sharing state between multiple components or handling deeply nested state.

#### Q141. What is the use of React hooks?

- [ ] To optimize React apps for mobile devices
- [ ] To add visual effects to React components.
- [x] To allow using state and lifecycle methods in function components
- [ ] To integrate with external UI libraries like Bootstrap

#### Q142. How can you pass data through a React component tree without having to pass props down manually at every level?

- [x] By using React context
- [ ] By using redux
- [ ] By using react router
- [ ] By using react lifecycle methods
