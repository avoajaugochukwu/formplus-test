import React from "react";

// TotalCount
// DisplayPerPage
// CurrentPage - Global to be changed everywhere
const Pagination = ({ totalCount, displayPerPage, currentPage }) => {
  const handleClick = () => {};

  return (
    <div className="flex justify-between">
      <button
        onClick={() => {
          handleClick("previous");
        }}
      >
        Previous
      </button>
      <p>
        I am in the middle{totalCount} {Math.floor(totalCount / displayPerPage)}
      </p>
      <button
        onClick={() => {
          handleClick("next");
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
