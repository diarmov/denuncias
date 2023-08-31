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
            asunto: '',
            idOrigen: '',
            idEtapa: '',
            idEstatus:'',
            idTipoFalta:'',
            idClasificacion:'',
            idDependencia:'',
            idUbicacion:'',
            observacion: '',
        },
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
        setDenuncia: (state, { payload } ) => {
            state.denuncia = payload;
        },
        resetDenuncia: ( state ) => {
            state.denuncia = {
                id: 0,
                numExpUif: '',
                numExpOic: '',
                numExpSubs: '',
                fechaIniRadi: '',
                asunto: '',
                idOrigen: '',
                idEtapa: '',
                idEstatus:'',
                idTipoFalta:'',
                idClasificacion:'',
                idDependencia:'',
                idUbicacion:'',
                observacion: '',
            }
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
        },
        resetAllDenuncia: ( state ) => {
            state.denuncias = []
            state.denuncia = {
                id: 0,
                numExpUif: '',
                numExpOic: '',
                numExpSubs: '',
                fechaIniRadi: '',
                asunto: '',
                idOrigen: '',
                idEtapa: '',
                idEstatus:'',
                idTipoFalta:'',
                idClasificacion:'',
                idDependencia:'',
                idUbicacion:'',
                observacion: '',
            },
            state.chart = []
            state.proceso = []
            state.improcedente = []
            state.concluida = []
            state.atendidasSFP = []
            state.etapas = []
            state.clasificacion = []
        }, 
    }
});


export const { getDenuncias, setDenuncia, resetDenuncia, getChart, getProceso, getImprocedentes, getConcluidas, getAtendidasSFP, getEtapas, getClasificacion, resetAllDenuncia } = denunciaSlice.actions;

