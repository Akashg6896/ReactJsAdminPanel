import React from 'react'
import styles from './ProductsListContainer.module.css'
import Product from '../Product/Product'
const ProductsListContainer = ({ products, setProductList }) => {
  let productList = []
  const addSelectedProduct = (productName) => {
    productList.push(productName)
    setProductList(productList)
  }
  const removeSelectedProduct = (productName) => {
    setProductList(productList.filter((product) => product !== productName))
  }

  return (
    <>
      <div className={styles.productContainer}>
        <table>
          <tr className={styles.header}>
            <td></td>
            <td>Product Name</td>
            <td>UNIT SOLD</td>
            <td>IN STOCK</td>
            <td>EXPIRE DATE</td>
            <td></td>
          </tr>
          {products.map((product) => (
            <Product
              product={product}
              addSelectedProduct={addSelectedProduct}
              removeSelectedProduct={removeSelectedProduct}
              key={product.name}
            />
          ))}
        </table>
      </div>
    </>
  )
}

export default ProductsListContainer
