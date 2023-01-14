import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, login, logout, refresh } from './authOperations';

const extraActions = [register, login, logout];
const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const authFulfilledReducer = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};
const logoutFulfilledReducer = state => {
  state.user = { name: null, email: null };
  state.isLoggedIn = false;
  state.token = null;
};
const refreshFulfilledReducer = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};
const refreshPendingReducer = state => {
  state.isRefreshing = true;
};
const refreshRejectedReducer = state => {
  state.isRefreshing = false;
};
const anyPendingReducer = state => {
  return state;
};
const anyRejectedReducer = (state, action) => {
  state.error = action.payload;
};

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
      state.theme = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(refresh.pending, refreshPendingReducer)
      .addCase(refresh.rejected, refreshRejectedReducer)
      .addCase(refresh.fulfilled, refreshFulfilledReducer)
      .addCase(logout.fulfilled, logoutFulfilledReducer)
      .addMatcher(
        isAnyOf(register.fulfilled, login.fulfilled),
        authFulfilledReducer
      )
      .addMatcher(getActions('pending'), anyPendingReducer)
      .addMatcher(getActions('rejected'), anyRejectedReducer),
});

export const authReducer = authSlice.reducer;
export const { setTheme } = authSlice.actions;
