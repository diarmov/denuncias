import { createSlice } from "@reduxjs/toolkit";

export const denunciaSlice = createSlice({
    name: 'denuncias',
    initialState: {    
        denuncias: [],
        chart:[],
        proceso:[],
        improcedente:[],
        concluida:[],
        atendidasSFP:[],
        etapas:[],
        clasificacion:[]
    },
    reducers: {
        getDenuncias:  (state, { payload } ) => {
            state.denuncias = payload;
        },
        getChart:  (state, { payload } ) => {
            state.chart = payload;
        },
        getProceso:  (state, { payload } ) => {
            state.proceso = payload;
        },
        getImprocedentes:  (state, { payload } ) => {
            state.improcedente = payload;
        },
        getConcluidas:  (state, { payload } ) => {
            state.concluida = payload;
        },
        getAtendidasSFP:  (state, { payload } ) => {
            state.atendidasSFP = payload;
        },
        getEtapas:  (state, { payload } ) => {
            state.etapas = payload;
        },
        getClasificacion:  (state, { payload } ) => {
            state.clasificacion = payload;
        } 
    }
});

export const { getDenuncias, getChart, getProceso, getImprocedentes, getConcluidas, getAtendidasSFP, getEtapas, getClasificacion } = denunciaSlice.actions;