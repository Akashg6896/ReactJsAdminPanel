import React, { useState } from 'react'
import styles from './Accounts.module.css'
const AccountAvatar = () => {
  const [file, setFile] = useState('')
  const [ImgUrl, setImgUrl] = useState('')
  const uploadImgAvatar = (e) => {
    setFile(e.target.files[0])
    setImgUrl(URL.createObjectURL(e.target.files[0]))
  }
  return (
    <div className={styles.AccountsAvatar}>
      <h3 className={styles.Title}>Change Avatar</h3>
      <div className={styles.AvatarImgContainer}>
        {ImgUrl && <img src={ImgUrl} alt={ImgUrl} />}
      </div>
      <input
        style={{ display: 'none' }}
        accept='img/*'
        id='file'
        type='file'
        name={file}
        onChange={uploadImgAvatar}
        // onClick={uploadImgAvatar}
      />
      <button
        id={styles.uploadImgBtn}
        onClick={(e) => {
          setFile('')
          setImgUrl('')
          return document.getElementById('file').click()
        }}
      >
        Upload New Photo
      </button>
    </div>
  )
}

export default AccountAvatar
