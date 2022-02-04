import { createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../contants/api";

export const initialState = {
  loading: false,
  hasErrors: false,
  templates: [],
};

// A slice for templates with our three reducers
const templatesSlice = createSlice({
  name: "templates",
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
  },
});

// Three actions generated from the slice
export const { getTemplates, getTemplatesSuccess, getTemplatesFailure } =
  templatesSlice.actions;

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