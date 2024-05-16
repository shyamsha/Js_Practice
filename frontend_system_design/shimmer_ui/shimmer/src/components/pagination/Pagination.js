import React from "react";

function Pagination({ pages, setCurrentPage, currentPage }) {
  const handlePrevPageChange = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };

  const handleNextPageChange = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };
  //TODO: Add a pagination like 1 2 3...16 if we click 3 iterate next 3 times and so on 3 4 5...16.
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
