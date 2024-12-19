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
let a1 = 3;
let b1 = new Number(3);
let c1 = 3;
// new Number() is a built-in function constructor. 
// Although it looks like a number, it's not really a number: it has a bunch of extra features and is an object.
console.log(a1 == b1); // true
console.log(a1 === b1); // false
console.log(b1 === c1); // false

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
greeting = {}; // in strict Type error
console.log(greeting); // {}

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
function getPersonInfo(one, two, three,four) {
  console.log(one);
  console.log(two);
  console.log(three);

}

const per = 'Lydia';
const age = 21;
// If you use tagged template literals, the value of the first argument is always an array of the string values. 
// The remaining arguments get the values of the passed expressions!
getPersonInfo`${per} is ${age} years old`; // ["", " is ", " years old"] "Lydia" 21

// 15.
function checkAge(data) {
  if (data === { age: 18 }) {
    console.log('You are an adult!');
  } else if (data == { age: 18 }) {
    console.log('You are still an adult.');
  } else {
    console.log(`Hmm.. You don't have an age I guess`);
  }
}
// because objects are reference type
checkAge({ age: 18 }); // Hmm.. You don't have an age I guess

// 16.
function getAge(...args) {
  console.log(typeof args);
}

getAge(21); // object because using rest operator

// 16.
function getAge() {
  'use strict';
  age = 21;
  console.log(age);
}

getAge(); // Reference Error

// 17.
const sum = eval('10*10+5');

console.log(sum) // 105 eval() is global  and this function executes the string expression

// 18.
var num = 8;
var num = 10;

console.log(num); // 10

// 19.
const obj1 = { 1: 'a', 2: 'b', 3: 'c' };
const set1 = new Set([1, 2, 3, 4, 5]);

obj1.hasOwnProperty('1');
obj1.hasOwnProperty(1);
set1.has('1');
set1.has(1); // set is object collection of values example mySet = new Set() and mySet.add(1) or any type value add output set {1} here only values

// 20.
const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj); // {a: 'three', b: 'two'}

// 21.
for (let i = 1; i < 5; i++) {
  if (i === 3) continue; // skip i =3
  console.log(i); // 1 2 4 
}

// 22.
String.prototype.giveLydiaPizza = () => {
  return 'Just give Lydia pizza already!';
};

const name1 = 'Lydia';
// String is a built-in constructor, which we can add properties to. 
// I just added a method to its prototype. 
// Primitive strings are automatically converted into a string object, generated by the string prototype function. 
// So, all strings (string objects) have access to that method!
name1.giveLydiaPizza(); // Just give Lydia pizza already!

// 23.
const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]); // 456 here we set key as object and it overwriting a[c]

// 24.
const foo = () => console.log('First');
const bar = () => setTimeout(() => console.log('Second'));
const baz = () => console.log('Third');

bar(); 
foo();
baz(); // first third second

// 24.
// You can stop bubbling by event.stopPropagation

// 25.
const p = { name: 'Lydia' };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(p, 21)); // Lydia is 21 call is also executed immediately! 
console.log(sayHi.bind(p, 21)); // function .bind returns a copy of the function, but with a bound context! It is not executed immediately.

// 26.
function sayHi() {
  return (() => 0)();
}

console.log(typeof sayHi()); // number typeof invokes function returns or undefined

// 27.
0; // false
new Number(0); // [Number:0]
(''); // false
(' '); // true
new Boolean(false); // [Boolean: false]
undefined; // false

// 28.
console.log(typeof typeof 1); // "string"

// 29.
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers); // [ 1, 2, 3, <7 empty items>, 11 ]

// 30.
(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2);
    console.log(x);
  }
  console.log(x);
  console.log(y);
})(); // 1 undefined 2 because The catch block receives the argument x. 
      // This is not the same x as the variable when we pass arguments. 
      // This variable x is block-scoped.

// 31.
[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2], // initial value to concat
); // [ 1, 2, 0, 1, 2, 3 ]

// 32.
!!null; // false
!!''; // false
!!1; // true

// 33.What does the setInterval method return in the browser?
setInterval(() => console.log('Hi'), 1000);
// It returns a unique id. This id can be used to clear that interval with the clearInterval() function.

// 34.
console.log([...'Lydia']); // ["L", "y", "d", "i", "a"]

// 35.
function* generator(i) {
  yield i;
  yield i * 2;
}

const gen = generator(10);
// refer generators function
console.log(gen.next().value); // 10
console.log(gen.next().value); // 20

// 36
const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, 'one');
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, 'two');
});

Promise.race([firstPromise, secondPromise]).then(res => console.log(res)); // two

// 37.
let p1 = { name: 'Lydia' };
const members = [p1];
p1 = null;

console.log(members); // [{ name: "Lydia" }] because objects has copied reference type

// 38.
const person1 = {
  name: 'Lydia',
  age: 21,
};

for (const item in person1) {
  console.log(item); // name age
}

// 39.
console.log(3 + 4 + '5'); // "75"
const num = parseInt('7*6', 10);
console.log(num); // 7

// 40.
[1, 2, 3].map(num => {
  if (typeof num === 'number') return;
  return num * 2;
}); // [undefined , undefined, undefined]

// 41.
function getInfo(member, year) {
  member.name = 'L';
  year = '1998';
}

const person2 = { name: 'Sarah' };
const birthYear = '1997';

getInfo(person2, birthYear);
// because of person obj is pass by reference and 
// when passed to function it copy the object so obj refers same obj.
// if object is changed both will be change same as value copied in function.
// this is pass by value it so both are different values.
console.log(person2, birthYear); // {name: "L"} 1997

// 42.
function greeting() {
  throw 'Hello world!'; // throws a custom error
}

function sayHi() {
  try {
    const data = greeting();
    console.log('It worked!', data);
  } catch (e) {
    console.log('Oh no an error:', e); // here it will catch error
  }
}

sayHi(); // Oh no an error: Hello world!

// 43.
function Car() {
  this.make = 'Lamborghini';
  return { make: 'Maserati' };
}
// constructors do not have a return statement
// If return is called with an object, then the object is returned instead of this
const myCar = new Car();
console.log(myCar.make); // Maserati

// 44.
(() => {
  let x = (y = 10);
})();
// let x = (y = 10); is actually shorthand for:
// y = 10; let x = y; so x defined with let is block scope,not accessible from outside 
console.log(typeof x);
console.log(typeof y);

// 45.
class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.bark = function() {
  console.log(`Woof I am ${this.name}`);
};

const pet = new Dog('Mara');

pet.bark(); // Woof I am Mara

delete Dog.prototype.bark;

pet.bark(); // type error since pet.bark() is deleted

// 46.
const set = new Set([1, 1, 2, 3, 4]);

console.log(set); // {1,2,3,4} since set create obj with unique value this is another way creating obj

// 47.
let counter = 10;
export default counter;

import myCounter from './counter';

myCounter += 1;

console.log(myCounter); // error

// An imported module is read-only: you cannot modify the imported module. 
// Only the module that exports them can change its value.

// 48.
const user_name = 'Lydia';
user_age = 21;

// variables declared with the var, const or let keyword cannot be deleted using the delete operator
// console.log(delete user_name); // false
// console.log(delete user_age); // true

// 49.
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;
// ex [a,b]=[1,2] a refers 1 and b=2 same way
console.log(y); // 1

// 50.
const user = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...user };

console.log(admin); // { admin: true, name: "Lydia", age: 21 }

// 51.
const person = { name: 'Lydia' };

Object.defineProperty(person, 'age', { value: 21 });
// When we add a property to an object using the defineProperty method, 
// they are by default not enumerable. 
// The Object.keys method returns all enumerable property names from an object, in this case only "name".
console.log(person); // { name: "Lydia", age: 21 }
console.log(Object.keys(person)); // ["name"]

// 52.
const settings = {
  username: 'lydiahallie',
  level: 19,
  health: 90,
};
// The second argument of JSON.stringify is the replacer. 
// The replacer can either be a function or an array, and lets you control what and how the values should be stringified.
const data = JSON.stringify(settings, ['level', 'health']);
console.log(data); // "{"level":19, "health":90}"

// 53.
let num = 10;

const increaseNumber = () => num++;
const increasePassedNumber = number => number++;

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1); // 10
console.log(num2); // 10

// 54.
const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply(); // 20
multiply(); // 20
multiply(value); // 20
multiply(value); // 40

// 55.
[1, 2, 3, 4].reduce((x, y) => console.log(x, y)); // 1 2 and undefined 3 and undefined 4
// we are not returning any values logging with out accumulator value is undefined

// 56.
class Dog {
  constructor(name) {
    this.name = name;
  }
};

class Labrador extends Dog {
  // 1 throw reference error
  constructor(name, size) {
    this.size = size;
  }
  // 2 it is executed because we want this than call super and what props receiving from parent in supper mention like super(name)
  constructor(name, size) {
    super(name);
    this.size = size;
  }
  // 3 error  we not pass args in constructor
  constructor(size) {
    super(name);
    this.size = size;
  }
  // 4 reference error
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }

};

// 57.
// index.js
console.log('running index.js');
import { sum } from './sum.js';
console.log(sum(1, 2));

// sum.js
console.log('running sum.js');
export const sum = (a, b) => a + b; // running sum.js, running index.js, 3
// With the import keyword, all imported modules are pre-parsed. 
// This means that the imported modules get run first, 
// the code in the file which imports the module gets executed after.

// 58.
console.log(Number(2) === Number(2)); // true
console.log(Boolean(false) === Boolean(false)); // true
console.log(Symbol('foo') === Symbol('foo')); // false Every Symbol is entirely unique

// 59.
const name = 'Lydia Hallie';
console.log(name.padStart(13)); // " Lydia Hallie",
console.log(name.padStart(2)); // "Lydia Hallie"
// padStart method, we can add padding to the beginning of a string
// "Lydia Hallie" has a length of 12. name.padStart(13) inserts 1 space at the start of the string, because 12 + 1 is 13.

// 60.how to check null
let first = null;
let second;

console.log(Object.is(first,null)) // true
console.log(Object.is(first,second)) // false because second is undefined

//  The Object.is() static method determines whether two values are the same value.




