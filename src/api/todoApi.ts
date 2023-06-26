import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type { Task } from '../types/types';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/'
  }),
  endpoints: (builder) => ({
    getTasks: builder.query<Task[], void>({
      query: () => ({
        url: `todos`,
      })
    }),
    deleteTask: builder.query<{}, number | string>({
      query: (id) => ({
        url: `todos/${id}`,
        method: 'DELETE'
      })
    })
  })
})

export const {useGetTasksQuery, useLazyDeleteTaskQuery} = todoApi;