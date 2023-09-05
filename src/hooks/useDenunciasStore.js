import { useDispatch, useSelector } from "react-redux";
import { getChart, getDenuncias, resetDenuncia, setDenuncia,  getTotal, getAtenSFP, getAtenOIC, getAtenTJA, getClasificacion, setClasificacionId} from "../store";
import api from "../config/api";
import { useUiStore } from '../hooks/useUiStore';


export const useDenunciasStore = () => {
    const { denuncias, denuncia, chart, denunciastotal, atencionsfp, atencionoic, atenciontja, clasificacion, clasificacionId } = useSelector(state => state.denuncias)
    const { onLoading, onNotification, onSetSearch } = useUiStore()
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

    const onGetDenunciasTotal = async() => {
        try {
            const { data } = await api.get('/denunciastotal');
            const { denuncias, success } = data
           // console.log(denuncias);
            
            if( success ){
                dispatch( getTotal( denuncias ) )
                onLoading( false )
            }
          
        } catch (error) {
            console.log(error);
            onLoading( false )
        }
    }

    const onGetDataChart = async() => {
        try {
            const { data } = await api.get('/denunciasradicadassfp');
            const { denuncias, success } = data
            //console.log(denuncias);
            
            if( success ){
                dispatch( getChart( denuncias ) )
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

    const onStore = async( values ) => {
   
        onLoading(true)
        try {
          const { data } = await api.post('/denuncias', values) 
          const { success } = data

          if( success ) {
              onGetDenuncias()
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

    const onGetDataAtencionSFP = async() => {
        try {
            const { data } = await api.get('/atencionsfp');
            const { denuncias, success } = data
            //console.log('data:', data);
            
            if( success ){
                dispatch( getAtenSFP( denuncias ) )
                onLoading( false )
            }
          
        } catch (error) {
            console.log(error);
            onLoading( false )
        }
    }

    const onGetDataAtencionOIC = async() => {
        try {
            const { data } = await api.get('/atencionoic');
            const { denuncias, success } = data
            //console.log('data:', data);
            
            if( success ){
                dispatch( getAtenOIC( denuncias ) )
                onLoading( false )
            }
          
        } catch (error) {
            console.log(error);
            onLoading( false )
        }
    }

    const onGetDataAtencionTJA = async() => {
        try {
            const { data } = await api.get('/atenciontja');
            const { denuncias, success } = data
            //console.log('data:', data);
            
            if( success ){
                dispatch( getAtenTJA( denuncias ) )
                onLoading( false )
            }
          
        } catch (error) {
            console.log(error);
            onLoading( false )
        }
    }

    const onGetDataClasificacion = async() => {
        onLoading(true)
        try {
            const { data } = await api.get('/denunciasclasificacion');
            const { denuncias, success } = data

            if( success ){
                dispatch( getClasificacion( denuncias ) )
                onLoading( false )
            }
        
        } catch (error) {
            console.log(error);
            onLoading( false )

        }
    }

    const onGetDataClasificacionById = async( id ) => { 
        onLoading(true)
        try {
            const { data } = await api.get(`/clasificacion-id/${id}`);
            const { denuncias, success } = data
            console.log(data);
            if( success ){
                dispatch( setClasificacionId( denuncias ) )
                onLoading(false)
            }
        
        } catch (error) {
            console.log(error);
            onLoading(false)
        }
    }


    //const onGetDataChart = () => {}


    return {
        denuncias,
        denuncia,
        chart,
        denunciastotal,
        atencionsfp,
        atencionoic,
        atenciontja,
        clasificacion,
        clasificacionId,

        onGetDenuncias,
        onSearch,
        onStore,
        onUpdate,
        onSetDenuncia,
        onResetDenuncia,
        onGetDataChart,
        onGetDenunciasTotal,
        onGetDataAtencionSFP,
        onGetDataAtencionOIC,
        onGetDataAtencionTJA,
        onGetDataClasificacion,
        onGetDataClasificacionById
    }
}
