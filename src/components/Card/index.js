import React from 'react'
import "./card.css"

const Card = (props) => {
  return (
    <div className='card'>
        <div className="image">
            <img src={props.img} alt="" />
        </div>
        <div className="card_details">
            <span>{props.subheading}</span>
            <h2>{props.title}</h2>
            <p>{props.uses}</p>
        </div>
    </div>
  )
}

export default Card