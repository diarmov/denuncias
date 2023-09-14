import { useDispatch, useSelector } from "react-redux";
import { getChart, getAtenOIC, getAtenSFP, getAtenTJA, getTotal, setDataModal, getDependencias } from "../store";
import api from "../config/api";
import { useUiStore } from "./useUiStore";

export const useTableroStore = () => {
    const { chart, denunciastotal, atencionsfp, atencionoic, atenciontja, dependencias, datamodal } = useSelector(state => state.tableros)
    const { onLoading, onNotification, onSetSearch, onModal } = useUiStore()
    const dispatch = useDispatch();

    const onGetDenunciasTotal = async () => {
        try {
            const { data } = await api.get('/denunciastotal');
            const { tableros, success } = data
            // console.log(data)

            if (success) {
                dispatch(getTotal(tableros))
                onLoading(false)
            }

        } catch (error) {
            console.log(error);
            onLoading(false)
        }
    }

    const onGetDataChart = async () => {
        try {
            const { data } = await api.get('/denunciasradicadassfp');
            const { tableros, success } = data
            //console.log(denuncias);

            if (success) {
                dispatch(getChart(tableros))
                onLoading(false)
            }

        } catch (error) {
            console.log(error);
            onLoading(false)
        }
    }

    const onGetDataAtencionSFP = async () => {
        try {
            const { data } = await api.get('/atencionsfp');
            const { tableros, success } = data
            //.log('data:', data);

            if (success) {
                dispatch(getAtenSFP(tableros))
                onLoading(false)
            }

        } catch (error) {
            console.log(error);
            onLoading(false)
        }
    }

    const onGetDataAtencionOIC = async () => {
        try {
            const { data } = await api.get('/atencionoic');
            const { tableros, success } = data
            //console.log('data:', data);

            if (success) {
                dispatch(getAtenOIC(tableros))
                onLoading(false)
            }

        } catch (error) {
            console.log(error);
            onLoading(false)
        }
    }

    const onGetDataAtencionTJA = async () => {
        try {
            const { data } = await api.get('/atenciontja');
            const { tableros, success } = data
            //console.log('data:', data);

            if (success) {
                dispatch(getAtenTJA(tableros))
                onLoading(false)
            }

        } catch (error) {
            console.log(error);
            onLoading(false)
        }
    }

    const onGetDataDependencias = async (page = 1) => {
        onLoading(true)

        try {
            const { data } = await api.get(`/denunciasdependencias?page=${page}`);
            const { tableros, success } = data
            //console.log('data:', data);

            if (success) {
                dispatch(getDependencias({ current_page: tableros.current_page, data: tableros.data, last_page: tableros.last_page }))
                //dispatch(getDependencias(tableros))
                onLoading(false)
            }

        } catch (error) {
            console.log(error);
            onLoading(false)
        }
    }


    const onSetDataModal = (datamodal) => {
        dispatch(setDataModal(datamodal))
    }

    //const onGetDataChart = () => {}

    return {
        chart,
        denunciastotal,
        atencionsfp,
        atencionoic,
        atenciontja,
        dependencias,
        datamodal,
        onGetDataChart,
        onGetDenunciasTotal,
        onGetDataAtencionSFP,
        onGetDataAtencionOIC,
        onGetDataAtencionTJA,
        onGetDataDependencias,
        onSetDataModal
    }
}

