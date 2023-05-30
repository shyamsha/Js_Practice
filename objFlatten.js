// nested obj to one liner obj

const obj = {
  fullName: "syam",
  age: 29,
  address: {
    city: "bangalore",
    state: "karnataka",
    pinCodes: {
      jayanagar: 560011,
      HSR: 560046,
    },
  },
};

const flattenObject = (obj) => {
  const flattened = {};

  Object.keys(obj).forEach((key) => {
    const value = obj[key];

    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      Object.assign(flattened, flattenObject(value));
    } else {
      flattened[key] = value;
    }
  });

  return flattened;
};
console.log(flattenObject(obj));

// convert obj readable one liner obj

const obj1 = {
  fullName: "syam",
  age: 29,
  address: {
    city: "bangalore",
    state: "karnataka",
    pinCodes: {
      east: [{ jayanagar: 560011 }],
      north: [{ hsr: 560046 }],
    },
  },
  mentor: {
    name: "syam",
    training: { HTML: true, CSS: true, JavaScript: true, ReactJs: true },
  },
};

function objFlatten(obj) {
  let newObj = {};
  for (const key in obj) {
    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      !Array.isArray(obj[key])
    ) {
      const temp = objFlatten(obj[key]);
      for (const keyTemp in temp) {
        newObj[key + "." + keyTemp] = temp[keyTemp];
      }
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
console.log(objFlatten(obj1));
