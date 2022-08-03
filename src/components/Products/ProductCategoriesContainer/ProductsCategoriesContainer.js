import React from 'react'
import styles from './../ProductsListContainer/ProductsListContainer.module.css'
import style from './../Product/Product.module.css'
import ProductCategory from '../ProductCategory/ProductCategory'
// import productStyle from './ProductCategoriesContainer.module.css'
const ProductsCategoriesContainer = ({ categories, deleteCategory }) => {
  //   const ProductList = localStorage.getItem('ProductList').products
  const deleteProduct = (e) => {
    deleteCategory(e.target.closest('tr').children[0].innerText)
  }
  return (
    <div className={styles.productCategoriesContainer}>
      <table className={styles.productCategoriesTable}>
        {/* <tr className={style.product}>
          <td>Product Category 1 </td>
          <td> */}
        {/* <a href='#' className='tm-product-delete-link' alt='Delete'> */}
        {/* <button className={style.deleteProduct} onClick={deleteProduct}>
              <i class='far fa-trash-alt tm-product-delete-icon'></i>
            </button> */}
        {/* </a> */}
        {/* </td>
        </tr> */}
        {categories.map((category) => (
          <ProductCategory
            style={style}
            category={category}
            deleteProduct={deleteProduct}
          />
        ))}
      </table>
    </div>
  )
}

export default ProductsCategoriesContainer
