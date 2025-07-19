import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import SignUp from './SignUp';

const Login = ({data, setIsLoggedIn, setData}) => {
  const [login, setLogin] = useState(true);
  const navigate = useNavigate();
  // function to set user logging in or logging out
  function notLoggingin(){
    setLogin(
      prev =>{
      return !prev;
    })
  }

  const [loginEntry, setLoginEntry]= useState({
      userName:"",
      password: ""
  })

  function handleChange(e){
      setLoginEntry(
          prev=>{
              return{
                  ...prev,
                  [e.target.name]: e.target.value
              }
          }
      )
  }
// handle submit function that checks if logged in details matches with any stored details in the setData array
  function handleSubmit(e) {
    e.preventDefault();
    const matchedUser = data.find(
      user =>
        user.userName === loginEntry.userName &&
        user.password === loginEntry.password
    );
    if (matchedUser) {
      setIsLoggedIn(true)
      navigate('/home')
    } else {
      alert('Invalid username or password');
      return
    }
  }

  return (
    <>
      {login?
      <div className='text-center'>
        <h1 className="capitalize text-2xl mb-3 text-white">log in</h1>

        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='user name'
            id='userName'
            name='userName'
            onChange={handleChange}
            required
            className='border border-black mb-2 rounded-md p-1 w-full'
           />
           <br />
           <input
            type='password'
            placeholder='password'
            id='password'
            name='password'
            onChange={handleChange}
            required
            className='border border-black rounded-md mb-2 p-1 w-full'
           />
           <br />
           <input
            type='submit'
            value="log in"
            className='bg-blue-700 p-1 pl-4 pr-4 text-white rounded-md duration-300 hover:bg-blue-500 cursor-pointer mb-4 '
           />
        </form>
        <p className='text-white'>don't have an account? <span onClick={notLoggingin} className='text-blue-500 cursor-pointer duration-300 hover:text-blue-300'>sign up</span></p>
      </div>
      :
      <SignUp notLoggingin={notLoggingin} setData={setData} setLogin={setLogin}/>
      }
    </>
  )
}

export default Login