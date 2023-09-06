import { useDispatch, useSelector } from "react-redux";
import api from "../config/api";
import { resetEstadistica, setEstadistica, setEstadisticas } from "../store";
import { useUiStore } from "./useUiStore";
import { fncBusqueda } from "../helpers/fncBusqueda";


export const useEstadisticaStore = () => {
    const { tipo, byDep, byMonth, byOrigen, estadistica } = useSelector(state => state.estadisticas)
    const { onLoading } = useUiStore()
    const { onGetData } = fncBusqueda()
    const dispatch = useDispatch();

    const onGetEstadisticas = async( values ) => {
        onLoading( true )
 
        try {
            const { data } = await api.post('/estadisticas', values );
            const { tipo, byDep, byMonth, byOrigen, success } = data           

            if( success ){
                dispatch( setEstadisticas({ tipo: onGetData( tipo ), byDep: onGetData( byDep ), byMonth: onGetData( byMonth ), byOrigen: onGetData( byOrigen ) }) )
                dispatch( setEstadistica( values ) )
                onLoading( false )
            }
          
        } catch (error) {
            console.log(error);
            onLoading( false )
        }
    }

    const onResetEstadistica = () => {
        dispatch( resetEstadistica() )
    }

    return {
        tipo, 
        byDep, 
        byMonth, 
        byOrigen,
        estadistica,

        onGetEstadisticas,
        onResetEstadistica
    }

}