import React, { useContext } from 'react'
import styles from './Product.module.css'
import { ProductsContext } from './../ProductList/ProductsList'

const Product = ({ product, addSelectedProduct, removeSelectedProduct }) => {
  const removeProduct = useContext(ProductsContext)
  const deleteProduct = (e) => {
    const productName = e.target.closest('tr').children[1].innerText
    removeProduct(productName)
    e.target.closest('tr').remove()
  }
  const selectedProduct = (e) => {
    // console.log(e.target.checked)
    if (e.target.checked) {
      addSelectedProduct(e.target.closest('tr').children[1].innerText)
    } else {
      removeSelectedProduct(e.target.closest('tr').children[1].innerText)
    }
  }
  return (
    // <div >
    // <table>
    <tr className={styles.product}>
      <td>
        <input type='checkbox' onClick={selectedProduct}></input>
      </td>
      <td>{product.name} </td>
      <td>{product.unitSold}</td>
      <td>{product.stock}</td>
      <td>{product.expireDate}</td>
      <td>
        {/* <a href='#' className='tm-product-delete-link' alt='Delete'> */}
        <button className={styles.deleteProduct} onClick={deleteProduct}>
          <i class='far fa-trash-alt tm-product-delete-icon'></i>
        </button>
        {/* </a> */}
      </td>
    </tr>
    // </table>
  )
}

export default Product
