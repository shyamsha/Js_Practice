function isBoolean(value) {
  return value === true || value === false;
}

function isNumber(value) {
  return typeof value === "number";
}

function isNull(value) {
  return value === null;
}

function isString(value) {
  return typeof value === "string";
}

function isSymbol(value) {
  return typeof value === "symbol";
}

function isUndefined(value) {
  return value === undefined;
}
isBoolean(true);
isNumber(1);
isNull(null);
isString("hello");
isSymbol(Symbol("hello"));
isUndefined(undefined);

function isArray(value) {
  return Array.isArray(value);
}

// Alternative to isArray.
function isArrayAlt(value) {
  // For null and undefined.
  if (value == null) {
    return false;
  }

  return value.constructor === Array;
}

function isFunction(value) {
  return typeof value === "function";
}

function isObject(value) {
  // For null and undefined.
  if (value == null) {
    return false;
  }

  const type = typeof value;
  return type === "object" || type === "function";
}

function isPlainObject(value) {
  // For null and undefined.
  if (value == null) {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
}

// Alternative to isPlainObject, Lodash's implementation.
function isPlainObjectAlternative(value) {
  if (!isObject(value)) {
    return false;
  }

  // For objects created via Object.create(null);
  if (Object.getPrototypeOf(value) === null) {
    return true;
  }

  let proto = value;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(value) === proto;
}

typeof 50; //   "number"
typeof "text"; //   "string"
typeof true; //   "boolean"
typeof undefined; //   "undefined"
typeof function () {}; //   "function"
typeof 10n; //   "bigint"
typeof Symbol(); //   "symbol"
typeof [1, 2]; //   "object"
typeof {}; //   "object"

typeof NaN; //   "number"        (NaN is Not a Number)
typeof undeclaredVar; //   "undefined"     (undeclaredVariable is never declared)
typeof Infinity; //   "number"        (Infinity, -Infinity, -0 are all valid numbers in JavaScript)
typeof null; //   "object"        (This stands since the beginning of JavaScript)
typeof /regex/; //   "object"        (regular expressions start and end with '/' in literal form)
