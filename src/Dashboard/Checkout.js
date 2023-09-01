import React from 'react'
import "./Checkout.css"

const Checkout = () => {
  return (
    <div className='chkcrd'>
        <h2 className='crthd'>Checkout</h2>
        <div className='crttbl chkbl'>
            <div className='chkli'>
                <input type="text" placeholder="Card Number" className='crdnum logged'/>
                <input type="text" placeholder="Exp Date" className='expdt logged'/>
                <input type="text" placeholder="CVV/CVV2" className='cvv logged'/>
                <input type="text" placeholder="Card Pin" className='crdpn logged'/>
            </div>
            <button className='chckot'>Make Payment</button>
        </div>
    </div>
  )
}

export default Checkout