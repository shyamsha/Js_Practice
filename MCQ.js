// 1.
function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}

// sayHi(); // undefined and ReferenceError

// 2.
for (var i = 0; i < 3; i++) {
  // var in global scope
  setTimeout(() => console.log(i), 1); // 3 3 3
}

for (let i = 0; i < 3; i++) {
  //let in block scope
  setTimeout(() => console.log(i), 1); // 0 1 2
}

// 3.
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  //arrow functions this binds autometaicly window object
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter()); // 20 NAN
console.log(shape.perimeter());

// 4.
console.log(+true) // 1
console.log(!'Lydia'); // false

// 5.
const bird = {
  size: 'small',
};

const mouse = {
  name: 'Mickey',
  small: true,
};

// console.log(mouse.bird.size); // TypeError
console.log(mouse[bird.size]); // true
console.log(mouse[bird["size"]]); // true

//  6.
let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
// all objects interact by reference when setting them equal to each other.
console.log(d.greeting); // Hello

// 7.
let a = 3;
let b = new Number(3);
let c1 = 3;
// new Number() is a built-in function constructor. 
// Although it looks like a number, it's not really a number: it has a bunch of extra features and is an object.
console.log(a == b); // true
console.log(a === b); // false
console.log(b === c1); // false

// 8.
class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = 'green' } = {}) {
    this.newColor = newColor;
  }
}
/*
The colorChange function is static. 
Static methods are designed to live only on the constructor in which they are created, 
and cannot be passed down to any children. 
Since freddie is a child, the function is not passed down, 
and not available on the freddie instance: a TypeError is thrown.
*/
const freddie = new Chameleon({ newColor: 'purple' });
// console.log(freddie.colorChange('orange')); // type error

// 9.
let greeting;
greetign = {}; // in strict Type error
console.log(greetign); // {}

// 10.
function bark() {
  console.log('Woof!');
}

bark.animal = 'dog'; // no error because functions are  special type of object

// 10.
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person('Lydia', 'Hallie');
Person.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

// console.log(member.getFullName()); // type error if you want add methods to existing constructor use Person.Prototype.getFullName

// 11.
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const lydia = new Person('Lydia', 'Hallie');
const sarah = Person('Sarah', 'Smith');
// For sarah, we didn't use the new keyword.
// When using new, this refers to the new empty object we create. 
// However, if you don't add new, this refers to the global object!
// global.firstName and global.lastName
console.log(lydia); // Person { firstName: 'Lydia', lastName: 'Hallie' }
console.log(sarah); // undefined
console.log(globalThis.firstName); // sarah

// 12.

function sum(a, b) {
  return a + b;
}

console.log(sum(1, '2')); // "12"

// 13.
let number = 0;
console.log(number++); // 0
console.log(++number); // 2
console.log(number); // 2

// 14.
