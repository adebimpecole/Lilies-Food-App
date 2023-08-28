import React from 'react'
import Overlay from './Overlay'

const OrderCard = (props) => {
  return (
    <div>
        <Overlay style={props.style} Close={props.Close} val={props.val}  dets={props.dets} Navigate={props.Navigate}/>
    </div>
  )
}

export default OrderCard