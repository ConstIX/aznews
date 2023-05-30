import React from 'react'
import { Link } from 'react-router-dom'


type TrendingRightProps = { id: string, link: string, image_url: string, title: string }

const TrendingRight: React.FC<TrendingRightProps> = ({ id, link, image_url, title }) => {
   return (
      <div className="trand-right-single d-flex">
         <div className="trand-right-img">
            <img src={image_url} alt="" />
         </div>
         <div className="trand-right-cap">
            <h4><Link to={`/details/${id}`}>{title}</Link></h4>
         </div>
      </div>
   )
}

export default TrendingRight