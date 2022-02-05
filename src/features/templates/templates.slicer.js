/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';
import API_URL from '../../contants/api';
import { CATEGROYTYPES, DATETYPES, ORDERTYPES } from '../../contants/templates';

export const initialState = {
  loading: false,
  hasErrors: false,
  templates: [],
  searchTerm: '',
  category: CATEGROYTYPES.ALL,
  date: DATETYPES.DEFAULT,
  order: ORDERTYPES.DEFAULT,
};

// A slice for templates with our three reducers
const templatesSlice = createSlice({
  name: 'templates',
  initialState,
  reducers: {
    getTemplates: (state) => {
      state.loading = true;
    },
    getTemplatesSuccess: (state, { payload }) => {
      state.templates = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getTemplatesFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
    setSearchTermState: (state, { payload }) => {
      state.searchTerm = payload;
    },
    setCategoryState: (state, { payload }) => {
      state.category = payload;
    },
  },
});

// Three actions generated from the slice
export const {
  getTemplates, getTemplatesSuccess, getTemplatesFailure, setSearchTermState,
} = templatesSlice.actions;

// A selector
export const templatesSelector = (state) => state.templates;

// The reducer
export default templatesSlice.reducer;

// Asynchronous thunk action
export function fetchTemplates() {
  return async (dispatch) => {
    dispatch(getTemplates());

    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      dispatch(getTemplatesSuccess(data));
    } catch (error) {
      dispatch(getTemplatesFailure());
    }
  };
}
