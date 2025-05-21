import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const dummyJsonApiUrl = 'https://dummyjson.com';

export const dummyJsonApi = createApi({
    reducerPath: 'dummyJsonApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${dummyJsonApiUrl}` }),
    endpoints: (builder) => ({
        getDummyJson: builder.query({
            query: () => '/products'
        }),
    })
});

export const { useGetDummyJsonQuery } = dummyJsonApi;

