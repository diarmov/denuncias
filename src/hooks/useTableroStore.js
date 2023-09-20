import { useDispatch, useSelector } from "react-redux";
import { setDataModal, getDependencias, getDataTablero, getDenunciasEtapa, getDenunciasEstatus, getAtenciones } from "../store";
import api from "../config/api";
import { useUiStore } from "./useUiStore";
import { fncTablero } from "../helpers/fncTablero";
import { fncBusqueda } from "../helpers/fncBusqueda";

export const useTableroStore = () => {
    const { chart, denunciastotal, atencionsfp, atencionoic, atenciontja, dependencias, depcount, statcount, datamodal, tablero, denunciasEtapa, etapaTotales, denunciasEstatus, statusTotales } = useSelector(state => state.tableros)
    const { onLoading } = useUiStore()
    const { onDataTablero } = fncTablero()
    const { onGetData } = fncBusqueda()
    const dispatch = useDispatch();

    const onGetDenunciasTotal = async () => {
        try {
            const { data } = await api.get('/denunciastotal');
            const { tableros, success } = data

            if (success) {
                dispatch(getDataTablero(onDataTablero(tableros)))
                onLoading(false)
            }

        } catch (error) {
            console.log(error);
            onLoading(false)
        }
    }


    const onGetDataAtenciones = async () => {
        try {
            const { data } = await api.get('/atenciones');
            const { sfp, oic, success } = data

            if (success) {
                dispatch(getAtenciones({ sfp: onGetData(sfp), oic: onGetData(oic) }))
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


    //funcional
    const onGetDataDepenCount = async (id) => {
        onLoading(true)
        try {
            const { data } = await api.get(`/dendepcount/${id}`);
            const { denuncias, totales, success } = data

            if (success) {
                dispatch(getDenunciasEtapa({ denuncias, totales }))
                onLoading(false)
            }

        } catch (error) {
            console.log(error);
            onLoading(false)
        }
    }


    //funcional
    const onGetDataStatCount = async (id) => {
        onLoading(true)

        try {
            const { data } = await api.get(`/denestatcount/${id}`);
            const { denuncias, totales, success } = data

            if (success) {
                dispatch(getDenunciasEstatus({ denuncias, totales }))
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
        depcount,
        statcount,
        datamodal,
        //
        tablero,
        denunciasEtapa,
        etapaTotales,
        denunciasEstatus,
        statusTotales,

        //onGetDataChart,
        onGetDenunciasTotal,
        onGetDataAtenciones,
        //onGetDataAtencionTJA,
        onGetDataDependencias,
        onGetDataDepenCount,
        onGetDataStatCount,
        onSetDataModal
    }
}

