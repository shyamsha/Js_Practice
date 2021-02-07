// prototype allows javascript objects to inherit from one and another
const vehicle = {
  drive(){
    console.log("the car is driving")
  }
}

const car ={
  make:"Honda"
}

// car is going to be prototype of type vehicle essentially tells inherit from vehicle to car
// drive method also available inside car 
Object.setPrototypeOf(car,vehicle)
car.drive()
console.log(car.make)

// every javascript function is by default prototype and we can attach properties and methods to prototype
// when you want to implement inheritance and prototype property not accessible in for/in loops.

function PrintStuff(myDocs) {
  this.docs=myDocs
}

// we can add one method to printStuff prototype properties so other instances(objects) can inherit
PrintStuff.prototype.print=function (){
  console.log(this.docs);
}

// creating new obj to printStuff constructor inherit printStuff properties and methods.
let newObj=new PrintStuff("Iam new obj I can print")
// like this way inherit all properties and methods in simple example.

newObj.print() //Iam new obj I can print

// second concept is prototype attribute
// prototype attributes of object created with new Object() or object constructor.

1.//prototype based inheritance implement

function Plant(){
  this.country='India',
  this.isOrganic=true
}
// adding properties or methods via prototype 
Plant.prototype.a='a'
let p=new Plant()
console.log(p.a)
Plant.prototype.amIOrganic=function(){
  if(this.isOrgan){
    console.log("i am organic")
  }
}

Plant.prototype.showNameColor=function(){
  console.log(this.name+' is a '+this.color)
}
// creating another constructor that inherit form plant

function Fruit (fruitName, fruitColor) {
  this.name = fruitName;
  this.color = fruitColor;
  }


// set Fruit prototype to plant constructor this inherit plant all properties and methods
Fruit.prototype=new Plant()

// creating object from fruit
let mango = new Fruit('Mango','Yellow')

// the mango objects inherit form both plant and fruit properties and methods
// because fruit prototype which is plant prototype
mango.showNameColor() // Mango is a Yellow
console.log(mango.country) // India

2.//prototype chain 
// if you want to access a property of an object, 
// the search for the property begins directly on the object. 
// If the JS runtime can’t find the property there,
// it then looks for the property on the object’s prototype—the object it inherited its properties from.
// If the property is not found on the object’s prototype, 
// the search for the property then moves to prototype of the object’s prototype (the father of the object’s father—the grandfather). 
// And this continues until there is no more prototype (no more great-grand father; no more lineage to follow).
// This in essence is the prototype chain: the chain from an object’s prototype to its prototype’s prototype and onwards. 
// And JavaScript uses this prototype chain to look for properties and methods of an object.

