import { Doughnut } from 'react-chartjs-2';
import { 
    Chart as ChartJS, 
    ArcElement, 
    Tooltip, 
    Legend } from 'chart.js';


ChartJS.register(
    ArcElement, 
    Tooltip, 
    Legend
    );

var porcentaje = [60,40];
var genero = ["Masculino", "Femenino"];
var color = ["blue", "rgba(245, 84, 205)"];

var midata = {
    labels: genero,
    datasets: [
        {
            label: 'Porcentaje',
            data: porcentaje,
            backgroundColor: color,
            borderWidth: 1,
        }
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
      text: 'Género del denunciado',
          font: {
            size: 24
        }
    },
  },
};

export default function GeneroDenunciadoChart(){
    return <Doughnut data={midata} options={mioptions}/>
}