import { createSlice } from "@reduxjs/toolkit";

export const denunciaSlice = createSlice({
    name: 'denuncias',
    initialState: {
        denuncias: [],
        denuncia: {
            id: 0,
            numExpUif: '',
            numExpOic: '',
            numExpSubs: '',
            fechaIniRadi: '',
            fechaUltiMov:'',
            asunto: '',
            idCaptacion: '',
            idOrigen: '',
            idEtapa: '',
            idEstatus: '',
            idTipoFalta: '',
            idClasificacion: '',
            idDependencia: '',
            idUbicacion: '',
            observacion: '',
        },
        clasificacion: [],
        clasificacionId: [],

    },
    reducers: {
        getDenuncias: (state, { payload }) => {
            state.denuncias = payload;
        },
        setDenuncia: (state, { payload }) => {
            state.denuncia = payload;
        },
        resetDenuncia: (state) => {
            state.denuncia = {
                id: 0,
                numExpUif: '',
                numExpOic: '',
                numExpSubs: '',
                fechaIniRadi: '',
                fechaUltiMov:'',
                asunto: '',
                idCaptacion: '',
                idOrigen: '',
                idEtapa: '',
                idEstatus: '',
                idTipoFalta: '',
                idClasificacion: '',
                idDependencia: '',
                idUbicacion: '',
                observacion: '',
                }
        },
        getClasificacion: (state, { payload }) => {
            state.clasificacion = payload;
        },
        setClasificacionId: (state, { payload }) => {
            state.clasificacionId = payload;
        },
        resetAllDenuncia: (state) => {
            state.denuncias = []
            state.denuncia = {
                id: 0,
                numExpUif: '',
                numExpOic: '',
                numExpSubs: '',
                fechaIniRadi: '',
                fechaUltiMov:'',
                asunto: '',
                idCaptacion: '',
                idOrigen: '',
                idEtapa: '',
                idEstatus: '',
                idTipoFalta: '',
                idClasificacion: '',
                idDependencia: '',
                idUbicacion: '',
                observacion: '',
            },
                state.chart = []
            state.proceso = []
            state.improcedente = []
            state.concluida = []
            state.atendidasSFP = []
            state.etapas = []
            state.clasificacion = []
            state.clasificacionId = []
        },
    }
});

export const { getDenuncias, setDenuncia, resetDenuncia, getClasificacion, setClasificacionId, resetAllDenuncia } = denunciaSlice.actions;


