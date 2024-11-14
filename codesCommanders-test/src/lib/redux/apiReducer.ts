import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from '../../interfaces/api-interface';

export const typecodeApi = createApi({
  reducerPath: 'typecodeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    getAllPosts: builder.query<Post[], void>({
      query: () => `posts`,
    }),
  }),
});

export const { useGetAllPostsQuery } = typecodeApi;
