import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CustomAxios } from '../../../config/axios';
import axios from 'axios';

const namespace = 'login';
export const loginRequest = createAsyncThunk(
  `${namespace}/request`,
  async () => {
    const data = await CustomAxios.get(
      'https://jsonplaceholder.typicode.com/users/1'
    );
    return data;
  }
);

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
    // loginRequest: (state, action) => {
    //   state.data = action.payload.body;
    // },
  },
  extraReducers: {
    [loginRequest.pending]: (state, action) => {
      state.isLoading = true;
    },
    [loginRequest.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.isLoggedIn = true;
    },
    [loginRequest.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { login } = loginSlice.actions;
export const getUser = (state) => state.login.data;
export default loginSlice.reducer;
