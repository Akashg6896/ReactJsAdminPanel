import React from 'react'
import styles from './Accounts.module.css'
import AccountAvatar from './AccountAvatar'
import AccountSettings from './AccountSettings'
const AccountDetails = () => {
  return (
    <div className={styles.AccountDetails}>
      <AccountAvatar />
      <AccountSettings />
    </div>
  )
}

export default AccountDetails
