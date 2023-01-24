import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import { userApi } from './auth/authApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query/react';

export const store = configureStore({
  reducer: {
    user: authReducer,
    [userApi.reducerPath]: userApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(userApi.middleware);
  }
});

setupListeners(store.dispatch);
