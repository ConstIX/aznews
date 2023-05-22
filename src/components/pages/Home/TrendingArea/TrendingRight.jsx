import React from 'react'
import { Link } from 'react-router-dom'

const TrendingRight = ({ color, image, title, text }) => {
   return (
      <div className="trand-right-single d-flex">
         <div className="trand-right-img">
            <img src={image} alt="" />
         </div>
         <div className="trand-right-cap">
            <span className={color}>{title}</span>
            <h4><Link to="/details">{text}</Link></h4>
         </div>
      </div>
   )
}

export default TrendingRight