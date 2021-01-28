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