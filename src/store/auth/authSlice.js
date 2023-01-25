import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'user',
  initialState: {
    user: null
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    updateUser: (state, action) => {
      state.user.data = action.payload;
    }
  }
});

export const { addUser, updateUser } = authSlice.actions;

export default authSlice.reducer;
