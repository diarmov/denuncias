import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
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
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        display:false,
      },
      title: {
        display: true,
        text: 'Dependencias con más denuncias',
        font: {
            size: 24
        }
      },
    },
  };

export default function DependenciasMasChart(){
  const { byDep } = useEstadisticaStore()

  var midata = {
    labels: byDep.labels,
    datasets: [
      {
        label: 'Total de Faltas',
        data: byDep.data,
        fill: false,
        lineTension: 0.1,
        backgroundColor:byDep.color,
        borderColor: 'black',
        borderWidth: 1,
        pointRadius: 3,
      },
    ],
  };

  return <Bar data={midata} options={mioptions}/>
}