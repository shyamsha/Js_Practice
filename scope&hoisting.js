// function level scope

var n = "Richard";

function print() {
  var n = "Syam";
  console.log(n);
}
console.log(n); // Richard
print(); // Syam

var p = "s";
var p = "j";
console.log(p); //j

// If you don't declare your local variables with the var keyword, they are part of the global scope
var pName = "Michael Jackson";

function cName() {
  console.log(pName);
}

function overWrittenName() {
  // if variable initialized with out var keyword it is declared as global variable
  pName = "Jack Sparrow";
  console.log(pName);
}

cName(); // Michael Jackson

// name is not a local variable, it simply changes the global name variable
overWrittenName(); // Jack Sparrow

// global var will be overwrites so mention var keyword in function. it will not
cName(); // JackSparrow
// Local variables are priority over the global variables in functions.

// All variables declared outside a function are in the global scope. and it is available entire application.

var myName = "Syam";

// all global variables are attached to window object
// console.log(window.myName) // Syam

for (var i = 1; i <= 10; i++) {
  console.log(i); // outputs 1, 2, 3, 4, 5, 6, 7, 8, 9, 10;
}

// The variable i is a global variable and it is accessible in the following function with the last value it was assigned above
function aNumber() {
  console.log(i);
}

// The variable i in the aNumber function below is the global variable i that was changed in the for loop above.
// Its last value was 11, set just before the for loop exited:
aNumber(); // 11

// setTimeOut variables are executes global scope
// The use of the "this" object inside the setTimeout function refers to the Window object, not to myObj
// note write in script tag set time out as usual will work
var high = 200;
var low = 2;
var mulObj = {
  high: 400,
  low: 4,
  cal: function () {
    setTimeout(function () {
      console.log(this.high * this.low);
    }, 100);
    setTimeout(() => {
      console.log(this.high * this.low);
    }, 100);
  },
};

var highValue = 200;
var constantVal = 2;
var myObj = {
  highValue: 20,
  constantVal: 5,
  calculateIt: function () {
    let that=this
    setTimeout(function () {
      console.log(that.constantVal * that.highValue);
    }, 2000);
  },
};

myObj.calculateIt(); //100

mulObj.cal(); // NAN 1600

var cricketer="sachin"

function display(){
  var cricketer="Gayle" // local variable high priority than global variable
  console.log(cricketer)
}

display() // Gayle