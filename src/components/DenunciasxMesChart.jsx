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
import { useEstadisticaStore } from "../hooks/useEstadisticaStore";

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
  const { byMonth } = useEstadisticaStore()

  let midata = {
    labels: byMonth.labels,
    datasets: [
        {
            label: 'Total de denuncias',
            data: byMonth.data,
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

  return <Line data={midata} options={mioptions}/>
}