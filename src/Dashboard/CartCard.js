import React from 'react'
import Overlay from './Overlay'

const CartCard = (props) => {
  return (
    <Overlay style={props.css} Close={props.Close} val={props.val} dets={props.dets} CheckOpn={props.CheckOpn} Navi={props.Navi} Number={props.Number}/>
  )
}

export default CartCard