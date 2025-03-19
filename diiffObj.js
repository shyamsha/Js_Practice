// find the differences between two deeply nested objects

function objDiff(obj1, obj2) {
  if (!isObject(obj1) && !isObject(obj2)) {
    //if both primitive
    return obj1 === obj2 ? {} : [obj1, obj2];
  }
  if (!isObject(obj1) || !isObject(obj2)) {
    //if one of them primitive
    return [obj1, obj2];
  }
  if (Array.isArray(obj1) !== Array.isArray(obj2)) {
    //if one is array one is obj
    return [obj1, obj2];
  }
  const diff = {};
  for (const key in obj1) {
    if (obj2.hasOwnProperty(key)) {
      const res = objDiff(obj1[key], obj2[key]);
      if (Object.keys(res).length > 0) {
        diff[key] = res;
      }
    }
  }
  return diff;
  function isObject(obj) {
    return typeof obj === "object" && obj !== null;
  }
}
const object1 = {
  x: 5,
  y: 6,
  array: [1, 2, 3, 4],
};
const object2 = {
  x: 6,
  z: 7,
  array: [1, 2, {}],
};
console.log(objDiff(object1, object2));
