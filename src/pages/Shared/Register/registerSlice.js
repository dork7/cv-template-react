import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CustomAxios } from '../../../config/axios';
import axios from 'axios';

const namespace = 'register';
export const registerRequest = createAsyncThunk(
  `${namespace}/auth/register`,
  async (body) => {
    const data = await CustomAxios.post(`/auth/register`, body);
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
const registerSlice = createSlice({
  name: `${namespace}`,
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [registerRequest.pending]: (state, action) => {
      console.log('aciton in pending', action);
      state.isLoading = true;
    },
    [registerRequest.fulfilled]: (state, action) => {
      console.log('action', action);
      state.isLoading = false;
      state.data = action.payload.data;
      state.isLoggedIn = true;
    },
    [registerRequest.rejected]: (state, action) => {
      console.log('action in rejected', action);
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { register } = registerSlice.actions;
export const getUser = (state) => state.register.data;
export default registerSlice.reducer;
