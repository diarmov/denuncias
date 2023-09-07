
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { useTableroStore } from "../hooks/useTableroStore";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);


export const LinesChartDenuncias = () => {

    const { atencionsfp, atencionoic, onGetDataAtencionSFP, onGetDataAtencionOIC } = useTableroStore()

    console.log(atencionoic);

    useEffect(() => {
        if (atencionsfp.length === 0) onGetDataAtencionSFP()
        if (atencionoic.length === 0) onGetDataAtencionOIC()
    }, [])


    const groupByMes = atencionsfp.reduce((group, denuncia) => {
        const { mesRadicacion } = denuncia;
        group[mesRadicacion] = group[mesRadicacion] ?? [];
        group[mesRadicacion].push(denuncia);
        return group;
    }, {});

    const groupByMesOIC = atencionoic.reduce((group, denuncia) => {
        const { mesRadicacion } = denuncia;
        group[mesRadicacion] = group[mesRadicacion] ?? [];
        group[mesRadicacion].push(denuncia);
        return group;
    }, {});


    let enero = groupByMes['enero']?.length
    if (enero === undefined) {
        enero = 0
    }
    let febrero = groupByMes['febrero']?.length
    if (febrero === undefined) {
        febrero = 0
    }
    let marzo = groupByMes['marzo']?.length
    if (marzo === undefined) {
        marzo = 0
    }
    let abril = groupByMes['abril']?.length
    if (abril === undefined) {
        abril = 0
    }
    let mayo = groupByMes['mayo']?.length
    if (mayo === undefined) {
        mayo = 0
    }
    let junio = groupByMes['junio']?.length
    if (junio === undefined) {
        junio = 0
    }
    let julio = groupByMes['julio']?.length
    if (julio === undefined) {
        julio = 0
    }
    let agosto = groupByMes['agosto']?.length
    if (agosto === undefined) {
        agosto = 0
    }
    let septiembre = groupByMes['septiembre']?.length
    if (septiembre === undefined) {
        septiembre = 0
    }
    let octubre = groupByMes['octubre']?.length
    if (octubre === undefined) {
        octubre = 0
    }
    let noviembre = groupByMes['noviembre']?.length
    if (noviembre === undefined) {
        noviembre = 0
    }
    let diciembre = groupByMes['diciembre']?.length
    if (diciembre === undefined) {
        diciembre = 0
    }

    //***********************OICS */
    let eneroO = groupByMesOIC['enero']?.length
    if (eneroO === undefined) {
        eneroO = 0
    }
    let febreroO = groupByMesOIC['febrero']?.length
    if (febreroO === undefined) {
        febreroO = 0
    }
    let marzoO = groupByMesOIC['marzo']?.length
    if (marzoO === undefined) {
        marzoO = 0
    }
    let abrilO = groupByMesOIC['abril']?.length
    if (abrilO === undefined) {
        abrilO = 0;
    }
    let mayoO = groupByMesOIC['mayo']?.length
    if (mayoO === undefined) {
        mayoO = 0;
    }
    let junioO = groupByMesOIC['junio']?.length
    if (junioO === undefined) {
        junioO = 0;
    }
    let julioO = groupByMesOIC['julio']?.length
    if (julioO === undefined) {
        julioO = 0;
    }
    let agostoO = groupByMesOIC['agosto']?.length
    if (agostoO === undefined) {
        agostoO = 0;
    }
    let septiembreO = groupByMesOIC['septiembre']?.length
    if (septiembreO === undefined) {
        septiembreO = 0;
    }
    let octubreO = groupByMesOIC['octubre']?.length
    if (octubreO === undefined) {
        octubreO = 0;
    }
    let noviembreO = groupByMesOIC['noviembre']?.length
    if (noviembreO === undefined) {
        noviembreO = 0;
    }
    let diciembreO = groupByMesOIC['diciembre']?.length
    if (diciembreO === undefined) {
        diciembreO = 0;
    }

    var mioptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Seguimiento a Denuncias',
                font: {
                    size: 24
                }
            },
        },
    };

    var denunciassfp = [enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre];
    var denunciasoic = [eneroO, febreroO, marzoO, abrilO, mayoO, junioO, julioO, agostoO, septiembreO, octubreO, noviembreO, diciembreO];
    // var denunciastja = [eneroT, febreroT, marzoT, abrilT, mayoT, junioT, julioT, agostoT, septiembreT, octubreT, noviembreT, diciembreT];
    var meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    var midata = {
        labels: meses,
        datasets: [
            {
                label: 'SFP',
                data: denunciassfp,
                tension: 0.5,
                fill: false,
                borderColor: 'green',
                backgrounColor: 'green',
                pointRadius: 5,
                pointBorderColor: 'green',
                pointBackgroundColor: 'green',

            },
            {
                label: 'OIC',
                data: denunciasoic,
                tension: 0.5,
                fill: false,
                borderColor: 'rgb(255, 99, 132)',
                backgrounColor: 'rgba(255, 99, 132, 0.5)',
                pointRadius: 5,
                pointBorderColor: 'rgba(255, 99, 132)',
                pointBackgroundColor: 'rgba(255, 99, 132)',
            },
        ],
    };

    return (

        <Line data={midata} options={mioptions} />
    )
}
export default LinesChartDenuncias
