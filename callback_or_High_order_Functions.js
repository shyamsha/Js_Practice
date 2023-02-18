// callback
// A callback is a function that is passed inside another function, and then called in that function to perform a task.
// it's wait until its done
function call(cb) {
  setTimeout(() => {
    cb(10);
  }, 100);
}

call((n) => {
  console.log(n + 2);
});

// promise
// it not wait going to execute another one
function callPromise() {
  return new Promise((res, rej) => {
    call(res);
  });
}

const promise = callPromise();
// when ever we want value in future unpack the value
promise.then((n) => console.log(n + 3));

// call backs are also high order functions

let friends = ["a", "b", "c"];
friends.forEach((name) => {
  console.log(name);
});
//call back functions not executes not immediately

1; //use named or anonymous functions
let userData = [];
// generic function
function log(user) {
  if (typeof user === "string") {
    console.log(user);
  } else if (typeof user === "object") {
    for (const key in user) {
      if (Object.hasOwnProperty.call(user, key)) {
        const element = user[key];
        console.log(key + " " + element);
      }
    }
  }
}
// we can reusable this way
function getInput(options,cb) {
  userData.push(options)
  cb(options)
}

console.log(getInput ({name:"Rich", specialty:"JavaScript"}, log));

const radius = [1, 2, 3];
// without using HOF
// function to calculate area of the circle
const calculateArea =  function (radius) {
  const output = [];
  for(let i = 0; i< radius.length; i++){
      output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
}
// function to calculate diameter of the circle
const calculateDiameter =  function (radius) {
  const output = [];
  for(let i = 0; i< radius.length; i++){
      output.push(2 * radius[i]);
  }
  return output;
}
console.log(calculateArea(radius));
console.log(calculateDiameter(radius))



// with using HOF
// logic to calculate area
const area = function(radius){
    return Math.PI * radius * radius;
}
// logic to calculate diameter
const diameter = function(radius){
    return 2 * radius;
}
// logic to calculate diameter
const circumeference = function(radius){
  return 2 * Math.PI * radius;
}
// a reusable function to calculate area, diameter, etc
// The code that we have written using HOFs is concise and modular. 
// Each function is doing its own job and we are not repeating anything here.
const calculate = function(radius, logic){ 
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output;
}
console.log(calculate(radius, area));
console.log(calculate(radius, diameter));
console.log(calculate(radius, circumeference));




const shoppingCart = [
  {name: 'Apple', price: 1.99, quantity: 3},
  {name: 'Apple', price: 1.99, quantity: 3},
  {name: 'Xiomi', price: 2.99, quantity: 2},
  {name: 'Samsung', price: 3.99, quantity: 1},
  {name: 'Tesla', price: 3.99, quantity: 1},
  {name: 'Tesla', price: 4.99, quantity: 4},
  {name: 'Nokia', price: 4.99, quantity: 4},
]

const products = shoppingCart.reduce((productGroup, product) => {
  const name = product.name;
  if(productGroup[name] == null) {
      productGroup[name] = [];
  }
  productGroup[name].push(product);

  return productGroup;
}, {});

console.log(products);
