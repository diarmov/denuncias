import { configureStore } from "@reduxjs/toolkit"
import { authSlice, denunciaSlice, uiSlice, catalogoSlice, resolucionSlice, userSlice, busquedaSlice, estadisticaSlice } from './'

export const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        denuncias: denunciaSlice.reducer,
        ui: uiSlice.reducer,
        catalogos: catalogoSlice.reducer,
        resoluciones: resolucionSlice.reducer,
        users: userSlice.reducer,
        busqueda: busquedaSlice.reducer,
        estadisticas: estadisticaSlice.reducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})