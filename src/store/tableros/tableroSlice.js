import { createSlice } from "@reduxjs/toolkit";

export const tableroSlice = createSlice({
    name: 'tableros',
    initialState: {
        chart: [],
        denunciastotal: [],
        atencionsfp: [],
        atencionoic: [],
        atenciontja: [],
        dependencias: [],
        depcount: [],
        datamodal: {
            titulo: '',
            tipo: '',
            idUbicacion: '',
            idEtapa: '',

        },
        datamodalstat: {
            titulo: '',
            tipo: '',
            idUbicacion: '',
            idEtapa: '',

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
        getDependencias: (state, { payload }) => {
            state.dependencias = payload;
        },
        getDepcount: (state, { payload }) => {
            state.depcount = payload;
        },
        getStatcount: (state, { payload }) => {
            state.statcount = payload;
        },
        setDataModal: (state, { payload }) => {
            state.datamodal = payload;
        }
    }
});

export const { getChart, getTotal, getAtenSFP, getAtenOIC, getAtenTJA, getDependencias, setDataModal, getDepcount, getEstadocount, getStatcount } = tableroSlice.actions;


