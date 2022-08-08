import './App.css'
import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router'
import ProductsNavBar from './components/ProductsNavBar'
import Login from './components/Login'
import Footer from './components/Footer/Footer'
import DashBoard from './components/DashBoard/DashBoard'
import Accounts from './components/Accounts/Accounts'
import Products from './components/Products/Products'
import axios from 'axios'
import AddProduct from './components/Products/AddProducts/AddProduct'
function App() {
  // const isLoggedIn = JSON.parse(localStorage.getItem('LoggedIn'))
  // let isLoggedIn = false
  let [isLoggedIn, setLoggedIn] = useState(false)
  const userHandler = (userLogged) => {
    setLoggedIn(userLogged)
  }
  console.log(isLoggedIn)
  useEffect(() => {
    let LoggedIn = JSON.parse(localStorage.getItem('LoggedIn'))
    // setLoggedIn(LoggedIn === null || LoggedIn === false ? false : true)
    // console.log(LoggedIn)
    // if (LoggedIn && localStorage.getItem('ProductList') === null) {
    //   axios
    //     .get('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json')
    //     .then((res) => res.data)
    //     .then((res) => localStorage.setItem('ProductList', JSON.stringify(res)))
    // }
    console.log(LoggedIn)
    // console.log(isLoggedIn)
    console.log(isLoggedIn)
    console.log(localStorage.getItem('ProductList'))
    if (isLoggedIn && localStorage.getItem('ProductList') === null) {
      axios
        .get('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json')
        .then((res) => res.data)
        .then((res) => localStorage.setItem('ProductList', JSON.stringify(res)))
      // }
    }
  }, [isLoggedIn])
  return (
    <div className='App'>
      <ProductsNavBar userHandler={userHandler} />
      <Routes>
        <Route
          path='/'
          element={
            !isLoggedIn ? <Login userHandler={userHandler} /> : <DashBoard />
          }
        />
        <Route
          path='*'
          element={
            !isLoggedIn ? <Login userHandler={userHandler} /> : <DashBoard />
          }
        />
        <Route
          path='ReactJsAdminPanel'
          element={
            !isLoggedIn ? <Login userHandler={userHandler} /> : <DashBoard />
          }
        />
        <Route path='login' element={<Login userHandler={userHandler} />} />
        <Route
          path='dashboard'
          element={
            !isLoggedIn ? <Login userHandler={userHandler} /> : <DashBoard />
          }
        />
        <Route
          path='products'
          element={
            !isLoggedIn ? <Login userHandler={userHandler} /> : <Products />
          }
        />
        <Route
          path='AddProduct'
          element={
            !isLoggedIn ? <Login userHandler={userHandler} /> : <AddProduct />
          }
        />
        {/* </Route> */}
        <Route
          path='accounts'
          element={
            !isLoggedIn ? <Login userHandler={userHandler} /> : <Accounts />
          }
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
