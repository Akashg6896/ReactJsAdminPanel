import React, { useState } from 'react'
import styles from './Accounts.module.css'
import AccountAvatar from './AccountAvatar'
import AccountSettings from './AccountSettings'
const AccountDetails = ({ Account, updateAccount, setUpdateAccount }) => {
  console.log(Account)
  const [ImgUrl, SetImgUrl] = useState('')
  const ProfileToBeUpdated = (
    accountName,
    accountEmail,
    password,
    ReenterPassword,
    phone
  ) => {
    // setUpdateAccount({
    //   ...updateAccount,
    //   accountName: accountName,
    //   accountEmail: accountEmail,
    //   password: password,
    //   ReenterPassword: ReenterPassword,
    //   phone: phone,
    // })
    console.log('ProfileToBeUpdated')
    const productList = JSON.parse(localStorage.getItem('ProductList'))
    console.log(accountName, accountEmail, password, ReenterPassword, phone)
    // setUpdateAccount((prevUpdateAccount) => ({
    //   ...prevUpdateAccount,
    //   accountName: accountName,
    //   accountEmail: accountEmail,
    //   password: password,
    //   ReenterPassword: ReenterPassword,
    //   phone: phone,
    //   avatarURL: prevUpdateAccount.avatarURL,
    // }))
    console.log(ImgUrl)
    for (let key of Object.keys(productList.accountsPage)) {
      // console.log(updateAccount.account)
      console.log(productList.accountsPage)
      if (key === updateAccount.account) {
        // productList.productsPage.products.splice(index, 1)
        console.log(updateAccount)
        productList.accountsPage[key] = {
          email: accountEmail,
          name: accountName,
          password: password,
          phone: phone,
          profilePic: ImgUrl,
        }
      }
    }
    // console.log(productList.accountsPage)
    // Accounts = productList.accountsPage
    localStorage.setItem('ProductList', JSON.stringify(productList))
    console.log(accountEmail)
  }
  return (
    <div className={styles.AccountDetails}>
      <AccountAvatar
        Name={Account.name}
        AvatarUrl={Account.profilePic}
        ImgUrlToBeUpdated={SetImgUrl}
        updateAccount={updateAccount}
        setUpdateAccount={setUpdateAccount}
      />
      <AccountSettings
        Account={Account}
        updateAccount={updateAccount}
        ProfileToBeUpdated={ProfileToBeUpdated}
      />
    </div>
  )
}

export default AccountDetails
