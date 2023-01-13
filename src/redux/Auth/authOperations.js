import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUser,
  loginUser,
  logoutUser,
  refreshUser,
  setAuthHeader,
  clearAuthHeader,
} from 'services/contacts-API';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await createUser(credentials);
      setAuthHeader(res.token);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await loginUser(credentials);
      setAuthHeader(res.token);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const res = await logoutUser();
    clearAuthHeader();
    return res;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const { token } = thunkAPI.getState().auth;
  if (!token) {
    return thunkAPI.rejectWithValue();
  }
  try {
    setAuthHeader(token);
    const res = await refreshUser();
    return res;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
