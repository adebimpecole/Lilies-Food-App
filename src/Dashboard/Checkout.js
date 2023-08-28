import React from 'react'
import "./Checkout.css"

const Checkout = (props) => {
  return (
    <div className='chkcrd'>
        <h2 className='crthd'>Checkout</h2>
        <div className='crttbl'>
            <div className='chkli'>
                <input type="number" placeholder="Card Number" className='crdnum logged'/>
                <input type="number" placeholder="Exp Date" className='expdt logged'/>
                <input type="number" placeholder="CVV/CVV2" className='cvv logged'/>
                <input type="number" placeholder="Card Pin" className='crdpn logged'/>
            </div>
            <button className='chckot'>Make Payment</button>
        </div>
    </div>
  )
}

export default Checkout