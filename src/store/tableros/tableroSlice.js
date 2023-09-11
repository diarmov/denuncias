import { createSlice } from "@reduxjs/toolkit";

export const tableroSlice = createSlice({
    name: 'tableros',
    initialState: {
        chart: [],
        denunciastotal: [],
        atencionsfp: [],
        atencionoic: [],
        atenciontja: [],
        dependenciasUIF: [],
        dependenciasOIC: [],
        datamodal: {
            titulo: '',
            UIF: '',
            totalUIF: '',
            OIC: '',
            totalOIC: '',

        }

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
        },
        getDepenUIF: (state, { payload }) => {
            state.dependenciasUIF = payload;
        },
        getDepenOIC: (state, { payload }) => {
            state.dependenciasOIC = payload;
        },
        setDataModal: (state, { payload }) => {
            state.datamodal = payload;
        }
    }
});

export const { getChart, getTotal, getAtenSFP, getAtenOIC, getAtenTJA, getDepenUIF, getDepenOIC, setDataModal } = tableroSlice.actions;


