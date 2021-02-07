// A closure is a function having access to the parent scope, even after the parent function has closed.

let x=100;
function n(){
  console.log(x)
}
n()

function add(x){
  return function(y){
    return x+y
  }
}

const adding= add(5)
console.log(adding(10))