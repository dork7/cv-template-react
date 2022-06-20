import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../pages/Shared/Login/loginSlice';
export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});
