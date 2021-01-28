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