import React from "react";

function Pagination({ pages, setCurrentPage, currentPage }) {
  const handlePrevPageChange = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };

  const handleNextPageChange = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  return (
    <div className="p-10 cursor-pointer">
      {currentPage > 0 && <span onClick={handlePrevPageChange}>Prev</span>}
      <span>
        {[...Array(pages).keys()].map((pageNumber) => {
          return (
            <span
              className={
                "text-xl p-4 " +
                (pageNumber === currentPage && "font-bold underline")
              }
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
            >
              {pageNumber + 1}
            </span>
          );
        })}
      </span>
      {currentPage < pages - 1 && (
        <span onClick={handleNextPageChange}>Next</span>
      )}
    </div>
  );
}

export default Pagination;
