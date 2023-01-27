import { createSlice } from '@reduxjs/toolkit';

const projectSlice = createSlice({
  name: 'project',
  initialState: {
    projects: []
  },
  reducers: {
    addProjects: (state, action) => {
      state.projects = action.payload;
    }
  }
});

export const { addProjects } = projectSlice.actions;
export default projectSlice.reducer;
