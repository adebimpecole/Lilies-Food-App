import React, { useState } from 'react'
import Sidenav from './Sidenav'
import Body from './Body'
import "./Dashboard.css"
import FoodCard from './FoodCard'
import CartCard from './CartCard'
import CheckoutCard from './CheckoutCard'
import OrderCard from './OrderCard'

const Dashboard = () => {
    const [setDisplay, getDisplay] = useState({display: "none"})
    const [setDisplayCart, getDisplayCart] = useState({display: "none"})
    const [setDet, getDet] = useState({key: "0"})
    const [cartDets, setcartDets] = useState([])
    const [setDisplayCheck, getDisplayCheck] = useState({display: "none"})
    const [setDisplayOrder, getDisplayOrder] = useState({display: "none"})
    const [setNav, getNav] = useState("")


    // displays the food card
    const ShowFood= (data) => {
      getDisplay({...setDisplay, display: "flex"})
      getDet({...setDet, key: `${data.key}`})
    }

    // closes the overlay tabs
    const Close = (data) => {
      if (Object.values(setDisplay).includes("flex")) { 
        getDisplay({...setDisplay, display: "none"})
      }
      else if(Object.values(setDisplayCart).includes("flex")){
        getDisplayCart({...setDisplayCart, display: "none"})
      }
      else if(Object.values(setDisplayCheck).includes("flex")){
        getDisplayCheck({...setDisplayCheck, display: "none"})
      }
      else if(Object.values(setDisplayOrder).includes("flex")){
        getDisplayOrder({...setDisplayOrder, display: "none"})
      }
    }
    
    // displays the overlay cart tab
    const ShowCart = (data)=> {
      getDisplayCart({...setDisplayCart, display: "flex"})
    }

    // displays the overlay order tab
    const ShowOrder = (data)=> {
      getDisplayOrder({...setDisplayOrder, display: "flex"})
    }

    // collects data when the checkout button is clicked
    const FromCart = (data) => {
      setcartDets(data)
    }

    // 
    const CheckOpn = (data) => {
      getDisplayCheck({...setDisplayCheck, display: "flex"})
      getDisplayCart({...setDisplayCart, display: "none"})
    }

    const Navigate = (data) => {
      getNav("home")
      getNav("no")
    }

  return (
    <div className='dashboard'>
        <Sidenav Cart= {ShowCart} Order={ShowOrder} Nav={setNav}/>
        <Body Display={ShowFood}/>
        <FoodCard style={setDisplay} Close={Close} obj={setDet} val="food" Carry={FromCart}/>
        <CartCard css={setDisplayCart} Close={Close} val="cart" dets={cartDets} CheckOpn={CheckOpn} Navi={Navigate}/>
        <CheckoutCard style={setDisplayCheck} val="check" Close={Close}/>
        <OrderCard style={setDisplayOrder} val="order" Close={Close} dets={cartDets} Navi={Navigate}/>
    </div>
  )
}

export default Dashboard