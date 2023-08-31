import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        user: {
            name: '',
            apellidos:'',
            email: '',
            password:'',
            confirm: '',
            role: '',
            role_id: ''
        }
    },
    reducers: {
        setUsers:  (state, { payload } ) => {
            state.users = payload;
        },
        setUser:  (state, { payload } ) => {
            state.user = payload;
        },
        resetUser: ( state ) => {
            state.user = {
                name: '',
                apellidos:'',
                email: '',
                password:'',
                confirm: '',
                role: '',
                role_id: ''
            }
        },
        createUser: ( state, { payload } ) => {
            state.users.push( payload )
        },
        editUser: ( state, { payload } ) => {
            state.users = state.users.map(user => {
                if( user.id === payload.id ) {
                    return payload;
                }
                return user;
            });
        },
        deleteUser: ( state, { payload } ) => {
            state.users = state.users.map(user => {
                if( user.id === payload.id ) {
                    return {...user, estatus: payload.estatus};
                }
                return user;
            });
        }
    }
});

export const { setUsers, setUser, resetUser, createUser, editUser, deleteUser } = userSlice.actions;