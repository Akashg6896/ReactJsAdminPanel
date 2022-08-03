import React, { useEffect, useState } from 'react'
import styles from './AddProducts.module.css'
const AddProductText = ({
  productDetails,
  setProductDetails,
  isProductDetailsValid,
}) => {
  //   const [productName, setProductName] = useState('')
  //   const [description, setDescription] = useState('')
  //   const [category, setCategory] = useState('')
  //   const [date, setDate] = useState('')
  //   const [stock, setStock] = useState('')
  const [productDetail, setProductDetail] = useState({
    productName: '',
    description: '',
    category: '',
    date: '',
    stock: '',
  })
  useEffect(() => {
    setProductDetails({
      ...productDetails,
      productName: productDetail.productName,
      description: productDetail.description,
      category: productDetail.category,
      date: productDetail.date,
      stock: productDetail.stock,
    })
  }, [productDetail])
  //   const printCategory = (e) => {
  //     // console.log(e.options[e.selectedIndex].value)
  //     // console.log(e.target)
  //     console.log(document.getElementById('category').value)
  //   }
  //    isProductNameValid: true,
  //     isDescriptionValid: true,
  //     isCategoryValid: true,
  //     isDateValid: true,
  //     isStockValid: true,
  //     isProductImage: true,
  return (
    <div className={styles.TextContainer}>
      <label for='productName'>Product Name</label>
      <input
        type='text'
        id='productName'
        onChange={(e) =>
          setProductDetail({ ...productDetail, productName: e.target.value })
        }
        placeholder={
          !isProductDetailsValid.isProductNameValid
            ? 'Please enter the valid Product Name'
            : ''
        }
      ></input>
      <label for='description'>Description</label>
      <textarea
        id='description'
        onChange={(e) =>
          setProductDetail({ ...productDetail, description: e.target.value })
        }
        placeholder={
          !isProductDetailsValid.isDescriptionValid
            ? 'Please enter the valid Product Description'
            : ''
        }
      />
      <label for='category'>Category</label>
      <select
        name='category'
        id='category'
        onChange={(e) =>
          setProductDetail({
            ...productDetail,
            category: document.getElementById('category').value,
          })
        }
        placeholder={
          !isProductDetailsValid.isCategoryValid
            ? 'Please select valid Category'
            : ''
        }
      >
        <option value='Select Category'>Select Category</option>
        <option value='New Arrival'>New Arrival</option>
        <option value='Most Popular'>Most Popular</option>
        <option value='Trending'>Trending</option>
      </select>
      <div className={styles.productDetails}>
        <div className={styles.dateContainer}>
          <label for='date'>Expire Date</label>
          <input
            type='date'
            id='date'
            onChange={(e) =>
              setProductDetail({
                ...productDetail,
                date: e.target.value,
              })
            }
            placeholder={
              !isProductDetailsValid.isDateValid
                ? 'Please select the valid Date'
                : ''
            }
          ></input>
        </div>
        <div className={styles.stockContainer}>
          <label for='stock'>Units In Stock</label>
          <input
            type='text'
            id='stock'
            onChange={(e) =>
              setProductDetail({
                ...productDetail,
                stock: e.target.value,
              })
            }
            placeholder={
              !isProductDetailsValid.isStockValid
                ? 'Please enter the valid unit Stocks'
                : ''
            }
          ></input>
        </div>
      </div>
    </div>
  )
}

export default AddProductText
