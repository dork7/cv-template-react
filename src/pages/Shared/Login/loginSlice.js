import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CustomAxios } from '../../../config/axios';
import axios from 'axios';

const namespace = 'login';
export const loginRequest = createAsyncThunk(
  `${namespace}/auth/login`,
  async (body, { rejectWithValue }) => {
    try {
      const data = await CustomAxios.post(`/auth/login`, body);
      return data;
    } catch (err) {
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
      const { response } = action.payload;
      state.isLoading = false;
      state.error = response.data;
    },
  },
});

export const { login } = loginSlice.actions;
export const getUser = (state) => state.login.data;
export default loginSlice.reducer;
