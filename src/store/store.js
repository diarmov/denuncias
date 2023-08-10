import { configureStore } from "@reduxjs/toolkit"
import { authSlice } from './'

export const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})