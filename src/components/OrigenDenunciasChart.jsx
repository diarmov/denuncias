import { Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEstadisticaStore } from '../hooks/useEstadisticaStore';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
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
      text: 'Origen de las Denuncias',
          font: {
            size: 24
        }
    },
  },
};

export default function OrigenDenunciasChart(){
  const { byOrigen } = useEstadisticaStore()

  var midata = {
    labels: byOrigen.labels,
    datasets: [
      {
        label: 'Total de Faltas',
        data: byOrigen.data,
        fill: false,
        lineTension: 0.1,
        backgroundColor:byOrigen.color,
        borderColor: 'black',
        borderWidth: 1,
        pointRadius: 3,
      },
    ],
  };
  
  return <Bar data={midata} options={mioptions}/>
}