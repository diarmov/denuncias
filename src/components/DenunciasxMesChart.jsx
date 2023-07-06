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
var beneficios = [0, 56, 20, 36, 80, 30, 40, 20, 25, 30, 12, 60];
var meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

var midata = {
    labels: meses,
    datasets: [
        {
            label: 'Denuncias',
            data: beneficios,
            tension: 0.5,
            fill: true,
            borderColor: 'blue',
            backgroundColor: 'rgba(71, 145, 255, .4)',
            pointRadius: 2,
            pointBorderColor: 'blue',
            pointBackgroundColor: 'blue',
            borderWidth: 1,
            
        },
    ],
};

var mioptions = {
    responsive: true,
  plugins: {
    legend: {
      position: 'top',
      display: false,
    },
    title: {
      display: true,
      text: 'Denuncias por Mes',
          font: {
            size: 24
        }
    },
  },
};

export default function DenunciasxMesChart(){
    return <Line data={midata} options={mioptions}/>
}