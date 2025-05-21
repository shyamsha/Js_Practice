// using class to design the auto complete
class AutoComplete {
  constructor() {
    this.root = {};
  }
  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node[char]) {
        node[char] = {};
      }
      node = node[char];
    }
    node.isEnd = true;
  }

  search(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node[char]) {
        return [];
      }
      node = node[char];
    }
    return this.findWords(node, prefix);
  }
  findWords(node, prefix) {
    let words = [];
    if (node.isEnd) {
      words.push(prefix);
    }
    for (let char in node) {
      if (char !== "isEnd") {
        words = words.concat(this.findWords(node[char], prefix + char));
      }
    }
    return words;
  }
}

// Example usage
const autoComplete = new AutoComplete();
autoComplete.insert("apple");
autoComplete.insert("apple_pie");
autoComplete.insert("app");
autoComplete.insert("application");
autoComplete.insert("appstore");
autoComplete.insert("banana");
autoComplete.insert("orange");
autoComplete.insert("grape");
console.log(autoComplete.search("ap")); //[ 'app', 'apple', 'apple_pie', 'application', 'appstore' ]
