import React, { useState, useEffect } from "react";

function Paginator({ pages, setCurrentPage, currentPage, LIMIT, products }) {
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  useEffect(() => {
    return () => {};
  }, []);
  const handlePrevPageChange = () => {
    setCurrentPage((currentPage) => currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const handleNextPageChange = () => {
    setCurrentPage((currentPage) => currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  console.log();
  const length = [...Array(pages).keys()].length;
  let pageIncrement = null;
  if (length > maxPageNumberLimit) {
    pageIncrement = <span className="pr-2 font-[1100]">&hellip;</span>;
  }

  let pageDecrement = null;
  if (minPageNumberLimit >= 1) {
    pageDecrement = <span className="pl-2 font-[1100]">&hellip;</span>;
  }
  return (
    <div className="p-10 cursor-pointer">
      {currentPage > 0 && <span onClick={handlePrevPageChange}>Prev</span>}
      {pageDecrement}
      <span>
        {[...Array(pages).keys()].map((pageNumber) => {
          if (
            pageNumber < maxPageNumberLimit + 1 &&
            pageNumber > minPageNumberLimit
          ) {
            return (
              <span
                className={
                  "text-xl p-4 " +
                  (pageNumber === currentPage && "font-bold underline")
                }
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
              >
                {pageNumber}
              </span>
            );
          }
        })}
      </span>
      {pageIncrement}
      <span
        className={
          "text-xl p-4 " + (length - 1 === currentPage && "font-bold underline")
        }
        onClick={() => setCurrentPage(length - 1)}
      >
        {length - 1}
      </span>
      {currentPage < pages - 1 && (
        <span onClick={handleNextPageChange}>Next</span>
      )}
    </div>
  );
}

export default Paginator;
