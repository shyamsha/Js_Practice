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
    //  here this refers person object but
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
    var randomNum = ((Math.random() * 2) | 0) + 1 - 1; // random number between 0 and 1
    console.log(this.data);
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

showUserData(); // P. Mickelson 43

// call is a function that help you to change context of invoking function
// it helps you replace value of this inside function whatever value you want
// it takes arguments

let user1 = {
  fName: "syam",
  lName: "kumar",
  sayName: function (n, s) {
    console.log(this.fName + this.lName + n + s);
  },
};
let fullN = {
  fName: "sam",
  lName: "kumar",
};
user.sayName.call(user1, "w", "z"); // syamkumarwz
user.sayName.call(fullN); //samkumar
user.sayName.call(); //NaN

const persons = {
  fullName: function (city, country) {
    console.log(
      this.firstName + " " + this.lastName + "," + city + "," + country
    );
  },
};

const person12 = {
  firstName: "John",
  lastName: "Doe",
};

persons.fullName.call(person12, "Oslo", "Norway"); //John Doe,Oslo,Norway

function Car(type, fuelType) {
  this.type = type;
  this.fuelType = fuelType;
}

function setBrand(brand) {
  Car.call(this, "convertible", "petrol");
  this.brand = brand;
  console.log(`Car details = `, this);
}

function definePrice(price) {
  Car.call(this, "convertible", "diesel");
  this.price = price;
  console.log(`Car details = `, this);
}

const newBrand = new setBrand("Brand1"); 
//  "Car details = "
//  {
//   brand: "Brand1",
//   fuelType: "petrol",
//   type: "convertible"
// }

const newCarPrice = new definePrice(100000);
// "Car details = "
//  {
//   fuelType: "diesel",
//   price: 100000,
//   type: "convertible"
// }
//if call a function with no arguments it refers global object
const newEntity = (obj) => console.log(obj);

function mountEntity(){
	this.entity = newEntity;
	console.log(`Entity ${this.entity} is mounted on ${this}`);
}

mountEntity.call(); //"Entity (obj) => window.runnerWindow.proxyConsole.log(obj) is mounted on [object Window]"

//apply is same behavior of call but it takes array arguments

const persons1 = {
  fullName: function (city, country) {
    console.log(
      this.firstName + " " + this.lastName + "," + city + "," + country
    );
  },
};

const person10 = {
  firstName: "John",
  lastName: "Doe",
};

persons1.fullName.apply(person10, ["Oslo", "Norway"]); //John Doe,Oslo,Norway
persons1.fullName.apply(); // undefined
ion.

function Car1(type, fuelType){
	this.type = type;
	this.fuelType = fuelType;
}

function setBrand1(brand){
	Car.apply(this, ["convertible", "petrol"]); //Syntax with array literal
	this.brand = brand;
	console.log(`Car details = `, this);
}

function definePrice1(price){
	Car.apply(this, new Array("convertible", "diesel")); //Syntax with array object construction
	this.price = price;
	console.log(`Car details = `, this);
}

const newBrand1 = new setBrand1('Brand1');
const newCarPrice1 = new definePrice1(100000); //same output as call

//this another way to using in function
function addUp(){
  //Using arguments to capture the arbitrary number of inputs
  const args = Array.from(arguments); // [1,2,3,4,5,6]
  this.x = args.reduce((prev, curr) => prev + curr, 0);
  console.log("this.x = ", this.x);
}

function driverFunc(){
  const obj = {
      inps: [1,2,3,4,5,6]
  }
  addUp.apply(obj, obj.inps);
}

driverFunc(); //this.x = 21

// Bind is a function that helps you create another function.
// that you can execute later with the new context of this that is provided.

const persons2 = {
  fullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

const person2 = {
  firstName: "John",
  lastName: "Doe",
};

const fullSayName = persons2.fullName.bind(person2);
fullSayName(); //John Doe
