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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

var dependencias = [
                    "Secretaría de Seguridad Pública", 
                    "Secretaría General de Gobierno", 
                    "Coordinación General Jurídica", 
                    "Secretaría de Obras Públicas", 
                    "Secretaría del Campo",
                    "Secretaría de Educación", 
                    "Instituto para la Construcción de Escueleas", 
                    "Secretaría de las Mujeres"
                ];
var denuncias = [150,130,110,90,70,60,50,40];
var colores = ['skyblue','purple','yellow','pink','green','orange','aqua','red']

var midata = {
    labels: dependencias,
    datasets: [
        {
            label: 'Denuncias',
            data: denuncias,
            backgroundColor: colores,
        }
    ],
};

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
    return <Bar data={midata} options={mioptions}/>
}