import React, { useEffect, useState } from 'react'
import styles from './AddProducts.module.css'
const AddProductImage = ({ productDetails, setProductDetails }) => {
  const [productImageUrl, setProductImageUrl] = useState('')
  //   const [imgUrl, setImgUrl] = useState('')
  const [file, setFile] = useState('')
  const [isImgUploaded, setImgUploaded] = useState(false)
  useEffect(() => {
    setProductDetails({
      ...productDetails,
      productImage: productImageUrl,
    })
  }, [productImageUrl])
  //   let isImgUploaded = false
  const uploadImageFile = (e) => {
    setImgUploaded(false)

    const file = document.getElementById('file').click()
    // await file.click()
    setProductImageUrl('')
    // await file.change((e) => console.log(e.target.files[0]))
    console.log(file)
    // console.log(file)
  }
  const viewProductImage = (e) => {
    setFile(e.target.files[0])

    setProductImageUrl(URL.createObjectURL(e.target.files[0]))
    setImgUploaded(true)
  }
  return (
    <div className={styles.ImgContainer}>
      <div className={styles.ImgPreview}>
        {/* <i
          className={`fas fa-cloud-upload-alt ${styles.uploadIcon}`}
          // onClick="document.getElementById('fileInput').click();"
        ></i> */}
        {isImgUploaded ? (
          <img
            src={productImageUrl}
            alt={productImageUrl}
            className={styles.Img}
          />
        ) : (
          <i
            className={`fas fa-cloud-upload-alt ${styles.uploadIcon}`}
            // onClick="document.getElementById('fileInput').click();"
          ></i>
        )}
      </div>
      <div>
        <input
          type='file'
          style={{ display: 'none' }}
          accept='img/*'
          id='file'
          name={file}
          onChange={viewProductImage}
        ></input>
        <button id={styles.uploadBtn} onClick={uploadImageFile}>
          Upload Product Image
        </button>
      </div>
    </div>
  )
}

export default AddProductImage
