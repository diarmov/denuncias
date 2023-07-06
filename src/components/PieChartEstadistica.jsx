import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



  var tipofalta = ["Graves", "No Graves"];
  var total = [152,40];
  var color = ['#6AA9F7', 'yellow']

  var midata = {
    labels: tipofalta,
    datasets: [
      {
        label: 'Total de Faltas',
        data: total,
        fill: false,
        lineTension: 0.1,
        backgroundColor:color,
        borderColor: 'black',
        borderWidth: 1,
        pointRadius: 3,
      },
    ],
  };

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
  return <Pie data={midata} options={mioptions}/>;
}
