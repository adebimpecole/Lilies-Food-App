import React from 'react'
import "./TForm.css"

const TForm = () => {
  return (
    <div className='tform'>
        <div className='formtxt'>
            <h2>Get notified when we update!</h2>
            <div>Get notified when we add new items to our special menus, update our price list to have promos!</div>
        </div>
        <div className='form'>
            <input type="email" placeholder="greyphillips@gmail.com"/>
            <button className='notify'>Get notified</button>
        </div>
    </div>
  )
}

export default TForm