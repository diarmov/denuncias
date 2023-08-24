import { useDispatch, useSelector } from "react-redux";
import { useUiStore } from '../hooks/useUiStore';
import api from "../config/api";
import { setClasificacion, setDependencia, setEstatus, setEtapa, setOrigen, setTipo, setUbicacion } from "../store";



export const useCatalogoStore = () => {
    const { origen, etapa,  estatus, tipo, clasificacion, dependencia, ubicacion } = useSelector(state => state.catalogos)
    const { onLoading } = useUiStore()
    const dispatch = useDispatch();

    const onGetCatalogos = async() => {
        onLoading( true )
        try {
            const { data } = await api.get(`/catalogos`);
            const { origen, etapa,  estatus, tipo, clasificacion, dependencia, ubicacion, success } = data
            
            if( success ){
                dispatch( setOrigen( origen ) )
                dispatch( setEtapa( etapa ) )
                dispatch( setEstatus( estatus ) )
                dispatch( setTipo( tipo ) )
                dispatch( setClasificacion( clasificacion ) )
                dispatch( setDependencia( dependencia ) )
                dispatch( setUbicacion( ubicacion ) )
                onLoading( false )
            }
            onLoading( false )
        } catch (error) {
            console.log(error);
            onLoading( false )
        }
    }

    return {
        origen, 
        etapa,  
        estatus, 
        tipo, 
        clasificacion, 
        dependencia, 
        ubicacion,

        onGetCatalogos
    }
}