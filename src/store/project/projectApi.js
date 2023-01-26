import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const projectApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://portfolio-backend-ten-iota.vercel.app/api/projects',
    baseUrl: 'http://localhost:5000/api/projects',
    fetchFn: async (...args) => {
      // dev only
      //   await pause(2000);
      return fetch(...args);
    }
  }),
  tagTypes: ['project'],
  endpoints: (builder) => ({
    loadProjects: builder.query({
      query: () => {
        return {
          url: '/',
          method: 'GET'
        };
      },
      providesTags: ['project']
    }),
    addProject: builder.mutation({
      query: ({ data, token }) => {
        return {
          url: '/',
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        };
      },
      invalidatesTags: ['project']
    })
  })
});

export const { useLoadProjectsQuery, useAddProjectMutation } = projectApi;
