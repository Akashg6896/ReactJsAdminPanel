import React from 'react'
import styles from './OrderList.module.css'
import cx from 'classnames'
const Order = ({ order }) => {
  console.log(order)
  const statusColor = (status) => {
    let statusClass = `styles.${status}`
    // // if(status==='Moving')
    // // return `${statusClass} ${status}`
    // // else if()
    // switch(status)
    // {
    //     case 'Moving':
    //         statusClass+=${status}
    //         break;
    //          case 'Moving':
    //         break;
    //          case 'Moving':
    //         break;
    // }
    return statusClass
  }
  //   let statusClass = classes{
  //     {

  //     }
  //   }
  return (
    <tr className={styles.orderRow}>
      <td className={styles.orderData}>
        <b>#{order.orderNo}</b>
      </td>
      <td className={styles.orderData}>
        <div className={`${styles.statusCircle} ${styles[order.status]}`}></div>
        {order.status}
      </td>
      <td className={styles.orderData}>
        <b>{order.operators}</b>
      </td>
      <td className={styles.orderData}>
        <b>{order.location}</b>
      </td>
      <td className={styles.orderData}>
        <b>{order.distance} km</b>
      </td>
      <td className={styles.orderData}>{order.startDate}</td>
      <td className={styles.orderData}>{order.deliveryDate}</td>
    </tr>
  )
}

export default Order
