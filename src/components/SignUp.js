import React,{useState} from 'react'
import {useNavigate } from 'react-router-dom'

const SignUp = ({setData, notLoggingin}) => {
    const navigate = useNavigate();
const [signupEntry, setSignupEntry] = useState({
    userName: "",
    createPassword: "",
    confirmPassword: ""
})
function handleChange(e){
    setSignupEntry(
        prev=>{
            return{
                ...prev,
                [e.target.name]: e.target.value
            }
        }
    )
}





function handleSubmit(e){
    e.preventDefault();
setData( prev=>{
    return [ ...prev,({userName: signupEntry.userName, password: signupEntry.createPassword}) ]
})
alert(`hello ${signupEntry.userName}, you have sucessfully signed up`)
navigate('/')
}





  return (
    <div className='text-center'>
            <h1 className="capitalize text-2xl mb-3 text-white">sign up</h1>

    <form onSubmit={handleSubmit}>
        <div>
        <input
        type='text'
        placeholder='user name'
        name='userName'
        className='border border-black mb-2 rounded-md p-1 w-full'
        onChange={handleChange}
        value={signupEntry.userName}
        required
        />
        </div>
    
        
        <div>
        <input
        type='password'
        placeholder='create password'
        name='createPassword'
        className='border border-black mb-2 rounded-md p-1 w-full'
        onChange={handleChange}
        value={signupEntry.createPassword}
        required

        />
        </div>

        <div>
        <input 
        type="password" 
        placeholder="confirm password" 
        name='confirmPassword'
        className='border border-black mb-2 rounded-md p-1 w-full'
        onChange={handleChange}
        value={signupEntry.confirmPassword}
        required
        />
        </div>

    
        <input
        type='submit'
        value="Sign Up"
        className='bg-blue-700 p-1 pl-4 pr-4 text-white rounded-md duration-300 disabled:bg-blue-300 hover:bg-blue-500 cursor-pointer mb-4'
        disabled={signupEntry.confirmPassword !== signupEntry.createPassword}
        />

    </form>

<p className='text-white'>Already have an account? <span onClick={notLoggingin} className='text-blue-500 cursor-pointer duration-300 hover:text-blue-300'>Login</span></p>

    </div>
  )
}

export default SignUp