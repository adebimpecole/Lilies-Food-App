import React, {useEffect} from 'react'
import googleplay from "../images/googleplay.svg"
import applestore from "../images/applestore.svg"
import food1 from "../images/food1.svg"
import "./FSection.css"
import AOS from "aos";
import "aos/dist/aos.css";

const FSection = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className='fsection'>
        <div className='lftsec'>
            <h1 className='fschd'>Order <span>food</span> anytime, anywhere.</h1>
            <div className='lfttxt'>Browse from list of specials to place your order and have food delivered to you in no time. Affordable, tasty and fast!</div>
            <div className='image'><img src={googleplay} className="store" alt='play'/><img src={applestore} className="store" alt='apple'/></div>
        </div>
        <div className='rgtsec'>
            <img src={food1} className="food1" alt='foodpic' data-aos= "slide-up"/>
        </div>
    </div>
  )
}

export default FSection