import React from 'react'
import "./SSub.css"

const SSub = (props) => {
  return (
    <div className='ssub'>
        <img src={props.image} className="secs" alt='secs'/>
        <h3>{props.hd}</h3>
        <div>Stir fry Pasta yada yada yada beacause of Season</div>
    </div>
  )
}

export default SSub