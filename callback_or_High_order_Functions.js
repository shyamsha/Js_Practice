// callback
// it's wait until its done
function call(cb) {
  setTimeout(() => {
    cb(10);
  }, 100);
}

call((n) => {
  console.log(n + 2);
});

// promise
// it not wait going to execute another one
function callPromise() {
  return new Promise((res, rej) => {
    call(res);
  });
}

const promise = callPromise();
// when ever we want value in future unpack the value
promise.then((n) => console.log(n + 3));

// call backs are also high order functions

let friends = ["a", "b", "c"];
friends.forEach((name) => {
  console.log(name);
});
//call back functions not executes not immediately

1; //use named or anonymous functions
let userData = [];
// generic function
function log(user) {
  if (typeof user === "string") {
    console.log(user);
  } else if (typeof user === "object") {
    for (const key in user) {
      if (Object.hasOwnProperty.call(user, key)) {
        const element = user[key];
        console.log(key + " " + element);
      }
    }
  }
}
// we can reusable this way
function getInput(options,cb) {
  userData.push(options)
  cb(options)
}

console.log(getInput ({name:"Rich", specialty:"JavaScript"}, log));