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
var beneficios = [0, 56, 20, 36, 80, 30, 40, -20, 25, 30, 12, 60];
var beneficiosdos = [0, 70, 45, 60, 25, 50, 15, 65, 85, -30, 22, 40];
var meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

var midata = {
    labels: meses,
    datasets: [
        {
            label: 'Beneficios',
            data: beneficios,
            tension: 0.5,
            fill: false,
            borderColor: 'yellow',
            backgrounColor: 'yellow',
            pointRadius: 5,
            pointBorderColor: 'yellow',
            pointBackgroundColor: 'yellow',

        },
        {
            label: 'Beneficios2',
            data: beneficiosdos,
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

export default function LinesChartDenuncias(){
    return <Line data={midata} options={mioptions}/>
}