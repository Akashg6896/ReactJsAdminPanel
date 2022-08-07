import React, { useState, useEffect } from 'react'
import styles from './Accounts.module.css'
const AccountAvatar = ({
  Name,
  AvatarUrl,
  ImgUrlToBeUpdated,
  updateAccount,
  setUpdateAccount,
}) => {
  console.log(AvatarUrl)
  const [file, setFile] = useState('')
  const [ImgUrl, setImgUrl] = useState('')
  // console.log(ImgUrl)
  const uploadImgAvatar = (e) => {
    setFile(e.target.files[0])
    setImgUrl(URL.createObjectURL(e.target.files[0]))
    ImgUrlToBeUpdated(URL.createObjectURL(e.target.files[0]))
    e.target.value = ''
  }
  useEffect(() => {
    setImgUrl(AvatarUrl)
    ImgUrlToBeUpdated(AvatarUrl)
  }, [AvatarUrl, ImgUrlToBeUpdated])
  useEffect(() => {
    setUpdateAccount({
      ...updateAccount,
      avatarURL: ImgUrl,
    })
    // ImgUrlToBeUpdated(ImgUrl)
  }, [ImgUrl, file, AvatarUrl])
  const deleteImg = (e) => {
    document.querySelector('img').src = ''
  }
  return (
    <div className={styles.AccountsAvatar}>
      <h3 className={styles.Title}>Change Avatar</h3>
      <div className={styles.AvatarImgContainer}>
        {ImgUrl && <img src={ImgUrl} alt={Name} />}
        <button className={styles.deleteImg} onClick={deleteImg}>
          <i class='far fa-trash-alt tm-product-delete-icon'></i>
        </button>
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
