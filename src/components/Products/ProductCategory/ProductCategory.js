import React from 'react'

const ProductCategory = ({ style, category, deleteProduct }) => {
  return (
    // <>
    <tr className={style.productCategories} key={category}>
      <td>{category}</td>
      <td>
        <button className={style.deleteProduct} onClick={deleteProduct}>
          <i class='far fa-trash-alt tm-product-delete-icon'></i>
        </button>
      </td>
    </tr>
    // </>
  )
}

export default ProductCategory
