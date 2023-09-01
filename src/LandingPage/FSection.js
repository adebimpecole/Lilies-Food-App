import googleplay from "../images/googleplay.svg"
import applestore from "../images/applestore.svg"
import food1 from "../images/food1.svg"
import "./FSection.css"

const FSection = () => {
  
  return (
    <div className='fsection'>
        <div className='lftsec'>
            <h1 className='fschd'>Order <span>food</span> anytime, anywhere.</h1>
            <div className='lfttxt'>Browse from list of specials to place your order and have food delivered to you in no time. Affordable, tasty and fast!</div>
            <div className='image'>
              <picture className="store" >
                <source srcSet={googleplay} type="image/webp"/>
                <img src={googleplay} alt='play'/>
              </picture>
              <picture className="store">
                <source srcSet={applestore} type="image/webp"/>
                <img src={applestore}  alt='apple'/>
              </picture>
            </div>
        </div>
        <div className='rgtsec'>
          <picture className="food1">
            <source srcSet={food1} type="image/webp"/>
            <img src={food1} alt='foodpic'/>
          </picture>
        </div>
    </div>
  )
}

export default FSection