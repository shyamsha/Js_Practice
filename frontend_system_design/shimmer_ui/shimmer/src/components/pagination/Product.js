import React, { useState } from "react";
import useFetch from "./useFetch";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

function Product() {
  const LIMIT = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [products, pages] = useFetch({ currentPage, LIMIT });

  return (
    <div>
      <div className="flex flex-wrap">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pages={pages}
      />
    </div>
  );
}

export default Product;
