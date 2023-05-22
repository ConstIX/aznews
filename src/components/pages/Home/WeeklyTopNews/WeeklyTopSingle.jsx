import React from 'react'

const WeeklyTopSingle = ({ image, title, date, text, link }) => {
   return (
      <div className="weekly2-single">
         <div className="weekly2-img">
            <img src={image} alt="" />
         </div>
         <div className="weekly2-caption">
            <span className="color1">{title}</span>
            <p>{date}</p>
            <h4><a href={link}>{text}</a></h4>
         </div>
      </div>
   )
}

export default WeeklyTopSingle