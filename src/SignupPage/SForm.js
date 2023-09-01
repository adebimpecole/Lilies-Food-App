import React from 'react'
import "./SForm.css"
import "../LoginPage/LForm.css"
import { Link } from "react-router-dom";


const SForm = () => {
  return (
    <div className='sform'>
      <div className='ssform'>
        <h2 className='sfm'>Welcome to Lilies!</h2>
        <form className='uform'>
            <input type="text" placeholder='Your First Name' className='logged'/>
            <input type="email" placeholder='Your Email Address' className='logged'/>
            <input type="password" placeholder="Your Password" className='logged'/>
            <Link to='/dashb' className='lg'><button className='dasb'> SIGN UP</button></Link>
            <div className='account'>
              Already have an account?   <Link to='/login' className='loginn'> LOGIN</Link>
            </div>
        </form>
      </div>
    </div>
  )
}

export default SForm