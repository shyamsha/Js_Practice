import React, { useState, memo } from "react";

function CustomPagination() {
  const numOfPages = 20;
  const limit = 5;

  const [currentPage, setCurrentPage] = useState(0);

  const handlePrevPageChange = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };

  const handleNextPageChange = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  const handleCurrentPageChange = (page) => {
    setCurrentPage(page);
  };
  // tag: CustomPagination of one of typeBUG
  // FIXME: create a function that returns the pages to be rendered based on the current page and limit
  const getPageRenderByLimit = () => {
    let pages = [];
    const start = currentPage;
    const end = start + limit;
    for (let i = start; i < end; i++) {
      // BUG: check if i is greater than 0 and less than numOfPages and some edge cases it returns limit pages
      if (i >= 0 && i < numOfPages) {
        pages.push(i);
      }
    }
    return pages;
  };

  // performed by indexes and this is another way to do it
  const getPagesToBeRendered = (currentPage, limit, numOfPages) => {
    const pageDifference = numOfPages - currentPage;
    if (pageDifference < limit) {
      return new Array(limit).fill(0).map((_, index) => {
        return numOfPages - limit + index;
      });
    }
    return new Array(limit).fill(0).map((_, index) => {
      return currentPage + index;
    });
  };
  const pagesToBeRendered = getPagesToBeRendered(
    currentPage,
    limit,
    numOfPages
  );

  return (
    <div style={{ margin: "15px", display: "flex", gap: "5px" }}>
      <button
        className="disabled:cursor-not-allowed opacity-50 relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        onClick={handlePrevPageChange}
        disabled={currentPage === 0}
      >
        <span class="sr-only">Previous</span>
        <svg
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      {pagesToBeRendered.map((page) => {
        return (
          <span
            key={page + 1}
            style={{
              padding: "5px",
              background: page === currentPage ? "red" : "gray",
              borderRadius: "50px",
              width: "30px",
              height: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => handleCurrentPageChange(page)}
          >
            {page + 1}
          </span>
        );
      })}
      <button
        className="disabled:cursor-not-allowed opacity-50 relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        onClick={handleNextPageChange}
        disabled={currentPage === numOfPages - 1}
      >
        <span class="sr-only">Next</span>
        <svg
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}

export default memo(CustomPagination);
