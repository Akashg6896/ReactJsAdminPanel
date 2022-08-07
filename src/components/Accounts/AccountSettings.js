import React, { useEffect, useState } from 'react'
import styles from './Accounts.module.css'
const AccountSettings = ({ Account, ProfileToBeUpdated, setUpdateAccount }) => {
  console.log(Account)
  const [accountSettings, setAccountSettings] = useState({
    accountName: '',
    accountEmail: '',
    password: '',
    ReenterPassword: '',
    phone: '',
  })
  const [isAccountValid, setAccountValid] = useState({
    isAccountNameValid: true,
    isAccountEmailValid: true,
    isPasswordValid: true,
    isReenterPasswordValid: true,
    isPhoneValid: true,
  })
  useEffect(() => {
    setAccountSettings({
      accountName: Account.name === undefined ? '' : Account.name,
      accountEmail: Account.email === undefined ? '' : Account.email,
      password: Account.password === undefined ? '' : Account.password,
      ReenterPassword: Account.password === undefined ? '' : Account.password,
      phone: Account.phone === undefined ? '' : Account.phone,
    })
    console.log(Account.name)
  }, [Account])
  const UpdateProfile = () => {
    console.log('UpdateProfile')
    if (accountSettings.accountName !== 'Select Account') {
      if (accountSettings.accountName === '') {
        setAccountValid((prevAccountSettings) => ({
          ...prevAccountSettings,
          isAccountNameValid: false,
        }))
        return true
      } else if (
        accountSettings.accountEmail === '' &&
        accountSettings.accountEmail.includes('@') === false
      ) {
        setAccountValid((prevAccountSettings) => ({
          ...prevAccountSettings,
          isAccountEmailValid: false,
        }))
        alert('Invalid AccountEmail')
        return true
      } else if (accountSettings.password === '') {
        setAccountValid((prevAccountSettings) => ({
          ...prevAccountSettings,
          isPasswordValid: false,
        }))

        return true
      } else if (
        accountSettings.ReenterPassword === '' ||
        accountSettings.ReenterPassword !== accountSettings.password
      ) {
        setAccountValid((prevAccountSettings) => ({
          ...prevAccountSettings,
          isReenterPasswordValid: false,
        }))
        console.log(accountSettings.ReenterPassword)
        console.log(accountSettings.password)
        alert('Password do not match')
        return true
      } else if (accountSettings.phone === '' || isNaN(accountSettings.phone)) {
        setAccountValid((prevAccountSettings) => ({
          ...prevAccountSettings,
          isPhoneValid: false,
        }))
        alert('Phone should contain number only')
        return true
      }
      ProfileToBeUpdated(
        accountSettings.accountName,
        accountSettings.accountEmail,
        accountSettings.password,
        accountSettings.ReenterPassword,
        accountSettings.phone

        // () => console.log(accountSettings.accountName)
      )
      alert('Information Updated Successfully!')
    }
    console.log(accountSettings)
  }
  return (
    <div className={styles.AccountSettings}>
      <h3 className={styles.Title}>Account Settings</h3>
      <div className={styles.AccountsForm}>
        <div className={styles.AccountsField}>
          <label for='accountName' className={styles.label}>
            Account Name
          </label>
          <input
            id='accountName'
            type='text'
            value={accountSettings.accountName}
            placeholder={
              !isAccountValid.isAccountNameValid && 'Invalid AccountName'
            }
            onChange={(e) =>
              setAccountSettings((prevAccount) => {
                return {
                  ...prevAccount,
                  accountName: e.target.value,
                }
              })
            }
          ></input>
        </div>
        <div className={styles.AccountsField}>
          <label for='accountEmail' className={styles.label}>
            Account Email
          </label>
          <input
            id='accountEmail'
            type='email'
            value={accountSettings.accountEmail}
            placeholder={
              !isAccountValid.isAccountEmailValid && 'Invalid AccountEmail'
            }
            onChange={(e) =>
              setAccountSettings((prevAccount) => {
                return {
                  ...prevAccount,
                  accountEmail: e.target.value,
                }
              })
            }
          ></input>
        </div>
        <div className={styles.AccountsField}>
          <label for='Password' className={styles.label}>
            Password
          </label>
          <input
            id='Password'
            type='password'
            value={accountSettings.password}
            placeholder={!isAccountValid.isPasswordValid && 'Invalid Password'}
            onChange={(e) =>
              setAccountSettings((prevAccount) => {
                return {
                  ...prevAccount,
                  password: e.target.value,
                }
              })
            }
          ></input>
        </div>
        <div className={styles.AccountsField}>
          <label for='reenterPassword' className={styles.label}>
            Re-enter Password
          </label>
          <input
            id='reenterPassword'
            type='password'
            value={accountSettings.ReenterPassword}
            placeholder={
              !isAccountValid.isReenterPasswordValid && 'Password do not match'
            }
            onChange={(e) =>
              setAccountSettings((prevAccount) => {
                return {
                  ...prevAccount,
                  ReenterPassword: e.target.value,
                }
              })
            }
          ></input>
        </div>
        <div className={styles.AccountsField}>
          <label for='Phone' className={styles.label}>
            Phone
          </label>
          <input
            id='Phone'
            type='text'
            value={accountSettings.phone}
            placeholder={!isAccountValid.isPhoneValid && 'Invalid phone No'}
            onChange={(e) =>
              setAccountSettings((prevAccount) => {
                return {
                  ...prevAccount,
                  phone: e.target.value,
                }
              })
            }
          ></input>
        </div>
        <div>
          <button
            type='submit'
            id='updateProfile'
            className={styles.updateProfileBtn}
            onClick={UpdateProfile}
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
