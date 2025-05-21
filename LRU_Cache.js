// LRU cache implementation

class LRUCache {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
  }
  // Implementing Get method
  // If the key is found, delete and reinsert it so that it will be at the top.
  // So an item at the start of Map is the least recently used item.
  // If the key is not found, return -1.
  get(key) {
    if (!this.cache.has(key)) return -1;

    let val = this.cache.get(key);

    this.cache.delete(key);
    this.cache.set(key, val);

    return val;
  }
  // Implementing setting values in put method
  // If the key is already present, delete and reinsert it so that it will be at the top.
  // If the key is not present, check if the cache size is equal to the capacity.
  // If it is, delete the least recently used item (the first item in the Map).
  // Then, add the new key-value pair to the cache.
  // If the cache size is not equal to the capacity, just add the new key-value pair.
  put(key, value) {
    this.cache.delete(key);

    if (this.cache.size === this.capacity) {
      this.cache.delete(this.cache.keys().next().value); // delete the least recently used item
      this.cache.set(key, value);
    } else {
      this.cache.set(key, value);
    }
  }

  // Implement LRU/MRU retrieval methods
  getLeastRecent() {
    return Array.from(this.cache)[0];
  }

  getMostRecent() {
    return Array.from(this.cache)[this.cache.size - 1];
  }
}
// O(1)	The get and put methods have a time complexity of O(1) because they involve operations on a Map data structure,
// which has constant time complexity for operations like get, set, and delete.
let cache = new LRUCache(3);

let arr = [1, 2, 3, 4, 5];
arr.forEach((v) => cache.put(v, v));
console.log(cache.cache); // Map(3) { 3 => 'v:  3', 4 => 'v:  4', 5 => 'v:  5' }

console.log(cache.get(2));
// -1
console.log(cache.get(3));
// "v:3"
console.log(cache.get(5)); // "v:5"
cache.put(6, 6); // it will set key 6 with value 6
cache.put(7, 7);
console.log(cache.cache); // { 5 => 5, 6 => 6, 7 => 7 }
console.log(cache.getLeastRecent(), "least recent1"); // used recently key 5
console.log(cache.getMostRecent(), "most recent1"); // used recently key 7
cache.get(6);
cache.put(6, 6);
console.log(cache.cache); // Map(3) { 5 => 5, 7 => 7, 6 => 6 }
cache.put(8, 8);
console.log(cache.cache); // Map(3) { 7 => 7, 6 => 6, 8 => 8 }

console.log(cache.getLeastRecent(), "least recent"); // used recently key 7 because it was deleted and size is 3
console.log(cache.getMostRecent(), "most recent"); // used recently key 8
console.log(cache.cache); // Map(3) { 7 => 7, 6 => 6, 8 => 8 }

function getLRUCache(capacity) {}
