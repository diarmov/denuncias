import { createSlice } from "@reduxjs/toolkit";

export const estadisticaSlice = createSlice({
    name: 'estadisticas',
    initialState: {
       tipo: { data:[], labels:[], color:[] },
       byDep: { data:[], labels:[], color:[] },
       byMonth: { data:[], labels:[], color:[] },
       byOrigen: { data:[], labels:[], color:[] } 
    },
    reducers: {
        setEstadisticas: ( state, { payload }) => {
            const { tipo, byDep, byMonth, byOrigen } = payload;
            state.tipo = tipo;
            state.byDep = byDep;
            state.byMonth = byMonth;
            state.byOrigen = byOrigen;
        }
    }
});

export const { setEstadisticas } = estadisticaSlice.actions;