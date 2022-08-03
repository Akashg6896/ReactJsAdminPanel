import React, { useState } from 'react'
import ProductsCategories from './ProductCategories/ProductsCategories'
import ProductsList from './ProductList/ProductsList'
import styles from './Products.module.css'
// import { Outlet } from 'react-router-dom'
const Products = () => {
  // let [value, setValue] = useState('flex')
  return (
    <>
      {/* <Outlet /> */}
      <div className={styles.ProductsContainer}>
        <ProductsList
          class={styles.ProductsListContainer}
          // setValue={setValue}
        />
        <ProductsCategories class={styles.ProductsCategoriesContainer} />
      </div>
    </>
  )
}

export default Products
