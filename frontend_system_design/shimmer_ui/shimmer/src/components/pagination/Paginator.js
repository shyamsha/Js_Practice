import React, { useState, memo } from "react";

function Paginator({ pages, setCurrentPage, currentPage }) {
  const pageNumberLimit = 5;
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const handlePrevPageChange = () => {
    setCurrentPage((currentPage) => currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const handleNextPageChange = () => {
    setCurrentPage((currentPage) => currentPage + 1);
    if (currentPage > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  console.log();
  const length = [...Array(pages).keys()].length;
  let pageIncrement = null;
  if (length > maxPageNumberLimit) {
    pageIncrement = (
      <span className="pr-2 font-[1100]">&sdot;&sdot;&sdot;</span>
    );
  }

  let pageDecrement = null;
  if (minPageNumberLimit >= 1) {
    pageDecrement = (
      <span className="pl-2 font-[1100]">&sdot;&sdot;&sdot;</span>
    );
  }
  return (
    <div className="p-10 cursor-pointer">
      {currentPage > 0 && <span onClick={handlePrevPageChange}>Prev</span>}
      {pageDecrement}
      <span>
        {[...Array(pages).keys()].map((pageNumber) => {
          if (
            pageNumber < maxPageNumberLimit &&
            pageNumber >= minPageNumberLimit
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
                {console.log([...Array(pages).keys()], pageNumber)}

                {pageNumber + 1}
              </span>
            );
          }
        })}
      </span>
      {pageIncrement}
      {currentPage < pages - 1 && (
        <span onClick={handleNextPageChange}>Next</span>
      )}
    </div>
  );
}

export default memo(Paginator);
