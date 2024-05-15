import React, { useEffect, useState } from "react";

function useFetch(currentPage) {
  const [products, setProducts] = useState([]);
  const LIMIT = 6;
  let abortController = new AbortController();

  const fetchProducts = async () => {
    let url = `https://dummyjson.com/products?limit=${LIMIT}&skip=${
      currentPage * LIMIT
    }&select=title,price,description,thumbnail,discountPercentage`;
    let data = await fetch(url, { signal: abortController.signal });
    const json = await data.json();
    setProducts(json.products);
  };
  useEffect(() => {
    fetchProducts();
    return () => {
      // abortController.abort();
    };
  }, [products]);

  return [products];
}

export default useFetch;
