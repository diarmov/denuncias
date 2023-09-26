import { useDispatch, useSelector } from "react-redux";
import { useUiStore } from '../hooks/useUiStore';
import api from "../config/api";
import { setCaptacion, setClasificacion, setDependencia, setEstatus, setEtapa, setOrigen, setTipo, setUbicacion } from "../store";



export const useCatalogoStore = () => {
    const { origen, captacion, etapa, estatus, tipo, clasificacion, dependencia, ubicacion, informes } = useSelector(state => state.catalogos)
    const dispatch = useDispatch();

    const onGetCatalogos = async() => {
  
        try {
            const { data } = await api.get(`/catalogos`);
            const { origen, captacion, etapa, tipo, clasificacion, dependencia, ubicacion, success } = data
            
            if( success ){
                dispatch( setOrigen( origen ) )
                dispatch( setCaptacion( captacion ) )
                dispatch( setEtapa( etapa ) )
                dispatch( setTipo( tipo ) )
                dispatch( setClasificacion( clasificacion ) )
                dispatch( setDependencia( dependencia ) )
                dispatch( setUbicacion( ubicacion ) )
            }

        } catch (error) {
            console.log(error);
        }
    }

    const onGetEstatus = async( etapa) => {
        try {
            const { data } = await api.get(`/estatus/${etapa}`);
            dispatch( setEstatus( data ) )
        
        } catch (error) {
            console.log(error);
         
        }
    }

    return {
        origen, 
        captacion,
        etapa,  
        estatus, 
        tipo, 
        clasificacion, 
        dependencia, 
        ubicacion,
        informes,

        onGetCatalogos,
        onGetEstatus
    }
}