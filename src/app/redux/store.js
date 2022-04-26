import { configureStore } from '@reduxjs/toolkit';
import contactReducer from '../redux/ContactSlice'


export const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});
