import { useDispatch, useSelector } from "react-redux";
import api from "../config/api";
import { getDenuncias } from "../store";

export const useDenunciasStore = () => {
    const { denuncias } = useSelector(state => state.denuncias)
    const dispatch = useDispatch();

    const onGetDenuncias = async() => {
        try {
            const { data } = await api.get('/denuncias');
            const { denuncias, success } = data
            console.log(denuncias);
            if( success ){
                dispatch( getDenuncias( denuncias.data ) )
            }
          
        } catch (error) {
            console.log(e);
        }
    }

    return {
        denuncias,

        onGetDenuncias
    }
}
