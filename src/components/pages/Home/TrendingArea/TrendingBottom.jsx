import React from 'react'
import { Link } from 'react-router-dom'

const TrendingBottom = ({ color, image, title, text }) => {
   return (
      <div className="col-lg-4">
         <div className="single-bottom mb-35">
            <div className="trend-bottom-img mb-30">
               <img src={image} alt="" />
            </div>
            <div className="trend-bottom-cap">
               <span className={color}>{title}</span>
               <h4><Link to="/details">{text}</Link></h4>
            </div>
         </div>
      </div>
   )
}

export default TrendingBottom