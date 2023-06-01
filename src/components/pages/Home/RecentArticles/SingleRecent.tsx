import React from 'react'
import { Link } from 'react-router-dom'

type SingleRecentProps = { image_url: any, title: string, id: string }

const SingleRecent: React.FC<SingleRecentProps> = ({ image_url, title, id }) => {
   return (
      <div className="single-recent mb-100">
         <div className="what-img">
            <img src={image_url} alt="" />
         </div>
         <div className="what-cap">
            <h4><Link to={`/details/${id}`}>{title}</Link></h4>
         </div>
      </div>
   )
}

export default SingleRecent