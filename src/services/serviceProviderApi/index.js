// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
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

    getSkills: builder.query({
      query: () => ({
        url: 'skills',
        method: 'GET',
        transformResponse: (response) => response.data,
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('jwt')}`
        }
      }),
      invalidatesTags: [{ type: 'Get', id: 'SKILLS' }],
    }),

    pickSkill: builder.mutation({
      query: (body) => ({
        url: 'user-skills',
        method: 'POST',
        body,
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('jwt')}`
        }
      }),
      invalidatesTags: [{ type: 'Get', id: 'SKILLS' }],
    }),


    completeProfile: builder.mutation({
      query: (body) => ({
        url: 'complete-profile',
        method: 'POST',
        body,
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('jwt')}`
        }
      }),
      invalidatesTags: [{ type: 'Get', id: 'SKILLS' }],
    }),

    getRequests: builder.query({
      query: () => ({
        url: 'requests',
        method: 'GET',
        transformResponse: (response) => response.data,
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('jwt')}`
        }
      }),
      invalidatesTags: [{ type: 'Get', id: 'SKILLS' }],
    }),

    pickRequest: builder.mutation({
      query: (requestId) => ({
        url: `user-requests`,
        method: 'POST',
        body: { requestId },
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('jwt')}`
        }
      }),
      invalidatesTags: [{ type: 'Get', id: 'SKILLS' }],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpointsexport
export const {
  useLoginMutation,
  useSignupMutation,
  useGetSkillsQuery,
  useGetRequestsQuery,
  usePickRequestMutation,
  usePickSkillMutation,
  useCompleteProfileMutation
} = serviceProviderApi;