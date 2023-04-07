import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { name: null, profile: null },
  reducers: {
    logIn(state, action) {
      state.name = action.payload.name;
      state.profile = action.payload.profile;
    },
    logOut(state) {
      state.name = null;
      state.profile = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
