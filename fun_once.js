// function to execute a function only once and return result subsequently calls return same result
function once(fn) {
  let executed = false;
  let result;
  return function (...args) {
    if (!executed) {
      try {
        result = fn.apply(this, args);
        executed = true;
      } catch (error) {
        throw error;
      }
    }
    return result;
  };
}
