import { configureStore } from "@reduxjs/toolkit";
import { fakeStoreApi } from "../service/FakeStoreApi";
import { setupListeners } from "@reduxjs/toolkit/query";

 export const store = configureStore({
    reducer: {
        [fakeStoreApi.reducerPath]: fakeStoreApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(fakeStoreApi.middleware),
});

setupListeners(store.dispatch)

