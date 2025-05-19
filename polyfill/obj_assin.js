// object assign polyfill
function objectAssign(target, ...sources) {
  if (target == null) {
    throw new TypeError("Cannot convert undefined or null to object");
  }
  const to = Object(target);
  for (let i = 0; i < sources.length; i++) {
    const nextSource = sources[i];
    if (nextSource != null) {
      for (const nextKey in nextSource) {
        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
          // Use Object.prototype.hasOwnProperty.call(objRef, 'propName') to guard the TypeError when objRef has null prototype.
          // This is a common pattern to avoid prototype pollution.
          to[nextKey] = nextSource[nextKey];
        }
      }
    }
  }
  return to;
}
console.log(objectAssign({ a: 1 }, { b: 2 }, { c: 3 })); // { a: 1, b: 2, c: 3 }
console.log(objectAssign({ a: 1 }, { b: 2 }, { 1: null, 2: "a" })); // { a: 1, b: 2, 1: null, 2: 'a' }
console.log(
  objectAssign({ a: 1 }, { b: 2 }, { c: undefined }, null, undefined)
); // { a: 1, b: 2, c: undefined }
// optimized object assign
function optimizedObjectAssign(target, ...sources) {
  if (target == null) {
    throw new TypeError("Cannot convert undefined or null to object");
  }
  const to = Object(target);
  for (let i = 0; i < sources.length; i++) {
    const nextSource = sources[i];
    if (nextSource != null) {
      Object.keys(nextSource).forEach((key) => {
        to[key] = nextSource[key];
      });
    }
  }
  return to;
}
