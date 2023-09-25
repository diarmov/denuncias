import { createSlice } from "@reduxjs/toolkit";

export const busquedaSlice = createSlice({
    name: 'busqueda',
    initialState: {
       details: {},
       paginate: [],
       search: {
        idCaptacion: '',
        idTipoFalta:'',
        idDependencia:'',
        idClasificacion:'',
        idEstatus:''
      }
    },
    reducers: {
        setCustomPaginate:  (state, { payload } ) => {
            state.paginate = payload;
        },
        setDetails:  (state, { payload } ) => {
            state.details = payload;
        },
        setCustomSearch:  (state, { payload } ) => {
            state.search = payload;
        },
        resetBusqueda: ( state ) => {
            state.search = {
                idCaptacion: '',
                idTipoFalta:'',
                idDependencia:'',
                idClasificacion:'',
                idEstatus:''
              }
        },
        resetAllBusqueda: ( state ) => {
            state.details = {},
            state.paginate = [],
            state.search = {
                idCaptacion: '',
                idTipoFalta:'',
                idDependencia:'',
                idClasificacion:'',
                idEstatus:''
            }
        }
    }
});

export const { setCustomPaginate, setDetails, setCustomSearch, resetBusqueda, resetAllBusqueda } = busquedaSlice.actions;