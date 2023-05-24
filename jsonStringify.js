// write polyfill of JSON.stringify()

/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function (object) {
  if (object === null || object === undefined) {
    return String(object);
  }
  // arrays
  if (Array.isArray(object)) {
    let values = object.map((obj) => jsonStringify(obj));
    return `[${values.join(",")}]`;
  }
  // objects
  if (typeof object === "object") {
    let keys = Object.keys(object);
    let keyValues = keys.map((key) => `"${key}":${jsonStringify(object[key])}`);
    return `{${keyValues.join(",")}}`;
  }
  // strings
  if (typeof object === "string") {
    return `"${String(object)}"`;
  }
  return String(object);
};

// using switch case

/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function (object) {
  switch (typeof object) {
    case "object":
      if (Array.isArray(object)) {
        const elements = object.map((element) => jsonStringify(element));
        return `[${elements.join(",")}]`;
      } else if (object) {
        const keys = Object.keys(object);
        const keyValuePairs = keys.map(
          (key) => `"${key}":${jsonStringify(object[key])}`
        );
        return `{${keyValuePairs.join(",")}}`;
      } else {
        return "null";
      }
    case "boolean":
    case "number":
      return `${object}`;
    case "string":
      return `"${object}"`;
    default:
      return "";
  }
};
