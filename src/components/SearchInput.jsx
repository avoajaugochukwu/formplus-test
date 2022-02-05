import React from 'react';
import PropTypes from 'prop-types';

import searchIcon from '../assets/svg/search-svgrepo-com.svg';

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <div className="border flex rounded-sm">
    <input
      type="text"
      placeholder="Search Templates"
      value={searchTerm}
      onChange={({ target: { value } }) => setSearchTerm(value)}
      className="outline-none pl-4 placeholder:text-xs"
    />
    <button
      type="button"
      className="w-full px-2"
    >
      <img src={searchIcon} alt="Search" className="w-7 p-1" />
    </button>
  </div>
);

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};

export default SearchBar;
