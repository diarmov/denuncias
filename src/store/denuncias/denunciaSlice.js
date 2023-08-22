import { createSlice } from "@reduxjs/toolkit";

export const denunciaSlice = createSlice({
    name: 'denuncias',
    initialState: {    
        denuncias: [],
        chart:[],
        proceso:[],
        inprocedente:[],
        concluida:[],
        atendidasSFP:[]
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
        getInprocedentes:  (state, { payload } ) => {
            state.inprocedente = payload;
        },
        getConcluidas:  (state, { payload } ) => {
            state.concluida = payload;
        },
        getAtendidasSFP:  (state, { payload } ) => {
            state.atendidasSFP = payload;
        }   
    }
});

export const { getDenuncias, getChart, getProceso, getInprocedentes, getConcluidas, getAtendidasSFP } = denunciaSlice.actions;