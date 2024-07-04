// call() polyfill
Function.prototype.callPolyfill = function (context, ...args) {
  let sym = Symbol();
  context[sym] = this;
  let res = context[sym](...args);
  delete context[sym];
  return res;
};

function increment() {
  this.count++;
  return this.count;
}
console.log(increment.callPolyfill({ count: 1 })); // 2

// apply() polyfill
let person = {
  firstName: "Syam",
  lastName: "Kumar",
};

let printName = function (country, vacation) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " from " +
      country +
      " and going for vacation " +
      vacation
  );
};

Function.prototype.applyPolyfill = function (obj, ...args) {
  let sym = Symbol();
  obj[sym] = this;
  let res = obj[sym](...args);
  delete obj[sym];
  return res;
};

printName.applyPolyfill(person, ...["India", "America"]);

// bind() polyfill
let friends = {
  firstName: "Kotesh",
  firstName2: "Nagendra",
};

let printFriends = function (country) {
  console.log(
    this.firstName + " " + this.firstName2 + " best friends from " + country
  );
};

Function.prototype.bindPolyfill = function (object, args) {
  let func = this;
  return function () {
    return func.apply(object, args);
  };
};

let newPrintFriends = printFriends.bindPolyfill(friends, ["India"]);
newPrintFriends();

// another way to write
Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "it is not function");
  }
  context.fn = this;
  context.fn(...args);
};

let obj = {
  name: "Range Rover",
};

function car(rate, country) {
  console.log(`i will buy ${this.name} with rate ${rate} in ${country}`);
}

car.myCall(obj, 1000, "India");

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + "it is not function");
  }
  if (!Array.isArray(args)) {
    throw new Error(args + "it is not array");
  }
  context.fn = this;
  context.fn(...args);
};

let obj1 = {
  name: "Range Rover",
};

function car(rate, country) {
  console.log(`i will buy ${this.name} with rate ${rate} in ${country}`);
}

car.myApply(obj1, [1000, "India"]);

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "it is not bound to callable");
  }
  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

let obj3 = {
  name: "Range Rover",
};

function car(rate, country) {
  console.log(`i will buy ${this.name} with rate ${rate} in ${country}`);
}

const newFun = car.myBind(obj3, 1000);

newFun("India");
