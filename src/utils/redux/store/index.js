import { configureStore } from '@reduxjs/toolkit';
import commonReducer from '../reducer/commonSlice';

export const store = configureStore({
  reducer: {
    common: commonReducer,
  },
});
