import React from 'react'
import SSub from './SSub'
import food2 from '../images/food2.png'
import food3 from '../images/food3.png'
import food4 from '../images/food4.png'
import "./SSection.css"

const SSection = () => {
    const head = ["Stir fry Pasta", "Meat Balls", "Burger Meal"];
  return (
    <div className='ssec'>
        <div className='fsec2'>
            <h1 className='sschd'>Special Meals of the day!</h1>
            <div className='sscdiv'>Check our specials of the day and get discounts on all our meals and swift delivery to what ever location within Illorin</div>
        </div>
        <div className='ssec2'>
            <SSub hd={head[0]} image={food2}/>
            <SSub hd={head[1]} image={food3}/>
            <SSub hd={head[2]} image={food4}/>
        </div>
    </div>
  )
}

export default SSection