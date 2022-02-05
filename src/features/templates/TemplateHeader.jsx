import React, { useState } from 'react';
import searchIcon from '../../assets/svg/search-svgrepo-com.svg';
// import { CATEGROYTYPES, DATETYPES, ORDERTYPES } from '../../contants/templates';

const TemplateHeader = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchClick = (searchValue) => {
    // run dispatch for updating state
    console.log(searchValue);
  };

  console.log('Money');
  return (
    <div className="flex justify-between my-20">
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
          onClick={() => handleSearchClick(searchTerm)}
        >
          <img src={searchIcon} alt="Search" className="w-7 p-1" />
        </button>
      </div>
      {/* **************************** */}
      <div className="flex gap-x-4">
        <div>
          <p className="mt-3 text-gray-500 text-sm">Sort by:</p>
        </div>
        <div>
          <fieldset className="border rounded-sm">
            <legend className="ml-2 text-gray-500 font-light text-xs">
              Category
            </legend>
            <select className="outline-none w-40 text-sm pl-3 pb-2">
              <option value="ALL">All</option>
              <option value="ECOMMERCE">E-Commerce</option>
              <option value="EDUCATION">Education</option>
              <option value="HEALTH">Health</option>
            </select>
          </fieldset>
        </div>
        {/* **************************** */}
        <div>
          <fieldset className="border rounded-sm">
            <legend className="ml-2 text-gray-500 font-light text-xs">
              Order
            </legend>
            <select className="outline-none w-40 text-sm pl-3 pb-2">
              <option value="ALL">Default</option>
              <option value="ECOMMERCE">Ascending</option>
              <option value="EDUCATION">Descending</option>
            </select>
          </fieldset>
        </div>
        {/* **************************** */}
        <div>
          <fieldset className="border rounded-sm">
            <legend className="ml-2 text-gray-500 font-light text-xs">
              Date
            </legend>
            <select className="outline-none w-40 text-sm pl-3 pb-2">
              <option value="ALL">Default</option>
              <option value="ECOMMERCE">Ascending</option>
              <option value="EDUCATION">Descending</option>
            </select>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default TemplateHeader;
