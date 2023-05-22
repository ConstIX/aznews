import React from 'react'
import { Link } from 'react-router-dom'
import { popular } from '../../../../data'

const PopularWidget = () => {
   return (
      <aside className="single_sidebar_widget popular_post_widget">
         <h3 className="widget_title">Recent Post</h3>
         {
            popular.map(obj =>
               <div key={obj.title} className="media post_item">
                  <img src={obj.image} alt="post" />
                  <div className="media-body">
                     <Link to={obj.link}>
                        <h3>{obj.title}</h3>
                     </Link>
                     <p>{obj.date}</p>
                  </div>
               </div>)
         }

      </aside>
   )
}

export default PopularWidget