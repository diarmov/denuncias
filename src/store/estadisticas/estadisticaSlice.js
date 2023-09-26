import { createSlice } from "@reduxjs/toolkit";

export const estadisticaSlice = createSlice({
    name: 'estadisticas',
    initialState: {
       tipo: { data:[], labels:[], color:[] },
       byDep: { data:[], labels:[], color:[] },
       byMonth: { data:[], labels:[], color:[] },
       byOrigen: { data:[], labels:[], color:[] } ,
       estadistica: {
        fecha_inicio: '',
        fecha_fin: '',
        informe:'',
       }
    },
    reducers: {
        setEstadisticas: ( state, { payload }) => {
            const { tipo, byDep, byMonth, byOrigen } = payload;
            state.tipo = tipo;
            state.byDep = byDep;
            state.byMonth = byMonth;
            state.byOrigen = byOrigen;
        },
        setEstadistica: ( state, { payload }) => {           
            state.estadistica = payload;
        },
        resetEstadistica: ( state ) => {           
            state.estadistica= {
                fecha_inicio: '',
                fecha_fin: '',
                informe:'',
            }
        },
        resetEstadisticas: ( state ) => {
            state.tipo = { data:[], labels:[], color:[] },
            state.byDep = { data:[], labels:[], color:[] },
            state.byMonth = { data:[], labels:[], color:[] },
            state.byOrigen = { data:[], labels:[], color:[] } 
            state.estadistica= {
                fecha_inicio: '',
                fecha_fin: '',
                informe:'',
            }
        },
        

    }
});

export const { setEstadisticas, setEstadistica, resetEstadistica, resetEstadisticas } = estadisticaSlice.actions;