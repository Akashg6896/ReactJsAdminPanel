import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './../App.css'
const ProductsNavBar = ({ userHandler }) => {
  // const [LoggedInUser, setLoggedInUser] = useState({})
  // setLoggedInUser(JSON.parse(localStorage.getItem('LoggedIn')).user)
  // setLoggedInUser(JSON.parse(localStorage.getItem('LoggedIn')))
  const LoggedInUser = JSON.parse(localStorage.getItem('LoggedIn'))
  const navigate = useNavigate()
  // console.log(LoggedInUser)
  useEffect(() => {
    // const LoggedInUser = JSON.parse(localStorage.getItem('LoggedIn'))
    userHandler(LoggedInUser ? true : false)
    // props.userHandler(LoggedInUser === null ? false : true)
  })
  const logoutHandler = () => {
    localStorage.removeItem('LoggedIn')
    localStorage.removeItem('ProductList')
    // localStorage.clear()
    userHandler(false)
    navigate('/login')
    // setLoggedInUser('')
  }
  let active = {}
  const navActiveLink = ({ isActive }) => {
    // active = isActive ? 'active' : 'sideBar'
    active = {
      backgroundColor: isActive ? '#f4a622' : '#567086',
      color: isActive ? '#ffff' : '#ffff',
    }
  }
  const handleDisplay = () => {
    navigate('/products')
  }
  return (
    <nav className='navBar'>
      <span id='title'>product admin</span>
      <div className={`sideBar`} style={active}>
        <NavLink to='dashboard' style={navActiveLink}>
          <i class='fas fa-tachometer-alt'></i>
          Dashboard
        </NavLink>
        <NavLink to='products' style={navActiveLink} onClick={handleDisplay}>
          <i class='fas fa-shopping-cart'></i>
          Products
        </NavLink>
        <NavLink to='accounts' style={navActiveLink}>
          <i class='far fa-user'></i>
          Accounts
        </NavLink>
        {LoggedInUser && (
          <button type='submit' onClick={logoutHandler} id='logoutBtn'>
            Admin, <b>logout</b>
          </button>
        )}
      </div>
    </nav>
  )
}

export default ProductsNavBar
