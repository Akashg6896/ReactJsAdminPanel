import React from 'react'
import styles from './PerformanceComp.module.css'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js'
ChartJS.register(...registerables)
const Performance = ({ performance, options }) => {
  console.log(...Object.keys(performance))
  const data = {
    labels: Object.keys(performance),
    datasets: [
      {
        axis: 'y',
        label: '# of Hits',
        data: [...Object.values(performance)],
        // fill: false,
        backgroundColor: [...Object.keys(performance)],

        borderColor: [...Object.keys(performance)],
        hoverBackgroundColor: [...Object.keys(performance)],
        hoverBorderColor: [...Object.keys(performance)],
        borderWidth: 1,
        barThickness: 4,
        barPercentage: 0.5,
        // lineTension: 0.4,
      },
    ],
  }
  const options1 = {
    indexAxis: 'y',
    title: {
      display: true,
      text: '# of Hits',
      color: '#ffff',
    },
    // responsive: true,
    // plugins: {
    //   tooltip: {
    //     enabled: false,
    //   },
    // },
    legend: {
      show: true,
    },
    // elements: {
    //   //   line: {
    //   //     tension: 0, // disables bezier curves
    //   //   },
    //   point: {
    //     radius: 0,
    //   },
    // },
    scales: {
      // y: {
      //   min: 10,
      //   max: 90,
      //   ticks: {
      //     stepSize: 10,
      //     color: '#ffff', // not 'fontColor:' anymore
      //     // fontSize: 18,
      //     // font: {
      //     //   size: 12, // 'size' now within object 'font {}'
      //     // },
      //   },
      //   // grid: {
      //   //   display: false,
      //   // },
      // },
      y: {
        ticks: {
          // stepSize: 10,
          color: '#ffff', // not 'fontColor:' anymore
          // fontSize: 18,
          // font: {
          //   size: 12, // 'size' now within object 'font {}'
          // },
        },
        stacked: true,
      },
      x: {
        min: 20,
        max: 60,
        ticks: {
          stepSize: 10,
          color: '#ffff', // not 'fontColor:' anymore
          // fontSize: 18,
          // font: {
          //   size: 12, // 'size' now within object 'font {}'
          // },
        },
        stacked: true,
      },
    },
    plugins: {
      // tooltip: {
      //   enabled: false,
      // },
      // fillOpacity: 0.3,
      legend: {
        labels: {
          color: '#ffff', // not 'fontColor:' anymore
          // fontSize: 18  // not 'fontSize:' anymore
          font: {
            size: 12, // 'size' now within object 'font {}'
          },
        },
      },
      //   usePointStyle: true,
    },
  }
  return (
    <div className={styles.PerformanceCompContainer}>
      <p className={styles.Title}>Performance</p>
      <div className={styles.BarChartContainer}>
        <Bar data={data} options={options1} />
      </div>
    </div>
  )
}

export default Performance
