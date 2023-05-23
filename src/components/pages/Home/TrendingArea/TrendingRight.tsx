import React from 'react'


type TrendingRightProps = { link: string, image_url: string, title: string, description: string }

const TrendingRight: React.FC<TrendingRightProps> = ({ link, image_url, title, description }) => {
   return (
      <div className="trand-right-single d-flex">
         <div className="trand-right-img">
            <img src={image_url} alt="" />
         </div>
         <div className="trand-right-cap">
            <span className="color_1">{title}</span>
            <h4><a href={link}>{description}</a></h4>
         </div>
      </div>
   )
}

export default TrendingRight