import React from 'react'
import styles from './NotificationList.module.css'
const Notification = ({ notification }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img
          src={notification.pic}
          alt={notification.message}
          className={styles.roundedCircle}
        />
      </div>
      <div className={styles.descContainer}>
        <p className={styles.desc}>{notification.message}</p>
        <span>{notification.time} ago</span>
      </div>
    </div>
  )
}

export default Notification
