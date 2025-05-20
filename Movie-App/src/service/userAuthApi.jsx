// Read redux Toolkit documentation for more details on how to set up the store and use it in your app.

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const url = "http://localhost:8080/api/auth";


export const userAuthApiSlice = createApi({

    reducerPath: 'userAuth',
    baseQuery: fetchBaseQuery({baseUrl: `${url}`}),
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (userData) => ({
                url: '/register',
                method: 'POST',
                header: {"Content-Type": "application/json"},
                body: userData,
            }),
        }),
        login: builder.mutation({
            query: (credentials) => ({
                url: '/login',
                method: 'POST',
                header: {"Content-Type": "application/json"},
                body: credentials,
            }),
        }),
    }),
})

export const {useSignUpMutation, useLoginMutation} = userAuthApiSlice;