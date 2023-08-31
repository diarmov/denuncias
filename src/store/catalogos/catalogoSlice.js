import { createSlice } from "@reduxjs/toolkit";

export const catalogoSlice = createSlice({
    name: 'catalogos',
    initialState: {
        origen: [],
        etapa: [],
        estatus: [],
        tipo: [],
        clasificacion: [],
        dependencia: [],
        ubicacion: []        
    },
    reducers: {
        setOrigen:  (state, { payload } ) => {
            state.origen = payload;
        },
        setEtapa:  (state, { payload } ) => {
            state.etapa = payload;
        },
        setEstatus:  (state, { payload } ) => {
            state.estatus = [];
            state.estatus = payload;
        },
        setTipo:  (state, { payload } ) => {
            state.tipo = payload;
        },
        setClasificacion:  (state, { payload } ) => {
            state.clasificacion = payload;
        },
        setDependencia:  (state, { payload } ) => {
            state.dependencia = payload;
        },
        setUbicacion:  (state, { payload } ) => {
            state.ubicacion = payload;
        },
    }
});

export const { setOrigen, setEtapa, setEstatus, setTipo, setClasificacion, setDependencia, setUbicacion } = catalogoSlice.actions;