// Temporal dead zone
console.log(a); // ReferenceError: Cannot access 'a' before initialization because it is TDZ.
// The period of time during which the let and const declarations cannot be accessed.
let a = 20;

// closures
// closures is combination of function and lexical scope bundle together forms a closure
// every function will remembers outer scope of function for ex nested  function remembers parent function
// in javascript when creating function closure will create every time
// memorizes its variables
for (var i = 0; i < 5; i++) {
  function closure(i) {
    // here every time function will call variable remembers
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
  closure(i);
}

// data hiding
function counter() {
  var count = 0; // we can make private variables and hide till this scope available
  return function increment() {
    count++;
    console.log(count);
  };
}

let count1 = counter();
count1(); // 1
count1(); // 2

let count2 = counter(); // this will again create separate counter we can scalable this code
count2(); // 1
count2(); // 2

// we can scalable use a constructor function
function Counted() {
  var count = 0; // we can make private variables and hide till this scope available
  this.increment = () => {
    count++;
    console.log(count);
  };
  this.decrement = () => {
    count--;
    console.log(count);
  };
}

let count12 = new Counted();
count12.increment(); // 1
count12.increment(); // 2
count12.increment(); // 3
count12.decrement(); // 2

let count13 = new Counted();
count13.decrement(); // -1
count13.increment(); // 0

var bankAccount = function (initialBalance) {
  // Let's initialise the balance with the value passed as an argument
  // to the function.

  var balance = initialBalance;

  return {
    getBalance: function () {
      return balance;
    },
    deposit: function (amount) {
      // Let's add the amount to what we already have in the
      //  balance.
      balance += amount;
      // Return the new balance
      return balance;
    },
    withdraw: function (amount) {
      // Check if we have enough money to withdraw all that.
      if (amount <= balance) {
        balance -= amount;
        return true;
      } else {
        return false;
      }
    },
  };
};

var syamAccount = bankAccount(100);

syamAccount.deposit(10); // 110
syamAccount.withdraw(80); // true
syamAccount.withdraw(80); // false

// disadvantage closures is consume memory
// those memorize variables are not garbage collector till exists program it causes memory leak

// debounce vs throttle
// Debouncing and throttling are techniques in javascript to optimize the application and browser performance.
// debounce will fire set of time delay. it uses rate limiting API's
// throttle will fire interval of time. ex infinite scrolling every certain period will fires

// Axios interceptors
// it work like middleware. there are two interceptors request and response
// Request Interceptor: — It allows you to write or execute a piece of your code before the request gets sent.
// Response Interceptor: — It allows you to write or execute a piece of your code before the response gets reaches the calling end.

//Event bubbling
//
