import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Login.module.css'
import axios from 'axios'
const Login = (props) => {
  const [user, setUser] = useState({
    userName: '',
    passWord: '',
  })
  const navigate = useNavigate()
  // const location =useLocation()
  const [isUserNameValid, setUserNameValid] = useState(true)
  const [isPasswordValid, setPasswordValid] = useState(true)
  const submitHandler = () => {
    if (user.userName.length === 0) {
      setUserNameValid(false)
      // console.log(!isUserNameValid)
    }
    if (user.passWord.length === 0) {
      setPasswordValid(false)
      // console.log(!isPasswordValid)
    }

    if (user.userName.length > 0 && user.passWord.length > 0) {
      // localStorage.setItem('LoggedIn', JSON.stringify({ user: user.userName }))
      localStorage.setItem('LoggedIn', true)
      // if (LoggedIn && localStorage.getItem('ProductList') === null) {
      axios
        .get('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json')
        .then((res) => res.data)
        .then((res) => localStorage.setItem('ProductList', JSON.stringify(res)))
        // }
        .then(() => {
          while (true) {
            if (localStorage.getItem('ProductList') === null) continue
            else break
          }
          return navigate('/dashboard')
        })
      // <Navigate to='/dashboard' state={{ path: location.pathname }}/>
      // console.log(localStorage)
      props.userHandler(true)
    }
  }
  return (
    <div className={styles.loginContainer}>
      <h3>Welcome to Dashboard, Login</h3>
      <label htmlFor='username'>Username</label>
      <input
        type='text'
        onChange={(e) =>
          setUser({
            ...user,
            userName: e.target.value,
          })
        }
        id='username'
        value={user.userName}
        required
        placeholder={!isUserNameValid ? 'Please enter the valid UserName' : ''}
      ></input>
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        id='password'
        value={user.passWord}
        onChange={(e) =>
          setUser({
            ...user,
            passWord: e.target.value,
          })
        }
        required
        placeholder={!isPasswordValid ? 'Please enter the valid Password' : ''}
      ></input>
      {/* <div>{!isPasswordValid && <p>Please enter the valid Password</p>}</div> */}

      <button type='submit' id={styles.loginBtn} onClick={submitHandler}>
        Login
      </button>
    </div>
  )
}

export default Login
