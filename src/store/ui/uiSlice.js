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
    }
});

export const { setLoading, setModal, setSearch } = uiSlice.actions;