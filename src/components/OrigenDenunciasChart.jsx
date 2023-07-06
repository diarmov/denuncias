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


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

var denuncias = [60, 56, 20, 36, 80, 30,];
var meses = ["Derivadas de Auditoría","SIDEC","Comparecencia", "Incompetencia de OIC", "Atracción", "Oficio"];

var midata = {
    labels: meses,
    datasets: [
        {
            label: 'Denuncias',
            data: denuncias,
            backgroundColor: ['rgba(239, 96, 115)','rgba(229, 230, 64)','rgba(217, 108, 11)','rgba(184, 83, 244)','rgba(41, 106, 18)','rgba(245, 84, 205)']
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
      text: 'Origen de las Denuncias',
          font: {
            size: 24
        }
    },
  },
};

export default function OrigenDenunciasChart(){
    return <Bar data={midata} options={mioptions}/>
}