import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Auth, Comment, Post, User } from '../../interfaces/api-interface';

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
    getPost: builder.query<Post | undefined, string>({
      query: (postId) => `posts/?id=${postId}`,
      transformResponse: (response: Post[]) => {
        if (response.length === 0) {
          throw new Error('No posts according your query');
        }
        return response[0];
      },
    }),
    getComments: builder.query<Comment[], string>({
      query: (postId) => `comments/?postId=${postId}`,
      transformResponse: (response: Comment[]) => {
        if (response.length === 0) {
          throw new Error('No comments according your query');
        }
        return response;
      },
    }),
    getUsers: builder.query<User[], void>({
      query: () => '/users',
    }),
    getUser: builder.mutation<Auth, Partial<User>>({
      query: ({ username }) => ({
        url: `users/?username=${username}`,
        method: 'GET',
      }),
      transformResponse: (response: User[]) => {
        if (response.length === 0) {
          return { user: null, isAuth: false };
        }
        return { user: response[0], isAuth: true };
      },
    }),
  }),
});

export const {
  useGetCommentsQuery,
  useGetUserMutation,
  useGetAllPostsQuery,
  useGetPostQuery,
  useGetUsersQuery,
} = api;
