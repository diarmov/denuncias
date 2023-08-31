import { useDispatch, useSelector } from "react-redux"

import { useUiStore } from '../hooks/useUiStore';
import api from "../config/api";
import { createUser, deleteUser, editUser, resetUser, setUser, setUsers } from "../store";

export const useUsersStore = () => {
    const { users, user } = useSelector(state => state.users)
    const { onLoading, onNotification, onModal } = useUiStore()
    const dispatch = useDispatch();

    const onGetUser = async( page = 1 ) => {
        onLoading( true )
        try {
            const { data } = await api.get(`/users`);
            const { usuarios, roles, success } = data
   
            if( success ){
                dispatch( setUsers(usuarios) )
                onLoading( false )
            }
          
        } catch (error) {
            console.log(error);
            onLoading( false )
        }
    }

    const onStore = async( values ) => {
        onLoading(true)
        try {
          const { data } = await api.post('/users', values);        
          const {success , user } = data 

          console.log(user);
          if( success ) {
            dispatch( createUser( user ) ) 
            onResetUser()
            onNotification({icon:'success', message:'Usuario guardado correctamente'})   
            onModal(undefined)
          }
    
          onLoading(false)
          return true
        } catch (error) {
          console.log(error);
          onLoading(false)
          onNotification({icon:'error', message: error.response.data.message}) 
          return false
        }
      }
    
      const onUpdate = async( values  ) => {
        onLoading(true)
        try {
          const formData = new FormData()
              Object.keys(values).forEach((key) => {
                formData.append(key, values[key])
            })
    
            formData.append('_method', 'PUT');
    
          const { data } = await api.post(`/users/${values.id}}`, formData)
          const { success, user } = data

          if( success ){
            if(user.action === 'change-pass'){
              onNotification({icon:'success', message:'Contraseña modificada correctamente'})  
            }else{
              dispatch( editUser( user ) )
              onNotification({icon:'success', message:'Usuario modificado correctamente'})  
              onResetUser()
              onModal(undefined)
            }
          }
    
          onLoading(false)
          return true
        } catch (error) {
          console.log(error);
          onLoading(false)
          onNotification({icon:'error', message: error.response.data.message})
          return false
        }
    
      }
      
      const onDestroy = async( values ) => {
        onLoading(true)
        try {
          const { data } = await api.delete(`/users/${values.id}`);
          const { success, user } = data
        console.log(user);
          if( success ){
            dispatch( deleteUser( user ) )
            onNotification({icon:'success', message:'Estatus del Usuario modificado correctamente'})  
          }

          onLoading(false)
        } catch (error) {
          console.log(error);
          onLoading(false)
          onNotification({icon:'error', message: error.response.data.message})
        }
      }

      const onSetUser = ( user ) => {
        dispatch( setUser({ ...user, password:'', confirm:'' }) )
      }

      const onResetUser = () => {
        dispatch( resetUser() )
      }

    return {
        users,
        user,

        onGetUser,
        onStore,
        onUpdate,
        onDestroy,
        onSetUser,
        onResetUser
    }
}   