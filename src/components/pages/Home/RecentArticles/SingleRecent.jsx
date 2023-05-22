import React from 'react'

const SingleRecent = ({ image, title, text, link }) => {
   return (
      <div className="single-recent mb-100">
         <div className="what-img">
            <img src={image} alt="" />
         </div>
         <div className="what-cap">
            <span className="color1">{title}</span>
            <h4><a href={link}>{text}</a></h4>
         </div>
      </div>
   )
}

export default SingleRecent