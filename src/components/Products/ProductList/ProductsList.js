import React, { useEffect, useState, createContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import ProductsListContainer from '../ProductsListContainer/ProductsListContainer'
import styles from './ProductsList.module.css'
export const ProductsContext = createContext()
const ProductsList = (props) => {
  const navigate = useNavigate()
  let [products, setProducts] = useState([])
  // let value = 'flex'
  // let [value, setValue] = useState('flex')
  // let isdeleteProducts = false
  const [isDeleteProducts, setDeleteProducts] = useState(false)
  const deleteSelectedProduct = (e) => {
    // removeProduct(products[0])
    // console.log(productList)
    for (let product of productList) removeProduct(product)
    setDeleteProducts(!isDeleteProducts)
    console.log(isDeleteProducts)
  }
  let productList = []
  useEffect(() => {
    const Products = JSON.parse(localStorage.getItem('ProductList'))
      .productsPage.products
    setProducts(Products)
    console.log('useEffect')
  }, [isDeleteProducts])
  const AddProductNavigator = () => {
    navigate('/AddProduct')
    // props.setValue('none')
  }

  let setProductList = (products) => {
    productList = products
  }

  const removeProduct = (productName) => {
    const productList = JSON.parse(localStorage.getItem('ProductList'))
    // const productList = products
    for (
      let index = 0;
      index < productList.productsPage.products.length;
      index++
    ) {
      if (productList.productsPage.products[index].name === productName) {
        productList.productsPage.products.splice(index, 1)
      }
    }
    localStorage.setItem('ProductList', JSON.stringify(productList))
  }
  return (
    <>
      <div className={props.class}>
        {/* ProductsList */}
        <ProductsContext.Provider value={removeProduct}>
          <ProductsListContainer
            products={products}
            removeProduct={removeProduct}
            setProductList={setProductList}
          />
          <button id={styles.productBtn} onClick={AddProductNavigator}>
            Add New Product
          </button>
          <button id={styles.productBtn} onClick={deleteSelectedProduct}>
            Delete selected products
          </button>
        </ProductsContext.Provider>
        <Outlet />
      </div>
    </>
  )
}

export default ProductsList
