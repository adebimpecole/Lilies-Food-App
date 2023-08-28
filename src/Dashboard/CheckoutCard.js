import React from 'react'
import Overlay from './Overlay'

const CheckoutCard = (props) => {
  return (
    <div>
        <Overlay style={props.style} Close={props.Close} val={props.val} />
    </div>
  )
}

export default CheckoutCard