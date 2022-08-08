import React, { useEffect, useState } from 'react'
import ListOfAccounts from './ListOfAccounts'
import AccountDetails from './AccountDetails'
import styles from './Accounts.module.css'
const Accounts = () => {
  const [Account, setAccount] = useState({
    account: '',
    avatarURL: '',
    accountName: '',
    accountEmail: '',
    password: '',
    ReenterPassword: '',
    phone: '',
  })
  const [updateAccount, setUpdateAccount] = useState({
    account: '',
    avatarURL: '',
    accountName: '',
    accountEmail: '',
    password: '',
    ReenterPassword: '',
    phone: '',
  })
  // let Account

  let Accounts = async () => {
    let accounts = await JSON.parse(localStorage.getItem('ProductList'))
      .accountsPage
    return accounts
  }
  console.log(`line No:26`)
  console.log(Accounts)
  useEffect(() => {
    // Accounts = JSON.parse(localStorage.getItem('ProductList')).accountsPage
    // const productList = JSON.parse(localStorage.getItem('ProductList'))
    // // const productList = products
    // for (let key of Object.keys(productList.accountsPage)) {
    //   console.log(updateAccount.account)
    //   console.log(productList.accountsPage)
    //   if (key === updateAccount.account) {
    //     // productList.productsPage.products.splice(index, 1)
    //     console.log(updateAccount)
    //     productList.accountsPage[key] = {
    //       email: updateAccount.accountEmail,
    //       name: updateAccount.accountName,
    //       password: updateAccount.password,
    //       phone: updateAccount.phone,
    //       profilePic: updateAccount.avatarURL,
    //     }
    //   }
    // }
    // // console.log(productList.accountsPage)
    // Accounts = productList.accountsPage
    // localStorage.setItem('ProductList', JSON.stringify(productList))
    // console.log(productList.accountsPage)
  }, [])
  console.log(updateAccount)
  // = Accounts['Admin']
  const setAccountName = (AccountName) => {
    setAccount(Accounts[`${AccountName}`])
    console.log(`Account Name Selected`)
  }
  return (
    <div className={styles.accountsContainer}>
      <ListOfAccounts
        AccountNames={Object.keys(Accounts)}
        setAccountName={setAccountName}
        updateAccount={updateAccount}
        setUpdateAccount={setUpdateAccount}
      />
      <AccountDetails
        Account={Account ? Account : {}}
        updateAccount={updateAccount}
        setUpdateAccount={setUpdateAccount}
      />
    </div>
  )
}

export default Accounts
