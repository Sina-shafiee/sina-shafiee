import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import { authApi } from './auth/authApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query/react';

export const store = configureStore({
  reducer: {
    user: authReducer,
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(authApi.middleware);
  }
});

setupListeners(store.dispatch);
