import { configureStore } from "@reduxjs/toolkit";
import { fakeStoreApi } from "../service/FakeStoreApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { dummyJsonApi } from "../service/DummyJsonApi";

 export const store = configureStore({
    reducer: {
        [fakeStoreApi.reducerPath]: fakeStoreApi.reducer,
        [dummyJsonApi.reducerPath]: dummyJsonApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            fakeStoreApi.middleware, dummyJsonApi.middleware),

});

setupListeners(store.dispatch)

 