const arr = [2, 2, 3, 4, 5, 5, 6, 6, 7, 2, 1];
// output shoud be [{value:2,count:3},{value:7,count:1}...]
const arr1 = [...new Set(arr)]; //The Set object lets you store unique values of any type
const c = [];

arr1.map((curr) => {
  let count = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (curr === arr[i]) {
      count += 1;
    }
  }
  c.push({ value: curr, count: count });
});

console.log(c);

// pair duplicates sub array

const d = [];

arr1.map((curr) => {
  let subArray = [];
  for (let i = 0; i <= arr.length; i++) {
    if (curr === arr[i]) {
      subArray.push(arr[i]);
    }
  }
  d.push(subArray); // [[2, 2, 2], [3], [4], [5, 5], [6, 6], [7], [1]]
});

console.log(d);

const { log } = require("console");
//new map
log("------Maps--------");
// The Map object holds key-value pairs with unique keys. The keys in Map are ordered
// using map = Object.create(null), achieving prototype
let map = new Map();
map.set(1, "one");
map.set(1, "one");
map.set(2, "two");
map.set(2, "two");
log(map);
let get = map.get(1);
log(get);
let has = map.has(1);
log(has);
let size = map.size;
log(size);
let del = map.delete(1);
log(del);
// let clear = map.clear()
// log(map)
keys = map.keys();
log(keys);
values = map.values();
log(values);
const firstValue = values.next();
const secondValue = values.next().value;
log(firstValue, secondValue);
let entries = map.entries();
log(entries);
let secondEntriesValue = entries.next().value;
log(secondEntriesValue);
map.forEach((value, key) => {
  log(key, value);
});
// weakMaps
log("------weakMaps--------");
//they have key diff is it will key must be object only and garbage collector
//map has diff methods but WeakMap are not only set and get and has and delete

//Sets
log("------Sets--------");
// The Set object lets you store unique values of any type, whether primitive values or object references. its  not key-value pair
let newSet = new Set();
newSet.add(1).add(2);
newSet.add("one");
newSet.add("o");
log(newSet);
let hasValue = newSet.has("two");
log(hasValue);
let sizeValue = newSet.size;
log(sizeValue);
let delValue = newSet.delete(1);
log(delValue);
// let clearValue = newSet.clear()
// log(newSet.size)
values = newSet.values();
log(values);
const firstSetValue = values.next();
const secondSetValue = values.next().value;
log(firstSetValue, secondSetValue);
let setEntries = newSet.entries();
log(setEntries);
let firstSetEntriesValue = setEntries.next().value;
log(firstSetEntriesValue);
newSet.forEach((value) => {
  log(value);
});
// we can iterate through this way
const set1 = new Set();

set1.add(42);
set1.add("forty two");

const iterator1 = set1[Symbol.iterator]();

console.log(iterator1.next().value);
// Expected output: 42

console.log(iterator1.next().value);
// Expected output: "forty two"
// weakSets
log("------weakSets--------");
//they have key diff is it will key must be object only and garbage collector
//set has diff methods but WeakSet are only add and has and delete
// A value in the WeakSet may only occur once. It is unique in the WeakSet's collection.
