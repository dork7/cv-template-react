import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../pages/Shared/Login/loginSlice';
import registerSlice from '../pages/Shared/Register/registerSlice';
export const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerSlice,
  },
});
