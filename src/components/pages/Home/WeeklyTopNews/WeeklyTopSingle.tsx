import React from 'react'
import { Link } from 'react-router-dom'

type WeeklyTopSingleProps = { id: string, image_url: any, title: string, pubDate: string }

const WeeklyTopSingle: React.FC<WeeklyTopSingleProps> = ({ id, image_url, title, pubDate }) => {
   return (
      <div className="weekly2-single">
         <div className="weekly2-img">
            <img src={image_url} alt="" />
         </div>
         <div className="weekly2-caption">
            <p>{pubDate}</p>
            <h4><Link to={`/details/${id}`}>{title}</Link></h4>
         </div>
      </div>
   )
}

export default WeeklyTopSingle