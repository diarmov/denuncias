import { useDispatch, useSelector } from "react-redux";
import { getResoluciones, resetDenuncia, setOpen, setRecursos, setResolucion } from "../store";
import { useUiStore } from "./useUiStore";
import api from "../config/api";
import { useNavigate } from "react-router-dom";
import { useDenunciasStore } from "./useDenunciasStore";

export const useResolucionStore = () => {
    const { resoluciones, open, resolucion, recursos } = useSelector(state => state.resoluciones)
    const { onLoading, onNotification, onModal, onSetSearch } = useUiStore()
    const { onSetDenuncia } = useDenunciasStore()

    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const onGetResoluciones = async( page = 1 ) => {
        onLoading( true )
        try {

            const { data } = await api.get(`/resoluciones?page=${page}`);
            const { resoluciones, success } = data
      
            if( success ){
                dispatch( getResoluciones({current_page: resoluciones.current_page, data: resoluciones.data, last_page: resoluciones.last_page  }) )
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
          const { data } = await api.post('/resoluciones', values) 
          const { success } = data

          if( success ) {
              onGetResoluciones()
              onLoading(false) 
              onNotification({icon:'info', title:'Resolucion guardada', message:'Recuerda actualizar la etapa procesal', type: 2})   
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

            const { data } = await api.post(`/resoluciones/${values.id}`, formData)
            const { success, denuncia } = data
           
            if( success ){
                onGetResoluciones()
                onResetResolucion()
                onLoading(false) 
                onModal(undefined)
                onNotification({
                                icon:'info', 
                                title:'Resolucion modificada', 
                                message:'Seras redirigido a la pantalla denuncias para que actualices la etapa procesal', 
                                type: 2
                            })  
                onSetDenuncia(denuncia)
                navigate('/denuncias-manage') 
            }
    
        } catch (error) {
          console.log(error);
          onLoading(false)
          onAlert({open: true, severity: 'error', message: error.response.data.message })
        }
    }

    const onStoreRecurso = async( values ) => {
        onLoading(true)
        try {
          const { data } = await api.post('/resoluciones-recurso', values)
          const { success, denuncia } = data
        console.log(data);
          if( success ) {
              onLoading(false) 
              onModal(undefined)
              onNotification({
                icon:'info', 
                title:'Recurso guardado correctamente', 
                message:'Seras redirigido a la pantalla denuncias para que actualices la etapa procesal', 
                type: 2
            })   
              onSetDenuncia(denuncia)
              navigate('/denuncias-manage')
             
          }

        } catch (error) {
          console.log(error);
          onLoading(false)
          //onNotification({icon:'error', message:error.response.data.message})   
        }
    }

    const onGetRecursos= async( resolucion ) => {
        try {

            const { data } = await api.get(`/resoluciones-recursos/${resolucion}`);
            const { recursos, success } = data
            console.log(data);
            if( success ){
                dispatch( setRecursos( recursos ) )
            }
          
        } catch (error) {
            console.log(error);
            onLoading( false )
        }
    }

    const onSetResolucion = ( resolucion ) => {
        let res = {
                id: resolucion.id,
                folio: resolucion.folio,
                fecha: resolucion.fecha,
                idEstatus: resolucion.idEstatus,
                idUbicacion: resolucion.idUbicacion,
                idDenuncia: resolucion.idDenuncia,
                recurso: false,
                folio_recurso:'',
                fecha_recurso:'',
                folio_amparo:''

            }
        dispatch( setResolucion( res ) )
    }

    const onResetResolucion = () => {
        dispatch( resetDenuncia() )
    }

    const onSetOpen = ( status) => {
        dispatch( setOpen( status ) )
    }

    const onSearch = async( values ) => {
        onLoading( true )
        try {
            const { data } = await api.post(`/search-resolucion`, values);
            const { resoluciones, success } = data
            
            if( success ){
                dispatch( getResoluciones({current_page: resoluciones.current_page, data: resoluciones.data, last_page: resoluciones.last_page  }) )
                onSetSearch ( true )
                onLoading( false )
            }
          
        } catch (error) {
            console.log(error);
            onLoading( false )
        }
    }

    return {
        resoluciones,
        resolucion,
        open,
        recursos,

        onGetResoluciones,
        onStore,
        onUpdate,
        onStoreRecurso,
        onSetResolucion,
        onResetResolucion,
        onSetOpen,
        onGetRecursos,
        onSearch
    }
}