import React from 'react'
import styles from './StorageInformation.module.css'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js'
ChartJS.register(...registerables)
const StorageInformation = ({ storage }) => {
  console.log(storage)
  const generateLables = () => {
    let labels = []
    for (let [key, value] of Object.entries(storage)) {
      let label = `${key.charAt(0).toUpperCase()}${key.slice(
        1,
        key.length
      )} Storage(${Number(value)}GB)`
      console.log(label)
      labels.push(label)
    }
    // console.log(labels)
    return labels.reverse()
  }
  const data = {
    labels: generateLables(),
    datasets: [
      {
        // axis: 'y',
        label: '# of Hits',
        data: Object.values(storage).reverse(),
        // fill: false,
        backgroundColor: [
          'rgba(254,67,41,0.7)',
          'rgba(79,250,184,0.7)',
          'rgba(179,243 ,131,0.7)',
        ],

        borderColor: ['white'],
        hoverBackgroundColor: [
          'rgba(254,67,41,1)',
          'rgba(79,250,184,1)',
          'rgba(179,243,131,1)',
        ],
        hoverBorderColor: ['white'],
        hoverEffect: 4,
        // lineTension: 0.4,
      },
    ],
  }
  const options = {
    responsive: true,
    animations: {
      radius: {
        duration: 400,
        easing: 'linear',
        // loop: (context) => context.active,
      },
    },

    plugins: {
      // tooltip: {
      //   enabled: false,
      // },
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
    // interaction: {
    //   mode: 'nearest',
    //   intersect: false,
    //   axis: 'x',
    // },
    // scales: {
    //   y: {
    //     min: 10,
    //     max: 90,
    //     ticks: {
    //       stepSize: 10,
    //       color: '#ffff', // not 'fontColor:' anymore
    //       // fontSize: 18,
    //       font: {
    //         size: 12, // 'size' now within object 'font {}'
    //       },
    //     },
    //     // grid: {
    //     //   display: false,
    //     // },
    //   },
    //   x: {
    //     ticks: {
    //       stepSize: 10,
    //       color: '#ffff', // not 'fontColor:' anymore
    //       // fontSize: 18,
    //       font: {
    //         size: 12, // 'size' now within object 'font {}'
    //       },
    //     },
    //   },
    //   //   x: {
    //   //     grid: {
    //   //       display: false,
    //   //     },
    //   //   },
    //   //   yAxes: [{ gridLines: { display: false } }],
    // },
    // stroke: {
    //   curve: 'smooth',
    // },
    legend: {
      show: false,
    },
    elements: {
      //   line: {
      //     tension: 0, // disables bezier curves
      //   },
      point: {
        radius: 0,
      },
    },
    scaleLineColor: 'transparent',
  }
  return (
    <div className={styles.StorageInformationContainer}>
      <p className={styles.Title}>Storage Information</p>
      <div className={styles.PieChartContainer}>
        <Pie data={data} options={options} />
      </div>
    </div>
  )
}

export default StorageInformation
