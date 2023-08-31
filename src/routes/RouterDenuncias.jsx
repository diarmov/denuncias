import { useEffect } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

import Layout from '../Layouts/Layout'
import Inicio from "../views/Inicio";

import { useAuthStore } from "../hooks/useAuthStore";
import { CheckingAuth } from "../components/ui";


export const RouterDenuncias = () => {
    const { checkAuthToken, status } = useAuthStore()
    
    useEffect(() => {
        checkAuthToken();
    }, []);
    
    if ( status === 'checking' ) {
        return (
            <CheckingAuth />
        )
    }

    return (
        <HashRouter>         
            <Routes>
            {
            status ==='authenticated' 
            ? (
                <>
                    <Route path='/*' element={ <Inicio /> } />
                    <Route path='/*' element={ <Navigate to='/' /> } />                
                </>
            )
            : (
                    <>
                    <Route path='/' element={ <Layout /> } />
                    <Route path="/*" element={ <Navigate to="/" /> } />
                    </>
            )
            }     
            </Routes>  
        </HashRouter>
    )
}

