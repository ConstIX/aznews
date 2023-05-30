import React from 'react'
import { Link } from 'react-router-dom'

type TrendingTopProps = { image_url: string, title: string }

const TrendingTop: React.FC<TrendingTopProps> = ({ image_url, title }) => {
   return (
      <div className="trending-top mb-30">
         <div className="trend-top-img">
            <img src={image_url} alt="" />
            <div className="trend-top-cap">
               <h2><Link to="/details">{title}</Link></h2>
            </div>
         </div>
      </div>
   )
}

export default TrendingTop