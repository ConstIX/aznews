import React from 'react'
import { Link } from 'react-router-dom'

type WeeklySingleProps = { id: string, image_url: any, title: string }

const WeeklySingle: React.FC<WeeklySingleProps> = ({ id, image_url, title }) => {
   return (
      <div className="weekly-single">
         <div className="weekly-img">
            <img src={image_url} alt="" />
         </div>
         <div className="weekly-caption">
            <h4><Link to={`/details/${id}`}>{title}</Link></h4>
         </div>
      </div>
   )
}

export default WeeklySingle