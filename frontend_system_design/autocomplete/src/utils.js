import { FRUITS } from "./data.js";
export const getSuggestion = (keyword) => {
  const result = FRUITS.filter(
    (fruit) =>
      fruit.substring(0, keyword.length).toLowerCase() === keyword.toLowerCase()
  );
  return new Promise((res) => {
    setTimeout(() => {
      res(result);
    }, 1000);
  });
};

export const debounce = (fn, delay = 500) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};
