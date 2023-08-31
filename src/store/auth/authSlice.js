import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // checking, not-authenticated, authenticated
        active: null,
    },
    reducers: {
        login:  (state, { payload } ) => {
            state.status = 'authenticated';
            state.active = payload;
        },
        logout: ( state ) => {
            state.status = 'not-authenticated';
            state.active   = null;
        },
        onChecking: ( state ) => {
            state.status = 'checking';
            state.active   = null;
        },
        resetAuth: ( state ) => {
            state.users = [];
        },
        resetStatus: ( state ) => {
            state.status = 'not-authenticated'
        }
    }
});

export const { login, logout, onChecking, resetAuth, resetStatus } = authSlice.actions;