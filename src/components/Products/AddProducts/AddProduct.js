import React, { useState } from 'react'
import AddProductImage from './AddProductImage'
import AddProductText from './AddProductText'
// import { Outlet } from 'react-router-dom'
import styles from './AddProducts.module.css'
import { useNavigate } from 'react-router'
const AddProduct = () => {
  // console.log('product Add Component')
  const [productDetails, setProductDetails] = useState(
    {
      productName: '',
      description: '',
      category: '',
      date: '',
      stock: '',
      productImage: '',
    },
    () => console.log(productDetails)
  )
  const navigate = useNavigate()
  // const [isProductNameValid, setProductNameValid] = useState(true)
  // const [isDescriptionValid, setDescriptionValid] = useState(true)
  // const [isCategoryValid, setCategoryValid] = useState(true)
  // const [isDateValid, setDateValid] = useState(true)
  // const [isStockValid, setStockValid] = useState(true)
  // const [isProductImage, setProductImage] = useState(true)
  const [isProductDetailsValid, setProductDetailsValid] = useState({
    isProductNameValid: true,
    isDescriptionValid: true,
    isCategoryValid: true,
    isDateValid: true,
    isStockValid: true,
    isProductImage: true,
  })
  const validateProductDetails = () => {
    // if()
    // console.log(productDetails.date.length)
    // console.log(Number(productDetails.stock))
    // console.log(isProductDetailsValid)
    if (
      productDetails.productName.length === 0 ||
      productDetails.productName === ''
    )
      setProductDetailsValid((PrevProductState) => ({
        ...PrevProductState,
        isProductNameValid: false,
      }))
    else if (
      productDetails.description.length === 0 ||
      productDetails.description === ''
    )
      setProductDetailsValid((PrevProductState) => ({
        ...PrevProductState,
        isDescriptionValid: false,
      }))
    else if (productDetails.category === 'Select Category')
      setProductDetailsValid((PrevProductState) => ({
        ...PrevProductState,
        isCategoryValid: false,
      }))
    else if (productDetails.date === '') {
      console.log(productDetails.date)
      setProductDetailsValid((PrevProductState) => ({
        ...PrevProductState,
        isDateValid: false,
      }))
      alert('Please select valid date')
    } else if (isNaN(productDetails.stock) || productDetails.stock === '') {
      console.log(Number(productDetails.stock))
      setProductDetailsValid((PrevProductState) => ({
        ...PrevProductState,
        isStockValid: false,
      }))
      alert('Please enter the valid Stock in number')
      return true
    } else if (productDetails.productImage === '') {
      setProductDetailsValid((PrevProductState) => ({
        ...PrevProductState,
        isProductImage: false,
      }))
      alert('Please upload the Image in a valid format')
      return true
    } else {
      setProductDetailsValid({
        isProductNameValid: true,
        isDescriptionValid: true,
        isCategoryValid: true,
        isDateValid: true,
        isStockValid: true,
        isProductImage: true,
      })
    }
    console.log(productDetails)
    const getFormattedDate = (date) => {
      const FormattedDate = new Date(date).toLocaleDateString(
        {},
        { timeZone: 'UTC', day: '2-digit', month: 'long', year: 'numeric' }
      )
      const FormattedDateArr = FormattedDate.split(' ')
      console.log(FormattedDate)
      console.log(FormattedDateArr)
      return `${FormattedDateArr[1].slice(0, FormattedDateArr[1].length - 1)} ${
        FormattedDateArr[0]
      } ${FormattedDateArr[2]}`
    }
    // console.log(JSON.parse(localStorage.getItem('ProductList')).productsPage)
    let productList = JSON.parse(localStorage.getItem('ProductList'))
    productList['productsPage']['products'].push({
      category: productDetails.category,
      description: productDetails.description,
      expireDate: getFormattedDate(productDetails.date),
      name: productDetails.productName,
      stock: productDetails.stock,
      unitSold: 1000,
    })
    localStorage.setItem('ProductList', JSON.stringify(productList))
    navigate('/products')
    return true
  }
  return (
    <div className={styles.AddProductContainer}>
      {/* <div className={styles.AddProduct}> */}
      <h3 className={styles.header}>Add Product</h3>
      <div className={styles.AddProductDetails}>
        <AddProductText
          setProductDetails={setProductDetails}
          productDetails={productDetails}
          isProductDetailsValid={isProductDetailsValid}
        />
        <AddProductImage
          setProductDetails={setProductDetails}
          productDetails={productDetails}
          isProductDetailsValid={isProductDetailsValid}
        />
      </div>
      <button id={styles.addProductBtn} onClick={validateProductDetails}>
        Add Product Now
      </button>
      {/* </div> */}
    </div>
    // {/* <Outlet /> */}
    // {/* </> */}
  )
}

export default AddProduct
