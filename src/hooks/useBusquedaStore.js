import { useDispatch, useSelector } from "react-redux";

import { resetBusqueda, setCustomPaginate, setCustomSearch, setDetails } from "../store";
import { useUiStore } from "./useUiStore";
import api from "../config/api";
import { fncBusqueda } from "../helpers/fncBusqueda";


export const useBusquedaStore = () => {
    const { denuncias, details, paginate, search } = useSelector(state => state.busqueda)
    const { onLoading } = useUiStore()
    const { onDetails } = fncBusqueda()
    const dispatch = useDispatch();

    const onGetDenuncias = async( values ) => {
        onLoading( true )
        try {
            const { data } = await api.post(`/custom-denuncias`, values);
            const { denuncias, paginate, success } = data
          
            if( success ){
                dispatch( setCustomSearch( values ) )
                dispatch( setCustomPaginate( paginate ) )
                dispatch( setDetails(  onDetails(denuncias) ) )
                onLoading( false )
            }
          
        } catch (error) {
            console.log(error);
            onLoading( false )
        }
    }

    const onGetPaginate = async( search, page = 1 ) => {
        onLoading( true )
        try {
            const { data } = await api.post(`/custom-denuncias?page=${page}`, search);
            const { paginate, success } = data
           
            if( success ){
                dispatch( setCustomPaginate( paginate ) )
                onLoading( false )
            }
          
        } catch (error) {
            console.log(error);
            onLoading( false )
        }
    }

    const onSetCustomSearch = ( values ) => {
        dispatch( setCustomSearch( values ) )
    }

    const onResetSearch = (  ) => {
        dispatch( resetBusqueda(  ) )
    }

    return {
        denuncias,
        details,
        paginate,
        search,

        onGetDenuncias,
        onGetPaginate,
        onSetCustomSearch,
        onResetSearch
    }
}