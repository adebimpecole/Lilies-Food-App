import React, {useState} from 'react'
import logo from "../images/logo.svg"
import "./NavBar.css"
import { Link } from "react-router-dom";
import Ham from "../images/icon-hamburger.svg"
import Cls from "../images/icon-close.svg"


const NavBar = (props) => {
  const [setStyle, getStyle] = useState({right: "-588px"})
  const btnStyle = {backgroundcolor: "black"}

  const Click = () => {
    getStyle({...setStyle, right : "0"})
  }
  const Close = ()=> {
    getStyle({...setStyle, right: "-588px"})
  }
  return (
    <div className='navbar'>
      <div className='lftside'>
          <img src={logo} className="logo" alt='logo'/>
          <div className='brand'>Lilies</div>
      </div>
      <ul className='rgtside' style={setStyle}>
          <img src={Cls} alt="close" className='close' onClick={Close}/>
          <li><Link to='*' className='home'>Home</Link></li>
          <li><Link to='/login' className='login'> Login</Link></li>
          <li className='signup'><Link to='/signup' className='fsign'> Sign Up</Link></li>
      </ul>
      <img src={Ham} alt="open" className='ham' onClick={Click} style={btnStyle}/>
    </div>
  )
}

export default NavBar