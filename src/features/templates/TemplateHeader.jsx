import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useDebounce } from 'use-debounce';

import SearchBar from '../../components/SearchInput';
import CategorySelect from '../../components/CategorySelect';

import {
  setSearchTermState, setCategoryState, setDateState, setOrderState,
} from './templates.slicer';
import { CATEGROYTYPES, SORTTYPES } from '../../contants/templates';
import DateSelect from '../../components/DateSelect';
import OrderSelect from '../../components/OrderSelect';

const TemplateHeader = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState(CATEGROYTYPES.ALL);
  const [date, setDate] = useState(SORTTYPES.DEFAULT);
  const [order, setOrder] = useState(SORTTYPES.DEFAULT);

  const [debouncedText] = useDebounce(searchTerm, 100);
  const dispatch = useDispatch();

  useEffect(() => {
    if (debouncedText) {
      dispatch(setSearchTermState(debouncedText));
    }
  }, [debouncedText]);

  const resetOrder = () => {
    dispatch(setOrderState(SORTTYPES.DEFAULT));
    setOrder(SORTTYPES.DEFAULT);
  };

  const resetDate = () => {
    dispatch(setDateState(SORTTYPES.DEFAULT));
    setDate(SORTTYPES.DEFAULT);
  };

  useEffect(() => {
    dispatch(setCategoryState(category));
    dispatch(setSearchTermState(''));
    setSearchTerm('');
    resetDate();
    resetOrder();
  }, [category]);

  useEffect(() => {
    dispatch(setDateState(date));
    if (date !== SORTTYPES.DEFAULT) {
      resetOrder();
    }
  }, [date]);

  useEffect(() => {
    dispatch(setOrderState(order));
    if (order !== SORTTYPES.DEFAULT) {
      resetDate();
    }
  }, [order]);

  return (
    <div className="md:flex md:justify-between my-20">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {/* **************************** */}
      <div className="md:flex gap-x-4">
        <div>
          <p className="mt-3 text-gray-500 text-sm" id="sort-by">Sort by:</p>
        </div>
        <CategorySelect category={category} setCategory={setCategory} />

        <DateSelect date={date} setDate={setDate} />

        <OrderSelect order={order} setOrder={setOrder} />
      </div>
    </div>
  );
};

export default TemplateHeader;
