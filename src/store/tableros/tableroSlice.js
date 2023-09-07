import { createSlice } from "@reduxjs/toolkit";

export const tableroSlice = createSlice({
    name: 'tableros',
    initialState: {
        chart: [],
        denunciastotal: [],
        atencionsfp: [],
        atencionoic: [],
        atenciontja: [],

    },
    reducers: {
        getTotal: (state, { payload }) => {
            state.denunciastotal = payload;
        },
        getChart: (state, { payload }) => {
            state.chart = payload;
        },
        getAtenSFP: (state, { payload }) => {
            state.atencionsfp = payload;
        },
        getAtenOIC: (state, { payload }) => {
            state.atencionoic = payload;
        },
        getAtenTJA: (state, { payload }) => {
            state.atenciontja = payload;
        }
    }
});

export const { getChart, getTotal, getAtenSFP, getAtenOIC, getAtenTJA } = tableroSlice.actions;


