// call() polyfill
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
