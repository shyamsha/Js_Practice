import React, { useState } from "react";
import useFetch from "./useFetch";
import ProductCard from "./ProductCard";

function Product() {
  const [currentPage, setCurrentPage] = useState(1);
  const [products] = useFetch(currentPage);

  const handlePrevPageChange = (page) => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  const handleNextPageChange = (page) => {
    setCurrentPage((currentPage) => currentPage - 1);
  };

  return (
    <div>
      <div className="flex flex-wrap">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Product;
