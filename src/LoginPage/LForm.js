import React from 'react'
import "./LForm.css"
import { Link } from "react-router-dom";


const LForm = () => {
  return (
    <div className='lform'>
      <div className='slform'>
        <h2 className='ch'>Welcome Back!</h2>
        <form className='oform'>
            <input type="email" placeholder='Your Email Address' className='logged'/>
            <input type="password" placeholder="Your Password" className='logged'/>
            <Link to='/dashb' className='lg'><span className='dasb'> LOGIN </span></Link> 
            <div className='link'>
              <Link to='/signup' className='signu a'> Create an account</Link>
              <a href='#' className='a'>Forgot Password</a>
            </div>
        </form>
      </div>
    </div>
  )
}

export default LForm