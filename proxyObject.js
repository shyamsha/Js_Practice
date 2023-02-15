// In JavaScript, there is a special object called a Proxy. It helps you create another object on behalf of the original object.
// So a proxy is nothing but a mediator that speaks or operates on behalf of the given party.

// new Proxy(<object>, <handler>)

// The Proxy takes two parameters:

{
  /* <object>: The object that needs to be proxied. */
}
{
  /* <handler>: An object that defines the list of methods that can be intercepted. These are also called traps. */
}

const books = {
  "Deep work": "Cal Newport",
  "Atomic Habits": "James Clear",
};
const proxyBooksObj = new Proxy(books, {
  get: (target, key) => {
    console.log(`Fetching book ${key} by ${target[key]}`);
    return target[key];
  },
});

// Let's create a proxy function that will allow the user to only update the current property and not allow them to create any other properties.
const data = {};

const newProxy = new Proxy(data, {
  set: function (target, key, value) {
    if (key === "current") {
      Reflect.set(target, key, value);
      return true;
    }
    return false;
  },
});

newProxy.current = 1;
newProxy.point = 1; // Throws error

// We can also make use of the Reflect API here.
// JavaScript provides a built-in object that has a set of functions that can help intercept JavaScript operations.
// This can be operations such as set, get, apply, and so on
