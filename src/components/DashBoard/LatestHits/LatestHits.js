import React, { useEffect } from 'react'
import styles from './LatestHits.module.css'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js'
ChartJS.register(...registerables)
const LatestHits = ({ latestHits, options }) => {
  //   console.log(Object.keys(latestHits))
  //   let latestHitsCategories
  console.log(latestHits)
  //   if (latestHits) latestHitsCategories = Object.keys(latestHits)
  //   //   useEffect(() => {
  //   latestHitsCategories = latestHitsCategories.filter(
  //     (latestHitCategory) => latestHitCategory !== 'months'
  //   )
  //   }, [])
  //   const mapCategories = latestHits.map((latestHit) => {
  //     return {
  //       label: latestHitsCategories[2],
  //       data: latestHits[latestHitsCategories[2]],
  //       borderColor: ['rgb(153,103,254)'],
  //       borderWidth: 3,
  //       lineTension: 0.4,
  //     }
  //   })
  //   console.log(Object.entries(latestHits))
  const borderColorSet = {
    featured: 'rgb(153,103,254)',
    popular: 'rgb(254,98,132)',
    latest: 'rgb(74, 193, 192)',
  }

  const dashBoardData = () => {
    let dataset = []

    for (let [category, categoryArr] of Object.entries(latestHits)) {
      if (category !== 'months')
        dataset.push({
          label: category === 'featured' ? category : category + ' Hits',
          data: categoryArr,
          borderColor: borderColorSet[category],
          borderWidth: 3,
          lineTension: 0.4,
        })
    }
    return dataset
  }
  const data = {
    labels: latestHits['months'],
    datasets: dashBoardData(),
  }
  //   const options = {
  //     responsive: true,
  //     animations: {
  //       radius: {
  //         duration: 400,
  //         easing: 'linear',
  //         // loop: (context) => context.active,
  //       },
  //     },

  //     plugins: {
  //       tooltip: {
  //         enabled: false,
  //       },
  //       legend: {
  //         labels: {
  //           color: '#ffff', // not 'fontColor:' anymore
  //           // fontSize: 18  // not 'fontSize:' anymore
  //           font: {
  //             size: 12, // 'size' now within object 'font {}'
  //           },
  //         },
  //       },
  //       //   usePointStyle: true,
  //     },
  //     interaction: {
  //       mode: 'nearest',
  //       intersect: false,
  //       axis: 'x',
  //     },
  //     scales: {
  //       y: {
  //         min: 10,
  //         max: 90,
  //         ticks: {
  //           stepSize: 10,
  //           color: '#ffff', // not 'fontColor:' anymore
  //           // fontSize: 18,
  //           font: {
  //             size: 12, // 'size' now within object 'font {}'
  //           },
  //         },
  //         // grid: {
  //         //   display: false,
  //         // },
  //       },
  //       x: {
  //         ticks: {
  //           stepSize: 10,
  //           color: '#ffff', // not 'fontColor:' anymore
  //           // fontSize: 18,
  //           font: {
  //             size: 12, // 'size' now within object 'font {}'
  //           },
  //         },
  //       },
  //       //   x: {
  //       //     grid: {
  //       //       display: false,
  //       //     },
  //       //   },
  //       //   yAxes: [{ gridLines: { display: false } }],
  //     },
  //     stroke: {
  //       curve: 'smooth',
  //     },
  //     legend: {
  //       show: false,
  //     },
  //     elements: {
  //       //   line: {
  //       //     tension: 0, // disables bezier curves
  //       //   },
  //       point: {
  //         radius: 0,
  //       },
  //     },
  //     scaleLineColor: 'transparent',
  //   }
  return (
    <div className={styles.LatestHitsContainer}>
      <p className={styles.Title}>Latest Hits</p>
      <div className={styles.LineChartContainer}>
        <Line data={data} options={options} />
      </div>
    </div>
  )
}

export default LatestHits
