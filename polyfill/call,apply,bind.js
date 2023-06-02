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

printName.apply(person, ["India", "America"]);

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
