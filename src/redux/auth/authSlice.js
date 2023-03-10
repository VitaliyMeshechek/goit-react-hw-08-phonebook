import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { registerUser, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
     builder
    .addCase(logOut.fulfilled, state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    })
    .addCase(refreshUser.pending, state => {
      state.isRefreshing = true;
    })
    .addCase(refreshUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    }).addMatcher(isAnyOf(refreshUser.fulfilled, refreshUser.rejected), (state) => {
      state.isRefreshing = false;
    }).addMatcher(isAnyOf(registerUser.fulfilled, logIn.fulfilled), (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    })
  })

export const authReducer = authSlice.reducer;
