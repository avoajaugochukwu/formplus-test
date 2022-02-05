import { configureStore } from '@reduxjs/toolkit';
import templatesReducer from '../features/templates/templates.slicer';

export default configureStore({
  reducer: {
    templates: templatesReducer,
  },
  devTools: true,
});
