// limits the number of function calls by executing the function once for a given count of calls
// ToDo
function sampler(fn, count, context) {
  let counter = 0;

  return function (...args) {
    lastArgs = args;
    context = this ?? context;

    if (++counter !== count) return;

    fn.apply(context, args);
    counter = 0;
  };
}

console.log(sampler(() => 5, 2));
