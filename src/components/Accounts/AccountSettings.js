import React from 'react'
import styles from './Accounts.module.css'
const AccountSettings = () => {
  return (
    <div className={styles.AccountSettings}>
      <h3 className={styles.Title}>Account Settings</h3>
      <div className={styles.AccountsForm}>
        <div className={styles.AccountsField}>
          <label for='accountName'>Account Name</label>
          <input id='accountName' type='text'></input>
        </div>
        <div className={styles.AccountsField}>
          <label for='accountEmail'>Account Email</label>
          <input id='accountEmail' type='email'></input>
        </div>
        <div className={styles.AccountsField}>
          <label for='Password'>Password</label>
          <input id='Password' type='password'></input>
        </div>
        <div className={styles.AccountsField}>
          <label for='reenterPassword'>Re-enter Password</label>
          <input id='reenterPassword' type='password'></input>
        </div>
        <div className={styles.AccountsField}>
          <label for='Phone'>Phone</label>
          <input id='Phone' type='text'></input>
        </div>
        <div>
          <button
            type='submit'
            id='updateProfile'
            className={styles.updateProfileBtn}
          >
            Update Your Profile
          </button>
        </div>
      </div>
      <button id='deleteAccount' className={styles.DeleteAccountBtn}>
        Delete Your Account
      </button>
    </div>
  )
}

export default AccountSettings
