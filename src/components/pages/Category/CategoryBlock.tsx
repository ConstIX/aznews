import React from 'react'
import { Link } from 'react-router-dom'

import whatNews1 from '../../../assets/img/news/whatNews1.jpg'
import whatNews2 from '../../../assets/img/news/whatNews2.jpg'
import whatNews3 from '../../../assets/img/news/whatNews3.jpg'
import whatNews4 from '../../../assets/img/news/whatNews4.jpg'

const CategoryBlock = () => {
   return (
      <div className="col-lg-6 col-md-6">
         <div className="single-what-news mb-100">
            <div className="what-img">
               <img src={whatNews1} alt="" />
            </div>
            <div className="what-cap">
               <h4><Link to="#">Welcome To The Best Model Winner Contest</Link></h4>
            </div>
         </div>
      </div>
   )
}

export default CategoryBlock