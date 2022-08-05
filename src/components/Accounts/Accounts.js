import React, { useState } from 'react'
import ListOfAccounts from './ListOfAccounts'
import AccountDetails from './AccountDetails'
import styles from './Accounts.module.css'
const Accounts = () => {
  const [accounts, setAccounts] = useState({
    account: '',
    avatarURL: '',
    accountName: '',
    accountEmail: '',
    password: '',
    ReenterPassword: '',
    phone: '',
  })
  return (
    <div className={styles.accountsContainer}>
      <ListOfAccounts accounts={accounts} setAccounts={setAccounts} />
      <AccountDetails accounts={accounts} setAccounts={setAccounts} />
    </div>
  )
}

export default Accounts
