import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CustomAxios } from '../../../config/axios';
import axios from 'axios';

const namespace = 'register';
export const registerRequest = createAsyncThunk(
  `${namespace}/auth/register`,
  async (body, { rejectWithValue }) => {
    try {
      const data = await CustomAxios.post(`/auth/register`, body);
      return data;
    } catch (err) {
      console.log('err', err);
      return rejectWithValue(err);
    }
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
      state.isLoading = true;
    },
    [registerRequest.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.isLoggedIn = true;
      state.error = null;
    },
    [registerRequest.rejected]: (state, action) => {
      const { response } = action.payload;
      state.isLoading = false;
      state.error = response.data;
    },
  },
});

export const { register } = registerSlice.actions;
export const getUser = (state) => state.register.data;
export default registerSlice.reducer;
