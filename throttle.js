/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function (fn, t) {
  let wait = false;
  let nextArgs = null;
  function checkedStoredArgs() {
    if (nextArgs == null) {
      wait = false;
    } else {
      fn(...nextArgs);
      nextArgs = null;
      setTimeout(checkedStoredArgs, t);
    }
  }
  return function (...args) {
    if (wait) {
      nextArgs = args;
      return;
    }
    fn(...args);
    wait = true;
    setTimeout(checkedStoredArgs, t);
  };
};

// using intervals
var throttle1 = function (fn, t) {
  let intervalInProgress = null;
  let argsToProcess = null;

  const intervalFunction = () => {
    if (argsToProcess === null) {
      clearInterval(intervalInProgress);
      intervalInProgress = null; // enter the waiting phase
    } else {
      fn(...argsToProcess);
      argsToProcess = null;
    }
  };

  return function throttled(...args) {
    if (intervalInProgress) {
      argsToProcess = args;
    } else {
      fn(...args); // enter the looping phase
      intervalInProgress = setInterval(intervalFunction, t);
    }
  };
};
