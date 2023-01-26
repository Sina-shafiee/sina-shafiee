import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import pause from '../../utils/pause';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://portfolio-backend-ten-iota.vercel.app/api/auth',
    fetchFn: async (...args) => {
      // dev only
      await pause(2000);
      return fetch(...args);
    }
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (user) => {
        return {
          headers: { 'Content-Type': 'application/json' },
          url: '/login',
          method: 'POST',
          body: JSON.stringify({
            email: user.email,
            password: user.password
          })
        };
      }
    }),
    updateUser: builder.mutation({
      query: ({ name, token }) => {
        return {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          url: '/update',
          method: 'PATCH',
          body: JSON.stringify({
            name
          })
        };
      }
    })
  })
});

export const { useLoginMutation, useUpdateUserMutation } = userApi;
