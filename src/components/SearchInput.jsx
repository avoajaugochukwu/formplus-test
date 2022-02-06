import React from 'react';
import PropTypes from 'prop-types';

import searchIcon from '../assets/svg/search-svgrepo-com.svg';

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <div className="my-4 md:my-0 border flex rounded-sm h-10">
    <input
      type="text"
      placeholder="Search Templates"
      value={searchTerm}
      onChange={({ target: { value } }) => setSearchTerm(value)}
      className="outline-none pl-4 placeholder:text-xs w-full"
    />
    <div
      type="button"
      className="w-2/12 px-2 cursor-pointer"
    >
      <img src={searchIcon} alt="Search" className="h-6 w-10 mt-2" />
    </div>
  </div>
);

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};

export default SearchBar;
