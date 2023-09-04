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
        denunciastotal:[],
        atencionsfp:[],
        atencionoic:[],
        atenciontja:[],
        clasificacion:[],
        clasificacionId:[],

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
        getTotal:  (state, { payload } ) => {
            state.denunciastotal = payload;
        }, 
        getChart:  (state, { payload } ) => {
            state.chart = payload;
        }, 
        getAtenSFP:  (state, { payload } ) => {
            state.atencionsfp = payload;
        }, 
        getAtenOIC:  (state, { payload } ) => {
            state.atencionoic = payload;
        }, 
        getAtenTJA:  (state, { payload } ) => {
            state.atenciontja = payload;
        },
        getClasificacion:  (state, { payload } ) => {
            state.clasificacion = payload;
        },
        setClasificacionId:  (state, { payload } ) => {
            state.clasificacionId = payload;
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
            state.clasificacionId = []
        }, 
    }
});

export const { getDenuncias, setDenuncia, resetDenuncia, getChart, getTotal, getAtenSFP, getAtenOIC, getAtenTJA, getClasificacion, setClasificacionId, resetAllDenuncia } = denunciaSlice.actions;


