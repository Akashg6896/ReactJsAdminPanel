import React, { useEffect, useState } from 'react'
import styles from './Accounts.module.css'
const ListOfAccounts = ({
  AccountNames,
  setAccountName,
  updateAccount,
  setUpdateAccount,
}) => {
  console.log(`ListOfAccounts`)
  const [accountsValue, setAccountsValue] = useState('')
  useEffect(() => {
    setUpdateAccount({
      ...updateAccount,
      account: accountsValue,
    })
    setAccountName(accountsValue)
  }, [accountsValue])
  return (
    <div className={styles.accountsListContainer}>
      <h3 className={styles.Title}>List of Accounts</h3>
      <div className={styles.ListOfAccounts}>
        <label for='accounts'>Accounts</label>
        <select
          id='accounts'
          value={accountsValue}
          className={styles.accountsSelect}
          onChange={(e) => setAccountsValue(e.target.value)}
          // placeholder={`Select Account`}
        >
          <option value='Select Account'>Select Account</option>
          {/* <option value='Admin'>Admin</option>
          <option value='Editor'>Editor</option>
          <option value='Merchant'>Merchant</option>
          <option value='Customer'>Customer</option> */}
          {AccountNames.map((accountName) => (
            <option value={accountName}>{accountName}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default ListOfAccounts
