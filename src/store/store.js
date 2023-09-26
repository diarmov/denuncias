import { configureStore } from "@reduxjs/toolkit"
import { authSlice, denunciaSlice, uiSlice, catalogoSlice, resolucionSlice, userSlice, busquedaSlice, estadisticaSlice, tableroSlice } from './'

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        denuncias: denunciaSlice.reducer,
        ui: uiSlice.reducer,
        catalogos: catalogoSlice.reducer,
        resoluciones: resolucionSlice.reducer,
        users: userSlice.reducer,
        busqueda: busquedaSlice.reducer,
        estadisticas: estadisticaSlice.reducer,
        tableros: tableroSlice.reducer,
    },
    devTools: false,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})