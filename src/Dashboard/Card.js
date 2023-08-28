import React from 'react'
import "./Card.css"


const Card = (props) => {
    let details = {food: `${props.food}`, name: `${props.value.title}`, key: `${props.value.key}`}
    const FoodCard = () => {
        props.Clicked(details)
    }

    const AddCart =()=>{
        props.Cart(details)
    }
  return (
    <div className='card' onClick={FoodCard} style={props.clss}>
        <img src={props.food} alt="food5" className='food'/>
        <div className='txt'>
            <h2 className='name'>{props.value.title}</h2>
            <div className='fdesc'>{props.value.shortdesc}</div>
        </div>
        <div className='dets'>
            <h1 className='fprice'>N {props.value.price}.00</h1>
            <span className='cart' onClick={AddCart}>Add to cart</span>
        </div>
    </div>
  )
}

export default Card