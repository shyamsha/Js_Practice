import React, { useState } from "react";
import useFetch from "./useFetch";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import Paginator from "./Paginator";

function Product() {
  const LIMIT = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const [products, pages] = useFetch({ currentPage, LIMIT });

  return (
    <div>
      <div className="flex flex-wrap">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      {/* <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pages={pages}
      /> */}
      <Paginator
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pages={pages}
        LIMIT={LIMIT}
      />
    </div>
  );
}

export default Product;
