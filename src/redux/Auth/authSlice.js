import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refresh } from './authOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
    theme: 'Dark',
  },
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload 
}
  },
  extraReducers: builder =>
    builder
      .addCase(register.pending, (state) => {
        return state;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(login.pending, (state) => {
        return state;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.isLoggedIn = false;
        state.token = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(refresh.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      })
      .addCase(refresh.pending, (state) => {
      state.isRefreshing = true;
      })
      .addCase(refresh.rejected, (state) => {
      state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
export const { setTheme } = authSlice.actions;
