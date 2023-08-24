import { useDispatch, useSelector } from "react-redux";
import api from "../config/api";

import { getDenuncias, resetDenuncia, setDenuncia, setSearch } from "../store";
import { useUiStore } from '../hooks/useUiStore';

export const useDenunciasStore = () => {
    const { denuncias, denuncia, search } = useSelector(state => state.denuncias)
    const { onLoading, onModal, onNotification } = useUiStore()
    const dispatch = useDispatch();

    const onGetDenuncias = async( page = 1 ) => {
        onLoading( true )
        try {
            const { data } = await api.get(`/denuncias?page=${page}`);
            const { denuncias, success } = data
   
            if( success ){
                dispatch( getDenuncias({current_page: denuncias.current_page, data: denuncias.data, last_page: denuncias.last_page  }) )
                onLoading( false )
            }
          
        } catch (error) {
            console.log(error);
            onLoading( false )
        }
    }

    const onSearch = async( values ) => {
        onLoading( true )
        try {
            const { data } = await api.post(`/search`, values);
            const { denuncias, success } = data
            
            if( success ){
                dispatch( getDenuncias({current_page: denuncias.current_page, data: denuncias.data, last_page: denuncias.last_page  }) )
                onSetSearch ( true )
                onLoading( false )
            }
          
        } catch (error) {
            console.log(error);
            onLoading( false )
        }
    }

    const onSetSearch = ( status ) => {
        dispatch( setSearch( status) )
    }

    const onStore = async( values ) => {
   
        onLoading(true)
        try {
          const { data } = await api.post('/denuncias', values) 
          const { success } = data
         

          if( success ) {
              onGetDenuncias()
              onModal(undefined)
              onLoading(false) 
              onNotification({icon:'success', message:'Denuncia guardada correctamente'})   
          }

        } catch (error) {
          console.log(error);
          onLoading(false)
          onNotification({icon:'error', message:error.response.data.message})   
        }
    }

    const onUpdate = async( values ) => {
        onLoading(true)
        try {
            const formData = new FormData()
              Object.keys(values).forEach((key) => {
                formData.append(key, values[key])
            })
    
            formData.append('_method', 'PUT');
    
           
    
            const { data } = await api.post(`/denuncias/${values.id}`, formData)
           
            if(data.success){
                onGetDenuncias()
                onResetDenuncia()
                onModal(undefined)
                onLoading(false) 
                onNotification({icon:'success', message:'Denuncia modificada correctamente'})   
            }
    
        } catch (error) {
          console.log(error);
          onLoading(false)
          onAlert({open: true, severity: 'error', message: error.response.data.message })
        }
    }

    const onSetDenuncia = ( denuncia ) => {
        const data =  {
            id: denuncia.id,
            numExpUif: denuncia.numExpUif ? denuncia.numExpUif : '',
            numExpOic: denuncia.numExpOic ? denuncia.numExpOic : '',
            fechaIniRadi: denuncia.fechaIniRadi,
            numExpSubs: denuncia.numExpSubs ? denuncia.numExpSubs : '' ,
            asunto: denuncia.asunto,
            idOrigen: denuncia.idOrigen,
            idEtapa: denuncia.idEtapa,
            idEstatus: denuncia.idEstatus,
            idTipoFalta:denuncia.idTipoFalta,
            idClasificacion: denuncia.idClasificacion,
            idDependencia: denuncia.idDependencia,
            idUbicacion: denuncia.idUbicacion,
            observacion: denuncia.observacion ? denuncia.observacion : '',
        }

        dispatch( setDenuncia( data ) )
    }

    const onResetDenuncia = () => {
        dispatch( resetDenuncia() )
    }

    return {
        denuncias,
        denuncia,
        search,

        onGetDenuncias,
        onSearch,
        onSetSearch,
        onStore,
        onUpdate,
        onSetDenuncia,
        onResetDenuncia
    }
}
