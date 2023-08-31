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
        } 
    }
});


export const { getDenuncias, setDenuncia, resetDenuncia, getChart, getTotal, getAtenSFP, getAtenOIC, getAtenTJA, getClasificacion } = denunciaSlice.actions;

