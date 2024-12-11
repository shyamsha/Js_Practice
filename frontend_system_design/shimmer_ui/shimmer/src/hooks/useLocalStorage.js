import { useState, useEffect } from "react";

function getValue(key, defaultValue) {
  let currentValue;

  try {
    currentValue = JSON.parse(
      localStorage.getItem(key) || String(defaultValue)
    );
  } catch (error) {
    currentValue = defaultValue;
  }

  return currentValue;
}

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => getValue(key, defaultValue));
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
