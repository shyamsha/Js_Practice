// what happens this in async/callbacks
let personObj1 = {
  firstName: "John",
  lastName: "sin",
  fullNameF: function () {
    setTimeout(function () {
      console.log(this.firstName); //  if this refers to window object it will print undefined
    }, 1000);
    console.log(this); //if only this refers to current object
  },
  arrowF: function () {
    setTimeout(() => {
      console.log(this.firstName); //  if this refers to current object it will print firstName
    }, 1000);
  },
};

// personObj1.fullNameF();
// personObj1.arrowF();

// non-strict mode async callback with respect to window object in strict mode it is undefined

// what happens this in arrow functions
//arrow function at time creation this will automatically bind to the object where it is created

const obj2 = {
  a: 2,
  print: function () {
    function innerPrint() {
      console.log(this.a); // undefined it refers to window object
    }
    innerPrint();
  },
  printThisValue: function () {
    let t = this; // if we assigns to this to a variable it will refer to current object
    function innerPrint() {
      console.log(t.a); // it will print 2
    }
    innerPrint();
  },
  arrowPrint: function () {
    const innerPrint = () => {
      console.log(this.a); // 2 at the time creation of arrow it refers to current obj
    };
    innerPrint();
  },
};
obj2.print();
