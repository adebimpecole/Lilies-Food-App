import React, {useState} from 'react'
import dets from "./details.json"
import food0 from "../images/fd0.png"
import food1 from "../images/fd1.png"
import food2 from "../images/fd2.png"
import food3 from "../images/fd3.png"
import food4 from "../images/fd4.png"
import food5 from "../images/fd5.png"

const FoodCardDets = (props) => {
    const [setCount, getCount] = useState(0)
    
    const pictures = [food0, food1, food2, food3, food4, food5]

    const Increase = () =>{
        if(setCount===5){
            getCount(5)
        }
        else{
            getCount(setCount+1)
        }
    }

    const Decrease = () =>{
        if(setCount===0){
            getCount(0)
        }
        else{
            getCount(setCount-1)
        }
    }

    const AddCart = () => {
        const sndtoCart = {imgno: `${props.obj.key}`, cnm: `${dets[props.obj.key].title}`, cqty: `${setCount}`, cprce: `${dets[props.obj.key].price}`}
        props.Carry(sndtoCart)
        getCount(0)
        props.Close("close")
    }
  return (
    <>
        <picture className="cpic">
            <source srcSet={pictures[props.obj.key]} type="image/webp"/>
            <img src={pictures[props.obj.key]} alt="ltlpic" />
        </picture>
        <div className='fcname'>
            {dets[props.obj.key].title}
        </div>
        <div className='desc'>
            {dets[props.obj.key].desc}
        </div>
        <div className='odets'>
            <span className='price'>NGN {dets[props.obj.key].price}.00</span>
            <span className='time'>{dets[props.obj.key].time} Mins</span>
            <span className='qnty'>{dets[props.obj.key].quantity} Pcs Avail</span>
        </div>
        <div className='btm_fdr'>
            <div className='count'>
            <button className='decrease' onClick={Decrease}>-</button>
            <span className='counter'>{setCount}</span>
            <button className='increase' onClick={Increase}>+</button>
            </div>
            <button className='gotocart' onClick={AddCart}>Add to cart</button>
        </div>
    </>
  )
}

export default FoodCardDets