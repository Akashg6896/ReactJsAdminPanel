import React from 'react'
import styles from './NotificationList.module.css'
import Notification from './Notification'
const NotificationList = ({ notifications }) => {
  // console.log(notifications)
  return (
    <div className={styles.NotificationListContainer}>
      <p className={styles.Title}>Notification List</p>
      <div className={styles.NotificationContainer}>
        {notifications.map((notification) => (
          <Notification notification={notification} />
        ))}
      </div>
    </div>
  )
}

export default NotificationList
