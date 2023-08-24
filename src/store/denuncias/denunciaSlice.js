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
    }
});

export const { getDenuncias, setDenuncia, resetDenuncia, setSearch } = denunciaSlice.actions;