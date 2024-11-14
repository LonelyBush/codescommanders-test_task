import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthResponse, Post, User } from '../../interfaces/api-interface';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    getAllPosts: builder.query<Post[], void>({
      query: () => `posts`,
    }),
    getPost: builder.query<Post, string>({
      query: (postId) => `posts/?id=${postId}`,
    }),
    getUsers: builder.query<User[], void>({
      query: () => '/users',
    }),
    getUser: builder.mutation<AuthResponse, Partial<User>>({
      query: ({ username }) => ({
        url: `users/?username=${username}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetUserMutation,
  useGetAllPostsQuery,
  useGetPostQuery,
  useGetUsersQuery,
} = api;
