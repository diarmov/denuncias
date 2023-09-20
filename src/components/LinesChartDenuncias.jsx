
import { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { useTableroStore } from "../hooks/useTableroStore";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);


export const LinesChartDenuncias = () => {
    const { atencionsfp, atencionoic, onGetDataAtenciones } = useTableroStore()

    useEffect(() => {
        if (atencionsfp.length === 0) onGetDataAtenciones()
    }, [])

    const mioptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: '',
                font: {
                    size: 24
                }
            },
        },
    };

    var midata = {
        labels: atencionsfp.labels,
        datasets: [
            {
                label: 'SFP',
                data: atencionsfp.data,
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
                data: atencionoic.data,
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
