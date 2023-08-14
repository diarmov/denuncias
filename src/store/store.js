import { configureStore } from "@reduxjs/toolkit"
import { authSlice, denunciaSlice } from './'

export const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        denuncias: denunciaSlice.reducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})