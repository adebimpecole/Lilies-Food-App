import React from 'react'
import "./FoodCard.css"
import Overlay from './Overlay'

const FoodCard = (props) => {

  return (
    <Overlay style={props.style} Close={props.Close} obj={props.obj} val={props.val} Carry={props.Carry} />
  )
}

export default FoodCard