import React from 'react'
import { Link } from 'react-router-dom'

type CategoryBlockProps = {
   id: string,
   image_url: any,
   title: string
}
const CategoryBlock: React.FC<CategoryBlockProps> = ({ id, image_url, title }) => {
   return (
      <div className="col-lg-6 col-md-6">
         <div className="single-what-news mb-100">
            <div className="what-img">
               <img src={image_url} alt="" />
            </div>
            <div className="what-cap">
               <h4><Link to="#">{title}</Link></h4>
            </div>
         </div>
      </div>
   )
}

export default CategoryBlock