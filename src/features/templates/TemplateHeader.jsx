import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useDebounce } from 'use-debounce';
import SearchBar from '../../components/SearchInput';

import { setSearchTermState } from './templates.slicer';

// import { CATEGROYTYPES, DATETYPES, ORDERTYPES } from '../../contants/templates';

const TemplateHeader = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedText] = useDebounce(searchTerm, 100);
  const dispatch = useDispatch();

  useEffect(() => {
    if (debouncedText) {
      dispatch(setSearchTermState(debouncedText));
    }
  }, [debouncedText]);

  return (
    <div className="flex justify-between my-20">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
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
