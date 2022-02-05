import React from 'react';
import PropTypes from 'prop-types';
import { SORTTYPES } from '../contants/templates';

const OrderSelect = ({ order, setOrder }) => (
  <div>
    <fieldset className="border rounded-sm">
      <legend className="ml-2 text-gray-500 font-light text-xs">Order</legend>
      <select
        className="outline-none w-40 text-sm pl-3 pb-2"
        onChange={({ target: { value } }) => setOrder(value)}
      >
        <option value={SORTTYPES.DEFAULT} defaultValue={order}>
          Default
        </option>
        <option
          value={SORTTYPES.ASCENDING}
          selected={order === SORTTYPES.ASCENDING}
        >
          {SORTTYPES.ASCENDING}

        </option>
        <option
          value={SORTTYPES.DESCENDING}
          selected={order === SORTTYPES.DESCENDING}
        >
          {SORTTYPES.DESCENDING}

        </option>
      </select>
    </fieldset>
  </div>
);

OrderSelect.propTypes = {
  order: PropTypes.string.isRequired,
  setOrder: PropTypes.func.isRequired,
};

export default OrderSelect;
