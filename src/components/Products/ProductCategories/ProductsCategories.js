import React, { useEffect, useState } from 'react'
import styles from './ProductsCategories.module.css'
import ProductsCategoriesContainer from '../ProductCategoriesContainer/ProductsCategoriesContainer'
const ProductsCategories = (props) => {
  const [categories, setCategories] = useState([])
  const [isCategoryChanged, setCategoryChanged] = useState(false)
  const [displayValue, setDisplayValue] = useState('none')
  const [isCategoryValid, setCategoryValid] = useState(true)
  const [category, setCategory] = useState('')
  useEffect(() => {
    setCategories(
      JSON.parse(localStorage.getItem('ProductList')).productsPage.categories
    )
  }, [isCategoryChanged])
  const setAddCategoryModal = () => {
    setDisplayValue('flex')
    setCategoryChanged(!isCategoryChanged)
    setCategoryValid(true)
    setCategory('')
  }
  const deleteCategory = (category) => {
    // console.log(category)
    const productList = JSON.parse(localStorage.getItem('ProductList'))
    // productList.productsPage.categories.push()
    for (
      let index = 0;
      index < productList.productsPage.categories.length;
      index++
    ) {
      if (productList.productsPage.categories[index] === category) {
        productList.productsPage.categories.splice(index, 1)
      }
    }
    localStorage.setItem('ProductList', JSON.stringify(productList))
    // console.log(isCategoryChanged)
    setCategoryChanged(!isCategoryChanged)
  }
  const AddNewCategory = () => {
    if (category.length === 0) {
      setCategoryValid(false)
      return false
    }
    const productList = JSON.parse(localStorage.getItem('ProductList'))
    productList.productsPage.categories.push(category)
    localStorage.setItem('ProductList', JSON.stringify(productList))
    setCategoryChanged(!isCategoryChanged)
    setDisplayValue('none')
  }
  return (
    <div className={props.class}>
      <h3 className={styles.title}>Products Categories</h3>
      <ProductsCategoriesContainer
        categories={categories}
        deleteCategory={deleteCategory}
      />
      <button id={styles.productBtn} onClick={setAddCategoryModal}>
        Add New Category
      </button>
      <div
        className={styles.categoryModal}
        style={{ display: `${displayValue}` }}
      >
        <div className={styles.modal}>
          <label for='category' id={styles.label}>
            Enter the Category
          </label>
          <input
            type='text'
            id='category'
            className={styles.category}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder={!isCategoryValid ? 'Enter Valid Category' : ''}
          ></input>
          <button type='submit' id={styles.Btn} onClick={AddNewCategory}>
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductsCategories
