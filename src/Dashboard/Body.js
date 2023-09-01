import React from 'react'
import Card from './Card'
import "./Body.css"
import food0 from "../images/fd0.png"
import food1 from "../images/fd1.png"
import food2 from "../images/fd2.png"
import food3 from "../images/fd3.png"
import food4 from "../images/fd4.png"
import food5 from "../images/fd5.png"
import profilepic from "../images/pp.png"
import data from "./details.json"

const Body = (props) => {
    // const [setDisplay, getDisplay] = useState()
    const Display = (data) => {
        props.Display(data)
    }
    const ToCart = (data)=> {
        props.Cart(data)
    }  
    return (
        <div className='body'>
            <div className='welcome'>
                <div className='wtxt'>
                    <div className='big_text'>Good morning, User</div>
                    <div className='grttxt'>What delicious meal are you craving today?</div>
                </div>
                <picture className="prof">
                  <source srcSet={profilepic} type="image/webp"/>
                  <img alt='profile' src={profilepic} />
                </picture>
            </div>
            <div className='cards'>
                <div className='cardsdiv'>
                    <Card food={food0} Clicked={Display} key={0} value={data[0]} Cart={ToCart}/>
                    <Card food={food1} Clicked={Display} key={1} value={data[1]} Cart={ToCart}/>
                    <Card food={food2} Clicked={Display} key={2} value={data[2]} Cart={ToCart}/>
                    <Card food={food3} Clicked={Display} key={3} value={data[3]} Cart={ToCart}/>
                    <Card food={food4} Clicked={Display} key={4} value={data[4]} Cart={ToCart}/>
                    <Card food={food5} Clicked={Display} key={5} value={data[5]} Cart={ToCart}/>
                </div>
            </div>
        </div>
    )
}

export default Body