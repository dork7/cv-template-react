import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CustomAxios } from '../../../config/axios';

const namespace = 'login';
// export const loginRequest = createAsyncThunk(`${namespace}/key`, async () => {
//   const data = await CustomAxios.get('/users');
//   return data;
// });

const initialState = {
  isLoading: false,
  error: null,
  data: null,
  user: null,
  isLoggedIn: false,
};
const loginSlice = createSlice({
  name: `${namespace}`,
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.data = action.payload;
    },
    loginRequest: (state, action) => {
      state.data = action.payload.body;
    },
  },
});

export const { login, loginRequest } = loginSlice.actions;
export const getUser = (state) => state.login.data;
export default loginSlice.reducer;
