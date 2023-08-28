import React, { useContext, useEffect, useState } from 'react'
import "./Sidenav.css"
import logo from "../images/logo.svg"
import { AiFillHome, AiFillCalendar } from "react-icons/ai";
import { IoPersonCircleSharp , IoBookmark} from "react-icons/io5";
import { Link } from "react-router-dom";
import { Context } from '../Utilities/Context';



const Sidenav = (props) => {

  const remove = document.getElementsByClassName("opt");

  const {value, setvalue} = useContext(Context);

  const Active = (event) => {
    // props.Nav(`${event.key}`)
    for(let r=0; r<remove.length; r++){
      if(remove[r].classList.contains("active")){
        remove[r].classList.remove('active');
      }
    }
    event.currentTarget.classList.add('active');
    if(event.currentTarget.classList.contains("ct")){
      props.Cart("cart")
    }
    else if(event.currentTarget.classList.contains("odr")){
      props.Order("order")
    }
    // props.Nav(`${event.key}`)
  };

  // sets the navigation bar on the default option
  useEffect(() => {
    const remo = document.getElementsByClassName("opt");
    for(let r=0; r<remo.length; r++){
      if(remo[r].classList.contains("active")){
        remo[r].classList.remove('active');
      }
      remo[0].classList.add("active")
    }
  }, [props.Nav])
  
  

  return (
    <div className='sidenav'>
             
        <div className='subnav'>
            <div className='brand'>
                <img src={logo} alt='logo' className='go'/>
                <h1 className='brndname'>Lilies</h1>
            </div>
            <div className='nav'>
                <div className='opt active dash' onClick={Active}><AiFillHome/><span className='ntxt'>Dashboard</span></div>
                <div className='opt' onClick={Active} key="prof"><IoPersonCircleSharp/><span className='ntxt'>Your Profile</span></div>
                <Link path="/cart" className='opt opts odr' onClick={Active} key="order"><span className='spc'><AiFillCalendar/><span className='ntxt'>Orders</span></span><span className='rord'>0</span></Link>
                <Link path="/cart" className='opt opts ct' onClick={Active} key="cart"><span className='spc'><IoBookmark/><span className='ntxt'>Your Cart</span></span><span className='ord'>{value}</span></Link>
            </div>
        </div>
    </div>
  )
}

export default Sidenav