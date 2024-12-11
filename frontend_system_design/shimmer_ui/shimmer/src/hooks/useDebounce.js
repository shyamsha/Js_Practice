import React, { useEffect } from "react";

function useDebounce(func, delay) {
  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  };
  useEffect(() => {
    debounce(func, delay);
  }, [func, delay]);
}

export default useDebounce;
