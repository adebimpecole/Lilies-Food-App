import React from 'react'
import FoodCardDets from './FoodCardDets'
import "./Overlay.css"
import Cart from './Cart'
import Checkout from './Checkout'
import Order from './Order'

const Overlay = (props) => {
    const Putoff = () => {
        props.Close("close")
        props.Navi("home")
    }
    switch(props.val){
        case "food":
            return (
                <div className='fldiv' style={props.style}>
                    <div className='off' onClick={Putoff}>
                    </div>
                    <div className='flcrd'>
                        <FoodCardDets obj={props.obj} Carry={props.Carry} Close={props.Close}/>
                    </div>
                </div>
            )
        case "cart":
            return (
                <div className='fldiv' style={props.style}>
                    <div className='ctoff' onClick={Putoff}>
                    </div>
                    <div className='ctcrd'>
                        <Cart dets={props.dets} CheckOpn={props.CheckOpn} Number={props.Number}/>
                    </div>
                </div>
            )
        case "check":
            return (
                <div className='fldiv' style={props.style}>
                    <div className='off' onClick={Putoff}>
                    </div>
                    <div className='flcrd'>
                        <Checkout dets={props.dets}/>
                    </div>
                </div>
            )
        case "order":
            return (
                <div className='fldiv' style={props.style}>
                    <div className='ctoff' onClick={Putoff}>
                    </div>
                    <div className='ctcrd'>
                        <Order dets={props.dets}/>
                    </div>
                </div>
            )
        default:
    }
}

export default Overlay