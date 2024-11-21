function areDeeplyEqual1(o1, o2) {
  if (o1 === null || typeof o1 !== "object") {
    return o1 === o2;
  }
  if (typeof o1 !== typeof o2) {
    return false;
  }
  if (Array.isArray(o1) !== Array.isArray(o2)) {
    return false;
  }
  if (Array.isArray(o1)) {
    if (o1.length !== o2.length) {
      return false;
    }
    for (let i = 0; i < o1.length; i++) {
      if (!areDeeplyEqual1(o1[i], o2[i])) {
        return false;
      }
    }
    return true;
  } else {
    const keys1 = Object.keys(o1);
    const keys2 = Object.keys(o2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (const key of keys1) {
      if (!areDeeplyEqual1(o1[key], o2[key])) {
        return false;
      }
    }
    return true;
  }
}
let o1 = { L: [1, 2, 3] },
  o2 = { L: [1, 2, 3] };
console.log(areDeeplyEqual1(o1, o2));

// Using JSON.stringify and Sorting and fromEntries

function helper(key, value) {
  if (value && typeof value === "object" && !Array.isArray(value))
    return Object.fromEntries(Object.entries(value).sort());
  else return value;
}

function areDeeplyEqual2(o1, o2) {
  const stringifiedO1 = JSON.stringify(o1, helper);
  const stringifiedO2 = JSON.stringify(o2, helper);

  return stringifiedO1 === stringifiedO2;
}
