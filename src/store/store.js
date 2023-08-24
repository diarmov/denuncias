import { configureStore } from "@reduxjs/toolkit"
import { authSlice, denunciaSlice, uiSlice, catalogoSlice } from './'

export const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        denuncias: denunciaSlice.reducer,
        ui: uiSlice.reducer,
        catalogos: catalogoSlice.reducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})