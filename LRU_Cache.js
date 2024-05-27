// LRU cache implementation

class LRUCache {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
  }
  // Implementing Get method
  get(key) {
    if (!this.cache.has(key)) return -1;

    let val = this.cache.get(key);

    this.cache.delete(key);
    this.cache.set(key, val);

    return val;
  }
  // Implementing setting values in put method
  put(key, value) {
    this.cache.delete(key);

    if (this.cache.size === this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
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

let cache = new LRUCache(3);

let arr = [1, 2, 3, 4, 5];
arr.forEach((v) => cache.put(v, `v: + ${v}`));
console.log(cache.cache); // Map(3) { 3 => 'v: + 3', 4 => 'v: + 4', 5 => 'v: + 5' }

console.log(cache.get(2));
// -1
console.log(cache.get(3));
// "v:3"
console.log(cache.get(5)); // "v:5"
console.log(cache.put(6, 6)); // it will set key 6 with value 6
console.log(cache.put(7, 7));
console.log(cache.getLeastRecent());

console.log(cache.cache); // Map(3) { 5 => 'v: + 5', 6 => 6, 7 => 7 }

console.log(cache.getLeastRecent());
console.log(cache.getMostRecent());
console.log(cache.cache); // Map(3) { 5 => 'v: + 5', 6 => 6, 7 => 7 }

function getLRUCache(capacity) {}
