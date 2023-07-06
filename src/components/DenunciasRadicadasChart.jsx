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
            label: 'Por la SFP',
            data: beneficios,
            tension: 0.5,
            fill: false,
            borderColor: '#508ff4',
            backgrounColor: '#508ff4',
            pointRadius: 2,
            pointBorderColor: '#508ff4',
            pointBackgroundColor: '#508ff4',

        },
        {
            label: 'Por los OIC`S',
            data: beneficiosdos,
            tension: 0.5,
            fill: false,
            borderColor: '#1bc167',
            backgrounColor: '#1bc167',
            pointRadius: 2,
            pointBorderColor: '#1bc167',
            pointBackgroundColor: '#1bc167',
        },
    ],
};

var mioptions = {
    responsive: true,
  plugins: {
    legend: {
      position: 'left',
      pointStyle: 'circle',
      usePointStyle: true,
      pointRadius: 2,
      pointStyleWidth: 5,
          },
    title: {
      display: true,
      text: 'Denuncias Radicadas',
          font: {
            size: 24
        },
    },
    customCanvasBackgroundColor: {
        color: 'lightGreen',
      }
  },
};

export default function DenunciasRadicadasChart(){
    return <Line data={midata} options={mioptions}/>
}