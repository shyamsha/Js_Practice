// You are given two arrays of objects. Each object contains an id field and other key-value data. The goal is to merge the data by id.
// • If an id exists in both arrays, merge the properties.
// • If it exists only in one, include it as is.
// • In case of conflict (same key but different values), prefer values from the second array.

function mergeArrayWithId(arr1, arr2) {
  const merged = new Map();

  arr1.forEach((item) => {
    merged.set(item.id, { ...item });
  });

  arr2.forEach((item) => {
    if (merged.has(item.id)) {
      merged.set(item.id, { ...merged.get(item.id), ...item });
    } else {
      merged.set(item.id, { ...item });
    }
  });

  return Array.from(merged.values());
}

const arr1 = [
  { id: 1, name: "a" },
  { id: 2, name: "s" },
];
const arr2 = [
  { id: 3, name: "b" },
  { id: 2, age: 23 },
];
console.log(mergeArrayWithId(arr1, arr2));

function mergeArrayWithId1(arr1, arr2) {
  const obj = {};
  arr1.forEach((item) => {
    obj[item.id] = { ...item };
  });
  arr2.forEach((item) => {
    if (obj[item.id]) {
      obj[item.id] = { ...obj[item.id], ...item };
    } else {
      obj[item.id] = { ...item };
    }
  });
  return Object.values(obj);
}
console.log(mergeArrayWithId1(arr1, arr2));
