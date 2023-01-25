import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query/react';
import authReducer from './auth/authSlice';
import { userApi } from './auth/authApi';
import projectReducer from './project/projectSlice';
import { projectApi } from './project/projectApi';

export const store = configureStore({
  reducer: {
    user: authReducer,
    project: projectReducer,
    [userApi.reducerPath]: userApi.reducer,
    [projectApi.reducerPath]: projectApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(projectApi.middleware);
  }
});

setupListeners(store.dispatch);
