import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useEstadisticaStore } from '../hooks/useEstadisticaStore';
import { fncBusqueda } from '../helpers/fncBusqueda';

ChartJS.register(ArcElement, Tooltip, Legend);

  var mioptions = {
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Tipo de Faltas',
          font: {
            size: 24
        }
    },
  },
};

export default function PieChartEstadistica() {
  const { tipo } = useEstadisticaStore()

  var midata = {
    labels: tipo.labels,
    datasets: [
      {
        label: 'Total de Faltas',
        data: tipo.data,
        fill: false,
        lineTension: 0.1,
        backgroundColor:tipo.color,
        borderColor: 'black',
        borderWidth: 1,
        pointRadius: 3,
      },
    ],
  };

  return <Pie data={midata} options={mioptions}/>;
}
