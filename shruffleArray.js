function shuffle(input) {
  for (let i = input.length - 1; i >= 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let itemAtIndex = input[randomIndex];

    input[randomIndex] = input[i];
    input[i] = itemAtIndex;
  }
  return input;
}

let shuffleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(shuffle(shuffleArray));

// this prototype example
Array.prototype.shuffle = function () {
  let input = this;

  for (let i = input.length - 1; i >= 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let itemAtIndex = input[randomIndex];

    input[randomIndex] = input[i];
    input[i] = itemAtIndex;
  }
  return input;
};
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.shuffle();
console.log(numbers);
// prototype for next day
Date.prototype.nextDay = function () {
  var currentDate = this.getDate();
  return new Date(this.setDate(currentDate + 1));
};

var date = new Date();
date;
console.log(date.nextDay());

Array.prototype.duplicator = function () {
  return this.concat(this);
};

let arr = [1, 2, 3, 4, 5];
console.log(arr.duplicator());

function rangeGenFunc(start = 1, end = 0) {
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}

const arr1 = rangeGenFunc(1, 10); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr1.sort(() => 0.5 - Math.random()); // [6, 8, 5, 10, 4, 3, 9, 2, 7, 1]
