// local storage with expiry
// Usage: like we use localStorage, but with expiry time
const localStorageWithExpiry = {
  setItem(key, value, expiry) {
    const data = {
      value,
      expiry: expiry ? Date.now + expiry : null,
    };
    localStorage.setItem(key, JSON.stringify(data));
  },
  getItem(key) {
    const item = localStorage.getItem(key);
    if (!item) {
      return null;
    }
    const parsedItem = JSON.parse(item);
    try {
      if (parsedItem.expiry && Date.now() > parsedItem.expiry) {
        localStorage.removeItem(key);
      }
    } catch (error) {
      console.error("Error parsing stored data:", error);
      return null;
    }
    return parsedItem.value;
  },
};

function localStorageExpiry() {
  localStorageWithExpiry.setItem("key", "value", 2000);
  console.log(localStorageWithExpiry.getItem("key"));
}
localStorageExpiry();
