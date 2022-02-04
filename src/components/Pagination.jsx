import PropTypes from 'prop-types';

const Pagination = ({
  totalCount,
  displayPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const handleClick = (direction) => {
    if (direction === 'previous' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }

    if (direction === 'next' && currentPage < totalCount) {
      setCurrentPage(currentPage + 1);
    }

    console.log(currentPage);
  };

  return (
    <div className="flex justify-between">
      <button
        type="button"
        onClick={() => {
          handleClick('previous');
        }}
      >
        Previous
      </button>
      <p>
        I am in the middle
        {totalCount}
        {Math.floor(totalCount / displayPerPage)}
      </p>
      <button
        type="button"
        onClick={() => {
          handleClick('next');
        }}
      >
        Next
      </button>
    </div>
  );
};

Pagination.propTypes = {
  totalCount: PropTypes.number.isRequired,
  displayPerPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
