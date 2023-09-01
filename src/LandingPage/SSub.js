import React from 'react'
import "./SSub.css"

const SSub = (props) => {
  return (
    <div className='ssub'>
      <picture className="secs">
        <source srcSet={props.image} type="image/webp"/>
        <img src={props.image}  alt='secs'/>
      </picture>
      <h3>{props.hd}</h3>
      <div>Stir fry Pasta yada yada yada beacause of Season</div>
    </div>
  )
}

export default SSub