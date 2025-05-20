import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const fakeStoreApiUrl = "https://fakestoreapi.com";


export const fakeStoreApi = createApi({
    reducerPath: "fakeStoreApi",
    baseQuery: fetchBaseQuery({baseUrl: `${fakeStoreApiUrl}`}),
    endpoints: (builder)=> ({
        getFakeStore: builder.query({
             query: () => "/products"
        }),
    })
});

export const { useGetFakeStoreQuery } = fakeStoreApi;