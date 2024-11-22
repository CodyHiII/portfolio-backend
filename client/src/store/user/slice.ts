import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logInLoading: (state) => {
      state.loading = true;
    },
    logInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    logInError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { logInLoading, logInSuccess, logInError } = userSlice.actions;
export default userSlice.reducer;
