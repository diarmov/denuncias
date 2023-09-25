import { createSlice } from "@reduxjs/toolkit";

export const tableroSlice = createSlice({
    name: 'tableros',
    initialState: {
        dependencias: [],
        datamodal: {
            titulo: '',
            tipo: '',
            idUbicacion: '',
            idEtapa: '',

        },
        tablero: {},
        denunciasEtapa: [],
        denunciasEstatus: [],
        statusTotales: {},
        atencionsfp: [],
        atencionoic: [],
    },
    reducers: {
        getDependencias: (state, { payload }) => {
            state.dependencias = payload;
        },
        setDataModal: (state, { payload }) => {
            state.datamodal = payload;
        },
        getDataTablero: (state, { payload }) => {
            state.tablero = payload;
        },
        getDenunciasEtapa: (state, { payload }) => {
            const { denuncias, totales } = payload
            state.denunciasEtapa = denuncias;
            state.etapaTotales = totales;
        },
        getDenunciasEstatus: (state, { payload }) => {
            const { denuncias, totales } = payload
            state.denunciasEstatus = denuncias;
            state.statusTotales = totales;
        },
        getAtenciones: (state, { payload }) => {
            const { sfp, oic } = payload;
            state.atencionsfp = sfp;
            state.atencionoic = oic;
        },
        resetTablero: ( state ) => {
            state.dependencias = []
            state.datamodal = {
                titulo: '',
                tipo: '',
                idUbicacion: '',
                idEtapa: '',
    
            }
            state.tablero = {}
            state.denunciasEtapa = []
            state.denunciasEstatus = []
            state.statusTotales = {}
            state.atencionsfp = []
            state.atencionoic = []
        }

    }
});

export const { getDependencias, setDataModal, getDataTablero, getDenunciasEtapa, getDenunciasEstatus, getAtenciones, resetTablero } = tableroSlice.actions;


