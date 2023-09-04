import { createSlice } from "@reduxjs/toolkit";

export const busquedaSlice = createSlice({
    name: 'busqueda',
    initialState: {
       details: {},
       paginate: [],
       search: {
        idOrigen: '',
        idTipoFalta:'',
        idDependencia:'',
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
    }
});

export const { setCustomPaginate, setDetails, setCustomSearch } = busquedaSlice.actions;