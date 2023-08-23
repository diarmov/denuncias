import { useDispatch, useSelector } from "react-redux";
import api from "../config/api";
import { getChart, getDenuncias, getProceso, getImprocedentes, getConcluidas, getAtendidasSFP, getEtapas, getClasificacion } from "../store";

export const useDenunciasStore = () => {
    const { denuncias, chart, proceso, improcedente, concluida, atendidasSFP, etapas, clasificacion } = useSelector(state => state.denuncias)
    const dispatch = useDispatch();

    const onGetDenuncias = async() => {
        try {
            const { data } = await api.get('/denunciastotal');
            const { denuncias, success } = data
            //console.log(denuncias);
            if( success ){
                dispatch( getDenuncias( denuncias ) )
            }
          
        } catch (error) {
            console.log(error);
        }
    }

    const onGetDataChart = async() => {
        try {
            const { data } = await api.get('/denunciasradicadassfp');
            const { denuncias, success } = data
            //console.log(denuncias);
            
            if( success ){
                dispatch( getChart( denuncias ) )
            }
          
        } catch (error) {
            console.log(error);
        }
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
            //console.log(denuncias);

            if( success ){
                dispatch( getClasificacion( denuncias ) )
            }
        
        } catch (error) {
            console.log(error);
        }
    }


    return {
        denuncias,
        chart,
        proceso,
        improcedente,
        concluida,
        atendidasSFP,
        etapas,
        clasificacion,
        onGetDenuncias,
        onGetDataChart,
        onGetDataProceso,
        onGetDataImprocedente,
        onGetDataConcluida,
        onGetDataAtendidasSFP,
        onGetDataEtapa,
        onGetDataClasificacion

    }
}
