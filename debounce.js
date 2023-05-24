const getData = (str) => {
  let count = 0;
  console.log(str, count++);
};

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */

// higher order function and Closure
//it is useful in searchbar and infinite scroll
function debounce(fn, t) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, t);
  };
}

let log = debounce(getData, 500);

log("...fetching");

// another way
let debounce = function (fn, t) {
  let interval;
  return function (...args) {
    const lastCall = Date.now();
    clearInterval(interval);
    interval = setInterval(() => {
      if (Date.now() - lastCall >= t) {
        fn(...args);
        clearInterval(interval);
      }
    }, 1);
  };
};
