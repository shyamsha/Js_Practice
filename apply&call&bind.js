//call and apply are used to borrow methods
// call and apply are used to change context of this value
function greet(name) {
  console.log(`Hello, ${name}! My name is ${this.name}.`);
}

let person23 = {
  name: "John",
};

greet.call(person23, "Alice"); // Output: Hello, Alice! My name is John.

// apply
function add(a, b) {
  return a + b;
}

let numbers = [1, 2];

console.log(add.apply(null, numbers)); // Output: 3

// bind() method
// bind allow us to easily set this value which specific object bound to this when method invoked
// some times this is not bounded to method
let person = {
  name: "syam",
  showName: function () {
    console.log(this.name);
  },
};

let person1 = {
  name: "kumar",
  show: function () {
    console.log(this.name);
  },
};

let syam1 = person.showName.bind(person);
// bind allow us borrow methods
let syam = person.showName.bind(person1);

syam(); //kumar
// we bound to specific object

let data = [{ name: "saM", age: 28 }];

let personObj = {
  data: [{ name: "sam", age: 29 }],
  showPerson: function () {
    let random = (Math.random() * 1) | 0;
    console.log(this.data[random].age);
  },
};

let user = personObj.showPerson.bind(personObj);

user(); // 29

function assign(gender, age, name) {
  if (age > 25) {
    return "Hello, " + "Mr " + name + ".";
  } else {
    return "Hey, " + name + ".";
  }
}

let greet = assign.bind(null, "male", 45);
// we can use bind pass function parameters
console.log(greet("Syam"));

// apply and call methods are same as bind but apply take array of arguments ex.apply(obj,[1,2])
// call take arguments ex.call[obj,1,2]

// set this value to apply or call
var avgScore = "Global";

function avg(scores) {
  var sum = scores.reduce(function (previous, current, index, array) {
    return previous + current;
  });
  this.avgScore = sum / scores.length;
}

var gameController = {
  scores: [20, 34, 55, 46, 77],
  avgScore: null, // fill this value use this function
};
// if we executes this function "this" inside function bound to global window object
avg(gameController.scores);
// console.log(window.avgScore) // 46.4
console.log(gameController.avgScore); // null

// we use call method use here this bound to gameController obj
avg.call(gameController, gameController.scores);
console.log(gameController.avgScore); // 46.4

// apply method usage
var clientData = {
  id: "094545",
  fullName: "Not Set",
  // setUserName is a method on the clientData object
  setUserName: function (firstName, lastName) {
    // this refers to the fullName property in this object
    this.fullName = firstName + " " + lastName;
  },
};
function getUserInput(firstName, lastName, callback, callbackObj) {
  // The use of the Apply method below will set the "this" value to callbackObj
  callback.apply(callbackObj, [firstName, lastName]);
}

getUserInput("shyam", "kumar", clientData.setUserName, clientData);

console.log(clientData.fullName);

// Borrowing Functions with Apply and Call

var anArrayLikeObj = {
  0: "Martin",
  1: 78,
  2: 67,
  3: ["Letta", "Marieta", "Pauline"],
  length: 4,
};

var newArray = Array.prototype.slice.call(anArrayLikeObj, 0);
// we barrow the obj in call and using array method
console.log(newArray);

console.log(
  Array.prototype.indexOf.call(anArrayLikeObj, "Martin") === -1 ? false : true
);
// Try using an Array method without the call () or apply () gives error
// console.log (anArrayLikeObj.indexOf ("Martin") === -1 ? false : true); // error
console.log(Array.prototype.reverse.call(anArrayLikeObj));
// we can use array methods same way
function transitionTo(name) {
  // Because the arguments object is an array-like object
  // We can use the slice () Array method on it
  // The number "1" parameter means: return a copy of the array from index 1 to the end. Or simply: skip the first item

  var args = Array.prototype.slice.call(arguments, 1);

  // I added this bit so we can see the args value
  console.log(args);

  // I commented out this last line because it is beyond this example
  //doTransition(this, name, this.updateURL, args);
}

// Because the slice method copied from index 1 to the end, the first item "contact" was not returned
transitionTo("contact", "Today", "20"); // ["Today", "20"]

// We do not define the function with any parameters, yet we can get all the arguments passed to it
function doSomething() {
  var args = Array.prototype.slice.call(arguments);
  console.log(args);
}

doSomething("Water", "Salt", "Glue"); // ["Water", "Salt", "Glue"]

// Use Apply () to Execute Variable-Arity Functions
var allNumbers = [23, 11, 34, 56];
// We cannot pass an array of numbers to the the Math.max method like this
console.log(Math.max(allNumbers)); // NaN

var allNumbers = [23, 11, 34, 56];
// We cannot pass an array of numbers to the the Math.max method like this
console.log(Math.max.apply(null, allNumbers)); // 56
// the fist argument to apply () sets the “this” value, but “this” is not used in the Math.max () method, so we pass null.

var students = [
  "Peter Alexander",
  "Michael Woodruff",
  "Judy Archer",
  "Malcolm Khan",
];

// No specific parameters defined, because ANY number of parameters are accepted
function welcomeStudents() {
  var args = Array.prototype.slice.call(arguments);

  var lastItem = args.pop();
  console.log("Welcome " + args.join(", ") + ", and " + lastItem + ".");
}

welcomeStudents.apply(null, students);
// Welcome Peter Alexander, Michael Woodruff, Judy Archer, and Malcolm Khan.

function displayThisValue(param1, param2) {
  console.log(this.value, param1, param2);
}

const obj = {
  value: 10,
};
const valueArr = [20, 30];

// No context set
displayThisValue(20, 30); // undefined, 20, 30

// 'obj' is set as the context using 'call'
displayThisValue.call(obj, ...valueArr); // 10, 20, 30

// 'obj' is set as the context using 'apply'
displayThisValue.apply(obj, valueArr); // 10, 20, 30

// No context set
setTimeout(displayThisValue, 1000, ...valueArr); // undefined, 20, 30

// 'obj' is set as the context using 'bind'
setTimeout(displayThisValue.bind(obj), 1000, ...valueArr); // 10, 20, 30
setTimeout(displayThisValue.bind(obj, ...valueArr), 1000); // 10, 20, 30
