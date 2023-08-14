import { createSlice } from "@reduxjs/toolkit";

export const denunciaSlice = createSlice({
    name: 'denuncias',
    initialState: {    
        denuncias: [],
    },
    reducers: {
        getDenuncias:  (state, { payload } ) => {
            state.denuncias = payload;
        }        
    }
});

export const { getDenuncias } = denunciaSlice.actions;