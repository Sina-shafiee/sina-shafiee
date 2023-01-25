import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const projectApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://portfolio-backend-ten-iota.vercel.app/api/projects',
    fetchFn: async (...args) => {
      // dev only
      //   await pause(2000);
      return fetch(...args);
    }
  }),
  endpoints: (builder) => ({
    loadProjects: builder.query({
      query: () => {
        return {
          url: '/',
          method: 'GET'
        };
      }
    })
  })
});

export const { useLoadProjectsQuery } = projectApi;
