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
  };

  return (
    <div className="flex justify-between pt-10">
      <button
        type="button"
        className={currentPage !== 1 ? 'cursor-pointer' : 'cursor-not-allowed text-gray-400'}
        onClick={currentPage !== 1 ? () => {
          handleClick('previous');
        } : undefined}
      >
        Previous
      </button>
      <p>
        <span className="border rounded border-gray-900 py-1 px-2">
          {currentPage}
        </span>
        {' '}
        of
        {' '}
        {Math.floor(totalCount / displayPerPage)}
      </p>
      <button
        type="button"
        className={currentPage !== totalCount ? 'cursor-pointer' : 'cursor-not-allowed text-gray-400'}
        onClick={currentPage !== totalCount ? () => {
          handleClick('next');
        } : undefined}
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
