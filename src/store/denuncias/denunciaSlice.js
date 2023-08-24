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
            idEtapa: 0,
            idEstatus:0,
            idTipoFalta:0,
            idClasificacion:0,
            idDependencia:0,
            idUbicacion:0,
            observacion: '',
        },
        search: false,
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
                idEtapa: 0,
                idEstatus:0,
                idTipoFalta:0,
                idClasificacion:0,
                idDependencia:0,
                idUbicacion:0,
                observacion: '',
            }
        },
        setSearch:  (state, { payload } ) => {
            state.search = payload;
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
        } 
    }
});


export const { getDenuncias, setDenuncia, resetDenuncia, setSearch, getChart, getProceso, getImprocedentes, getConcluidas, getAtendidasSFP, getEtapas, getClasificacion } = denunciaSlice.actions;

