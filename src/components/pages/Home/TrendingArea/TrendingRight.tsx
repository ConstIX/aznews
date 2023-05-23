import React from 'react'


type TrendingRightProps = { link: string, image_url: string, title: string }

const TrendingRight: React.FC<TrendingRightProps> = ({ link, image_url, title }) => {
   return (
      <div className="trand-right-single d-flex">
         <div className="trand-right-img">
            <img src={image_url} alt="" />
         </div>
         <div className="trand-right-cap">
            <h4><a href={link}>{title}</a></h4>
         </div>
      </div>
   )
}

export default TrendingRight