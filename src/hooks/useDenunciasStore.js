import { useDispatch, useSelector } from "react-redux";
import { getChart, getDenuncias, resetDenuncia, setDenuncia, getProceso, getImprocedentes, getConcluidas, getAtendidasSFP, getEtapas, getClasificacion } from "../store";
import api from "../config/api";
import { useUiStore } from '../hooks/useUiStore';


export const useDenunciasStore = () => {
    const { denuncias, denuncia, chart, proceso, improcedente, concluida, atendidasSFP, etapas, clasificacion } = useSelector(state => state.denuncias)
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

    const onGetDataProceso = async() => {
        try {
            const { data } = await api.get('/denunciasproceso');
            const { denuncias, success } = data
            //console.log(denuncias);
            
            if( success ){
                dispatch( getProceso( denuncias ) )
            }
          
        } catch (error) {
            console.log(error);
        }
    }

    const onGetDataImprocedente = async() => {
        try {
            const { data } = await api.get('/denunciasimprocedentes');
            const { denuncias, success } = data
            //console.log(denuncias);
            
            if( success ){
                dispatch( getImprocedentes( denuncias ) )
            }
          
        } catch (error) {
            console.log(error);
        }
    }

    const onGetDataConcluida = async() => {
        try {
            const { data } = await api.get('/denunciasconcluidas');
            const { denuncias, success } = data
            //console.log(denuncias);
            
            if( success ){
                dispatch( getConcluidas( denuncias ) )
            }
          
        } catch (error) {
            console.log(error);
        }
    }

    const onGetDataAtendidasSFP = async() => {
        try {
            const { data } = await api.get('/denunciasatendidassfp');
            const { denuncias, success } = data
            //console.log(denuncias);
            
            if( success ){
                dispatch( getAtendidasSFP( denuncias ) )
            }
          
        } catch (error) {
            console.log(error);
        }
    }

                //console.log(denuncias);
    const onGetDataEtapa = async() => {
        try {
            const { data } = await api.get('/denunciasetapa');
            const { denuncias, success } = data
            //console.log(denuncias);

            if( success ){
                dispatch( getEtapas( denuncias ) )
            }
        
        } catch (error) {
            console.log(error);
        }
    }

    const onGetDataClasificacion = async() => {
        try {
            const { data } = await api.get('/denunciasclasificacion');
            const { denuncias, success } = data

            if( success ){
                dispatch( getClasificacion( denuncias ) )
            }
        
        } catch (error) {
            console.log(error);
        }
    }

    const onGetDataChart = () => {}


    return {
        denuncias,
        denuncia,
        chart,
        proceso,
        improcedente,
        concluida,
        atendidasSFP,
        etapas,
        clasificacion,
        onGetDenuncias,
        onSearch,
        onStore,
        onUpdate,
        onSetDenuncia,
        onResetDenuncia,
        onGetDataChart,
        onGetDataProceso,
        onGetDataImprocedente,
        onGetDataConcluida,
        onGetDataAtendidasSFP,
        onGetDataEtapa,
        onGetDataClasificacion
    }
}
