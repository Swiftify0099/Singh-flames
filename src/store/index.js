import { configureStore } from '@reduxjs/toolkit';
import orderSlice from './slices/orderSlice';
import uiSlice from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    order: orderSlice,
    ui: uiSlice,
  },
});
