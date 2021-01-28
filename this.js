// this refers current object
const person1 = {
  name: "sam",
  sayName: function () {
    console.log(this.name);
  },
};

person1.sayName(); //sam

// it's not bind this here because this is refers global
const bound = person1.sayName;
bound(); //undefined

const bound1 = person1.sayName.bind(person1);
bound1(); // sam

// not use arrow in methods because
// since arrow functions close over the this of the lexically enclosing context
const person = {
  name: "sam",
  sayName: () => {
    console.log(this.name);
  },
};

person.sayName(); //undefined

const log = person.sayName;
log(); //undefined

// explain this in every scenario

1; // first scenario- this refers current object

let personObj = {
  firstName: "John",
  lastName: "sin",
  fullName: function () {
    //  here this refers current object
    console.log(this.firstName + this.lastName);
    // we could have written like this way
    console.log(personObj.firstName + personObj.lastName);
  },
};

personObj.fullName(); // Johnsin

// The this reference ALWAYS refers to (and holds the value of) an
// object—a singular object—and
// it is usually used inside a function or a method, although
// it can be used outside a function in the global scope.

// when we use strict mode, this holds the value of undefined in global functions
// and in anonymous functions that are not bound to any object.

2; // this refers in global scope scenario
fName = "Lilly";
lName = "Jasmine";

function showFullName() {
  // here this refers window object functions and variables defined in global scope
  // because the showFullName () function is defined in the global scope, just like the fName and lName
  console.log(this.fName + this.lName);
}

var personName = {
  firstName: "Jock",
  lastName: "Sparrow",
  showFullName: function () {
    //  here this refers person object
    console.log(this.firstName + this.lastName);
  },
};

showFullName(); //LilyJasmine
// window ia object that all global variables and functions defined
// write html script it will executes
// window.showFullName()
// "this" inside the showFullName () method that is defined inside the person object still refers to the person object
personName.showFullName(); // JockSparrow

// if we invoke showFullName with different object
var anotherPerson = {
  firstName: "Robin",
  lastName: "Khan",
};
// we can do apply method to set this to that value
personName.showFullName.apply(anotherPerson); // RobinKhan

var p = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
var p1 = {
  firstName: "Mary",
  lastName: "Doe",
};
console.log(p.fullName.apply(p1)); // Mary Doe

// Fix this when used in a method passed as a callback
//when you want this refers to another object and refers current object that time we can use apply() or call() or bind()

// Fix inside closures
let play = {
  tournament: "The Masters",
  data: [
    { name: "T. Woods", age: 37 },
    { name: "P. Mickelson", age: 43 },
  ],
  playing: function () {
    // this refers play obj
    // it is working when write arrow function here this bound automatically
    this.data.forEach((person) => {
      console.log(person.name + " playing " + this.tournament);
    });
    // here not worked this because this refers window obj
    // this inner function cannot access outer functions this
    this.data.forEach(function (p) {
      console.log(p.name + " playing " + this.tournament);
    });
    // to fix inside anonymous function set this to another value before writing function
    let that = this;
    this.data.forEach(function (p) {
      console.log(p.name + " playing " + that.tournament);
    });
  },
};
play.playing(); // T. Woods playing The Masters
                // P. Mickelson playing The Masters
                // T. Woods playing undefined
                // P. Mickelson playing undefined
                // T. Woods playing The Masters
                // P. Mickelson playing The Masters

// Fix this when method is assigned to a variable
// This data variable is a global variable
let data = [
  { name: "Samantha", age: 12 },
  { name: "Alexis", age: 14 },
];

let user = {
  // this data variable is a property on the user object
  data: [
    { name: "T. Woods", age: 37 },
    { name: "P. Mickelson", age: 43 },
  ],
  showData: function (event) {
    var randomNum = ((Math.random () * 2 | 0) + 1) - 1; // random number between 0 and 1
console.log(this.data)
    // This line is adding a random person from the data array to the text field
    console.log(this.data[randomNum].name + " " + this.data[randomNum].age);
  },
};

// Assign the user.showData to a variable
var showUserData = user.showData;

// When we execute the showUserData function, the values printed to the console are from the global data array, not from the data array in the user object
//
showUserData(); // Samantha 12 (from the global data array)
// we can use bind to the user object
var showUserData = user.showData.bind(user);

showUserData() // P. Mickelson 43