// write polyfill for JSON.stringify and JSON.parse
// • Should handle all basic types: string, number, boolean,
// null, object, array
// • Functions and undefined: Omitted in objects
// Converted to null in arrays
// • Throws TypeError on circular references
// • Does not handle special objects like Date, Set, Map, etc.

const seen = new WeakSet();

function stringify1(value) {
  // handling circular references
  if (value === null) {
    return "null";
  }
  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }
  if (typeof value === "string") {
    return `"${value}"`;
  }
  if (typeof value === "function" || typeof value === "undefined") {
    return undefined;
  }
  if (Array.isArray(value)) {
    const res = value.map((item) => {
      const str = stringify(item);
      return str === undefined ? "null" : str;
    });
    return `[${res.join(",")}]`;
  }
  if (typeof value === "object") {
    if (seen.has(value)) {
      throw new TypeError("Converting circular structure to JSON");
    }
    seen.add(value);

    const keys = Object.keys(value);
    const entries = keys
      .filter(
        (key) => value[key] !== undefined && typeof value[key] !== "function"
      )
      .map((key) => {
        const val = stringify(value[key]);
        return `"${key}":${val}`;
      });
    seen.delete(value);
    return "{" + entries.join(",") + "}";
  }
  throw new TypeError("Unsupported type: " + typeof value);
}

function stringify(value) {
  if (value === null) {
    return "null";
  }
  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }
  if (typeof value === "string") {
    return `"${value}"`;
  }
  if (typeof value === "function" || typeof value === "undefined") {
    return undefined;
  }
  if (Array.isArray(value)) {
    const res = value.map((item) => {
      const str = stringify(item);
      return str === undefined ? "null" : str;
    });
    return `[${res.join(",")}]`;
  }
  if (typeof value === "object") {
    const keys = Object.keys(value);
    const entries = keys
      .filter(
        (key) => value[key] !== undefined && typeof value[key] !== "function"
      )
      .map((key) => {
        const val = stringify(value[key]);
        return `"${key}":${val}`;
      });
    return "{" + entries.join(",") + "}";
  }
  throw new TypeError("Unsupported type: " + typeof value);
}

console.log(
  stringify({ a: 1, b: "hello", c: [1, 2, 3], d: { e: 4, f: { g: "ht" } } })
); // {"a":1,"b":"hello","c":[1,2,3],"d":{"e":4,"f":{"g":"ht"}}}
console.log(stringify([undefined, function name() {}, 5, null])); // {"d":null}
console.log(
  stringify({ a: undefined, b: "hello", c: function name() {}, d: null })
); // {"b":"hello","d":null}
// write polyfill for JSON.parse

function parse(text) {
  let index = 0;
  function next() {
    return text[index++];
  }
  function parseValue() {
    const char = next();
    if (char === "n") {
      return null;
    }
    if (char === "t") {
      return true;
    }
    if (char === "f") {
      return false;
    }
    if (char === '"') {
      let str = "";
      while (true) {
        const nextChar = next();
        if (nextChar === '"') {
          break;
        }
        str += nextChar;
      }
      return str;
    }
    if (char === "[") {
      const arr = [];
      while (true) {
        const nextChar = next();
        if (nextChar === "]") {
          break;
        }
        index--; // Unconsume the character
        arr.push(parseValue());
        const comma = next();
        if (comma !== "," && comma !== "]") {
          throw new SyntaxError('Expected "," or "]"');
        }
        if (comma === "]") {
          break;
        }
      }
      return arr;
    }
    if (char === "{") {
      const obj = {};
      while (true) {
        const key = parseValue();
        const colon = next();
        if (colon !== ":") {
          throw new SyntaxError('Expected ":"');
        }
        const value = parseValue();
        obj[key] = value;
        const comma = next();
        if (comma !== "," && comma !== "}") {
          throw new SyntaxError('Expected "," or "}"');
        }
        if (comma === "}") {
          break;
        }
      }
      return obj;
    }
    index--; // Unconsume the character
    let numStr = "";
    while (true) {
      const char = next();
      if ("0123456789-".includes(char)) {
        numStr += char;
      } else {
        index--; // Unconsume the character
        break;
      }
    }
    return Number(numStr);
  }

  return parseValue();
}
console.log(parse('{"a":1,"b":"hello","c":[1,2,3],"d":{"e":4}}')); // { a: 1, b: 'hello', c: [ 1, 2, 3 ], d: { e: 4 } }
console.log(parse('{"a":1,"b":"hello","c":[1,2,3],"d":{"e":4,"f":5}}')); // { a: 1, b: 'hello', c: [ 1, 2, 3 ], d: { e: 4, f: 5 } }
