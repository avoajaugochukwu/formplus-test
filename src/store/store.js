import { configureStore } from '@reduxjs/toolkit';
import templatesReducer from '../features/templates/templatesSlicer';

export default configureStore({
  reducer: {
    templates: templatesReducer,
  },
  devTools: true,
});
