
import { useDispatch, useSelector } from 'react-redux';

import api from '../config/api';
import { 
         login, 
         logout, 
         onChecking,
         resetAllUser,
         resetAuth,
         resetUi,
         resetAllDenuncia,
         resetAllResoluciones,
         resetAllCatalogos
       } from '../store';

export const useAuthStore = () => {
  const { users, active, status } = useSelector(state => state.auth)
  const dispatch = useDispatch();

  const onLogin = async({email, password}) => {    
    dispatch( onChecking() )

    try {
      const { data } = await api.post('/login', { email, password });
      const { token, user } = data
     
      localStorage.setItem('token', token );
      dispatch( login(user) )
            

    } catch (error) {
      dispatch( logout() );
      console.log(error);
    }
    
  }

  const onLogout = async() => {      
        await api.post('/logout');
        localStorage.clear();
        dispatch( logout() );
        dispatch( resetAuth() );
        dispatch( resetAllDenuncia() );
        dispatch( resetAllResoluciones() );
        dispatch( resetAllCatalogos() );
        dispatch( resetAllUser() );
        dispatch( resetUi() );         
  }

  const checkAuthToken = async() => {
    const token = localStorage.getItem('token');
    if ( !token || token === 'false' || token === 'undefined' )  return onLogout(); 

    try {
        const { data } = await api.get('/refresh');
        const { user, token } = data;

        if ( token === false ){  return onLogout(); }
        
        localStorage.setItem('token', token );
        dispatch( login(user) );
        return true
    } catch (error) {
        onNotification({icon:'error', message:'Credenciales Incorrectas'})   
        localStorage.clear();
        onLogout()
        return false
    }
}
  return {
    users, 
    active,
    status,
    
    onLogin,
    checkAuthToken,
    onLogout
  }
}