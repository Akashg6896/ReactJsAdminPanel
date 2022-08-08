import React, { useEffect, useState } from 'react'
import LatestHits from './LatestHits/LatestHits'
import StorageInformation from './StorageInformation/StorageInformation'
import PerformanceComp from './Performance/PerformanceComp'
import NotificationList from './NotificationList/NotificationList'
import OrderList from './OrderList/OrderList'
import styles from './DashBoard.module.css'
const DashBoard = () => {
  // const [dashBoardArr, setDashBoardArr] = useState({})
  // useEffect(() => {
  //   setDashBoardArr(
  //     JSON.parse(localStorage.getItem('ProductList')).dasbhoardPage
  //   )
  //   // console.log(dashBoardArr)
  // }, [])
  // const dashBoardArr = async () => {
  //   let dashboardArr = await JSON.parse(localStorage.getItem('ProductList'))
  //     .dasbhoardPage
  //   return dashboardArr
  // }
  let dashBoardArr = JSON.parse(
    localStorage.getItem('ProductList')
  ).dasbhoardPage
  console.log(dashBoardArr)
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
      tooltip: {
        enabled: false,
      },
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
    interaction: {
      mode: 'nearest',
      intersect: false,
      axis: 'x',
    },
    scales: {
      y: {
        min: 10,
        max: 90,
        ticks: {
          stepSize: 10,
          color: '#ffff', // not 'fontColor:' anymore
          // fontSize: 18,
          font: {
            size: 12, // 'size' now within object 'font {}'
          },
        },
        // grid: {
        //   display: false,
        // },
      },
      x: {
        ticks: {
          stepSize: 10,
          color: '#ffff', // not 'fontColor:' anymore
          // fontSize: 18,
          font: {
            size: 12, // 'size' now within object 'font {}'
          },
        },
      },
      //   x: {
      //     grid: {
      //       display: false,
      //     },
      //   },
      //   yAxes: [{ gridLines: { display: false } }],
    },
    stroke: {
      curve: 'smooth',
    },
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
    <div className={styles.DashBoardContainer}>
      <p>
        Welcome back, <b>Admin</b>
      </p>
      <div className={styles.ChartContainer}>
        <LatestHits latestHits={dashBoardArr['latestHits']} options={options} />
        <PerformanceComp
          performance={dashBoardArr['performance']}
          options={options}
        />
        <StorageInformation
          storage={dashBoardArr['storage']}
          options={options}
        />
        <NotificationList
          notifications={dashBoardArr['notifications']}
          options={options}
        />
      </div>
      <OrderList orders={dashBoardArr['orders']} options={options} />
    </div>
  )
}

export default DashBoard
