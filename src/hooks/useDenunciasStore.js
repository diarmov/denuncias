import { useDispatch, useSelector } from "react-redux";
import api from "../config/api";
import { getChart, getDenuncias, getProceso, getInprocedentes, getConcluidas, getAtendidasSFP } from "../store";

export const useDenunciasStore = () => {
    const { denuncias, chart, proceso, inprocedente, concluida, atendidasSFP } = useSelector(state => state.denuncias)
    const dispatch = useDispatch();

    const onGetDenuncias = async() => {
        try {
            const { data } = await api.get('/denuncias');
            const { denuncias, success } = data
            //console.log(denuncias);
            if( success ){
                dispatch( getDenuncias( denuncias.data ) )
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

    const onGetDataInprocedente = async() => {
        try {
            const { data } = await api.get('/denunciasinprocedentes');
            const { denuncias, success } = data
            //console.log(denuncias);
            
            if( success ){
                dispatch( getInprocedentes( denuncias ) )
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
            console.log(denuncias);
            
            if( success ){
                dispatch( getAtendidasSFP( denuncias ) )
            }
          
        } catch (error) {
            console.log(error);
        }
    }


    return {
        denuncias,
        chart,
        proceso,
        inprocedente,
        concluida,
        atendidasSFP,
        onGetDenuncias,
        onGetDataChart,
        onGetDataProceso,
        onGetDataInprocedente,
        onGetDataConcluida,
        onGetDataAtendidasSFP

    }
}
