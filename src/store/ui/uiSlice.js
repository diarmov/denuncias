import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        loading: false,
        modal: { title:'', status: 'undefined' },
        search: false,
    },
    reducers: {
        setLoading:  (state, { payload } ) => {
            state.loading = payload;
        },
        setModal:  (state, { payload } ) => {
            state.modal = payload;
        },
        setSearch:  (state, { payload } ) => {
            state.search = payload;
        },
        resetUi:  ( state ) => {
            state.loading = false
            state.modal = { title:'', status: 'undefined' }
            state.search = false
        } 
    }
});

export const { setLoading, setModal, setSearch, resetUi } = uiSlice.actions;