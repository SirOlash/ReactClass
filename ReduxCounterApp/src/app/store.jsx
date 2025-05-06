import {configureStore} from '@reduxjs/toolkit'; // This is Object destructuring
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
  });