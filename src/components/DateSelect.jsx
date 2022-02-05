import React from 'react';
import PropTypes from 'prop-types';
import { SORTTYPES } from '../contants/templates';

const DateSelect = ({ date, setDate }) => (
  <div>
    <fieldset className="border rounded-sm">
      <legend className="ml-2 text-gray-500 font-light text-xs">Date</legend>
      <select
        className="outline-none w-40 text-sm pl-3 pb-2"
        onChange={({ target: { value } }) => setDate(value)}
      >
        <option value={SORTTYPES.DEFAULT} defaultValue={date}>
          Default
        </option>
        <option
          selected={date === SORTTYPES.ASCENDING}
          value={SORTTYPES.ASCENDING}
        >
          {SORTTYPES.ASCENDING}
        </option>
        <option
          selected={date === SORTTYPES.DESCENDING}
          value={SORTTYPES.DESCENDING}
        >
          {SORTTYPES.DESCENDING}
        </option>
      </select>
    </fieldset>
  </div>
);
DateSelect.propTypes = {
  date: PropTypes.string.isRequired,
  setDate: PropTypes.func.isRequired,
};

export default DateSelect;
