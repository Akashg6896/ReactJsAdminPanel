import React from 'react'
import styles from './OrderList.module.css'
import Order from './Order'
const OrderList = ({ orders }) => {
  console.log(orders)
  return (
    <div className={styles.OrderListContainer}>
      <p className={styles.Title}>Order List</p>
      {/* {notifications.map((notification) => (
          <Notification notification={notification} />
        ))} */}
      <table className={styles.table}>
        <tr>
          <th className={styles.header}>ORDER NO.</th>
          <th className={styles.header}>STATUS</th>
          <th className={styles.header}>OPERATORS</th>
          <th className={styles.header}>LOCATION</th>
          <th className={styles.header}>DISTANCE</th>
          <th className={styles.header}>START DATE</th>
          <th className={styles.header}>EST DELIVERY DUE</th>
        </tr>
        {orders.map((order) => (
          <Order order={order} key={order.orderNo} />
        ))}
        {/* <Order /> */}
      </table>
    </div>
  )
}

export default OrderList
