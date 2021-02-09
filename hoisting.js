// hoisting means variables declare with var and function declaration move on top their scope.
// console.log(n) // undefined
var n="syam"

// above code transform to execute this way
var n;
// console.log(n); //undefined
n="syam"

// another example
rockStar = "Mick";
var rockStar;
// console.log(rockStar); //  “Mick Jagger”

// function declarations are hoisted not function expressions.
movie() // Tenet
function movie(){
  var moveName="Tenet"
  console.log(moveName) 
}

// this code execute this way
function movie(){ // function declaration on top
  var moveName; //var declaration move top and it is function scope
  moveName="Tenet" //variable assignment
  console.log(moveName)
}
movie() // Tenet

// function expression are not hoisted

// movieStar() //typeError: movieStar is not defined 

var movieStar=function(){ // function expression with var declaration even not hoisted
  var person="Tom"
  console.log(person)
}

// functions hoisted first than variable
var business;
function business(){
  console.log("not hoisted")
}

console.log(business) //[function:business]

// another condition

var p1="sam"

function p1(){ //this time var is assign to value first go declaration the var so var is assigned p1 is override
  console.log("s")
}

console.log(p1) // sam
// p1() // p1 is not a function

var func=function(){
  console.log("syam")
}

var func=function(){ // var is hoisted top of same var
  console.log("shyam")
}
func() //shyam

function h(){
  var host=5

  function another(){
    host=1 //it is not create global variable
  }
  another()
  console.log(host) // 1
}

h()
console.log(host) // ReferenceError: host is not defined
x5= 235;
let x5 = 21;
x5= 265;
console.log(x5); // throw an error cannot access before initialization
function funcn() {
  
  console.log(x5); // first will x5 variable inside function and 
  // variable already declarer with block scope throw an error cannot access before initialization

  let x5 = 002;
}

funcn();