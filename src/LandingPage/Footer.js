import React from 'react'
import googleplay from "../images/googleplay.svg"
import applestore from "../images/applestore.svg"
import "./Footer.css"
import youtube from "../images/youtube.svg"
import tweet from "../images/tweet.svg"
import insta from "../images/instagram.svg"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='foot1'>
            <div className='sect'>
                <span className='secthd'>Company</span>
                <div className='sectbdy'>
                    <span>About Us</span>
                    <span>Careers</span>
                    <span>Contact Us</span>
                </div>
            </div>
            <div className='sect'>
                <span className='secthd'>Support</span>
                <div className='sectbdy'>
                    <span>Help Center</span>
                    <span>Safety Center</span>
                </div>
            </div>
            <div className='sect'>
                <span className='secthd'>Legal</span>
                <div className='sectbdy'>
                    <span>Cookies Policy</span>
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                    <span>Dispute Resolution</span>
                </div>
            </div>
            <div className='sect app'>
                <span className='secthd'>Install App</span>
                <div className='sectbdy google'>
                    <span className='play'><img src={googleplay} alt="google play"/></span>
                    <span className='play'><img src={applestore} alt="spple store"/></span>
                </div>
            </div>
        </div>
        <hr></hr>
        <footer className='foot2'>
            <div className='fttxt'>@2021 LILIES, All rights reserved</div>
            <div className='socials'>
                <span className='social'><img src={insta} alt="ig"/></span>
                <span className='social'><img src={tweet} alt="twt"/></span>
                <span className='social'><img src={youtube} alt="yt"/></span>
            </div>
        </footer>
    </div>
  )
}

export default Footer