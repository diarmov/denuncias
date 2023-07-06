import { Line } from "react-chartjs-2";
import { 
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement, 
    Title, 
    Tooltip, 
    Legend, 
    Filler 
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);
var beneficios = [0, 56, 20, 36];
var meses = ["", "", "", ""];

var midata = {
    labels: meses,
    datasets: [
        {
            label: 'oic',
            data: beneficios,
            tension: 0.5,
            fill: false,
            borderColor: 'red',
            backgrounColor: 'red',
            pointRadius: 5,
            pointBorderColor: 'red',
            pointBackgroundColor: 'red',

        },
    ],
};

var mioptions = {
};

export default function LinesChart(){
    return <Line data={midata} options={mioptions}/>
}