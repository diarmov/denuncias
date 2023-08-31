import { createSlice } from "@reduxjs/toolkit";

export const resolucionSlice = createSlice({
    name: 'resoluciones',
    initialState: {
        resoluciones: [],
        resolucion: {
            id: 0,
            folio: '',
            fecha: '',
            idEstatus:0,
            idUbicacion:0,
            idDenuncia:0,
            impugnacion: false,
            folio_recurso:'',
            fecha_recurso:'',
            amparo: false,
            folio_amparo: '',

        },
        open: false,
        recursos:[]
    },
    reducers: {
        getResoluciones:  (state, { payload } ) => {
            state.resoluciones = payload;
        },
        setResolucion: (state, { payload } ) => {
            state.resolucion = payload;
        },
        resetResolucion: ( state ) => {
            state.resolucion = {
                id: 0,
                folio: '',
                fecha: '',
                idEstatus:0,
                idUbicacion:0,
                idDenuncia:0,
                recurso: false,
                folio_recurso:'',
                fecha_recurso:'',
                tipo_recurso:0
            }
        },
        setOpen: (state, { payload } ) => {
            state.open = payload;
        },
        setRecursos: (state, { payload } ) => {
            state.recursos = payload;
        },
    }
});

export const { getResoluciones, setResolucion, resetResolucion, setOpen, setRecursos } = resolucionSlice.actions;