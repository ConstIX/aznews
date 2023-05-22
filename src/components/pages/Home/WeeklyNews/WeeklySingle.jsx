import React from 'react'

const WeeklySingle = ({ image, title, text, link }) => {
   return (
      <div className="weekly-single">
         <div className="weekly-img">
            <img src={image} alt="" />
         </div>
         <div className="weekly-caption">
            <span className="color1">{title}</span>
            <h4><a href={link}>{text}</a></h4>
         </div>
      </div>
   )
}

export default WeeklySingle