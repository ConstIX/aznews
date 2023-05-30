import React from 'react'
import { Link } from 'react-router-dom'

type TrendingBottomProps = { image_url: string, title: string }

const TrendingBottom: React.FC<TrendingBottomProps> = ({ image_url, title }) => {
   return (
      <div className="col-lg-4">
         <div className="single-bottom mb-35">
            <div className="trend-bottom-img mb-15">
               <img src={image_url} alt="" />
            </div>
            <div className="trend-bottom-cap">
               <h4><Link to="/details">{title}</Link></h4>
            </div>
         </div>
      </div>
   )
}

export default TrendingBottom