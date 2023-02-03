function showTime() {
  // return new date and time
  let dateTime = new Date();

  // return the time
  let time = dateTime.toLocaleTimeString();

  console.log(time);
}
let display = setInterval(showTime, 1000); // program to display time every 1 seconds

for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
} //10 10 10 10 10 10 10 10 10 10

setTimeout(() => {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
}, 1000); //0 1 2 3 4 5 6 7 8 9

for (var i = 0; i < 10; i++) {
  function timer(j) {
    setTimeout(function () {
      //set time out called 9 times
      console.log(j);
    }, i * 1000);
  }
  timer(i);
} //0 1 2 3 4 5 6 7 8 9 we implement closure to achieve

for (var i = 10; i > 0; i--) {
  function timer(j) {
    setTimeout(function () {
      console.log(j);
    }, (10 - i) * 1000);
  }
  timer(i);
} //10 9 8 7 6 5 4 3 2 1

// How would you use a closure to create a private counter?
function counter() {
  var _counter = 0;
  // return an object with several functions that allow you
  // to modify the private _counter variable
  return {
    add: function (increment) {
      _counter += increment;
    },
    retrieve: function () {
      return "The counter is currently at: " + _counter;
    },
  };
}

// error if we try to access the private variable like below
// _counter;

// usage of our counter function
var c = counter();
c.add(5);
c.add(9);

// now we can access the private variable in the following way
c.retrieve(); // => The counter is currently at: 14

// in object counter
let increment = {
  count: 100,
  start: function () {
    //Assign this to variable that
    var that = this;
    setInterval(function () {
      console.log(that.count--);
    }, 1000);
  },
};

increment.start(); // 100 99 ...

let incrementNeg = {
  count: 1,
  start: function () {
    //Assign this to variable that
    var that = this;
    setInterval(function () {
      console.log(++that.count);
    }, 1000);
  },
};

incrementNeg.start(); // 0 -1 ...

function clock() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  console.log(`${h} : ${m} : ${s}`);
}

setInterval(() => {
  clock();
}, 1000); // current time

// Timer
function startTimer(maxSeconds) {
  var seconds = 0;
  var intervalID = setInterval(function () {
    seconds++;

    var timeRemaining = maxSeconds - seconds,
      hours = parseInt(timeRemaining / 3600),
      mins = parseInt((timeRemaining % 3600) / 60),
      secs = parseInt((timeRemaining % 3600) % 60);

    console.log(hours + ":" + mins + ":" + secs);

    if (seconds === maxSeconds) {
      clearInterval(intervalID);
    }
  }, 1000);
}

//Here is an example of how to use the above function
startTimer(1000);

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1); // 3 3 3
}

//let is block scoped so value captured
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1); // 0 1 2
}
