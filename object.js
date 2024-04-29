// obj references and copying
let obj = {
  firstName: "Shyam",
  lastName: "Kumar",
};

let copyObj = obj;
// objects are reference type when we assign obj to copyObj it is not copy it is reference to obj.
// when change it will change in both objects because it referring same obj
copyObj.firstName = "Rakesh";
// console.log(obj)

// copy objects into new variable look like bellow
let copy = { ...obj };
copy.firstName = "ch";
// console.log(copy,obj)

let obj1 = {
  firstName: "Shyam",
  lastName: "Kumar",
  address: {
    city: "chirala",
  },
};

let copy2 = {};
for (const key in obj) {
  const element = obj[key];
  copy2[key] = element;
}
copy2.firstName = "sam";
// console.log(copy2,obj)

let copy1 = {};
for (const key in obj1) {
  const element = obj1[key];
  copy1[key] = element;
}
copy1.firstName = "sam";
// we can't copy the nested objects because those are reference another memory address
// copy1.address.city='Bangalore'
// console.log(copy1,obj1)

// copy the nested objects overwritten like bellow or use lodash deepClone method
// copy single objects also
let copy3 = Object.assign({}, obj1);

// console.log(copy3.address===obj1.address)
copy3.address.city = "Bangalore";
// console.log(obj1,copy3)

// cloning nested objects like this
function cloneDeep(obj) {
  let dClone = {};
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      dClone[key] = cloneDeep(obj[key]);
    } else {
      dClone[key] = obj[key];
    }
  }

  return dClone;
}
let nest = {
  name: "Shyam",
  address: {
    city: "chirala",
  },
};
console.log(cloneDeep(nest));
console.log(nest);
let nestObj = {
  name: "Shyam",
  address: {
    city: "chirala",
  },
};
// let o1= cloneDeep(nestObj)
// o1.address.city='London'
// console.log(o1)
// nestObj.address.city='bangalore'
// console.log(nestObj)

let clone1 = JSON.parse(JSON.stringify(nestObj));
nestObj.address.city = "bangalore";
// console.log(clone1,nestObj)

// this in objects

let user = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" is the "current object"
    console.log(this.name);
  },
};

// user.sayHi(); // John

// display object keys and values of nested objects

let obj12 = {
  fName: "shyam",
  lName: "kumar",
  details: {
    child1: "rama",
    child2: {
      child1: "kittu",
      child2: "kavaya",
    },
    cricket: {
      home: "sunrises",
      favorite: "chennai",
      players: {
        1: "dhoni",
        2: "kohli",
      },
    },
  },
};

function values(obj) {
  for (let key in obj) {
    if (typeof obj[key] !== "object") {
      console.log("key:" + key + " " + "value:" + obj[key]);
    } else {
      values(obj[key]);
    }
  }
}

console.log(values(obj12));

//empty object
for (let key in obj12) {
  if (obj12.hasOwnProperty(key)) {
    delete obj12[key];
  }
}
const newObj = {};
Object.setPrototypeOf(newObj, obj12);

console.log(obj12.fName);

// array of pair of values (key, value) from an object and store it in a map.
const map = new Map(Object.entries(obj));

// excluding the 'password' property
JSON.stringify(obj, (key, value) => (key === "password" ? undefined : value)); // {"id":1,"username":"John","email":"john@email.com"}
JSON.stringify(obj, ["id", "username", "email"]); // {"id":1,"username":"John","email":"john@email.com"}

// function which takes an array as input and returns a function 'next', calling which fetches a value one by one
// The function returned next will return an object which contains value and done properties
function makeIterator(array) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < array.length
        ? {
            value: array[nextIndex++],
            done: false,
          }
        : {
            done: true,
          };
    },
  };
}

// driver code
let it = makeIterator(["yo", "ya"]);
it.next().value; // 'yo'
it.next().value; // 'ya'
it.next().done; // true

// object with property counter which keeps incrementing on every access

// The access to the property of the object can be configured through property getter
// A separate private variable can be maintained track the value and getter on each access to increment and return the value
function counterObject() {
  const symCounter = Symbol("counter");

  const obj = {
    [symCounter]: 0,

    get counter() {
      return ++this[symCounter];
    },

    set counter(value) {
      throw new Error("Cannot set the counter");
    },
  };
  return obj;
}

const obj21 = counterObject();
obj21.counter; // 1
obj21.counter; // 2
obj21.counter; // 3

// Symbol is used to maintain the private variable in the object. Using the private variable to store the data such as _counter is also a well known pattern before symbols

function deepCopyObj(obj) {
  if (!obj) return obj;

  const copyObj = {};
  for (const key in obj) {
    if (typeof obj[key] !== "object" || Array.isArray(obj[key]))
      copyObj[key] = obj[key];
    else copyObj[key] = deepCopyObj(obj[key]);
  }
  return copyObj;
}

console.log(deepCopyObj(obj12));

// an object by excluding the property

const obj11 = {
  id: 1,
  username: "John",
  password: "secret",
  email: "john@email.com",
  address: "qwerty",
};
const newObj1 = Object.assign({}, obj12, {
  address: undefined,
});
JSON.stringify(obj, (key, value) => (key === "password" ? undefined : value)); // {"id":1,"username":"John","email":"john@email.com"}
JSON.stringify(obj, ["id", "username", "email"]); // {"id":1,"username":"John","email":"john@email.com"}
