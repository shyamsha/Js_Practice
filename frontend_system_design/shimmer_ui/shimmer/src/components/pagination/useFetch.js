import React, { useEffect, useState } from "react";

function useFetch({ currentPage, LIMIT }) {
  const [products, setProducts] = useState([]);
  const [pages, setPages] = useState(0);
  let abortController = new AbortController();

  const fetchProducts = async () => {
    let url = `https://dummyjson.com/products?limit=${LIMIT}&skip=${
      currentPage * LIMIT
    }&select=title,price,description,thumbnail,discountPercentage`;
    let data = await fetch(url, { signal: abortController.signal });
    const json = await data.json();
    setProducts(json.products);
    setPages(json.total / LIMIT);
  };
  useEffect(() => {
    fetchProducts();
    return () => {
      // abortController.abort();
    };
  }, [products]);

  return [products, pages];
}

export default useFetch;
