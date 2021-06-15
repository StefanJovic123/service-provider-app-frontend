// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints

console.log('process.env.API_URL', process.env.REACT_APP_API_URL)

export const serviceProviderApi = createApi({
  reducerPath: 'serviceProviderApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: 'login',
        method: 'POST',
        body
      }),
      invalidatesTags: [{ type: 'Post', id: 'LOGIN' }],
    }),

    signup: builder.mutation({
      query: (body) => ({
        url: 'signup',
        method: 'POST',
        body
      }),
      invalidatesTags: [{ type: 'Post', id: 'SIGNUP' }],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpointsexport
export const {
  useLoginMutation,
  useSignupMutation,
} = serviceProviderApi;