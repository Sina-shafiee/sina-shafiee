import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://portfolio-backend-ten-iota.vercel.app/api/auth/'
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
    })
  })
});

export const { useLoginMutation } = authApi;
