import React from 'react'
import style from './ChartPersion.module.css'
import {  options } from "./option";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
ChartJS.defaults.color = "#FFF"


const data = {
  labels: [
    'A',
    'B',
    'C',
    'D',
    'E',
  ],
  datasets: [{
    data: [1, 2, 3, 4, 5],
    borderWidth:'2px',
    borderColor: 'rgb(238, 111, 124)',
    pointBackgroundColor: 'rgb(238, 111, 124)',
  }, {
    data: [7, 8, 9, 10, 1],
    borderWidth:'2px',
    borderColor: 'rgb(95, 213, 236)',
    pointBackgroundColor: 'rgb(95, 213, 236)',
  }, {
    data: [12, 13, 14, 15, 16],
    borderWidth:'2px',
    borderColor: 'rgb(34, 118, 252)',
    pointBackgroundColor: 'rgb(34, 118, 252)',
  }
]
};

const ChartPersion = () => {
  
  return (
    <div className={style.ChartPersion}>
      <Radar options={options} data={data} />
    </div>
  )
}

export default ChartPersion