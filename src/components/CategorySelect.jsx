import React from 'react';
import PropTypes from 'prop-types';
import { CATEGROYTYPES } from '../contants/templates';

const CategorySelect = ({ category, setCategory }) => (
  <div>
    <fieldset className="border rounded-sm">
      <legend className="ml-2 text-gray-500 font-light text-xs">
        Category
      </legend>
      <select
        className="outline-none w-40 text-sm pl-3 pb-2"
        onChange={({ target: { value } }) => setCategory(value)}
      >
        <option value={CATEGROYTYPES.ALL} defaultValue={category}>
          All
        </option>
        <option value={CATEGROYTYPES.ECOMMERCE}>
          {CATEGROYTYPES.ECOMMERCE}
        </option>
        <option value={CATEGROYTYPES.EDUCATION}>
          {CATEGROYTYPES.EDUCATION}
        </option>
        <option value={CATEGROYTYPES.HEALTH}>
          {CATEGROYTYPES.HEALTH}
        </option>
      </select>
    </fieldset>
  </div>
);

CategorySelect.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default CategorySelect;
