import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        loading: false,
        modal: { title:'', status: 'undefined' }
    },
    reducers: {
        setLoading:  (state, { payload } ) => {
            state.loading = payload;
        },
        setModal:  (state, { payload } ) => {
            state.modal = payload;
        }
    }
});

export const { setLoading, setModal } = uiSlice.actions;