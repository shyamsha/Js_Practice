var areDeeplyEqual = function (a, b) {
  if (a === b) return true;
  if (typeof a != "object" || typeof b != "object" || a == null || b == null)
    return false;
  if (Array.isArray(a) || Array.isArray(b)) {
    if (String(a) !== String(b)) {
      return false;
    }
  }

  let keysA = Object.keys(a),
    keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key)) return false;

    if (typeof a[key] === "function" || typeof b[key] === "function") {
      if (a[key].toString() != b[key].toString()) return false;
    } else {
      if (!areDeeplyEqual(a[key], b[key])) return false;
    }
  }
  return true;
};

//another way for efficient

var areDeeplyEqual1 = function (o1, o2) {
  if (o1 === o2) return true;
  if (o1 === null || o2 === null) return false;
  if (String(o1) !== String(o2)) return false;

  if (typeof o1 !== "object") {
    return o1 === o2;
  }

  if (Array.isArray(o1)) {
    if (o1.length !== o2.length) return false;

    for (let i = 0; i < o1.length; i++) {
      if (!areDeeplyEqual(o1[i], o2[i])) return false;
    }

    return true;
  }

  if (Object.keys(o1).length !== Object.keys(o2).length) return false;

  for (const key in o1) {
    if (!areDeeplyEqual(o1[key], o2[key])) return false;
  }

  return true;
};

// Using JSON.stringify and Sorting and fromEntries

function helper(key, value) {
  if (value && typeof value === "object" && !Array.isArray(value))
    return Object.fromEntries(Object.entries(value).sort());
  else return value;
}

var areDeeplyEqual2 = function (o1, o2) {
  const stringifiedO1 = JSON.stringify(o1, helper);
  const stringifiedO2 = JSON.stringify(o2, helper);

  return stringifiedO1 === stringifiedO2;
};
